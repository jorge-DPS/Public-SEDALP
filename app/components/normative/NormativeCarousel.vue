<script setup lang="ts">
import type { NormativeDocument } from "~/types/normative";

const props = defineProps<{ documents: NormativeDocument[] }>();

const selectedType = ref("Todos");
const filters = ["Todos", "Ley", "Normativa", "Guía", "Documento técnico"];
const filteredDocuments = computed(() => selectedType.value === "Todos" ? props.documents : props.documents.filter((document) => document.type === selectedType.value));
</script>

<template>
  <div>
    <div class="scrollbar-hidden flex gap-1 overflow-x-auto pb-5 lg:justify-end">
      <button v-for="filter in filters" :key="filter" type="button" :class="['shrink-0 px-3 py-2 text-[0.67rem] font-medium transition-colors', selectedType === filter ? 'bg-brand-copper text-white' : 'text-brand-navy hover:bg-white']" @click="selectedType = filter">{{ filter === 'Documento técnico' ? 'Técnicos' : filter }}</button>
    </div>
    <div class="grid gap-0 border-t border-brand-navy/10 sm:grid-cols-2 lg:grid-cols-4">
      <NormativeCard v-for="(document, index) in filteredDocuments" :key="document.id" :document="document" :index="index + 1" />
      <p v-if="filteredDocuments.length === 0" class="col-span-full py-8 text-sm text-body">No hay documentos en esta categoría.</p>
    </div>
  </div>
</template>
