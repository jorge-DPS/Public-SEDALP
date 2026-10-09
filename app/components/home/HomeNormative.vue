<script setup lang="ts">
import { normativeDocuments } from "~/data/normative";
</script>

<template>
  <section id="normativa" class="scroll-mt-24 bg-surface-soft py-16 lg:py-20" aria-labelledby="normative-title">
    <AppContainer>
      <div class="grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
        <div class="flex flex-col justify-between">
          <div>
            <span class="section-kicker">Marco Jurídico</span>
            <h2 id="normative-title" class="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-[2.25rem]">
              Normativa
            </h2>
            <p class="mt-4 text-sm leading-relaxed text-body">
              Accede a la normativa vigente que regula la autonomía municipal, departamental e indígena originaria campesina en el marco legal del Estado Plurinacional de Bolivia.
            </p>
          </div>

          <div class="mt-8 pt-2">
            <NuxtLink
              to="/#normativa"
              class="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:text-brand-copper"
            >
              <span>Ver repositorio legal</span>
              <span class="flex size-7 items-center justify-center rounded-full bg-white text-brand-copper shadow-sm transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>

        <NormativeCarousel :documents="normativeDocuments" />
      </div>
    </AppContainer>
  </section>
</template>
