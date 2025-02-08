<template>
    <router-view />  
    <HeaderComponent/>
     <OnasSection1/>
        <FooterComponent/>
  </template>
  <script>


import OnasSection1 from '@/components-mainpage/OnasSection1.vue';
import FooterComponent from '@/crosscomponents/FooterComponent.vue';
import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';


 // тут собираем страницу что будет входить в нее
  export default {
    name: 'OnasPage',
    components: {
        HeaderComponent,
        OnasSection1,
        FooterComponent,
    },
  };
  </script>