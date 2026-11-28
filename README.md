# 张博锐的公开工程索引

个人主页收录机器人遥操作与示范数据 SDK 的代码、离线演示、数据格式和测试，并列出相关公开协作仓库。[访问工程索引](https://zbrsgogogo.github.io/)

## 本地查看

从仓库根目录启动静态文件服务。

```bash
python3 -m http.server 4173 --directory dist
```

打开 <http://localhost:4173/>。中文版和项目链接可直接从 HTML 访问，页面顶部可以切换中英文，浏览器会记住语言设置。

## 更新和部署

- 在 `dist/index.html` 中维护项目、链接和双语文案。默认中文，英文放在对应元素的 `data-en` 属性中。
- 页面样式与语言切换分别位于 `dist/assets/styles.css`、`dist/assets/app.js`。
- 修改发布文件后，同步更新根目录同名文件及 `assets/` 中的对应文件，以兼容从仓库根目录托管。

推送至 `main` 后，GitHub Actions 使用 [Pages 工作流](.github/workflows/pages.yml) 发布 `dist/`。站点无需构建步骤。

[MIT 许可协议](LICENSE)
