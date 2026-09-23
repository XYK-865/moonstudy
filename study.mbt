///|
/// A single learning activity entered by the user.
pub struct StudyRecord {
  id : String
  date : String
  topic : String
  minutes : Int
  completed : Bool
  note : String
} derive(Eq, Debug, ToJson, FromJson)

///|
pub extend StudyRecord with Eq::{equal, not_equal}

///|
pub extend StudyRecord with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend StudyRecord with ToJson::{to_json}

///|
pub extend StudyRecord with @moonbitlang/core/json.FromJson::{from_json}

///|
/// Values displayed on the dashboard.
pub struct StudySummary {
  today_minutes : Int
  week_minutes : Int
  total_minutes : Int
  record_count : Int
  completed_count : Int
  completion_rate : Int
  top_topic : String
} derive(Eq, Debug, ToJson)

///|
pub extend StudySummary with Eq::{equal, not_equal}

///|
pub extend StudySummary with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend StudySummary with ToJson::{to_json}

///|
/// Aggregation shown beside the all-time dashboard.
pub struct TopicStat {
  topic : String
  minutes : Int
  record_count : Int
} derive(Eq, Debug, ToJson)

///|
pub extend TopicStat with Eq::{equal, not_equal}

///|
pub extend TopicStat with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend TopicStat with ToJson::{to_json}

///|
/// Per-day values used by the browser visualizations.
pub struct DayStat {
  date : String
  minutes : Int
  record_count : Int
  completed_count : Int
} derive(Eq, Debug, ToJson)

///|
pub extend DayStat with Eq::{equal, not_equal}

///|
pub extend DayStat with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend DayStat with ToJson::{to_json}

///|
priv struct TopicTotal {
  topic : String
  minutes : Int
  record_count : Int
  first_index : Int
}

///|
/// Construct a normalized record. Validation remains a separate step.
pub fn make_record(
  id : String,
  date : String,
  topic : String,
  minutes : Int,
  completed : Bool,
  note : String,
) -> StudyRecord {
  {
    id,
    date,
    topic: topic.trim().to_owned(),
    minutes,
    completed,
    note: note.trim().to_owned(),
  }
}

///|
fn date_part(date : String, start : Int, end : Int) -> Int {
  let mut value = 0
  let mut index = start
  while index < end {
    value = value * 10 + date[index].to_int() - '0'.to_int()
    index = index + 1
  }
  value
}

///|
fn valid_iso_date(date : String) -> Bool {
  if date.length() != 10 || date[4] != '-' || date[7] != '-' {
    return false
  }
  let mut index = 0
  while index < 10 {
    if index != 4 && index != 7 {
      let code = date[index].to_int()
      if code < '0'.to_int() || code > '9'.to_int() {
        return false
      }
    }
    index = index + 1
  }
  let year = date_part(date, 0, 4)
  let month = date_part(date, 5, 7)
  let day = date_part(date, 8, 10)
  if year == 0 || month < 1 || month > 12 || day < 1 {
    return false
  }
  let leap_year = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
  let days_in_month = match month {
    2 => if leap_year { 29 } else { 28 }
    4 | 6 | 9 | 11 => 30
    _ => 31
  }
  day <= days_in_month
}

///|
/// Validate fields that are independent of the browser UI.
pub fn validate_record(record : StudyRecord) -> String? {
  if record.id.length() == 0 {
    Some("记录编号不能为空")
  } else if !valid_iso_date(record.date) {
    Some("日期必须是真实的 YYYY-MM-DD 日期")
  } else if record.topic.trim().to_owned().length() == 0 {
    Some("请填写学习内容")
  } else if record.topic.length() > 100 {
    Some("学习内容不能超过 100 个字符")
  } else if record.note.length() > 500 {
    Some("备注不能超过 500 个字符")
  } else if record.minutes <= 0 {
    Some("学习时长必须大于 0 分钟")
  } else if record.minutes > 1440 {
    Some("单条学习时长不能超过 1440 分钟")
  } else {
    None
  }
}

///|
fn add_topic_minutes(
  totals : Array[TopicTotal],
  positions : Map[String, Int],
  topic : String,
  minutes : Int,
) -> Unit {
  if positions.get(topic) is Some(index) {
    let current = totals[index]
    totals[index] = {
      topic,
      minutes: current.minutes + minutes,
      record_count: current.record_count + 1,
      first_index: current.first_index,
    }
  } else {
    let index = totals.length()
    positions.set(topic, index)
    totals.push({ topic, minutes, record_count: 1, first_index: index, })
  }
}

///|
fn find_top_topic(totals : Array[TopicTotal]) -> String {
  if totals.length() == 0 {
    return "暂无"
  }
  let mut best_topic = totals[0].topic
  let mut best_minutes = totals[0].minutes
  for total in totals {
    if total.minutes > best_minutes {
      best_topic = total.topic
      best_minutes = total.minutes
    }
  }
  best_topic
}

///|
/// Return all topics by time spent; equal totals keep first-seen order.
pub fn topic_stats(records : Array[StudyRecord]) -> Array[TopicStat] {
  let totals : Array[TopicTotal] = []
  let positions : Map[String, Int] = Map([])
  for record in records {
    add_topic_minutes(totals, positions, record.topic, record.minutes)
  }
  totals.sort_by((a, b) => {
    if a.minutes > b.minutes {
      -1
    } else if a.minutes < b.minutes {
      1
    } else {
      a.first_index - b.first_index
    }
  })
  let result : Array[TopicStat] = []
  for total in totals {
    result.push({
      topic: total.topic,
      minutes: total.minutes,
      record_count: total.record_count,
    })
  }
  result
}

///|
/// Aggregate records inside an inclusive ISO-date range. Only dates containing
/// records are returned; the browser fills visual zero-days without inventing
/// any non-zero business values.
pub fn activity_stats(
  records : Array[StudyRecord],
  start_date : String,
  end_date : String,
) -> Array[DayStat] {
  let result : Array[DayStat] = []
  let positions : Map[String, Int] = Map([])
  for record in records {
    if record.date >= start_date && record.date <= end_date {
      let completed_increment = if record.completed { 1 } else { 0 }
      if positions.get(record.date) is Some(index) {
        let current = result[index]
        result[index] = {
          date: current.date,
          minutes: current.minutes + record.minutes,
          record_count: current.record_count + 1,
          completed_count: current.completed_count + completed_increment,
        }
      } else {
        positions.set(record.date, result.length())
        result.push({
          date: record.date,
          minutes: record.minutes,
          record_count: 1,
          completed_count: completed_increment,
        })
      }
    }
  }
  result.sort_by((a, b) => a.date.compare(b.date))
  result
}

///|
/// Summarize records. ISO dates can be compared lexicographically, so the web
/// adapter only needs to provide today's date and the current Monday.
pub fn summarize(
  records : Array[StudyRecord],
  today : String,
  week_start : String,
) -> StudySummary {
  let mut today_minutes = 0
  let mut week_minutes = 0
  let mut total_minutes = 0
  let mut completed_count = 0
  let topic_totals : Array[TopicTotal] = []
  let topic_positions : Map[String, Int] = Map([])
  for record in records {
    total_minutes = total_minutes + record.minutes
    if record.date == today {
      today_minutes = today_minutes + record.minutes
    }
    if record.date >= week_start && record.date <= today {
      week_minutes = week_minutes + record.minutes
    }
    if record.completed {
      completed_count = completed_count + 1
    }
    add_topic_minutes(
      topic_totals,
      topic_positions,
      record.topic,
      record.minutes,
    )
  }
  let count = records.length()
  let completion_rate = if count == 0 {
    0
  } else {
    completed_count * 100 / count
  }
  {
    today_minutes,
    week_minutes,
    total_minutes,
    record_count: count,
    completed_count,
    completion_rate,
    top_topic: find_top_topic(topic_totals),
  }
}
