<template>
  <div class="overflow-hidden border border-brand-navy/15 bg-white">
    <div class="flex flex-col gap-4 border-b border-brand-navy/12 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <label class="relative block w-full sm:max-w-md">
        <span class="sr-only">Buscar municipio o región</span>
        <svg viewBox="0 0 24 24" class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.7" />
          <path d="m16 16 4 4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
        </svg>
        <input type="search" placeholder="Buscar municipio o región..." class="h-12 w-full border border-brand-navy/15 bg-surface-soft pl-12 pr-4 text-sm text-heading outline-none transition-all placeholder:text-muted focus:border-brand-copper focus:bg-white focus:ring-4 focus:ring-brand-copper/10" />
      </label>
      <div class="flex items-center gap-2">
        <button type="button" class="inline-flex h-12 items-center justify-center border border-brand-navy/15 bg-white px-4 text-xs font-semibold text-heading transition-colors hover:border-brand-copper hover:text-brand-copper-dark">Capas</button>
        <button type="button" class="inline-flex h-12 items-center justify-center border border-brand-navy/15 bg-white px-4 text-xs font-semibold text-heading transition-colors hover:border-brand-copper hover:text-brand-copper-dark">Pantalla completa</button>
      </div>
    </div>

    <div class="relative min-h-[580px] bg-brand-cream sm:min-h-[650px] lg:min-h-[720px]">
      <div class="absolute inset-0 opacity-30" style="background-image: linear-gradient(rgb(29 37 50 / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(29 37 50 / 0.08) 1px, transparent 1px); background-size: 42px 42px" aria-hidden="true" />
      <NuxtImg src="/images/simred/mapa-la-paz.webp" alt="Mapa del departamento de La Paz" width="1800" height="1400" sizes="100vw" quality="90" format="webp" class="absolute inset-0 h-full w-full object-contain p-8 sm:p-12 lg:p-16" />
      <div class="absolute left-4 top-4 flex flex-col overflow-hidden border border-brand-navy/15 bg-white shadow-soft">
        <button type="button" class="flex size-11 items-center justify-center border-b border-brand-navy/12 text-lg font-semibold text-heading transition-colors hover:bg-brand-navy hover:text-white" aria-label="Acercar mapa">+</button>
        <button type="button" class="flex size-11 items-center justify-center text-lg font-semibold text-heading transition-colors hover:bg-brand-navy hover:text-white" aria-label="Alejar mapa">−</button>
      </div>
      <div class="absolute bottom-5 left-1/2 -translate-x-1/2 bg-brand-navy px-5 py-2.5 text-xs font-semibold text-white shadow-card">Visor cartográfico SIMRED</div>
    </div>
  </div>
</template>
