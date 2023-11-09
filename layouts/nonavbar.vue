<template>
  <div>
    <Navbar
      v-if="$route.path !== '/admin/login' && $route.path !== '/admin/signup'"
    />
    <slot />
  </div>
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
</script>
