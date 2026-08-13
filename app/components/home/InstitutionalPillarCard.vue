<script setup lang="ts">
import type { InstitutionalPillarIcon } from "~/config/home";

interface Props {
  title: string;
  description: string;
  icon: InstitutionalPillarIcon;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-card border border-border-soft bg-white px-6 py-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-sedalp-green/20 hover:shadow-card-hover sm:px-7 sm:py-9 lg:px-8"
  >
    <!-- Detalle superior -->

    <div
      class="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-sedalp-green transition-transform duration-300 group-hover:scale-x-100"
      aria-hidden="true"
    />

    <!-- Icono -->

    <div
      class="mb-6 flex size-14 items-center justify-center rounded-xl bg-surface-green text-sedalp-green transition-all duration-300 group-hover:bg-sedalp-green group-hover:text-white sm:size-16"
    >
      <!-- MISIÓN -->

      <svg
        v-if="icon === 'mission'"
        viewBox="0 0 24 24"
        class="size-7 sm:size-8"
        aria-hidden="true"
      >
        <path
          d="M12 3a9 9 0 1 0 9 9"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />

        <path
          d="M12 7a5 5 0 1 0 5 5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />

        <circle cx="12" cy="12" r="1.6" fill="currentColor" />

        <path
          d="m14 10 6-6m0 0v4m0-4h-4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- VISIÓN -->

      <svg
        v-else-if="icon === 'vision'"
        viewBox="0 0 24 24"
        class="size-7 sm:size-8"
        aria-hidden="true"
      >
        <path
          d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        />

        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>

      <!-- OBJETIVO -->

      <svg
        v-else
        viewBox="0 0 24 24"
        class="size-7 sm:size-8"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        />

        <circle
          cx="12"
          cy="12"
          r="4.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
        />

        <circle cx="12" cy="12" r="1.5" fill="currentColor" />

        <path
          d="m14.5 9.5 5-5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- Texto -->

    <h2
      class="text-xl font-bold tracking-[-0.02em] text-sedalp-green sm:text-[1.35rem]"
    >
      {{ title }}
    </h2>

    <p class="mt-3 flex-1 text-sm leading-7 text-body">
      {{ description }}
    </p>

    <!-- Detalle institucional inferior -->

    <div class="mt-6 flex items-center gap-2" aria-hidden="true">
      <span class="h-[3px] w-8 rounded-full bg-sedalp-yellow" />

      <span class="h-[3px] w-3 rounded-full bg-sedalp-red" />
    </div>
  </article>
</template>
