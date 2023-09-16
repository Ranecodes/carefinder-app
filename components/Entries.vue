<template>
    <div class="body">
        <div class="entries-box">
            <div class="entries-box-heading">
                <h1>List of Entries</h1>
                <button>Add Hospital</button>
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
    </div>
</template>

<script lang="ts">
export default {
    name: "Entries",
};
</script>

<style scoped>
.body{
    @apply flex justify-center;
}
.entries-box{
    @apply border bg-[#FEFEFE] w-11/12 border-inherit p-5 my-5;
}
.entries-box-heading{
    @apply flex justify-between items-center mb-5;
}
.entries-box-heading h1{
    @apply font-semibold text-[24px];
}
.entries-box-heading button{
    @apply bg-[#001FC0] text-white py-[10px] px-[32px] rounded-[3px];
}
.entries-table{
    @apply flex justify-center overflow-x-auto pb-5;
}
.entries-table table{
    @apply w-full border-collapse;
}
.entries-table th, .entries-table td{
    @apply p-2 text-left;
}
.entries-table th{
    @apply text-[#777777]  text-[16px]; 
}
.entries-table tr{
    @apply border-b;
}
</style>