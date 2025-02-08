<template>
  <footer style="margin-top: 150px;">
    <div class="grid container">
      <div class="left">
        <div class="header__logo" style="margin-top: 19px;">
          <h1 class="mebel">Мебельный</h1>
          <h2>мир</h2>
        </div>
        <div class="images">
          <a href="https://ok.ru/profile/591551616276"><img src="@/assets/img/whatsapp.png" alt="WhatsApp"></a>
          <a href="https://t.me/ibraim_05"><img src="@/assets/img/telegram.png" alt="Telegram"></a>
          <a href="#"><img src="@/assets/img/ok.png" alt="Одноклассники"></a>
        </div>
      </div>

      <div class="right">
        <div class="one-item">
          <router-link to="/home"><li>Главная страница</li></router-link>
          <router-link to="/store">  <a href="#"><p>Новые поступления</p></a></router-link>
          <router-link to="/store"> <a href="#"><p>Хиты продаж</p></a></router-link>
          <router-link to="/store"><li>Товары</li></router-link>
          <a href="#"><p>Категории</p></a>
        </div>
        <div class="two-item">
          <router-link to="/store"><a href="#">Категории</a></router-link>
            <router-link to="/store"> <a href="#"><p>Стулья</p></a></router-link>
              <router-link to="/store"> <a href="#"><p>Диваны</p></a></router-link>
                <router-link to="/store"><a href="#"><p>Кресла</p></a></router-link>
                  <router-link to="/store">   <a href="#"><p>Кровати</p></a></router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* подвал */
footer {
  background-color: rgba(217, 217, 217, 1);
  height: 401px;
}

.grid {
  display: grid;
  grid-template-columns: 252px auto;
  column-gap: 384px;
}

.left {
  grid-column: 1;
}

.right {
  grid-column: 2;
  display: flex;
  margin-top: 100px;
  gap: 200px;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.44px;
}

.right p {
  margin-bottom: 20px;
}
.mebel {
    color: #FFAD4C;
    margin-right: 5px;
}
.header__logo {
    display: flex;
    align-items: center;
}
.images {
  margin-top: 208px;
}

.images img {
  margin-right: 23px;
}
</style>

<script setup>
// import router from '@/router';
// тут скрипт
</script>
