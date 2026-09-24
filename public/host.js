import { export_backup, moonstudy_ready, read_state, restore_backup } from "./moonstudy-core_v004.mjs";

const STORAGE_KEY = "moonstudy.records.v1";
const notice = document.getElementById("notice");
const backupRawButton = document.getElementById("backup-raw");
const exportDataButton = document.getElementById("export-data");
const chooseRestoreButton = document.getElementById("choose-restore");
const restoreFileInput = document.getElementById("restore-file");
const saveButton = document.getElementById("save");
const dateInput = document.getElementById("date");
const reportButton = document.getElementById("generate-report");
const reportDateInput = document.getElementById("report-date");

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
    return;
  }
  const now = new Date();
  const state = JSON.parse(read_state(raw, localDate(now), weekStart(now)));
  if (!state.ok) {
    showNotice(state.message + "。请下载原始数据备份，当前页面不会覆盖它。");
    backupRawButton.hidden = false;
    setAppControls(false);
    chooseRestoreButton.disabled = false;
    return;
  }
  showNotice("");
  setAppControls(true);
  chooseRestoreButton.disabled = false;
  backupRawButton.hidden = true;
  dateInput.max = localDate(now);
  reportDateInput.max = localDate(now);
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
  render();
  document.getElementById("app-refresh")?.click();
  showNotice("备份恢复完成，共 " + count + " 条记录。");
}

const today = localDate(new Date());
dateInput.value = today;
dateInput.max = today;
reportDateInput.value = today;
reportDateInput.max = today;
backupRawButton.addEventListener("click", downloadRaw);
exportDataButton.addEventListener("click", exportData);
chooseRestoreButton.addEventListener("click", () => restoreFileInput.click());
restoreFileInput.addEventListener("change", async () => {
  await restoreData(restoreFileInput.files?.[0]);
  restoreFileInput.value = "";
});
// MoonBit/Rabbita owns form, overview, charts, comparison, theme and reports.
// This compatibility layer now keeps only backup/recovery and damaged-data controls.
window.addEventListener("moonstudy:data-changed", () => render());
console.info(moonstudy_ready());
render();
