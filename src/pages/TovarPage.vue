<template>
    <router-view />  
    <HeaderComponent/>
     <OtzivSection/>
        <FooterComponent/>
  </template>
  
  <script>


import OtzivSection from '@/components-mainpage/OtzivSection.vue';
import FooterComponent from '@/crosscomponents/FooterComponent.vue';
import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';


 // тут собираем страницу что будет входить в нее
  export default {
    name: 'OtzivPage',
    components: {
    
        HeaderComponent,
        OtzivSection,
        FooterComponent,
    },
  };
  </script>