# Mapeo de arquitectura del portal SEDALP

## 1. Alcance y método

Este documento describe el estado del proyecto al 13 de agosto de 2026. El inventario se obtuvo con:

```bash
git ls-files --cached --others --exclude-standard
```

Por tanto, se revisaron únicamente archivos versionados o no ignorados. Se excluyeron deliberadamente `.nuxt/`, `.output/`, `node_modules/`, cachés, logs, archivos `.env` y todo lo cubierto por `.gitignore`.

El análisis se contrastó con la documentación oficial de Nuxt 4:

- [Estructura de directorios](https://nuxt.com/docs/4.x/directory-structure)
- [Páginas y enrutamiento](https://nuxt.com/docs/4.x/directory-structure/app/pages/)
- [Componentes y autoimportación](https://nuxt.com/docs/4.x/directory-structure/app/components)
- [Layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts)
- [Assets y public](https://nuxt.com/docs/4.x/getting-started/assets)
- [Runtime config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config)

## 2. Resumen ejecutivo

El proyecto es un portal institucional renderizado con Nuxt 4, Vue 3 y Tailwind CSS 4. Su arquitectura general usa correctamente la estructura moderna `app/` de Nuxt 4 y separa páginas, componentes, composables, configuración, datos, tipos, utilidades y estilos.

El producto implementado actualmente tiene dos áreas funcionales:

1. Inicio institucional: hero, misión/visión/objetivo y noticias recientes.
2. Comunicación/noticias: listado con búsqueda, tarjetas con carrusel, modal y página de detalle.

La estructura es razonable para el tamaño actual, pero el proyecto todavía está en construcción. Hay secciones declaradas en navegación que no existen, tres componentes de inicio vacíos, un footer vacío, datos simulados, configuración API incompleta y problemas visibles de codificación de texto. También conviven dos formas de abrir una noticia: modal mediante query string y página dinámica mediante slug.

## 3. Tecnologías y configuración

| Área | Implementación |
|---|---|
| Framework | Nuxt `^4.5.2` |
| UI | Vue `^3.5.41` |
| Router | Vue Router `^5.2.0` |
| CSS | Tailwind CSS `^4.3.3` mediante `@tailwindcss/vite` |
| Imágenes | `@nuxt/image` |
| Fuentes | `@nuxt/fonts`, familia Montserrat desde Google |
| Lenguaje | TypeScript en configuración, componentes, composables, datos y utilidades |
| Renderizado | SSR de Nuxt/Nitro; no hay reglas híbridas personalizadas |
| Datos | Mock local en `app/data/news.ts`; no existe backend en el repositorio |

### Configuración global

`nuxt.config.ts` realiza lo siguiente:

- registra `@nuxt/fonts` y `@nuxt/image`;
- carga `app/assets/css/main.css` globalmente;
- integra Tailwind 4 como plugin de Vite;
- autoimporta todos los componentes sin prefijo de carpeta (`pathPrefix: false`);
- configura Montserrat en pesos 400–800;
- establece calidad/formato global de imágenes;
- define idioma español, plantilla de título y color de tema;
- habilita DevTools sólo cuando `NUXT_DEVTOOLS=true`.

## 4. Árbol lógico

```text
public-sedalp/
├─ app/
│  ├─ app.vue                  # raíz: NuxtLayout + NuxtPage
│  ├─ assets/
│  │  ├─ css/                  # Tailwind, tokens, base y utilidades
│  │  └─ images/               # imágenes procesables por Vite
│  ├─ components/
│  │  ├─ home/                 # secciones de la portada
│  │  ├─ layout/               # header y footer
│  │  ├─ news/                 # tarjetas, galería, modal y videos
│  │  └─ ui/                   # primitivas reutilizables
│  ├─ composables/             # API, header y estado del modal
│  ├─ config/                  # contenido de portada y navegación
│  ├─ data/                    # noticias simuladas
│  ├─ layouts/default.vue      # envoltorio global
│  ├─ pages/                   # rutas basadas en archivos
│  ├─ types/                   # contratos de noticias
│  └─ utils/                   # fecha y YouTube
├─ public/                     # recursos estáticos servidos desde `/`
├─ nuxt.config.ts
├─ package.json
├─ package-lock.json
└─ tsconfig.json
```

Esta ubicación coincide con Nuxt 4: el código cliente vive bajo `app/`, mientras `public/` y la configuración permanecen en la raíz.

## 5. Flujo de renderizado global

```text
app.vue
└─ NuxtLayout
   └─ layouts/default.vue
      ├─ AppHeader
      ├─ slot de página
      └─ AppFooter
```

`app.vue` activa el sistema de layouts correctamente. El único layout es `default.vue`, que aporta navegación y footer a todas las páginas.

Observación: el layout ya contiene un `<main>`, pero `[slug].vue` también contiene otro `<main>`. Esto produce elementos `main` anidados, lo cual no es semánticamente válido. Las páginas deberían usar `div`, `article` o `section`, dejando un único `main` en el layout.

## 6. Mapa de rutas

| URL pública | Archivo | Propósito | Estado |
|---|---|---|---|
| `/` | `app/pages/index.vue` | Portada institucional | Implementada parcialmente |
| `/noticias` | `app/pages/news/index.vue` | Listado y búsqueda de noticias | Implementada |
| `/noticias/:slug` | `app/pages/news/[slug].vue` | Detalle permanente de noticia | Implementada |
| `/?noticia=:slug` | Estado de `HomeCommunication` | Modal de noticia sobre Inicio | Implementada |
| `/noticias?noticia=:slug` | Estado de página de noticias | Modal sobre listado | Implementada |
| `/#cursos` | Sólo navegación | Ancla a sección inexistente | Pendiente |
| `/#eventos` | Sólo navegación | Ancla a sección inexistente | Pendiente |
| `/#normativas` | Sólo navegación | Ancla a sección inexistente | Pendiente |
| `/#contacto` | CTA del header | Ancla a sección inexistente | Pendiente |
| `/simred` | Sólo navegación | Página inexistente | Pendiente/404 |

Aunque los archivos viven en `app/pages/news`, ambos usan `definePageMeta({ path: ... })` para exponer URLs en español. Funciona, pero añade configuración innecesaria: renombrar la carpeta a `app/pages/noticias` permitiría que el sistema de rutas por archivos expresara directamente la URL.

## 7. Secciones de la portada

La página `app/pages/index.vue` monta únicamente estas secciones, en este orden:

### 7.1 Hero institucional

Componente: `HomeHero.vue`.

- Imagen panorámica con `NuxtImg` y preload.
- Gradientes para legibilidad.
- Pretítulo, título, destacado y descripción desde `config/home.ts`.
- CTA hacia `#institucional`.
- Indicador visual para continuar.

### 7.2 Pilares institucionales

Componentes: `HomeInstitutionalPillars.vue` e `InstitutionalPillarCard.vue`.

- Renderiza misión, visión y objetivo general.
- Los datos viven en `config/home.ts`.
- Cada tarjeta selecciona un icono SVG según un tipo unión de TypeScript.

### 7.3 Comunicación

Componente: `HomeCommunication.vue`.

- Ordena las noticias por fecha.
- Selecciona las tres más recientes.
- Reutiliza `NewsGrid` y `NewsModal`.
- Enlaza al listado completo `/noticias`.

### 7.4 Secciones declaradas pero no implementadas

- `HomeServices.vue`: vacío y no montado.
- `HomeResults.vue`: vacío y no montado.
- `HomeInterestLinks.vue`: vacío y no montado.
- Cursos, eventos, normativas y contacto: aparecen en navegación, pero no existen como secciones.

## 8. Subsistema de noticias

### Modelo de datos

`app/types/news.ts` define:

- `NewsImage`: id, URL, texto alternativo y caption opcional.
- `NewsVideo`: id, URL de YouTube y título.
- `NewsItem`: identidad, slug, textos, fecha, imágenes y videos.

`app/data/news.ts` contiene cuatro noticias simuladas y referencia ocho imágenes en `public/images/news/`.

### Flujo del listado

```text
mockNews
├─ filtro por título/subtítulo/extracto
└─ NewsGrid
   └─ NewsCard
      ├─ NewsImageCarousel
      └─ evento `open(news)`
         └─ useNewsModal
            ├─ query `?noticia=slug`
            └─ NewsModal
               ├─ NewsImageCarousel
               └─ NewsVideoList
```

### Componentes

| Componente | Responsabilidad |
|---|---|
| `NewsHero.vue` | Cabecera visual del listado |
| `NewsGrid.vue` | Grid responsive y propagación del evento `open` |
| `NewsCard.vue` | Resumen, metadatos, conteos y acción de apertura |
| `NewsImageCarousel.vue` | Imagen activa, autoplay, flechas, puntos y contador |
| `NewsModal.vue` | Diálogo teletransportado a `body`, bloqueo de scroll y trampa básica de foco |
| `NewsVideoList.vue` | Conversión y presentación de videos YouTube con privacidad mejorada |
| `useNewsModal.ts` | Sincronización entre estado seleccionado y query string |
| `youtube.ts` | Extracción segura del ID y creación de URL `youtube-nocookie.com` |

### Página individual

`app/pages/news/[slug].vue` busca la noticia por slug, devuelve error 404 si no existe, configura SEO, muestra galería, contenido y videos.

Actualmente las tarjetas abren el modal y no enlazan a `/noticias/:slug`. La ruta de detalle existe, pero no forma parte del flujo visible normal. Conviene decidir una estrategia:

- modal para vista rápida y enlace adicional “Abrir página completa”; o
- navegación directa al detalle, dejando el modal sólo para casos concretos.

## 9. Layout y navegación

### Header

`AppHeader.vue` incluye:

- línea tricolor institucional;
- logo enlazado al inicio;
- navegación desktop y móvil;
- estado activo por ruta;
- cambio de altura/sombra al hacer scroll;
- menú móvil con cierre por Escape y al navegar;
- CTA de contacto.

El estado se extrae a `useHeaser.ts`, cuyo nombre contiene un error tipográfico. Nuxt lo autoimporta como `useHeader` porque ése es el nombre exportado, pero el archivo debería llamarse `useHeader.ts` para facilitar búsqueda y mantenimiento.

### Footer

`AppFooter.vue` está vacío. Además declara un bloque SCSS sin que `sass` figure como dependencia. Al no contener reglas, no falla actualmente, pero debe eliminarse o instalar/configurar Sass cuando se implemente.

## 10. Sistema visual

### CSS

`main.css` importa:

1. Tailwind CSS 4.
2. `theme.css` con tokens institucionales.
3. `base.css` con normalización y accesibilidad básica.
4. `utilities.css` con utilidades de layout.

Tokens principales:

- colores SEDALP: verde, amarillo, rojo y gris;
- superficies claras y verdes;
- colores semánticos de texto/borde;
- tipografía Montserrat;
- sombras para header y tarjetas;
- radios de tarjeta, sección y botón.

La estrategia es consistente: las plantillas consumen clases semánticas como `text-heading`, `bg-surface-soft` y `rounded-card` en vez de repetir valores arbitrarios.

### Assets

- `public/` contiene favicon, robots, logo, hero y ocho imágenes de noticias.
- `app/assets/` contiene copias del logo y del hero.
- Las copias de logo y hero son idénticas byte por byte.

Según Nuxt, `public/` sirve archivos sin procesar desde la raíz, mientras `app/assets/` está destinado a recursos procesados por Vite. Mantener la misma imagen en ambos lugares aumenta peso y ambigüedad. Debe elegirse una sola estrategia por recurso.

## 11. Utilidades y composables

| Archivo | Función | Uso actual |
|---|---|---|
| `useHeaser.ts` | Estado del header, scroll, teclado y bloqueo de body | Usado por `AppHeader` |
| `useNewsModal.ts` | Apertura/cierre de modal y sincronización con URL | Usado en Inicio y Noticias |
| `useApi.ts` | Wrapper de `useFetch` con `baseURL` y cabecera JSON | No usado |
| `formatDate.ts` | Fecha localizada `es-BO` en UTC | Usado en noticias |
| `youtube.ts` | Normaliza URLs de YouTube | Usado por videos |

`useApi.ts` espera `config.public.apiBase`, pero `nuxt.config.ts` no declara `runtimeConfig.public.apiBase`. La documentación de Nuxt recomienda declarar explícitamente las claves de runtime config para que sean tipadas y reemplazables mediante `NUXT_PUBLIC_API_BASE`.

## 12. Evaluación frente a buenas prácticas de Nuxt 4

### Correcto o bien encaminado

- Estructura moderna bajo `app/`.
- Routing basado en `app/pages`.
- Layout global habilitado desde `app.vue`.
- Componentes, composables y utils autoimportables.
- Contratos TypeScript para el dominio de noticias.
- `useSeoMeta` en todas las páginas actuales.
- `createError` con 404 en el detalle dinámico.
- Uso de `NuxtImg`, dimensiones explícitas, lazy loading y preload del hero.
- Separación entre datos/configuración y presentación.
- Limpieza de listeners en `onBeforeUnmount`.
- URLs de YouTube con dominio de privacidad mejorada.
- Foco inicial, cierre con Escape y restauración de foco en modal.

### Prioridad alta

1. **Codificación de caracteres:** numerosos textos contienen mojibake (`ComunicaciÃ³n`, `â†’`, etc.). Los archivos deben guardarse en UTF-8 y el contenido debe corregirse; es un defecto visible y también afecta accesibilidad/SEO.
2. **Navegación rota:** `/simred` y las anclas `cursos`, `eventos`, `normativas`, `contacto` no tienen destino implementado.
3. **Configuración API incompleta:** falta `runtimeConfig.public.apiBase`; `useApi` no está operativo ni tipado adecuadamente.
4. **Semántica HTML:** existe un `<main>` global y otro en el detalle de noticia.
5. **Calidad automática:** no hay scripts ni dependencias para `typecheck`, lint, format o tests. `nuxt typecheck` solicita `typescript` y `vue-tsc`.

### Prioridad media

1. **Contenido incompleto:** footer y tres secciones están vacíos.
2. **Dos patrones de detalle:** modal y ruta individual no están conectados en la UX.
3. **Datos mock:** todo el dominio de noticias está acoplado a un arreglo local; no hay carga SSR con `useFetch`/`useAsyncData` ni manejo de estados remotos.
4. **Nombre incorrecto:** `useHeaser.ts` debería ser `useHeader.ts`.
5. **Recursos duplicados:** logo y hero existen tanto en `assets` como en `public`.
6. **README genérico:** conserva el texto del starter y no explica arquitectura, variables, contenido o despliegue del portal.
7. **Footer con SCSS innecesario:** el preprocesador no está declarado.

### Prioridad baja

1. `openMenu` se exporta desde `useHeader`, pero no se utiliza.
2. `SectionHeading.vue` existe, pero actualmente no tiene consumidores.
3. `components.pathPrefix: false` simplifica nombres, pero aumenta el riesgo de colisiones a medida que crezcan los dominios.
4. El carrusel automático debería respetar `prefers-reduced-motion` y anunciar cambios con cautela para no perjudicar accesibilidad.
5. No existe `app/error.vue` personalizado para 404/500 institucionales.
6. `robots.txt` permite rastreo, pero no existe sitemap ni metadatos sociales globales completos.

## 13. Estado por archivo o grupo

### Raíz

| Archivo | Estado |
|---|---|
| `.gitignore` | Adecuado para Nuxt; excluye artefactos y secretos locales |
| `nuxt.config.ts` | Funcional; falta runtime config API |
| `package.json` | Mínimo; faltan scripts de calidad |
| `package-lock.json` | Lockfile de npm, debe mantenerse versionado |
| `tsconfig.json` | Usa referencias generadas por Nuxt 4 |
| `README.md` | Plantilla genérica, debe personalizarse |

### Aplicación

| Grupo | Estado |
|---|---|
| `app/app.vue` | Correcto y mínimo |
| `app/layouts/default.vue` | Funcional; contiene el `main` global |
| `app/pages/` | Tres rutas efectivas; sólo dos flujos visibles |
| `app/components/home/` | Tres componentes usados y tres vacíos |
| `app/components/news/` | Subsistema completo y reutilizable |
| `app/components/layout/` | Header completo; footer vacío |
| `app/components/ui/` | Primitivas pequeñas; `SectionHeading` sin uso |
| `app/composables/` | Dos activos, uno preparado pero sin configurar |
| `app/config/` | Centraliza portada y navegación |
| `app/data/` | Mock temporal de noticias |
| `app/types/` | Modelo coherente del dominio |
| `app/utils/` | Funciones puras y acotadas |

## 14. Orden recomendado de evolución

1. Corregir toda la codificación UTF-8 y validar visualmente textos/símbolos.
2. Añadir `typescript`, `vue-tsc`, lint y scripts `typecheck`/`lint`.
3. Resolver navegación inexistente: implementar secciones/rutas o retirar enlaces temporales.
4. Declarar `runtimeConfig.public.apiBase` y migrar noticias desde mocks a una fuente real con SSR.
5. Definir el flujo oficial de noticia: modal, página, o ambos conectados.
6. Implementar footer y secciones pendientes.
7. Eliminar duplicados y archivos sin uso; renombrar `useHeaser.ts`.
8. Añadir página de error, sitemap, pruebas de componentes y pruebas E2E.
9. Actualizar README con instalación, variables, arquitectura y despliegue reales.

## 15. Conclusión

El proyecto tiene una base visual sólida y una separación de responsabilidades apropiada para un portal Nuxt 4 pequeño. El subsistema de noticias es la parte más desarrollada. La mayor brecha no está en la estructura del framework, sino en completar el contenido institucional, estabilizar calidad técnica y eliminar inconsistencias acumuladas durante el desarrollo. Antes de conectar una API o ampliar funcionalidades, conviene resolver codificación, rutas rotas, typecheck y semántica global.
