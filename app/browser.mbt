///|
/// Thin browser capability layer for the Rabbita UI (v004).
///
/// Only raw browser access lives here: storage, confirmation dialogs, notices
/// and the page-level event bridge. Statistics and validation stay in the
/// `moonstudy` core package. Keep this file free of business logic.

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
extern "js" fn shift_date_iso(date : String, offset : Int) -> String = "(date, offset) => { const [y, m, d] = date.split('-').map(Number); const value = new Date(y, m - 1, d); value.setDate(value.getDate() + offset); const yy = value.getFullYear(); const mm = String(value.getMonth() + 1).padStart(2, '0'); const dd = String(value.getDate()).padStart(2, '0'); return `${yy}-${mm}-${dd}`; }"

///|
extern "js" fn short_date_iso(date : String) -> String = "(date) => date.slice(5)"

///|
extern "js" fn activity_end_iso() -> String = "() => { const d = new Date(); d.setDate(d.getDate() + (6 - d.getDay())); const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2, '0'); const day = String(d.getDate()).padStart(2, '0'); return `${y}-${m}-${day}`; }"

///|
extern "js" fn random_uuid() -> String = "() => crypto.randomUUID()"

///|
extern "js" fn form_date() -> String = "() => document.getElementById('date')?.value ?? ''"

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
/// Second confirmation before deleting a record, keeping the v003 wording.
extern "js" fn confirm_delete() -> Bool = "() => window.confirm('确定删除这条学习记录吗？删除后无法在本页面撤销。')"

///|
/// The notice element stays outside the virtual DOM so both layers can use it
/// without overwriting each other.
extern "js" fn show_notice(message : String) -> Unit = "(message) => { const node = document.getElementById('notice'); if (node === null) return; node.textContent = message; node.hidden = message === ''; }"

///|
/// Tell the JavaScript layer (metrics, charts, report, backup) that the stored
/// data changed.
extern "js" fn notify_data_changed() -> Unit = "() => { window.dispatchEvent(new CustomEvent('moonstudy:data-changed')); }"

///|
/// Announce that the app has mounted, so the JavaScript layer can run its first
/// render knowing the app's markup exists.
extern "js" fn notify_ready() -> Unit = "() => { setTimeout(() => window.dispatchEvent(new CustomEvent('moonstudy:app-ready')), 0); }"
