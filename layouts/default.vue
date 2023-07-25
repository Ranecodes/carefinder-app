<template>
  <div>
    <Navbar @openSignUpModal="showModalSignUp = true" @openLoginModal="showModalLogin = true " />
    <SignUpModal v-if="showModalSignUp" @close="showModalSignUp = false" />
    <LoginModal v-if="showModalLogin" @close="showModalLogin = false" />
    <slot />
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/navbar/Navbar.vue';
import SignUpModal from '../components/modals/signUpModal.vue';
import LoginModal from '../components/modals/loginModal.vue';

const showModalSignUp = ref(false);
const showModalLogin = ref(false);


</script>
