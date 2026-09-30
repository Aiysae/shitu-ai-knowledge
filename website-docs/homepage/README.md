# 势途AI企业级知识库官网首页源码

此目录保存 Next.js 首页。请从上级目录运行 `npm run setup`、`npm run build` 和 `npm run preview`，一起构建首页和 `/docs/` 文档站。部署说明见上级目录的 README。

- `app/page.tsx`：产品介绍与同域文档链接。
- `app/home.module.css`：首页布局。
- `app/interactive.tsx`：响应式导航和主题切换。
- `app/theme.ts`：与 VitePress 文档站兼容的主题持久化及首屏初始化。
- `../shared/brand.css`：首页与文档站共用的深浅色设计变量。

开发时仍可用 `npm run dev` 单独预览首页；完整 `/docs/` 需要从上级目录运行合并预览。
