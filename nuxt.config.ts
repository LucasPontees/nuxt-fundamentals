// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    css: 'assets/css',
  },
  css: [
    '@/assets/css/style.css',
    '@/assets/css/feather.css',
    // '@/assets/css/style.css.map',
    '@/assets/css/vue-form-wizard.css'
  ],
})
