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

///|
#export_name("daily_report")
pub fn daily_report(raw : String, date : String) -> String {
  @study.daily_report_from_storage_json(raw, date)
}

///|
#export_name("activity_series")
pub fn activity_series(
  raw : String,
  start_date : String,
  end_date : String,
) -> String {
  @study.activity_from_storage_json(raw, start_date, end_date)
}

///|
#export_name("export_backup")
pub fn export_backup(raw : String) -> String {
  @study.export_storage_json(raw)
}

///|
#export_name("restore_backup")
pub fn restore_backup(candidate : String) -> String {
  @study.restore_storage_json(candidate)
}

///|
#export_name("week_comparison")
pub fn week_comparison(
  raw : String,
  week_start : String,
  today : String,
) -> String {
  @study.compare_weeks_json(raw, week_start, today)
}
