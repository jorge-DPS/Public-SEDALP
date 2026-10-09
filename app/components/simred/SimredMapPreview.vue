<script setup lang="ts">
const layers = ref(["Límites administrativos", "Municipios", "Regiones"]);
const layerOptions = ["Límites administrativos", "Municipios", "Regiones", "Red vial", "Proyectos", "Salud", "Educación"];
const zoom = ref(1);
const showLayers = ref(true);

const zoomIn = () => { zoom.value = Math.min(1.2, Number((zoom.value + 0.1).toFixed(1))); };
const zoomOut = () => { zoom.value = Math.max(0.8, Number((zoom.value - 0.1).toFixed(1))); };
const resetZoom = () => { zoom.value = 1; };
</script>

<template>
  <div class="relative h-full min-h-[400px] w-full bg-[#e8ede4] sm:min-h-[440px]">
    <!-- Barra superior de visor geográfico -->
    <div class="absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between bg-[#111722] px-4 text-white">
      <div class="flex items-center gap-2">
        <span class="size-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
        <span class="text-xs font-semibold tracking-wide">SIMRED — Visor Departamental</span>
      </div>
      <div class="hidden items-center gap-5 text-[0.62rem] text-white/70 sm:flex">
        <span class="cursor-pointer hover:text-white transition-colors">Mapas</span>
        <span class="cursor-pointer hover:text-white transition-colors">Indicadores</span>
        <span class="cursor-pointer hover:text-white transition-colors">Reportes</span>
      </div>
      <button
        type="button"
        class="text-xs text-white/80 hover:text-white sm:hidden"
        @click="showLayers = !showLayers"
      >
        {{ showLayers ? 'Ocultar Capas' : 'Ver Capas' }}
      </button>
    </div>

    <!-- Mapa cartográfico de La Paz -->
    <NuxtImg
      src="/images/simred/mapa-la-paz.webp"
      alt="Mapa del departamento de La Paz"
      width="1200"
      height="900"
      sizes="100vw lg:60vw"
      quality="88"
      format="webp"
      loading="lazy"
      class="absolute inset-x-0 bottom-0 top-11 h-[calc(100%-2.75rem)] w-full object-contain p-6 transition-transform duration-300 sm:pl-48"
      :style="{ transform: `scale(${zoom})` }"
    />

    <!-- Panel flotante de capas -->
    <fieldset
      v-if="showLayers"
      class="absolute bottom-5 left-4 top-15 z-10 w-42 overflow-hidden rounded-xl border border-brand-navy/10 bg-white/95 p-3.5 shadow-card backdrop-blur transition-all"
    >
      <legend class="sr-only">Capas del mapa</legend>
      <div class="flex items-center justify-between border-b border-brand-navy/10 pb-2 text-[0.68rem] font-bold text-brand-navy">
        <span>Capas Activas</span>
        <button type="button" class="text-muted hover:text-brand-navy sm:hidden" @click="showLayers = false">✕</button>
      </div>

      <div class="mt-2 space-y-2">
        <label v-for="option in layerOptions" :key="option" class="flex cursor-pointer items-center gap-2 text-[0.58rem] font-medium text-body hover:text-heading">
          <input v-model="layers" type="checkbox" :value="option" class="size-3 rounded accent-brand-copper" />
          <span>{{ option }}</span>
        </label>
      </div>

      <div class="mt-3.5 pt-2 border-t border-brand-navy/5">
        <div class="flex justify-between text-[0.55rem] text-muted mb-1">
          <span>Cobertura</span>
          <span>100%</span>
        </div>
        <div class="h-1 rounded-full bg-brand-navy/10 overflow-hidden">
          <div class="h-full w-4/5 bg-brand-copper" />
        </div>
      </div>
    </fieldset>

    <!-- Controles de navegación y zoom -->
    <div class="absolute right-4 top-15 z-10 flex flex-col overflow-hidden rounded-lg border border-brand-navy/12 bg-white shadow-soft">
      <button type="button" class="flex size-8 items-center justify-center border-b border-brand-navy/10 text-xs font-bold text-brand-navy hover:bg-brand-cream hover:text-brand-copper transition-colors" aria-label="Acercar mapa" @click="zoomIn">+</button>
      <button type="button" class="flex size-8 items-center justify-center border-b border-brand-navy/10 text-xs font-bold text-brand-navy hover:bg-brand-cream hover:text-brand-copper transition-colors" aria-label="Alejar mapa" @click="zoomOut">−</button>
      <button type="button" class="flex size-8 items-center justify-center text-xs font-bold text-brand-navy hover:bg-brand-cream hover:text-brand-copper transition-colors" aria-label="Restablecer mapa" @click="resetZoom">⌂</button>
    </div>
  </div>
</template>
