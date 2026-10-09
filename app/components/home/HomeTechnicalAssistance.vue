<script setup lang="ts">
import { assistanceItems } from "~/data/assistance";

const featuredImages = [
  "/images/assistance/assistance-04.webp",
  "/images/assistance/assistance-11.webp",
  "/images/assistance/assistance-15.webp",
];

const featuredAssistance = computed(() =>
  assistanceItems.slice(0, 3).map((item, index) => ({
    ...item,
    image: featuredImages[index] ?? item.image,
  }))
);
</script>

<template>
  <section id="asistencia-tecnica" class="scroll-mt-24 bg-white py-16 lg:py-20" aria-labelledby="home-assistance-title">
    <AppContainer>
      <div class="grid gap-10 lg:grid-cols-[0.85fr_repeat(3,1fr)] lg:items-start lg:gap-6">
        <!-- Columna informativa lateral -->
        <div class="flex flex-col justify-between pr-2 lg:pr-6">
          <div>
            <span class="section-kicker">Acompañamiento Territorial</span>
            <h2 id="home-assistance-title" class="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-[2.25rem]">
              Asistencia Técnica
            </h2>
            <p class="mt-4 text-sm leading-relaxed text-body">
              Brindamos acompañamiento técnico especializado a gobiernos municipales y regionales en planificación, gestión financiera, institucional y ejecución de proyectos para una administración autónoma eficiente y transparente.
            </p>
          </div>

          <div class="mt-8 pt-2">
            <NuxtLink
              to="/asistencia-tecnica"
              class="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:text-brand-copper"
            >
              <span>Ver todos los servicios</span>
              <span class="flex size-7 items-center justify-center rounded-full bg-brand-cream text-brand-copper transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Tarjetas destacadas de servicios -->
        <div v-for="item in featuredAssistance" :key="item.id">
          <AssistanceImageCard :item="item" preview />
        </div>
      </div>
    </AppContainer>
  </section>
</template>
