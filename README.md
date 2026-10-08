# Portafolio académico de Sergio Muñoz

Sitio web personal de **Sergio Muñoz**, profesor e investigador en inteligencia artificial en la Universidad Politécnica de Madrid (UPM) y miembro del Grupo de Sistemas Inteligentes (GSI).

🌐 **Web:** [serml.github.io](https://serml.github.io/)

El sitio está disponible en español e inglés e incluye información sobre investigación, publicaciones, charlas, actividad editorial, proyectos y propuestas de TFT.

## Desarrollo local

Requisitos: Node.js **22.12.0 o superior**.

```bash
npm install
npm run dev
```

El servidor local estará disponible en `http://localhost:4321`.

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera el sitio estático en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |

## Contenido y estructura

La mayoría del contenido se mantiene en Markdown con metadatos YAML:

```text
src/
├── config/                 # Configuración del sitio, páginas y navegación
├── content/
│   ├── bio.md              # Biografía en inglés
│   ├── bio.es.md           # Biografía en español
│   ├── publications/       # Publicaciones
│   ├── talks/              # Charlas y presentaciones
│   ├── projects/           # Proyectos
│   └── posts/              # Entradas del blog
├── pages/
│   ├── editorial/          # Actividad editorial
│   ├── tfts/               # Propuestas de TFT
│   └── en/                 # Rutas y páginas en inglés
└── styles/global.css       # Estilos y temas
```

La navegación y la visibilidad de las secciones se configuran en `src/config/navigation.ts` y `src/config/pages.ts`. La configuración general, incluido el tema y los enlaces sociales, está en `src/config/site.ts` y `src/config/social.ts`.

## Tecnologías

- [Astro](https://astro.build/) con salida estática.
- Tailwind CSS v4 y TypeScript.
- Contenido Markdown y renderizado de fórmulas con KaTeX.
- Temas claro y oscuro.

## Licencia

Este repositorio conserva la licencia MIT indicada en [`LICENSE`](LICENSE).
