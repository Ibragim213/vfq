<template>
    <h1>Список всех товаров</h1>

    <div class="grid">
        <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.images[0]" alt="" class="product-image">
            <h4 class="product-title">{{ product.title }}</h4>
            <p class="product-price">{{ product.price }} $</p>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
    background-color: #fff;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-title {
    font-size: 1.2rem;
    margin: 10px;
    text-align: center;
}

.product-price {
    font-size: 1.1rem;
    color: #333;
    text-align: center;
    margin: 10px;
    font-weight: bold;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';

const products = ref([])

onMounted(() => {
    fetch('https://dummyjson.com/products')
        .then((resp) => resp.json())
        .then((json) => products.value = json.products)
})
</script>