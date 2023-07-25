<template>
    <nav class="navbar flex items-center justify-between pt-10">
      <div class="logo pl-11 list-none">
        <NavItem link="/"><img src="~/assets/images/Logo.png" alt="logo" /></NavItem>
      </div>
      <ul class="nav-list  flex items-center space-x-4 text-base text-[#767676] ">
        <div class="mid-nav flex space-x-16 pr-64 font-semibold ">
          <NavItem class="nav blue-text text-[#001FC0] " link="/#features">Features</NavItem>
          <NavItem class="nav " link="/#testimonials">Testimonials</NavItem>
          <NavItem class="nav " link="/#contact">Contact Us</NavItem>
        </div>
        <div class="end-nav flex items-center space-x-7 pr-24 font-bold">
          <NavItem class="hover:text-[#001FC0] cursor-pointer" @click="$emit('openLoginModal')" >Login</NavItem>
          <NavItem class="btn-blue cursor-pointer " @click="$emit('openSignUpModal')" >Sign Up</NavItem>
        </div>

      </ul>
    </nav>
</template>
  
<script setup>
import NavItem from './NavItem.vue';


</script>
  
<style scoped>
.btn-blue {
  @apply bg-[#001FC0] text-white py-4 px-9 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white;
}

.nav{
  @apply relative
}
.nav::after{
  @apply content-[''] bg-[#001FC0] h-[3px] w-[0%] left-0 -bottom-[5px] rounded-xl absolute duration-300 

}
.nav:hover::after{
  @apply w-[100%]
}
.navbar {
  font-family: 'Poppins', sans-serif;
}
</style>