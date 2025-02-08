<template>
  <header>
    <div class="header__logo">
      <h1 class="mebel">Мебельный</h1>
      <h2>мир</h2>
    </div>
    <nav class="header__nav">
      <ul>
        <router-link to="/home"><li>Главная страница</li></router-link>
        <router-link to="/store"><li>Товары</li></router-link>
      <router-link to="/onas"> <li>Контакты</li></router-link>
      </ul>
    </nav>
    <div class="header__actions">
      <li>
        <img class="btn corzina" src="@/assets/img/8674457_ic_fluent_cart_regular_icon.png" alt="Корзина">
        <span id="cart-counter">{{ cartCounter }}</span>
      </li>
      <a href="#" class="cart-icon">
       <router-link to="/user"> <img src="@/assets/img/8675143_ic_fluent_person_regular_icon (1).png" alt="Профиль"> </router-link>
      </a>
    </div>
  </header>
</template>

<script setup>

import { defineProps } from 'vue';
defineProps({ cartCounter: Number });
</script>
<style scoped>
/* Общие стили для хедера */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  top: 0;
  z-index: 1000;
}

/* Логотип */
.header__logo {
  display: flex;
  align-items: center;
}

.mebel {
  color: #FFAD4C;
  margin-right: 5px;
}

/* Навигация */
.header__nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.header__nav a {
  text-decoration: none;
  color: #333;
}

/* Действия (иконки корзины и профиля) */
.header__actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cart-icon img,
.corzina {
  height: 32px;
  width: 32px;
}

.phoro {
  width: 100%;         /* Растягиваем на всю доступную ширину */
  max-width: 700px;    /* Ограничиваем максимальную ширину */
  height: auto;        /* Поддержка пропорций */
  object-fit: contain; /* Гарантирует, что фото впишется без обрезки */
  display: block;
  margin: 0 auto;      /* Центрируем изображение */
}

/* Адаптивность */
@media (max-width: 768px) {
  .header__nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header__nav.active {
    display: flex;
  }

  .header__burger {
    display: flex;
  }
}
</style>
