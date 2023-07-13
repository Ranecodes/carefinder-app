<template>
    <div class="hero-section relative bg-white p-4 flex pt-[89px]">
        <div class="hero-section-text pl-[102px] pt-[60px]">
            Our <span class="text-[#001FC0]">expertise</span> <br>
            at your service
        </div>
        <div class="hero-section-image">
            <img class="h-auto w-11/12" src="~/assets/images/heroimage1.png" alt="surgeon operating"/>
        </div>
    </div>
    <div class="search-form absolute bottom-1 bg-[#001fc00d] backdrop-blur-{2px} shadow-[0_4px_35px_0_rgba(0,0,0,0.05)]">
        <h2 class="text-xl  pb-[10px]">Find a hospital</h2>
        <form class="flex items-center">
            <input type="text" class="border rounded-l px-2 py-[13px] w-[482px]" placeholder="Hospital name" />
            <input type="text" class="border rounded-r ml-[21px] pl-[18px] py-[13px] w-[419px]" placeholder="Location Near: City or ZIP" />
            <button type="submit" class="bg-[#001FC0] text-white py-[14px] px-[38px] ml-[20px] rounded-[3px]">Search</button>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    layout: 'default',
}
</script>

<style >
.hero-section-text {
    font-family: "Poppins", sans-serif;
    @apply text-6xl pr-[20px] font-bold leading-normal
}

.search-form{
    font-family: "Poppins", sans-serif;
    @apply p-5 left-[155px] bottom-[-130px] z-0
}
</style>