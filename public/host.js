import {
  activity_series,
  add_record,
  daily_report,
  delete_record,
  export_backup,
  moonstudy_ready,
  read_state,
  restore_backup,
  weekly_report,
} from "./moonstudy-core_v003.mjs";

const STORAGE_KEY = "moonstudy.records.v1";
const THEME_KEY = "moonstudy.theme.v1";
const form = document.getElementById("study-form");
const notice = document.getElementById("notice");
const backupRawButton = document.getElementById("backup-raw");
const exportDataButton = document.getElementById("export-data");
const chooseRestoreButton = document.getElementById("choose-restore");
const restoreFileInput = document.getElementById("restore-file");
const saveButton = document.getElementById("save");
const dateInput = document.getElementById("date");
const reportButton = document.getElementById("generate-report");
const reportTypeInput = document.getElementById("report-type");
const reportDateInput = document.getElementById("report-date");
const reportDateLabel = document.getElementById("report-date-label");
const downloadReportButton = document.getElementById("download-report");
const reportLabel = document.getElementById("report-label");
const reportPreviewTitle = document.getElementById("report-preview-title");
const reportOutput = document.getElementById("report-output");
const moreHistoryButton = document.getElementById("more-history");
const themeSelect = document.getElementById("theme-select");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
let historyLimit = 25;
let currentRecords = [];
let currentReportFilename = "";

function localDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return [year, month, day].join("-");
}

function shiftedDate(date, offset) {
  const shifted = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  shifted.setDate(shifted.getDate() + offset);
  return shifted;
}

function weekStart(date) {
  return localDate(shiftedDate(date, -((date.getDay() + 6) % 7)));
}

function showNotice(message) {
  notice.textContent = message;
  notice.hidden = !message;
}

function readRaw() {
  return localStorage.getItem(STORAGE_KEY) ?? "";
}

function triggerDownload(text, filename, mimeType) {
  const blob = new Blob([text], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadRaw() {
  try {
    triggerDownload(readRaw(), "moonstudy-unreadable-original.json", "application/json;charset=utf-8");
  } catch {
    showNotice("无法读取原始数据，请检查浏览器存储权限。");
  }
}

function readThemePreference() {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return ["light", "dark", "system"].includes(value) ? value : "system";
  } catch {
    return "system";
  }
}

function applyTheme(preference) {
  const resolved = preference === "system"
    ? (systemDark.matches ? "dark" : "light")
    : preference;
  document.documentElement.dataset.theme = resolved;
  document.querySelector('meta[name="theme-color"]').content = resolved === "dark"
    ? "#111915"
    : "#faf7f0";
}

function saveThemePreference(preference) {
  applyTheme(preference);
  try {
    localStorage.setItem(THEME_KEY, preference);
  } catch {
    showNotice("主题已经切换，但浏览器没有保存这项偏好。");
  }
}

function renderHistory(records) {
  const history = document.getElementById("history");
  const empty = document.getElementById("empty-history");
  currentRecords = records;
  history.replaceChildren();
  empty.hidden = records.length > 0;
  moreHistoryButton.hidden = records.length <= historyLimit;
  for (const record of [...records].reverse().slice(0, historyLimit)) {
    const item = document.createElement("li");
    const details = document.createElement("div");
    details.className = "details";
    const title = document.createElement("strong");
    title.textContent = record.topic;
    const subtitle = document.createElement("small");
    subtitle.textContent = [record.date, record.completed ? "已完成" : "未完成", record.note]
      .filter(Boolean).join(" · ");
    const duration = document.createElement("span");
    duration.className = "duration";
    duration.textContent = String(record.minutes) + " 分钟";
    const actions = document.createElement("div");
    actions.className = "row-actions";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "danger";
    remove.textContent = "删除";
    remove.setAttribute("aria-label", "删除 " + record.date + " 的 " + record.topic + " 记录");
    remove.addEventListener("click", () => removeRecord(record.id));
    details.append(title, subtitle);
    actions.append(duration, remove);
    item.append(details, actions);
    history.append(item);
  }
}

function renderTopics(topics) {
  const list = document.getElementById("topics");
  document.getElementById("empty-topics").hidden = topics.length > 0;
  list.replaceChildren();
  for (const topic of topics) {
    const item = document.createElement("li");
    const name = document.createElement("strong");
    name.textContent = topic.topic;
    const amount = document.createElement("span");
    amount.textContent = String(topic.minutes) + " 分钟 · " +
      String(topic.record_count) + " 条";
    item.append(name, amount);
    list.append(item);
  }
}

function renderBarChart(dayMap, now) {
  const chart = document.getElementById("bar-chart");
  const days = [];
  for (let offset = -6; offset <= 0; offset += 1) {
    const date = localDate(shiftedDate(now, offset));
    days.push(dayMap.get(date) ?? { date, minutes: 0, completed_count: 0 });
  }
  const maximum = Math.max(1, ...days.map(day => day.minutes));
  chart.replaceChildren();
  for (const day of days) {
    const column = document.createElement("div");
    column.className = "bar-column";
    column.title = day.date + " · " + day.minutes + " 分钟";
    const value = document.createElement("strong");
    value.textContent = String(day.minutes);
    const track = document.createElement("div");
    track.className = "bar-track";
    const fill = document.createElement("i");
    fill.style.height = (day.minutes === 0 ? 0 : Math.max(8, day.minutes * 100 / maximum)) + "%";
    track.append(fill);
    const label = document.createElement("span");
    label.textContent = day.date.slice(5);
    column.append(value, track, label);
    chart.append(column);
  }
}

function activityGridRange(now) {
  const end = shiftedDate(now, 6 - now.getDay());
  return { start: shiftedDate(end, -370), end };
}

function renderHeatmap(dayMap, now, range) {
  const heatmap = document.getElementById("heatmap");
  const monthLabels = document.getElementById("heatmap-months");
  heatmap.replaceChildren();
  monthLabels.replaceChildren();
  let previousMonth = -1;
  for (let week = 0; week < 53; week += 1) {
    const markerDate = shiftedDate(range.start, week * 7 + 3);
    if (markerDate.getMonth() !== previousMonth) {
      const label = document.createElement("span");
      label.textContent = String(markerDate.getMonth() + 1) + "月";
      label.style.gridColumn = String(week + 1);
      monthLabels.append(label);
      previousMonth = markerDate.getMonth();
    }
  }
  for (let cursor = new Date(range.start); cursor <= range.end; cursor = shiftedDate(cursor, 1)) {
    const date = localDate(cursor);
    const future = cursor > now;
    const day = dayMap.get(date) ?? { minutes: 0, record_count: 0, completed_count: 0 };
    const cell = document.createElement("i");
    const level = future ? 0 : Math.min(4, day.completed_count);
    cell.dataset.level = String(level);
    if (future) {
      cell.classList.add("future");
      cell.title = date + " · 尚未到达";
    } else {
      cell.title = date + " · 完成 " + day.completed_count + " 条 · 学习 " + day.minutes + " 分钟";
    }
    heatmap.append(cell);
  }
}

function renderInsights(raw, now) {
  const range = activityGridRange(now);
  const result = JSON.parse(activity_series(raw, localDate(range.start), localDate(now)));
  if (!result.ok) {
    showNotice(result.message);
    renderBarChart(new Map(), now);
    renderHeatmap(new Map(), now, range);
    return;
  }
  const dayMap = new Map(result.days.map(day => [day.date, day]));
  renderBarChart(dayMap, now);
  renderHeatmap(dayMap, now, range);
}

function resetReportPreview() {
  reportLabel.hidden = true;
  downloadReportButton.hidden = true;
  reportOutput.value = "";
  currentReportFilename = "";
}

function setAppControls(enabled) {
  saveButton.disabled = !enabled;
  reportButton.disabled = !enabled;
  exportDataButton.disabled = !enabled;
}

function render() {
  let raw;
  try {
    raw = readRaw();
  } catch {
    showNotice("浏览器存储不可用，暂时不能保存记录。");
    setAppControls(false);
    chooseRestoreButton.disabled = true;
    renderHistory([]);
    renderTopics([]);
    return;
  }
  const now = new Date();
  const state = JSON.parse(read_state(raw, localDate(now), weekStart(now)));
  if (!state.ok) {
    showNotice(state.message + "。请下载原始数据备份，当前页面不会覆盖它。");
    backupRawButton.hidden = false;
    setAppControls(false);
    chooseRestoreButton.disabled = false;
    renderHistory([]);
    renderTopics([]);
    return;
  }
  showNotice("");
  setAppControls(true);
  chooseRestoreButton.disabled = false;
  backupRawButton.hidden = true;
  dateInput.max = localDate(now);
  reportDateInput.max = localDate(now);
  resetReportPreview();
  const summary = state.summary;
  document.getElementById("today-minutes").textContent = String(summary.today_minutes);
  document.getElementById("week-minutes").textContent = String(summary.week_minutes);
  document.getElementById("total-minutes").textContent = String(summary.total_minutes);
  document.getElementById("completion-rate").textContent = String(summary.completion_rate) + "%";
  const topTopic = document.getElementById("top-topic");
  topTopic.textContent = summary.top_topic;
  topTopic.title = summary.top_topic;
  document.getElementById("record-count").textContent = String(summary.record_count) + " 条记录";
  renderHistory(state.records);
  renderTopics(state.topics);
  renderInsights(raw, now);
}

function removeRecord(id) {
  if (!window.confirm("确定删除这条学习记录吗？删除后无法在本页面撤销。")) {
    return;
  }
  let raw;
  try {
    raw = readRaw();
  } catch {
    showNotice("浏览器存储不可用，无法删除记录。");
    return;
  }
  const result = JSON.parse(delete_record(raw, id));
  if (!result.ok) {
    showNotice(result.message);
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, result.storage_json);
  } catch {
    showNotice("浏览器存储写入失败，记录没有删除。");
    return;
  }
  render();
}

function updateReportControls() {
  const daily = reportTypeInput.value === "daily";
  reportDateLabel.hidden = !daily;
  reportButton.textContent = daily ? "生成日报" : "生成周报";
  resetReportPreview();
}

function generateReport() {
  let raw;
  try {
    raw = readRaw();
  } catch {
    showNotice("浏览器存储不可用，无法生成报告。");
    return;
  }
  const now = new Date();
  const daily = reportTypeInput.value === "daily";
  const reportDate = reportDateInput.value;
  const result = JSON.parse(daily
    ? daily_report(raw, reportDate)
    : weekly_report(raw, weekStart(now), localDate(now)));
  if (!result.ok) {
    showNotice(result.message);
    return;
  }
  showNotice("");
  reportOutput.value = result.markdown;
  reportPreviewTitle.textContent = daily ? "日报预览" : "周报预览";
  reportLabel.hidden = false;
  downloadReportButton.hidden = false;
  currentReportFilename = daily
    ? "moonstudy-daily-" + reportDate + ".md"
    : "moonstudy-weekly-" + localDate(now) + ".md";
}

function exportData() {
  let raw;
  try {
    raw = readRaw();
  } catch {
    showNotice("浏览器存储不可用，无法导出备份。");
    return;
  }
  const result = JSON.parse(export_backup(raw));
  if (!result.ok) {
    showNotice(result.message);
    return;
  }
  triggerDownload(
    result.storage_json + "\n",
    "moonstudy-backup-" + localDate(new Date()) + ".json",
    "application/json;charset=utf-8",
  );
  showNotice("完整备份已下载。请把文件保存在你找得到的位置。");
}

async function restoreData(file) {
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    showNotice("备份文件超过 5 MB，已停止读取。");
    return;
  }
  let candidate;
  try {
    candidate = await file.text();
  } catch {
    showNotice("无法读取这个备份文件。");
    return;
  }
  const result = JSON.parse(restore_backup(candidate));
  if (!result.ok) {
    showNotice("备份未导入：" + result.message);
    return;
  }
  const count = JSON.parse(result.storage_json).records.length;
  if (!window.confirm("备份包含 " + count + " 条记录。恢复会替换当前学习记录，是否继续？")) {
    showNotice("已取消恢复，当前数据没有变化。");
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, result.storage_json);
  } catch {
    showNotice("浏览器存储写入失败，备份没有恢复。");
    return;
  }
  historyLimit = 25;
  render();
  showNotice("备份恢复完成，共 " + count + " 条记录。");
}

const today = localDate(new Date());
dateInput.value = today;
dateInput.max = today;
reportDateInput.value = today;
reportDateInput.max = today;
const initialTheme = readThemePreference();
themeSelect.value = initialTheme;
applyTheme(initialTheme);
systemDark.addEventListener("change", () => {
  if (themeSelect.value === "system") applyTheme("system");
});
themeSelect.addEventListener("change", () => saveThemePreference(themeSelect.value));
backupRawButton.addEventListener("click", downloadRaw);
exportDataButton.addEventListener("click", exportData);
chooseRestoreButton.addEventListener("click", () => restoreFileInput.click());
restoreFileInput.addEventListener("change", async () => {
  await restoreData(restoreFileInput.files?.[0]);
  restoreFileInput.value = "";
});
moreHistoryButton.addEventListener("click", () => {
  historyLimit += 25;
  renderHistory(currentRecords);
});
reportTypeInput.addEventListener("change", updateReportControls);
reportButton.addEventListener("click", generateReport);
downloadReportButton.addEventListener("click", () => {
  triggerDownload(reportOutput.value, currentReportFilename, "text/markdown;charset=utf-8");
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let raw;
  try {
    raw = readRaw();
  } catch {
    showNotice("浏览器存储不可用，无法保存记录。");
    return;
  }
  const now = localDate(new Date());
  const minutes = Number(document.getElementById("minutes").value);
  if (!Number.isInteger(minutes)) {
    showNotice("学习时长必须是整数分钟。");
    return;
  }
  const result = JSON.parse(add_record(
    raw,
    crypto.randomUUID(),
    dateInput.value,
    document.getElementById("topic").value,
    minutes,
    document.getElementById("completed").value === "true",
    document.getElementById("note").value,
    now,
  ));
  if (!result.ok) {
    showNotice(result.message);
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, result.storage_json);
  } catch {
    showNotice("浏览器存储写入失败，记录没有保存。请检查剩余空间或存储权限。");
    return;
  }
  form.reset();
  dateInput.value = now;
  render();
  showNotice("记录已保存。");
});

updateReportControls();
console.info(moonstudy_ready());
render();
