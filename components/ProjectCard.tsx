"use client";

import Link from "next/link";
import { useRef } from "react";
import { Iso } from "./BrandMark";
import { categoryLabels, type Project } from "@/lib/types";

/**
 * Todas las tarjetas comparten la misma proporción (4:5) para que la grilla
 * quede pareja, sin importar si la pieza es vertical, cuadrada u horizontal.
 * El `format` real del proyecto sigue mandando en la ficha, que es donde
 * importa que un reel se vea 9:16 y un sitio web 16:9.
 */
const RATIO_TARJETA = "4 / 5";

export default function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // El clip mudo de la tarjeta arranca solo al pasar el cursor: en móvil no
  // se descarga nunca, y en escritorio no compite con el resto de la grilla.
  const onEnter = () => videoRef.current?.play().catch(() => {});
  const onLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Link
      href={`/trabajo/${project.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group block overflow-hidden rounded-marca border border-hueso/10 bg-[#1A1A1A] transition-colors duration-300 hover:border-brote"
    >
      <div
        className="relative grid place-items-center overflow-hidden"
        style={{
          aspectRatio: RATIO_TARJETA,
          background: project.cover
            ? `center/cover no-repeat url(${project.cover})`
            : "linear-gradient(150deg,#1A2B22,#101914)",
        }}
      >
        {project.preview && (
          <video
            ref={videoRef}
            src={project.preview}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {!project.cover && !project.preview && (
          <>
            <Iso width="32%" className="text-brote/25" />
            <span className="absolute bottom-3 left-0 right-0 text-center text-[11px] uppercase tracking-[0.14em] text-hueso/25">
              Falta la portada
            </span>
          </>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-tinta/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brote backdrop-blur">
          {categoryLabels[project.category]}
        </span>
      </div>

      <div className="px-[18px] pb-5 pt-4">
        <h3 className="mb-1 text-[19px] text-hueso transition-colors group-hover:text-brote">
          {project.title}
        </h3>
        <p className="m-0 text-[13.5px] text-[#8E9A94]">
          {project.client} · {project.year}
        </p>
      </div>
    </Link>
  );
}
