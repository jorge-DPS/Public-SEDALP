<script setup lang="ts">
import { assistanceItems } from "~/data/assistance";

const featuredImages = [
  "/images/assistance/assistance-04.webp",
  "/images/assistance/assistance-11.webp",
  "/images/assistance/assistance-15.webp",
];

const featuredAssistance = computed(() => assistanceItems.slice(0, 3).map((item, index) => ({ ...item, image: featuredImages[index] ?? item.image })));
</script>

<template>
  <section id="asistencia-tecnica" class="scroll-mt-24 bg-white py-14 lg:py-16" aria-labelledby="home-assistance-title">
    <AppContainer>
      <div class="grid gap-8 lg:grid-cols-[0.82fr_repeat(3,1fr)] lg:gap-5">
        <div class="pr-4 lg:pr-7">
          <h2 id="home-assistance-title" class="text-2xl font-bold tracking-[-0.04em] text-heading sm:text-[2rem]">Asistencia Técnica</h2>
          <span class="mt-4 block h-0.5 w-8 bg-brand-copper" aria-hidden="true" />
          <p class="mt-6 text-xs leading-6 text-body sm:text-[0.8rem]">Brindamos acompañamiento técnico especializado a gobiernos municipales y regionales en planificación, gestión financiera, institucional y ejecución de proyectos para una gestión autónoma eficiente y transparente.</p>
          <NuxtLink to="/asistencia-tecnica" class="group mt-7 inline-flex items-center gap-4 text-xs font-semibold text-brand-navy">Ver todos los servicios <span class="text-lg font-light text-brand-navy transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></NuxtLink>
        </div>
        <div v-for="item in featuredAssistance" :key="item.id">
          <AssistanceImageCard :item="item" preview />
        </div>
      </div>
    </AppContainer>
  </section>
</template>
