<template>
  <div class="group relative h-full min-h-[360px] w-full lg:min-h-[470px]">
    <NuxtImg
      src="/images/simred/mapa-la-paz.webp"
      alt="Mapa del departamento de La Paz"
      width="1200"
      height="900"
      sizes="
        100vw
        lg:60vw
      "
      quality="88"
      format="webp"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-contain p-7 transition-transform duration-700 group-hover:scale-[1.02] sm:p-10 lg:p-12"
    />

    <!-- Etiqueta -->

    <div
      class="absolute left-5 top-5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-sedalp-green shadow-soft backdrop-blur"
    >
      Departamento de La Paz
    </div>

    <!-- Indicador -->

    <div
      class="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-sedalp-green-darker/90 px-4 py-2 text-xs font-semibold text-white shadow-soft backdrop-blur"
    >
      <span class="size-2 rounded-full bg-[#69db96]" />

      Explorar mapa
    </div>
  </div>
</template>
