<template>
    <div>
      <HeaderComponent />
      <UserProfile />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';
  import UserProfile from '@/components-mainpage/UserProfile.vue';
  import FooterComponent from '@/crosscomponents/FooterComponent.vue';
  
  export default {
    name: 'UserPage',
    components: {
      HeaderComponent,
      UserProfile,
      FooterComponent,
    },
  };
  </script>
  
  <style scoped>
  /* Здесь можно добавить стили для страницы пользователя */
  </style>
  