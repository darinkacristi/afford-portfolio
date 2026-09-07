import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaPlayer from "@/components/MediaPlayer";
import Gallery from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import { projects, projectBySlug, siblings } from "@/data/projects";
import { memberBySlug } from "@/data/team";
import { categoryLabels } from "@/lib/types";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return { title: "Proyecto no encontrado" };

  return {
    title: `${p.title} — ${p.client}`,
    description: p.summary,
    openGraph: {
      title: `${p.title} — ${p.client} · ${siteConfig.name}`,
      description: p.summary,
      images: p.cover ? [p.cover] : undefined,
    },
  };
}

const ratioFicha: Record<string, string> = {
  vertical: "9 / 16",
  cuadrado: "1 / 1",
  horizontal: "16 / 9",
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();

  const { prev, next } = siblings(p.slug);
  const vertical = p.format === "vertical";

  return (
    <article className="dark-block bg-tinta" style={{ padding: "var(--sec-y) var(--pad-x)" }}>
      <div className="wrap">
        <Reveal>
          <Link href="/trabajo" className="mb-8 inline-flex items-center gap-2 text-sm text-[#8E9A94] transition-colors hover:text-brote">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
            Volver al trabajo
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="eyebrow">
            {categoryLabels[p.category]} · {p.year}
          </p>
          <h1 className="mb-4" style={{ fontSize: "clamp(38px,6.5vw,84px)" }}>
            {p.title}
          </h1>
          <p className="lead mb-12">{p.summary}</p>
        </Reveal>

        {/* Reproductor: los verticales se muestran acotados para no ocupar toda la pantalla */}
        {p.video && (
          <Reveal delay={0.1}>
            <div className={vertical ? "mx-auto max-w-[420px]" : ""}>
              <MediaPlayer
                video={p.video}
                cover={p.cover}
                title={`${p.title} — ${p.client}`}
                ratio={ratioFicha[p.format]}
              />
            </div>
          </Reveal>
        )}

        {/* Ficha técnica */}
        <Reveal delay={0.15}>
          <div className="mt-14 grid gap-10 border-t border-hueso/15 pt-10 md:grid-cols-[1fr_320px]">
            <div>
              {p.description ? (
                p.description.split("\n\n").map((parrafo, i) => (
                  <p key={i} className="mb-4 max-w-[62ch] text-[16px] leading-[1.7] text-[#B9C4BE]">
                    {parrafo}
                  </p>
                ))
              ) : (
                <p className="max-w-[62ch] text-[16px] leading-[1.7] text-[#B9C4BE]">{p.summary}</p>
              )}
            </div>

            <aside className="space-y-7 text-sm">
              <div>
                <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brote">
                  Cliente
                </h2>
                <p className="m-0 text-[17px] text-hueso">{p.client}</p>
              </div>

              <div>
                <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brote">
                  Qué hizo Afford
                </h2>
                <ul className="m-0 list-none space-y-1 p-0 text-[#B9C4BE]">
                  {p.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              {p.credits && p.credits.length > 0 && (
                <div>
                  <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brote">
                    Equipo
                  </h2>
                  <ul className="m-0 list-none space-y-2 p-0">
                    {p.credits.map((c) => {
                      const m = memberBySlug(c.member);
                      return (
                        <li key={`${c.member}-${c.role}`} className="text-[#B9C4BE]">
                          <span className="text-hueso">{m?.name ?? c.member}</span>
                          <br />
                          <span className="text-[13px]">{c.role}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Reveal>

        {p.images && p.images.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-14 border-t border-hueso/15 pt-10">
              <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-brote">
                Galería
              </h2>
              <Gallery images={p.images} title={p.title} />
            </div>
          </Reveal>
        )}

        {/* Navegación entre proyectos */}
        <nav className="mt-16 flex flex-wrap justify-between gap-4 border-t border-hueso/15 pt-8">
          {prev && (
            <Link href={`/trabajo/${prev.slug}`} className="group max-w-[45%]">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#8E9A94]">Anterior</span>
              <p className="m-0 text-[17px] text-hueso transition-colors group-hover:text-brote">{prev.title}</p>
            </Link>
          )}
          {next && (
            <Link href={`/trabajo/${next.slug}`} className="group ml-auto max-w-[45%] text-right">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#8E9A94]">Siguiente</span>
              <p className="m-0 text-[17px] text-hueso transition-colors group-hover:text-brote">{next.title}</p>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
