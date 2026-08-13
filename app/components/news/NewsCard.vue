<script setup lang="ts">
import type { NewsItem } from "~/types/news";

interface Props {
  news: NewsItem;
}

defineProps<Props>();

const emit = defineEmits<{
  open: [news: NewsItem];
}>();
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-card border border-border-soft bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sedalp-green/20 hover:shadow-card-hover"
  >
    <!-- Multimedia -->

    <NewsImageCarousel :images="news.images" variant="card" />

    <!-- Contenido -->

    <div class="flex flex-1 flex-col p-6 sm:p-7">
      <!-- Metadata -->

      <div class="flex flex-wrap items-center gap-3">
        <span
          class="rounded-full bg-surface-green px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-sedalp-green"
        >
          Comunicación
        </span>

        <time
          :datetime="news.publishedAt"
          class="text-xs font-medium text-muted"
        >
          {{ formatDate(news.publishedAt) }}
        </time>
      </div>

      <!-- Título -->

      <h3
        class="mt-4 text-[1.08rem] font-bold leading-[1.4] tracking-[-0.025em] text-heading transition-colors group-hover:text-sedalp-green"
      >
        {{ news.title }}
      </h3>

      <!-- Subtítulo -->

      <p
        v-if="news.subtitle"
        class="mt-2 text-sm font-semibold leading-6 text-sedalp-green"
      >
        {{ news.subtitle }}
      </p>

      <!-- Extracto -->

      <p class="mt-3 flex-1 text-sm leading-6 text-body">
        {{ news.excerpt }}
      </p>

      <!-- Información multimedia -->

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-if="news.images.length > 1"
          class="inline-flex items-center gap-1.5 rounded-lg bg-surface-soft px-2.5 py-1.5 text-[0.68rem] font-semibold text-muted"
        >
          📷
          {{ news.images.length }} imágenes
        </span>

        <span
          v-if="news.videos.length"
          class="inline-flex items-center gap-1.5 rounded-lg bg-red-50 px-2.5 py-1.5 text-[0.68rem] font-bold text-red-700"
        >
          <svg viewBox="0 0 24 24" class="size-4" aria-hidden="true">
            <path
              d="M21.2 7.1a2.6 2.6 0 0 0-1.8-1.9C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.4.4a2.6 2.6 0 0 0-1.8 1.9A27 27 0 0 0 2.4 12a27 27 0 0 0 .4 4.9 2.6 2.6 0 0 0 1.8 1.9c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4a2.6 2.6 0 0 0 1.8-1.9 27 27 0 0 0 .4-4.9 27 27 0 0 0-.4-4.9Z"
              fill="currentColor"
            />

            <path d="m10 15.4 5-3.4-5-3.4v6.8Z" fill="white" />
          </svg>

          {{ news.videos.length }}
          {{ news.videos.length === 1 ? "video" : "videos" }}
        </span>
      </div>

      <div class="my-5 h-px bg-border-soft" />

      <!-- Abrir noticia -->

      <button
        type="button"
        class="group/button inline-flex w-fit items-center gap-2 text-sm font-bold text-sedalp-green transition-colors hover:text-sedalp-green-dark"
        @click="emit('open', news)"
      >
        Ver noticia

        <span
          class="transition-transform duration-200 group-hover/button:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </button>
    </div>
  </article>
</template>
