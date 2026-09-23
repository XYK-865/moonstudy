///|
/// Thin browser capability layer for the Rabbita UI (v004).
///
/// Only raw browser access lives here: storage reads, file download and the
/// browser's local date. Statistics and validation stay in the `moonstudy`
/// core package. Keep this file free of business logic.

///|
/// Read one localStorage entry; missing keys return an empty string so the
/// core package can apply its own "no data yet" rule.
extern "js" fn read_local(key : String) -> String = "(key) => { const value = window.localStorage.getItem(key); return value === null ? '' : value; }"

///|
/// Browser-local date as YYYY-MM-DD.
extern "js" fn today_local() -> String = "() => { const d = new Date(); const pad = (n) => String(n).padStart(2, '0'); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }"

///|
/// Monday of the browser's current week as YYYY-MM-DD.
extern "js" fn week_start_local() -> String = "() => { const d = new Date(); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); const pad = (n) => String(n).padStart(2, '0'); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }"
