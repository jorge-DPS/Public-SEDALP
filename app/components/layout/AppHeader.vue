<script setup lang="ts">
import { mainNavigation } from '~/config/navigation'

const route = useRoute()

const {
  isMenuOpen,
  isScrolled,
  closeMenu,
  toggleMenu,
} = useHeader()

const isActive = (to: string) => {
  if (to === '/') {
    return route.path === '/'
  }

  if (to.startsWith('/#')) {
    return false
  }

  return route.path.startsWith(to)
}

watch(
  () => route.fullPath,
  () => closeMenu(),
)
</script>

<template>
  <header
    class="
      sticky
      top-0
      z-50
      w-full
    "
  >
    <!-- Línea institucional -->

    <div
      class="
        grid
        h-1
        grid-cols-3
      "
      aria-hidden="true"
    >
      <div class="bg-sedalp-red" />
      <div class="bg-sedalp-yellow" />
      <div class="bg-sedalp-green" />
    </div>

    <!-- Header principal -->

    <div
      :class="[
        'border-b',
        'border-black/5',
        'transition-all',
        'duration-300',

        isScrolled
          ? 'bg-white/90 shadow-header backdrop-blur-xl'
          : 'bg-white',
      ]"
    >
      <AppContainer>
        <div
          :class="[
            'flex',
            'items-center',
            'justify-between',
            'transition-all',
            'duration-300',

            isScrolled
              ? 'h-[72px]'
              : 'h-[88px]',
          ]"
        >
          <!-- Logo -->

          <NuxtLink
            to="/"
            class="
              shrink-0
              rounded-md
              transition-opacity
              hover:opacity-90
            "
            aria-label="Ir al inicio de SEDALP"
          >
            <img
              src="~/assets/images/brand/sedalp-logo.png"
              alt="SEDALP"
              :class="[
                'w-auto',
                'transition-all',
                'duration-300',

                isScrolled
                  ? 'h-12'
                  : 'h-14',
              ]"
            >
          </NuxtLink>

          <!-- Navegación desktop -->

          <nav
            class="
              ml-auto
              hidden
              h-full
              items-stretch
              lg:flex
            "
            aria-label="Navegación principal"
          >
            <NuxtLink
              v-for="item in mainNavigation"
              :key="item.label"
              :to="item.to"
              :class="[
                'group',
                'relative',
                'flex',
                'items-center',
                'px-4',
                'text-sm',
                'font-semibold',
                'transition-colors',
                'duration-200',

                isActive(item.to)
                  ? 'text-sedalp-green'
                  : 'text-body hover:text-sedalp-green',
              ]"
            >
              {{ item.label }}

              <span
                :class="[
                  'absolute',
                  'bottom-4',
                  'left-4',
                  'right-4',
                  'h-0.5',
                  'origin-center',
                  'rounded-full',
                  'bg-sedalp-green',
                  'transition-transform',
                  'duration-200',

                  isActive(item.to)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100',
                ]"
              />
            </NuxtLink>
          </nav>

          <!-- CTA Desktop -->

          <div class="ml-5 hidden lg:block">
            <BaseButton to="/#contacto">
              Contáctanos

              <svg
                viewBox="0 0 24 24"
                class="size-4"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </BaseButton>
          </div>

          <!-- Mobile toggle -->

          <button
            type="button"
            class="
              relative
              flex
              size-11
              items-center
              justify-center
              rounded-xl
              border
              border-border-soft
              bg-surface-soft
              transition-colors
              hover:bg-surface-green
              lg:hidden
            "
            :aria-expanded="isMenuOpen"
            :aria-label="
              isMenuOpen
                ? 'Cerrar menú'
                : 'Abrir menú'
            "
            @click="toggleMenu"
          >
            <span
              :class="[
                'absolute',
                'h-0.5',
                'w-5',
                'rounded-full',
                'bg-sedalp-green',
                'transition-transform',
                'duration-300',

                isMenuOpen
                  ? 'rotate-45'
                  : '-translate-y-1.5',
              ]"
            />

            <span
              :class="[
                'absolute',
                'h-0.5',
                'w-5',
                'rounded-full',
                'bg-sedalp-green',
                'transition-opacity',
                'duration-200',

                isMenuOpen
                  ? 'opacity-0'
                  : 'opacity-100',
              ]"
            />

            <span
              :class="[
                'absolute',
                'h-0.5',
                'w-5',
                'rounded-full',
                'bg-sedalp-green',
                'transition-transform',
                'duration-300',

                isMenuOpen
                  ? '-rotate-45'
                  : 'translate-y-1.5',
              ]"
            />
          </button>
        </div>
      </AppContainer>
    </div>

    <!-- Menú móvil -->

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="
          absolute
          left-0
          right-0
          border-t
          border-border-soft
          bg-white/95
          shadow-card
          backdrop-blur-xl
          lg:hidden
        "
      >
        <AppContainer>
          <nav
            class="py-4"
            aria-label="Navegación móvil"
          >
            <NuxtLink
              v-for="item in mainNavigation"
              :key="item.label"
              :to="item.to"
              :class="[
                'flex',
                'min-h-12',
                'items-center',
                'justify-between',
                'rounded-lg',
                'px-4',
                'text-sm',
                'font-semibold',
                'transition-colors',

                isActive(item.to)
                  ? 'bg-surface-green text-sedalp-green'
                  : 'text-body hover:bg-surface-soft hover:text-sedalp-green',
              ]"
              @click="closeMenu"
            >
              {{ item.label }}

              <span
                class="
                  text-lg
                  text-sedalp-green
                "
              >
                →
              </span>
            </NuxtLink>

            <div class="mt-4">
              <BaseButton
                to="/#contacto"
                class="w-full"
              >
                Contáctanos
              </BaseButton>
            </div>
          </nav>
        </AppContainer>
      </div>
    </Transition>
  </header>
</template>