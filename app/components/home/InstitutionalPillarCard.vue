<script setup lang="ts">
import type { InstitutionalPillarIcon } from "~/config/home";

interface Props {
  title: string;
  description: string;
  icon: InstitutionalPillarIcon;
  index: number;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group relative flex flex-col justify-between rounded-2xl border border-brand-navy/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-copper/50 hover:shadow-card sm:p-8"
  >
    <!-- Marca de agua de índice numérico -->
    <div class="flex items-center justify-between">
      <div
        class="flex size-12 items-center justify-center rounded-xl bg-brand-cream/90 text-brand-copper transition-colors duration-300 group-hover:bg-brand-copper group-hover:text-white"
      >
        <svg v-if="icon === 'mission'" class="size-6 shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="15" cy="17" r="10"/><circle cx="15" cy="17" r="5"/><path d="m18 14 9-9M21 5h6v6"/></svg>
        <svg v-else-if="icon === 'vision'" class="size-6 shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z"/><circle cx="16" cy="16" r="3.5"/></svg>
        <svg v-else class="size-6 shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 28V4M8 6c7-4 10 4 17 0v12c-7 4-10-4-17 0"/><path d="M4 28h7"/></svg>
      </div>

      <span class="text-xs font-bold tracking-widest text-brand-copper/60 uppercase">
        0{{ index }}
      </span>
    </div>

    <div class="mt-6 flex-1">
      <h3 class="text-xl font-bold tracking-tight text-brand-navy transition-colors duration-200 group-hover:text-brand-copper-dark">
        {{ title }}
      </h3>
      <p class="mt-3 text-sm leading-relaxed text-body">
        {{ description }}
      </p>
    </div>

    <!-- Indicador institucional inferior -->
    <div class="mt-6 pt-4">
      <span class="block h-0.5 w-8 bg-brand-copper/40 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-copper" aria-hidden="true" />
    </div>
  </article>
</template>
