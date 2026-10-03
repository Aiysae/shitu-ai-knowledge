# 势途AI企业级知识库

**由Vantage万极维护并开源**

将文档、网页和 FAQ 汇集为团队知识库，支持带来源引用的知识问答、混合检索、智能体、Wiki，以及 MCP/API 接入。

## 快速开始

首版版本：`v0.1.0`。发行范围为 Web、Docker 源码部署和内置 MCP。

```sh
git clone https://github.com/Aiysae/shitu-ai-knowledge.git
cd shitu-ai-knowledge
cp .env.example .env
```

修改示例密码，配置模型及本机端口后：

```sh
docker compose --project-name shitu-ai build app frontend docreader
docker compose --project-name shitu-ai up -d
```

完整环境、配置和升级步骤见 [部署说明](DEPLOYMENT.md)。首次使用按网页注册流程创建自己的账号，再导入 [公开演示资料](dataset/shitu-demo/使用说明.md)。

## 能力与入口

| 需求 | 入口 |
| --- | --- |
| 文件解析、语义与关键词检索、引用核对 | Web 知识库与对话 |
| Agent 使用知识库 | [内置 MCP](website-docs/03-features/08-mcp.md)、[REST API](website-docs/04-api/01-api-overview.md) |
| 多空间、成员角色及资源权限 | [权限文档](website-docs/03-features/01-tenant-auth.md) |
| 外部数据源同步 | [数据源连接器](website-docs/03-features/10-datasource.md) |
| 命令行使用 | [CLI](cli/BRANDING.md) |
| 原生桌面客户端 | 保留源码；安装包签名与跨平台验收另行发布 |

模型、数据库和文件存储由部署者配置；公开源码不附带业务资料或模型凭据。本机文件夹需要显式配置同步器，Web 上传不自动建立目录监听。

## 版本与维护

本发行版使用独立版本号，更新记录保存在 Git 提交历史中。
Go module、既有环境变量、JWT audience、存储键及 SDK 协议名称保留兼容。第三方服务与包按真实身份标注。

问题反馈：[Issues](https://github.com/Aiysae/shitu-ai-knowledge/issues)。漏洞报告：[Security](SECURITY.md)。
贡献请说明实际改动及相关检查，参见 [贡献指南](CONTRIBUTING.md)。发布前优先运行改动涉及的现有测试，不要求与改动无关的整仓重构。

## 开源许可

主代码使用 MIT 许可。原版权、许可证及第三方材料完整保留于 [LICENSE](LICENSE)、[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)、[NOTICE](NOTICE) 和 `licenses/`；第三方组件依各自许可分发。
