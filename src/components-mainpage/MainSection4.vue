<template>
  <!-- Распродажа -->
  <section style="margin-top: 120px;">
    <div class="categories-top">
      <h3>Распродажа</h3>
      <div class="categories-line"></div>
      <button class="categories-nav">
        <router-link to="/store"><p>Все товары</p></router-link>
      </button>
    </div>

    <div class="products container">
      <div class="product" v-for="product in limitedProducts" :key="product.id">
        <div class="bacground-sofa" @click="goToProduct(product.id)">
          <img :src="getImageUrl(product.image)" :alt="product.name">
          <p class="discount" v-if="product.discount">-{{ product.discount }}%</p>
        </div>
        <div class="price">
          <p>{{ product.price }} <img src="@/assets/img/ruble.png" alt="рублей"></p>
          <p v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} <img src="@/assets/img/ruble.png" alt="рублей"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
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

const goToProduct = (productId) => {
  router.push(`/product/${productId}`);
};

onMounted(fetchProducts);
</script>

<style scoped>
/* распродажа */
.categories-top {
  display: flex;
  align-items: center;
  margin: 0 auto 40px auto;
}

.categories-line {
  flex-grow: 1;
  height: 2px;
  background-color: rgba(221, 221, 221, 1);
  margin-left: 32px;
}

.categories-nav {
  background-color: rgba(156, 156, 156, 1);
  border: none;
  color: white;
  width: 238px;
  height: 46px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

p {
  margin: 0;
}

.categories-top h3 {
  font-weight: 500;
  font-size: 64px;
  line-height: 75.84px;
}

.products {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product {
  height: 364px;
  position: relative;
  cursor: pointer;
}

.discount {
  position: absolute;
  background-color: rgba(2, 146, 29, 1);
  border-radius: 5px;
  width: 53px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 22px;
  top: 27px;
  color: white;
}

.bacground-sofa {
  background-color: rgba(221, 221, 221, 0.8667);
  border-radius: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.price {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 35px;
}

.price p {
  font-size: 40px;
  font-weight: 500;
  line-height: 47.4px;
  display: flex;
  align-items: center;
}

.old-price {
  color: rgba(0, 0, 0, 0.52);
  text-decoration: line-through;
}
</style>
