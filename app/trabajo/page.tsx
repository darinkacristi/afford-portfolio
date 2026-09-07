import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import SectionHead from "@/components/SectionHead";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Trabajo",
  description: "Catálogo completo de piezas audiovisuales producidas por Afford.",
};

export default function TrabajoPage() {
  return (
    <section className="seccion dark-block bg-tinta">
      <div className="wrap">
        <SectionHead
          eyebrow={`${projects.length} proyectos`}
          title="Todo el"
          outline="trabajo."
          lead="Filtra por tipo de pieza. Cada proyecto abre su ficha con el video, el alcance y los créditos del equipo."
        />
        <WorkGrid projects={projects} />
      </div>
    </section>
  );
}
