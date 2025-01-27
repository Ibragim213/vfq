<template>
    <router-view />  
    <HeaderComponent/>
        <TestComponent/>
        <MainSection1/>
        <MainSection2/>
        <MainSection3/>
        <MainSection4/>
        <FooterComponent/>
  </template>
  
  <script>

import MainSection1 from '@/components-mainpage/MainSection1.vue';
import MainSection2 from '@/components-mainpage/MainSection2.vue';
import MainSection3 from '@/components-mainpage/MainSection3.vue';
import MainSection4 from '@/components-mainpage/MainSection4.vue';
import FooterComponent from '@/crosscomponents/FooterComponent.vue';
import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';
import TestComponent from '@/crosscomponents/TestComponent.vue';

 // тут собираем страницу что будет входить в нее
  export default {
    name: 'MainPage',
    components: {
    
        HeaderComponent,
       
        TestComponent,
        MainSection1,
        MainSection2,
        MainSection3,
        MainSection4,
        FooterComponent,
    },
  };
  </script>