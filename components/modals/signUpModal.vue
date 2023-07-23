<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Sign Up</h2>
      <form @submit.prevent="submitForm">
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
      <button class="close-button" @click="$emit('close')">Close</button>
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
</style>