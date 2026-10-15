package sandbox

import "testing"

func TestIsStandardTemplateRecognizesProviderScopedName(t *testing.T) {
	for _, name := range []string{"shitukb", "team/shitukb", "project-b89e/ShituKB"} {
		if !isStandardTemplate(name) {
			t.Fatalf("expected %q to identify the ShituKB standard template", name)
		}
	}
	if isStandardTemplate("shitukb-custom") {
		t.Fatal("custom template must not be treated as the standard template")
	}
	if isStandardTemplate(DesktopTemplateName) {
		t.Fatal("the desktop sibling must not be classified as the CLI standard template")
	}
}

func TestIsDesktopTemplateRecognizesProviderScopedName(t *testing.T) {
	for _, name := range []string{"shitukb-desktop", "team/shitukb-desktop", "project-b89e/ShituKB-Desktop"} {
		if !isDesktopTemplate(name) {
			t.Fatalf("expected %q to identify the ShituKB desktop template", name)
		}
	}
	if isDesktopTemplate("shitukb") {
		t.Fatal("the CLI template must not be classified as desktop")
	}
	if isDesktopTemplate("shitukb-desktop-custom") {
		t.Fatal("a similarly prefixed custom name must not be the desktop template")
	}
}

func TestClassifyShituKBTemplatePrefersNameOverImage(t *testing.T) {
	standard, desktop := classifyShituKBTemplate(DesktopTemplateName, DefaultDockerImage)
	if standard || !desktop {
		t.Fatalf(
			"named desktop template must be desktop even if the image repo matches CLI, got standard=%v desktop=%v",
			standard, desktop,
		)
	}
	standard, desktop = classifyShituKBTemplate(StandardTemplateName, DefaultDesktopDockerImage)
	if !standard || desktop {
		t.Fatalf(
			"named CLI template must stay CLI even if the image tag is desktop, got standard=%v desktop=%v",
			standard, desktop,
		)
	}
}

func TestClassifyShituKBTemplateNamelessImageUsesTag(t *testing.T) {
	standard, desktop := classifyShituKBTemplate("", DefaultDockerImage)
	if !standard || desktop {
		t.Fatalf("CLI image with no name must be standard, got standard=%v desktop=%v", standard, desktop)
	}
	standard, desktop = classifyShituKBTemplate("", DefaultDesktopDockerImage)
	if standard || !desktop {
		t.Fatalf("desktop image with no name must be desktop, got standard=%v desktop=%v", standard, desktop)
	}
	standard, desktop = classifyShituKBTemplate("", DefaultCubeDesktopTemplateImage)
	if standard || !desktop {
		t.Fatalf("Cube desktop image with no name must be desktop, got standard=%v desktop=%v", standard, desktop)
	}
}
