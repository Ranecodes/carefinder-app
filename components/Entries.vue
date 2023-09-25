<template>
  <div class="body">
    <div class="entries-box" v-show="!showForm">
      <div class="entries-box-heading">
        <h1>List of Entries</h1>
        <button @click="toggleForm">Add Hospital</button>
      </div>
      <div class="entries-table">
        <table>
          <tr>
            <th>NAME</th>
            <th>LOCATION</th>
          </tr>
          <tr v-for="hospital in hospitals" :key="hospital.name">
            <td>{{ hospital.name }}</td>
            <td>{{ hospital.location }}</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- Form section -->
    <div v-if="showForm" class="entries-form">
      <!-- Close button for the form -->
      <button @click="toggleForm" class=" close-btn">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
        Close Form
      </button>
      <div class="form-header">
        <h1>New Hospital</h1>
      </div>
      <div class="form-content">
        <form action="">
          <div class="form-body">
            <div class="form-left">
              <label for="name">Name</label>
              <input
                type="text"
                v-model="name"
                name="name"
                id="name"
                placeholder="Enter name of hospital"
              />
              <label for="state">State</label>
              <input
                type="text"
                v-model="state"
                name="state"
                id="state"
                placeholder="Enter state of hospital"
              />
              <label for="city">City</label>
              <input
                type="text"
                v-model="city"
                name="city"
                id="city"
                placeholder="Enter city of hospital"
              />
              <label for="category">Category</label>
              <select name="category" id="category">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
              <label for="phone">Phone No.</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone no. of hospital"
              />
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email of hospital"
              />
            </div>
            <div class="form-right">
              <label for="address">Address</label>
              <textarea name="address" id="address" cols="30" rows="10"></textarea>
              <label for="image" class="image-upload-label">Images</label>
              <div class="image-upload-button">
                <svg width="158" height="124" viewBox="0 0 158 124" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M138.625 21.3125H68.875C67.3334 21.3125 65.855 21.9249 64.7649 23.0149C63.6749 24.105 63.0625 25.5834 63.0625 27.125V36.8125H53.375C51.8334 36.8125 50.355 37.4249 49.2649 38.5149C48.1749 39.605 47.5625 41.0834 47.5625 42.625V96.875C47.5625 98.4166 48.1749 99.895 49.2649 100.985C50.355 102.075 51.8334 102.688 53.375 102.688H123.125C124.667 102.688 126.145 102.075 127.235 100.985C128.325 99.895 128.938 98.4166 128.938 96.875V87.1875H138.625C140.167 87.1875 141.645 86.5751 142.735 85.4851C143.825 84.395 144.438 82.9166 144.438 81.375V27.125C144.438 25.5834 143.825 24.105 142.735 23.0149C141.645 21.9249 140.167 21.3125 138.625 21.3125ZM66.9375 27.125C66.9375 26.6111 67.1416 26.1183 67.505 25.755C67.8683 25.3916 68.3611 25.1875 68.875 25.1875H138.625C139.139 25.1875 139.632 25.3916 139.995 25.755C140.358 26.1183 140.562 26.6111 140.562 27.125V62.1937L132.381 54.0127C131.841 53.4708 131.2 53.0408 130.493 52.7475C129.787 52.4541 129.029 52.3031 128.264 52.3031C127.499 52.3031 126.742 52.4541 126.035 52.7475C125.329 53.0408 124.687 53.4708 124.147 54.0127L113.089 65.0709L90.4248 42.3877C89.8848 41.8458 89.2432 41.4158 88.5367 41.1225C87.8301 40.8291 87.0727 40.6781 86.3077 40.6781C85.5426 40.6781 84.7852 40.8291 84.0786 41.1225C83.3721 41.4158 82.7305 41.8458 82.1905 42.3877L66.9375 57.6406V27.125ZM125.062 96.875C125.062 97.3889 124.858 97.8817 124.495 98.245C124.132 98.6084 123.639 98.8125 123.125 98.8125H53.375C52.8611 98.8125 52.3683 98.6084 52.005 98.245C51.6416 97.8817 51.4375 97.3889 51.4375 96.875V42.625C51.4375 42.1111 51.6416 41.6183 52.005 41.255C52.3683 40.8916 52.8611 40.6875 53.375 40.6875H63.0625V81.375C63.0625 82.9166 63.6749 84.395 64.7649 85.4851C65.855 86.5751 67.3334 87.1875 68.875 87.1875H125.062V96.875ZM138.625 83.3125H68.875C68.3611 83.3125 67.8683 83.1084 67.505 82.745C67.1416 82.3817 66.9375 81.8889 66.9375 81.375V63.1334L84.9417 45.1292C85.1217 44.9491 85.3353 44.8062 85.5706 44.7087C85.8058 44.6112 86.0579 44.561 86.3125 44.561C86.5671 44.561 86.8192 44.6112 87.0544 44.7087C87.2897 44.8062 87.5033 44.9491 87.6833 45.1292L111.737 69.1833C112.101 69.5456 112.593 69.7491 113.106 69.7491C113.619 69.7491 114.111 69.5456 114.474 69.1833L126.903 56.7542C127.083 56.5741 127.297 56.4312 127.532 56.3337C127.767 56.2362 128.019 56.186 128.274 56.186C128.529 56.186 128.781 56.2362 129.016 56.3337C129.251 56.4312 129.465 56.5741 129.645 56.7542L140.562 67.672V81.375C140.562 81.8889 140.358 82.3817 139.995 82.745C139.632 83.1084 139.139 83.3125 138.625 83.3125ZM113.438 40.6875C113.438 39.9211 113.665 39.1719 114.091 38.5347C114.516 37.8974 115.122 37.4008 115.83 37.1075C116.538 36.8142 117.317 36.7374 118.068 36.887C118.82 37.0365 119.511 37.4055 120.053 37.9475C120.594 38.4894 120.964 39.1798 121.113 39.9315C121.263 40.6832 121.186 41.4623 120.893 42.1704C120.599 42.8785 120.103 43.4837 119.465 43.9094C118.828 44.3352 118.079 44.5625 117.312 44.5625C116.285 44.5625 115.299 44.1542 114.572 43.4275C113.846 42.7008 113.438 41.7152 113.438 40.6875Z" fill="#ACACAC"/>
<path d="M44.3334 30.3288H30.3334V44.3288H25.6667V30.3288H11.6667V25.6621H25.6667V11.6621H30.3334V25.6621H44.3334V30.3288Z" fill="#B0B0B0"/>
</svg>

              </div>
              <input type="file" name="image" id="image" class="image-upload-input" />
            </div>
          </div>
          <button @click.prevent="addHospital">Add Hospital</button>
        </form>
      </div>

      
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

// Load existing hospitals from local storage on component mount
const existingHospitals = JSON.parse(localStorage.getItem("hospitals")) || [];
const hospitals = ref(existingHospitals);

const showForm = ref(false);
const name = ref("");
const city = ref("");
const state = ref("");

const toggleForm = () => {
  showForm.value = !showForm.value;
};

const addHospital = () => {
  if (name.value && city.value && state.value) {
    const hospital = {
      name: name.value,
      location: `${city.value}, ${state.value}`,
    };

    // Update both local storage and hospitals ref
    hospitals.value.push(hospital);
    localStorage.setItem("hospitals", JSON.stringify(hospitals.value));

    clearForm();
  }
};

const clearForm = () => {
  name.value = "";
  city.value = "";
  state.value = "";
};


</script>

<style scoped>
.body {
  @apply flex justify-center;
}
.entries-box {
  @apply border bg-[#FEFEFE] w-11/12 border-inherit p-5 my-5;
}
.entries-box-heading {
  @apply flex justify-between items-center mb-5;
}
.entries-box-heading h1 {
  @apply font-semibold text-[24px];
}
.entries-box-heading button {
  @apply bg-[#001FC0] text-white py-[10px] px-[32px] rounded-[3px];
}
.entries-table {
  @apply flex justify-center overflow-x-auto pb-5;
}
.entries-table table {
  @apply w-full border-collapse;
}
.entries-table th,
.entries-table td {
  @apply p-2 text-left;
}
.entries-table th {
  @apply text-[#777777]  text-[16px];
}
.entries-table tr {
  @apply border-b;
}
.entries-form{
  @apply w-11/12 flex flex-col;
}
.form-content {
  @apply border bg-[#FEFEFE] border-inherit p-10 my-5;
}
.form-content form {
  @apply w-full flex flex-col;
}
.form-body{
    @apply flex justify-between pb-20;
}
.form-body label {
  @apply text-[#57595A] text-[16px];
}
.form-body input, .form-body textarea, .form-body select {
  @apply border border-[#D2D2D2]  p-2 mb-5;
}
.form-header {
  @apply flex justify-center items-center ;
}
.form-header h1 {
  @apply font-semibold text-[20px];
}
.form-left{
    @apply flex flex-col gap-2 w-2/5 ml-8;
}
.form-right{
    @apply flex flex-col w-2/5 mr-10;
}
.form-content button{
    @apply bg-[#001FC0] text-white py-[10px] px-[32px] w-1/3 self-center;
}
.image-upload-label {
  @apply block relative w-full my-2;
  
}

.image-upload-button {
  @apply flex justify-center items-center border border-[#D2D2D2] cursor-pointer;
}

/* Hide the input element */
/* .image-upload-input {
  display: none;
} */
.close-btn{
  @apply bg-teal-500 text-white py-2 px-4 rounded mt-4 self-end;
}
.close-btn svg{
  @apply inline-block w-4 h-4 mr-2 transform rotate-90;
}
</style>
