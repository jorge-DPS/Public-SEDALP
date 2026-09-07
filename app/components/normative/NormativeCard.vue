<script setup lang="ts">
import type { NormativeDocument } from "~/types/normative";

defineProps<{ document: NormativeDocument; index: number }>();
</script>

<template>
  <article :class="['group flex min-h-[210px] flex-col py-5 pr-4 sm:pr-5', index > 1 ? 'sm:border-l sm:border-brand-navy/10 sm:pl-5' : '']">
    <div class="flex items-start gap-3">
      <svg class="size-7 shrink-0 text-brand-copper" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 3h12l6 6v20H7z"/><path d="M19 3v7h6M11 17h10M11 22h8"/></svg>
      <div>
        <p class="text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-muted">{{ document.type }}</p>
        <h3 class="mt-1.5 text-xs font-semibold leading-5 text-heading transition-colors group-hover:text-brand-copper-dark">{{ document.title }}</h3>
      </div>
    </div>
    <p v-if="document.description" class="mt-4 line-clamp-2 text-[0.66rem] leading-5 text-body">{{ document.description }}</p>
    <div class="mt-auto flex items-end justify-between pt-4">
      <span class="text-[0.62rem] text-muted">{{ document.year ?? 'Consulta' }}</span>
      <a :href="document.file" target="_blank" rel="noopener noreferrer" class="flex size-8 items-center justify-center text-brand-navy transition-colors hover:text-brand-copper" :aria-label="`Ver ${document.title}`"><svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"/></svg></a>
    </div>
  </article>
</template>
