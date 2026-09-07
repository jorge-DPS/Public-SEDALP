<script setup lang="ts">
import type { NewsSummary } from "~/types/news";

defineProps<{ items: NewsSummary[] }>();
const emit = defineEmits<{ open: [news: NewsSummary] }>();
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    <NewsArchiveCard v-for="news in items" :key="news.slug" :news="news" @open="emit('open', $event)" />
  </div>
</template>
