///|
/// Rabbita entry point (v004 S1). Owns the records region: topic totals and the
/// history list, including deletion and "show more".
///
/// Data always comes from the MoonBit core package. The JavaScript layer still
/// owns the form, charts, report and backup for this increment, so the two
/// layers stay in sync through page events instead of sharing DOM.
using @html {button, div, fragment, h2, li, p, section, small, span, strong, ul}

///|
/// Everything the records region renders.
pub struct ViewModel {
  ok : Bool
  message : String
  records : Array[@study.StudyRecord]
  topics : Array[@study.TopicStat]
  history_limit : Int
} derive(Eq)

///|
pub extend ViewModel with Eq::{equal, not_equal}

///|
/// The contract key is fixed by the user-confirmed data format.
let storage_key : String = "moonstudy.records.v1"

///|
/// v003 behaviour: the history list shows 25 more entries per click.
let page_size : Int = 25

///|
fn load_with_limit(history_limit : Int) -> ViewModel {
  let loaded = @study.load_storage(read_local(storage_key))
  if !loaded.ok {
    return {
      ok: false,
      message: loaded.message,
      records: [],
      topics: [],
      history_limit,
    }
  }
  {
    ok: true,
    message: "",
    records: loaded.records,
    topics: @study.topic_stats(loaded.records),
    history_limit,
  }
}

///|
priv enum Msg {
  Delete(String)
  ShowMore
  ExternalChanged
}

///|
/// Deletion stays a two-step action: the browser confirms first, then MoonBit
/// validates and returns the storage text that is safe to write back.
fn delete_record(model : ViewModel, id : String) -> ViewModel {
  if !confirm_delete() {
    return model
  }
  let result = @study.delete_from_storage(read_local(storage_key), id)
  if !result.ok {
    show_notice(result.message)
    return model
  }
  if !write_local(storage_key, result.storage_json) {
    show_notice("浏览器存储写入失败，记录没有删除。")
    return model
  }
  notify_data_changed()
  load_with_limit(model.history_limit)
}

///|
fn update(
  model : ViewModel,
  msg : Msg,
  _emit : @rabbita.Emit[Msg],
) -> (ViewModel, @rabbita.Cmd) {
  let next = match msg {
    Delete(id) => delete_record(model, id)
    ShowMore => { ..model, history_limit: model.history_limit + page_size, }
    ExternalChanged => load_with_limit(model.history_limit)
  }
  (next, @rabbita.none)
}

///|
/// v003 shows `date · 完成情况 · 备注`, skipping an empty note.
fn record_subtitle(record : @study.StudyRecord) -> String {
  let buf = StringBuilder()
  buf.write_string(record.date)
  buf.write_string(" · ")
  buf.write_string(if record.completed { "已完成" } else { "未完成" })
  if record.note.length() > 0 {
    buf.write_string(" · ")
    buf.write_string(record.note)
  }
  buf.to_string()
}

///|
/// Newest first, limited to `history_limit` entries, exactly like v003.
fn history_items(
  model : ViewModel,
  emit : @rabbita.Emit[Msg],
) -> Array[@html.Html] {
  let items : Array[@html.Html] = []
  let total = model.records.length()
  let first = if total > model.history_limit {
    total - model.history_limit
  } else {
    0
  }
  for index = total - 1; index >= first; index = index - 1 {
    let record = model.records[index]
    items.push(
      li([
        div(class="details", [
          strong(record.topic),
          small(record_subtitle(record)),
        ]),
        div(class="row-actions", [
          span(class="duration", "\{record.minutes} 分钟"),
          button(
            type_="button",
            class="danger",
            on_click=emit(Delete(record.id)),
            "删除",
          ),
        ]),
      ]),
    )
  }
  items
}

///|
fn view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  let topics : Array[@html.Html] = model.topics.map(topic => {
    li([
      strong(topic.topic),
      span("\{topic.minutes} 分钟 · \{topic.record_count} 条"),
    ])
  })
  fragment([
    // JavaScript 层写入存储后（例如恢复备份）点击这个隐藏按钮，让运行时派发
    // ExternalChanged；Rabbita 的 emit 返回 Cmd，只有事件回调里才会被执行。
    button(
      id="app-refresh",
      type_="button",
      hidden=true,
      on_click=emit(ExternalChanged),
      "",
    ),
    section(class="card", [
      div(class="card-heading", [
        h2(id="topics-title", "学习主题"),
        span(class="muted", "按累计分钟排序"),
      ]),
      p(
        id="empty-topics",
        class="empty",
        hidden=model.topics.length() > 0,
        "保存记录后，这里会显示每个主题的投入时间。",
      ),
      ul(id="topics", class="topic-list", topics),
    ]),
    section(class="card", [
      div(class="card-heading", [
        h2(id="history-title", "历史记录"),
        span(
          class="muted",
          "发现写错的记录，可以删除后重新填写",
        ),
      ]),
      p(
        id="empty-history",
        class="empty",
        hidden=model.records.length() > 0,
        "还没有记录，先写下今天学了什么吧。",
      ),
      ul(id="history", class="history", history_items(model, emit)),
      button(
        id="more-history",
        class="secondary",
        type_="button",
        hidden=model.records.length() <= model.history_limit,
        on_click=emit(ShowMore),
        "显示更多记录",
      ),
    ]),
  ])
}

///|
fn records_app() -> @rabbita.Val[@html.Html] {
  let (model, emit) = @rabbita.create_state(load_with_limit(page_size), update~)
  model.map(model => view(model, emit))
}

///|
fn main {
  @rabbita.new(records_app).mount("app-records")
  notify_ready()
}
