<script setup lang="ts">
import type { NewsItem } from "~/types/news";

interface Props {
  items: NewsItem[];
}

defineProps<Props>();

const emit = defineEmits<{
  open: [news: NewsItem];
}>();
</script>

<template>
  <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
    <NewsCard
      v-for="news in items"
      :key="news.id"
      :news="news"
      @open="emit('open', $event)"
    />
  </div>
</template>
