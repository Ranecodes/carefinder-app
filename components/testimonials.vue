<template>
  <div class="swiper-container">
    <Swiper
      class="swipers"
      :navigation="true"
      :slidesPerView="3"
      :spaceBetween="30"
      
      :modules="modules"
    >
      <SwiperSlide class="container  ">
        <div class="card-container">
          <nuxt-img src="avatar1.png"></nuxt-img>
          <div class="card-name">
            <h1>Sade Adu</h1>
            <h2>Travel Enthusiast</h2>
          </div>
          <div class="star">
            <svg
              width="125"
              height="25"
              viewBox="0 0 150 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#FFC700"
              />
              <path
                d="M45 0L48.3677 10.3647H59.2658L50.4491 16.7705L53.8168 27.1353L45 20.7295L36.1832 27.1353L39.5509 16.7705L30.7342 10.3647H41.6323L45 0Z"
                fill="#FFC700"
              />
              <path
                d="M75 0L78.3677 10.3647H89.2658L80.4491 16.7705L83.8168 27.1353L75 20.7295L66.1832 27.1353L69.5509 16.7705L60.7342 10.3647H71.6323L75 0Z"
                fill="#FFC700"
              />
              <path
                d="M105 0L108.368 10.3647H119.266L110.449 16.7705L113.817 27.1353L105 20.7295L96.1832 27.1353L99.5509 16.7705L90.7342 10.3647H101.632L105 0Z"
                fill="#FFC700"
              />
              <path
                d="M135 0L138.368 10.3647H149.266L140.449 16.7705L143.817 27.1353L135 20.7295L126.183 27.1353L129.551 16.7705L120.734 10.3647H131.632L135 0Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div class="card-text">
            <h3>
              "Carefinder has been a <br />lifesaver for me! I recently<br />
              moved to a new city and had <br />
              no idea where to find reliable <br />
              healthcare. With Carefinder, I <br />
              quickly discovered top-notch <br />
              hospitals and medical centers <br />
              in my area. Highly <br />
              recommended!"
            </h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="container">
        <div class="card-container">
          <nuxt-img src="avatar2.png"></nuxt-img>
          <div class="card-name">
            <h1>Mark Johnson</h1>
            <h2>Satisfied Carefinder User</h2>
          </div>
          <div class="star">
            <svg
              width="125"
              height="25"
              viewBox="0 0 150 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#FFC700"
              />
              <path
                d="M45 0L48.3677 10.3647H59.2658L50.4491 16.7705L53.8168 27.1353L45 20.7295L36.1832 27.1353L39.5509 16.7705L30.7342 10.3647H41.6323L45 0Z"
                fill="#FFC700"
              />
              <path
                d="M75 0L78.3677 10.3647H89.2658L80.4491 16.7705L83.8168 27.1353L75 20.7295L66.1832 27.1353L69.5509 16.7705L60.7342 10.3647H71.6323L75 0Z"
                fill="#FFC700"
              />
              <path
                d="M105 0L108.368 10.3647H119.266L110.449 16.7705L113.817 27.1353L105 20.7295L96.1832 27.1353L99.5509 16.7705L90.7342 10.3647H101.632L105 0Z"
                fill="#FFC700"
              />
              <path
                d="M135 0L138.368 10.3647H149.266L140.449 16.7705L143.817 27.1353L135 20.7295L126.183 27.1353L129.551 16.7705L120.734 10.3647H131.632L135 0Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div class="card-text">
            <h3>
              "Carefinder made my hospital<br />
              search stress-free. I was able <br />to filter hospitals based
              on<br />
              specific criteria like specialties<br />
              and ratings. This helped me<br />
              find the perfect hospital that <br />met my needs. The app's
              user-<br />friendly interface and accurate <br>information impressed
              me!"
            </h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="container">
        <div class="card-container">
          <nuxt-img src="avatar3.png"></nuxt-img>
          <div class="card-name">
            <h1>Dr. Sarah Igbenedion</h1>
            <h2>Media Practitioner</h2>
          </div>
          <div class="star">
            <svg
              width="125"
              height="25"
              viewBox="0 0 150 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#FFC700"
              />
              <path
                d="M45 0L48.3677 10.3647H59.2658L50.4491 16.7705L53.8168 27.1353L45 20.7295L36.1832 27.1353L39.5509 16.7705L30.7342 10.3647H41.6323L45 0Z"
                fill="#FFC700"
              />
              <path
                d="M75 0L78.3677 10.3647H89.2658L80.4491 16.7705L83.8168 27.1353L75 20.7295L66.1832 27.1353L69.5509 16.7705L60.7342 10.3647H71.6323L75 0Z"
                fill="#FFC700"
              />
              <path
                d="M105 0L108.368 10.3647H119.266L110.449 16.7705L113.817 27.1353L105 20.7295L96.1832 27.1353L99.5509 16.7705L90.7342 10.3647H101.632L105 0Z"
                fill="#FFC700"
              />
              <path
                d="M135 0L138.368 10.3647H149.266L140.449 16.7705L143.817 27.1353L135 20.7295L126.183 27.1353L129.551 16.7705L120.734 10.3647H131.632L135 0Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div class="card-text">
            <h3>
              "As a healthcare professional, I <br />
              can confidently say that<br />
              Carefinder is a game-changer. <br />It's incredibly convenient
              to<br />
              have access to a<br />
              comprehensive list of hospitals<br />
              and their contact details. It<br />
              saves me time and helps me<br />
              provide better care to my<br />
              patients."
            </h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="container">
        <div class="card-container">
          <nuxt-img src="avatar4.png"></nuxt-img>
          <div class="card-name">
            <h1>Chinaza Okoro</h1>
            <h2>Happy Carefinder User</h2>
          </div>
          <div class="star">
            <svg
              width="125"
              height="25"
              viewBox="0 0 150 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#FFC700"
              />
              <path
                d="M45 0L48.3677 10.3647H59.2658L50.4491 16.7705L53.8168 27.1353L45 20.7295L36.1832 27.1353L39.5509 16.7705L30.7342 10.3647H41.6323L45 0Z"
                fill="#FFC700"
              />
              <path
                d="M75 0L78.3677 10.3647H89.2658L80.4491 16.7705L83.8168 27.1353L75 20.7295L66.1832 27.1353L69.5509 16.7705L60.7342 10.3647H71.6323L75 0Z"
                fill="#FFC700"
              />
              <path
                d="M105 0L108.368 10.3647H119.266L110.449 16.7705L113.817 27.1353L105 20.7295L96.1832 27.1353L99.5509 16.7705L90.7342 10.3647H101.632L105 0Z"
                fill="#FFC700"
              />
              <path
                d="M135 0L138.368 10.3647H149.266L140.449 16.7705L143.817 27.1353L135 20.7295L126.183 27.1353L129.551 16.7705L120.734 10.3647H131.632L135 0Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div class="card-text">
            <h3>
              "Carefinder has been a <br> lifesaver for me! I recently<br> moved to a new city and had<br> no idea where to find reliable <br>healthcare. With Carefinder, I <br>quickly discovered top-notch<br> hospitals and medical centers <br>in my area. Highly<br> recommended!"
            </h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="container">
        <div class="card-container">
          <nuxt-img src="avatar5.png"></nuxt-img>
          <div class="card-name">
            <h1>Susan Ekpo</h1>
            <h2>Carefinder User</h2>
          </div>
          <div class="star">
            <svg
              width="125"
              height="25"
              viewBox="0 0 120 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#FFC700"
              />
              <path
                d="M45 0L48.3677 10.3647H59.2658L50.4491 16.7705L53.8168 27.1353L45 20.7295L36.1832 27.1353L39.5509 16.7705L30.7342 10.3647H41.6323L45 0Z"
                fill="#FFC700"
              />
              <path
                d="M75 0L78.3677 10.3647H89.2658L80.4491 16.7705L83.8168 27.1353L75 20.7295L66.1832 27.1353L69.5509 16.7705L60.7342 10.3647H71.6323L75 0Z"
                fill="#FFC700"
              />
              <path
                d="M105 0L108.368 10.3647H119.266L110.449 16.7705L113.817 27.1353L105 20.7295L96.1832 27.1353L99.5509 16.7705L90.7342 10.3647H101.632L105 0Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div class="card-text">
            <h3>
              "I'm so grateful for Carefinder!<br />
              When my family member<br />
              needed urgent medical<br />
              attention, I used the app to<br />
              search for nearby hospitals. It<br />
              provided me with detailed <br />
              information and directions,<br />
              ensuring we reached the right <br />
              facility quickly. Thank you,<br />
              Carefinder!"
            </h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default {
  name: "TestimonialCards",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style>
.swipers {
  @apply  m-10 font-[14px] h-[530px];
}


.container {
  @apply bg-[#DEEEFF] flex flex-col items-center rounded-[3px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ;
}

.card-container {
  @apply mt-[45px];
}

.card-name {
  @apply mt-[9px];
}

.card-name h1 {
  @apply font-bold;
}

.card-name h2 {
  @apply font-medium;
}

.star {
  @apply mt-[16px];
}

.card-text {
  @apply mt-[37px];
}

.swiper-pagination {
  @apply mt-[37px];
}
</style>
