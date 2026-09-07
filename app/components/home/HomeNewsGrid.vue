<script setup lang="ts">
import type { NewsSummary } from "~/types/news";

defineProps<{ items: NewsSummary[] }>();
const emit = defineEmits<{ open: [news: NewsSummary] }>();
</script>

<template>
  <div class="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:gap-7">
    <NewsStoryCard v-if="items[0]" :news="items[0]" featured @open="emit('open', $event)" />
    <div v-if="items.length > 1" class="grid gap-4 lg:auto-rows-fr">
      <NewsStoryCard v-for="news in items.slice(1, 4)" :key="news.slug" :news="news" @open="emit('open', $event)" />
    </div>
  </div>
</template>
