<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Sign Up</h2>
      <form @submit.prevent="submitForm">
        <div class="form-top">
            <nuxt-img src="logoicon.png" alt="logo"/>
            <button class="close-button" @click="$emit('close')"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button> 
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

function submitForm() {
  console.log({
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999; /* Make sure it's above other content on the page */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background to create overlay effect */
  backdrop-filter: blur(5px); /* Apply the blur effect to the background */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content{
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    width: 500px;
    position: relative;
}

.form-group input{
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #D2D3D3;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
}
</style>