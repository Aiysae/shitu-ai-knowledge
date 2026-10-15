# 势途AI企业级知识库官网与文档

**由Vantage万极维护并开源**

`website-docs/` 包含官网首页、中文产品文档、共享样式和构建脚本。一次构建会生成首页 `/` 与文档 `/docs/`，产物位于 `static-site/`。

## 本地构建与预览

使用 Node.js 24，在此目录执行：

```bash
npm run setup
npm run build
npm run preview
```

默认预览地址为 `http://127.0.0.1:3000/`。`npm run build` 会检查文档链接、Mermaid 图和静态资源，再生成同域站点。开发时可分别运行 `npm run dev:homepage` 或 `npm run dev:docs`。

## 部署

生成静态产物后，运行 `npm run package:site` 制作压缩包。将包解压到 Web 服务器的新目录；该目录下应直接包含 `index.html`、`docs/` 和 `_next/`。以 [Nginx 配置](deploy/nginx.conf) 为模板，将站点根目录指向该目录。保留文档的 `.html` 路由规则，使未知路径正确返回 404。发布前执行 `nginx -t`，再重载 Nginx。

也可以在仓库根目录构建独立的官网镜像：

```bash
docker build -t shitu-ai-site:local website-docs
docker run -d --name shitu-ai-site -p 8080:80 shitu-ai-site:local
```

访问 `http://127.0.0.1:8080/` 和 `/docs/` 检查结果。镜像只包含静态站点；知识库 Web 应用由仓库根目录的 Docker Compose 单独部署。容器监听端口可通过 `WEBSITE_NGINX_PORT` 设置。

## 目录

- `homepage/`：首页源码与品牌素材。
- `01-getting-started/` 至 `06-development/`：产品与开发文档。
- `.vitepress/`：文档站配置。
- `shared/`：首页和文档共用的样式与顶栏。
- `scripts/`：构建、检查和打包脚本。
- `static-site/`：构建后的部署目录。

品牌及第三方图标来源见 [素材说明](homepage/BRAND-ASSETS.md)。
