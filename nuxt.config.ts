// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/fonts", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },

  image: {
    quality: 85,
    format: ["webp"],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },

      titleTemplate: "%s | SEDALP",

      meta: [
        {
          name: "theme-color",
          content: "#067132",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  // Vue DevTools puede dejar dependencias optimizadas obsoletas en Vite.
  // Se habilita solamente cuando se solicita de forma explícita.
  devtools: {
    enabled: process.env.NUXT_DEVTOOLS === "true",
  },
});
