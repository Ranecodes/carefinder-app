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
      <SwiperSlide>
        <nuxt-img  src="full-scr-1.png" alt="doctor and patient smiling" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img  src="full-scr-2.png" alt="surgeon" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img loading="lazy" src="full-scr-3.png" alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img loading="lazy" src="full-scr-4.png" alt="" />
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
</style>
