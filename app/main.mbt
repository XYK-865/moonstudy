///|
/// Rabbita entry point (v004). The MoonBit application owns the form, overview,
/// charts, topics, history, reports, backup and recovery as one state tree.
/// JavaScript exists only inside thin browser capability FFI declarations.
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
  textarea,
  ul,
}

///|
pub struct ViewModel {
  ok : Bool
  storage_available : Bool
  message : String
  records : Array[@study.StudyRecord]
  topics : Array[@study.TopicStat]
  history_limit : Int
  today : String
  week_start : String
  category_choice : String
  activity_mode : String
  activity_year : Int
  report_type : String
  report_date : String
  report_markdown : String
  report_title : String
  report_filename : String
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
  let week_start = week_start_iso()
  if !storage_readable(storage_key) {
    let message = "浏览器存储不可用，暂时不能保存记录。"
    show_notice(message)
    return {
      ok: false,
      storage_available: false,
      message,
      records: [],
      topics: [],
      history_limit,
      today,
      week_start,
      category_choice: "学习",
      activity_mode: "daily",
      activity_year: @study.year_from_iso(today),
      report_type: "daily",
      report_date: today,
      report_markdown: "",
      report_title: "日报预览",
      report_filename: "",
    }
  }
  let loaded = @study.load_storage(read_local(storage_key))
  if !loaded.ok {
    show_notice(
      loaded.message +
      "。请下载原始数据备份，当前页面不会覆盖它。",
    )
    return {
      ok: false,
      storage_available: true,
      message: loaded.message,
      records: [],
      topics: [],
      history_limit,
      today,
      week_start,
      category_choice: "学习",
      activity_mode: "daily",
      activity_year: @study.year_from_iso(today),
      report_type: "daily",
      report_date: today,
      report_markdown: "",
      report_title: "日报预览",
      report_filename: "",
    }
  }
  {
    ok: true,
    storage_available: true,
    message: "",
    records: loaded.records,
    topics: @study.topic_stats(loaded.records),
    history_limit,
    today,
    week_start,
    category_choice: "学习",
    activity_mode: "daily",
    activity_year: @study.year_from_iso(today),
    report_type: "daily",
    report_date: today,
    report_markdown: "",
    report_title: "日报预览",
    report_filename: "",
  }
}

///|
priv enum Msg {
  Save
  Delete(String)
  ShowMore
  ExternalChanged
  SetCategoryChoice(String)
  SetActivityMode(String)
  SetActivityYear(String)
  SetReportType(String)
  SetReportDate(String)
  GenerateReport
  DownloadReport
  ExportBackup
  DownloadRaw
  ChooseRestore
  RestoreFileChanged
  RestoreReady
}

///|
fn reload_with_preferences(model : ViewModel) -> ViewModel {
  let refreshed = load_with_limit(model.history_limit)
  {
    ..refreshed,
    activity_mode: model.activity_mode,
    activity_year: model.activity_year,
  }
}

///|
fn save_record(model : ViewModel) -> ViewModel {
  guard model.ok else { return model }
  let result = @study.add_to_storage_with_category(
    read_local(storage_key),
    random_uuid(),
    form_date(),
    form_category(),
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
  reload_with_preferences(model)
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
  reload_with_preferences(model)
}

///|
fn export_backup(model : ViewModel) -> ViewModel {
  guard model.ok else { return model }
  let result = @study.export_storage(read_local(storage_key))
  if !result.ok {
    show_notice(result.message)
    return model
  }
  if !download_text(
      result.storage_json + "\n",
      "moonstudy-backup-\{model.today}.json",
      "application/json;charset=utf-8",
    ) {
    show_notice("无法生成备份下载，请检查浏览器下载权限。")
    return model
  }
  show_notice(
    "完整备份已下载。请把文件保存在你找得到的位置。",
  )
  model
}

///|
fn download_raw_storage(model : ViewModel) -> ViewModel {
  guard model.storage_available else {
    show_notice("无法读取原始数据，请检查浏览器存储权限。")
    return model
  }
  if !download_text(
      read_local(storage_key),
      "moonstudy-unreadable-original.json",
      "application/json;charset=utf-8",
    ) {
    show_notice("无法下载原始数据，请检查浏览器下载权限。")
  }
  model
}

///|
fn finish_restore(model : ViewModel) -> ViewModel {
  let status = restore_read_status()
  let candidate = restore_read_text()
  clear_restore_read()
  if status == "too-large" {
    show_notice("备份文件超过 5 MB，已停止读取。")
    return model
  }
  if status == "read-error" {
    show_notice("无法读取这个备份文件。")
    return model
  }
  guard status == "ok" else { return model }
  let result = @study.restore_storage(candidate)
  if !result.ok {
    show_notice("备份未导入：" + result.message)
    return model
  }
  let restored = @study.load_storage(result.storage_json)
  let count = restored.records.length()
  if !confirm_restore(count) {
    show_notice("已取消恢复，当前数据没有变化。")
    return model
  }
  if !write_local(storage_key, result.storage_json) {
    show_notice("浏览器存储写入失败，备份没有恢复。")
    return model
  }
  let next = reload_with_preferences(model)
  show_notice("备份恢复完成，共 \{count} 条记录。")
  next
}

///|
fn generate_report(model : ViewModel) -> ViewModel {
  guard model.ok else { return model }
  let raw = read_local(storage_key)
  let daily = model.report_type == "daily"
  let result = if daily {
    @study.daily_report_from_storage(raw, model.report_date)
  } else {
    let start = week_start_for_iso(model.report_date)
    let end = week_full_end_for_iso(model.report_date)
    @study.report_from_storage(raw, start, end)
  }
  if !result.ok {
    show_notice(result.message)
    return model
  }
  show_notice("")
  let filename = if daily {
    "moonstudy-daily-\{model.report_date}.md"
  } else {
    "moonstudy-weekly-\{week_start_for_iso(model.report_date)}.md"
  }
  {
    ..model,
    report_markdown: result.markdown,
    report_title: if daily {
      "日报预览"
    } else {
      "周报预览"
    },
    report_filename: filename,
  }
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
    ExternalChanged => reload_with_preferences(model)
    SetCategoryChoice(value) => { ..model, category_choice: value, }
    SetActivityMode(value) => { ..model, activity_mode: value, }
    SetActivityYear(value) => {
      let year = if value.length() == 4 {
        (value[0].to_int() - '0'.to_int()) * 1000 +
        (value[1].to_int() - '0'.to_int()) * 100 +
        (value[2].to_int() - '0'.to_int()) * 10 +
        value[3].to_int() -
        '0'.to_int()
      } else {
        model.activity_year
      }
      { ..model, activity_year: year, }
    }
    SetReportType(value) =>
      { ..model, report_type: value, report_markdown: "", report_filename: "", }
    SetReportDate(value) =>
      { ..model, report_date: value, report_markdown: "", report_filename: "", }
    GenerateReport => generate_report(model)
    DownloadReport => {
      if model.report_filename.length() > 0 {
        if !download_text(
            model.report_markdown,
            model.report_filename,
            "text/markdown;charset=utf-8",
          ) {
          show_notice("报告下载失败，请检查浏览器下载权限。")
        }
      }
      model
    }
    ExportBackup => export_backup(model)
    DownloadRaw => download_raw_storage(model)
    ChooseRestore => {
      choose_restore_file()
      model
    }
    RestoreFileChanged => {
      begin_restore_read()
      model
    }
    RestoreReady => finish_restore(model)
  }
  (next, @rabbita.none)
}

///|
fn record_subtitle(record : @study.StudyRecord) -> String {
  let buf = StringBuilder()
  buf.write_string(record.category)
  buf.write_string(" · ")
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
fn activity_map(model : ViewModel) -> Map[String, @study.DayStat] {
  let start = shift_date_iso(model.today, -6)
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
fn activity_level(value : Int, maximum : Int) -> Int {
  if value <= 0 || maximum <= 0 {
    0
  } else {
    Int::min(4, Int::max(1, (value * 4 + maximum - 1) / maximum))
  }
}

///|
fn activity_years(model : ViewModel) -> Array[Int] {
  let current = @study.year_from_iso(model.today)
  let mut earliest = current
  for record in model.records {
    let year = @study.year_from_iso(record.date)
    if year < earliest {
      earliest = year
    }
  }
  let years : Array[Int] = []
  for year = current; year >= earliest; year = year - 1 {
    years.push(year)
  }
  years
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
      div(class="grid", [
        label([
          span("主题"),
          select(
            id="category-choice",
            name="category-choice",
            on_change=value => emit(SetCategoryChoice(value)),
            [
              option(
                value="学习",
                selected=model.category_choice == "学习",
                "学习",
              ),
              option(
                value="运动",
                selected=model.category_choice == "运动",
                "运动",
              ),
              option(
                value="工作",
                selected=model.category_choice == "工作",
                "工作",
              ),
              option(
                value="生活",
                selected=model.category_choice == "生活",
                "生活",
              ),
              option(
                value="custom",
                selected=model.category_choice == "custom",
                "自定义",
              ),
            ],
          ),
        ]),
        label(hidden=model.category_choice != "custom", [
          span("自定义主题"),
          input(
            id="custom-category",
            name="custom-category",
            maxlength=30,
            placeholder="例如：阅读",
            required=model.category_choice == "custom",
          ),
        ]),
      ]),
      label([
        span("学习内容 / 具体事项"),
        input(
          id="topic",
          name="topic",
          maxlength=100,
          placeholder="例如：MoonBit 基础、慢跑 5 公里",
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
        span("投入最多主题"),
        strong(
          id="top-category",
          title=summary.top_category,
          summary.top_category,
        ),
        small("按累计分钟"),
      ]),
      div(class="metric metric-topic", [
        span("投入最多内容"),
        strong(id="top-topic", title=summary.top_topic, summary.top_topic),
        small("按累计分钟"),
      ]),
    ]),
  ])
}

///|
fn signed(value : Int, suffix : String) -> String {
  if value > 0 {
    "+\{value}\{suffix}"
  } else {
    "\{value}\{suffix}"
  }
}

///|
fn comparison_view(model : ViewModel) -> @html.Html {
  let comparison = @study.compare_weeks(
    read_local(storage_key),
    model.week_start,
    model.today,
  )
  let minutes_delta = if comparison.has_baseline {
    "\{signed(comparison.delta.minutes, " 分钟")}（\{signed(comparison.delta.minutes_percent, "%")}）"
  } else {
    "无对比基线"
  }
  let count_delta = if comparison.has_baseline {
    "\{signed(comparison.delta.count, " 条")}（\{signed(comparison.delta.count_percent, "%")}）"
  } else {
    "无对比基线"
  }
  let rate_delta = if comparison.has_baseline {
    signed(comparison.delta.completion_rate_points, " 个百分点")
  } else {
    "无对比基线"
  }
  section(class="card", [
    div(class="card-heading", [
      h2(id="comparison-title", "本周与上周同进度"),
      span(
        class="muted",
        "\{comparison.previous.start} 至 \{comparison.previous.end}",
      ),
    ]),
    div(class="metrics", [
      div(class="metric", [
        span("上周学习"),
        strong(
          id="previous-week-minutes",
          comparison.previous.minutes.to_string(),
        ),
        small(minutes_delta),
      ]),
      div(class="metric", [
        span("上周记录"),
        strong(id="previous-week-count", comparison.previous.count.to_string()),
        small(count_delta),
      ]),
      div(class="metric", [
        span("上周完成率"),
        strong(
          id="previous-week-rate",
          "\{comparison.previous.completion_rate}%",
        ),
        small(rate_delta),
      ]),
      div(class="metric metric-topic", [
        span("上周投入最多"),
        strong(
          id="previous-week-topic",
          title=comparison.previous.top_topic,
          comparison.previous.top_topic,
        ),
        small(
          id="week-comparison-status",
          if comparison.has_baseline {
            "同进度环比"
          } else {
            "无对比基线"
          },
        ),
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
fn activity_legend() -> @html.Html {
  div(class="heatmap-legend", [
    span("少"),
    i(attrs=@html.Attrs::build().data_set("level", "0"), ""),
    i(attrs=@html.Attrs::build().data_set("level", "1"), ""),
    i(attrs=@html.Attrs::build().data_set("level", "2"), ""),
    i(attrs=@html.Attrs::build().data_set("level", "3"), ""),
    i(attrs=@html.Attrs::build().data_set("level", "4"), ""),
    span("多"),
  ])
}

///|
fn activity_month_labels(year : Int) -> Array[@html.Html] {
  let leading = (@study.weekday_sunday_zero("\{year}-01-01") + 6) % 7
  let month_days = [
    31,
    if @study.days_in_calendar_year(year) == 366 {
      29
    } else {
      28
    },
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]
  let labels : Array[@html.Html] = []
  let mut elapsed = 0
  for month = 1; month <= 12; month = month + 1 {
    let column = (leading + elapsed) / 7 + 1
    labels.push(span(style=["grid-column: \{column}"], "\{month}月"))
    elapsed = elapsed + month_days[month - 1]
  }
  labels
}

///|
fn activity_bar_height(value : Int, maximum : Int) -> Int {
  if value <= 0 || maximum <= 0 {
    0
  } else {
    Int::min(7, Int::max(1, (value * 7 + maximum - 1) / maximum))
  }
}

///|
fn month_from_iso(date : String) -> Int {
  (date[5].to_int() - '0'.to_int()) * 10 + date[6].to_int() - '0'.to_int()
}

///|
fn daily_activity(model : ViewModel) -> @html.Html {
  let year = model.activity_year
  let year_start = "\{year}-01-01"
  let year_end = "\{year}-12-31"
  let days : Map[String, @study.DayStat] = Map([])
  let mut maximum = 0
  for day in @study.activity_stats(model.records, year_start, year_end) {
    days[day.date] = day
    if day.completed_count > maximum {
      maximum = day.completed_count
    }
  }
  let leading = (@study.weekday_sunday_zero(year_start) + 6) % 7
  let cells : Array[@html.Html] = []
  for blank = 0; blank < leading; blank = blank + 1 {
    cells.push(span(class="activity-blank", ""))
  }
  let total_days = @study.days_in_calendar_year(year)
  for offset = 0; offset < total_days; offset = offset + 1 {
    let date = @study.date_for_year_day(year, offset)
    let completed = day_completed(days, date)
    let minutes = day_minutes(days, date)
    let future = date > model.today
    let attrs = @html.Attrs::build()
      .data_set(
        "level",
        (if future { 0 } else { activity_level(completed, maximum) }).to_string(),
      )
      .data_set("count", completed.to_string())
    cells.push(
      i(
        class=if future { "future" } else { "" },
        title=if future {
          "\{date} · 尚未到达"
        } else {
          "\{date} · 完成 \{completed} 条 · \{minutes} 分钟"
        },
        attrs~,
        "",
      ),
    )
  }
  let labels = activity_month_labels(year)
  div(class="activity-body", [
    div(class="heatmap-scroll", [
      div(class="heatmap-frame", [
        div(class="heatmap-corner", ""),
        div(id="heatmap-months", class="heatmap-months", labels),
        div(class="heatmap-weekdays", [
          span("一"),
          span(""),
          span("三"),
          span(""),
          span("五"),
          span(""),
          span("日"),
        ]),
        div(id="heatmap", class="heatmap", cells),
      ]),
    ]),
    activity_legend(),
  ])
}

///|
fn weekly_activity(model : ViewModel) -> @html.Html {
  let weeks = @study.weekly_completion_stats(model.records, model.activity_year)
  let mut maximum = 0
  for week in weeks {
    if week.completed_count > maximum {
      maximum = week.completed_count
    }
  }
  let cells : Array[@html.Html] = []
  for week in weeks {
    let height = activity_bar_height(week.completed_count, maximum)
    let filled_level = activity_level(week.completed_count, maximum)
    for row = 0; row < 7; row = row + 1 {
      let filled = row >= 7 - height
      let attrs = @html.Attrs::build()
        .data_set("level", (if filled { filled_level } else { 0 }).to_string())
        .data_set("count", week.completed_count.to_string())
      cells.push(
        i(
          title="\{week.start} 至 \{week.end} · 完成 \{week.completed_count} 条",
          attrs~,
          "",
        ),
      )
    }
  }
  div(class="activity-body", [
    div(class="heatmap-scroll", [
      div(class="activity-matrix-frame", [
        div(id="weekly-activity", class="heatmap activity-matrix", cells),
        div(
          class="heatmap-months activity-matrix-months",
          activity_month_labels(model.activity_year),
        ),
      ]),
    ]),
    activity_legend(),
  ])
}

///|
fn cumulative_activity(model : ViewModel) -> @html.Html {
  let months = @study.monthly_cumulative_completion_stats(
    model.records,
    model.activity_year,
  )
  let maximum = if months.length() == 0 {
    0
  } else {
    months[months.length() - 1].completed_count
  }
  let weeks = @study.weekly_completion_stats(model.records, model.activity_year)
  let year_end = "\{model.activity_year}-12-31"
  let cells : Array[@html.Html] = []
  for week in weeks {
    let marker = if week.end > year_end { year_end } else { week.end }
    let month = month_from_iso(marker)
    let count = months[month - 1].completed_count
    let height = activity_bar_height(count, maximum)
    let filled_level = activity_level(count, maximum)
    for row = 0; row < 7; row = row + 1 {
      let filled = row >= 7 - height
      let attrs = @html.Attrs::build()
        .data_set("level", (if filled { filled_level } else { 0 }).to_string())
        .data_set("count", count.to_string())
      cells.push(
        i(title="截至 \{month} 月累计完成 \{count} 条", attrs~, ""),
      )
    }
  }
  div(class="activity-body", [
    div(class="heatmap-scroll", [
      div(class="activity-matrix-frame", [
        div(id="cumulative-activity", class="heatmap activity-matrix", cells),
        div(
          class="heatmap-months activity-matrix-months",
          activity_month_labels(model.activity_year),
        ),
      ]),
    ]),
    activity_legend(),
  ])
}

///|
fn activity_panel(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  let years : Array[@html.Html] = activity_years(model).map(year => {
    option(
      value=year.to_string(),
      selected=year == model.activity_year,
      "\{year} 年",
    )
  })
  div(class="trend-block activity-panel", [
    div(class="activity-toolbar", [
      div(class="activity-heading", [
        h3("活动记录"),
        select(
          id="activity-year",
          on_change=value => emit(SetActivityYear(value)),
          years,
        ),
      ]),
      div(class="activity-tabs", [
        button(
          id="activity-daily",
          class=if model.activity_mode == "daily" {
            "activity-tab active"
          } else {
            "activity-tab"
          },
          type_="button",
          on_click=emit(SetActivityMode("daily")),
          "每日",
        ),
        button(
          id="activity-weekly",
          class=if model.activity_mode == "weekly" {
            "activity-tab active"
          } else {
            "activity-tab"
          },
          type_="button",
          on_click=emit(SetActivityMode("weekly")),
          "每周",
        ),
        button(
          id="activity-cumulative",
          class=if model.activity_mode == "cumulative" {
            "activity-tab active"
          } else {
            "activity-tab"
          },
          type_="button",
          on_click=emit(SetActivityMode("cumulative")),
          "累计",
        ),
      ]),
    ]),
    p(class="activity-note", "颜色越深，完成数量越多"),
    match model.activity_mode {
      "weekly" => weekly_activity(model)
      "cumulative" => cumulative_activity(model)
      _ => daily_activity(model)
    },
  ])
}

///|
fn trends_view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
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
    activity_panel(model, emit),
  ])
}

///|
fn report_view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  let daily = model.report_type == "daily"
  let week_start = week_start_for_iso(model.report_date)
  let week_end = week_full_end_for_iso(model.report_date)
  section(class="card", [
    div(class="card-heading", [
      h2(id="report-title", "学习报告"),
      span(class="muted", "日报或任意周周报 · Markdown 文本"),
    ]),
    p(
      class="report-help",
      "选择报告类型和日期后生成内容，可复制到笔记，也可下载为 .md 文件。",
    ),
    div(class="report-controls", [
      label([
        span("报告类型"),
        select(
          id="report-type",
          on_change=value => emit(SetReportType(value)),
          [
            option(value="daily", selected=daily, "日报"),
            option(value="weekly", selected=!daily, "周报"),
          ],
        ),
      ]),
      label(id="report-date-label", [
        span(
          if daily {
            "日报日期"
          } else {
            "选择自然周（周一至周日）"
          },
        ),
        input(
          id="report-date",
          input_type=if daily { @html.Date } else { @html.Week },
          value=if daily {
            model.report_date
          } else {
            week_value_for_iso(model.report_date)
          },
          on_change=value => {
            emit(
              SetReportDate(
                if daily {
                  value
                } else {
                  week_start_for_value(value)
                },
              ),
            )
          },
        ),
      ]),
    ]),
    p(
      id="report-range",
      class="muted",
      hidden=daily,
      "本周范围：\{week_start} 至 \{week_end}",
    ),
    div(class="actions", [
      button(
        id="generate-report",
        class="secondary",
        type_="button",
        disabled=!model.ok,
        on_click=emit(GenerateReport),
        if daily {
          "生成日报"
        } else {
          "生成周报"
        },
      ),
      button(
        id="download-report",
        class="secondary",
        type_="button",
        hidden=model.report_markdown.length() == 0,
        on_click=emit(DownloadReport),
        "下载 .md",
      ),
    ]),
    label(
      id="report-label",
      class="report-label",
      hidden=model.report_markdown.length() == 0,
      [
        span(id="report-preview-title", model.report_title),
        textarea(
          id="report-output",
          read_only=true,
          rows=12,
          value=model.report_markdown,
          "",
        ),
      ],
    ),
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
        h2(id="topics-title", "学习内容"),
        span(class="muted", "按累计分钟排序"),
      ]),
      p(
        id="empty-topics",
        class="empty",
        hidden=model.topics.length() > 0,
        "保存记录后，这里会显示每项具体内容的投入时间。",
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
fn backup_view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  fragment([
    button(
      id="backup-raw",
      class="backup",
      type_="button",
      hidden=model.ok || !model.storage_available,
      on_click=emit(DownloadRaw),
      "下载无法读取的原始数据",
    ),
    section(class="card", [
      div(class="card-heading", [
        h2(id="data-title", "数据备份与恢复"),
        span(class="muted", "完整 JSON · 只保存在你手中"),
      ]),
      p(
        class="report-help",
        "建议提交前和清理浏览器数据前下载备份。恢复时会先由 MoonBit 校验，不会导入损坏文件。",
      ),
      div(class="actions", [
        button(
          id="export-data",
          class="secondary",
          type_="button",
          disabled=!model.ok,
          on_click=emit(ExportBackup),
          "导出完整备份",
        ),
        button(
          id="choose-restore",
          class="secondary",
          type_="button",
          disabled=!model.storage_available,
          on_click=emit(ChooseRestore),
          "选择备份恢复",
        ),
        input(
          id="restore-file",
          input_type=@html.File,
          accept="application/json,.json",
          hidden=true,
          on_change=_value => emit(RestoreFileChanged),
        ),
        button(
          id="restore-ready",
          type_="button",
          hidden=true,
          on_click=emit(RestoreReady),
          "",
        ),
      ]),
    ]),
  ])
}

///|
fn view(model : ViewModel, emit : @rabbita.Emit[Msg]) -> @html.Html {
  fragment([
    // Kept as a test and extension integration hook. All ordinary changes now
    // flow through the MoonBit model without a cross-layer refresh.
    button(
      id="app-refresh",
      type_="button",
      hidden=true,
      on_click=emit(ExternalChanged),
      "",
    ),
    form_view(model, emit),
    summary_view(model),
    comparison_view(model),
    trends_view(model, emit),
    records_view(model, emit),
    report_view(model, emit),
    backup_view(model, emit),
  ])
}

///|
fn study_app() -> @rabbita.Val[@html.Html] {
  let (model, emit) = @rabbita.create_state(load_with_limit(page_size), update~)
  model.map(model => view(model, emit))
}

///|
priv enum ThemeMsg {
  ChangeTheme(String)
}

///|
fn theme_app() -> @rabbita.Val[@html.Html] {
  let (theme, emit) = @rabbita.create_pure_state(read_theme(), update=fn(
    _current,
    message,
  ) {
    match message {
      ChangeTheme(value) => {
        apply_theme(value)
        if !write_theme(value) {
          show_notice(
            "主题已经切换，但浏览器没有保存这项偏好。",
          )
        }
        value
      }
    }
  })
  theme.map(value => {
    label(class="theme-picker", [
      span("界面颜色"),
      select(id="theme-select", on_change=next => emit(ChangeTheme(next)), [
        option(value="system", selected=value == "system", "跟随系统"),
        option(value="light", selected=value == "light", "亮色"),
        option(value="dark", selected=value == "dark", "暗色"),
      ]),
    ])
  })
}

///|
fn main {
  let preference = read_theme()
  apply_theme(preference)
  watch_system_theme()
  @rabbita.new(theme_app).mount("theme-root")
  @rabbita.new(study_app).mount("app-main")
  limit_date_inputs(today_iso())
}
