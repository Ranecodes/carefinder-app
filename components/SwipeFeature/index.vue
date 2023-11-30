<template>
  <div class="swiper-container">
    <Swiper
      class="swiper"
      :spaceBetween="30"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :navigation="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide class="slide">
        <nuxt-img
          src="full-scr-1.png"
          class="w-full"
          alt="doctor and patient smiling"
        />
        <h1 class="slide-text absolute bottom-0">
          Connecting Patients <br />
          to Trusted Hospitals and <br />Quality Medical Services
        </h1>
      </SwiperSlide>
      <SwiperSlide class="slide">
        <nuxt-img src="full-scr-2.png" class="w-full" alt="surgeon" />
        <h1 class="slide-text absolute bottom-0">
          Navigate The Path <br />
          to Wellness and <br />
          Health With Carefinder
        </h1>
      </SwiperSlide>
      <SwiperSlide class="slide">
        <nuxt-img loading="lazy" src="full-scr-3.png" class="w-full" alt="" />
        <h1 class="slide-text absolute bottom-0">
          Bringing Healthcare <br />
          Closer To Your <br />
          Fingertips
        </h1>
      </SwiperSlide>
      <SwiperSlide class="slide">
        <nuxt-img loading="lazy" src="full-scr-4.png" class="w-full" alt="" />
        <h1 class="slide-text absolute bottom-0">
          Unlocking Access to <br />
          Life-saving Facilities <br />
          With Carefinder's Assistance
        </h1>
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default {
  name: "SwipeFeature",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Pagination, Autoplay, Navigation],
    };
  },
};
</script>

<style>
.swiper-container {
  @apply w-full max-w-full;
}

.slide {
  @apply relative;
}

.slide-text {
  @apply text-white text-[50px] font-semibold pl-[90px] pb-6;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
}
</style>
