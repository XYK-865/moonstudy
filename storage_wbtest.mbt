///|
test "empty versioned storage round-trips" {
  let empty = encode_storage([])
  let loaded = load_storage(empty)
  assert_true(loaded.ok)
  assert_eq(loaded.records.length(), 0)
}

///|
test "one learning activity survives storage round-trip and changes totals" {
  let result = add_to_storage(
    "", "record-1", "2026-09-15", " MoonBit ", 40, true, " 变量和函数 ", "2026-09-15",
  )
  assert_true(result.ok)
  let loaded = load_storage(result.storage_json)
  assert_true(loaded.ok)
  assert_eq(loaded.records.length(), 1)
  assert_eq(loaded.records[0].topic, "MoonBit")
  assert_eq(loaded.records[0].note, "变量和函数")
  let summary = summarize(loaded.records, "2026-09-15", "2026-09-14")
  assert_eq(summary.today_minutes, 40)
  assert_eq(summary.total_minutes, 40)
  assert_eq(summary.completion_rate, 100)
}

///|
test "damaged or incompatible storage is not overwritten" {
  let damaged = "{not-json"
  let result = add_to_storage(
    damaged, "record-1", "2026-09-15", "MoonBit", 40, true, "", "2026-09-15",
  )
  assert_true(!result.ok)
  assert_eq(result.storage_json, damaged)

  let old = ToJson::to_json(StorageEnvelope::{ schema_version: 2, records: [], }).stringify()
  let loaded = load_storage(old)
  assert_true(!loaded.ok)
}

///|
test "invalid existing records and future dates are refused" {
  let bad = encode_storage([
    make_record("bad", "2026-09-31", "数学", 30, true, ""),
  ])
  assert_true(!load_storage(bad).ok)
  let result = add_to_storage(
    "", "future", "2026-09-16", "英语", 20, false, "", "2026-09-15",
  )
  assert_true(!result.ok)
  assert_eq(result.storage_json, "")
}

///|
test "two thousand distinct learning topics remain readable" {
  let records : Array[StudyRecord] = []
  let mut index = 0
  while index < 2000 {
    records.push(
      make_record(
        index.to_string(),
        "2026-09-15",
        "主题 " + index.to_string(),
        20,
        index % 2 == 0,
        "",
      ),
    )
    index = index + 1
  }
  let loaded = load_storage(encode_storage(records))
  assert_true(loaded.ok)
  assert_eq(loaded.records.length(), 2000)
  let summary = summarize(loaded.records, "2026-09-15", "2026-09-14")
  assert_eq(summary.total_minutes, 40000)
  assert_eq(summary.completion_rate, 50)
}

///|
test "deleting an existing record updates storage without touching others" {
  let original = encode_storage([
    make_record("a", "2026-09-14", "MoonBit", 40, true, ""),
    make_record("b", "2026-09-15", "英语", 30, false, ""),
  ])
  let deleted = delete_from_storage(original, "a")
  assert_true(deleted.ok)
  let loaded = load_storage(deleted.storage_json)
  assert_eq(loaded.records.length(), 1)
  assert_eq(loaded.records[0].id, "b")
  assert_eq(
    summarize(loaded.records, "2026-09-15", "2026-09-14").total_minutes,
    30,
  )
}

///|
test "missing delete target and duplicate existing ids do not rewrite data" {
  let original = encode_storage([
    make_record("a", "2026-09-14", "MoonBit", 40, true, ""),
  ])
  let missing = delete_from_storage(original, "missing")
  assert_true(!missing.ok)
  assert_eq(missing.storage_json, original)
  let duplicate = encode_storage([
    make_record("a", "2026-09-14", "MoonBit", 40, true, ""),
    make_record("a", "2026-09-15", "英语", 30, true, ""),
  ])
  assert_true(!load_storage(duplicate).ok)
}
