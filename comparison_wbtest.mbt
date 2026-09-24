///|
test "week comparison uses the same progress slice" {
  let raw = encode_storage([
    make_record("p1", "2026-09-07", "MoonBit", 40, true, ""),
    make_record("p2", "2026-09-09", "英语", 20, false, ""),
    make_record("ignored", "2026-09-13", "周日", 500, true, ""),
    make_record("c1", "2026-09-14", "MoonBit", 90, true, ""),
    make_record("c2", "2026-09-16", "MoonBit", 30, true, ""),
  ])
  let result = compare_weeks(raw, "2026-09-14", "2026-09-16")
  assert_true(result.ok)
  assert_eq(result.current.end, "2026-09-16")
  assert_eq(result.previous.start, "2026-09-07")
  assert_eq(result.previous.end, "2026-09-09")
  assert_eq(result.previous.minutes, 60)
  assert_eq(result.current.minutes, 120)
  assert_eq(result.delta.minutes_percent, 100)
}

///|
test "week comparison supports full Sunday slices" {
  let raw = encode_storage([
    make_record("p", "2026-09-13", "上周", 50, true, ""),
    make_record("c", "2026-09-20", "本周", 75, false, ""),
  ])
  let result = compare_weeks(raw, "2026-09-14", "2026-09-20")
  assert_eq(result.previous.end, "2026-09-13")
  assert_eq(result.current.end, "2026-09-20")
  assert_eq(result.delta.minutes, 25)
  assert_eq(result.delta.completion_rate_points, -100)
}

///|
test "week comparison crosses month and year boundaries" {
  let raw = encode_storage([
    make_record("p", "2025-12-28", "旧年", 30, true, ""),
    make_record("c", "2026-01-04", "新年", 60, true, ""),
  ])
  let result = compare_weeks(raw, "2025-12-29", "2026-01-04")
  assert_true(result.ok)
  assert_eq(result.previous.start, "2025-12-22")
  assert_eq(result.previous.end, "2025-12-28")
  assert_eq(result.current.top_topic, "新年")
}

///|
test "week comparison reports an empty baseline without percentages" {
  let raw = encode_storage([
    make_record("c", "2026-09-14", "MoonBit", 40, true, ""),
  ])
  let result = compare_weeks(raw, "2026-09-14", "2026-09-16")
  assert_true(result.ok)
  assert_true(!result.has_baseline)
  assert_eq(result.message, "无对比基线")
  assert_eq(result.delta.minutes_percent, 0)
  assert_eq(result.delta.count_percent, 0)
}

///|
test "week comparison keeps every zero baseline delta neutral" {
  let result = compare_weeks(encode_storage([]), "2026-09-14", "2026-09-20")
  assert_true(result.ok)
  assert_true(!result.has_baseline)
  assert_eq(result.previous.minutes, 0)
  assert_eq(result.delta.minutes, 0)
  assert_eq(result.delta.completion_rate_points, 0)
}

///|
test "week comparison shows a one hundred percent fall when current is empty" {
  let raw = encode_storage([
    make_record("p", "2026-09-07", "MoonBit", 80, true, ""),
  ])
  let result = compare_weeks(raw, "2026-09-14", "2026-09-14")
  assert_true(result.has_baseline)
  assert_eq(result.current.count, 0)
  assert_eq(result.delta.minutes_percent, -100)
  assert_eq(result.delta.count_percent, -100)
}

///|
test "week comparison rejects damaged storage and ranges longer than a week" {
  assert_true(!compare_weeks("{bad", "2026-09-14", "2026-09-16").ok)
  assert_true(!compare_weeks(encode_storage([]), "2026-09-14", "2026-09-21").ok)
}
