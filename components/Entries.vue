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
          <tr>
            <td>St. Luke's Medical Center</td>
            <td>Quezon City</td>
          </tr>
          <tr>
            <td>Hope Waddell Hospital</td>
            <td>Calabar, Nigeria</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- Form section -->
    <div v-if="showForm" class="entries-form">
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
                name="name"
                id="name"
                placeholder="Enter name of hospital"
              />
              <label for="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter location of hospital"
              />
              <input type="submit" value="Submit" class="btn-blue" />
            </div>
            <div class="form-right">
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter address of hospital"
              />
              <label for="contact">Contact</label>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Enter contact of hospital"
              />
            </div>
          </div>
          <button>Add Hospital</button>
        </form>
      </div>

      <!-- Close button for the form -->
      <button @click="toggleForm">Close Form</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showForm = ref(false);

const toggleForm = () => {
  showForm.value = !showForm.value;
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
.form-content {
  @apply border w-full;
}
.form-content form {
  @apply w-full flex flex-col;
}
.form-body{
    @apply flex;
}
.form-header {
  @apply flex justify-center items-center;
}
.form-left{
    @apply flex flex-col w-1/2;
}
.form-right{
    @apply flex flex-col w-1/2;
}
</style>
