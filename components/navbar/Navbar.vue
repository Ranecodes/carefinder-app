<template>
  <nav class="navbar flex items-center justify-between pt-10">
    <div class="logo pl-11 list-none">
      <NavItem link="/"
        ><img src="~/assets/images/Logo.png" alt="logo"
      /></NavItem>
    </div>
    <ul class="nav-list flex items-center space-x-4 text-base text-[#767676]">
      <div class="mid-nav flex space-x-16 pr-64 font-semibold">
        <NavItem class="nav blue-text text-[#001FC0]" link="/#features"
          >Features</NavItem
        >
        <NavItem class="nav" link="/#testimonials">Testimonials</NavItem>
        <NavItem class="nav" link="/#contact">Contact Us</NavItem>
      </div>
      <div class="end-nav flex items-center space-x-7 pr-24 font-bold">
        <div class="admin-profile" v-if="isLoggedIn">
          <svg
            class="admin-icon"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.1401 58.8C21.9801 58.8 11.3401 48.16 11.3401 35C11.3401 21.84 21.9801 11.2 35.1401 11.2C48.3001 11.2 58.9401 21.84 58.9401 35C58.9401 48.16 48.1601 58.8 35.1401 58.8ZM35.1401 14C23.5201 14 14.1401 23.38 14.1401 35C14.1401 46.62 23.5201 56 35.1401 56C46.7601 56 56.1401 46.62 56.1401 35C56.1401 23.38 46.6201 14 35.1401 14Z"
              fill="#111111"
            />
            <path
              d="M21.4199 52.22L18.8999 51.1C19.5999 49.42 21.8399 48.44 24.2199 47.32C26.5999 46.2 29.5399 44.94 29.5399 43.4V41.3C28.6999 40.6 27.2999 39.06 27.0199 36.82C26.3199 36.12 25.1999 34.86 25.1999 33.18C25.1999 32.2 25.6199 31.36 25.8999 30.8C25.6199 29.68 25.3399 27.58 25.3399 25.9C25.3399 20.44 29.1199 16.8 35.1399 16.8C36.8199 16.8 38.9199 17.22 40.0399 18.48C42.6999 19.04 44.9399 22.12 44.9399 25.9C44.9399 28.28 44.5199 30.24 44.2399 31.22C44.5199 31.64 44.7999 32.34 44.7999 33.18C44.7999 35 43.8199 36.26 42.9799 36.82C42.6999 39.06 41.4399 40.46 40.5999 41.16V43.4C40.5999 44.66 43.1199 45.64 45.3599 46.48C48.0199 47.46 50.8199 48.58 51.7999 50.82L49.1399 51.8C48.7199 50.68 46.4799 49.84 44.3799 49.14C41.2999 48.02 37.7999 46.76 37.7999 43.54V39.9L38.4999 39.48C38.4999 39.48 40.1799 38.36 40.1799 36.12V35.14L41.0199 34.72C41.1599 34.72 41.8599 34.3 41.8599 33.18C41.8599 32.9 41.5799 32.48 41.4399 32.34L40.8799 31.78L41.1599 31.08C41.1599 31.08 41.8599 28.84 41.8599 26.04C41.8599 23.38 40.3199 21.42 39.0599 21.42H38.2199L37.7999 20.72C37.7999 20.16 36.8199 19.6 35.1399 19.6C30.7999 19.6 28.1399 21.98 28.1399 25.9C28.1399 27.72 28.8399 30.8 28.8399 30.8L28.9799 31.5L28.4199 32.2C28.2799 32.2 27.9999 32.62 27.9999 33.18C27.9999 33.88 28.8399 34.72 29.2599 35L29.8199 35.42V36.12C29.8199 38.22 31.6399 39.34 31.6399 39.48L32.3399 39.9V43.54C32.3399 46.9 28.6999 48.58 25.3399 49.98C23.7999 50.54 21.6999 51.52 21.4199 52.22Z"
              fill="#111111"
            />
          </svg>
        </div>
        <NavItem
          class="hover:text-[#001FC0] cursor-pointer"
          link="/admin/login"
          v-else
          >Login</NavItem
        >
        <NavItem
          v-if="!isLoggedIn"
          @click="signup"
          class="btn-blue cursor-pointer"
          link="/admin/signup"
          >Sign Up</NavItem
        >
      </div>
    </ul>
  </nav>
</template>

<script setup>
import NavItem from "./NavItem.vue";
import { ref } from "vue";

const isLoggedIn = ref(false);

const signup = () => {
  isLoggedIn.value = true;
};
</script>

<style scoped>
.btn-blue {
  @apply bg-[#001FC0] text-white py-4 px-9 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white;
}

.nav {
  @apply relative;
}
.nav::after {
  @apply content-[''] bg-[#001FC0] h-[3px] w-[0%] left-0 -bottom-[5px] rounded-xl absolute duration-300;
}
.nav:hover::after {
  @apply w-[100%];
}
.navbar {
  font-family: "Poppins", sans-serif;
}

/* .admin-profile {
  margin-left: auto; 
} */

.admin-icon {
  width: 24px;
  height: 24px;
  fill: #111111;
  cursor: pointer;
}
</style>
