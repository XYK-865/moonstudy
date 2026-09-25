///|
/// Thin browser capability layer for the Rabbita UI (v004).
///
/// Only raw browser access lives here: storage, confirmation dialogs, notices,
/// downloads and file reads. Statistics and validation stay in the `moonstudy`
/// core package. Keep this file free of business logic.

///|
/// Probe storage before the application reads it. A browser policy failure is
/// different from a damaged envelope and must not be treated as empty data.
extern "js" fn storage_readable(key : String) -> Bool = "(key) => { try { window.localStorage.getItem(key); return true; } catch (_) { return false; } }"

///|
/// Read one localStorage entry; missing keys return an empty string so the
/// core package can apply its own "no data yet" rule.
extern "js" fn read_local(key : String) -> String = "(key) => { const value = window.localStorage.getItem(key); return value === null ? '' : value; }"

///|
/// Write one localStorage entry; false means the browser refused the write.
extern "js" fn write_local(key : String, value : String) -> Bool = "(key, value) => { try { window.localStorage.setItem(key, value); return true; } catch (error) { return false; } }"

///|
/// Calendar and identity primitives belong to the browser boundary; MoonBit
/// still owns validation, storage encoding and all statistics.
extern "js" fn today_iso() -> String = "() => { const d = new Date(); const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, '0'); const day = String(d.getDate()).padStart(2, '0'); return `${y}-${m}-${day}`; }"

///|
extern "js" fn week_start_iso() -> String = "() => { const d = new Date(); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, '0'); const day = String(d.getDate()).padStart(2, '0'); return `${y}-${m}-${day}`; }"

///|
extern "js" fn week_start_for_iso(date : String) -> String = "(date) => { const [y, m, d] = date.split('-').map(Number); const value = new Date(y, m - 1, d); value.setDate(value.getDate() - ((value.getDay() + 6) % 7)); const yy = value.getFullYear(); const mm = String(value.getMonth() + 1).padStart(2, '0'); const dd = String(value.getDate()).padStart(2, '0'); return `${yy}-${mm}-${dd}`; }"

///|
extern "js" fn shift_date_iso(date : String, offset : Int) -> String = "(date, offset) => { const [y, m, d] = date.split('-').map(Number); const value = new Date(y, m - 1, d); value.setDate(value.getDate() + offset); const yy = value.getFullYear(); const mm = String(value.getMonth() + 1).padStart(2, '0'); const dd = String(value.getDate()).padStart(2, '0'); return `${yy}-${mm}-${dd}`; }"

///|
extern "js" fn short_date_iso(date : String) -> String = "(date) => date.slice(5)"

///|
extern "js" fn random_uuid() -> String = "() => crypto.randomUUID()"

///|
extern "js" fn form_date() -> String = "() => document.getElementById('date')?.value ?? ''"

///|
extern "js" fn form_category() -> String = "() => { const choice = document.getElementById('category-choice')?.value ?? ''; return choice === 'custom' ? (document.getElementById('custom-category')?.value ?? '') : choice; }"

///|
extern "js" fn form_topic() -> String = "() => document.getElementById('topic')?.value ?? ''"

///|
extern "js" fn form_minutes() -> Int = "() => { const value = Number(document.getElementById('minutes')?.value ?? ''); return Number.isInteger(value) ? value : 0; }"

///|
extern "js" fn form_completed() -> Bool = "() => document.getElementById('completed')?.value === 'true'"

///|
extern "js" fn form_note() -> String = "() => document.getElementById('note')?.value ?? ''"

///|
extern "js" fn reset_form(date : String) -> Unit = "(date) => { const form = document.getElementById('study-form'); if (form !== null) form.reset(); const input = document.getElementById('date'); if (input !== null) input.value = date; }"

///|
extern "js" fn download_text(
  text : String,
  filename : String,
  mime : String,
) -> Bool = "(text, filename, mime) => { try { const blob = new Blob([text], { type: mime }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = filename; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); return true; } catch (_) { return false; } }"

///|
extern "js" fn choose_restore_file() -> Unit = "() => document.getElementById('restore-file')?.click()"

///|
/// FileReader is asynchronous. It stores only the raw browser result and then
/// clicks a hidden Rabbita-owned button so validation stays in MoonBit.
extern "js" fn begin_restore_read() -> Unit = "() => { const input = document.getElementById('restore-file'); const file = input?.files?.[0]; window.__moonstudyRestoreStatus = 'none'; window.__moonstudyRestoreText = ''; if (!file) return; if (file.size > 5 * 1024 * 1024) { window.__moonstudyRestoreStatus = 'too-large'; input.value = ''; document.getElementById('restore-ready')?.click(); return; } file.text().then((text) => { window.__moonstudyRestoreStatus = 'ok'; window.__moonstudyRestoreText = text; }).catch(() => { window.__moonstudyRestoreStatus = 'read-error'; }).finally(() => { input.value = ''; document.getElementById('restore-ready')?.click(); }); }"

///|
extern "js" fn restore_read_status() -> String = "() => window.__moonstudyRestoreStatus ?? 'none'"

///|
extern "js" fn restore_read_text() -> String = "() => window.__moonstudyRestoreText ?? ''"

///|
extern "js" fn clear_restore_read() -> Unit = "() => { window.__moonstudyRestoreStatus = 'none'; window.__moonstudyRestoreText = ''; }"

///|
extern "js" fn confirm_restore(count : Int) -> Bool = "(count) => window.confirm(`备份包含 ${count} 条记录。恢复会替换当前学习记录，是否继续？`)"

///|
extern "js" fn limit_date_inputs(today : String) -> Unit = "(today) => { setTimeout(() => { for (const id of ['date', 'report-date']) { const node = document.getElementById(id); if (node !== null && node.type === 'date') node.max = today; } }, 32); }"

///|
extern "js" fn week_value_for_iso(date : String) -> String = "(date) => { const [y, m, d] = date.split('-').map(Number); const value = new Date(Date.UTC(y, m - 1, d)); const day = value.getUTCDay() || 7; value.setUTCDate(value.getUTCDate() + 4 - day); const yearStart = new Date(Date.UTC(value.getUTCFullYear(), 0, 1)); const week = Math.ceil((((value - yearStart) / 86400000) + 1) / 7); return `${value.getUTCFullYear()}-W${String(week).padStart(2, '0')}`; }"

///|
extern "js" fn week_start_for_value(value : String) -> String = "(value) => { const parts = value.split('-W'); if (parts.length !== 2) return ''; const year = Number(parts[0]); const week = Number(parts[1]); if (!Number.isInteger(year) || !Number.isInteger(week) || week < 1 || week > 53) return ''; const jan4 = new Date(Date.UTC(year, 0, 4)); const monday = new Date(jan4); monday.setUTCDate(jan4.getUTCDate() - ((jan4.getUTCDay() + 6) % 7) + (week - 1) * 7); return `${monday.getUTCFullYear()}-${String(monday.getUTCMonth() + 1).padStart(2, '0')}-${String(monday.getUTCDate()).padStart(2, '0')}`; }"

///|
extern "js" fn week_full_end_for_iso(date : String) -> String = "(date) => { const [y, m, d] = date.split('-').map(Number); const value = new Date(y, m - 1, d); value.setDate(value.getDate() - ((value.getDay() + 6) % 7) + 6); const yy = value.getFullYear(); const mm = String(value.getMonth() + 1).padStart(2, '0'); const dd = String(value.getDate()).padStart(2, '0'); return `${yy}-${mm}-${dd}`; }"

///|
extern "js" fn read_theme() -> String = "() => { try { const value = localStorage.getItem('moonstudy.theme.v1'); return ['light', 'dark', 'system'].includes(value) ? value : 'system'; } catch (_) { return 'system'; } }"

///|
extern "js" fn apply_theme(preference : String) -> Unit = "(preference) => { const dark = matchMedia('(prefers-color-scheme: dark)').matches; const resolved = preference === 'system' ? (dark ? 'dark' : 'light') : preference; document.documentElement.dataset.theme = resolved; const meta = document.querySelector('meta[name=\"theme-color\"]'); if (meta !== null) meta.content = resolved === 'dark' ? '#111915' : '#faf7f0'; }"

///|
extern "js" fn write_theme(preference : String) -> Bool = "(preference) => { try { localStorage.setItem('moonstudy.theme.v1', preference); return true; } catch (_) { return false; } }"

///|
extern "js" fn watch_system_theme() -> Unit = "() => { const media = matchMedia('(prefers-color-scheme: dark)'); media.addEventListener('change', () => { let preference = 'system'; try { preference = localStorage.getItem('moonstudy.theme.v1') ?? 'system'; } catch (_) {} if (preference === 'system') { document.documentElement.dataset.theme = media.matches ? 'dark' : 'light'; } }); }"

///|
/// Second confirmation before deleting a record, keeping the v003 wording.
extern "js" fn confirm_delete() -> Bool = "() => window.confirm('确定删除这条学习记录吗？删除后无法在本页面撤销。')"

///|
/// The notice element stays outside the virtual DOM so both layers can use it
/// without overwriting each other.
extern "js" fn show_notice(message : String) -> Unit = "(message) => { const node = document.getElementById('notice'); if (node === null) return; node.textContent = message; node.hidden = message === ''; }"
