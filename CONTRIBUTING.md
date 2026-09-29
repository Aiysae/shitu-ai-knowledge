# 贡献指南

势途AI企业级知识库由Vantage万极维护并开源。

提交清晰、范围明确的修复或功能改动，说明实际验证结果。保持公开示例无凭据、业务资料和部署者的私有路径。原版权和第三方许可继续保留。

前端：`cd frontend && npm ci && npm run check-i18n && npm run build`，协议与集成改动复用相关测试。
后端：对改动的 Go 包运行测试，构建 `cmd/server`。CLI：在 `cli/` 运行 `go test -count=1 ./...` 与 `go vet ./...`。
许可：`bash scripts/check-license-bundle.sh`。

Go module、环境变量和存储键中的兼容名称不是展示品牌，修改这些字段需要明确迁移方案。
