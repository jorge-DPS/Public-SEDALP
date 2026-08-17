<script setup lang="ts">
import type { AssistanceItem } from "~/types/assistance";

interface Props {
  item: AssistanceItem;
  preview?: boolean;
}

withDefaults(defineProps<Props>(), {
  preview: false,
});
</script>

<template>
  <figure
    class="group break-inside-avoid overflow-hidden rounded-card border border-border-soft bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
  >
    <div
      :class="[
        'relative overflow-hidden bg-surface-soft',

        preview ? 'aspect-[4/5]' : '',
      ]"
    >
      <NuxtImg
        :src="item.image"
        :alt="item.alt"
        width="800"
        height="1000"
        sizes="
          100vw
          sm:50vw
          lg:25vw
        "
        quality="85"
        format="webp"
        loading="lazy"
        :class="[
          'w-full transition-transform duration-700 ease-out',
          'group-hover:scale-[1.025]',

          preview ? 'h-full object-cover' : 'h-auto object-contain',
        ]"
      />

      <!-- Oscurecimiento casi imperceptible -->

      <div
        class="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.03]"
      />
    </div>

    <figcaption class="px-5 py-4">
      <p class="text-sm font-semibold text-heading">
        {{ item.title }}
      </p>
    </figcaption>
  </figure>
</template>
