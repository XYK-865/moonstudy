///|
pub struct ReportResult {
  ok : Bool
  message : String
  markdown : String
} derive(ToJson, Debug)

///|
fn safe_markdown(value : String) -> String {
  value
  .replace_all(old="\\", new="\\\\")
  .replace_all(old="\r", new=" ")
  .replace_all(old="\n", new=" ")
  .replace_all(old="&", new="&amp;")
  .replace_all(old="<", new="&lt;")
  .replace_all(old=">", new="&gt;")
  .replace_all(old="*", new="\\*")
  .replace_all(old="_", new="\\_")
  .replace_all(old="[", new="\\[")
  .replace_all(old="]", new="\\]")
}

///|
/// Build an inspectable report with only records from Monday through today.
pub fn weekly_markdown(
  records : Array[StudyRecord],
  week_start : String,
  today : String,
) -> String {
  let weekly = records.filter(record => {
    record.date >= week_start && record.date <= today
  })
  weekly.sort_by((a, b) => a.date.compare(b.date))
  let mut minutes = 0
  let mut completed_count = 0
  for record in weekly {
    minutes = minutes + record.minutes
    if record.completed {
      completed_count = completed_count + 1
    }
  }
  let count = weekly.length()
  let completion_rate = if count == 0 {
    0
  } else {
    completed_count * 100 / count
  }
  let topics = topic_stats(weekly)
  let top_topic = if topics.length() == 0 { "暂无" } else { topics[0].topic }
  let buf = StringBuilder()
  buf.write_string("# 学习周报\n\n")
  buf.write_string("- 周期：")
  buf.write_string(week_start)
  buf.write_string(" 至 ")
  buf.write_string(today)
  buf.write_string("\n- 本周学习：")
  buf.write_string(minutes.to_string())
  buf.write_string(" 分钟\n- 学习记录：")
  buf.write_string(count.to_string())
  buf.write_string(" 条\n- 完成率：")
  buf.write_string(completion_rate.to_string())
  buf.write_string("%（仅本周记录）\n- 投入最多：")
  buf.write_string(safe_markdown(top_topic))
  buf.write_string("\n\n## 本周记录\n\n")
  if count == 0 {
    buf.write_string("本周暂无学习记录。\n")
  } else {
    for record in weekly {
      buf.write_string("- [")
      buf.write_string(if record.completed { "x" } else { " " })
      buf.write_string("] ")
      buf.write_string(record.date)
      buf.write_string(" · ")
      buf.write_string(safe_markdown(record.topic))
      buf.write_string(" · ")
      buf.write_string(record.minutes.to_string())
      buf.write_string(" 分钟")
      if record.note.length() > 0 {
        buf.write_string(" — ")
        buf.write_string(safe_markdown(record.note))
      }
      buf.write_string("\n")
    }
  }
  buf.to_string()
}

///|
pub fn report_from_storage(
  raw : String,
  week_start : String,
  today : String,
) -> ReportResult {
  let loaded = load_storage(raw)
  if !loaded.ok {
    return { ok: false, message: loaded.message, markdown: "", }
  }
  if !valid_iso_date(week_start) || !valid_iso_date(today) || week_start > today {
    return { ok: false, message: "周报日期范围无效", markdown: "", }
  }
  {
    ok: true,
    message: "周报已生成",
    markdown: weekly_markdown(loaded.records, week_start, today),
  }
}

///|
pub fn report_from_storage_json(
  raw : String,
  week_start : String,
  today : String,
) -> String {
  ToJson::to_json(report_from_storage(raw, week_start, today)).stringify()
}
