/** Filtro principal de la grilla. Si agregas uno, súmalo también a `categoryLabels`. */
export type Category = "reel" | "spot" | "foto" | "grafica" | "web";

export const categoryLabels: Record<Category, string> = {
  reel: "Video vertical",
  spot: "Spot / Anuncio",
  foto: "Fotografía",
  grafica: "Gráfica",
  web: "Sitio web",
};

/**
 * Fuente del video. El reproductor detecta el tipo y carga solo al hacer clic
 * (técnica de facade), así la grilla nunca arrastra el peso de varios players.
 */
export type VideoSource =
  | { kind: "youtube"; id: string } // ID del video o del Short, sin la URL completa
  | { kind: "vimeo"; id: string }
  | { kind: "file"; url: string } // MP4 propio: /work/slug/pieza.mp4 o URL de CDN
  | { kind: "bunny"; libraryId: string; videoId: string };

export interface Credit {
  /** Debe coincidir con un `slug` de data/team.ts para enlazar al integrante */
  member: string;
  /** Qué hizo en esta pieza: "Dirección", "Edición", "Cámara", … */
  role: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: Category;
  /** Bajada de una línea para la tarjeta */
  summary: string;
  /** Texto largo de la ficha. Acepta varios párrafos. */
  description?: string;
  /** Qué hizo Afford: "Guion", "Producción", "Post", … */
  scope: string[];
  /** Quién del equipo trabajó la pieza */
  credits?: Credit[];
  /** Proporción de la tarjeta en la grilla */
  format: "vertical" | "cuadrado" | "horizontal";
  /** Portada: /work/<slug>/cover.jpg — sin ella se muestra el placeholder de marca */
  cover?: string;
  /** Video de la pieza. Omitir en proyectos solo fotográficos. */
  video?: VideoSource;
  /** Clip mudo corto en loop para la tarjeta (≈300 KB). Opcional pero recomendado. */
  preview?: string;
  /** Galería de la ficha, para fotografía o making of */
  images?: string[];
  /** Para proyectos web: dirección del sitio publicado */
  liveUrl?: string;
  /** Aparece en la portada */
  featured?: boolean;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  photo?: string;
}
