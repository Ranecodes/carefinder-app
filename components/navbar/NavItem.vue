<template>
    <li>
      <NuxtLink :to="link" :isActive="isActive">
        <slot v-if="$slots.default" />
      </NuxtLink>
    </li>
  </template>
  
<script setup lang="ts">
 
  
  const { link, isActive = false } = defineProps(['link', 'isActive']);
</script>
  