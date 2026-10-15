//go:build windows

package localsandbox

import (
	"github.com/Aiysae/shitu-ai-knowledge/internal/localsandbox/core"
	"github.com/Aiysae/shitu-ai-knowledge/internal/localsandbox/winhost"
)

func NewBackend() (core.Backend, error) { return winhost.New() }
