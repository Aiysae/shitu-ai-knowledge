import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><Image src="/brand/shitu-mark.svg" alt="势途" width={34} height={34} priority={priority} /><strong style={{ fontSize: 16 }}>势途AI企业级知识库</strong></span>;
}
