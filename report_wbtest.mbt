///|
test "weekly report excludes older records and uses weekly completion rate" {
  let records = [
    make_record("old", "2026-09-13", "旧知识", 10, true, ""),
    make_record("monday", "2026-09-14", "MoonBit", 20, true, "变量"),
    make_record("today", "2026-09-16", "英语", 30, false, "阅读"),
  ]
  let markdown = weekly_markdown(records, "2026-09-14", "2026-09-16")
  assert_true(markdown.contains("本周学习：50 分钟"))
  assert_true(markdown.contains("学习记录：2 条"))
  assert_true(markdown.contains("完成率：50%"))
  assert_true(!markdown.contains("旧知识"))
  assert_true(markdown.contains("- [x] 2026-09-14"))
  assert_true(markdown.contains("- [ ] 2026-09-16"))
}

///|
test "weekly report remains readable when there are no activities" {
  let markdown = weekly_markdown([], "2026-09-14", "2026-09-16")
  assert_true(markdown.contains("本周学习：0 分钟"))
  assert_true(markdown.contains("本周暂无学习记录。"))
}

///|
test "report escapes user text and refuses damaged storage" {
  let raw = encode_storage([
    make_record(
      "a", "2026-09-16", "<标签>*", 15, true, "第一行\n第二行",
    ),
  ])
  let result = report_from_storage(raw, "2026-09-14", "2026-09-16")
  assert_true(result.ok)
  assert_true(result.markdown.contains("&lt;标签&gt;\\*"))
  assert_true(result.markdown.contains("第一行 第二行"))
  assert_true(!report_from_storage("{bad", "2026-09-14", "2026-09-16").ok)
  assert_true(!report_from_storage(raw, "2026-09-17", "2026-09-16").ok)
}

///|
test "daily report includes only the selected day" {
  let records = [
    make_record("a", "2026-09-16", "MoonBit", 25, true, "变量"),
    make_record("b", "2026-09-16", "英语", 15, false, "阅读"),
    make_record("other", "2026-09-15", "旧记录", 99, true, ""),
  ]
  let markdown = daily_markdown(records, "2026-09-16")
  assert_true(markdown.contains("# 学习日报"))
  assert_true(markdown.contains("今日学习：40 分钟"))
  assert_true(markdown.contains("学习记录：2 条"))
  assert_true(markdown.contains("完成率：50%"))
  assert_true(!markdown.contains("旧记录"))
}

///|
test "daily report handles empty date and damaged storage" {
  let empty = daily_report_from_storage(encode_storage([]), "2026-09-16")
  assert_true(empty.ok)
  assert_true(empty.markdown.contains("当日暂无学习记录"))
  assert_true(!daily_report_from_storage("{bad", "2026-09-16").ok)
  assert_true(!daily_report_from_storage(encode_storage([]), "2026-09-31").ok)
}
