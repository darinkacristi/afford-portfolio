"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { categoryLabels, type Category, type Project } from "@/lib/types";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const reduce = useReducedMotion();

  // Solo se ofrecen los filtros que tienen piezas: nunca una categoría vacía
  const disponibles = (Object.keys(categoryLabels) as Category[]).filter((c) =>
    projects.some((p) => p.category === c)
  );

  const visibles = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-9 flex flex-wrap gap-2.5" role="group" aria-label="Filtrar por tipo de pieza">
        {(["all", ...disponibles] as const).map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-[18px] py-[9px] text-sm transition-all duration-200 ${
                active
                  ? "border-brote bg-brote font-semibold text-bosque"
                  : "border-hueso/25 font-medium text-[#AFBAB4] hover:border-hueso hover:text-hueso"
              }`}
            >
              {f === "all" ? "Todo" : categoryLabels[f]}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
        <AnimatePresence mode="popLayout">
          {visibles.map((p) => (
            <motion.div
              key={p.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibles.length === 0 && (
        <p className="py-16 text-center text-[#8E9A94]">
          Todavía no hay piezas en esta categoría.
        </p>
      )}
    </>
  );
}
