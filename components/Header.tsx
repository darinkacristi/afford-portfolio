"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./BrandMark";
import { nav, siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 flex items-center gap-8 border-b border-hueso/10 text-hueso"
      style={{
        padding: "14px var(--pad-x)",
        background: "rgba(17,17,17,.86)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Link href="/" aria-label="Afford, inicio" className="flex items-center gap-3">
        <Logo width={110} className="text-hueso" />
        <span className="hidden text-[11px] uppercase tracking-[0.2em] text-brote sm:block">
          Portafolio
        </span>
      </Link>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir menú"
        className="ml-auto grid h-[42px] w-[42px] place-items-center rounded-xl border border-hueso/30 md:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <nav className="ml-auto hidden items-center gap-6 text-sm font-medium md:flex">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="group relative py-1 text-[#CFD8D3] transition-colors hover:text-hueso">
            {item.label}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brote transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <a href={siteConfig.whatsapp} className="btn btn-sm ml-1.5" target="_blank" rel="noopener noreferrer">
          Escríbenos
        </a>
      </nav>

      {open && (
        <nav
          className="absolute left-0 right-0 top-full flex flex-col border-b border-hueso/10 bg-tinta md:hidden"
          style={{ padding: "12px var(--pad-x) 22px" }}
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-hueso/10 py-3 text-[#CFD8D3]">
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.whatsapp} className="btn mt-4 justify-center" target="_blank" rel="noopener noreferrer">
            Escríbenos
          </a>
        </nav>
      )}
    </header>
  );
}
