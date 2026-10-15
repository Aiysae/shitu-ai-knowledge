import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { Icon } from "./ui";
import { Header } from "./interactive";
import s from "./home.module.css";

const repo = "https://github.com/Aiysae/shitu-ai-knowledge";
const features = [
  { icon: "search", title: "知识问答", description: "汇集文档、网页和 FAQ，结合语义与关键词检索，回答附带来源引用。", guide: "03-features/05-retrieval-engines" },
  { icon: "agent", title: "智能体与 MCP", description: "在知识库中使用智能体，也可配置 MCP 端点，将知识检索接入其他 AI 工具。", guide: "03-features/08-mcp" },
  { icon: "shield", title: "企业部署", description: "在自己的环境中运行，配置模型、存储、空间与成员权限。", guide: "03-features/01-tenant-auth" },
];

export default function Home() {
  return <div className={s.site}>
    <a className={s.skipLink} href="#main">跳至正文</a><Header />
    <main id="main">
      <section className={`${s.shell} ${s.hero}`}>
        <p className={s.eyebrow}>v0.1.0 · 由Vantage万极维护并开源</p>
        <h1>势途AI企业级知识库</h1>
        <p className={s.heroDescription}>汇集团队资料，用于知识问答、智能体协作和知识整理。</p>
        <div className={s.actions}><a className={s.primary} href={`${repo}#快速开始`}>部署与使用 <Icon name="arrow" /></a><a className={s.secondary} href={repo} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a></div>
        <div className={s.trustBar}><span>由Vantage万极维护并开源</span><span>支持私有化部署</span><span>MIT 许可与第三方许可</span></div>
      </section>
      <section id="capabilities" className={`${s.shell} ${s.section}`}>
        <div className={s.modeGrid}>{features.map(feature => <article className={s.mode} key={feature.title}><Icon name={feature.icon} /><h2>{feature.title}</h2><p>{feature.description}</p><a className={s.textLink} href={`/docs/${feature.guide}.html`}>查看文档 <Icon name="arrow" /></a></article>)}</div>
      </section>
      <section id="get-started" className={`${s.shell} ${s.closing}`}><h2>从自己的资料开始</h2><p>首版提供 Web、Docker 源码部署和内置 MCP。模型账号及业务资料由部署者自行配置。</p><p>原生桌面客户端源码已整理品牌信息，安装包签名与跨平台验收另行发布。</p><a href={`${repo}/blob/main/README_CN.md`}>安装说明</a></section>
    </main>
    <footer className={`${s.shell} ${s.footer}`}><Link href="/" aria-label="势途AI企业级知识库首页"><BrandLogo /></Link><p>由Vantage万极维护并开源</p><nav><a href="/docs/">文档</a><a href={repo}>GitHub</a><a href={`${repo}/blob/main/LICENSE`}>开源许可</a></nav></footer>
  </div>;
}
