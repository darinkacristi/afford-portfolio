import { Logo } from "./BrandMark";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-hueso/10 bg-tinta text-[13.5px] text-[#8B958F]" style={{ padding: "44px var(--pad-x)" }}>
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <Logo width={100} className="text-[#5E6B64]" />
        <div className="flex flex-wrap gap-6">
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-brote">{siteConfig.email}</a>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brote">Instagram</a>
        </div>
        <span>© {new Date().getFullYear()} {siteConfig.name} · {siteConfig.city}</span>
      </div>
    </footer>
  );
}
