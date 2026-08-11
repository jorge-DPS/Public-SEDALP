<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'

const route = useRoute()

const isMenuOpen = ref(false)

const navigation = [
  {
    label: 'Inicio',
    to: '/',
  },
  {
    label: 'Cursos',
    to: '/#servicios',
  },
  {
    label: 'Eventos',
    to: '/#servicios',
  },
  {
    label: 'Normativas',
    to: '/#servicios',
  },
  {
    label: 'SIMRED',
    to: '/simred',
  },
]

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

watch(isMenuOpen, (isOpen) => {
  if (!import.meta.client) {
    return
  }

  document.body.classList.toggle('menu-open', isOpen)
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }

  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="site-header">
    <div class="container header-container">

      <!-- Logo -->
      <NuxtLink
        to="/"
        class="brand"
        aria-label="Ir a la página de inicio de SEDALP"
      >
        <div class="brand-logo">
          <img
            src="/images/logo/sedalp-logo.png"
            alt="SEDALP"
          >
        </div>
      </NuxtLink>

      <!-- Navegación desktop -->
      <nav
        class="desktop-navigation"
        aria-label="Navegación principal"
      >
        <NuxtLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="navigation-link"
          :class="{
            'navigation-link--active':
              item.to === '/' && route.path === '/',
          }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- CTA -->
      <NuxtLink
        to="/#contacto"
        class="contact-button desktop-contact"
      >
        Contáctanos
      </NuxtLink>

      <!-- Botón móvil -->
      <button
        type="button"
        class="menu-button"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menú de navegación"
        @click="toggleMenu"
      >
        <span />
        <span />
        <span />
      </button>

    </div>

    <!-- Navegación mobile -->
    <Transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        class="mobile-navigation"
      >
        <nav
          class="container mobile-navigation-inner"
          aria-label="Navegación móvil"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.label"
            :to="item.to"
            class="mobile-navigation-link"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>

          <NuxtLink
            to="/#contacto"
            class="contact-button mobile-contact"
            @click="closeMenu"
          >
            Contáctanos
          </NuxtLink>
        </nav>
      </div>
    </Transition>

  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 100;

  width: 100%;

  background: var(--color-white);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.header-container {
  display: flex;
  align-items: center;

  min-height: var(--header-height);
}

/* =========================================================
   Logo
   ========================================================= */

.brand {
  display: flex;
  align-items: center;

  flex-shrink: 0;
}

.brand-logo {
  display: flex;
  align-items: center;
}

.brand-logo img {
  width: auto;
  height: 62px;

  object-fit: contain;
}

/* =========================================================
   Navegación
   ========================================================= */

.desktop-navigation {
  display: flex;
  align-items: stretch;
  align-self: stretch;

  gap: 34px;

  margin-left: auto;
}

.navigation-link {
  position: relative;

  display: flex;
  align-items: center;

  color: #4e4e4e;

  font-size: 14px;
  font-weight: 500;

  transition:
    color var(--transition-fast);
}

.navigation-link:hover {
  color: var(--color-primary);
}

.navigation-link::after {
  content: '';

  position: absolute;

  left: 50%;
  bottom: 0;

  width: 0;
  height: 3px;

  border-radius: 4px 4px 0 0;

  background: var(--color-primary);

  transform: translateX(-50%);

  transition:
    width var(--transition-base);
}

.navigation-link:hover::after,
.navigation-link--active::after {
  width: 28px;
}

.navigation-link--active {
  color: var(--color-primary);

  font-weight: 600;
}

/* =========================================================
   Contacto
   ========================================================= */

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 42px;

  padding: 0 24px;

  color: var(--color-white);
  background: var(--color-primary);

  border-radius: var(--radius-sm);

  font-size: 14px;
  font-weight: 600;

  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
}

.contact-button:hover {
  background: var(--color-primary-dark);

  transform: translateY(-1px);
}

.desktop-contact {
  margin-left: 34px;
}

/* =========================================================
   Mobile button
   ========================================================= */

.menu-button {
  display: none;

  width: 44px;
  height: 44px;

  margin-left: auto;

  cursor: pointer;

  background: transparent;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 5px;
}

.menu-button span {
  width: 24px;
  height: 2px;

  border-radius: 2px;

  background: var(--color-primary);
}

/* =========================================================
   Mobile navigation
   ========================================================= */

.mobile-navigation {
  position: absolute;

  top: 100%;
  left: 0;
  right: 0;

  background: var(--color-white);

  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

.mobile-navigation-inner {
  display: flex;
  flex-direction: column;

  padding-top: 12px;
  padding-bottom: 20px;
}

.mobile-navigation-link {
  display: flex;
  align-items: center;

  min-height: 48px;

  color: var(--color-text);

  border-bottom: 1px solid #f0f0f0;

  font-size: 15px;
  font-weight: 500;
}

.mobile-navigation-link:hover {
  color: var(--color-primary);
}

.mobile-contact {
  width: 100%;

  margin-top: 18px;
}

/* =========================================================
   Transition
   ========================================================= */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;

  transform: translateY(-6px);
}

/* =========================================================
   Responsive
   ========================================================= */

@media (max-width: 960px) {
  .desktop-navigation,
  .desktop-contact {
    display: none;
  }

  .menu-button {
    display: flex;
  }

  .brand-logo img {
    height: 54px;
  }
}

@media (max-width: 480px) {
  .header-container {
    min-height: 74px;
  }

  .brand-logo img {
    height: 48px;
  }
}
</style>