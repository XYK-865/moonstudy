# MoonStudy · 学习打卡与统计助手

MoonStudy 是一个使用 MoonBit 编写核心业务逻辑的本地优先学习记录网页，也是 2026 MoonBit 九月黑客松的提交候选项目。用户无需注册账号或连接服务器，即可记录每日学习、查看趋势、生成 Markdown 日报和周报，并用 JSON 文件完整备份或恢复数据。

## 为什么做这个项目

学习记录工具常常要求注册、联网或理解复杂表格。MoonStudy 面向第一次接触学习管理工具的用户，把流程收敛成“填写内容和分钟数 → 保存 → 自动统计”。数据默认只保存在用户自己的浏览器中，应用不提供上传接口。

## 功能

- 新增、查看和删除学习记录，刷新或关闭页面后继续保留。
- 今日、本周、累计学习时长，完成率和主题投入统计。
- 最近 7 天学习时长柱状图。
- 过去一年每日完成量格子图，颜色按当天已完成记录数变化。
- 指定日期的 Markdown 日报，以及本周 Markdown 周报；均可预览和下载。
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

学习记录使用 localStorage 键 `moonstudy.records.v1`，数据封套版本为 1。主题偏好单独保存在 `moonstudy.theme.v1`。应用无账号、无服务器、无遥测，不会主动上传学习内容。

清除浏览器网站数据、换浏览器、换设备或更换网址来源后，记录不会自动同步。请定期点击“导出完整备份”，需要迁移时再选择该 JSON 文件恢复。

## MoonBit 架构

- `study.mbt`：记录模型、校验、概览统计、主题统计和按日聚合。
- `storage.mbt`：版本化存储契约、增删、读取、备份导出和恢复校验。
- `report.mbt`：Markdown 日报与周报。
- `web/api.mbt`：10 个浏览器 ESM 导出入口。
- `public/host.js`：薄浏览器适配，只负责 DOM、localStorage、文件与可视化绘制，不重算非零业务统计。

既有 6 个接口保持兼容：`moonstudy_ready`、`empty_total`、`read_state`、`add_record`、`delete_record`、`weekly_report`。v003 新增：`daily_report`、`activity_series`、`export_backup`、`restore_backup`。

## 构建与测试

需要 [MoonBit 官方工具链](https://www.moonbitlang.com/download/) 和 Node.js。

```text
moon fmt
moon check --target js
moon test --target js
moon build --target js
node --check public/host.js
```

JS 构建产物位于 `_build/js/debug/build/web/web.js`。发布时将它复制为 `public/moonstudy-core_v003.mjs`。仓库已经保留发布所需的构建结果，以便 GitHub Pages 直接提供静态网页；业务源码仍是唯一实现来源。

当前 v003 包含 24 项 MoonBit 测试，覆盖统计、日期边界、存储损坏、重复编号、日报、周报、活动聚合和备份恢复。目标浏览器为桌面版 Microsoft Edge，完整演示步骤见 `验收演示说明_v001.md`。

## 项目边界

当前版本不提供账号、云同步、服务端数据库、多人协作、编辑记录、计时器或通知。这个边界是有意保持的：项目优先保证本地数据安全、测试可复现和初学者可理解。

## 开源许可

本项目使用 [MIT License](LICENSE)。
