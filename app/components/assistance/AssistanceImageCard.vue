<script setup lang="ts">
import type { AssistanceItem } from "~/types/assistance";

interface Props {
  item: AssistanceItem;
  preview?: boolean;
}

withDefaults(defineProps<Props>(), { preview: false });
</script>

<template>
  <figure class="group break-inside-avoid overflow-hidden bg-white">
    <div :class="['relative overflow-hidden bg-surface-soft', preview ? 'aspect-[1.08/1]' : '']">
      <NuxtImg
        :src="item.image"
        :alt="item.alt"
        width="800"
        height="740"
        sizes="100vw sm:50vw lg:33vw"
        quality="84"
        format="webp"
        loading="lazy"
        :class="['w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]', preview ? 'h-full object-cover' : 'h-auto object-contain']"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" aria-hidden="true" />
    </div>
    <figcaption class="flex items-start justify-between gap-5 py-3.5">
      <p class="text-xs font-semibold leading-5 text-heading">{{ item.title }}</p>
      <span class="shrink-0 text-lg font-light text-brand-copper" aria-hidden="true">→</span>
    </figcaption>
  </figure>
</template>
