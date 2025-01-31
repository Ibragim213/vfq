<template>
    <router-view />
 
    <ProductsPage />
    <FooterComponent />
</template>

<script>


import FooterComponent from '@/crosscomponents/FooterComponent.vue';

import ProductsPage from '@/store/ProductsPage.vue';


export default {
    name: 'NewPage',
    components: {

        
        ProductsPage,
        FooterComponent,
    },
};
</script>