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
    slug: "activacion-hq10-cruz-verde",
    title: "Activación HQ10",
    client: "Cruz Verde",
    year: 2026,
    category: "spot",
    summary:
      "Video resumen de la activación de HQ10 en Cruz Verde, con producción asistida por IA.",
    description:
      "Cruz Verde nos encargó documentar la activación de HQ10 y convertirla en una pieza publicable para sus redes.\n\nEl trabajo partió con el registro audiovisual en terreno y siguió con la edición del resumen. Para la entrega final incorporamos herramientas de IA en la producción, lo que permitió resolver en menos tiempo lo que habría exigido una jornada adicional de rodaje.\n\nLa pieza se publicó en las redes sociales oficiales de Cruz Verde.",
    scope: ["Registro audiovisual", "Edición", "Producción con IA"],
    credits: [{ member: "baithiare", role: "Edición" }],
    format: "vertical",
    video: { kind: "youtube", id: "XP089SSZCP0" },
    liveUrl: "https://www.instagram.com/p/Dcy9X6SuWZn/",
    featured: false,
    cover: "/work/hq10-portada.jpg",
  },
    {
    slug: "pampers-proteccion-insuperable",
    title: "Protección Insuperable",
    client: "Pampers",
    year: 2026,
    category: "spot",
    summary:
      "Video resumen de la activación de Pampers en Cruz Verde, con producción asistida por IA.",
    description:
      "Pampers llevó su campaña Protección Insuperable al punto de venta y nos encargó convertir esa activación en una pieza publicable.\n\nEl trabajo partió con el registro audiovisual en terreno y siguió con la edición del resumen. Para la entrega final incorporamos herramientas de IA en la producción.",
    scope: ["Registro audiovisual", "Edición", "Producción con IA"],
    credits: [{ member: "baithiare", role: "Edición" }],
    format: "vertical",
    cover: "/work/pampers-portada.png",
    video: { kind: "youtube", id: "4RfesjVu5Vg" },
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
    featured: false,
    cover: "/work/expovino-portada.jpg",
  },
    {
    slug: "coterranea-black-week",
    title: "Carrusel Black Week",
    client: "Coterránea",
    year: 2025,
    category: "grafica",
    summary: "Piezas gráficas para la campaña de Black Week en Meta.",
    description:
      "Carrusel de cinco piezas para la campaña de Black Week de Coterránea, pensado para leerse en orden dentro del feed.\n\nEl formato obliga a resolver dos cosas a la vez: cada pieza tiene que funcionar sola, porque no todos deslizan, y el conjunto tiene que llevar a la acción para quienes sí lo hacen. La primera carga la oferta completa y las siguientes desarrollan el detalle.",
    scope: ["Diseño", "Adaptación por formato"],
    credits: [{ member: "Camila", role: "Diseño" }],
    format: "cuadrado",
    cover: "/work/coterranea-blackweek/1.png",
    images: [
      "/work/coterranea-blackweek/1.png",
      "/work/coterranea-blackweek/2.png",
      "/work/coterranea-blackweek/3.png",
      "/work/coterranea-blackweek/4.png",
      "/work/coterranea-blackweek/5.png",
    ],
    featured: true,
  },
    {
    slug: "fotografia-terramore",
    title: "Fotografía gastronómica",
    client: "Terramore",
    year: 2024,
    category: "foto",
    summary: "Sesión de platos para carta y redes.",
    description:
      "Registro fotográfico de la carta de Terramore, pensado para dos usos distintos: la carta, donde la foto tiene que describir el plato con precisión, y las redes, donde tiene que dar hambre.\n\nSe trabajó con luz natural y superficies de madera del propio local, manteniendo el mismo criterio de encuadre en toda la sesión para que las piezas se vean como un conjunto y no como fotos sueltas.",
    scope: ["Dirección de arte", "Fotografía", "Retoque"],
    credits: [
      { member: "baithiare", role: "Fotografía" },
      { member: "darinka", role: "Fotografía" },
    ],
    format: "vertical",
    cover: "/work/fotos-terramore/terramore1.jpeg",
    images: [
      "/work/fotos-terramore/terramore1.jpeg",
      "/work/fotos-terramore/terramore2.jpeg",
      "/work/fotos-terramore/terramore3.jpeg",
      "/work/fotos-terramore/terramore4.jpeg",
      "/work/fotos-terramore/terramore5.jpeg",
      "/work/fotos-terramore/terramore6.jpeg",
      "/work/fotos-terramore/terramore7.jpeg",
      "/work/fotos-terramore/terramore8.jpeg",
    ],
    featured: true,
  },
        {
    slug: "fundacion-espacio-mejor",
    title: "Taller de liderazgo adaptativo",
    client: "Fundación Espacio Mejor",
    year: 2025,
    category: "foto",
    summary:
      "Registro fotográfico de una jornada de formación con estudiantes de Valparaíso.",
    description:
      "Fundación Espacio Mejor nos convocó a documentar su taller de liderazgo adaptativo, una jornada de trabajo con estudiantes de distintos colegios de Valparaíso.\n\nEl encargo pedía algo más que una cobertura: había que capturar la dinámica del taller sin interrumpirla. Trabajamos en registro documental, sin dirigir a los participantes ni montar situaciones, buscando los momentos en que las ideas efectivamente circulaban entre ellos.\n\nEl material quedó disponible para la fundación como banco de imágenes para sus reportes, redes y presentaciones a futuros aliados.",
    scope: ["Fotografía", "Retoque"],
    credits: [{ member: "baithiare", role: "Fotografía" }],
    format: "horizontal",
    cover: "/work/fotosem-taller/taller1.jpeg",
    images: [
      "/work/fotosem-taller/taller1.jpeg",
      "/work/fotosem-taller/taller2.jpeg",
      "/work/fotosem-taller/taller3.jpeg",
      "/work/fotosem-taller/taller4.jpeg",
      "/work/fotosem-taller/taller5.jpeg",
      "/work/fotosem-taller/taller6.jpeg",
    ],
    featured: false,
  },
    {
    slug: "langame-academy",
    title: "Langame Academy",
    client: "Langame",
    year: 2026,
    category: "web",
    summary:
      "El sitio de una academia de inglés, montado para cargar rápido y para que Google lo entienda.",
    description:
      "Langame entregó el diseño y Afford lo llevó a WordPress: ocho páginas montadas con Elementor, fieles a la pieza original.\n\nSobre esa base se agregaron las dos capas que no se ven pero se miden. Rendimiento: 99/100 en escritorio y 92/100 en móvil. Buscadores: las ocho páginas pasaron de no tener descripción propia a tener título y meta escritos a mano con keyword asignada, de cero páginas con título principal declarado a seis, y de un solo encabezado de sección en todo el sitio a diecinueve.\n\nClases Online y Travel & Learn quedaron declaradas como cursos y no como artículos de blog, y las preguntas frecuentes en el formato que leen ChatGPT y Perplexity. Veintisiete imágenes recibieron descripción para lectores de pantalla. Sin cambiar una sola palabra del diseño: lo que cambió es cómo lo lee un buscador.",
    scope: ["Desarrollo", "Optimización", "SEO"],
    credits: [
      { member: "javier", role: "Montaje, optimización y SEO" },
      { member: "camila", role: "Adaptación del diseño" },
    ],
    format: "cuadrado",
    cover: "/work/langame-web.png",
    liveUrl: "https://langame.academy",
    images: [],
    featured: true,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => b.year - a.year);

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
