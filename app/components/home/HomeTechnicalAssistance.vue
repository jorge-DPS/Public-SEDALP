<script setup lang="ts">
import { assistanceItems } from "~/data/assistance";

const featuredAssistance = computed(() => assistanceItems.slice(0, 4));
</script>

<template>
  <section
    id="asistencia-tecnica"
    class="section-spacing scroll-mt-24 bg-white"
    aria-labelledby="home-assistance-title"
  >
    <AppContainer>
      <!-- Encabezado -->

      <div
        class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div class="max-w-2xl">
          <p
            class="text-xs font-bold uppercase tracking-[0.15em] text-sedalp-green"
          >
            Fortalecimiento institucional
          </p>

          <h2
            id="home-assistance-title"
            class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-heading sm:text-4xl"
          >
            Asistencia Técnica
          </h2>

          <p class="mt-4 text-sm leading-7 text-body sm:text-base">
            Conoce las acciones y materiales de asistencia técnica desarrollados
            para fortalecer las capacidades de los gobiernos autónomos del
            departamento de La Paz.
          </p>
        </div>

        <NuxtLink
          to="/asistencia-tecnica"
          class="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-sedalp-green transition-colors hover:text-sedalp-green-dark"
        >
          Ver Asistencia Técnica

          <span
            class="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </NuxtLink>
      </div>

      <!-- Imágenes destacadas -->

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AssistanceImageCard
          v-for="item in featuredAssistance"
          :key="item.id"
          :item="item"
          preview
        />
      </div>

      <!-- CTA mobile/central -->

      <div class="mt-10 flex justify-center">
        <BaseButton to="/asistencia-tecnica" variant="outline">
          Conocer más

          <span aria-hidden="true"> → </span>
        </BaseButton>
      </div>
    </AppContainer>
  </section>
</template>
