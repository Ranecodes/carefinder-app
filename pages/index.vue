<template class="container">
  <div class="hero-section relative bg-white p-4 flex pt-[89px]">
    <div class="hero-section-text pl-[102px] pt-[60px]">
      Our <span class="text-[#001FC0]">expertise</span> <br />
      at your service
    </div>
    <div class="hero-section-image">
      <nuxt-img
        class="h-auto w-11/12"
        src="heroimage1.png"
        alt="surgeon operating"
      />
    </div>
  </div>
  <div class="search-form-wrapper">
    <div
      class="search-form absolute bottom-1 bg-[#001fc00d] shadow-[0_4px_35px_0_rgba(0,0,0,0.05)]"
    >
      <h2 class="text-[28px] pb-[10px]">Find a hospital</h2>
      <form class="flex items-center">
        <div class="input-wrapper relative">
          <svg
            class="absolute left-[20px] top-[13px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_152_239)">
              <path
                d="M23.2001 23.2001L16.8001 16.8001M10.4 20.0001C9.13936 20.0001 7.89101 19.7517 6.72629 19.2693C5.56156 18.7868 4.50327 18.0797 3.61182 17.1883C2.72038 16.2968 2.01325 15.2385 1.53081 14.0738C1.04836 12.9091 0.800049 11.6607 0.800049 10.4C0.800049 9.13936 1.04836 7.89101 1.53081 6.72629C2.01325 5.56156 2.72038 4.50327 3.61182 3.61182C4.50327 2.72038 5.56156 2.01325 6.72629 1.53081C7.89101 1.04836 9.13936 0.800049 10.4 0.800049C12.9461 0.800049 15.3879 1.81147 17.1883 3.61182C18.9886 5.41217 20.0001 7.85397 20.0001 10.4C20.0001 12.9461 18.9886 15.3879 17.1883 17.1883C15.3879 18.9886 12.9461 20.0001 10.4 20.0001Z"
                stroke="#001FC0"
                stroke-width="1.6"
              />
            </g>
            <defs>
              <clipPath id="clip0_152_239">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            class="border rounded-[3px] pr-3 pl-14 py-[13px] w-[426px]"
            placeholder="Hospital name"
          />
        </div>
        <div class="input-wrapper-2 relative">
          <svg
            class="absolute right-[20px] top-[13px]"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_153_242)">
              <path
                d="M26.1138 2.5075L26.2463 2.5L26.4088 2.51L26.5213 2.53L26.6751 2.57375L26.8088 2.63125L26.9338 2.7025L27.0463 2.78625L27.1488 2.88L27.2138 2.95375L27.3163 3.09875L27.3813 3.21875C27.4401 3.34375 27.4776 3.47625 27.4938 3.61375L27.5001 3.74625C27.5001 3.84 27.4901 3.9325 27.4701 4.02125L27.4263 4.175L19.2613 26.7712C19.1066 27.1082 18.8583 27.3937 18.5462 27.5937C18.234 27.7938 17.8709 27.9001 17.5001 27.9C17.1661 27.9011 16.8376 27.8156 16.5465 27.652C16.2553 27.4883 16.0115 27.2521 15.8388 26.9662L15.7576 26.8075L11.5676 18.43L3.2301 14.26C2.9216 14.1189 2.65555 13.8993 2.45856 13.6231C2.26158 13.3469 2.14055 13.0239 2.1076 12.6863L2.1001 12.5C2.1001 11.8 2.47635 11.16 3.15135 10.7875L3.32635 10.7L25.8476 2.5675L25.9801 2.53L26.1138 2.5075Z"
                fill="#001FC0"
              />
            </g>
            <defs>
              <clipPath id="clip0_153_242">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            class="border rounded-[3px] ml-[21px] pl-[18px] pr-[50px] py-[13px] w-[380px]"
            placeholder="Location Near: City or ZIP"
          />
        </div>

        <button
          type="submit"
          class="bg-[#001FC0] text-white py-[13px] px-[60px] ml-[20px] rounded-[3px]"
        >
          Search
        </button>
      </form>
    </div>
    <button
      type="submit"
      class="view-btn px-[26px] py-[12px] bg-[#00BABA] rounded-[3px] text-[#ffff] hover:bg-[#4FCFCF]"
    >
      View All Hospitals
    </button>
  </div>
  <div class="mid-btm-section pt-[141px]">
    <SwipeFeature />
  </div>
  <div class="features-section" id="features">
    <h1 class="text-[48px] font-bold text-center pb-[49px] text-[#000000cc]">
      Features
    </h1>
    <div class="feature-card-container flex justify-center">
      <div class="feature-card">
        <div>
          <svg
            width="73"
            height="72"
            viewBox="0 0 73 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_155_272)">
              <path
                d="M36.5836 2.39992L37.6515 0.254319C37.32 0.0870805 36.9544 0 36.5836 0C36.2129 0 35.8472 0.0870805 35.5157 0.254319L36.5836 2.39992ZM7.9802 16.7999L6.91234 14.6543C6.51691 14.8538 6.18441 15.1602 5.95204 15.5391C5.71967 15.918 5.5966 16.3546 5.59658 16.7999H7.9802ZM65.187 16.7999H67.5706C67.5706 16.3546 67.4476 15.918 67.2152 15.5391C66.9828 15.1602 66.6503 14.8538 66.2549 14.6543L65.187 16.7999ZM27.0491 50.3999V47.9999H24.6655V50.3999H27.0491ZM46.1181 50.3999H48.5017V47.9999H46.1181V50.3999ZM0.829346 71.9999H72.3379V67.1999H0.829346V71.9999ZM35.5157 0.254319L6.91234 14.6543L9.04806 18.9455L37.6515 4.54552L35.5157 0.254319ZM66.2549 14.6543L37.6515 0.254319L35.5157 4.54552L64.1192 18.9455L66.2549 14.6543ZM34.2 14.3999V26.3999H38.9672V14.3999H34.2ZM34.2 26.3999V38.3999H38.9672V26.3999H34.2ZM24.6655 28.7999H36.5836V23.9999H24.6655V28.7999ZM36.5836 28.7999H48.5017V23.9999H36.5836V28.7999ZM5.59658 16.7999V69.5999H10.3638V16.7999H5.59658ZM62.8034 16.7999V69.5999H67.5706V16.7999H62.8034ZM29.4328 69.5999V50.3999H24.6655V69.5999H29.4328ZM27.0491 52.7999H46.1181V47.9999H27.0491V52.7999ZM43.7345 50.3999V69.5999H48.5017V50.3999H43.7345Z"
                fill="#111111"
              />
            </g>
            <defs>
              <clipPath id="clip0_155_272">
                <rect
                  width="71.5085"
                  height="72"
                  fill="white"
                  transform="translate(0.829346)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="feat-card-text pl-3">
          <h6 class="font-bold">Hospital Search</h6>
          <p>
            Search for hospitals near <br />
            you.
          </p>
          <button class="feat-btn">Search Now</button>
        </div>
      </div>
      <div class="feature-card pl-[65px] pb-4">
        <div>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.727 0C35.4121 0 32.0891 3.6248 32.0891 7.959C32.0891 12.1336 32.06 15.7861 32.06 15.7861H24.3881C24.2437 15.7861 24.104 15.8022 23.9662 15.8252H21.8324V23.3301H57.6215V15.8252H55.4877C55.35 15.8022 55.2103 15.7861 55.0658 15.7861H47.394C47.394 15.7861 47.4813 12.4797 47.4813 7.9834C47.4813 3.80873 44.0419 0 39.727 0ZM11.6 7.61233V80H67.854V7.61233H50.0322V12.8565H62.7039V74.7461H16.755V12.8565H29.4218V7.61233H11.6ZM39.727 7.70993C41.1406 7.70993 42.2827 8.85527 42.2827 10.2734C42.2827 11.6941 41.1406 12.8417 39.727 12.8417C38.3134 12.8417 37.1713 11.6941 37.1713 10.2734C37.1713 8.85533 38.3134 7.70993 39.727 7.70993ZM21.8324 28.418V30.9863H24.3881V28.418H21.8324ZM29.5043 28.4668V31.0351H57.6215V28.4668H29.5043ZM21.8324 38.1055V40.6738H24.3881V38.1055H21.8324ZM29.5043 38.1543V40.7275H57.6215V38.1543H29.5043ZM21.8324 47.793V50.3613H24.3881V47.793H21.8324ZM29.5043 47.8467V50.415H57.6215V47.8467H29.5043ZM21.8324 57.4853V60.0537H24.3881V57.4853H21.8324ZM29.5043 57.5391V60.1074H57.6215V57.5391H29.5043ZM21.8324 67.1729V69.7412H24.3881V67.1729H21.8324ZM29.5043 67.2265V69.7949H57.6215V67.2265H29.5043Z"
              fill="#111111"
            />
          </svg>
        </div>

        <div class="feat-card-text pl-3">
          <h6 class="font-bold">Get a List</h6>
          <p>
            Ability to export list of <br />
            hospitals near you in a csv file
          </p>
          <button class="feat-btn">Check it out</button>
        </div>
      </div>
      <div class="feature-card pl-[58px]">
        <svg
          width="69"
          height="69"
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M62.0547 4.24396L63.735 5.93582C66.0504 8.27001 65.7001 12.4079 62.9461 15.1779L28.2948 50.0675L17.068 54.2025C15.6583 54.7244 14.2856 54.0476 14.0065 52.697C13.9121 52.2071 13.9565 51.7003 14.1346 51.2346L18.3211 39.8332L52.8757 5.03828C55.6297 2.26822 59.7393 1.90978 62.0547 4.24396ZM26.7825 7.7137C27.1565 7.7137 27.5268 7.78787 27.8724 7.93198C28.2179 8.07609 28.5319 8.28731 28.7963 8.55359C29.0608 8.81987 29.2706 9.13598 29.4137 9.48389C29.5568 9.8318 29.6305 10.2047 29.6305 10.5813C29.6305 10.9578 29.5568 11.3307 29.4137 11.6786C29.2706 12.0265 29.0608 12.3426 28.7963 12.6089C28.5319 12.8752 28.2179 13.0864 27.8724 13.2305C27.5268 13.3746 27.1565 13.4488 26.7825 13.4488H15.3906C13.8799 13.4488 12.4311 14.053 11.3629 15.1286C10.2947 16.2041 9.69462 17.6629 9.69462 19.1839V53.5946C9.69462 55.1156 10.2947 56.5743 11.3629 57.6499C12.4311 58.7254 13.8799 59.3297 15.3906 59.3297H49.5663C51.077 59.3297 52.5258 58.7254 53.594 57.6499C54.6622 56.5743 55.2623 55.1156 55.2623 53.5946V42.1243C55.2623 41.3638 55.5624 40.6344 56.0965 40.0967C56.6306 39.5589 57.3549 39.2568 58.1103 39.2568C58.8656 39.2568 59.59 39.5589 60.1241 40.0967C60.6582 40.6344 60.9583 41.3638 60.9583 42.1243V53.5946C60.9583 56.6366 59.758 59.5541 57.6216 61.7052C55.4852 63.8563 52.5877 65.0648 49.5663 65.0648H15.3906C12.3693 65.0648 9.47167 63.8563 7.33527 61.7052C5.19887 59.5541 3.99866 56.6366 3.99866 53.5946V19.1839C3.99866 16.1418 5.19887 13.2243 7.33527 11.0733C9.47167 8.92217 12.3693 7.7137 15.3906 7.7137H26.7825Z"
            fill="#111111"
          />
        </svg>

        <div class="feat-card-text pl-3">
          <h6 class="font-bold">Add Content</h6>
          <p>
            Edit and add hospitals to <br />
            the current database
          </p>
          <button class="feat-btn">Contribute</button>
        </div>
      </div>
    </div>
  </div>
  <div class="testimonial-section" id="testimonials">
    <h1 class="text-[48px] font-bold text-center pb-[35px] text-[#000000cc]">
      Testimonials
    </h1>
    <Testimonials />
  </div>
  <div class="newsletter-section">
    <div class="newsletter-text">
      <h1 class="text-[40px] font-semibold pb-[21px]">
        Subscribe to Newsletter
      </h1>
      <p class="text-center text-[26px] text-[#B8B8B8] pb-[73px]">
        Unlock Your Healthcare Journey
      </p>
    </div>
    <div class="newsletter-form-wr pb-[186px]">
      <form action="">
        <input
          type="text"
          class="border rounded-[3px] pr-3 pl-[22px] py-[13px] w-[426px] bg-[#F4F4F4] text-[20px]"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          class="bg-[#001FC0] text-white py-[13px] px-[60px] ml-[20px] rounded-[3px] text-[20px]"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
  <div class="footer-section" id="contact">
    <Footer />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";



export default {
  layout: "default",
 
};
</script>

<style>
.container {
  font-family: "Poppins", sans-serif;
}

.hero-section-text {
  font-family: "Poppins", sans-serif;
  @apply text-6xl pr-[20px] font-bold leading-normal;
}

.search-form {
  font-family: "Poppins", sans-serif;
  @apply py-6 px-[63px] left-[121px] bottom-[-138px] z-0 backdrop-blur-sm;
}

.view-btn {
  font-family: "Poppins", sans-serif;
  @apply text-[20px] ml-[7.5rem] font-normal;
}

.features-section {
  font-family: "Poppins", sans-serif;
  @apply flex flex-col justify-center pt-[113px] pb-[210px];
}

.feature-card {
  font-family: "Poppins", sans-serif;
  @apply flex;
}

.feat-btn {
  @apply bg-[#00BABA] px-[26px] py-[11px] rounded-[3px] text-[#ffffff] mt-5 hover:bg-[#4FCFCF];
}

.testimonial-section {
  font-family: "Poppins", sans-serif;
}

.newsletter-section {
  font-family: "Poppins", sans-serif;
  @apply flex flex-col justify-center items-center pt-[113px] pb-[70px];
}
</style>
