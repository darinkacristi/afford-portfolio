# Afford — Portafolio audiovisual

Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion.
Repo separado del sitio corporativo (`afford.cl`), pensado para un subdominio propio.

## Subir a producción

1. Crea un repo **nuevo** en GitHub y sube todo el contenido de esta carpeta, incluida `public/`.
2. En Vercel → **New Project** → importa el repo → Deploy.
3. En Vercel → Settings → Domains, agrega el subdominio (`portafolio.afford.cl` o `trabajo.afford.cl`) y crea el registro CNAME que te indique donde tengas el DNS de afford.cl.
4. Cambia `url` en `lib/site.ts` por ese subdominio: de ahí salen el sitemap y la previsualización al compartir el link.

> Al subir por la web de GitHub, revisa que `public/fonts` y `public/brand` hayan llegado completas. Es donde suele fallar el arrastrar y soltar.

## Rutas

| Ruta | Qué es |
| --- | --- |
| `/` | Portada: hero, destacados, equipo, clientes, contacto |
| `/trabajo` | Catálogo completo con filtros por tipo |
| `/trabajo/[slug]` | Ficha de cada proyecto (generada estáticamente) |

## Agregar un proyecto

Todo vive en `data/projects.ts`. Copia un bloque y cambia los campos:

```ts
{
  slug: "nombre-unico-sin-espacios",
  title: "Título de la pieza",
  client: "Coterránea",
  year: 2026,
  category: "reel",          // "reel" | "spot" | "foto" | "grafica"
  summary: "Una línea para la tarjeta.",
  description: "Texto largo de la ficha.\n\nSepara párrafos con doble salto.",
  scope: ["Guion", "Grabación", "Edición"],
  credits: [{ member: "baithiare", role: "Dirección y cámara" }],
  format: "vertical",        // "vertical" 9:16 | "cuadrado" | "horizontal"
  cover: "/work/nombre-unico/cover.jpg",
  video: { kind: "youtube", id: "ABC123" },
  featured: true,            // aparece en la portada
}
```

`member` tiene que coincidir con un `slug` de `data/team.ts` para que el nombre se muestre completo.

### El video: cuatro fuentes posibles

```ts
video: { kind: "youtube", id: "ABC123" }              // también sirve para Shorts: usa el ID, no la URL /shorts/
video: { kind: "vimeo", id: "123456789" }
video: { kind: "file", url: "/work/slug/pieza.mp4" }  // archivo propio o URL de CDN
video: { kind: "bunny", libraryId: "12345", videoId: "abc-def" }
```

Cambiar de plataforma después es editar una línea, no rehacer el sitio.

**Importante para la velocidad:** el reproductor usa la técnica de *facade*. Mientras nadie hace clic solo se ve la portada; el iframe de YouTube (cerca de un megabyte de JavaScript) se monta recién al presionar play. Por eso una página con seis piezas sigue cargando liviana.

### Portadas y previews

- `cover`: imagen fija de la tarjeta y de la ficha. En `/public/work/<slug>/cover.jpg`, redimensionada a ~1200 px de ancho antes de subirla.
- `preview`: opcional, clip **mudo** de 3–5 s en loop que se reproduce al pasar el cursor. Compactado a unos 300 KB. Tiene `preload="none"`, así que en móvil no se descarga nunca.

Sin `cover` ni `preview` se muestra el placeholder con el isotipo. El sitio nunca se rompe por un archivo faltante.

### Fotografía

Para proyectos `category: "foto"`, deja el arreglo `images` con las rutas y se arma la galería con lightbox (flechas ← → y Esc para navegar):

```ts
images: ["/work/slug/01.jpg", "/work/slug/02.jpg"]
```

## Otros archivos

| Quiero cambiar… | Archivo |
| --- | --- |
| Subdominio, correo, WhatsApp, Instagram | `lib/site.ts` |
| Integrantes del equipo y sus fotos | `data/team.ts` (fotos en `/public/about/`) |
| Nombres de las categorías del filtro | `lib/types.ts` → `categoryLabels` |
| Titular de la portada | `app/page.tsx` |

## Sistema de marca

Idéntico al del sitio corporativo, para que ambos se lean como la misma marca: colores del manual en `tailwind.config.ts`, Cal Sans y Poppins servidas localmente desde `public/fonts/`, el logo como máscara CSS en `components/BrandMark.tsx` y la clase `.outline` para la segunda línea en contorno de cada titular.

## Comandos

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Carrusel de marcas

Las marcas de la portada viven en `data/clients.ts`, una lista aparte de los proyectos: así puedes mostrar clientes cuyo trabajo todavía no está publicado.

Deja los logos en `public/clients/` (PNG transparente, ~400 px de ancho, logo en blanco porque van sobre fondo oscuro) y agrégalos:

```ts
{ name: "Coterránea", logo: "/clients/coterranea.png" },
{ name: "Palati", logo: "/clients/palati.png", invert: true },  // si el logo viene en negro
```

Sin `logo` se muestra el nombre en Cal Sans, así que puedes cargarlos de a uno.
