<template>
    <nav class="navbar flex items-center justify-between pt-10">
      <div class="logo pl-11 list-none">
        <NavItem link="/"><img src="~/assets/images/Logo.png" alt="logo" /></NavItem>
      </div>
      <ul class="nav-list  flex items-center space-x-4 text-base text-[#767676]">
        <div class="mid-nav flex space-x-16 pr-64 font-semibold ">
          <NavItem class="blue-text text-[#001FC0]" link="/about">About Us</NavItem>
          <NavItem link="/pricing">Pricing</NavItem>
          <NavItem link="/contact">Contact Us</NavItem>
        </div>
        <div class="end-nav flex items-center space-x-7 pr-24 font-bold">
          <NavItem link="/admin/login">Login</NavItem>
          <NavItem link="/admin/signup" class="btn-blue cursor-pointer">Sign Up</NavItem>
        </div>
      </ul>
    </nav>
</template>
  
<script setup>
  import NavItem from './NavItem.vue';
</script>
  
<style scoped>
.btn-blue {
  @apply bg-[#001FC0] text-white py-4 px-9;
}

.navbar {
  font-family: 'Poppins', sans-serif;
}
</style>