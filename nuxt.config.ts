// https://nuxt.com/docs/api/configuration/nuxt-config
import { format } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/supabase"],
  css: ["~/assets/css/poppins.css"],
  image: {
    format: ["webp"],
  },
});
