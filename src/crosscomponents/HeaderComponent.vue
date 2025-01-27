<template>
    <header>
        <header class="header">
    <div class="header__logo">
      <h1 class="mebel">Мебельный</h1>
      <h2>мир</h2>
    </div>
    <nav class="header__nav">
      <ul>
        <li><a href="#">Главная страница</a></li>
        <li><a href="#">Товары</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
    <div class="header__actions">
      <a href="#" ><img class="corzina" src="/src/assets/img/8674457_ic_fluent_cart_regular_icon.png" alt=""></a>
      <a href="#" class="cart-icon">
        <img src="src/assets/img/8674457_ic_fluent_cart_regular_icon.png" alt="">
      </a>
      <div class="header__burger" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>

    </header>
</template>

<style scoped>


.header {
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
<script setup>

 </script>