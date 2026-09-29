# 势途AI企业级知识库 CLI

由Vantage万极维护并开源

从仓库的 `cli` 目录执行 `go build -o shitu-ai .`，即可使用 `./shitu-ai kb list` 等命令。
已有脚本仍可构建 `go build -o weknora .`。帮助示例中的 `weknora` 是兼容命令名，两种二进制执行同一实现。
`WEKNORA_*` 环境变量、配置目录、凭证存储和 JSON 字段保持兼容。

该仓库未向上游 npm、PyPI 或 Homebrew 命名空间发布新的包。
