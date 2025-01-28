<template>
    <router-view />
    <HeaderComponent />
    <ProductsPage />
    <FooterComponent />
</template>

<script>


import FooterComponent from '@/crosscomponents/FooterComponent.vue';
import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';
import ProductsPage from '@/store/ProductsPage.vue';


export default {
    name: 'NewPage',
    components: {

        HeaderComponent,
        ProductsPage,
        FooterComponent,
    },
};
</script>