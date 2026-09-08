import type { Project } from "@/lib/types";

/**
 * Catálogo de proyectos. Los campos marcados con ⚠️ están por confirmar.
 *
 * Para cada pieza faltan tres cosas antes de publicar:
 *   1. `cover`  → imagen en /public/work/<slug>/cover.jpg (~1200 px de ancho)
 *   2. `video`  → el ID o la URL, según dónde queden alojados
 *   3. `images` → las fotos de la galería, en los proyectos fotográficos
 *
 * Mientras falten, el sitio muestra el placeholder con el isotipo y no se rompe.
 */
export const projects: Project[] = [
  {
    slug: "videos-cruz-verde",
    title: "Videos para Cruz Verde", // ⚠️ título real de la campaña
    client: "FEMSA Salud",
    year: 2026,
    category: "spot",
    summary: "Piezas en video producidas para las marcas de Cruz Verde.",
    description:
      "⚠️ Contar aquí de qué se trató: qué marcas, qué se grabó y dónde se pautó.\n\nSepara los párrafos con una línea en blanco, como está acá.",
    scope: ["Producción", "Grabación", "Edición"],
    credits: [
      { member: "baithiare", role: "Producción" },
      { member: "darinka", role: "Edición" },
    ],
    format: "vertical",
    // video: { kind: "youtube", id: "" },
    featured: true,
  },
  {
    slug: "expovino-2026-invierno",
    title: "Expovino",
    client: "Expovino",
    year: 2026,
    category: "reel",
    summary: "Video resumen en formato vertical",
    description:
      "Describir el enfoque: Mostrar la experiencia de Expo Vino 2026 en el Terminal de Pasajeros de Valparaíso.",
    scope: ["Guion", "Grabación", "Edición"],
    credits: [{ member: "baithiare", role: "Grabación y edición" }],
    format: "vertical",
    video: { kind: "youtube", id: "ZceEWuZDP9U" },
    featured: true,
    cover: "/work/expovino-portada.jpg",
    images: [
  "/work/fotosem-taller1.jpg",
  "/work/fotosem-taller2.jpg",
  "/work/fotosem-taller3.jpg",
],
cover: "/work/fotosem-taller/01.jpg",
  },
  {
    slug: "anuncios-estaticos-coterranea",
    title: "Anuncios estáticos",
    client: "Coterránea",
    year: 2026,
    category: "grafica",
    summary: "Sistema de piezas gráficas para la pauta en Meta.",
    description:
      "⚠️ Describir el sistema: qué se mantiene fijo entre piezas y qué cambia por proyecto.",
    scope: ["Diseño", "Adaptación por formato"],
    credits: [{ member: "camila", role: "Diseño" }],
    format: "cuadrado",
    images: [], // ⚠️ rutas: "/work/anuncios-estaticos-coterranea/01.jpg", …
    featured: true,
  },
  {
    slug: "fotografia-palati",
    title: "Fotografía gastronómica",
    client: "Palati",
    year: 2026,
    category: "foto",
    summary: "Fotografía de platos para carta y redes.",
    description: "⚠️ Contar el montaje: luz, estilo de los encuadres, para qué se usaron las fotos.",
    scope: ["Dirección de arte", "Fotografía", "Retoque"],
    credits: [{ member: "baithiare", role: "Fotografía" }],
    format: "cuadrado",
    images: [], // ⚠️ "/work/fotografia-palati/01.jpg", …
    featured: true,
  },
  {
    slug: "fotografia-terramore",
    title: "Fotografía gastronómica",
    client: "Terramore",
    year: 2026,
    category: "foto",
    summary: "Fotografía de platos para carta y redes.",
    description: "⚠️ Contar el montaje: luz, estilo de los encuadres, para qué se usaron las fotos.",
    scope: ["Dirección de arte", "Fotografía", "Retoque"],
    credits: [{ member: "baithiare", role: "Fotografía" }],
    format: "cuadrado",
    images: [], // ⚠️ "/work/fotografia-terramore/01.jpg", …
    featured: true,
  },
  {
    slug: "fundacion-espacio-mejor",
    title: "Registro fotográfico", // ⚠️ título real
    client: "Fundación Espacio Mejor",
    year: 2026,
    category: "foto",
    summary: "Registro fotográfico del trabajo de la fundación.",
    description: "⚠️ Contar qué se registró y para qué usa la fundación el material.",
    scope: ["Fotografía", "Retoque"],
    credits: [{ member: "baithiare", role: "Fotografía" }],
    format: "horizontal",
    images: [], // ⚠️ "/work/fundacion-espacio-mejor/01.jpg", …
    featured: true,
  },
  {
    slug: "sitio-web-cliente", // ⚠️ cambiar por el slug real
    title: "⚠️ Nombre del sitio",
    client: "⚠️ Cliente",
    year: 2026,
    category: "web",
    summary: "⚠️ Una línea sobre qué resuelve el sitio.",
    description: "⚠️ Contar el encargo: qué necesitaba el cliente y cómo se resolvió.",
    scope: ["Diseño", "Desarrollo"],
    credits: [{ member: "darinka", role: "Diseño y desarrollo" }],
    format: "horizontal",
    liveUrl: "https://", // ⚠️ dirección del sitio publicado
    images: [], // capturas: "/work/sitio-web-cliente/01.jpg", …
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Proyecto anterior y siguiente, para la navegación al pie de cada ficha */
export function siblings(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
