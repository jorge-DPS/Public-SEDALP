<template>
  <section
    id="simred"
    class="section-spacing scroll-mt-24 overflow-hidden bg-white"
    aria-labelledby="home-simred-title"
  >
    <AppContainer>
      <div
        class="relative overflow-hidden rounded-[1.5rem] bg-sedalp-green-darker shadow-card"
      >
        <!-- Decoración -->

        <div
          class="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-sedalp-green/30 blur-3xl"
          aria-hidden="true"
        />

        <div
          class="pointer-events-none absolute -bottom-32 left-1/3 size-80 rounded-full bg-sedalp-yellow/10 blur-3xl"
          aria-hidden="true"
        />

        <div class="relative grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
          <!-- ===============================
               CONTENIDO
          ================================ -->

          <div
            class="flex flex-col justify-center px-7 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-14"
          >
            <div class="mb-5 flex items-center gap-2" aria-hidden="true">
              <span class="h-[3px] w-8 rounded-full bg-sedalp-red" />

              <span class="h-[3px] w-8 rounded-full bg-sedalp-yellow" />

              <span class="h-[3px] w-8 rounded-full bg-white" />
            </div>

            <p
              class="text-xs font-bold uppercase tracking-[0.16em] text-white/70"
            >
              Información territorial
            </p>

            <h2
              id="home-simred-title"
              class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl"
            >
              SIMRED
            </h2>

            <p
              class="mt-2 text-base font-semibold leading-6 text-[#72db9a] sm:text-lg"
            >
              Sistema de Información Municipal y Regional
            </p>

            <p
              class="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-[0.95rem]"
            >
              Explora información territorial del departamento de La Paz, sus
              regiones y municipios mediante herramientas cartográficas y
              recursos de consulta.
            </p>

            <div class="mt-8">
              <NuxtLink
                to="/simred"
                class="group inline-flex min-h-12 items-center justify-center gap-3 rounded-button bg-white px-6 text-sm font-bold text-sedalp-green shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-sedalp-yellow hover:text-sedalp-green-darker"
              >
                Explorar SIMRED

                <span
                  class="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </NuxtLink>
            </div>
          </div>

          <!-- ===============================
               PREVIEW VISUAL
          ================================ -->

          <div
            class="relative min-h-[360px] overflow-hidden border-t border-white/10 bg-[#edf3ef] lg:min-h-[470px] lg:border-l lg:border-t-0"
          >
            <SimredMapPreview />
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
