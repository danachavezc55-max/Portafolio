# Portafolio – Dana Chávez

Portafolio multi-página construido con **Vite** (web bundler), **LESS**, **Handlebars**,
CSS **minificado** y **purgado** (PurgeCSS) a solo las reglas utilizadas.

## Comandos
```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo
npm run build      # compila a /dist (JS y CSS minificados + CSS purgado)
npm run preview    # previsualiza /dist
```

## Estructura
- `src/less/` → variables (`variables.less`), utilidades y componentes en LESS
- `src/components/` → parciales Handlebars (`Header`, `Footer`, `ProjectCard`)
- `src/data/` → datos de cada página (editar aquí tu información)
- `vite.config.js` → Vite + Handlebars + PurgeCSS (solo en `build`)
- `.github/workflows/publicar_a_gp.yml` → despliegue automático a GitHub Pages

## Entregable
1. Página desplegada: https://danachavezc55-max.github.io/Portafolio/
2. Repositorio: https://github.com/danachavezc55-max/Portafolio
