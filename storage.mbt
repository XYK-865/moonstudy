///|
/// Versioned browser storage shape. The host owns localStorage access.
pub struct StorageEnvelope {
  schema_version : Int
  records : Array[StudyRecord]
} derive(ToJson, Debug)

///|
pub extend StorageEnvelope with ToJson::{to_json}

///|
pub extend StorageEnvelope with @moonbitlang/core/debug.Debug::{to_repr}

///|
/// Read model for schema v1. Optional category keeps backups and localStorage
/// written by v003/v004 readable; missing values migrate to “学习” in memory.
priv struct StoredRecordV1 {
  id : String
  date : String
  category : String?
  topic : String
  minutes : Int
  completed : Bool
  note : String
} derive(FromJson)

///|
priv struct StoredEnvelopeV1 {
  schema_version : Int
  records : Array[StoredRecordV1]
} derive(FromJson)

///|
pub struct StorageLoad {
  ok : Bool
  message : String
  records : Array[StudyRecord]
} derive(Debug)

///|
pub extend StorageLoad with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub struct StorageAction {
  ok : Bool
  message : String
  storage_json : String
} derive(ToJson, Debug)

///|
pub extend StorageAction with ToJson::{to_json}

///|
pub extend StorageAction with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub struct ViewState {
  ok : Bool
  message : String
  records : Array[StudyRecord]
  summary : StudySummary
  topics : Array[TopicStat]
} derive(ToJson, Debug)

///|
pub extend ViewState with ToJson::{to_json}

///|
pub extend ViewState with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub struct ActivityResult {
  ok : Bool
  message : String
  days : Array[DayStat]
} derive(ToJson, Debug)

///|
pub extend ActivityResult with ToJson::{to_json}

///|
pub extend ActivityResult with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub fn encode_storage(records : Array[StudyRecord]) -> String {
  let envelope : StorageEnvelope = { schema_version: 1, records, }
  ToJson::to_json(envelope).stringify()
}

///|
/// Never interpret damaged storage as an empty history for a write operation.
pub fn load_storage(raw : String) -> StorageLoad {
  if raw.length() == 0 {
    return { ok: true, message: "", records: [], }
  }
  try {
    let envelope : StoredEnvelopeV1 = @json.from_json(@json.parse(raw))
    if envelope.schema_version != 1 {
      return {
        ok: false,
        message: "数据版本不兼容，请先备份原始数据",
        records: [],
      }
    }
    if envelope.records.length() > 10000 {
      return {
        ok: false,
        message: "记录超过 10000 条，请先备份原始数据",
        records: [],
      }
    }
    let records : Array[StudyRecord] = envelope.records.map(stored => {
      make_record_with_category(
        stored.id,
        stored.date,
        stored.category.unwrap_or("学习"),
        stored.topic,
        stored.minutes,
        stored.completed,
        stored.note,
      )
    })
    let seen : Map[String, Bool] = Map([])
    for record in records {
      if validate_record(record) is Some(_) {
        return {
          ok: false,
          message: "已有记录包含无效内容，请先备份原始数据",
          records: [],
        }
      }
      if seen.contains(record.id) {
        return {
          ok: false,
          message: "已有记录编号重复，请先备份原始数据",
          records: [],
        }
      }
      seen.set(record.id, true)
    }
    { ok: true, message: "", records, }
  } catch {
    _ =>
      {
        ok: false,
        message: "本地记录无法读取，请先备份原始数据",
        records: [],
      }
  }
}

///|
/// Pure action: the browser writes storage_json only after ok is true.
pub fn add_to_storage(
  raw : String,
  id : String,
  date : String,
  topic : String,
  minutes : Int,
  completed : Bool,
  note : String,
  today : String,
) -> StorageAction {
  add_to_storage_with_category(
    raw, id, date, "学习", topic, minutes, completed, note, today,
  )
}

///|
/// Category-aware write used by the v004 Rabbita UI. The original API stays
/// unchanged for the ten frozen browser exports and existing integrations.
pub fn add_to_storage_with_category(
  raw : String,
  id : String,
  date : String,
  category : String,
  topic : String,
  minutes : Int,
  completed : Bool,
  note : String,
  today : String,
) -> StorageAction {
  let loaded = load_storage(raw)
  if !loaded.ok {
    return { ok: false, message: loaded.message, storage_json: raw, }
  }
  let record = make_record_with_category(
    id, date, category, topic, minutes, completed, note,
  )
  if validate_record(record) is Some(message) {
    return { ok: false, message, storage_json: raw, }
  }
  if date > today {
    return {
      ok: false,
      message: "不能填写未来日期",
      storage_json: raw,
    }
  }
  for existing in loaded.records {
    if existing.id == id {
      return {
        ok: false,
        message: "记录编号重复，请重试",
        storage_json: raw,
      }
    }
  }
  let records = loaded.records.copy()
  if records.length() >= 10000 {
    return {
      ok: false,
      message: "最多保存 10000 条记录，请先整理历史记录",
      storage_json: raw,
    }
  }
  records.push(record)
  {
    ok: true,
    message: "记录已保存",
    storage_json: encode_storage(records),
  }
}

///|
pub fn view_state(
  raw : String,
  today : String,
  week_start : String,
) -> ViewState {
  let loaded = load_storage(raw)
  {
    ok: loaded.ok,
    message: loaded.message,
    records: loaded.records,
    summary: summarize(loaded.records, today, week_start),
    topics: topic_stats(loaded.records),
  }
}

///|
pub fn delete_from_storage(raw : String, id : String) -> StorageAction {
  let loaded = load_storage(raw)
  if !loaded.ok {
    return { ok: false, message: loaded.message, storage_json: raw, }
  }
  let remaining : Array[StudyRecord] = []
  let mut found = false
  for record in loaded.records {
    if record.id == id {
      found = true
    } else {
      remaining.push(record)
    }
  }
  if !found {
    return {
      ok: false,
      message: "未找到要删除的记录，页面可能需要刷新",
      storage_json: raw,
    }
  }
  {
    ok: true,
    message: "记录已删除",
    storage_json: encode_storage(remaining),
  }
}

///|
pub fn view_state_json(
  raw : String,
  today : String,
  week_start : String,
) -> String {
  ToJson::to_json(view_state(raw, today, week_start)).stringify()
}

///|
pub fn add_to_storage_json(
  raw : String,
  id : String,
  date : String,
  topic : String,
  minutes : Int,
  completed : Bool,
  note : String,
  today : String,
) -> String {
  ToJson::to_json(
    add_to_storage(raw, id, date, topic, minutes, completed, note, today),
  ).stringify()
}

///|
pub fn delete_from_storage_json(raw : String, id : String) -> String {
  ToJson::to_json(delete_from_storage(raw, id)).stringify()
}

///|
pub fn activity_from_storage(
  raw : String,
  start_date : String,
  end_date : String,
) -> ActivityResult {
  let loaded = load_storage(raw)
  if !loaded.ok {
    return { ok: false, message: loaded.message, days: [], }
  }
  if !valid_iso_date(start_date) ||
    !valid_iso_date(end_date) ||
    start_date > end_date {
    return { ok: false, message: "统计日期范围无效", days: [], }
  }
  {
    ok: true,
    message: "",
    days: activity_stats(loaded.records, start_date, end_date),
  }
}

///|
pub fn activity_from_storage_json(
  raw : String,
  start_date : String,
  end_date : String,
) -> String {
  ToJson::to_json(activity_from_storage(raw, start_date, end_date)).stringify()
}

///|
/// Return a canonical, complete storage envelope after validating current data.
pub fn export_storage(raw : String) -> StorageAction {
  let loaded = load_storage(raw)
  if !loaded.ok {
    return { ok: false, message: loaded.message, storage_json: raw, }
  }
  {
    ok: true,
    message: "完整备份已生成",
    storage_json: encode_storage(loaded.records),
  }
}

///|
/// Validate untrusted backup text before the browser is allowed to store it.
pub fn restore_storage(candidate : String) -> StorageAction {
  if candidate.trim().to_owned().length() == 0 {
    return { ok: false, message: "备份文件为空", storage_json: "", }
  }
  let loaded = load_storage(candidate)
  if !loaded.ok {
    return { ok: false, message: loaded.message, storage_json: "", }
  }
  {
    ok: true,
    message: "备份验证通过",
    storage_json: encode_storage(loaded.records),
  }
}

///|
pub fn export_storage_json(raw : String) -> String {
  ToJson::to_json(export_storage(raw)).stringify()
}

///|
pub fn restore_storage_json(candidate : String) -> String {
  ToJson::to_json(restore_storage(candidate)).stringify()
}
