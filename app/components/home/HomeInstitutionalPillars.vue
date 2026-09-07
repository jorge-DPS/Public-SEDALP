<script setup lang="ts">
import { institutionalPillars } from "~/config/home";
</script>

<template>
  <section id="institucional" class="relative scroll-mt-24 overflow-hidden bg-[#fbfaf6]" aria-label="Información institucional">
    <svg class="pointer-events-none absolute -left-20 top-0 h-full w-72 text-brand-copper/[0.09]" viewBox="0 0 280 220" fill="none" aria-hidden="true"><path v-for="i in 5" :key="i" :d="`M-10 ${35 + i * 25}C48 ${5 + i * 26} 88 ${72 + i * 18} 148 ${38 + i * 23}S240 ${40 + i * 26} 294 ${12 + i * 27}`" stroke="currentColor" /></svg>
    <svg class="pointer-events-none absolute -right-20 bottom-0 h-full w-72 rotate-180 text-brand-copper/[0.08]" viewBox="0 0 280 220" fill="none" aria-hidden="true"><path v-for="i in 5" :key="i" :d="`M-10 ${35 + i * 25}C48 ${5 + i * 26} 88 ${72 + i * 18} 148 ${38 + i * 23}S240 ${40 + i * 26} 294 ${12 + i * 27}`" stroke="currentColor" /></svg>
    <AppContainer>
      <div class="relative grid py-11 md:grid-cols-3 md:py-14">
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
