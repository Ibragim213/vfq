<template>
  <footer>
    <!-- подвал -->
    <footer style="margin-top: 150px;">
      <div class="grid container">
        <div class="left">
          <div class="header__logo" style="margin-top: 19px;">
            <h1 class="mebel">Мебельный</h1>
            <h2>мир</h2>
          </div>
          <div class="images">
            <a href="https://ok.ru/profile/591551616276"> <img src="@/assets/img/whatsapp.png" alt=""></a>
            <a href="https://t.me/ibraim_05"><img src="@/assets/img/telegram.png" alt=""></a>
            <a href=""><img src="@/assets/img/ok.png" alt=""></a>
          </div>
        </div>

        <div class="right">
          <div class="one-item">
            <p>Меню</p>
            <a href="">
              <p>Новые поступления</p>
            </a>
            <a href="">
              <p>Хиты продаж</p>
            </a>
            <a href="">
              <p>Все товары</p>
            </a>
            <a href="">
              <p>Категории</p>
            </a>
          </div>
          <div class="two-item">
            <a href="#">
              <p>Категории</p>
            </a>
            <a href="#">
              <p>Стулья</p>
            </a>
            <a href="#">
              <p>Диваны</p>
            </a>
            <a href="#">
              <p>Кресла</p>
            </a>
            <a href="#">
              <p>Кровати</p>
            </a>
          </div>
        </div>
      </div>



    </footer>
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

.images {
  margin-top: 208px;
}

.images img {
  margin-right: 23px;
}
</style>
<script setup>
// тут скрипт
</script>