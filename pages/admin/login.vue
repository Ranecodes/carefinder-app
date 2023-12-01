<template>
  <div class="signup-container">
    <div>
      <div class="logo-wrapper ml-[35px] mt-[35px]">
        <a href="/"><nuxt-img src="Logo.png" alt="logo" class="logo" /></a>
      </div>
      <form class="signup-content" @submit.prevent="signIn">
        <div class="form-top">
          <!-- <button class="close-button">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6714 32.3307L22.502 22.5001L32.3326 32.3307M32.3326 12.6694L22.5001 22.5001L12.6714 12.6694"
                  stroke="#111111"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> -->
        </div>
        <div class="form-text text-center">
          <h1 class="text-[32px] font-bold">Welcome back!</h1>
          <p class="text-[18px] text-[#A5A5A5] pt-[10px]">
            Please enter your details
          </p>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group relative">
          <label for="password">Password:</label>
          <div class="input">
            <svg
              class="absolute top-[60px] right-[20px] cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="togglePasswordVisibility"
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
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <div v-if="errorMsg" class="error-message text-red-600">
            {{ errorMsg }}
          </div>
          <button
            class="signup-btn signup-btn-1 bg-[#1836B2] text-white"
            type="submit"
          >
            Log in
          </button>
          <div class="google-signup flex items-center">
            <button
              class="signup-btn signup-btn-2 flex items-center justify-center text-[#363939] border-[#1836B2] border-solid border-[1px]"
            >
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
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>
        <div class="text-center">
          <p>
            Don't have an account yet?
            <a class="text-[#001FC0] font-bold" href="/admin/signup">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
    <div class="image-container">
      <nuxt-img src="signup.png" alt="surgeons operating" class="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const supabase = useSupabaseClient(); // eslint-disable-line
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMsg = ref("");

const showPassword = ref(false);

async function signIn() {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/admin/dashboard");
  } catch (error) {
    errorMsg.value = "Incorrect email or password";
  }
}

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>

<style>
.logo {
  @apply w-[150px];
}

.signup-container {
  font-family: "Poppins", sans-serif;
  @apply flex justify-between;
}

.signup-content {
  @apply bg-white px-24 rounded-[3px] w-[690px] relative;
}

.form-top {
  @apply flex justify-between items-center mb-[10px];
}

.form-text {
  @apply pt-[30px];
}

.form-group {
  @apply pt-[25px] text-[15px];
}

.form-group label {
  @apply font-bold text-[#57595A];
}

.form-group input {
  @apply w-full px-[11px] py-[12px] border border-[1px] border-solid border-[#D2D3D3];
}

.signup-btn {
  @apply w-full  py-[14px] mb-4;
}

.signup-btn-1:active {
  @apply bg-[#6C6A6A];
}

.signup-btn-2:active {
  @apply border-[2px] border-solid border-[#6C6A6A];
}

.image {
  @apply w-[683px];
}
</style>
