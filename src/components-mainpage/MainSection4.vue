<template>
 

<!-- Распродажа -->
<section style="margin-top: 120px;">
  <div class="categories-top ">
    <h3>Распродажа</h3>
    <div class="categories-line"></div>
    <button class="categories-nav">
      <p>Все товары</p>
    </button>
  </div>

  <div class="products container">

    <div class="product">
      <div class="bacground-sofa">
       <a href=""><img src="/img/sofa1.png" alt=""></a> 
       <a href=""> <p class="discount">-50%</p></a>
      </div>
      <div class="price">
        <a href=""><p>10000 <img src="/img/ruble.png" alt="рублей"></p></a>
      <a class="" href=""><p>20000<img src="/img/ruble.png" alt="рублей"></p></a>  
      </div>
    </div>
    <div class="product">
      <div class="bacground-sofa">
       <a href=""><img src="/img/sofa2.png" alt=""></a> 
      <a href=""><p class="discount">-50%</p></a>  
      </div>
      <div class="price">
        <a href=""><p>10000 <img src="/img/ruble.png" alt="рублей"></p></a>
        <a href=""><p>20000<img src="/img/ruble.png" alt="рублей"></p></a>
      </div>
    </div>
    <div class="product">
      <div class="bacground-sofa">
        <a href="#"><img src="/img/sofa3.png" alt=""></a>
        <a href="#"><p class="discount">-50%</p></a>
      </div>
      <div class="price">
        <a href=""><p>10000 <img src="/img/ruble.png" alt="рублей"></p></a>
        <a href=""><p>20000<img src="/img/ruble.png" alt="рублей"></p></a>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>


/* распродажа */
.categories-top {
  display: flex;
  align-items: center;
  margin: 0 auto 40px auto;
  width: 1670px;

}

.categories-line {
  flex-grow: 1;
  height: 2px;
  background-color: rgba(221, 221, 221, 1);
  margin-left: 32px;
}

.categories-nav {
  background-color: transparent;
  background-color: rgba(156, 156, 156, 1);
  border: none;
  color: white;
  width: 238px;
  height: 46px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

p {
  margin: 0;
}

.categories-top h3 {
  font-weight: 500;
  font-size: 64px;
  line-height: 75.84px;
}

.products {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product {
  height: 364px;
  position: relative;
}

.discount {
  position: absolute;
  background-color: rgba(2, 146, 29, 1);
  border-radius: 5px;
  width: 53px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 22px;
  top: 27px;
  color: white;

}

.bacground-sofa {
  background-color: rgba(221, 221, 221, 0.8667);
  border-radius: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 1);
}

.price {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 35px;
}

.price p {
  font-size: 40px;
  font-weight: 500;
  line-height: 47.4px;
  display: flex;
  align-items: center;

}

.price a:nth-child(2) {
  color: rgba(0, 0, 0, 0.52);
  text-decoration: line-through;

}
</style>
<script setup>
// тут скрипт
 </script>