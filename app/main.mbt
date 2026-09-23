///|
/// Rabbita entry point (v004 S1). Renders the dashboard directly from the
/// MoonBit core package: no JSON string boundary and no statistics in the
/// browser layer.
using @html {button, div, h1, h2, li, p, section, span, ul}

///|
/// Everything the dashboard view needs, already aggregated by the core package.
pub struct Dashboard {
  ok : Bool
  message : String
  record_count : Int
  today_minutes : Int
  week_minutes : Int
  total_minutes : Int
  completion_rate : Int
  top_topic : String
  topics : Array[@study.TopicStat]
} derive(Eq)

///|
pub extend Dashboard with Eq::{equal, not_equal}

///|
/// The contract key is fixed by the user-confirmed data format; it is not a
/// place to experiment.
let records_key : String = "moonstudy.records.v1"

///|
fn load_dashboard() -> Dashboard {
  let loaded = @study.load_storage(read_local(records_key))
  if !loaded.ok {
    return {
      ok: false,
      message: loaded.message,
      record_count: 0,
      today_minutes: 0,
      week_minutes: 0,
      total_minutes: 0,
      completion_rate: 0,
      top_topic: "暂无",
      topics: [],
    }
  }
  let summary = @study.summarize(
    loaded.records,
    today_local(),
    week_start_local(),
  )
  {
    ok: true,
    message: "",
    record_count: summary.record_count,
    today_minutes: summary.today_minutes,
    week_minutes: summary.week_minutes,
    total_minutes: summary.total_minutes,
    completion_rate: summary.completion_rate,
    top_topic: summary.top_topic,
    topics: @study.topic_stats(loaded.records),
  }
}

///|
priv enum Msg {
  Refresh
}

///|
fn update(
  _model : Dashboard,
  msg : Msg,
  _emit : @rabbita.Emit[Msg],
) -> (Dashboard, @rabbita.Cmd) {
  match msg {
    Refresh => (load_dashboard(), @rabbita.none)
  }
}

///|
fn view(model : Dashboard, emit : @rabbita.Emit[Msg]) -> @html.Html {
  let topic_items : Array[@html.Html] = model.topics.map(topic => {
    li("\{topic.topic} · \{topic.minutes} 分钟 · \{topic.record_count} 条")
  })
  section(class="card", [
    h1("MoonStudy · Rabbita 迁移验证页"),
    p(
      "本页由 MoonBit + Rabbita 直接渲染，学习数据经 MoonBit 核心包读取与统计；仅用于验证 v004 迁移链路。",
    ),
    div([
      span("今日 \{model.today_minutes} 分钟"),
      span("本周 \{model.week_minutes} 分钟"),
      span("总计 \{model.total_minutes} 分钟"),
      span("记录 \{model.record_count} 条"),
      span("完成率 \{model.completion_rate}%"),
      span("投入最多 \{model.top_topic}"),
    ]),
    h2("主题投入"),
    if model.topics.length() == 0 {
      p("暂无学习记录。")
    } else {
      ul(topic_items)
    },
    button(on_click=emit(Refresh), "重新读取本地数据"),
    if model.ok {
      p("本地数据读取正常。")
    } else {
      p("读取失败：\{model.message}")
    },
  ])
}

///|
fn main {
  @rabbita.elmish(model=load_dashboard(), view~, update~).mount("app")
}
