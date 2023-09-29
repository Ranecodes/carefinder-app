<template>
    <div class="body">
      <div class="welcome-text-container">
        <h1 class="welcome-text">Welcome Username!</h1>
        <p>Email: {{ user?.email }}</p>
      </div>
  
      <div class="nav-section">
        <button
          class="nav-section-btn"
          @click="navigateToDashboard"
          :class="{'active': showDashboard}"
          autofocus
        >
          Dashboard
        </button>
        <button class="nav-section-btn" 
        @click="navigateToEntries"
        :class="{'active': showEntries}"
        >
          Entries
        </button>
        <button @click="logout" class="bg-[#001FC0] text-white py-[13px] px-[60px] ml-[20px] rounded-[3px]">Log out</button>
      </div>
      <hr class="w-11/12 h-[1px] ml-[40px] bg-[#000000]" />
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    middleware: ["auth"],
  });
  
  const user = useSupabaseUser();
  const router = useRouter();
  const client = useSupabaseAuthClient();
  const showEntries = ref(false);
  const showDashboard = ref(true);
  console.log(user.value);
  async function logout() {
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  function navigateToDashboard(){
    showDashboard.value = true;
    showEntries.value = false;
    router.push("/admin/dashboard");
  }
  
  function navigateToEntries() {
    showEntries.value = true;
    showDashboard.value = false;
    router.push("/admin/entries");
  }
  </script>
  
  <style>
  .body {
    font-family: "Poppins", sans-serif;
  }
  .welcome-text-container {
    @apply pt-[50px] pb-[60px] text-center;
  }
  .welcome-text {
    @apply text-[32px] font-semibold;
  }
  .nav-section {
    @apply flex pl-[56px] mb-[25px];
  }
  .nav-section-btn {
    @apply px-[20px] py-[10px];
  }
  .nav-section-btn:focus {
    @apply bg-[#001FC1] text-[#FFFFFF] font-semibold rounded px-[20px] py-[10px]  outline-none;
  }
  </style>
  