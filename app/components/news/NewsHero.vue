<template>
  <section
    class="relative isolate flex min-h-[360px] items-center overflow-hidden bg-sedalp-green-darker sm:min-h-[400px]"
  >
    <NuxtImg
      src="/images/hero/sedalp-hero.webp"
      alt=""
      width="1920"
      height="800"
      sizes="100vw"
      quality="82"
      format="webp"
      class="absolute inset-0 -z-30 h-full w-full object-cover object-center"
    />

    <div
      class="absolute inset-0 -z-20 bg-gradient-to-r from-sedalp-green-darker/95 via-sedalp-green-dark/85 to-sedalp-green-dark/30"
      aria-hidden="true"
    />

    <AppContainer>
      <div class="max-w-3xl py-16 text-white">
        <div class="mb-5 flex gap-2" aria-hidden="true">
          <span class="h-[3px] w-8 bg-sedalp-red" />

          <span class="h-[3px] w-8 bg-sedalp-yellow" />

          <span class="h-[3px] w-8 bg-white" />
        </div>

        <p class="text-xs font-bold uppercase tracking-[0.17em] text-white/75">
          SEDALP
        </p>

        <h1
          class="mt-3 text-4xl font-extrabold tracking-[-0.045em] text-white sm:text-5xl"
        >
          Comunicación
        </h1>

        <p class="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          Conoce las noticias, actividades, asistencia técnica y principales
          acciones institucionales desarrolladas por el Servicio Departamental
          de Autonomías de La Paz.
        </p>
      </div>
    </AppContainer>
  </section>
</template>
