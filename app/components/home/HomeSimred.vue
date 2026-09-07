<template>
  <section id="simred" class="relative scroll-mt-24 overflow-hidden bg-[#f7f5ee] py-14 lg:py-16" aria-labelledby="home-simred-title">
    <svg class="pointer-events-none absolute -left-24 inset-y-0 h-full w-[44%] text-brand-copper/[0.08]" viewBox="0 0 560 360" fill="none" aria-hidden="true"><path v-for="i in 8" :key="i" :d="`M-20 ${35 + i * 39}C95 ${-5 + i * 36} 165 ${92 + i * 30} 280 ${42 + i * 36}S455 ${82 + i * 30} 590 ${24 + i * 38}`" stroke="currentColor" /></svg>
    <AppContainer>
      <div class="relative grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12">
        <div class="lg:pr-5">
          <h2 id="home-simred-title" class="text-2xl font-bold leading-tight tracking-[-0.04em] text-brand-navy sm:text-[2rem]">SIMRED — Sistema de Información Municipal y Regional</h2>
          <span class="mt-4 block h-0.5 w-8 bg-brand-copper" aria-hidden="true" />
          <p class="mt-6 max-w-md text-xs leading-6 text-body sm:text-[0.8rem]">Plataforma digital que integra y visualiza información territorial, socioeconómica y de gestión de los municipios y regiones del departamento de La Paz para la toma de decisiones.</p>
          <BaseButton to="/simred" variant="dark" class="mt-7 min-h-11 px-5 text-xs">Ingresar a SIMRED <span aria-hidden="true">→</span></BaseButton>
        </div>
        <div class="min-h-[390px] overflow-hidden border border-brand-navy/10 bg-white shadow-soft sm:min-h-[430px]">
          <SimredMapPreview />
        </div>
      </div>
    </AppContainer>
  </section>
</template>
