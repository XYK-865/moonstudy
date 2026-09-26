# MoonStudy · 学习打卡与统计助手

MoonStudy 是一个使用 MoonBit 编写核心业务逻辑的本地优先学习记录网页，也是 2026 MoonBit 九月黑客松的提交候选项目。用户无需注册账号或连接服务器，即可记录每日学习、查看趋势、生成 Markdown 日报和周报，并用 JSON 文件完整备份或恢复数据。

## 为什么做这个项目

学习记录工具常常要求注册、联网或理解复杂表格。MoonStudy 面向第一次接触学习管理工具的用户，把流程收敛成“填写内容和分钟数 → 保存 → 自动统计”。数据默认只保存在用户自己的浏览器中，应用不提供上传接口。

## 功能

- 新增、查看和删除记录，刷新或关闭页面后继续保留；可选择学习、运动、工作、生活或自定义主题，再填写具体内容。
- 今日、本周、累计时长和完成率；分别统计投入最多主题与投入最多具体内容。
- 最近 7 天学习时长柱状图。
- 按年份查看活动记录，支持“每日 / 每周 / 累计”三种模式；每个格子始终对应一个真实日期，没有完成记录的日期不着色。每日按当日完成数分级，每周按所在自然周完成数分级，累计按该日的年内累计数分级；悬停显示日期和当天完成件数。
- 指定日期的 Markdown 日报，以及本周 Markdown 周报；均可预览和下载。
- 使用自然周选择器生成任意周 Markdown 周报，页面明确显示周一至周日范围；支持按相同周进度计算本周/上周环比。
- 亮色、暗色、跟随系统三种主题，并记住选择。
- 完整 JSON 备份和安全恢复；损坏、版本不兼容或重复编号的数据会被拒绝。
- 长学习内容在概览中限制为两行，不再撑坏卡片；悬停可查看全文。

## 在线与本地运行

在线体验：https://xyk-865.github.io/moonstudy/

公开源码：https://github.com/XYK-865/moonstudy

本地运行方式：

```text
cd public
python -m http.server 8124 --bind 127.0.0.1
```

保持终端窗口打开，然后用桌面版 Microsoft Edge 访问：

```text
http://127.0.0.1:8124/
```

不要直接双击 `index.html`；网页使用 JavaScript 模块，需要通过 HTTP 地址打开。

## 数据与隐私

记录使用 localStorage 键 `moonstudy.records.v1`，数据封套版本为 1。旧记录缺少上层主题时会自动归入“学习”，不会丢失原内容。界面主题偏好单独保存在 `moonstudy.theme.v1`。应用无账号、无服务器、无遥测，不会主动上传记录内容。

清除浏览器网站数据、换浏览器、换设备或更换网址来源后，记录不会自动同步。请定期点击“导出完整备份”，需要迁移时再选择该 JSON 文件恢复。

## MoonBit 架构

- `study.mbt`：记录模型、校验、概览统计、主题统计和按日聚合。
- `storage.mbt`：版本化存储契约、增删、读取、备份导出和恢复校验。
- `report.mbt`：Markdown 日报与周报。
- `comparison.mbt`：同进度周环比、跨月/跨年日期切片和变化率。
- `app/`：MoonBit + Rabbita 页面状态树，负责表单、统计、图表、主题、报告、记录列表、完整备份与恢复。
- `web/api.mbt`：11 个浏览器 ESM 导出入口。
- `app/browser.mbt`：极薄浏览器能力 FFI，只提供 localStorage、日期、文件读取、下载和确认框；校验与状态决策仍由 MoonBit 完成。
- `public/index.html`：静态挂载壳；加载 MoonBit 构建产物，并在其执行前提供 Edge 隐藏页所需的两行 Rabbita 调度兼容代码，不包含 UI 或业务逻辑。

既有 10 个接口保持兼容：`moonstudy_ready`、`empty_total`、`read_state`、`add_record`、`delete_record`、`weekly_report`、`daily_report`、`activity_series`、`export_backup`、`restore_backup`。v004 新增 `week_comparison`，不改变既有接口、存储键或封套格式。

## 构建与测试

需要 [MoonBit 官方工具链](https://www.moonbitlang.com/download/) 和 Node.js。

```text
moon fmt
moon check --target js
moon test --target js
moon build --target js --release
node --check ../03_测试与验证/浏览器首版验收_v004.mjs
```

核心 JS 构建产物位于 `_build/js/release/build/web/web.js`，Rabbita 应用产物位于 `_build/js/release/build/app/app.js`。v004 发布候选分别保存在 `public/moonstudy-core_v004.mjs` 与 `public/moonstudy-app_v004.mjs`。仓库保留真实构建结果供 GitHub Pages 直接提供静态网页，并通过 `.gitattributes` 标记为生成文件；MoonBit 源码仍是唯一业务实现来源。

当前 v004 分支包含 38 项 MoonBit 测试，覆盖主题／内容独立统计、旧数据迁移、日期边界、存储损坏、重复编号、日报、任意周周报、活动聚合、年度每日/自然周/月累计、备份恢复和同进度周环比。目标浏览器为桌面版 Microsoft Edge；v004 的 18 类自动验收结果见 `03_测试与验证/浏览器首版验收_v004.md`。v004 尚未合并到 `main`，公开页面仍是 v003。

## 项目边界

当前版本不提供账号、云同步、服务端数据库、多人协作、编辑记录、计时器或通知。这个边界是有意保持的：项目优先保证本地数据安全、测试可复现和初学者可理解。

## 开源许可

本项目使用 [MIT License](LICENSE)。
