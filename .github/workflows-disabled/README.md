# 保留的上游发布脚本

这些 YAML 位于工作流目录之外，GitHub Actions 不执行它们。

原 Docker Hub、npm、PyPI、Homebrew 和原生安装包发布流程保留作为技术参考。对应命名空间及凭证未配置到本发行版，因此不启用。仅使用 `.github/workflows/` 中明确配置到当前仓库的检查及发行流程。
