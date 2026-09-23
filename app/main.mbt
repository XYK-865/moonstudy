///|
/// Rabbita entry point (v004 S1). The MoonBit application owns the form,
/// overview, charts, topics and history as one state tree. JavaScript remains a
/// thin browser capability adapter for dates, UUIDs, storage and downloads.
using @html {
  button,
  div,
  form,
  fragment,
  h2,
  h3,
  i,
  input,
  label,
  li,
  option,
  p,
  section,
  select,
  small,
  span,
  strong,
  ul,
}

///|
pub struct ViewModel {
  ok : Bool
  message : String
  records : Array[@study.StudyRecord]
  topics : Array[@study.TopicStat]
  history_limit : Int
  today : String
  week_start : String
} derive(Eq)

///|
pub extend ViewModel with Eq::{equal, not_equal}

///|
let storage_key : String = "moonstudy.records.v1"

///|
let page_size : Int = 25

///|
fn load_with_limit(history_limit : Int) -> ViewModel {
  let today = today_iso()
  let loaded = @study.load_storage(read_local(storage_key))
  if !loaded.ok {
    return {
      ok: false,
      message: loaded.message,
      records: [],
      topics: [],
      history_limit,
      today,
      week_start: week_start_iso(),
    }
  }
  {
    ok: true,
    message: "",
    records: loaded.records,
    topics: @study.topic_stats(loaded.records),
    history_limit,
    today,
    week_start: week_start_iso(),
  }
}

///|
priv enum Msg {
  Save
  Delete(String)
  ShowMore
  ExternalChanged
}

///|
fn save_record(model : ViewModel) -> ViewModel {
  guard model.ok else { return model }
  let result = @study.add_to_storage(
    read_local(storage_key),
    random_uuid(),
    form_date(),
    form_topic(),
    form_minutes(),
    form_completed(),
    form_note(),
    model.today,
  )
  if !result.ok {
    show_notice(result.message)
    return model
  }
  if !write_local(storage_key, result.storage_json) {
    show_notice(
      "浏览器存储写入失败，记录没有保存。请检查剩余空间或存储权限。",
    )
    return model
  }
  reset_form(model.today)
  show_notice("记录已保存。")
  notify_data_changed()
  load_with_limit(model.history_limit)
}

///|
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
  show_notice("记录已删除。")
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
    Save => save_record(model)
    Delete(id) => delete_record(model, id)
    ShowMore => { ..model, history_limit: model.history_limit + page_size, }
    ExternalChanged => load_with_limit(model.history_limit)
  }
  (next, @rabbita.none)
}

///|
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
fn month_number(date : String) -> Int {
  (date[5].to_int() - '0'.to_int()) * 10 + date[6].to_int() - '0'.to_int()
}

///|
fn activity_map(model : ViewModel) -> Map[String, @study.DayStat] {
  let end = activity_end_iso()
  let start = shift_date_iso(end, -370)
  let result : Map[String, @study.DayStat] = Map([])
  for day in @study.activity_stats(model.records, start, model.today) {
    result[day.date] = day
  }
  result
}

///|
fn day_minutes(days : Map[String, @study.DayStat], date : String) -> Int {
  match days.get(date) {
    Some(day) => day.minutes
    None => 0
  }
}

///|
fn day_completed(days : Map[String, @study.DayStat], date : String) -> Int {
  match days.get(date) {
    Some(day) => day.completed_count
    None => 0
  }
}

///|
fn form_view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  section(class="card", [
    div(class="card-heading", [
      h2(id="form-title", "记一次学习"),
      span(class="pill", "v004 · MoonBit 应用"),
    ]),
    form(id="study-form", on_submit=emit(Save), [
      div(class="grid", [
        label([
          span("日期"),
          input(
            id="date",
            name="date",
            input_type=@html.Date,
            value=model.today,
            required=true,
          ),
        ]),
        label([
          span("学习时长（分钟）"),
          input(
            id="minutes",
            name="minutes",
            input_type=@html.Number,
            min=1,
            max=1440,
            step=1,
            placeholder="40",
            required=true,
          ),
        ]),
      ]),
      label([
        span("学习内容"),
        input(
          id="topic",
          name="topic",
          maxlength=100,
          placeholder="例如：MoonBit 基础",
          required=true,
        ),
      ]),
      div(class="grid", [
        label([
          span("完成情况"),
          select(id="completed", name="completed", [
            option(value="true", selected=true, "已完成"),
            option(value="false", "未完成"),
          ]),
        ]),
        label([
          span("备注（可选）"),
          input(
            id="note",
            name="note",
            maxlength=500,
            placeholder="学习了变量和函数",
          ),
        ]),
      ]),
      button(
        id="save",
        class="primary",
        type_="submit",
        disabled=!model.ok,
        "保存记录",
      ),
    ]),
  ])
}

///|
fn summary_view(model : ViewModel) -> @html.Html {
  let summary = @study.summarize(model.records, model.today, model.week_start)
  section(class="card", [
    div(class="card-heading", [
      h2(id="summary-title", "学习概览"),
      span(
        id="record-count",
        class="muted",
        "\{summary.record_count} 条记录",
      ),
    ]),
    div(class="metrics", [
      div(class="metric", [
        span("今日学习"),
        strong(id="today-minutes", summary.today_minutes.to_string()),
        small("分钟"),
      ]),
      div(class="metric", [
        span("本周学习"),
        strong(id="week-minutes", summary.week_minutes.to_string()),
        small("分钟"),
      ]),
      div(class="metric", [
        span("累计学习"),
        strong(id="total-minutes", summary.total_minutes.to_string()),
        small("分钟"),
      ]),
      div(class="metric", [
        span("完成率"),
        strong(id="completion-rate", "\{summary.completion_rate}%"),
        small("全部记录"),
      ]),
      div(class="metric metric-topic", [
        span("投入最多"),
        strong(id="top-topic", title=summary.top_topic, summary.top_topic),
        small("按累计分钟"),
      ]),
    ]),
  ])
}

///|
fn bar_chart(
  model : ViewModel,
  days : Map[String, @study.DayStat],
) -> @html.Html {
  let values : Array[(String, Int)] = []
  let mut maximum = 1
  for offset = -6; offset <= 0; offset = offset + 1 {
    let date = shift_date_iso(model.today, offset)
    let minutes = day_minutes(days, date)
    if minutes > maximum {
      maximum = minutes
    }
    values.push((date, minutes))
  }
  let columns : Array[@html.Html] = values.map(pair => {
    let (date, minutes) = pair
    let height = if minutes == 0 {
      0
    } else {
      Int::max(8, minutes * 100 / maximum)
    }
    div(class="bar-column", title="\{date} · \{minutes} 分钟", [
      strong(minutes.to_string()),
      div(class="bar-track", [i(style=["height: \{height}%"], "")]),
      span(short_date_iso(date)),
    ])
  })
  div(id="bar-chart", class="bar-chart", columns)
}

///|
fn heatmap(model : ViewModel, days : Map[String, @study.DayStat]) -> @html.Html {
  let end = activity_end_iso()
  let start = shift_date_iso(end, -370)
  let month_labels : Array[@html.Html] = []
  let mut previous_month = 0
  for week = 0; week < 53; week = week + 1 {
    let marker = shift_date_iso(start, week * 7 + 3)
    let month = month_number(marker)
    if month != previous_month {
      month_labels.push(span(style=["grid-column: \{week + 1}"], "\{month}月"))
      previous_month = month
    }
  }
  let cells : Array[@html.Html] = []
  for offset = 0; offset <= 370; offset = offset + 1 {
    let date = shift_date_iso(start, offset)
    let future = date > model.today
    let completed = day_completed(days, date)
    let minutes = day_minutes(days, date)
    let level = if future { 0 } else { Int::min(4, completed) }
    let attrs = @html.Attrs::build().data_set("level", level.to_string())
    let title = if future {
      "\{date} · 尚未到达"
    } else {
      "\{date} · 完成 \{completed} 条 · 学习 \{minutes} 分钟"
    }
    cells.push(i(class=if future { "future" } else { "" }, title~, attrs~, ""))
  }
  div(class="trend-block", [
    div(class="subheading", [
      h3("过去一年完成记录"),
      span(class="muted", "颜色越深，完成记录越多"),
    ]),
    div(class="heatmap-scroll", [
      div(class="heatmap-frame", [
        div(class="heatmap-corner", ""),
        div(id="heatmap-months", class="heatmap-months", month_labels),
        div(class="heatmap-weekdays", [
          span("日"),
          span(""),
          span("二"),
          span(""),
          span("四"),
          span(""),
          span("六"),
        ]),
        div(id="heatmap", class="heatmap", cells),
      ]),
    ]),
    div(class="heatmap-legend", [
      span("少"),
      i(attrs=@html.Attrs::build().data_set("level", "0"), ""),
      i(attrs=@html.Attrs::build().data_set("level", "1"), ""),
      i(attrs=@html.Attrs::build().data_set("level", "2"), ""),
      i(attrs=@html.Attrs::build().data_set("level", "3"), ""),
      i(attrs=@html.Attrs::build().data_set("level", "4"), ""),
      span("多"),
    ]),
  ])
}

///|
fn trends_view(model : ViewModel) -> @html.Html {
  let days = activity_map(model)
  section(class="card", [
    div(class="card-heading", [
      h2(id="trend-title", "学习趋势"),
      span(class="muted", "统计由 MoonBit 计算"),
    ]),
    div(class="trend-block", [
      div(class="subheading", [
        h3("最近 7 天学习时长"),
        span(class="muted", "单位：分钟"),
      ]),
      bar_chart(model, days),
    ]),
    heatmap(model, days),
  ])
}

///|
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
fn records_view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  let topics : Array[@html.Html] = model.topics.map(topic => {
    li([
      strong(topic.topic),
      span("\{topic.minutes} 分钟 · \{topic.record_count} 条"),
    ])
  })
  fragment([
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
fn view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  fragment([
    // Backup restoration is still hosted by JavaScript during S1. Its only
    // bridge asks this application to reload the validated storage envelope.
    button(
      id="app-refresh",
      type_="button",
      hidden=true,
      on_click=emit(ExternalChanged),
      "",
    ),
    form_view(model, emit),
    summary_view(model),
    trends_view(model),
    records_view(model, emit),
  ])
}

///|
fn study_app() -> @rabbita.Val[@html.Html] {
  let (model, emit) = @rabbita.create_state(load_with_limit(page_size), update~)
  model.map(model => view(model, emit))
}

///|
fn main {
  @rabbita.new(study_app).mount("app-main")
  notify_ready()
}
