<template>
    <div class="dashboard-container">
        <div class="entries-card entries-card-1">
            <h1>Number of Entries</h1>
            <p>0</p>
        </div>
        <div class="entries-card entries-card-2">
            <h1>Number of Entries</h1>
            <p>000</p>
        </div>
    </div>
    <Footer/>
</template>

<script lang="ts">

export default {
    name: "DashboardLayout",

};
</script>

<style>
.dashboard-container{
    @apply flex justify-between;
    @apply w-[80%] mx-auto;
    @apply mt-[50px] pb-10;
}
.entries-card{
    @apply bg-[#00BABA] text-[#FFF] rounded-[3px] w-[45%] h-[200px] flex flex-col justify-center items-center;
    @apply shadow-xl;
}
.entries-card:hover{
    @apply bg-[#70d3d3] cursor-pointer ;
}
.entries-card h1{
    @apply text-[20px] font-bold 
}
.entries-card p{
    @apply text-[50px] mt-[30px] font-bold;
}
</style>