import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/ProjectCard";
import ClientsMarquee from "@/components/ClientsMarquee";
import ContactForm from "@/components/ContactForm";
import { Iso } from "@/components/BrandMark";
import { featuredProjects, projects } from "@/data/projects";
import { team } from "@/data/team";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------- Portada ---------- */}
      <section
        className="dark-block relative flex items-center overflow-hidden"
        style={{
          minHeight: "clamp(560px, 82vh, 880px)",
          padding: "var(--sec-y) var(--pad-x)",
          background: "radial-gradient(120% 90% at 78% 12%, #16311F 0%, #111111 58%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-14%] top-1/2 w-[min(74vw,860px)] -translate-y-1/2 opacity-50 max-md:right-[-32%] max-md:opacity-25"
          style={{
            aspectRatio: "560 / 439",
            WebkitMaskImage: "var(--iso-mask)",
            maskImage: "var(--iso-mask)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            background: "repeating-linear-gradient(115deg, transparent 0 5px, rgba(122,183,116,.55) 5px 6px)",
          }}
        />

        <div className="wrap relative z-10 w-full">
          <Reveal>
            <p className="eyebrow">Portafolio · {siteConfig.city}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="max-w-[16ch]" style={{ fontSize: "clamp(44px,8vw,100px)" }}>
              Esto es lo que
              <br />
              <span className="outline">grabamos, diseñamos y publicamos.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lead mb-9 mt-6">
              Video, fotografía, piezas gráficas y sitios web producidos por el equipo de Afford
              para marcas de rubro inmobiliario, salud, gastronomía y retail.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap gap-3.5">
              <Link href="/trabajo" className="btn">
                Ver todo el trabajo
              </Link>
              <a href="#contacto" className="btn btn-ghost">
                Contacto
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Destacados ---------- */}
      <section className="seccion dark-block bg-tinta">
        <div className="wrap">
          <SectionHead
            eyebrow="Selección"
            title="Piezas"
            outline="destacadas."
            lead="Una muestra del trabajo reciente. El catálogo completo está en la sección Trabajo."
          />

          <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <Link href="/trabajo" className="btn btn-ghost">
                Ver los {projects.length} proyectos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Equipo ---------- */}
      <section id="equipo" className="seccion dark-block bg-tinta pt-0">
        <div className="wrap">
          <SectionHead
            eyebrow="Equipo"
            title="Quiénes están"
            outline="detrás de cada pieza."
            lead="Cada proyecto lleva los créditos de quien lo trabajó. No es una agencia anónima."
          />

          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.07}>
                <div className="flex h-full items-center gap-4 rounded-marca border border-hueso/10 bg-[#1A1A1A] p-5">
                  <div
                    className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-bosque font-display text-xl text-brote"
                    style={m.photo ? { background: `center/cover no-repeat url(${m.photo})` } : undefined}
                  >
                    {!m.photo && m.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-[18px] text-hueso">{m.name}</h3>
                    <p className="m-0 text-[13.5px] text-[#8E9A94]">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Clientes ---------- */}
      <section className="dark-block bg-tinta" style={{ padding: "0 0 var(--sec-y)" }}>
        <p className="wrap mb-8 text-center text-[11px] uppercase tracking-[0.2em] text-[#7E8B85]">
          Marcas con las que hemos trabajado
        </p>
        <ClientsMarquee />
      </section>

      {/* ---------- Contacto ---------- */}
      <section id="contacto" className="seccion dark-block relative overflow-hidden bg-bosque text-center">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 bg-brote opacity-[.09]"
          style={{
            aspectRatio: "560 / 439",
            WebkitMaskImage: "var(--iso-mask)",
            maskImage: "var(--iso-mask)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />

        <div className="wrap relative z-10">
          <Reveal>
            <p className="eyebrow">Contacto</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mb-8" style={{ fontSize: "clamp(36px,5.6vw,72px)" }}>
              ¿Tienes algo que crear?
              <br />
              <span className="outline">Cuéntanos qué necesitas.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <a className="btn" href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mx-auto mb-6 mt-7 flex max-w-[420px] items-center gap-3.5">
              <span className="h-px flex-1 bg-hueso/20" />
              <span className="text-[12px] text-[#93A29A]">o déjanos tu mensaje</span>
              <span className="h-px flex-1 bg-hueso/20" />
            </div>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-7 flex items-center justify-center gap-3 text-[13px] text-[#C4D6CB]">
              <Iso width={22} className="text-brote" />
              o directo a {siteConfig.email}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
