# 安装势途AI企业级知识库

由Vantage万极维护并开源

本发行版从源码构建 Web、后端与解析器。环境、初始化、端口、模型配置和升级步骤见仓库根目录的 [DEPLOYMENT.md](https://github.com/Aiysae/shitu-ai-knowledge/blob/main/DEPLOYMENT.md)。

```sh
git clone https://github.com/Aiysae/shitu-ai-knowledge.git
cd shitu-ai-knowledge
cp .env.example .env
# 先修改密码、JWT 密钥、模型及端口设置
docker compose --project-name shitu-ai build app frontend docreader
docker compose --project-name shitu-ai up -d
```

首次使用创建自己的账号；本仓库不附带企业数据。命名为 `ghcr.io/aiysae/shitu-ai-*` 的镜像只有在 Release 明确列出后，才作为预构建镜像使用。原生桌面安装包另行验收。
