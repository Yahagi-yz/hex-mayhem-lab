# 海斗战术室 · GitHub Pages 发布说明

此包已经包含 `.github/workflows/pages.yml`，在 GitHub 仓库 `main` 分支提交网站源码后，GitHub Actions 会进行数据和语法自检并自动部署。

## 先创建一个空仓库

GitHub 账号：`Yahagi-yz`。

1. 打开 https://github.com/new?name=hex-mayhem-lab （仓库名已在链接中建议为 `hex-mayhem-lab`）。
2. 建议选择 **Public**。**不要**勾选 Initialize with a README、.gitignore 或 License（因为发布包里已自带 README）。
3. 点击 Create repository。若由 ChatGPT 的 GitHub 连接继续提交代码，创建仓库后告诉助手“已经创建”，让助手向 `Yahagi-yz/hex-mayhem-lab` 写入文件。

## 方式 A：用 GitHub Actions 发布（推荐）

1. 把这个 ZIP 解压后，**将目录中的文件内容**（含 `.github/workflows/pages.yml`）提交到仓库根目录的 `main` 分支；不要把 zip 文件原样当网站上传。
2. 在仓库 `Settings → Pages → Build and deployment → Source` 选择 **GitHub Actions**。
3. 到 `Actions` 页运行 **Deploy Hex Mayhem Lab to GitHub Pages** 的 `workflow_dispatch`，或在首次提交后查看对应运行。
4. 工作流成功后在 `Settings → Pages` 查看 GitHub 实际给出的访问 URL。若使用默认项目仓库名，通常会是 `https://Yahagi-yz.github.io/hex-mayhem-lab/`。这个网址是**预期格式**，发布成功前不代表已上线。

## 方式 B：从分支直接部署（不用 Actions）

若不想运行工作流，可在 `Settings → Pages` 选择 `Deploy from a branch`，选择 `main` + `/(root)`，保存即可。只需要网站的五个源码文件，其他文件不会影响站点运行。

## 发布后的安全与数据保全

- 网站是纯静态的，无登录和云数据库；GitHub 只会发布静态 HTML/CSS/JS，不会自动收到使用者的收藏、战绩或自定义流派。
- 从本地 HTML 切换到新网址时，浏览器**不会**自动迁移 localStorage。若已有记录，在旧网站的「数据管理」先 **导出 JSON**，再在新网站 **导入 JSON**。
- 不同浏览器/设备不会实时同步，请定期导出 JSON。不要把包含私人笔记的 JSON 提交到公开仓库。
- 基础配装与强化为可编辑的个人参考方案，不等同于实时高胜率榜；版本更新仍需要核对官方补丁。
- 页面使用第三方英雄图片 CDN，断网可能只显示文字占位，不影响本地策略功能。

## 后续更新

编辑 `data.js` 中的初始方案或通过 `app.js` 修改界面后，提交 `main` 即触发重新测试与部署。`node tests/smoke.cjs` 可用于本机验证种子数据库结构。