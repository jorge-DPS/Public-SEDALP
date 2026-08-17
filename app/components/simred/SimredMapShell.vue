<template>
  <div
    class="overflow-hidden rounded-[1.25rem] border border-border-soft bg-white shadow-card"
  >
    <!-- ==========================
         TOOLBAR
    =========================== -->

    <div
      class="flex flex-col gap-4 border-b border-border-soft bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <!-- Buscador visual -->

      <div class="relative w-full sm:max-w-md">
        <svg
          viewBox="0 0 24 24"
          class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
          aria-hidden="true"
        >
          <circle
            cx="11"
            cy="11"
            r="6.5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
          />

          <path
            d="m16 16 4 4"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
          />
        </svg>

        <input
          type="search"
          placeholder="Buscar municipio o región..."
          class="h-11 w-full rounded-lg border border-border-soft bg-surface-soft pl-11 pr-4 text-sm text-heading outline-none transition-all placeholder:text-muted focus:border-sedalp-green/40 focus:bg-white focus:ring-4 focus:ring-sedalp-green/10"
        />
      </div>

      <!-- Acciones futuras -->

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-soft bg-white px-4 text-xs font-semibold text-heading transition-all hover:border-sedalp-green/30 hover:bg-surface-green hover:text-sedalp-green"
        >
          Capas
        </button>

        <button
          type="button"
          class="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border-soft bg-white px-4 text-xs font-semibold text-heading transition-all hover:border-sedalp-green/30 hover:bg-surface-green hover:text-sedalp-green"
        >
          Pantalla completa
        </button>
      </div>
    </div>

    <!-- ==========================
         ÁREA DEL MAPA
    =========================== -->

    <div
      class="relative min-h-[580px] bg-[#edf2ef] sm:min-h-[650px] lg:min-h-[720px]"
    >
      <NuxtImg
        src="/images/simred/mapa-la-paz.webp"
        alt="Mapa del departamento de La Paz"
        width="1800"
        height="1400"
        sizes="100vw"
        quality="90"
        format="webp"
        class="absolute inset-0 h-full w-full object-contain p-8 sm:p-12 lg:p-16"
      />

      <!-- Controles simulados -->

      <div
        class="absolute left-4 top-4 flex flex-col overflow-hidden rounded-lg border border-border-soft bg-white shadow-soft"
      >
        <button
          type="button"
          class="flex size-10 items-center justify-center border-b border-border-soft text-lg font-semibold text-heading transition-colors hover:bg-surface-green hover:text-sedalp-green"
          aria-label="Acercar mapa"
        >
          +
        </button>

        <button
          type="button"
          class="flex size-10 items-center justify-center text-lg font-semibold text-heading transition-colors hover:bg-surface-green hover:text-sedalp-green"
          aria-label="Alejar mapa"
        >
          −
        </button>
      </div>

      <!-- Aviso de maqueta -->

      <div
        class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-sedalp-green-darker/90 px-5 py-2.5 text-xs font-semibold text-white shadow-card backdrop-blur"
      >
        Visor cartográfico SIMRED
      </div>
    </div>
  </div>
</template>
