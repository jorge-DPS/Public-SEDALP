<script setup lang="ts">
import { assistanceItems } from "~/data/assistance";

useSeoMeta({
  title: "Asistencia Técnica",

  description:
    "Materiales y acciones de asistencia técnica del Servicio Departamental de Autonomías de La Paz.",
});
</script>

<template>
  <div>
    <AssistanceHero />

    <section class="section-spacing bg-white">
      <AppContainer>
        <div class="max-w-2xl">
          <p
            class="section-kicker"
          >
            Recursos institucionales
          </p>

          <h2
            class="mt-4 text-3xl font-bold tracking-[-0.045em] text-heading sm:text-4xl"
          >
            Material de Asistencia Técnica
          </h2>

          <p class="mt-4 text-sm leading-7 text-body">
            Explora los materiales desarrollados como parte de las acciones de
            asistencia y fortalecimiento institucional.
          </p>
        </div>

        <!-- Galería -->

        <div class="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          <div
            v-for="item in assistanceItems"
            :key="item.id"
            class="mb-6 break-inside-avoid"
          >
            <AssistanceImageCard :item="item" />
          </div>
        </div>
      </AppContainer>
    </section>
  </div>
</template>
