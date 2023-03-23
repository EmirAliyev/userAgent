<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
      <router-link to="/" class="cursor-pointer text-lg font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Homepage</router-link>
      <router-link to="/ip" class="cursor-pointer text-lg font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Ip</router-link>
      <router-link to="/zip" class="cursor-pointer text-lg font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Zip</router-link>
    </div>
</nav>
<RouterView></RouterView>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
const router = useRouter()
const store = useStore()

let loadUserData = onBeforeMount(()=>{
store.dispatch('getUserData')
})

</script>

<style>
.router-link-exact-active{
  display: inline;
  text-decoration: underline 3px #f9dd94;
  text-underline-offset: 8px;
}
</style>