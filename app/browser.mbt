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
