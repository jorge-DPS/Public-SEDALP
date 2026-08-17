<script setup lang="ts">
import {
  footerContact,
  footerNavigation,
  footerResources,
  socialLinks,
} from "~/config/footer";

const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  if (!import.meta.client) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <footer
    id="contacto"
    class="relative scroll-mt-24 bg-sedalp-green-darker text-white"
  >
    <!-- ==================================================
         FRANJA INSTITUCIONAL
    =================================================== -->

    <div class="grid h-1 grid-cols-3" aria-hidden="true">
      <div class="bg-sedalp-red" />

      <div class="bg-sedalp-yellow" />

      <div class="bg-sedalp-green-light" />
    </div>

    <!-- ==================================================
         CONTENIDO PRINCIPAL
    =================================================== -->

    <AppContainer>
      <div
        class="grid grid-cols-1 gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1fr] lg:gap-12 lg:py-20"
      >
        <!-- ==================================================
             IDENTIDAD
        =================================================== -->

        <div>
          <!-- Logo -->

          <NuxtLink
            to="/"
            class="inline-flex rounded-xl bg-white p-3 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            aria-label="Ir al inicio de SEDALP"
          >
            <img
              src="/images/logo/sedalp-logo.png"
              alt="SEDALP"
              class="h-14 w-auto sm:h-16"
            />
          </NuxtLink>

          <!-- Institución -->

          <h2 class="mt-6 max-w-sm text-lg font-bold leading-7 text-white">
            Servicio Departamental de Autonomías de La Paz
          </h2>

          <p class="mt-3 max-w-md text-sm leading-7 text-white/65">
            Fortalecemos la gestión autonómica y acompañamos a los gobiernos
            autónomos del departamento de La Paz.
          </p>

          <p
            class="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/45"
          >
            Gobierno Autónomo Departamental de La Paz
          </p>

          <!-- Redes -->

          <div v-if="socialLinks.length" class="mt-7 flex flex-wrap gap-2">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex size-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-white/75 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white hover:text-sedalp-green"
              :aria-label="social.label"
            >
              <!-- Facebook -->

              <svg
                v-if="social.icon === 'facebook'"
                viewBox="0 0 24 24"
                class="size-[18px]"
                aria-hidden="true"
              >
                <path
                  d="M14 8h3V4.5c-.5-.1-2-.2-3.8-.2-3.7 0-6.2 2.2-6.2 6.4V14H3v4h4v10h5V18h4l.6-4H12v-2.9C12 9.9 12.4 8 14 8Z"
                  fill="currentColor"
                  transform="scale(.8) translate(3 0)"
                />
              </svg>

              <!-- YouTube -->

              <svg
                v-else-if="social.icon === 'youtube'"
                viewBox="0 0 24 24"
                class="size-5"
                aria-hidden="true"
              >
                <path
                  d="M21.2 7.1a2.6 2.6 0 0 0-1.8-1.9C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.4.4a2.6 2.6 0 0 0-1.8 1.9A27 27 0 0 0 2.4 12a27 27 0 0 0 .4 4.9 2.6 2.6 0 0 0 1.8 1.9c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4a2.6 2.6 0 0 0 1.8-1.9 27 27 0 0 0 .4-4.9 27 27 0 0 0-.4-4.9Z"
                  fill="currentColor"
                />

                <path
                  d="m10 15.4 5-3.4-5-3.4v6.8Z"
                  fill="currentColor"
                  class="text-sedalp-green-darker group-hover:text-white"
                />
              </svg>

              <!-- TikTok -->

              <svg
                v-else
                viewBox="0 0 24 24"
                class="size-[18px]"
                aria-hidden="true"
              >
                <path
                  d="M15 4c.4 2.3 1.7 3.7 4 4v3a8 8 0 0 1-4-1.2V16a6 6 0 1 1-5-5.9v3.2A3 3 0 1 0 12 16V4h3Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- ==================================================
             NAVEGACIÓN
        =================================================== -->

        <div>
          <h3 class="text-sm font-bold uppercase tracking-[0.12em] text-white">
            Navegación
          </h3>

          <div class="mt-5 h-[2px] w-8 bg-sedalp-yellow" aria-hidden="true" />

          <nav
            class="mt-6 flex flex-col gap-3"
            aria-label="Navegación del pie de página"
          >
            <NuxtLink
              v-for="item in footerNavigation"
              :key="item.label"
              :to="item.to"
              class="group inline-flex w-fit items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-white"
            >
              <span
                class="h-px w-0 bg-sedalp-yellow transition-all duration-200 group-hover:w-3"
                aria-hidden="true"
              />

              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- ==================================================
             RECURSOS
        =================================================== -->

        <div>
          <h3 class="text-sm font-bold uppercase tracking-[0.12em] text-white">
            Recursos
          </h3>

          <div class="mt-5 h-[2px] w-8 bg-sedalp-yellow" aria-hidden="true" />

          <nav
            class="mt-6 flex flex-col gap-3"
            aria-label="Recursos institucionales"
          >
            <NuxtLink
              v-for="item in footerResources"
              :key="item.label"
              :to="item.to"
              class="group inline-flex w-fit items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-white"
            >
              <span
                class="h-px w-0 bg-sedalp-yellow transition-all duration-200 group-hover:w-3"
                aria-hidden="true"
              />

              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- ==================================================
             CONTACTO
        =================================================== -->

        <div>
          <h3 class="text-sm font-bold uppercase tracking-[0.12em] text-white">
            Contacto
          </h3>

          <div class="mt-5 h-[2px] w-8 bg-sedalp-yellow" aria-hidden="true" />

          <div class="mt-6 space-y-5">
            <!-- Ubicación -->

            <div v-if="footerContact.location" class="flex gap-3">
              <div
                class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-sedalp-yellow"
              >
                <svg viewBox="0 0 24 24" class="size-[18px]" aria-hidden="true">
                  <path
                    d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />

                  <circle
                    cx="12"
                    cy="10"
                    r="2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                </svg>
              </div>

              <div>
                <p class="text-xs font-semibold text-white/40">Ubicación</p>

                <p class="mt-1 text-sm leading-6 text-white/70">
                  {{ footerContact.location }}
                </p>
              </div>
            </div>

            <!-- Teléfono -->

            <a
              v-if="footerContact.phone"
              :href="`tel:${footerContact.phone}`"
              class="flex gap-3 text-white/70 transition-colors hover:text-white"
            >
              <div
                class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-sedalp-yellow"
              >
                <svg viewBox="0 0 24 24" class="size-[18px]" aria-hidden="true">
                  <path
                    d="M7 4H4.5A1.5 1.5 0 0 0 3 5.5C3 14 10 21 18.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.5 2c-3.8-1.5-6-3.7-7.5-7.5L9 9 8 5Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p class="text-xs font-semibold text-white/40">Teléfono</p>

                <p class="mt-1 text-sm">
                  {{ footerContact.phone }}
                </p>
              </div>
            </a>

            <!-- Correo -->

            <a
              v-if="footerContact.email"
              :href="`mailto:${footerContact.email}`"
              class="flex gap-3 text-white/70 transition-colors hover:text-white"
            >
              <div
                class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-sedalp-yellow"
              >
                <svg viewBox="0 0 24 24" class="size-[18px]" aria-hidden="true">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />

                  <path
                    d="m4 7 8 6 8-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p class="text-xs font-semibold text-white/40">
                  Correo electrónico
                </p>

                <p class="mt-1 break-all text-sm">
                  {{ footerContact.email }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </AppContainer>

    <!-- ==================================================
         FOOTER INFERIOR
    =================================================== -->

    <div class="border-t border-white/10">
      <AppContainer>
        <div
          class="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-xs leading-5 text-white/50">
              © {{ currentYear }}
              Servicio Departamental de Autonomías de La Paz.
            </p>

            <p class="mt-1 text-[0.68rem] text-white/35">
              Todos los derechos reservados.
            </p>
          </div>

          <!-- Volver arriba -->

          <button
            type="button"
            class="group inline-flex w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white/65 transition-all duration-200 hover:border-white/20 hover:bg-white hover:text-sedalp-green"
            @click="scrollToTop"
          >
            Volver arriba

            <svg
              viewBox="0 0 24 24"
              class="size-4 transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <path
                d="m6 14 6-6 6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </AppContainer>
    </div>
  </footer>
</template>
