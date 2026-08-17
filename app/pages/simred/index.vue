<script setup lang="ts">
useSeoMeta({
  title: "SIMRED",

  description:
    "Sistema de Información Municipal y Regional del Servicio Departamental de Autonomías de La Paz.",
});
</script>

<template>
  <div>
    <SimredHero />

    <section
      class="section-spacing-sm bg-surface-soft"
      aria-labelledby="simred-map-title"
    >
      <AppContainer>
        <!-- Presentación -->

        <div
          class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div class="max-w-2xl">
            <p
              class="text-xs font-bold uppercase tracking-[0.15em] text-sedalp-green"
            >
              Información geográfica
            </p>

            <h2
              id="simred-map-title"
              class="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-heading sm:text-3xl"
            >
              Visor territorial
            </h2>

            <p class="mt-4 text-sm leading-7 text-body sm:text-base">
              Explora el territorio del departamento de La Paz y consulta
              información relacionada con sus regiones y municipios.
            </p>
          </div>

          <div class="flex items-center gap-2 text-xs font-semibold text-muted">
            <span class="size-2 rounded-full bg-sedalp-green" />

            Departamento de La Paz
          </div>
        </div>

        <!-- Mapa -->

        <SimredMapShell />
      </AppContainer>
    </section>
  </div>
</template>
