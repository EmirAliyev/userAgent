<template>
   <div class="wrapper w-2/4 p-8">
   <zipSearch></zipSearch>
   <tryBtn @click="store.dispatch('getZipData')"></tryBtn>
   <zipResult :titles="resultMassTitles" ></zipResult>
   </div>
</template>

<script setup>
import zipSearch from '@/components/UI/zipSearch.vue';
import tryBtn from '@/components/UI/tryBtn.vue';
import zipResult from '@/components/zipResult.vue'
import { useStore } from 'vuex';

const store = useStore()
let resultMassTitles = ['City','County','Latitude', 'Longtitude','State','ZipCode']
</script>

<style lang="scss" scoped>
.wrapper{
   margin: 0 auto;
   margin-top: 10%;
   height: 500px;
   box-shadow: 0px 0px 3px 0px grey;
   position: relative;
}
.result__wrapper{
display: flex;
flex-direction: column;
position: absolute;
right: 1%;
border: 1px solid black
}
</style>