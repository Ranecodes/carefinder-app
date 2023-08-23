<template>
    <div class="welcome-text-container">
        <h1 class="welcome-text">Welcome Raneh Egbe!</h1>
        <p>Email: {{ user?.email }}</p>
    </div>

    <div class="nav-section">
        <button class="nav-section-btn">Dashboard</button>
        <button class="nav-section-btn pl-[36px]">Entries</button>
        <!-- <button @click="logout" class="bg-[#001FC0] text-white py-[13px] px-[60px] ml-[20px] rounded-[3px]">Log out</button> -->
    </div>
    <hr class="w-11/12 h-[2px] ml-[40px] bg-[#000000]">
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})

const user = useSupabaseUser()
const router = useRouter()
const client = useSupabaseAuthClient()

console.log(user.value)
async function logout() {
    try{
        const {error} = await client.auth.signOut();
        if(error) throw error;
        router.push('/')
    } catch(error) {
        console.log(error)
    }
}
</script>

<style>
.welcome-text-container{
    @apply pt-[50px] pb-[60px] text-center;
}
.welcome-text{
    @apply text-[32px] font-semibold;
}
.nav-section{
    @apply flex pl-[60px] pb-[33px];
}
.nav-section-btn:focus{
    @apply bg-[#001FC1] text-[#FFFFFF] font-semibold rounded py-[10px] px-[20px];
}
</style>