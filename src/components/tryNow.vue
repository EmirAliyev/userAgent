<template>
   <div class="wrapper mt-60">
      <div class="block__left ">
         <p  class="font-bold text-blue-600/100 text-4xl mb-8">{{ blocksMass[0].title }}</p>
         <p class="text-sky-800 font-semibold text-3xl mb-12">{{ blocksMass[0].description }}</p>
         <tryBtn @click="$router.push({ name: 'ip' })"></tryBtn>
      </div>
      <div class="block__right">
         <p class="font-bold text-blue-600/100 text-4xl mb-8">{{ blocksMass[1].title }}</p>
         <p class="text-sky-800 font-semibold text-3xl mb-12">{{ blocksMass[1].description }}</p>
         <tryBtn @click="$router.push({ name: 'zip' })"></tryBtn>
      </div>
   </div>
</template>

<script setup>
import tryBtn from './UI/tryBtn.vue'
const {blocksMass} = defineProps(['blocksMass'])
</script>

<style lang="scss" scoped>
.wrapper{
   width: 70%;
   max-height: 400px;
   display: flex;
   justify-content: space-between;
   margin-left: 50%;
   transform: translateX(-50%);
}

.block__left, .block__right{
   max-width: 500px;
   max-height: 400px;
   display: flex;
   justify-content: center;
   text-align: center;
   flex-direction: column;
   box-shadow: 0px 0px 3px 0px grey;
   padding: 10px;
   border-radius: 6px;
}
</style>