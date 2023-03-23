<template>
  <div class="wrapper w-2/4 pt-16 flex flex-col">
    <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Your browser is - <span class="text-orange-400">{{store.state.userBrowser.name}}</span>
    </p>
    <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Browser version - <span class="text-orange-400">{{store.state.userBrowser.version}}</span>
   </p>
   <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Your OS - <span class="text-orange-400">{{store.state.opSys.name}} {{store.state.opSys.version}}</span>
   </p>
   <p class="font-bold text-blue-600/100 text-4xl mb-8 text-center">
      Your IP Adress - <span class="text-orange-400">{{store.state.userIp}}</span>
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
