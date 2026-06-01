# Bar Restaurante Angelín — Análisis de requisitos

## 1. Resumen del negocio

- **Razón social:** Bar Restaurante Angelín S.L.
- **Nombre comercial:** Restaurante Angelín
- **Categoría:** Restaurante de cocina autóctona de la Vega Baja, en una **antigua casa de campo restaurada**.
- **Dirección:** Camino de Catral, 33 · 03160 Almoradí (Alicante).
- **Teléfonos / reservas:** 965 70 08 78 · 965 770 23 30.
- **Web actual:** [restauranteangelin.webnode.es](https://restauranteangelin.webnode.es/) — plantilla Webnode antigua, sin SEO, sin marca, sin móviles bien resueltos. Es básicamente una página de aterrizaje con dirección y teléfonos. Es el activo a reemplazar.
- **Carta digital:** menú en `smartmenu.agorapos.com` (Ágora TPV).
- **Instagram:** [@barrestauranteangelin](https://www.instagram.com/barrestauranteangelin/) — 1.100+ seguidores.
- **Facebook:** BAR Restaurante Angelin — 2.200+ seguidores.
- **Valoraciones externas:** Google 4,3 ★ (933 reseñas) · Tripadvisor 3,8 (111) · Facebook 4,7 (15).
- **Rango de precios:** 20–50 € (€€–€€€).
- **Servicios destacados (Google Business):** terraza, comedor privado, buenos cócteles.

### Identidad culinaria (tal como ellos la describen)

- "Cocina autóctona regional de la Vega Baja."
- "Producto estrella de la Vega Baja" como hilo conductor.
- "Desde elaboraciones más clásicas hasta propuestas sorprendentes."
- "Ambiente familiar."
- Buenos vinos y cócteles.

### Categorías de carta (de su menú digital)

- **Marisco.**
- **Nuestras conservas.**
- **Nuestras alcachofas** (raciones para 4 personas) — la **alcachofa de la Vega Baja** es seña de identidad de Almoradí y un activo de marca enorme.
- **Entrantes** (raciones para 4).
- **Ensaladas** (raciones para 4).
- **Comidas** (carta principal).

> Casi toda la carta está pensada para **compartir**, en raciones para 4 personas. Esto es relevante para el copy y para el público objetivo (grupos, familias, celebraciones).

---

## 2. Objetivos de la web

1. **Sustituir la actual página de Webnode** por una web propia, móvil, rápida, con presencia digna en buscadores.
2. **Convertir búsquedas locales en reservas** — "restaurante alcachofas Almoradí", "comer en Almoradí", "restaurante celebraciones Vega Baja".
3. **Comunicar la propuesta única**: casa de campo restaurada, cocina de la Vega Baja, raciones para compartir.
4. **Captar el público de celebraciones y grupos** — un fuerte del negocio (comedor privado, salones grandes).
5. **Reforzar el SEO local** (Schema.org `Restaurant`, NAP consistente con la ficha de Google Business, dominio propio).

## 3. Público objetivo

- **Vecinos de Almoradí y la Vega Baja** que quieren comer con familia o amigos.
- **Grupos y celebraciones** (cumpleaños, comuniones, comidas de empresa, bautizos) — comedor privado.
- **Turistas y veraneantes** de la costa de Alicante interesados en comida tradicional, alcachofa y marisco.
- **Foodies** de la zona buscando la temporada de la alcachofa.

## 4. Sitemap (multipágina)

1. **Inicio** — Hero + "En qué somos expertos" (alcachofas, marisco, conservas, raciones para compartir) + tarjetas de exploración.
2. **Historia / La casa** — la antigua casa de campo restaurada, los salones, la barra de bienvenida.
3. **Carta** — categorías destacadas con enlace al menú digital de Ágora TPV.
4. **Galería** — local, salones, terraza, platos icónicos.
5. **Visítanos** — horario, dirección, mapa, cómo llegar (Camino de Catral).
6. **Reservas** — tel, WhatsApp, formulario, mención clara a comedor privado para celebraciones.

## 5. Contenidos a aportar por el restaurante

- [ ] Logo en SVG/PNG con fondo transparente.
- [ ] 10–15 fotos profesionales: fachada de la casa de campo (día/noche), salón grande, comedor privado, terraza, alcachofas, marisco, conservas, postre.
- [ ] Texto de "La casa" (de dónde viene el nombre, año de apertura, historia familiar) — esto **no aparece en sus fuentes públicas**, hay que hablarlo con ellos.
- [ ] Carta completa o enlace estable al `smartmenu.agorapos.com`.
- [ ] Confirmación de horario actualizado (Google muestra horarios variables — confirmar).
- [ ] Razón social completa y CIF para el aviso legal.

## 6. Stack y arquitectura

- **HTML + CSS + JS estáticos**, sin build step.
- **Despliegue:** GitHub Pages desde `main` / raíz. HTTPS automático, coste 0 €.
- **Fuentes:** Google Fonts (Playfair Display + Inter).
- **Iconos:** SVG inline / emojis como placeholders.
- **Mapa:** OpenStreetMap embebido.
- **Imágenes:** WebP, `loading="lazy"`, dimensiones explícitas.
- **Accesibilidad:** contraste AA, navegación por teclado, soporte `prefers-reduced-motion`.

## 7. SEO local

- **Schema.org `Restaurant`** con `openingHoursSpecification`, `address`, `telephone`, `priceRange`, `servesCuisine`, `aggregateRating`.
- **Meta `title` y `description`** con "Almoradí" en la primera mitad.
- **Open Graph + Twitter cards**.
- **`sitemap.xml`** y **`robots.txt`** cuando se publique el dominio definitivo.
- **NAP consistente** con la ficha de Google Business.
- **Vinculación a un dominio propio** — recomendado `restauranteangelin.es` (libre de comprobar) o `angelinalmoradi.com`.

## 8. Legal y privacidad (RGPD)

- Aviso legal, política de privacidad y política de cookies en el footer.
- Si más adelante se añade analítica o formularios, banner con opción real de rechazar.

## 9. Métricas de éxito (3 meses)

- Aparecer en top 3 de Google para `restaurante alcachofas Almoradí` y `comedor privado Almoradí`.
- 30+ visitas/día medias en orgánico.
- ≥10 clics-a-llamada/semana desde el botón "Reservar".
- Reducir las llamadas con preguntas básicas ("¿estáis abiertos?", "¿dónde estáis?").

## 10. Fases

| Fase | Entregable | Estado |
|---|---|---|
| 1 | Análisis de requisitos (este documento) | **Hecho** |
| 2 | Prompt de NotebookLM para generar assets | **Hecho** |
| 3 | Web de prueba (este repo) — multipágina con copy provisional | **Hecho** |
| 4 | Sesión con el restaurante para recoger historia, fotos y carta | Pendiente |
| 5 | Versión final con assets reales | Pendiente |
| 6 | Despliegue en dominio propio + SEO + ficha Google actualizada | Pendiente |
