<template>
  <li>
    <NuxtLink :to="link">
      <slot />
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    default: "/",
    required: true,
  },
});
</script>
