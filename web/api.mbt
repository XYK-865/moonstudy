///|
/// Browser-facing smoke test. This package will later expose JSON contracts.
#export_name("moonstudy_ready")
pub fn moonstudy_ready() -> String {
  "MoonStudy MoonBit 已加载"
}

///|
#export_name("empty_total")
pub fn empty_total(today : String, week_start : String) -> Int {
  @study.summarize([], today, week_start).total_minutes
}

///|
#export_name("read_state")
pub fn read_state(raw : String, today : String, week_start : String) -> String {
  @study.view_state_json(raw, today, week_start)
}

///|
#export_name("add_record")
pub fn add_record(
  raw : String,
  id : String,
  date : String,
  topic : String,
  minutes : Int,
  completed : Bool,
  note : String,
  today : String,
) -> String {
  @study.add_to_storage_json(
    raw, id, date, topic, minutes, completed, note, today,
  )
}

///|
#export_name("delete_record")
pub fn delete_record(raw : String, id : String) -> String {
  @study.delete_from_storage_json(raw, id)
}

///|
#export_name("weekly_report")
pub fn weekly_report(
  raw : String,
  week_start : String,
  today : String,
) -> String {
  @study.report_from_storage_json(raw, week_start, today)
}
