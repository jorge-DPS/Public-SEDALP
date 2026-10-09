<script setup lang="ts">
import type { NormativeDocument } from "~/types/normative";

const props = defineProps<{ documents: NormativeDocument[] }>();

const selectedType = ref("Todos");
const filters = ["Todos", "Ley", "Normativa", "Guía", "Documento técnico"];
const filteredDocuments = computed(() =>
  selectedType.value === "Todos"
    ? props.documents
    : props.documents.filter((document) => document.type === selectedType.value)
);
</script>

<template>
  <div>
    <!-- Botones de filtro redondeados e institucionales -->
    <div class="scrollbar-hidden flex items-center gap-2 overflow-x-auto pb-6 lg:justify-end">
      <button
        v-for="filter in filters"
        :key="filter"
        type="button"
        :class="[
          'shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200',
          selectedType === filter
            ? 'bg-brand-copper text-white shadow-sm'
            : 'border border-brand-navy/15 bg-white text-brand-navy hover:border-brand-copper/60 hover:text-brand-copper-dark'
        ]"
        @click="selectedType = filter"
      >
        {{ filter === 'Documento técnico' ? 'Técnicos' : filter }}
      </button>
    </div>

    <!-- Cuadrícula de tarjetas con espaciado consistente -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <NormativeCard
        v-for="(document, index) in filteredDocuments"
        :key="document.id"
        :document="document"
        :index="index + 1"
      />
      <div
        v-if="filteredDocuments.length === 0"
        class="col-span-full rounded-xl border border-brand-navy/10 bg-white py-12 text-center text-sm text-muted"
      >
        No hay documentos disponibles en esta categoría.
      </div>
    </div>
  </div>
</template>
