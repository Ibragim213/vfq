<template>
    <router-view />  
    <HeaderComponent/>
     
        <FooterComponent/>
  </template>
  
  <script>


import FooterComponent from '@/crosscomponents/FooterComponent.vue';
import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';


 // тут собираем страницу что будет входить в нее
  export default {
    name: 'NewPage',
    components: {
    
        HeaderComponent,
        FooterComponent,
    },
  };
  </script>