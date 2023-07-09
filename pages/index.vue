<template>
    <div class="hero-section bg-white p-4 flex pt-[89px]">
        <div class="hero-section-text pl-[102px] pt-[60px]">
            Our <span class="text-[#001FC0]">expertise</span> <br>
            at your service
        </div>
        <div class="hero-section-image">
            <img class="h-auto w-11/12" src="~/assets/images/heroimage1.png" alt="surgeon operating">
        </div>
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
</style>