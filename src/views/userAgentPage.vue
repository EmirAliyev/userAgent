<template>
  <div class="wrapper w-2/4 pt-8   flex flex-col">
    <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Your browser is - <span class="text-orange-400">{{store.state.userBrowser.name}}</span>
    </p>
    <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
     Hostname - <span class="text-orange-400">{{store.state.userHostName}}</span>
   </p>
   <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Your City - <span class="text-orange-400">{{store.state.userCity}}</span>
   </p>
   <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Your IP Adress - <span class="text-orange-400">{{store.state.userIp}}</span>
   </p>
   <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Your Provider - <span class="text-orange-400">{{store.state.userProvider}}</span>
   </p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();

</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  margin-top: 10%;
  height: 400px;
  box-shadow: 0px 0px 3px 0px grey;
  position: relative;
}
.result__wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1%;
  border: 1px solid black;
}
</style>
