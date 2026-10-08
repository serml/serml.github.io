---
title: "Configura tu portafolio académico"
date: "2026-04-28"
description: "Guía completa para clonar, configurar y publicar tu nuevo portafolio académico."
author: "Claude Shannon"
tags:
  - "Documentation"
  - "Setup"
  - "Astro"
  - "Portfolio"
lang: "es"
translationKey: "setting-up-portfolio"
---

# Configura tu portafolio académico

¡Te damos la bienvenida a tu nuevo portafolio académico! Esta plantilla está creada con Astro y diseñada para académicos, investigadores y profesionales que necesitan un sitio web limpio, rápido y personalizable donde presentar su trabajo, publicaciones e ideas.

En esta guía te explicaré todo lo necesario para poner en marcha tu portafolio: desde clonar el repositorio hasta configurar el sitio y publicar tu primer contenido.

## 1. Clonar el repositorio

Primero, clona el repositorio en tu equipo. Puedes hacerlo con Git o con la CLI de GitHub.

**Opción A: usar Git**
Abre una terminal y ejecuta:

```bash
git clone https://github.com/rubzip/academic-portfolio-astro.git my-portfolio
cd my-portfolio
```

**Opción B: usar GitHub CLI (recomendada)**
Si quieres crear inmediatamente tu propio repositorio remoto a partir de esta plantilla, la CLI de GitHub lo hace muy fácil:

```bash
gh repo create my-portfolio --template="rubzip/academic-portfolio-astro" --clone
cd my-portfolio
```

A continuación, instala las dependencias del proyecto. Se utiliza `npm` (necesitas Node.js >= 22.12.0):

```bash
npm install
```

Cuando termine la instalación, inicia el servidor de desarrollo local:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`. Los cambios se actualizarán automáticamente en el navegador.

## 2. Configuración global

La configuración principal del portafolio está centralizada en `src/config/site.ts`. Este es el primer archivo que debes editar.

```typescript
// src/config/site.ts
export const SITE: SiteConfig = {
    website: "https://your-domain.com/",
    author: "Your Name",
    desc: "Your personal academic portfolio.",
    title: "Your Name",
    ogImage: "your-image.webp",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "en",
};
```

Actualiza los campos `website`, `author`, `desc` y `title` con tus datos.

### Configuración de analítica

Si quieres medir las visitas, puedes configurar Google Analytics 4 o Umami en el mismo archivo:

```typescript
export const ANALYTICS: AnalyticsConfig = {
    ga4Id: "G-XXXXXXXXXX", // Añade tu ID de medición de Google Analytics 4
    umami: {
        websiteId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        src: "https://cloud.umami.is/script.js",
    }
};
```

La analítica se carga de forma diferida para que no afecte a las métricas web esenciales.

## 3. Temas y apariencia

La plantilla tiene un sistema de temas centralizado, configurado en `src/config/site.ts` y `src/config/themes.ts`.

En `site.ts` puedes activar o desactivar el modo oscuro y elegir tus temas claro y oscuro:

```typescript
export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true, // Activa el selector de sol y luna
    themeLight: "light_notepad",
    themeDark: "dark_notepad",
};
```

Puedes previsualizar las paletas disponibles en las herramientas de desarrollo integradas, en `http://localhost:4321/dev-tools`, mientras esté activo el servidor local. Para crear tu propio esquema de color, añade una entrada a `THEMES` en `src/config/themes.ts`.

## 4. Gestionar el contenido

El portafolio se genera a partir de archivos Markdown (`.md`), lo que facilita el control de versiones y la escritura. Las colecciones están en `src/content/`:

- **`posts/`**: entradas del blog.
- **`projects/`**: proyectos de software, hardware o investigación.
- **`publications/`**: artículos académicos.
- **`talks/`**: presentaciones y conferencias.
- **`teaching/`**: cursos impartidos.

### Desactivar páginas

Si no quieres utilizar alguna colección, puedes desactivarla en `src/config/pages.ts`.

Por ejemplo, para ocultar la colección de charlas:

```typescript
export const PAGES: PagesConfig = {
    talks: {
        title: "Talks & Presentations", // Título de la página
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: false, // Desactiva la colección de charlas
    },
    ...
};
```

Esto ocultará la página de charlas de la navegación y desactivará su colección.

### Escribir una entrada

Para crear una entrada, añade un archivo `.md` dentro de `src/content/posts`. Hay ejemplos para cada colección en `src/example_contents/`. Este es un ejemplo del frontmatter y de algunos campos posibles:

```yaml
---
title: "My New Research Idea"
date: "2026-05-01"
description: "A brief exploration of a novel concept."
author: "Your Name"
tags:
  - "Research"
  - "Theory"
---
```

También puedes escribir fórmulas matemáticas en Markdown; se renderizan con KaTeX:

$$ E = mc^2 $$

### Mantener las versiones por idioma

El archivo sin sufijo es la versión inglesa. Para traducirlo al español, crea otro archivo con el mismo nombre y el sufijo `.es.md`; por ejemplo, `my-post.es.md`. Añade `lang: "es"` y `translationKey: "my-post"` a su frontmatter. El identificador de traducción debe coincidir con el nombre del archivo original.

## 5. Navegación y redes sociales

Para añadir o quitar enlaces de navegación o actualizar los iconos sociales de la barra lateral, edita:

- `src/config/navigation.ts`: enlaces de navegación superior.
- `src/config/social.ts`: iconos de la barra lateral.

## 6. Compilar y publicar

Cuando el contenido y la configuración estén listos, compila el sitio para producción:

```bash
npm run build
```

Esto generará archivos HTML estáticos optimizados en `dist/`. Puedes alojarlos en GitHub Pages, Vercel, Netlify o cualquier otro servicio de alojamiento estático.

---

¡Eso es todo! Ya puedes empezar a compartir tu trayectoria académica.
