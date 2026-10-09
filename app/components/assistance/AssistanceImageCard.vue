<script setup lang="ts">
import type { AssistanceItem } from "~/types/assistance";

interface Props {
  item: AssistanceItem;
  preview?: boolean;
}

withDefaults(defineProps<Props>(), { preview: false });
</script>

<template>
  <NuxtLink
    to="/asistencia-tecnica"
    class="group block overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-copper/50 hover:shadow-card"
  >
    <div :class="['relative overflow-hidden bg-surface-soft', preview ? 'aspect-[4/3]' : '']">
      <NuxtImg
        :src="item.image"
        :alt="item.alt"
        width="800"
        height="600"
        sizes="100vw sm:50vw lg:33vw"
        quality="86"
        format="webp"
        loading="lazy"
        :class="['h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105', preview ? 'h-full object-cover' : 'h-auto object-contain']"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" aria-hidden="true" />
      <span class="absolute left-3.5 top-3.5 rounded-md bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold text-brand-navy shadow-sm backdrop-blur">
        Servicio
      </span>
    </div>

    <div class="flex items-center justify-between gap-3 p-5">
      <p class="text-sm font-bold text-heading transition-colors duration-200 group-hover:text-brand-copper-dark">
        {{ item.title }}
      </p>
      <span
        class="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-cream/80 text-brand-copper transition-all duration-200 group-hover:bg-brand-copper group-hover:text-white"
        aria-hidden="true"
      >
        →
      </span>
    </div>
  </NuxtLink>
</template>
