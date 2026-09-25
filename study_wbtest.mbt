///|
fn sample_records() -> Array[StudyRecord] {
  [
    {
      id: "1",
      date: "2026-09-07",
      category: "学习",
      topic: "MoonBit",
      minutes: 40,
      completed: true,
      note: "变量和函数",
    },
    {
      id: "2",
      date: "2026-09-09",
      category: "学习",
      topic: "英语",
      minutes: 30,
      completed: true,
      note: "阅读",
    },
    {
      id: "3",
      date: "2026-09-10",
      category: "学习",
      topic: "MoonBit",
      minutes: 50,
      completed: false,
      note: "数组",
    },
  ]
}

///|
test "summary calculates dashboard values" {
  let summary = summarize(sample_records(), "2026-09-10", "2026-09-07")
  assert_eq(summary.today_minutes, 50)
  assert_eq(summary.week_minutes, 120)
  assert_eq(summary.total_minutes, 120)
  assert_eq(summary.record_count, 3)
  assert_eq(summary.completed_count, 2)
  assert_eq(summary.completion_rate, 66)
  assert_eq(summary.top_topic, "MoonBit")
}

///|
test "empty history has a useful summary" {
  let summary = summarize([], "2026-09-10", "2026-09-07")
  assert_eq(summary.total_minutes, 0)
  assert_eq(summary.completion_rate, 0)
  assert_eq(summary.top_topic, "暂无")
}

///|
test "records outside this week only affect all-time totals" {
  let records : Array[StudyRecord] = [
    {
      id: "old",
      date: "2026-09-01",
      category: "学习",
      topic: "数学",
      minutes: 25,
      completed: true,
      note: "",
    },
  ]
  let summary = summarize(records, "2026-09-10", "2026-09-07")
  assert_eq(summary.today_minutes, 0)
  assert_eq(summary.week_minutes, 0)
  assert_eq(summary.total_minutes, 25)
}

///|
test "invalid records are rejected" {
  let invalid : StudyRecord = {
    id: "bad",
    date: "2026/09/10",
    category: "",
    topic: "",
    minutes: 0,
    completed: false,
    note: "",
  }
  assert_true(validate_record(invalid) is Some(_))
}

///|
test "calendar dates handle leap years and impossible days" {
  assert_true(
    validate_record(make_record("leap", "2024-02-29", "数学", 30, true, ""))
    is None,
  )
  assert_true(
    validate_record(
      make_record("century", "1900-02-29", "数学", 30, true, ""),
    )
    is Some(_),
  )
  assert_true(
    validate_record(make_record("bad", "2026-09-31", "数学", 30, true, ""))
    is Some(_),
  )
  assert_true(
    validate_record(
      make_record("bad-digit", "2026-0A-10", "数学", 30, true, ""),
    )
    is Some(_),
  )
}

///|
test "duration and blank topic boundaries are rejected" {
  assert_true(
    validate_record(make_record("zero", "2026-09-10", "英语", 0, false, ""))
    is Some(_),
  )
  assert_true(
    validate_record(
      make_record("too-long", "2026-09-10", "英语", 1441, false, ""),
    )
    is Some(_),
  )
  assert_true(
    validate_record(make_record("blank", "2026-09-10", "   ", 40, false, ""))
    is Some(_),
  )
  assert_true(
    validate_record(make_record("max", "2026-09-10", "英语", 1440, true, ""))
    is None,
  )
}

///|
test "topic statistics include minutes and session counts" {
  let records = [
    make_record("a", "2026-09-14", "MoonBit", 40, true, ""),
    make_record("b", "2026-09-15", "英语", 40, true, ""),
    make_record("c", "2026-09-16", "MoonBit", 20, false, ""),
  ]
  let topics = topic_stats(records)
  assert_eq(topics.length(), 2)
  assert_eq(topics[0].topic, "MoonBit")
  assert_eq(topics[0].minutes, 60)
  assert_eq(topics[0].record_count, 2)
  assert_eq(topics[1].topic, "英语")
  assert_eq(topics[1].minutes, 40)
}

///|
test "category and detailed content are summarized independently" {
  let records = [
    make_record_with_category(
      "a", "2026-09-14", "工作", "写方案", 60, true, "",
    ),
    make_record_with_category(
      "b", "2026-09-15", "工作", "开会", 20, true, "",
    ),
    make_record_with_category(
      "c", "2026-09-16", "运动", "跑步", 70, true, "",
    ),
  ]
  let summary = summarize(records, "2026-09-16", "2026-09-14")
  assert_eq(summary.top_category, "工作")
  assert_eq(summary.top_topic, "跑步")
}

///|
test "category validation trims values and rejects blanks" {
  let valid = make_record_with_category(
    "a", "2026-09-14", " 运动 ", " 跑步 ", 30, true, "",
  )
  assert_eq(valid.category, "运动")
  assert_eq(valid.topic, "跑步")
  assert_true(validate_record(valid) is None)
  assert_true(
    validate_record(
      make_record_with_category("b", "2026-09-14", " ", "跑步", 30, true, ""),
    )
    is Some(_),
  )
}

///|
test "equal topic totals keep the first entered topic" {
  let records = [
    make_record("a", "2026-09-14", "英语", 40, true, ""),
    make_record("b", "2026-09-15", "MoonBit", 40, true, ""),
  ]
  assert_eq(topic_stats(records)[0].topic, "英语")
  assert_eq(summarize(records, "2026-09-15", "2026-09-14").top_topic, "英语")
}

///|
test "activity statistics aggregate minutes and completed records by day" {
  let records = [
    make_record("a", "2026-09-14", "MoonBit", 40, true, ""),
    make_record("b", "2026-09-14", "英语", 20, false, ""),
    make_record("c", "2026-09-16", "数学", 30, true, ""),
    make_record("old", "2026-09-01", "旧记录", 99, true, ""),
  ]
  let days = activity_stats(records, "2026-09-14", "2026-09-16")
  assert_eq(days.length(), 2)
  assert_eq(days[0].date, "2026-09-14")
  assert_eq(days[0].minutes, 60)
  assert_eq(days[0].record_count, 2)
  assert_eq(days[0].completed_count, 1)
  assert_eq(days[1].date, "2026-09-16")
  assert_eq(days[1].minutes, 30)
  assert_eq(days[1].completed_count, 1)
}
