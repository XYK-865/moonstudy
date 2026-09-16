///|
/// Versioned browser storage shape. The host owns localStorage access.
pub struct StorageEnvelope {
  schema_version : Int
  records : Array[StudyRecord]
} derive(FromJson, ToJson, Debug)

///|
pub struct StorageLoad {
  ok : Bool
  message : String
  records : Array[StudyRecord]
} derive(Debug)

///|
pub struct StorageAction {
  ok : Bool
  message : String
  storage_json : String
} derive(ToJson, Debug)

///|
pub struct ViewState {
  ok : Bool
  message : String
  records : Array[StudyRecord]
  summary : StudySummary
  topics : Array[TopicStat]
} derive(ToJson, Debug)

///|
pub fn encode_storage(records : Array[StudyRecord]) -> String {
  let envelope = { schema_version: 1, records, }
  ToJson::to_json(envelope).stringify()
}

///|
/// Never interpret damaged storage as an empty history for a write operation.
pub fn load_storage(raw : String) -> StorageLoad {
  if raw.length() == 0 {
    return { ok: true, message: "", records: [], }
  }
  try {
    let envelope : StorageEnvelope = @json.from_json(@json.parse(raw))
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
    let seen : Map[String, Bool] = Map([])
    for record in envelope.records {
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
    { ok: true, message: "", records: envelope.records, }
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
  let loaded = load_storage(raw)
  if !loaded.ok {
    return { ok: false, message: loaded.message, storage_json: raw, }
  }
  let record = make_record(id, date, topic, minutes, completed, note)
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
