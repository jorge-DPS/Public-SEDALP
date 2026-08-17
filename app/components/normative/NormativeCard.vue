<script setup lang="ts">
import type { NormativeDocument } from "~/types/normative";

interface Props {
  document: NormativeDocument;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-card border border-border-soft bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-sedalp-green/20 hover:shadow-card-hover"
  >
    <!-- Portada visual -->

    <div
      class="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-surface-green"
    >
      <NuxtImg
        v-if="document.cover"
        :src="document.cover"
        :alt="document.title"
        width="600"
        height="450"
        class="h-full w-full object-cover"
      />

      <!-- PDF genérico -->

      <div v-else class="flex flex-col items-center justify-center">
        <div
          class="flex size-16 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-sedalp-red shadow-soft"
        >
          PDF
        </div>

        <span
          class="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-sedalp-green"
        >
          {{ document.type }}
        </span>
      </div>

      <div
        class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sedalp-red via-sedalp-yellow to-sedalp-green"
      />
    </div>

    <!-- Información -->

    <div class="flex flex-1 flex-col p-6">
      <div
        class="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted"
      >
        <span>
          {{ document.type }}
        </span>

        <template v-if="document.year">
          <span class="size-1 rounded-full bg-sedalp-yellow" />

          <span>
            {{ document.year }}
          </span>
        </template>
      </div>

      <h3
        class="mt-3 text-[1rem] font-bold leading-6 text-heading transition-colors group-hover:text-sedalp-green"
      >
        {{ document.title }}
      </h3>

      <p
        v-if="document.description"
        class="mt-3 flex-1 text-sm leading-6 text-body"
      >
        {{ document.description }}
      </p>

      <a
        :href="document.file"
        target="_blank"
        rel="noopener noreferrer"
        class="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-sedalp-green transition-colors hover:text-sedalp-green-dark"
      >
        Ver documento

        <span
          class="transition-transform duration-200 group-hover/link:translate-x-1"
        >
          →
        </span>
      </a>
    </div>
  </article>
</template>
