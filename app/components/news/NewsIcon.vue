<script setup lang="ts">
defineProps<{ name: 'arrow' | 'close' | 'image' | 'chevron-left' | 'chevron-right' | 'play' }>();
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path v-if="name === 'arrow'" d="M4 12h16m-6-6 6 6-6 6" />
    <path v-else-if="name === 'close'" d="m6 6 12 12M6 18 18 6" />
    <g v-else-if="name === 'image'"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8" cy="8" r="1" /><path d="m3 17 5-5 4 4 4-6 5 7" /></g>
    <path v-else-if="name === 'chevron-left'" d="m14 5-7 7 7 7" />
    <path v-else-if="name === 'chevron-right'" d="m10 5 7 7-7 7" />
    <path v-else d="m9 5 11 7-11 7z" />
  </svg>
</template>
