import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import SectionHead from "@/components/SectionHead";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Trabajo",
  description: "Catálogo completo de piezas producidas por Afford: video, fotografía, gráfica y sitios web.",
};

export default function TrabajoPage() {
  return (
    <section className="seccion dark-block bg-tinta">
      <div className="wrap">
        <SectionHead
          eyebrow={`${projects.length} proyectos`}
          title="Todo el"
          outline="trabajo."
          lead="Filtra por tipo de pieza. Cada proyecto abre su ficha con el material, el alcance y los créditos del equipo."
        />
      <WorkGrid projects={[...projects].sort((a, b) => b.year - a.year)} />
      </div>
    </section>
  );
}
