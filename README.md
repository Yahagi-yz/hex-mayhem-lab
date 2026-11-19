# 海斗战术室 · Hex Mayhem Lab

版本：v1.1 · GitHub Pages 发布就绪；初始资料库截至 2026-11-19（官方 26.23 版本，部分推荐仍基于 26.22 数据）。

一个可自行维护的**海克斯大乱斗英雄出装与局内强化选取网站**。包含 25 位英雄、51 条初始路线，支持针对不同强化选择不同流派、记录实测与导出 JSON。初始出装包含经验性打法与待验证方案，**不是实时胜率平台**，也不隶属 Riot Games。

## 启动与发布

- **本地运行：** 下载「海斗战术室-单文件版.html」，双击打开；或者将这份源码保存在同一目录后打开 `index.html`。
- **上线 GitHub Pages：** 阅读 [DEPLOY.md](DEPLOY.md)。已包含 `.github/workflows/pages.yml` 和 `tests/smoke.cjs`，可以在仓库启用 GitHub Actions Pages 后自动部署。
- **页面图片：** 使用 Riot Data Dragon 在线 CDN，断网时会显示中文占位。

## 功能

- 25 位英雄，51 条初始流派；可编辑核心/备选强化、出装顺序、装备替换、适用场景与依据。
- 英雄检索、常用英雄收藏、定位筛选、全站搜索。
- 三选一强化的流派匹配工具（核心 +40、备选 +15 的**自定义匹配分，不是胜率**）。
- 新增英雄、编辑/复制流派、保存对局日志和自己的实战经验。
- 个人数据只存于当前浏览器 localStorage，支持 JSON 导入/导出。
- PC/手机自适应布局，Ctrl+K 搜索、G 返回总览。

## 数据迁移注意

**本地版与网页版的数据不会自动同步！** 第一次切换线上网址之前，请先在旧版「数据管理 → 导出 JSON」，在网页版「数据管理 → 导入 JSON」。清除网站数据或换设备会丢失未备份数据。

## 参考（请核对版本/样本）

- [Riot 官方补丁 26.23](https://www.leagueoflegends.com/en-au/news/game-updates/league-of-legends-patch-26-23-notes/)
- [海斗实验室](https://www.haidoulab.cn/)
- [ARAM Mayhem 26.23](https://arammayhem.com/zh-cn/patch/26-23/)
- [Hexdata](https://hexdata.com.cn/)

数据来源可能采用不同版本编号或更新日期，不得直接混合为统一实时胜率数据。网站不承诺所有推荐为最优路线，使用中请逐项实测复核。