<template>
  <div class="flex justify-center	">
<label class="relative block w-1/2  mb-4 ">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-sky-800" viewBox="0 0 20 20"><!-- ... --></svg>
  </span>
  <input v-model="store.state.zipCode" class="text-sky-800 placeholder:italic placeholder:text-sky-700 block bg-white w-full border border-sky-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 sm:text-sm" placeholder="ZIP CODE" type="text" name="search"/>
</label>
</div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>