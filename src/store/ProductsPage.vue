<template>
  <div>
    <HeaderComponent :cartCounter="cartCounter" />
    <div class="filter-container container">
      <h2>Фильтр</h2>
      <label class="filter-label">Тип мебели:</label>
      <select v-model="filters.type">
        <option value="">Все</option>
        <option value="кресло">Кресла</option>
        <option value="диван">Диваны</option>
      </select>

      <label class="filter-label">Материал:</label>
      <select v-model="filters.material">
        <option value="">Все</option>
        <option value="Дерево">Дерево</option>
        <option value="Металл">Металл</option>
      </select>

      <label class="filter-label">Цвет:</label>
      <select v-model="filters.color">
        <option value="">Все</option>
        <option value="светлый">Светлые</option>
        <option value="темный">Темные</option>
        <option value="яркий">Яркие</option>
      </select>

      <label class="filter-label">Цена:</label>
      <input type="number" v-model.number="filters.priceFrom" placeholder="От" />
      <input type="number" v-model.number="filters.priceTo" placeholder="До" />

      <label class="filter-label">Наличие:</label>
      <select v-model="filters.availability">
        <option value="">Все</option>
        <option value="в наличии">В наличии</option>
        <option value="под заказ">Под заказ</option>
      </select>

      <button class="btn" @click="applyFilter">Применить фильтр</button>
      <button class="btn" @click="resetFilters">Сбросить фильтр</button>
    </div>

    <div class="container">
      <div class="card-container">
        <div class="card" v-for="card in filteredCards" :key="card.id">
          <router-link :to="`/product/${card.id}`" class="card-link">
            <div class="card-body">
              <img class="img" :src="card.image" :alt="card.name" />
              <h2 class="card-title">{{ card.title }}</h2>
              <p class="card-text">{{ card.name }}</p>
              <p class="card-text">Цена: {{ card.price }} руб.</p>
              <p class="card-text">Материал: {{ card.material }}</p>
              <p class="card-text">Цвет: {{ card.color }}</p>
              <p class="card-text">
                Наличие: {{ card.availability === 'in-stock' ? 'В наличии' : 'Под заказ' }}
              </p>
            </div>
          </router-link>
          <button class="btn" @click="addToCart(card)">Добавить в корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';

// Состояние корзины и счетчика
const cart = ref([]);
const cartCounter = ref(0);

// Состояние товаров
const products = ref([]);

// Фильтры
const filters = ref({
  type: '',
  material: '',
  color: '',
  priceFrom: null,
  priceTo: null,
  availability: '',
});

// Загрузка товаров при монтировании компонента
onMounted(async () => {
  try {
    console.log('Загрузка товаров...');
    const response = await axios.get('http://localhost:8080/api/products');
    console.log('Товары загружены:', response.data);
    products.value = response.data;
  } catch (error) {
    console.error('Ошибка загрузки данных:', error.response || error);
    alert('Не удалось загрузить данные с сервера.');
  }
});

// Фильтрация товаров
const filteredCards = computed(() => {
  return products.value.filter((card) => {
    const matchesType = !filters.value.type || card.type === filters.value.type;
    const matchesMaterial = !filters.value.material || card.material.toLowerCase().includes(filters.value.material.toLowerCase());
    const matchesColor = !filters.value.color || card.color.toLowerCase().includes(filters.value.color.toLowerCase());
    const matchesPriceFrom = !filters.value.priceFrom || card.price >= filters.value.priceFrom;
    const matchesPriceTo = !filters.value.priceTo || card.price <= filters.value.priceTo;
    const matchesAvailability = !filters.value.availability || card.availability === filters.value.availability;

    return matchesType && matchesMaterial && matchesColor && matchesPriceFrom && matchesPriceTo && matchesAvailability;
  });
});

// Применение фильтров
function applyFilter() {
  console.log('Примененные фильтры:', filters.value);
  console.log('Отфильтрованные товары:', filteredCards.value);
}

// Сброс фильтров
function resetFilters() {
  filters.value = {
    type: '',
    material: '',
    color: '',
    priceFrom: null,
    priceTo: null,
    availability: '',
  };
}

// Добавление товара в корзину
function addToCart(card) {
  const existingItem = cart.value.find((item) => item.id === card.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({ id: card.id, name: card.title, price: card.price, quantity: 1 });
  }
  cartCounter.value = cart.value.reduce((acc, item) => acc + item.quantity, 0);
}
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 250px;
}

.card-link {
  text-decoration: none;
  color: inherit;
}
.img{

  width: 100%;
}
.btn {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
}
</style>