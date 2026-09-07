export interface Client {
  name: string;
  /** Logo PNG o SVG con fondo transparente en /public/clients/ */
  logo?: string;
  /** true si el logo viene en negro: se invierte para que se vea sobre fondo oscuro */
  invert?: boolean;
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
  { name: "Coterránea" },
  { name: "Country Zapallar" },
  { name: "FEMSA Salud" },
  { name: "Vivero Küyen" },
  { name: "Langame" },
  { name: "DIP" },
  { name: "MKT Afiliados" },
  { name: "Palati" },
  { name: "Terramore" },
  { name: "Fundación Espacio Mejor" },
];
