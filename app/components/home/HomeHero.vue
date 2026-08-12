<script setup lang="ts">
import { heroContent } from '~/config/home'
</script>

<template>
  <section
    class="
      hero-viewport
      group
      relative
      isolate
      flex
      w-full
      overflow-hidden
      bg-sedalp-green-darker
    "
    aria-labelledby="hero-title"
  >
    <!-- ==================================================
         IMAGEN PRINCIPAL
    =================================================== -->

<NuxtImg
  :src="heroContent.image"
  :alt="heroContent.imageAlt"
  width="1920"
  height="1080"
  sizes="100vw lg:1180px"
  quality="88"
  format="webp"
  fit="cover"
  :preload="{ fetchPriority: 'high' }"
  class="
    absolute
    inset-0
    -z-30
    h-full
    w-full
    object-cover
    object-[68%_center]
    transition-transform
    duration-[1400ms]
    ease-out
    motion-safe:group-hover:scale-[1.012]
    sm:object-[65%_center]
    lg:object-center
  "
/>

    

    <!-- ==================================================
         OSCURECIMIENTO GENERAL MUY LEVE
    =================================================== -->

    <div
      class="
        absolute
        inset-0
        -z-20
        bg-black/5
      "
      aria-hidden="true"
    />

    <!-- ==================================================
         GRADIENTE IZQUIERDO
    =================================================== -->

    <div
      class="
        absolute
        inset-0
        -z-10

        bg-gradient-to-r

        from-sedalp-green-darker/95
        via-sedalp-green-dark/85
        to-sedalp-green-dark/20

        sm:from-sedalp-green-darker/95
        sm:via-sedalp-green-dark/78
        sm:to-transparent

        lg:from-sedalp-green-darker/95
        lg:via-sedalp-green-dark/68
        lg:to-transparent
      "
      aria-hidden="true"
    />

    <!-- ==================================================
         GRADIENTE INFERIOR
    =================================================== -->

    <div
      class="
        absolute
        inset-x-0
        bottom-0
        -z-10

        h-[35%]

        bg-gradient-to-t
        from-black/40
        via-black/10
        to-transparent
      "
      aria-hidden="true"
    />

    <!-- ==================================================
         SUAVIZADO SUPERIOR
    =================================================== -->

    <div
      class="
        absolute
        inset-x-0
        top-0
        -z-10

        h-32

        bg-gradient-to-b
        from-black/10
        to-transparent
      "
      aria-hidden="true"
    />

    <!-- ==================================================
         CONTENIDO
    =================================================== -->

    <div
      class="
        relative
        flex
        w-full
        items-center
      "
    >
      <AppContainer>
        <div
          class="
            max-w-[680px]

            py-16

            sm:py-20

            lg:max-w-[650px]
            lg:py-24

            xl:max-w-[700px]
          "
        >
          <!-- ==========================================
               DETALLE INSTITUCIONAL
          =========================================== -->

          <div
            class="
              mb-6
              flex
              items-center
              gap-2
            "
            aria-hidden="true"
          >
            <span
              class="
                h-[3px]
                w-9
                rounded-full
                bg-sedalp-red
              "
            />

            <span
              class="
                h-[3px]
                w-9
                rounded-full
                bg-sedalp-yellow
              "
            />

            <span
              class="
                h-[3px]
                w-9
                rounded-full
                bg-white
              "
            />
          </div>

          <!-- ==========================================
               PRETÍTULO
          =========================================== -->

          <p
            class="
              mb-5

              max-w-[520px]

              text-[0.7rem]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/80

              sm:text-xs
            "
          >
            {{ heroContent.eyebrow }}
          </p>

          <!-- ==========================================
               TÍTULO
          =========================================== -->

          <h1
            id="hero-title"
            class="
              text-balance

              text-[2.45rem]
              font-extrabold
              leading-[1.04]
              tracking-[-0.04em]
              text-white

              sm:text-[3.25rem]

              md:text-[3.75rem]

              lg:text-[4rem]

              xl:text-[4.35rem]
            "
          >
            {{ heroContent.title }}

            <span
              class="
                block
                text-[#59d98d]
              "
            >
              {{ heroContent.highlightedText }}
            </span>
          </h1>

          <!-- ==========================================
               DESCRIPCIÓN
          =========================================== -->

          <p
            class="
              mt-7

              max-w-[590px]

              text-[0.9rem]
              font-normal
              leading-7
              text-white/85

              sm:text-base
              sm:leading-7
            "
          >
            {{ heroContent.description }}
          </p>

          <!-- ==========================================
               CTA
          =========================================== -->

          <div
            class="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <NuxtLink
              :to="heroContent.buttonTo"
              class="
                group/button

                inline-flex
                min-h-12

                items-center
                justify-center
                gap-3

                rounded-button

                bg-white

                px-6

                text-sm
                font-bold
                text-sedalp-green

                shadow-soft

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-sedalp-yellow
                hover:text-sedalp-green-darker
                hover:shadow-card

                active:translate-y-0

                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white

                motion-reduce:transform-none
              "
            >
              {{ heroContent.buttonLabel }}

              <svg
                viewBox="0 0 24 24"
                class="
                  size-[18px]

                  transition-transform
                  duration-300

                  group-hover/button:translate-x-1
                "
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
            </NuxtLink>
          </div>
        </div>
      </AppContainer>
    </div>

    <!-- ==================================================
         INDICADOR DE CONTINUIDAD
    =================================================== -->

    <NuxtLink
      to="#institucional"
      class="
        absolute
        bottom-7
        left-1/2

        hidden
        -translate-x-1/2

        items-center
        justify-center

        text-white/70

        transition-colors
        duration-300

        hover:text-white

        md:flex
      "
      aria-label="Continuar a la siguiente sección"
    >
      <svg
        viewBox="0 0 24 24"
        class="
          size-7
          motion-safe:animate-bounce
        "
        aria-hidden="true"
      >
        <path
          d="m6 9 6 6 6-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </NuxtLink>

    <!-- ==================================================
         DETALLE INFERIOR
    =================================================== -->

    <div
      class="
        pointer-events-none
        absolute
        bottom-8
        right-8

        hidden

        items-center
        gap-3

        text-white/60

        xl:flex
      "
      aria-hidden="true"
    >
      <span
        class="
          h-px
          w-12
          bg-white/40
        "
      />

      <span
        class="
          text-[0.65rem]
          font-semibold
          uppercase
          tracking-[0.18em]
        "
      >
        La Paz · Bolivia
      </span>
    </div>
  </section>
</template>