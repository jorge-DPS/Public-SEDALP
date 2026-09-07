<script setup lang="ts">
import type { NewsSummary } from '~/types/news';

defineProps<{ news: NewsSummary }>();
const emit = defineEmits<{ open: [news: NewsSummary] }>();
</script>

<template>
  <article class="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-copper/40 hover:shadow-card focus-within:ring-2 focus-within:ring-brand-copper">
    <div class="relative aspect-[16/10] overflow-hidden bg-brand-cream">
      <NuxtImg
        v-if="news.coverImage"
        :src="news.coverImage.url"
        :alt="news.coverImage.alt"
        width="720"
        height="450"
        sizes="sm:100vw md:50vw xl:33vw"
        format="webp"
        quality="85"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
      />
      <div v-else class="flex h-full items-center justify-center text-brand-copper"><NewsIcon name="image" class="size-10" /></div>
      <div class="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" aria-hidden="true" />
      <div class="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-[0.65rem] font-medium text-white">
        <time :datetime="news.publishedAt" class="rounded-full bg-brand-navy/70 px-3 py-1.5 backdrop-blur">{{ formatDate(news.publishedAt) }}</time>
      </div>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-semibold leading-snug tracking-[-0.025em] text-heading transition-colors group-hover:text-brand-copper-dark">
        <button type="button" class="text-left after:absolute after:inset-0 after:z-10 focus:outline-none" aria-haspopup="dialog" @click="emit('open', news)">{{ news.title }}</button>
      </h3>
      <p class="mt-3 line-clamp-3 text-sm leading-6 text-body">{{ news.excerpt }}</p>
      <div class="mt-auto flex items-center justify-between gap-4 border-t border-brand-navy/8 pt-5 text-xs font-semibold text-brand-navy">
        <span>Leer noticia</span>
        <span class="flex size-9 items-center justify-center rounded-full bg-brand-cream text-brand-copper-dark transition-colors group-hover:bg-brand-copper group-hover:text-white"><NewsIcon name="arrow" class="size-4" /></span>
      </div>
    </div>
  </article>
</template>
