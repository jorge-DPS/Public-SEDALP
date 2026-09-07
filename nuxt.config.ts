// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const imageDomains = (
  process.env.NUXT_IMAGE_DOMAINS ?? "127.0.0.1,localhost"
)
  .split(",")
  .map((domain) => domain.trim())
  .filter(Boolean);

export default defineNuxtConfig({
  modules: ["@nuxt/fonts", "@nuxt/image"],

  runtimeConfig: {
    public: {
      apiBase: "http://127.0.0.1:8000/api",
    },
  },


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
        name: "Poppins",
        provider: "google",
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },

  image: {
    domains: imageDomains,
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
          content: "#1D2532",
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
