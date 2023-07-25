<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>Sign Up</h2>
        <form @submit.prevent="submitForm">
          <div class="form-top">
            <svg width="45" height="45" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.6165 37.5544L5.30688 54.8641" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375"/>
  <path d="M28.2528 43.1909L10.9431 60.5006" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375"/>
  <path d="M10.9433 60.5005C10.1958 61.2479 9.18209 61.6678 8.12507 61.6678C7.06804 61.6678 6.05431 61.2479 5.30688 60.5005" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.30673 54.8643C4.55931 55.6117 4.1394 56.6254 4.1394 57.6824C4.1394 58.7395 4.55931 59.7532 5.30673 60.5006" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M61.104 22.6382C61.104 24.9934 60.6401 27.3256 59.7388 29.5015C58.8375 31.6775 57.5164 33.6546 55.851 35.32C54.1856 36.9854 52.2085 38.3065 50.0325 39.2078C47.8566 40.1091 45.5244 40.573 43.1692 40.573C40.8139 40.573 38.4818 40.1091 36.3058 39.2078C34.1299 38.3065 32.1528 36.9854 30.4874 35.32C28.822 33.6546 27.5009 31.6775 26.5996 29.5015C25.6983 27.3256 25.2344 24.9934 25.2344 22.6382C25.2344 17.8816 27.1239 13.3198 30.4874 9.95635C33.8508 6.59292 38.4126 4.70337 43.1692 4.70337C45.5244 4.70337 47.8566 5.16727 50.0325 6.06857C52.2085 6.96988 54.1856 8.29095 55.851 9.95635C57.5164 11.6218 58.8375 13.5989 59.7388 15.7748C60.6401 17.9508 61.104 20.2829 61.104 22.6382Z" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.6165 37.5544L28.2528 43.1908" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.4346 40.3728L30.4873 35.3201" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.8054 42.3655L23.4418 48.0018" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M53.133 22.6382C53.133 25.2807 52.0832 27.8151 50.2146 29.6836C48.3461 31.5522 45.8117 32.602 43.1692 32.602" stroke="#111111" stroke-opacity="0.6" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round"/>
  <g clip-path="url(#clip0_362_286)">
  <path d="M62.4676 54.9869H55.9957V61.4588H49.5239V54.9869H43.052V48.5151H49.5239V42.0432H55.9957V48.5151H62.4676" fill="#111111" fill-opacity="0.6"/>
  </g>
  <defs>
  <clipPath id="clip0_362_286">
  <rect width="19.4156" height="19.4156" fill="white" transform="translate(43.052 42.0432)"/>
  </clipPath>
  </defs>
  </svg>
  
              <button class="close-button" @click="$emit('close')"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button> 
          </div>
          <div class="form-text">
            <h1>Create an account</h1>
            <p>Lets get started!</p>
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