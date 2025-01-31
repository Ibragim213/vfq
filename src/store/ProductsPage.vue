<template>
    <HeaderComponent :cartCounter="cartCounter" />
  
    <div class="filter-container">
      <h2>Фильтр</h2>
      <label>Тип мебели:</label>
      <select v-model="filters.type">
        <option value="">Все</option>
        <option value="chair">Кресла</option>
        <option value="sofa">Диваны</option>
      </select>
        
      <button @click="applyFilter">Применить фильтр</button>
    </div>
  
    <div class="container">
      <div class="card-container">
        <div class="card" v-for="(card, index) in filteredCards" :key="index">
          <img src="https://via.placeholder.com/200" alt="">
          <div class="card-body">
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-text">{{ card.description }}</p>
            <p class="card-text">Цена: {{ card.price }} руб.</p>
            <button class="btn" @click="addToCart(card)">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import HeaderComponent from '@/crosscomponents/HeaderComponent.vue';
  
  const cart = ref([]);
  const cartCounter = ref(0);
  const filters = ref({ type: '' });
  
  const cards = ref([
    { type: 'chair', title: 'Кресло 1', price: 100, description: 'Удобное кресло.' },
    { type: 'sofa', title: 'Диван 1', price: 200, description: 'Комфортный диван.' }
  ]);
  
  const filteredCards = computed(() => {
    return cards.value.filter(card => !filters.value.type || card.type === filters.value.type);
  });
  
  function addToCart(card) {
    const existingItem = cart.value.find(item => item.name === card.title);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({ name: card.title, price: card.price, quantity: 1 });
    }
    cartCounter.value = cart.value.reduce((acc, item) => acc + item.quantity, 0);
  }
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    gap: 20px;
  }
  .card {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
  }
  </style>
  