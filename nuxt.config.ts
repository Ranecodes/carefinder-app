// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/supabase",
  ],
  css: ["~/assets/css/poppins.css"],
  image: {
    format: ["webp"],
  },
  eslint: {
    lintOnStart: false,
  },
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: false,
  },
});
