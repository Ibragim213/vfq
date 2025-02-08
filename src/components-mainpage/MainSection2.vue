<template>
  <section>
    <h3 class="custom-txt container">Новая линия для вашего дома</h3>
    <div class="items container">
      <div 
        v-for="product in limitedProducts" 
        :key="product.id" 
        class="item" 
      >
        <router-link :to="`/product/${product.id}`" class="item-link">
          <div class="background">
            <img :src="getImageUrl(product.image)" :alt="product.name">
          </div>
          <p>{{ product.name }}</p>
          <p>{{ product.description }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/products');
    products.value = response.data;
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
  }
};

const limitedProducts = computed(() => products.value.slice(0, 3));

const getImageUrl = (imageName) => new URL(`/src/assets/img/${imageName}`, import.meta.url).href;

onMounted(fetchProducts);
</script>

<style scoped>
.container {
  width: 1800px;
  margin: 0 auto;
}
.custom-txt {
  font-size: 64px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 80px;
}
.items {
  display: flex;
  gap: 33px;
  justify-content: space-between;
}
.item {
  max-width: 364px;
  text-align: center;
  transition: 0.3s;
}
.item-link {
  text-decoration: none;
  color: inherit;
}
.item:hover {
  transform: scale(1.06);
}
.item:hover .background {
  background: #9a99d4;
}
.background {
  background: rgba(217, 217, 217, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-radius: 10px;
}
.item img {
  width: 100%;
  max-width: 300px;
  object-fit: contain;
}
</style>
