"use client";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { useRef, useState, useSyncExternalStore } from "react";
import { getThemeSnapshot, subscribeToTheme, toggleTheme } from "./theme";
import { siteNavigation, repositoryUrl, headerIcons } from "../../shared/header";
import s from "./home.module.css";

function HeaderIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={headerIcons[name]} /></svg>;
}
function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => false);
  const label = dark ? "切换到浅色" : "切换到深色";
  return <button className="wk-theme-toggle" type="button" role="switch" aria-checked={dark} aria-label={label} title={label} onClick={toggleTheme}><HeaderIcon name={dark ? "moon" : "sun"} /></button>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  return <header className="wk-header" onKeyDown={event => { if (event.key === "Escape" && open) { setOpen(false); menu.current?.focus(); } }}>
    <div className="wk-header-inner">
      <Link className="wk-brand" href="/" aria-label="势途AI企业级知识库首页"><BrandLogo priority /></Link>
      <nav id="main-navigation" className={`wk-navigation ${open ? "is-open" : ""}`} aria-label="主导航" onClick={() => setOpen(false)}>
        {siteNavigation.map(item => <a key={item.href} href={item.href}>{item.label}{item.badge && <span className="wk-new-label">{item.badge}</span>}</a>)}
        <a className="wk-mobile-github" href={repositoryUrl} target="_blank" rel="noreferrer">GitHub <HeaderIcon name="external" /></a>
      </nav>
      <ThemeToggle />
      <a className="wk-header-github" href={repositoryUrl} target="_blank" rel="noreferrer"><HeaderIcon name="github" /><span>GitHub</span></a>
      <button ref={menu} type="button" className="wk-menu-toggle" aria-label={open ? "关闭导航" : "打开导航"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><HeaderIcon name={open ? "close" : "menu"} /></button>
    </div>
  </header>;
}
