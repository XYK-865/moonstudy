///|
/// One side of a same-progress week comparison.
pub struct WeekSlice {
  label : String
  start : String
  end : String
  minutes : Int
  count : Int
  completion_rate : Int
  top_topic : String
} derive(Eq, Debug, ToJson)

///|
pub extend WeekSlice with Eq::{equal, not_equal}

///|
pub extend WeekSlice with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend WeekSlice with ToJson::{to_json}

///|
pub struct WeekDelta {
  minutes : Int
  minutes_percent : Int
  count : Int
  count_percent : Int
  completion_rate_points : Int
} derive(Eq, Debug, ToJson)

///|
pub extend WeekDelta with Eq::{equal, not_equal}

///|
pub extend WeekDelta with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend WeekDelta with ToJson::{to_json}

///|
pub struct WeekComparison {
  ok : Bool
  message : String
  current : WeekSlice
  previous : WeekSlice
  has_baseline : Bool
  delta : WeekDelta
} derive(Eq, Debug, ToJson)

///|
pub extend WeekComparison with Eq::{equal, not_equal}

///|
pub extend WeekComparison with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend WeekComparison with ToJson::{to_json}

///|
/// A completed-record total for one calendar period.
pub struct CompletionPeriod {
  start : String
  end : String
  completed_count : Int
} derive(Eq, Debug, ToJson)

///|
pub extend CompletionPeriod with Eq::{equal, not_equal}

///|
pub extend CompletionPeriod with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend CompletionPeriod with ToJson::{to_json}

///|
fn days_from_iso(date : String) -> Int {
  let mut year = date_part(date, 0, 4)
  let month = date_part(date, 5, 7)
  let day = date_part(date, 8, 10)
  if month <= 2 {
    year = year - 1
  }
  let era = year / 400
  let year_of_era = year - era * 400
  let shifted_month = month + (if month > 2 { -3 } else { 9 })
  let day_of_year = (153 * shifted_month + 2) / 5 + day - 1
  era * 146097 +
  year_of_era * 365 +
  year_of_era / 4 -
  year_of_era / 100 +
  day_of_year
}

///|
fn two_digits(value : Int) -> String {
  if value < 10 {
    "0\{value}"
  } else {
    value.to_string()
  }
}

///|
fn iso_from_days(serial : Int) -> String {
  let era = serial / 146097
  let day_of_era = serial - era * 146097
  let year_of_era = (
      day_of_era - day_of_era / 1460 + day_of_era / 36524 - day_of_era / 146096
    ) /
    365
  let mut year = year_of_era + era * 400
  let day_of_year = day_of_era -
    (365 * year_of_era + year_of_era / 4 - year_of_era / 100)
  let month_prime = (5 * day_of_year + 2) / 153
  let day = day_of_year - (153 * month_prime + 2) / 5 + 1
  let month = month_prime + (if month_prime < 10 { 3 } else { -9 })
  if month <= 2 {
    year = year + 1
  }
  "\{year}-\{two_digits(month)}-\{two_digits(day)}"
}

///|
fn shift_iso(date : String, offset : Int) -> String {
  iso_from_days(days_from_iso(date) + offset)
}

///|
pub fn year_from_iso(date : String) -> Int {
  date_part(date, 0, 4)
}

///|
pub fn shift_iso_date(date : String, offset : Int) -> String {
  shift_iso(date, offset)
}

///|
pub fn weekday_sunday_zero(date : String) -> Int {
  (days_from_iso(date) + 3) % 7
}

///|
pub fn days_in_calendar_year(year : Int) -> Int {
  if year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) {
    366
  } else {
    365
  }
}

///|
pub fn date_for_year_day(year : Int, day_index : Int) -> String {
  shift_iso("\{year}-01-01", day_index)
}

///|
fn completed_in_range(
  records : Array[StudyRecord],
  year_start : String,
  year_end : String,
  start : String,
  end : String,
) -> Int {
  let mut completed = 0
  for record in records {
    if record.completed &&
      record.date >= year_start &&
      record.date <= year_end &&
      record.date >= start &&
      record.date <= end {
      completed = completed + 1
    }
  }
  completed
}

///|
/// Natural Monday-to-Sunday buckets intersecting the selected calendar year.
/// Records outside the selected year are excluded even from boundary weeks.
pub fn weekly_completion_stats(
  records : Array[StudyRecord],
  year : Int,
) -> Array[CompletionPeriod] {
  let year_start = "\{year}-01-01"
  let year_end = "\{year}-12-31"
  let monday_offset = (weekday_sunday_zero(year_start) + 6) % 7
  let first_monday = shift_iso(year_start, -monday_offset)
  let result : Array[CompletionPeriod] = []
  let mut start = first_monday
  while start <= year_end {
    let end = shift_iso(start, 6)
    result.push({
      start,
      end,
      completed_count: completed_in_range(
        records, year_start, year_end, start, end,
      ),
    })
    start = shift_iso(start, 7)
  }
  result
}

///|
/// Twelve calendar-month buckets whose values are cumulative completed-record
/// totals from January through the end of each month.
pub fn monthly_cumulative_completion_stats(
  records : Array[StudyRecord],
  year : Int,
) -> Array[CompletionPeriod] {
  let year_start = "\{year}-01-01"
  let result : Array[CompletionPeriod] = []
  let month_starts = [
    "01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01", "08-01", "09-01",
    "10-01", "11-01", "12-01", "01-01",
  ]
  for month = 0; month < 12; month = month + 1 {
    let next_start = if month == 11 {
      "\{year + 1}-\{month_starts[12]}"
    } else {
      "\{year}-\{month_starts[month + 1]}"
    }
    let month_end = shift_iso(next_start, -1)
    result.push({
      start: "\{year}-\{month_starts[month]}",
      end: month_end,
      completed_count: completed_in_range(
        records, year_start, month_end, year_start, month_end,
      ),
    })
  }
  result
}

///|
fn empty_week_slice(label : String) -> WeekSlice {
  {
    label,
    start: "",
    end: "",
    minutes: 0,
    count: 0,
    completion_rate: 0,
    top_topic: "暂无",
  }
}

///|
fn summarize_week_slice(
  records : Array[StudyRecord],
  label : String,
  start : String,
  end : String,
) -> WeekSlice {
  let selected = records.filter(record => {
    record.date >= start && record.date <= end
  })
  let mut minutes = 0
  let mut completed = 0
  for record in selected {
    minutes = minutes + record.minutes
    if record.completed {
      completed = completed + 1
    }
  }
  let count = selected.length()
  let topics = topic_stats(selected)
  {
    label,
    start,
    end,
    minutes,
    count,
    completion_rate: if count == 0 {
      0
    } else {
      completed * 100 / count
    },
    top_topic: if topics.length() == 0 {
      "暂无"
    } else {
      topics[0].topic
    },
  }
}

///|
pub fn compare_weeks(
  raw : String,
  week_start : String,
  today : String,
) -> WeekComparison {
  let empty_current = empty_week_slice("所选周")
  let empty_previous = empty_week_slice("上一周")
  let empty_delta = {
    minutes: 0,
    minutes_percent: 0,
    count: 0,
    count_percent: 0,
    completion_rate_points: 0,
  }
  let loaded = load_storage(raw)
  if !loaded.ok {
    return {
      ok: false,
      message: loaded.message,
      current: empty_current,
      previous: empty_previous,
      has_baseline: false,
      delta: empty_delta,
    }
  }
  if !valid_iso_date(week_start) || !valid_iso_date(today) {
    return {
      ok: false,
      message: "周环比日期无效",
      current: empty_current,
      previous: empty_previous,
      has_baseline: false,
      delta: empty_delta,
    }
  }
  let progress = days_from_iso(today) - days_from_iso(week_start)
  if progress < 0 || progress > 6 {
    return {
      ok: false,
      message: "周环比范围必须是周一至该周周日",
      current: empty_current,
      previous: empty_previous,
      has_baseline: false,
      delta: empty_delta,
    }
  }
  let current_end = shift_iso(week_start, progress)
  let previous_start = shift_iso(week_start, -7)
  let previous_end = shift_iso(previous_start, progress)
  let current = summarize_week_slice(
    loaded.records,
    "所选周",
    week_start,
    current_end,
  )
  let previous = summarize_week_slice(
    loaded.records,
    "上一周",
    previous_start,
    previous_end,
  )
  let has_baseline = previous.count > 0
  let delta = if has_baseline {
    {
      minutes: current.minutes - previous.minutes,
      minutes_percent: (current.minutes - previous.minutes) *
      100 /
      previous.minutes,
      count: current.count - previous.count,
      count_percent: (current.count - previous.count) * 100 / previous.count,
      completion_rate_points: current.completion_rate - previous.completion_rate,
    }
  } else {
    empty_delta
  }
  {
    ok: true,
    message: if has_baseline {
      "周环比已计算"
    } else {
      "无对比基线"
    },
    current,
    previous,
    has_baseline,
    delta,
  }
}

///|
pub fn compare_weeks_json(
  raw : String,
  week_start : String,
  today : String,
) -> String {
  ToJson::to_json(compare_weeks(raw, week_start, today)).stringify()
}
