<script setup lang="ts">
import type { NewsSummary } from '~/types/news';

withDefaults(defineProps<{ news: NewsSummary; featured?: boolean }>(), { featured: false });
const emit = defineEmits<{ open: [news: NewsSummary] }>();
</script>

<template>
  <article :class="['group relative isolate overflow-hidden rounded-2xl border border-brand-navy/10 bg-white transition-[border-color,box-shadow] duration-300 hover:border-brand-copper/45 hover:shadow-soft focus-within:ring-2 focus-within:ring-brand-copper', featured ? 'flex h-full flex-col' : 'flex items-center gap-4 p-4 sm:gap-5 sm:p-5']">
    <div :class="['relative shrink-0 overflow-hidden bg-brand-cream', featured ? 'aspect-[16/8.5] w-full' : 'size-24 rounded-xl sm:size-28']">
      <NuxtImg v-if="news.coverImage" :src="news.coverImage.url" :alt="news.coverImage.alt" :width="featured ? 1000 : 240" :height="featured ? 530 : 240" :sizes="featured ? 'sm:100vw lg:55vw' : '112px'" format="webp" quality="85" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
      <div v-else class="flex h-full items-center justify-center text-brand-copper"><NewsIcon name="image" class="size-9" /></div>
      <div v-if="featured" class="absolute inset-0 bg-gradient-to-t from-brand-navy/35 to-transparent" aria-hidden="true" />
      <span v-if="featured" class="absolute left-5 top-5 rounded-full bg-white/95 px-3.5 py-2 text-[0.65rem] font-semibold text-brand-navy shadow-sm backdrop-blur">Última noticia</span>
    </div>
    <div :class="['min-w-0', featured ? 'flex flex-1 flex-col p-6 sm:p-8' : 'flex-1']">
      <time :datetime="news.publishedAt" class="text-[0.68rem] font-medium text-muted">{{ formatDate(news.publishedAt) }}</time>
      <h3 :class="['mt-2.5 font-semibold tracking-[-0.025em] text-heading transition-colors group-hover:text-brand-copper-dark', featured ? 'text-xl leading-snug sm:text-[1.6rem]' : 'text-sm leading-snug sm:text-[0.95rem]']">
        <button type="button" class="text-left after:absolute after:inset-0 after:z-10 focus:outline-none" aria-haspopup="dialog" @click="emit('open', news)">{{ news.title }}</button>
      </h3>
      <p v-if="featured" class="mt-4 text-sm leading-7 text-body">{{ news.excerpt }}</p>
      <div :class="['flex items-center justify-between gap-3', featured ? 'mt-6 border-t border-brand-navy/8 pt-5 text-xs font-semibold text-brand-navy' : 'mt-3 text-[0.65rem] font-medium text-muted']">
        <span>{{ featured ? 'Leer la historia completa' : 'Leer noticia' }}</span>
        <span :class="['flex shrink-0 items-center justify-center rounded-full transition-colors group-hover:bg-brand-copper group-hover:text-white', featured ? 'size-9 bg-brand-cream text-brand-copper-dark' : 'size-7 text-brand-copper-dark']"><NewsIcon name="arrow" class="size-4" /></span>
      </div>
    </div>
  </article>
</template>
