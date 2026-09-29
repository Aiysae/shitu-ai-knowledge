#!/usr/bin/env python3
"""
势途AI企业级知识库 MCP 兼容适配器 Package

A Model Context Protocol server that provides access to the Shitu AI Enterprise Knowledge Base API.
"""

__version__ = "1.1.1"
__author__ = "WeKnora Team"
__description__ = "势途AI企业级知识库 MCP 兼容适配器 - Model Context Protocol server for 势途AI企业级知识库 API"

from weknora_mcp_server import WeKnoraClient, run

__all__ = ["WeKnoraClient", "run"]
