<script setup lang="ts">
import { normativeDocuments } from "~/data/normative";
</script>

<template>
  <section
    id="normativa"
    class="section-spacing scroll-mt-24 bg-surface-green"
    aria-labelledby="normative-title"
  >
    <AppContainer>
      <div class="max-w-2xl">
        <p
          class="text-xs font-bold uppercase tracking-[0.15em] text-sedalp-green"
        >
          Documentos de interés
        </p>

        <h2
          id="normative-title"
          class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-heading sm:text-4xl"
        >
          Normativa
        </h2>

        <p class="mt-4 text-sm leading-7 text-body sm:text-base">
          Consulta normativa, documentos técnicos y material de referencia
          relacionado con la gestión autonómica.
        </p>
      </div>

      <div class="mt-6">
        <NormativeCarousel :documents="normativeDocuments" />
      </div>
    </AppContainer>
  </section>
</template>
