// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/fonts"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  css: ["~/assets/css/tokens.css", "~/assets/css/main.css"],

  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },

    app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "",
    },
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
