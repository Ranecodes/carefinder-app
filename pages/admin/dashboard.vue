<template>
    <div><h1>Dashboard</h1></div>

    <div>
        <h1>Welcome User</h1>
        <p>Email: {{ user?.email }}</p>
        <br>
        <button @click="logout" class="bg-[#001FC0] text-white py-[13px] px-[60px] ml-[20px] rounded-[3px]">Log out</button>
    </div>
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