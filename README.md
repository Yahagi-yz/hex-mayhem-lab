# 海斗战术室 · Hex Mayhem Lab

**v1.6 · 技能强化实测记录与证据覆盖 · 2026-11-20**

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
## v1.4 逐英雄核实出装分支（首批）
- 已核对 4 位英雄（易、拉莫斯、赵信、永恩）共 11 条公开三件套顺序，每条标注来源网页、补丁 26.22、数据日期、三件套使用率及观察胜率。
- 这些序列是三件套统计，不是六神装；热门强化和三件套没有联合胜率证据，必须分开展示。
- 新增 `build-evidence.js`，不覆盖 51 条原有历史草案、不覆盖个人收藏、自定义方案或对局记录。
- 新增「有出装证据 / 待核对出装」筛选；可以复制来源三件套到个人可编辑模板，但不会自动给模板加未验证的强化。
- 参考资料：[剑圣](https://arammayhem.com/build/masteryi/)、[龙龟](https://arammayhem.com/build/rammus/)、[赵信](https://arammayhem.com/build/xinzhao/)、[永恩](https://arammayhem.com/build/yone/)，访问时公开页面的 26.22 资料快照。较旧版本的观察胜率不能视为当前结果。

## v1.5 英雄技能强化适配（严格有限证据）

- 新增「技能强化适配」独立页面：可以搜索全 173 位英雄，点击任意英雄查询 Riot Data Dragon `16.23.1` 的 Q/W/E/R 技能名称及基础说明（在线按需请求，失败时显示未获取，不会自己编造技能）。
- 新增 `ability-evidence.js`：目前只把 Riot 26.12 明确指名的 **4 条英雄×技能×强化实例**标为“官方举例”：拉克丝 Q＋Multishot、机器人 Q＋Multishot、盖伦 E＋Quickstep、凯南 R＋Quickstep。
- 通用固定槽位类「Bread and Butter / Bread and Jam / Bread and Cheese」作为 Q/W/E 的**机制参考**独立显示；这不等于该英雄当前一定抽得到，也不等于该技能一定能从技能急速受益。永恩 Q/W 的冷却机制注意事项注明 HexARAM 26.21 来源。
- **完整资格白名单尚未取得**。Riot 26.13 曾修复错误分配及后期技能强化出现率；对其余 169 位英雄不假装已完成资格核实。明确来源的实例并不能推断其他英雄。
- 已验证装备三件套（v1.4）与技能强化资料（v1.5）分层管理，**不会**自动拼接成未经统计证明的“最佳联动胜率”。
- Riot 官方确认海克斯大乱斗禁用传统符文设置，旧资料字段只作为历史备注，不能作为开局符文配置建议。

来源：Riot [26.12 Patch Notes](https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-12-notes/)、[26.13 Patch Notes](https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-13-notes/)、[开发文章](https://www.leagueoflegends.com/en-gb/news/dev/dev-augmentmaxxing-aram-mayhem/)、[模式规则](https://support.riotgames.com/en-us/league-of-legends/events/league-of-legends-aram-mayhem-game-mode)、[HexARAM 26.21](https://hexaram.lol/en/champions/)。

## v1.6 · 个人对局技能强化观察
- 任意英雄的 Q/W/E/R 技能面板可以保存带版本的个人对局记录：海克斯名称、技能槽位、补丁、证据等级、备注以及 HTTPS 截图/录像链接。
- **证据等级必须分层**：「候选出现」不计入可指定技能的记录；「已选中」「已触发」才计入本地技能槽位统计，仍标为用户自述观察，不能升级为 Riot 官方证据。
- 阻止把五杀乐队的四项技能演出选项当成常规技能强化；固定槽位的“面包系列”仅显示规则参考，不推测各英雄是否可抽到。
- 完全保留旧版 `hex_mayhem_lab_v1` localStorage 键及 schema=1，新增字段 `observations`；所有观察记录会随网站「导出/导入 JSON」保存；不会自动上传仓库或任何服务器。
- 验证模块 `observation-store.js` 独立做有效性与版本检查；旧版导入数据不会被清空。
