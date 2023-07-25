<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <form @submit.prevent="submitForm">
        <div class="form-top">
          <svg
            width="50"
            height="50"
            viewBox="0 0 65 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6165 37.5544L5.30688 54.8641"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
            />
            <path
              d="M28.2528 43.1909L10.9431 60.5006"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
            />
            <path
              d="M10.9433 60.5005C10.1958 61.2479 9.18209 61.6678 8.12507 61.6678C7.06804 61.6678 6.05431 61.2479 5.30688 60.5005"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.30673 54.8643C4.55931 55.6117 4.1394 56.6254 4.1394 57.6824C4.1394 58.7395 4.55931 59.7532 5.30673 60.5006"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M61.104 22.6382C61.104 24.9934 60.6401 27.3256 59.7388 29.5015C58.8375 31.6775 57.5164 33.6546 55.851 35.32C54.1856 36.9854 52.2085 38.3065 50.0325 39.2078C47.8566 40.1091 45.5244 40.573 43.1692 40.573C40.8139 40.573 38.4818 40.1091 36.3058 39.2078C34.1299 38.3065 32.1528 36.9854 30.4874 35.32C28.822 33.6546 27.5009 31.6775 26.5996 29.5015C25.6983 27.3256 25.2344 24.9934 25.2344 22.6382C25.2344 17.8816 27.1239 13.3198 30.4874 9.95635C33.8508 6.59292 38.4126 4.70337 43.1692 4.70337C45.5244 4.70337 47.8566 5.16727 50.0325 6.06857C52.2085 6.96988 54.1856 8.29095 55.851 9.95635C57.5164 11.6218 58.8375 13.5989 59.7388 15.7748C60.6401 17.9508 61.104 20.2829 61.104 22.6382Z"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.6165 37.5544L28.2528 43.1908"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.4346 40.3728L30.4873 35.3201"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.8054 42.3655L23.4418 48.0018"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M53.133 22.6382C53.133 25.2807 52.0832 27.8151 50.2146 29.6836C48.3461 31.5522 45.8117 32.602 43.1692 32.602"
              stroke="#111111"
              stroke-opacity="0.6"
              stroke-width="2.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g clip-path="url(#clip0_362_286)">
              <path
                d="M62.4676 54.9869H55.9957V61.4588H49.5239V54.9869H43.052V48.5151H49.5239V42.0432H55.9957V48.5151H62.4676"
                fill="#111111"
                fill-opacity="0.6"
              />
            </g>
            <defs>
              <clipPath id="clip0_362_286">
                <rect
                  width="19.4156"
                  height="19.4156"
                  fill="white"
                  transform="translate(43.052 42.0432)"
                />
              </clipPath>
            </defs>
          </svg>

          <button class="close-button" @click="$emit('close')">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6714 32.3307L22.502 22.5001L32.3326 32.3307M32.3326 12.6694L22.5001 22.5001L12.6714 12.6694" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
        </div>
        <div class="form-text text-center">
          <h1 class="text-[20px] font-bold">Create an account</h1>
          <p class="text-[14px] text-[#A5A5A5] pt-[10px]">Lets get started!</p>
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" required placeholder="Enter your name" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group relative">
          <label for="password">Password:</label>
          <div class="input">
            <svg
            class="absolute top-[50%] right-[10px] cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_364_243)">
                <path
                  d="M10.0002 3.33325C4.16683 3.33325 0.833496 9.99992 0.833496 9.99992C0.833496 9.99992 4.16683 16.6666 10.0002 16.6666C15.8335 16.6666 19.1668 9.99992 19.1668 9.99992C19.1668 9.99992 15.8335 3.33325 10.0002 3.33325Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_364_243">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
          </div>
        </div>
        
        <div class="form-group">
          <button class="signup-btn signup-btn-1 bg-[#1836B2] text-white" type="submit">Create account</button>
          <div class="google-signup flex items-center">
            <button class="signup-btn signup-btn-2 flex items-center justify-center text-[#363939] border-[#1836B2] border-solid border-[1px]">
              <svg
              class="mr-[10px]"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_362_301)">
                  <rect width="22" height="22" rx="5" fill="white" />
                  <path
                    d="M21.9885 11.2057C21.9885 10.3044 21.9137 9.64668 21.7517 8.9646H11.2192V13.0328H17.4015C17.2769 14.0437 16.6039 15.5663 15.1081 16.5894L15.0871 16.7256L18.4173 19.2466L18.648 19.2691C20.7669 17.3568 21.9885 14.5431 21.9885 11.2057Z"
                    fill="#001FC0"
                  />
                  <path
                    d="M11.2192 21.9245C14.248 21.9245 16.7907 20.95 18.648 19.2692L15.1081 16.5895C14.1608 17.2351 12.8894 17.6857 11.2192 17.6857C8.25267 17.6857 5.73487 15.7735 4.83735 13.1304L4.70579 13.1413L1.24304 15.76L1.19775 15.8831C3.04247 19.464 6.83167 21.9245 11.2192 21.9245Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.83737 13.1303C4.60055 12.4482 4.4635 11.7174 4.4635 10.9622C4.4635 10.207 4.60055 9.47621 4.82491 8.79413L4.81864 8.64886L1.31249 5.98804L1.19778 6.04136C0.43748 7.52737 0.0012207 9.19609 0.0012207 10.9622C0.0012207 12.7284 0.43748 14.397 1.19778 15.883L4.83737 13.1303Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M11.2192 4.23869C13.3256 4.23869 14.7466 5.12785 15.5568 5.87089L18.7227 2.85018C16.7783 1.08405 14.248 0 11.2192 0C6.83166 0 3.04247 2.46039 1.19775 6.04135L4.82489 8.79412C5.73487 6.15102 8.25267 4.23869 11.2192 4.23869Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_362_301">
                    <rect width="22" height="22" rx="5" fill="white" />
                  </clipPath>
                </defs>
              </svg> Sign up with Google
            </button>
          </div>
        </div>
        <div class="text-center">
          <p>
            Already have an account?
            <a class="text-[#001FC0] font-bold" href="#">Log in</a>
          </p>
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
  font-family: "Poppins", sans-serif;
  @apply fixed top-0 left-0 w-full h-full z-[999] bg-[rgba(71,71,71,0.5)] backdrop-blur-[5px] flex justify-center items-center;
}

.modal-content {
  @apply bg-white p-8 rounded-[3px] w-[470px] relative;
}

.form-top{
  @apply flex justify-between items-center mb-[10px];
}

.form-group{
  @apply pb-[10px] text-[15px];
}

.form-group input {
  @apply w-full px-[11px] py-[12px] border border-[1px] border-solid border-[#D2D3D3];
}

.signup-btn{
  @apply w-full  py-[14px] mb-4;
}

.signup-btn-1:active{
  @apply bg-[#6C6A6A] ;
}

.signup-btn-2:active{
  @apply border-[2px] border-solid border-[#6C6A6A] ;
}
</style>
