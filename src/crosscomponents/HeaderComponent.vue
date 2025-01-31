<template>
  <header class="header">
    <div class="header__logo">
      <h1 class="mebel">Мебельный</h1>
      <h2>мир</h2>
    </div>
    <nav class="header__nav">
      <ul>
        <router-link to="/home"><li>Главная страница</li></router-link>
        <router-link to="/store"><li>Товары</li></router-link>
        <li>О нас</li>
        <li>Контакты</li>
      </ul>
    </nav>
    <div class="header__actions">
      <li>
        <img class="btn corzina" src="@/assets/img/8674457_ic_fluent_cart_regular_icon.png" alt="Корзина">
        <span id="cart-counter">{{ cartCounter }}</span>
      </li>
      <a href="#" class="cart-icon">
        <img src="@/assets/img/8675143_ic_fluent_person_regular_icon (1).png" alt="Профиль">
      </a>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({ cartCounter: Number });
</script>

<style scoped>

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}
.mebel {
  color: #FFAD4C;
  margin-right: 5px;
}
ul, li {
  padding: 0;
}
.photo_karzina{
  width: 24px;
  height: 24px;
}

.header__logo .logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

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

.header__actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.header__logo {
  display: flex;
  align-items: center;
}

.cart-icon img {
  height: 24px;
}

.header__burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.header__burger span {
  width: 24px;
  height: 2px;
  background-color: #333;
}

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

.corzina {
  height: 24px;
}

.mebel {
  color: #FFAD4C;
  margin-right: 5px;
}

ul,
li {
  Padding: 0;
}



.phoro {
  width: 700px;
  height: 650px;
}
</style>
