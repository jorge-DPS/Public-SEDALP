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
              :class="[
                'group relative flex items-center px-4 text-[0.82rem] font-semibold tracking-wide transition-colors',
                isActive(item.to) ? 'text-brand-copper-dark' : 'text-brand-navy/80 hover:text-brand-navy'
              ]"
            >
              {{ item.label }}
              <span
                :class="[
                  'absolute inset-x-4 bottom-2.5 h-0.5 rounded-full origin-left bg-brand-copper transition-transform duration-200',
                  isActive(item.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                ]"
                aria-hidden="true"
              />
            </NuxtLink>
          </nav>

          <div class="ml-5 hidden lg:block">
            <BaseButton to="/#contacto" class="min-h-10 px-5 text-xs font-semibold uppercase tracking-wider">
              <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 5h18v14H3z"/><path d="m3 6 9 7 9-7"/></svg>
              <span>Contáctanos</span>
            </BaseButton>
          </div>

          <button
            type="button"
            class="relative flex size-11 items-center justify-center rounded-lg border border-brand-navy/15 text-brand-navy transition-colors hover:border-brand-copper hover:text-brand-copper lg:hidden"
            :aria-expanded="isMenuOpen"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
            @click="toggleMenu"
          >
            <span :class="['absolute h-0.5 w-5 bg-current transition-transform duration-200', isMenuOpen ? 'rotate-45' : '-translate-y-1.5']" />
            <span :class="['absolute h-0.5 w-5 bg-current transition-opacity duration-200', isMenuOpen ? 'opacity-0' : 'opacity-100']" />
            <span :class="['absolute h-0.5 w-5 bg-current transition-transform duration-200', isMenuOpen ? '-rotate-45' : 'translate-y-1.5']" />
          </button>
        </div>
      </AppContainer>
    </div>

    <!-- Menú móvil desplegable con fondo limpio y navegación cómoda -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="isMenuOpen" class="absolute inset-x-0 border-b border-brand-navy/10 bg-white shadow-card lg:hidden">
        <AppContainer>
          <nav class="py-5" aria-label="Navegación móvil">
            <NuxtLink
              v-for="item in mainNavigation"
              :key="item.label"
              :to="item.to"
              :class="[
                'flex min-h-12 items-center justify-between border-b border-brand-navy/8 px-2 text-sm font-semibold transition-colors',
                isActive(item.to) ? 'text-brand-copper-dark font-bold' : 'text-brand-navy hover:text-brand-copper'
              ]"
              @click="closeMenu"
            >
              <span>{{ item.label }}</span>
              <span class="text-brand-copper" aria-hidden="true">→</span>
            </NuxtLink>
            <div class="pt-4">
              <BaseButton to="/#contacto" class="w-full text-xs font-semibold uppercase tracking-wider" @click="closeMenu">
                Contáctanos
              </BaseButton>
            </div>
          </nav>
        </AppContainer>
      </div>
    </Transition>
  </header>
</template>
