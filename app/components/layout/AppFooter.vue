<script setup lang="ts">
import { footerContact, footerNavigation, footerResources } from "~/config/footer";

const currentYear = new Date().getFullYear();
const scrollToTop = () => import.meta.client && window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<template>
  <footer id="contacto" class="scroll-mt-24 border-t border-white/10 bg-[#111722] text-white">
    <AppContainer>
      <div class="grid gap-10 py-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-12 lg:py-16">
        <div>
          <NuxtLink to="/" class="block w-[160px]" aria-label="Ir al inicio de La Paz, Departamento Maravilloso">
            <BrandLogo variant="white" alt="La Paz - Departamento Maravilloso" />
          </NuxtLink>
          <h2 class="mt-5 max-w-sm text-sm font-semibold leading-relaxed text-white/90">
            Servicio Departamental de Autonomías de La Paz
          </h2>
          <p class="mt-2.5 max-w-sm text-xs leading-relaxed text-white/60">
            Promovemos la autonomía, la descentralización y el desarrollo integral de los gobiernos autónomos municipales e indígena originarios del departamento de La Paz.
          </p>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-brand-copper">
            Navegación
          </h3>
          <nav class="mt-5 flex flex-col gap-3" aria-label="Navegación del pie de página">
            <NuxtLink
              v-for="item in footerNavigation"
              :key="item.label"
              :to="item.to"
              class="w-fit text-xs text-white/70 transition-colors hover:text-white"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-brand-copper">
            Recursos
          </h3>
          <nav class="mt-5 flex flex-col gap-3" aria-label="Recursos institucionales">
            <NuxtLink
              v-for="item in footerResources"
              :key="item.label"
              :to="item.to"
              class="w-fit text-xs text-white/70 transition-colors hover:text-white"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-brand-copper">
            Contacto
          </h3>
          <div class="mt-5 space-y-3 text-xs leading-relaxed text-white/70">
            <p v-if="footerContact.location" class="flex items-center gap-2">
              <span class="text-brand-copper">📍</span>
              <span>{{ footerContact.location }}</span>
            </p>
            <a v-if="footerContact.phone" :href="`tel:${footerContact.phone}`" class="block hover:text-white">
              {{ footerContact.phone }}
            </a>
            <a v-if="footerContact.email" :href="`mailto:${footerContact.email}`" class="block break-all hover:text-white">
              {{ footerContact.email }}
            </a>
          </div>
        </div>
      </div>
    </AppContainer>

    <div class="border-t border-white/10 bg-[#0d121b]">
      <AppContainer>
        <div class="flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {{ currentYear }} Servicio Departamental de Autonomías de La Paz (SEDALP). Todos los derechos reservados.</p>
          <button
            type="button"
            class="inline-flex w-fit items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-white"
            @click="scrollToTop"
          >
            <span>Volver arriba</span>
            <span class="text-brand-copper" aria-hidden="true">↑</span>
          </button>
        </div>
      </AppContainer>
    </div>
  </footer>
</template>
