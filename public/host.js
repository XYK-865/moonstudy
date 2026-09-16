import {
  add_record,
  delete_record,
  moonstudy_ready,
  read_state,
  weekly_report,
} from "./moonstudy-core_v002.mjs";

const STORAGE_KEY = "moonstudy.records.v1";
const form = document.getElementById("study-form");
const notice = document.getElementById("notice");
const backupButton = document.getElementById("backup-raw");
const saveButton = document.getElementById("save");
const dateInput = document.getElementById("date");
const reportButton = document.getElementById("generate-report");
const downloadReportButton = document.getElementById("download-report");
const reportLabel = document.getElementById("report-label");
const reportOutput = document.getElementById("report-output");
const moreHistoryButton = document.getElementById("more-history");
let historyLimit = 25;
let currentRecords = [];

function localDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return [year, month, day].join("-");
}

function weekStart(date) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  return localDate(monday);
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
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadRaw() {
  try {
    triggerDownload(
      readRaw(),
      "moonstudy-original-data.json",
      "application/json;charset=utf-8",
    );
  } catch {
    showNotice("无法读取原始数据，请检查浏览器存储权限。");
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

function render() {
  let raw;
  try {
    raw = readRaw();
  } catch {
    showNotice("浏览器存储不可用，暂时不能保存记录。");
    saveButton.disabled = true;
    reportButton.disabled = true;
    renderHistory([]);
    renderTopics([]);
    return;
  }
  const now = new Date();
  const state = JSON.parse(read_state(raw, localDate(now), weekStart(now)));
  if (!state.ok) {
    showNotice(state.message + "。请下载原始数据备份，当前页面不会覆盖它。");
    backupButton.hidden = false;
    saveButton.disabled = true;
    reportButton.disabled = true;
    renderHistory([]);
    renderTopics([]);
    return;
  }
  saveButton.disabled = false;
  reportButton.disabled = false;
  backupButton.hidden = true;
  dateInput.max = localDate(now);
  reportLabel.hidden = true;
  downloadReportButton.hidden = true;
  reportOutput.value = "";
  const summary = state.summary;
  document.getElementById("today-minutes").textContent = String(summary.today_minutes);
  document.getElementById("week-minutes").textContent = String(summary.week_minutes);
  document.getElementById("total-minutes").textContent = String(summary.total_minutes);
  document.getElementById("completion-rate").textContent = String(summary.completion_rate) + "%";
  document.getElementById("top-topic").textContent = summary.top_topic;
  document.getElementById("record-count").textContent = String(summary.record_count) + " 条记录";
  renderHistory(state.records);
  renderTopics(state.topics);
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
  showNotice("");
  render();
}

function generateReport() {
  let raw;
  try {
    raw = readRaw();
  } catch {
    showNotice("浏览器存储不可用，无法生成周报。");
    return;
  }
  const now = new Date();
  const result = JSON.parse(weekly_report(raw, weekStart(now), localDate(now)));
  if (!result.ok) {
    showNotice(result.message);
    return;
  }
  showNotice("");
  reportOutput.value = result.markdown;
  reportLabel.hidden = false;
  downloadReportButton.hidden = false;
}

const today = localDate(new Date());
dateInput.value = today;
dateInput.max = today;
backupButton.addEventListener("click", downloadRaw);
moreHistoryButton.addEventListener("click", () => {
  historyLimit += 25;
  renderHistory(currentRecords);
});
reportButton.addEventListener("click", generateReport);
downloadReportButton.addEventListener("click", () => {
  triggerDownload(
    reportOutput.value,
    "moonstudy-weekly-" + localDate(new Date()) + ".md",
    "text/markdown;charset=utf-8",
  );
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
  showNotice("");
  form.reset();
  dateInput.value = now;
  render();
});

console.info(moonstudy_ready());
render();
