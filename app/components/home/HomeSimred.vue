<template>
  <section id="simred" class="relative scroll-mt-24 overflow-hidden bg-surface-soft py-16 lg:py-20" aria-labelledby="home-simred-title">
    <AppContainer>
      <div class="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
        <div class="lg:pr-4">
          <span class="section-kicker">Geoinformación y Territorio</span>
          <h2 id="home-simred-title" class="mt-2 text-2xl font-bold leading-tight tracking-tight text-brand-navy sm:text-3xl lg:text-[2.25rem]">
            SIMRED — Sistema de Información Municipal y Regional
          </h2>

          <p class="mt-4 text-sm leading-relaxed text-body">
            Plataforma digital interactiva que integra y visualiza datos territoriales, socioeconómicos y de gestión de los 87 municipios y 20 provincias de La Paz para una planificación técnica informada.
          </p>

          <!-- Indicadores rápidos -->
          <div class="mt-6 flex flex-wrap gap-2.5">
            <span class="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/12 bg-white px-3 py-1 text-xs font-semibold text-brand-navy shadow-2xs">
              <span class="size-1.5 rounded-full bg-brand-copper" /> 87 Municipios
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/12 bg-white px-3 py-1 text-xs font-semibold text-brand-navy shadow-2xs">
              <span class="size-1.5 rounded-full bg-brand-copper" /> 20 Provincias
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/12 bg-white px-3 py-1 text-xs font-semibold text-brand-navy shadow-2xs">
              <span class="size-1.5 rounded-full bg-brand-copper" /> Capas Georreferenciadas
            </span>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BaseButton to="/simred" variant="primary" class="group min-h-12 px-6 text-xs font-semibold tracking-wide uppercase">
              <span>Ingresar a SIMRED</span>
              <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </BaseButton>
          </div>
        </div>

        <!-- Visor cartográfico enmarcado con acabado moderno -->
        <div class="overflow-hidden rounded-2xl border border-brand-navy/15 bg-white shadow-card">
          <SimredMapPreview />
        </div>
      </div>
    </AppContainer>
  </section>
</template>
