export interface Client {
  name: string;
  /** Logo PNG o SVG con fondo transparente en /public/clients/ */
  logo?: string;
  /** true si el logo viene en negro: se invierte para que se vea sobre fondo oscuro */
  invert?: boolean;
  /**
   * Ajuste fino del tamaño, solo si hace falta. Los logos vienen con distintas
   * proporciones y márgenes internos, así que a igual altura unos se ven más
   * chicos que otros. 1 es el tamaño normal; 1.5 lo agranda un 50%.
   */
  scale?: number;
}

/**
 * Marcas del carrusel. Es una lista propia y no sale de los proyectos, así
 * puedes mostrar clientes cuyo trabajo todavía no está publicado en el sitio.
 *
 * Sin `logo` se muestra el nombre en Cal Sans, que se ve bien y sirve mientras
 * consigues el archivo. Lo ideal: PNG transparente, ~400 px de ancho, logo en
 * blanco. Si solo tienes la versión negra, agrega `invert: true`.
 */
export const clients: Client[] = [
  { name: "Coterránea", logo: "/clients/coterranea-logo.png", scale: 1.7 },
  { name: "Cruz Verde", logo: "/clients/cruzverde-logo.png", scale: 1.2 },
  { name: "FEMSA Salud", logo: "/clients/femsa-logo.png" },
  { name: "DIP", logo: "/clients/dp-logo.png", scale: 1.6 },
  { name: "Langame", logo: "/clients/langame-logo.png" },
  { name: "Tao", logo: "/clients/tao-logo.png" },
  { name: "Country Zapallar", logo: "/clients/cz-logowebp.webp", invert: true, scale: 1.2 },
  { name: "Fundación Espacio Mejor", logo: "/clients/em-logo.png" },
  { name: "Terramore", logo: "/clients/terramore-logo.png"  },
];
