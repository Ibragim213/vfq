<template>

  <section class="vtoroe container">
    <div class="vtoroe2">
      <div class="vtoroe3">
        <div class="gapq">
          <h1>
            Создавая мебель для будущего <br>
            с неподвластным времени дизайном.
          </h1>
        </div>
        <div class="aa">
          <a class="a2" href="#">Посмотреть товары</a>
        </div>
        <p class="pa">
          В нашем бренде мы верим, что мебель — это не просто предметы интерьера,<br> а отражение вашего стиля и
          индивидуальности. Мы предлагаем уникальные <br> решения, которые гармонично вписываются в любой интерьер,
          оставаясь <br> актуальными на протяжении многих лет.
        </p>
      </div>

      <div class="intro_image">
        <img class="gf" src="@/assets/img/Group 1.png" alt="">
      </div>
    </div>
  </section>

</template>
<style scoped>
/* тут ты пишешь стили, как в обычяном css */

.pa {
  margin-top: 50px;
}

.phoro {
  width: 700px;
  height: 650px;
}

.vtoroe {
  margin-top: 80px
}

.button {
  background-color: #9A99D4;
  color: black;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: auto;
  /* Прижимаем кнопку к нижней части */
  align-self: flex-start;
  /* Выравниваем кнопку по левому краю */
}

.pd {
  margin-top: 30px;
  font-weight: bold;
}

.vtoroe2 {
  background-color: #2a254b;
  color: #ffff;
  justify-content: space-between;
  display: flex;
  margin-bottom: 120px;
  width: 100%;
margin-top: 50px;
}

.vtoroe3 {
  margin-left: 60px;
  margin-right: 98px;
}

.gapq {
  justify-content: space-between;
  margin-bottom: 41px;
  margin-top: 60px;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.gf {
  width: 100%;          /* Растягиваем изображение на всю доступную ширину */
  max-width: 520px;     /* Ограничиваем максимальную ширину */
  height: auto;         /* Поддержка пропорций */
  object-fit: contain;  /* Гарантирует, что фото впишется без обрезки */
  display: block;
  margin: 0 auto;       /* Центрируем изображение */
}


.a2 {
  background-color: rgba(249, 249, 249, 0.15);
  padding: 16px;
  text-decoration: none;
  color: #fff;
}
</style>
<script setup>
// тут скрипт
</script>