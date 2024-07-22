// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "~/assets/css/style.css",
    "~/assets/css/feather.css",
    "~/assets/css/vue-form-wizard.css",
  ],
  pages: false, // Certifique-se de que isso está de acordo com sua necessidade
  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        tag === "side-settings" || tag === "navbar" || tag === "sidebar-items",
    },
  },
  app: {
    baseURL: process.env.BASE_URL, // Defina uma URL padrão se necessário
    head: {
      title: "Vite App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Descrição do meu projeto Nuxt",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
