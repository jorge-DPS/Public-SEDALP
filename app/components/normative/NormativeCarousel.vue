<script setup lang="ts">
import type { NormativeDocument } from "~/types/normative";

interface Props {
  documents: NormativeDocument[];
}

defineProps<Props>();

const carousel = ref<HTMLElement | null>(null);

const scroll = (direction: "previous" | "next") => {
  if (!carousel.value) {
    return;
  }

  const distance = carousel.value.clientWidth * 0.8;

  carousel.value.scrollBy({
    left: direction === "next" ? distance : -distance,

    behavior: "smooth",
  });
};
</script>

<template>
  <div>
    <!-- Controles -->

    <div class="mb-6 flex justify-end gap-2">
      <button
        type="button"
        class="flex size-11 items-center justify-center rounded-full border border-border-soft bg-white text-sedalp-green transition-all hover:border-sedalp-green hover:bg-sedalp-green hover:text-white"
        aria-label="Documentos anteriores"
        @click="scroll('previous')"
      >
        ←
      </button>

      <button
        type="button"
        class="flex size-11 items-center justify-center rounded-full border border-border-soft bg-white text-sedalp-green transition-all hover:border-sedalp-green hover:bg-sedalp-green hover:text-white"
        aria-label="Siguientes documentos"
        @click="scroll('next')"
      >
        →
      </button>
    </div>

    <!-- Carrusel -->

    <div
      ref="carousel"
      class="scrollbar-hidden flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
    >
      <div
        v-for="document in documents"
        :key="document.id"
        class="w-[86%] shrink-0 snap-start sm:w-[47%] lg:w-[31%]"
      >
        <NormativeCard :document="document" />
      </div>
    </div>
  </div>
</template>
