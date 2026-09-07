<script setup lang="ts">
import { mainNavigation } from "~/config/navigation";

const route = useRoute();
const { isMenuOpen, isScrolled, closeMenu, toggleMenu } = useHeader();

const isActive = (to: string) => {
  if (to === "/") return route.path === "/";
  if (to.startsWith("/#")) return false;
  return route.path.startsWith(to);
};

watch(() => route.fullPath, closeMenu);
</script>

<template>
  <header class="sticky top-0 z-50 w-full">
    <div :class="['border-b border-brand-navy/10 bg-white/95 py-1 backdrop-blur-xl transition-shadow duration-300', isScrolled ? 'shadow-header' : '']">
      <AppContainer>
        <div :class="['flex items-center justify-between transition-[height] duration-300', isScrolled ? 'h-[64px]' : 'h-[74px]']">
          <NuxtLink to="/" class="w-[140px] shrink-0 sm:w-[154px]" aria-label="Ir al inicio de La Paz, Departamento Maravilloso">
            <BrandLogo variant="copper" alt="La Paz - Maravilla" eager />
          </NuxtLink>

          <nav class="ml-auto hidden h-full items-stretch lg:flex" aria-label="Navegación principal">
            <NuxtLink
              v-for="item in mainNavigation"
              :key="item.label"
              :to="item.to"
              :class="['group relative flex items-center px-4 text-[0.78rem] font-semibold tracking-[0.01em] transition-colors', isActive(item.to) ? 'text-brand-copper-dark' : 'text-brand-navy/72 hover:text-brand-navy']"
            >
              {{ item.label }}
              <span :class="['absolute inset-x-4 bottom-3 h-px origin-left bg-brand-copper transition-transform duration-200', isActive(item.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100']" aria-hidden="true" />
            </NuxtLink>
          </nav>

          <div class="ml-5 hidden lg:block">
            <BaseButton to="/#contacto" class="min-h-10 px-5 text-xs">
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 5h18v14H3z"/><path d="m3 6 9 7 9-7"/></svg>
              Contáctanos
            </BaseButton>
          </div>

          <button
            type="button"
            class="relative flex size-11 items-center justify-center border border-brand-navy/15 text-brand-navy transition-colors hover:border-brand-copper lg:hidden"
            :aria-expanded="isMenuOpen"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
            @click="toggleMenu"
          >
            <span :class="['absolute h-px w-5 bg-current transition-transform', isMenuOpen ? 'rotate-45' : '-translate-y-1.5']" />
            <span :class="['absolute h-px w-5 bg-current transition-opacity', isMenuOpen ? 'opacity-0' : 'opacity-100']" />
            <span :class="['absolute h-px w-5 bg-current transition-transform', isMenuOpen ? '-rotate-45' : 'translate-y-1.5']" />
          </button>
        </div>
      </AppContainer>
    </div>

    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="-translate-y-2 opacity-0" leave-active-class="transition duration-150 ease-in" leave-to-class="-translate-y-2 opacity-0">
      <div v-if="isMenuOpen" class="absolute inset-x-0 border-b border-brand-navy/10 bg-white shadow-card lg:hidden">
        <AppContainer>
          <nav class="py-4" aria-label="Navegación móvil">
            <NuxtLink
              v-for="item in mainNavigation"
              :key="item.label"
              :to="item.to"
              :class="['flex min-h-12 items-center justify-between border-b border-brand-navy/8 px-1 text-sm font-semibold', isActive(item.to) ? 'text-brand-copper-dark' : 'text-brand-navy']"
              @click="closeMenu"
            >
              {{ item.label }} <span class="text-brand-copper" aria-hidden="true">→</span>
            </NuxtLink>
            <BaseButton to="/#contacto" class="mt-5 w-full">Contáctanos</BaseButton>
          </nav>
        </AppContainer>
      </div>
    </Transition>
  </header>
</template>
