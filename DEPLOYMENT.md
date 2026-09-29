# 势途AI企业级知识库部署

由Vantage万极维护并开源

## 1. 环境

使用支持 Docker Compose v2 的 Linux、macOS 或 Windows 主机。建议从 4 核、16 GB 内存和 40 GB 可用磁盘开始；实际容量取决于文档、模型与并发。首次源码构建需要联网，后端与解析器构建可能耗时较长。

本发行版提供源码构建。只有在 Releases 明确列出镜像后，再使用对应的预构建镜像；请勿把镜像命名视为已经上传。

## 2. 首次安装

```sh
git clone https://github.com/Aiysae/shitu-ai-knowledge.git
cd shitu-ai-knowledge
cp .env.example .env
```

在 `.env` 中设置数据库、Redis 和 JWT 密钥。可用 `openssl rand -hex 32` 生成独立随机值。不要使用示例密码。

本机体验时设置：

```dotenv
FRONTEND_PORT=127.0.0.1:18081
APP_PORT=127.0.0.1:18082
WEKNORA_VERSION=v0.1.0
WITH_ANYDOC=0
```

`WITH_ANYDOC=0` 使用独立 docreader 解析器，跳过可选 Rust anydoc 构建。需要进程内 anydoc 时设为 `1`。兼容环境变量 `WEKNORA_*` 继续沿用。

```sh
docker compose --project-name shitu-ai build app frontend docreader
docker compose --project-name shitu-ai up -d
docker compose --project-name shitu-ai ps
```

打开 `http://127.0.0.1:18081`，按注册流程创建自己的账号。配置对话、Embedding 和可选重排模型，创建知识库，再导入 `dataset/shitu-demo/` 中的演示 Markdown。部署者使用自己的模型账号和资料。

独立 Compose 项目创建自己的卷。升级已有部署时沿用原项目名、原卷和运行配置，仅更新服务镜像；先停止进行中的导入任务，再重启 app/frontend。不要执行 `down -v`。

## 3. Agent / MCP

管理员进入「设置 → 集成 → MCP Server」，创建端点，限定知识库与工具范围，复制页面生成的地址和 Bearer Token 到 MCP 客户端。端点路径仍为 `/mcp/<endpoint-id>`；初始化服务名为 `shitu-ai-knowledge`。

接入者不必打开网页登录；管理员创建端点后向其提供可访问的端点及凭证即可。`127.0.0.1` 只适用于同一台机器。跨机器访问需部署者配置域名、HTTPS 与访问控制。

API 文档、认证、工具清单见 [MCP 文档](website-docs/03-features/08-mcp.md) 和 [API 参考](website-docs/04-api/01-api-overview.md)。Widget 支持 `ShituAI` 全局名称，既有 `WeKnora` 全局名称保留兼容。

## 4. 文件同步

Web 上传的文件不会自动观察本机文件夹。平台数据源同步请使用已有数据源连接器；自建文件夹同步需要显式配置同步器、目录范围及首次导入/删除规则。本公开发行版不包含公司私有目录、账号、同步清单和钥匙串读取脚本。

## 5. 其他客户端

CLI 可从 `cli/` 执行 `go build -o shitu-ai .`，详见 [CLI 品牌与兼容说明](cli/BRANDING.md)。桌面 Lite、小程序、浏览器组件源码保留；原生安装包、应用签名和插件市场包另行验收后发布。

第三方 ClawHub、BrowserSkill、模型与云服务按真实名称显示，不代表本仓库已发行对应第三方包。

## 6. 开源许可

保留 [LICENSE](LICENSE)、[第三方声明](THIRD_PARTY_NOTICES.md)、[NOTICE](NOTICE) 与 `licenses/`。镜像包含许可材料；后端和桌面构建继续通过现有脚本附带需要分发的 MPL 对应源码包。
