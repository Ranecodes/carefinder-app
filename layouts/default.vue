<template>
  <div>
    <Navbar @openSignUpModal="showModalSignUp = true" />
    <SignUpModal v-if="showModalSignUp" @close="showModalSignUp = false" />
    <slot />
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/navbar/Navbar.vue';
import SignUpModal from '../components/modals/signUpModal.vue';

const showModalSignUp = ref(false);


</script>
