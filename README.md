# borui zhang · GitHub 个人主页

面向 `https://zbrsgogogo.github.io/` 的纯静态个人主页，聚焦机器人系统、AI Agent、交互产品与开源工程。

## 本地预览

无需安装依赖或执行构建：

```bash
python3 -m http.server 4173 --directory dist
```

然后访问 `http://localhost:4173/`。

## 内容维护

- 个人资料、统计、方向与项目：`dist/assets/app.js`
- 页面结构与搜索元数据：`dist/index.html`
- 视觉与响应式布局：`dist/assets/styles.css`
- 机器人主视觉：`dist/assets/robot-builder.png`
- 社交分享封面：`dist/assets/og-cover.png`

页面不依赖框架和运行时 API；修改后刷新浏览器即可查看结果。公开统计应与 GitHub 上可验证的信息保持一致。

## 部署到 GitHub Pages

1. 在 `ZbrsGOGOGO` 账号下创建公开仓库 `ZbrsGOGOGO.github.io`。
2. 将本目录推送到仓库的 `main` 分支。
3. 在仓库 **Settings → Pages** 中将 Source 设为 **GitHub Actions**。
4. `Deploy GitHub Pages` 工作流完成后，访问 `https://zbrsgogogo.github.io/`。

部署工作流会直接发布 `dist/`，不需要 `gh-pages` 分支。

## License

[MIT](LICENSE)
