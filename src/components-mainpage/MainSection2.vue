<template>
  <section>
    <h3 class="custom-txt container">Новая линия для вашего дома</h3>

    <div class="items container">
      <div class="item">
        <div class="bacground">
          <img src="@/assets/img/item1.png" alt="">
        </div>
        <p>Кресло "Классик"</p>
        <p>Кресло с натуральной деревянной основой и экологически чистыми материалами. Его лаконичный дизайн легко
          впишется в любой интерьер, добавляя ему тепла и уюта.</p>
      </div>
      <div class="item">
        <div class="bacground">
          <img src="@/assets/img/item2.png" alt="кресло">
        </div>
        <p>Кресло "Минимал"</p>
        <p>Классическое кресло с изысканными деталями и комфортной посадкой. Подходит как для домашнего использования,
          так и для ресторанов или кафе, создавая атмосферу уюта.</p>
      </div>
      <div class="item">
        <div class="bacground">
          <img src="@/assets/img/item3.png" alt="кресло">
        </div>
        <p>Кресло "Эко"</p>
        <p>Современное кресло с простыми линиями и стильным оформлением. Идеально подходит для чтения или отдыха,
          сочетает в себе функциональность и эстетику.</p>
      </div>
      <div class="item">
        <div class="bacground">
          <img src="@/assets/img/item4.png" alt="диван">
        </div>
        <p>Диван "Комфорт"</p>
        <p>Элегантный и уютный диван с мягкой обивкой, идеально подходит для создания уюта в вашем доме. Удобные подушки
          и современный дизайн сделают ваш отдых по-настоящему комфортным.</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* вторая секция */
.container {
  width: 1800px;
  margin: 0 auto;
}

.custom-txt {
  font-size: 64px;
  font-weight: 500;
  line-height: 75.84px;
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

.item:hover {
  transform: scale(1.06);
}

/* при наведении */
.item:hover .bacground {
  background: #9A99D4;
}

.item:hover p:nth-child(2) {
  color: red;
}

.bacground {
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

.item:nth-child(1) img {
  width: 82%;
}
</style>
<script setup>
// тут скрипт
</script>