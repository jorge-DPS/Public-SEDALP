# Modelo de datos para noticias

## Objetivo

Este documento transforma los datos simulados de `app/data/news.ts` y los tipos de
`app/types/news.ts` en un modelo relacional para PostgreSQL.

La maqueta necesita:

- un listado de noticias con búsqueda por título, subtítulo y extracto;
- las tres noticias más recientes, ordenadas por fecha de publicación;
- una noticia individual identificada por `slug`;
- párrafos, imágenes y videos asociados a cada noticia y conservando su orden.

## Tipos que espera el frontend

Estos tipos mantienen exactamente la forma que consumen actualmente los componentes
de la maqueta:

```ts
export interface NewsImage {
  id: number
  url: string
  alt: string
  caption?: string
}

export interface NewsVideo {
  id: number
  youtubeUrl: string
  title: string
}

export interface NewsItem {
  id: number
  slug: string
  title: string
  subtitle?: string
  excerpt: string
  description: string
  content: string[]
  publishedAt: string // Formato ISO: YYYY-MM-DD
  images: NewsImage[]
  videos: NewsVideo[]
}
```

En la base de datos se recomienda usar nombres `snake_case`. La API deberá convertir
`published_at` a `publishedAt` y `youtube_url` a `youtubeUrl`. Los registros de
`news_paragraphs` se convierten en el arreglo `content`, ordenados por `position`.

## Diagrama de relaciones

```text
news
  ├── 1:N news_paragraphs
  ├── 1:N news_images
  └── 1:N news_videos
```

Se usan tablas relacionadas en lugar de guardar arreglos JSON porque permiten ordenar,
validar, editar y eliminar cada párrafo o recurso multimedia de forma independiente.

## Tablas y tipos de datos

### `news`

| Columna | Tipo PostgreSQL | Nulo | Descripción |
|---|---|---:|---|
| `id` | `integer` identity | No | Identificador primario. |
| `slug` | `text` | No | Identificador legible usado en `/noticias/:slug`; debe ser único. |
| `title` | `text` | No | Título principal. |
| `subtitle` | `text` | Sí | Subtítulo opcional. |
| `excerpt` | `text` | No | Resumen corto usado en las tarjetas y en SEO. |
| `description` | `text` | No | Introducción destacada de la noticia. |
| `published_at` | `date` | No | Fecha de publicación en formato `YYYY-MM-DD`. |
| `status` | `varchar(20)` | No | Estado editorial: `draft`, `published` o `archived`. |
| `created_at` | `timestamptz` | No | Fecha y hora de creación del registro. |
| `updated_at` | `timestamptz` | No | Fecha y hora de la última modificación. |

### `news_paragraphs`

| Columna | Tipo PostgreSQL | Nulo | Descripción |
|---|---|---:|---|
| `id` | `integer` identity | No | Identificador primario. |
| `news_id` | `integer` | No | Noticia propietaria; clave foránea a `news.id`. |
| `body` | `text` | No | Texto del párrafo. |
| `position` | `smallint` | No | Orden del párrafo, comenzando en `0`. |

### `news_images`

| Columna | Tipo PostgreSQL | Nulo | Descripción |
|---|---|---:|---|
| `id` | `integer` identity | No | Identificador primario global. |
| `news_id` | `integer` | No | Noticia propietaria; clave foránea a `news.id`. |
| `url` | `text` | No | Ruta local o URL pública de la imagen. |
| `alt` | `text` | No | Texto alternativo para accesibilidad. |
| `caption` | `text` | Sí | Pie de foto opcional mostrado en la vista ampliada. |
| `position` | `smallint` | No | Orden de aparición en el carrusel, comenzando en `0`. |

### `news_videos`

| Columna | Tipo PostgreSQL | Nulo | Descripción |
|---|---|---:|---|
| `id` | `integer` identity | No | Identificador primario global. |
| `news_id` | `integer` | No | Noticia propietaria; clave foránea a `news.id`. |
| `youtube_url` | `text` | No | URL del video de YouTube. |
| `title` | `text` | No | Título accesible del video. |
| `position` | `smallint` | No | Orden de aparición, comenzando en `0`. |

> En los datos simulados, los identificadores de imágenes y videos vuelven a empezar
> en `1` dentro de algunas noticias. En las tablas reales el `id` es global y lo genera
> PostgreSQL; no debe copiarse ese valor local. `news_id` establece la pertenencia.

## SQL de creación

```sql
create table news (
  id integer generated always as identity primary key,
  slug text not null unique,
  title text not null,
  subtitle text,
  excerpt text not null,
  description text not null,
  published_at date not null,
  status varchar(20) not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint news_slug_not_blank check (btrim(slug) <> ''),
  constraint news_title_not_blank check (btrim(title) <> ''),
  constraint news_excerpt_not_blank check (btrim(excerpt) <> ''),
  constraint news_description_not_blank check (btrim(description) <> ''),
  constraint news_status_valid check (status in ('draft', 'published', 'archived')),
  constraint news_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

create table news_paragraphs (
  id integer generated always as identity primary key,
  news_id integer not null references news(id) on delete cascade,
  body text not null,
  position smallint not null,

  constraint news_paragraphs_body_not_blank check (btrim(body) <> ''),
  constraint news_paragraphs_position_valid check (position >= 0),
  constraint news_paragraphs_position_unique unique (news_id, position)
);

create table news_images (
  id integer generated always as identity primary key,
  news_id integer not null references news(id) on delete cascade,
  url text not null,
  alt text not null,
  caption text,
  position smallint not null,

  constraint news_images_url_not_blank check (btrim(url) <> ''),
  constraint news_images_alt_not_blank check (btrim(alt) <> ''),
  constraint news_images_position_valid check (position >= 0),
  constraint news_images_position_unique unique (news_id, position)
);

create table news_videos (
  id integer generated always as identity primary key,
  news_id integer not null references news(id) on delete cascade,
  youtube_url text not null,
  title text not null,
  position smallint not null,

  constraint news_videos_url_not_blank check (btrim(youtube_url) <> ''),
  constraint news_videos_title_not_blank check (btrim(title) <> ''),
  constraint news_videos_position_valid check (position >= 0),
  constraint news_videos_position_unique unique (news_id, position)
);

-- Acelera el listado público y la selección de las noticias más recientes.
create index news_published_at_idx
  on news (published_at desc, id desc)
  where status = 'published';
```

Las restricciones `unique (news_id, position)` también crean índices que sirven para
consultar cada relación por `news_id` y devolverla en orden.

## Consulta para obtener una noticia completa

La agregación se hace por cada relación para evitar el producto cartesiano que se
produciría al unir imágenes, videos y párrafos directamente en una sola consulta.

```sql
select
  n.id,
  n.slug,
  n.title,
  n.subtitle,
  n.excerpt,
  n.description,
  n.published_at,
  coalesce(p.content, '[]'::jsonb) as content,
  coalesce(i.images, '[]'::jsonb) as images,
  coalesce(v.videos, '[]'::jsonb) as videos
from news as n
left join lateral (
  select jsonb_agg(np.body order by np.position) as content
  from news_paragraphs as np
  where np.news_id = n.id
) as p on true
left join lateral (
  select jsonb_agg(
    jsonb_build_object(
      'id', ni.id,
      'url', ni.url,
      'alt', ni.alt,
      'caption', ni.caption
    )
    order by ni.position
  ) as images
  from news_images as ni
  where ni.news_id = n.id
) as i on true
left join lateral (
  select jsonb_agg(
    jsonb_build_object(
      'id', nv.id,
      'youtubeUrl', nv.youtube_url,
      'title', nv.title
    )
    order by nv.position
  ) as videos
  from news_videos as nv
  where nv.news_id = n.id
) as v on true
where n.slug = $1
  and n.status = 'published';
```

La API debe devolver siempre `content`, `images` y `videos` como arreglos, aunque no
tengan elementos. Esto coincide con la maqueta, que usa directamente `.length` y
recorre esos campos sin comprobar si son `null`.

## Consultas necesarias para la maqueta

### Listado público

```sql
select id, slug, title, subtitle, excerpt, description, published_at
from news
where status = 'published'
order by published_at desc, id desc;
```

### Tres noticias más recientes de la página principal

```sql
select id, slug, title, subtitle, excerpt, description, published_at
from news
where status = 'published'
order by published_at desc, id desc
limit 3;
```

Para mostrar las tarjetas exactamente como ahora, el endpoint del listado debe incluir
también las imágenes y videos relacionados, o como mínimo la primera imagen y el total
de recursos. La interfaz actual recibe los arreglos completos porque muestra el
carrusel y los contadores dentro de cada tarjeta.

## Correspondencia entre base de datos y frontend

| Base de datos | Frontend |
|---|---|
| `news.id` | `NewsItem.id` |
| `news.slug` | `NewsItem.slug` |
| `news.title` | `NewsItem.title` |
| `news.subtitle` | `NewsItem.subtitle` |
| `news.excerpt` | `NewsItem.excerpt` |
| `news.description` | `NewsItem.description` |
| `news.published_at` | `NewsItem.publishedAt` |
| `news_paragraphs.body[]` ordenado por `position` | `NewsItem.content` |
| `news_images[]` ordenado por `position` | `NewsItem.images` |
| `news_videos[]` ordenado por `position` | `NewsItem.videos` |

`status`, `created_at`, `updated_at` y las columnas `position` son datos de control del
backend; no es necesario exponerlos en `NewsItem`.
