<script setup lang="ts">
import { footerContact, footerNavigation, footerResources } from "~/config/footer";

const currentYear = new Date().getFullYear();
const scrollToTop = () => import.meta.client && window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<template>
  <footer id="contacto" class="scroll-mt-24 border-t border-white/10 bg-[#111722] text-white">
    <AppContainer>
      <div class="grid gap-10 py-12 lg:grid-cols-[1.25fr_0.7fr_0.7fr_0.9fr] lg:gap-10 lg:py-14">
        <div>
          <NuxtLink to="/" class="block w-[150px]" aria-label="Ir al inicio de La Paz, Departamento Maravilloso"><BrandLogo variant="white" alt="" /></NuxtLink>
          <h2 class="mt-5 max-w-xs text-xs font-medium leading-5 text-white/85">Servicio Departamental de Autonomías de La Paz</h2>
          <p class="mt-2 max-w-xs text-[0.67rem] leading-5 text-white/55">Promovemos la autonomía y el desarrollo de nuestros gobiernos municipales y regionales.</p>
        </div>

        <div>
          <h3 class="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-brand-copper">Navegación</h3>
          <nav class="mt-5 flex flex-col gap-2.5" aria-label="Navegación del pie de página">
            <NuxtLink v-for="item in footerNavigation" :key="item.label" :to="item.to" class="w-fit text-[0.68rem] text-white/65 transition-colors hover:text-white">{{ item.label }}</NuxtLink>
          </nav>
        </div>

        <div>
          <h3 class="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-brand-copper">Recursos</h3>
          <nav class="mt-5 flex flex-col gap-2.5" aria-label="Recursos institucionales">
            <NuxtLink v-for="item in footerResources" :key="item.label" :to="item.to" class="w-fit text-[0.68rem] text-white/65 transition-colors hover:text-white">{{ item.label }}</NuxtLink>
          </nav>
        </div>

        <div>
          <h3 class="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-brand-copper">Contacto</h3>
          <div class="mt-5 space-y-3 text-[0.68rem] leading-5 text-white/65">
            <p v-if="footerContact.location">{{ footerContact.location }}</p>
            <a v-if="footerContact.phone" :href="`tel:${footerContact.phone}`" class="block hover:text-white">{{ footerContact.phone }}</a>
            <a v-if="footerContact.email" :href="`mailto:${footerContact.email}`" class="block break-all hover:text-white">{{ footerContact.email }}</a>
          </div>
        </div>
      </div>
    </AppContainer>

    <div class="border-t border-white/10">
      <AppContainer>
        <div class="flex flex-col gap-4 py-5 text-[0.62rem] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {{ currentYear }} Servicio Departamental de Autonomías de La Paz. Todos los derechos reservados.</p>
          <button type="button" class="inline-flex w-fit items-center gap-2 text-white/55 transition-colors hover:text-white" @click="scrollToTop">Volver arriba <span aria-hidden="true">↑</span></button>
        </div>
      </AppContainer>
    </div>
  </footer>
</template>
