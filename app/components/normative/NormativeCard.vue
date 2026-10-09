<script setup lang="ts">
import type { NormativeDocument } from "~/types/normative";

defineProps<{ document: NormativeDocument; index: number }>();
</script>

<template>
  <article
    class="group flex min-h-[220px] flex-col justify-between rounded-xl border border-brand-navy/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-copper/50 hover:shadow-card"
  >
    <div>
      <div class="flex items-center justify-between gap-2">
        <span class="rounded-md bg-brand-cream/90 px-2 py-1 text-[0.65rem] font-bold tracking-wide uppercase text-brand-copper-dark">
          {{ document.type }}
        </span>
        <span class="text-[0.72rem] font-semibold text-muted">
          {{ document.year ?? 'Vigente' }}
        </span>
      </div>

      <div class="mt-4 flex items-start gap-3">
        <div class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-copper transition-colors group-hover:bg-brand-copper group-hover:text-white">
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <h3 class="text-sm font-bold leading-snug text-heading transition-colors group-hover:text-brand-copper-dark">
          {{ document.title }}
        </h3>
      </div>

      <p v-if="document.description" class="mt-3 line-clamp-2 text-xs leading-relaxed text-body">
        {{ document.description }}
      </p>
    </div>

    <div class="mt-5 flex items-center justify-end border-t border-brand-navy/5 pt-3">
      <a
        :href="document.file"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-lg bg-brand-cream/60 px-3 py-1.5 text-[0.7rem] font-semibold text-brand-navy transition-colors hover:bg-brand-copper hover:text-white"
        :aria-label="`Descargar o consultar ${document.title}`"
      >
        <span>Consultar</span>
        <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"/></svg>
      </a>
    </div>
  </article>
</template>
