# 海斗战术室 · Hex Mayhem Lab

**v1.3 · 26.23 规则基础 · 2026-11-19**

玩家个人使用的《英雄联盟》海克斯大乱斗资料与实测管理站，非 Riot 官方项目。现有 173 位英雄、原有 25 位英雄的 51 条**历史策略草案**（均未逐条验证来源）、12 种 Headliner 开局演出、3 张地图以及有明确版本来源的强化资料。

## 三项数据承诺

1. **强化**：读取 arammayhem.com 基于少量服务器样本、采用 CC BY 4.0 许可的强化名称、稀有度与*选取率*；补充 Riot 26.23 公告明确新增的 4 个坦克强化。Riot CommunityDragon 中文元数据作为辅助。26.22 的最新公开统计不能写成 26.23 实时胜率，尚无法独立核实的完整效果不自动编造。特殊的「技能强化」「任务强化」仅针对来源有明确证据的条目做类型标记，五杀乐队的 Q/W/E/R 能力属于局内演出强化机制。
2. **开局规则**：严格区别 12 种乐队／演出（Headliner）与 3 张地形地图。包括五杀乐队、K/DA、心之钢、真实伤害、太空律动、咖啡甜心、小蜜蜂乐队、命令行、26.23 的 Arcade、Debonair、La Ilusión、Maestro。来源链接显示在每个条目下面。
3. **英雄成长路线**：没有具体公开来源的内容只保留为历史草案，不作为已验证推荐。来源公开组合只显示「强化组合」，不自动编造未提供的数据（如装备顺序或胜率）。详细装备和英雄强化的原站链接可从英雄详情直达。用户自己的实测内容按本地资料保存。

## 技术实现

- 无后台、无账号；本地数据键 `hex_mayhem_lab_v1`，保持与 v1.0 / v1.2 兼容。不会覆盖收藏、用户方案、对局日志；跨浏览器请先导出 JSON。
- `data.js`：25 位旧英雄的 51 条历史方案（待复核）。
- `roster.js`：173 位英雄的离线清单与 Riot Data Dragon 的在线名称补全。
- `reference-data.js`：可直接查证的 12 种演出规则、3 张地图、技能／任务分类和 26.23 新强化。
- `verified-data.js`：离线兜底；部署阶段由 `scripts/sync-reference.cjs` 从公开数据源生成，包含强化、英雄和公开组合快照。
- `app.js`：独立展示「有来源的公开组合」和「历史草案」；三选一工具只对来源明确的组合做命中计数，不把命中率称为胜率。
- `.github/workflows/pages.yml`：静态部署前跑源码验证和来源同步。上游服务异常时拒绝发布不完整的新资料，旧站点仍可用。

## 主要来源与授权

- [Riot 26.23 官方更新](https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-23-notes/)
- [Riot 26.21 官方更新](https://www.leagueoflegends.com/en-au/news/game-updates/league-of-legends-patch-26-21-notes/)
- [Riot / CommunityDragon](https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/zh_cn/v1/cherry-augments.json)
- [arammayhem.com 数据及 CC BY 4.0 许可](https://arammayhem.com/data/) — **数据来源：arammayhem.com**
- [海斗大师 26.21 客户端资料图鉴](https://haidoudashi.com/aram/augments/) 与 [乐队说明](https://haidoudashi.com/aram/headliners/) — 仅据此分类和提炼机制，站内不复制完整图鉴。
- [ARAMDB 英雄资料](https://aramdb.com/en/champion/Yone) — 引导查看各英雄对应的原站装备统计，未复制未许可的数据库。

资料源覆盖范围、补丁更新速度和抽样偏差可能不同，**不可将 26.22 数据解释成 26.23 的实时表现**。

## 构建与检查

```bash
node --check app.js
node tests/smoke.cjs
node scripts/sync-reference.cjs
```

第三条需要访问互联网；GitHub Actions runner 会生成公开资料快照；直接在本地打开源码时如果尚未执行它，界面会清楚提示数据快照不可用。