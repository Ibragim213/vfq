<template>
  <!-- слайдер -->
  <section style="margin-top: 120px;">
    <div class="slider-container">
      <div class="slider">
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <img v-for="(slide, index) in slides" :key="index" :src="slide" alt="слайд" class="slide">
        </div>
      </div>
      <button class="prev" @click="prevSlide"></button>
      <button class="next" @click="nextSlide"></button>
      <div class="indicators">
        <span v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"></span>
      </div>
     <router-link to="/store"><button class="custom-button"><a href="">Перейти</a></button></router-link> 
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';



const slides = [
  new URL('@/assets/img/slider1.png', import.meta.url).href,
  new URL('@/assets/img/item4.png', import.meta.url).href,
  new URL('@/assets/img/item3.png', import.meta.url).href,
];


const currentIndex = ref(0);


const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

</script>

<style scoped>
/* слайдер */
.slider-container {
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;

}

.slider {
  position: relative;
  width: 100%;
  overflow: hidden;

  border: 2px solid #ccc;
  border-radius: 10px;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.slide img {
  width: 100%;
  display: block;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  background-color: transparent;
  border: none;
  height: 77px;
  width: 81px;
  background-size: cover;
  padding: 0;
}

.prev:hover,
.next:hover {
  border: 2px solid rgb(0, 0, 0);
}

.prev {
  left: -154px;
  background-image: url('/src/assets/img/prev.png');
}

.next {
  right: -154px;
  background-image: url('/src/assets/img/next.png');
}

.indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicators span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicators span.active {
  background-color: #333;
}

.custom-button {
  display: block;
  width: 230px;
  height: 45px;
  margin: 20px auto 0;
  padding: 10px;
  background-color: rgba(75, 75, 75, 1);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.custom-button:hover {
  background-color: rgb(41, 41, 41);
  border: 2px solid yellow;
}

.custom-button a {
  color: white;
}
</style>