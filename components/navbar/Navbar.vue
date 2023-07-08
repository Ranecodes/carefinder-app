<template>
    <nav class="navbar flex items-center justify-between">
      <div class="logo">
        <NavItem link="/"><img src="~/assets/images/Logo.png" alt="logo" /></NavItem>
      </div>
      <ul class="nav-list flex space-x-4">
        <NavItem link="/about">About Us</NavItem>
        <NavItem link="/pricing">Pricing</NavItem>
        <NavItem link="/contact">Contact Us</NavItem>
        <NavItem link="/admin/login">Login</NavItem>
        <NavItem link="/admin/signup" class="btn-blue">Sign Up</NavItem>
      </ul>
    </nav>
</template>
  
<script setup>
  import NavItem from './NavItem.vue';
</script>
  
<style scoped>
.btn-blue {
  @apply bg-blue-500 text-white py-2 px-4 rounded-md;
}
</style>