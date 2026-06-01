# Restaurante Angelín — propuesta de web

Repositorio con tres piezas:

1. **`REQUISITOS.md`** — análisis del negocio (casa de campo restaurada, alcachofa de la Vega Baja, marisco, conservas) y de lo que la web tiene que resolver.
2. **`NOTEBOOKLM_PROMPT.md`** — guía y prompts para usar NotebookLM y generar presentaciones, infografías, cápsulas para Reels y demás material visual.
3. **`index.html` + páginas + `assets/`** — web estática multipágina, lista para servir en cualquier hosting (incluido GitHub Pages).

## Páginas

- `index.html` — Inicio + "En qué somos expertos".
- `historia.html` — La casa.
- `carta.html` — Carta por categorías.
- `galeria.html` — Galería.
- `visitanos.html` — Horario y cómo llegar.
- `reservas.html` — Teléfonos, formulario y comedor privado.

## Ver la web en local

```powershell
python -m http.server 8080
# luego abre http://localhost:8080
```

## Publicar en GitHub Pages

1. **Settings → Pages**.
2. **Source:** `Deploy from a branch`.
3. **Branch:** `main` · **Folder:** `/ (root)` · **Save**.
4. En 1–2 minutos la URL aparece en `https://<usuario>.github.io/<repo>/`.

> Para un dominio propio (recomendado, p. ej. `restauranteangelin.es`), añade el CNAME en este repo y configura el DNS apuntando a GitHub Pages.

## Estructura

```
.
├─ index.html
├─ historia.html
├─ carta.html
├─ galeria.html
├─ visitanos.html
├─ reservas.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  └─ img/favicon.svg
├─ REQUISITOS.md
├─ NOTEBOOKLM_PROMPT.md
└─ README.md
```

## Siguientes pasos

- Sustituir los placeholders de la galería por fotos reales del local (fachada de la casa de campo, salones, comedor privado, terraza, platos).
- Cambiar la sección "Carta" por los platos reales del menú digital de Ágora TPV (o enlazar al permalink correcto).
- Conectar el formulario de contacto a un servicio (Formspree, Netlify Forms, etc.).
- Comprar y vincular un dominio propio.
- Reclamar y actualizar la ficha de Google Business con horarios y enlace a esta web.
