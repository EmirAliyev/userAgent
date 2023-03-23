<template>
  <div v-if="store.getters.shofInfo_g" class="flex flex-col	items-center">
<label class="relative block w-1/2  mb-4 " v-for="(value, data, index) in store.getters.zipData_g">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-sky-800" viewBox="0 0 20 20"></svg>
  </span>
  <input :value='titles[index] + "---" + value' class="text-sky-800 placeholder:italic placeholder:text-sky-700 block bg-white w-full border border-sky-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 sm:text-sm" type="text" name="search" disabled/>
</label>
</div>

<div v-else class=" flex flex-col	items-center">
<label class="relative block w-1/2  mb-4 " v-for="title in titles ">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-sky-800" viewBox="0 0 20 20"></svg>
  </span>
  <input class="text-sky-800 placeholder:italic placeholder:text-sky-700 block bg-white w-full border border-sky-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 sm:text-sm" :placeholder="title" type="text" name="search" disabled/>
</label>
</div>
</template>

   <script setup>
   import { useStore } from 'vuex'; 
   const store = useStore()
  const {titles} = defineProps(['titles']) 
console.log(titles[0])
  </script>