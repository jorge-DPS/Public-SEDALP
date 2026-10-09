<script setup lang="ts">
import type { NewsSummary } from '~/types/news';

withDefaults(defineProps<{ news: NewsSummary; featured?: boolean }>(), { featured: false });
const emit = defineEmits<{ open: [news: NewsSummary] }>();
</script>

<template>
  <article
    :class="[
      'group relative isolate overflow-hidden rounded-2xl border border-brand-navy/10 bg-white transition-all duration-300 hover:border-brand-copper/50 hover:shadow-card focus-within:ring-2 focus-within:ring-brand-copper',
      featured ? 'flex h-full flex-col shadow-soft' : 'flex items-center gap-4 p-4 shadow-soft sm:gap-5 sm:p-5'
    ]"
  >
    <div :class="['relative shrink-0 overflow-hidden bg-brand-cream', featured ? 'aspect-[16/9] w-full' : 'size-24 rounded-xl sm:size-28']">
      <NuxtImg
        v-if="news.coverImage"
        :src="news.coverImage.url"
        :alt="news.coverImage.alt"
        :width="featured ? 1000 : 240"
        :height="featured ? 562 : 240"
        :sizes="featured ? 'sm:100vw lg:55vw' : '112px'"
        format="webp"
        quality="86"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
      />
      <div v-else class="flex h-full items-center justify-center text-brand-copper">
        <NewsIcon name="image" class="size-8" />
      </div>
      <div v-if="featured" class="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" aria-hidden="true" />
      <span v-if="featured" class="absolute left-4 top-4 rounded-full bg-brand-navy/85 px-3 py-1 text-[0.65rem] font-semibold text-white shadow-sm backdrop-blur">
        Destacada
      </span>
    </div>

    <div :class="['min-w-0', featured ? 'flex flex-1 flex-col p-6 sm:p-7' : 'flex-1']">
      <div class="flex items-center gap-2">
        <time :datetime="news.publishedAt" class="text-[0.72rem] font-medium text-muted">
          {{ formatDate(news.publishedAt) }}
        </time>
      </div>

      <h3
        :class="[
          'mt-2 font-bold tracking-tight text-heading transition-colors group-hover:text-brand-copper-dark',
          featured ? 'text-lg leading-snug sm:text-xl' : 'text-sm leading-snug'
        ]"
      >
        <button
          type="button"
          class="text-left after:absolute after:inset-0 after:z-10 focus:outline-none"
          aria-haspopup="dialog"
          @click="emit('open', news)"
        >
          {{ news.title }}
        </button>
      </h3>

      <p v-if="featured" class="mt-3 line-clamp-3 text-sm leading-relaxed text-body">
        {{ news.excerpt }}
      </p>

      <div
        :class="[
          'flex items-center justify-between gap-3',
          featured
            ? 'mt-6 border-t border-brand-navy/8 pt-4 text-xs font-semibold text-brand-navy'
            : 'mt-3 text-[0.7rem] font-medium text-muted'
        ]"
      >
        <span class="group-hover:text-brand-copper-dark transition-colors">
          {{ featured ? 'Leer historia completa' : 'Ver más' }}
        </span>
        <span
          :class="[
            'flex shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:bg-brand-copper group-hover:text-white',
            featured ? 'size-8 bg-brand-cream text-brand-copper-dark' : 'size-6 text-brand-copper'
          ]"
        >
          <NewsIcon name="arrow" class="size-3.5" />
        </span>
      </div>
    </div>
  </article>
</template>
