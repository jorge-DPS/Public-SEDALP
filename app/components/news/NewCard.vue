<script setup lang="ts">
import type { NewsItem } from "~/types/news";

interface Props {
  news: NewsItem;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-card border border-border-soft bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-sedalp-green/15 hover:shadow-card-hover"
  >
    <!-- Imagen -->

    <div class="relative aspect-[16/9] overflow-hidden bg-surface-soft">
      <NuxtImg
        :src="news.coverImage"
        :alt="news.coverImageAlt"
        width="720"
        height="405"
        sizes="
          100vw
          sm:50vw
          lg:33vw
        "
        quality="82"
        format="webp"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
      />

      <!-- Suavizado -->

      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
        aria-hidden="true"
      />

      <!-- Badge -->

      <div
        class="absolute left-4 top-4 rounded-full bg-sedalp-yellow px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-sedalp-green-darker shadow-sm"
      >
        Noticias
      </div>
    </div>

    <!-- Contenido -->

    <div class="flex flex-1 flex-col p-6">
      <!-- Fecha -->

      <div
        class="flex items-center gap-2 text-[0.72rem] font-semibold text-muted"
      >
        <svg
          viewBox="0 0 24 24"
          class="size-4 text-sedalp-green"
          aria-hidden="true"
        >
          <rect
            x="3.5"
            y="5"
            width="17"
            height="15"
            rx="2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          />

          <path
            d="M8 3v4M16 3v4M3.5 9.5h17"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
          />
        </svg>

        <time :datetime="news.publishedAt">
          {{ formatDate(news.publishedAt) }}
        </time>
      </div>

      <!-- Título -->

      <h3
        class="mt-4 text-[1.05rem] font-bold leading-[1.45] tracking-[-0.02em] text-heading transition-colors duration-200 group-hover:text-sedalp-green"
      >
        <NuxtLink
          :to="{
            path: '/noticias',
            query: {
              noticia: news.slug,
            },
          }"
        >
          {{ news.title }}
        </NuxtLink>
      </h3>

      <!-- Extracto -->

      <p class="mt-3 line-clamp-3 text-sm leading-6 text-body">
        {{ news.excerpt }}
      </p>

      <!-- Separador -->

      <div class="my-5 h-px w-full bg-border-soft" />

      <!-- Acciones -->

      <div class="mt-auto flex flex-wrap items-center justify-between gap-3">
        <!-- Leer -->

        <NuxtLink
          :to="{
            path: '/noticias',
            query: {
              noticia: news.slug,
            },
          }"
          class="group/link inline-flex items-center gap-2 text-sm font-bold text-sedalp-green transition-colors hover:text-sedalp-green-dark"
        >
          Leer noticia

          <svg
            viewBox="0 0 24 24"
            class="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>

        <!-- YouTube -->

        <a
          v-if="news.videos[0]"
          :href="news.videos[0].url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-700 transition-all duration-200 hover:bg-red-600 hover:text-white"
          :aria-label="`${news.videos[0]?.title ?? 'Ver video'} de ${news.title} en YouTube`"
        >
          <svg viewBox="0 0 24 24" class="size-[18px]" aria-hidden="true">
            <path
              d="M21.2 7.1a2.6 2.6 0 0 0-1.8-1.9C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.4.4a2.6 2.6 0 0 0-1.8 1.9A27 27 0 0 0 2.4 12a27 27 0 0 0 .4 4.9 2.6 2.6 0 0 0 1.8 1.9c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4a2.6 2.6 0 0 0 1.8-1.9 27 27 0 0 0 .4-4.9 27 27 0 0 0-.4-4.9Z"
              fill="currentColor"
            />

            <path d="m10 15.4 5-3.4-5-3.4v6.8Z" fill="white" />
          </svg>

          {{ news.videos[0]?.title ?? "Ver video" }}
        </a>
      </div>
    </div>
  </article>
</template>
