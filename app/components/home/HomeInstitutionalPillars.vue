<script setup lang="ts">
import { institutionalPillars } from "~/config/home";
</script>

<template>
  <section id="institucional" class="relative scroll-mt-24 overflow-hidden bg-surface-soft py-16 lg:py-20" aria-label="Información institucional">
    <AppContainer>
      <div class="mb-10 max-w-2xl text-left">
        <span class="section-kicker">Pilares Institucionales</span>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-[2.25rem]">
          Bases de nuestra gestión departamental
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-body">
          Acompañamos a los gobiernos autónomos municipales e indígena originario campesinos mediante asistencia técnica, planificación y herramientas estratégicas.
        </p>
      </div>

      <div class="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InstitutionalPillarCard
          v-for="(pillar, index) in institutionalPillars"
          :key="pillar.id"
          :title="pillar.title"
          :description="pillar.description"
          :icon="pillar.icon"
          :index="index + 1"
        />
      </div>
    </AppContainer>
  </section>
</template>
