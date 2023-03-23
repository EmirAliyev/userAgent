<template>
   <tryNow :blocksMass="blocksMass"></tryNow> 
</template>

<script setup>
import tryNow from '@/components/tryNow.vue';

let blocksMass= [
   {title: "IP", description: 'You can get all the data by IP'},
   {title: "ZIP" , description: "Use ZIP to find user's data"},
]
</script>