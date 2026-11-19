# GitHub Pages 发布

仓库：`Yahagi-yz/hex-mayhem-lab`。在仓库 Settings → Pages 设置 **GitHub Actions**，工作流位于 `.github/workflows/pages.yml`。每次推送 `main` 或手动运行部署，先执行本地语法/资料测试，再从公开授权数据源读取并生成 `verified-data.js`，最后发布网站到 GitHub Pages。

公开来源当前版本和实际抓取时间均记录在 `HM_VERIFIED.meta`，网页会展示。`scripts/sync-reference.cjs` 不生成任何未经来源确认的英雄装备出装，不获取或发布个人战绩。上游数据获取失败时 workflow 会失败，阻止覆盖已有成功部署，避免错误声称数据已更新。

现有个人资料继续存在用户浏览器的原 localStorage 键中。需要跨设备/跨域迁移时从旧网站导出 JSON 再导入。

## 状态与来源

- 26.23 官方规则：[Riot Patch Notes](https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-23-notes/)
- 公开统计快照：[arammayhem.com/data](https://arammayhem.com/data/)（CC BY 4.0，**数据来源：arammayhem.com**）
- 中文元数据：[CommunityDragon](https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/zh_cn/v1/cherry-augments.json)

网页显示原站链接、快照版本与日期。公开英雄强化组合不包含装备顺序；请在相应来源英雄详情核实完整装备资料。