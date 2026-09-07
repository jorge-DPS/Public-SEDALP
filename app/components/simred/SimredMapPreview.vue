<script setup lang="ts">
const layers = ref(["Límites administrativos", "Municipios", "Regiones"]);
const layerOptions = ["Límites administrativos", "Municipios", "Regiones", "Red vial", "Proyectos", "Salud", "Educación"];
const zoom = ref(1);

const zoomIn = () => { zoom.value = Math.min(1.2, Number((zoom.value + 0.1).toFixed(1))); };
const zoomOut = () => { zoom.value = Math.max(0.8, Number((zoom.value - 0.1).toFixed(1))); };
const resetZoom = () => { zoom.value = 1; };
</script>

<template>
  <div class="relative h-full min-h-[390px] w-full bg-[#e8ede4] sm:min-h-[430px]">
    <div class="absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between bg-brand-navy px-4 text-white">
      <span class="text-xs font-semibold tracking-wide">◉ SIMRED</span>
      <span class="hidden gap-5 text-[0.55rem] text-white/70 sm:flex"><span>Mapas</span><span>Indicadores</span><span>Reportes</span><span>Descargas</span></span>
      <span class="text-[0.65rem] text-white/75">⌕</span>
    </div>
    <NuxtImg src="/images/simred/mapa-la-paz.webp" alt="Mapa del departamento de La Paz" width="1200" height="900" sizes="100vw lg:60vw" quality="88" format="webp" loading="lazy" class="absolute inset-x-0 bottom-0 top-11 h-[calc(100%-2.75rem)] w-full object-contain p-7 transition-transform duration-300 sm:pl-44" :style="{ transform: `scale(${zoom})` }" />
    <fieldset class="absolute bottom-5 left-4 top-15 z-10 w-40 overflow-hidden bg-white/95 p-4 shadow-card backdrop-blur">
      <legend class="sr-only">Capas del mapa</legend>
      <div class="flex items-center justify-between text-[0.62rem] font-semibold text-brand-navy"><span>Capas</span><span aria-hidden="true">×</span></div>
      <label v-for="option in layerOptions" :key="option" class="mt-3 flex cursor-pointer items-start gap-2 text-[0.52rem] leading-3.5 text-body">
        <input v-model="layers" type="checkbox" :value="option" class="mt-0.5 size-3 accent-brand-copper" />
        <span>{{ option }}</span>
      </label>
      <div class="mt-4 h-1 bg-brand-navy/10"><div class="h-full w-3/5 bg-brand-copper" /></div>
    </fieldset>
    <div class="absolute right-3 top-16 z-10 flex flex-col gap-1">
      <button type="button" class="flex size-7 items-center justify-center bg-white text-xs font-semibold text-brand-navy shadow-soft hover:text-brand-copper" aria-label="Acercar mapa" @click="zoomIn">+</button>
      <button type="button" class="flex size-7 items-center justify-center bg-white text-xs font-semibold text-brand-navy shadow-soft hover:text-brand-copper" aria-label="Alejar mapa" @click="zoomOut">−</button>
      <button type="button" class="flex size-7 items-center justify-center bg-white text-xs font-semibold text-brand-navy shadow-soft hover:text-brand-copper" aria-label="Restablecer mapa" @click="resetZoom">⌂</button>
    </div>
  </div>
</template>
