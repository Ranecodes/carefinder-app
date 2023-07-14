// https://nuxt.com/docs/api/configuration/nuxt-config

import { format } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxt/image',],
  css: ['~/assets/css/poppins.css' ],
  image: {
    format: ['webp'],
    dir: 'public'
  }
  })
