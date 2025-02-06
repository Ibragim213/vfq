<template>
  <div class="product-container">
    <div class="product-image">
      <img :src="product.image" alt="Изображение товара" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <p class="material"><strong>Материал обивки:</strong> {{ product.material }}</p>

      <div class="colors">
        <p><strong>Цвет:</strong>{{ product.color }}</p>
        <span
        ></span>
      </div>

      <div class="sizes">
        <p><strong>Размеры:</strong></p>
        <ul>
          <li v-for="(size, key) in product.sizes" :key="key">
            • <strong>{{ key }}:</strong> {{ size }}
          </li>
        </ul>
      </div>

      <div class="price-section">
        <span class="price">{{ product.price }} ₽</span>
        <span class="old-price">{{ product.oldPrice }} ₽</span>
      </div>

      <div class="description">
        <p><strong>Описание</strong></p>
        <p>{{ product.description }}</p>
        <a href="#">Подробнее</a>
      </div>

      <div class="quantity">
        <button @click="decreaseQuantity">-</button>
        <span>{{ quantity }}</span>
        <button @click="increaseQuantity">+</button>
      </div>

      <button class="add-to-cart" @click="addToCart(product)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      product: {},
      quantity: 1,
    };
  },
  methods: {
    fetchProduct(id) {
      axios
        .get(`http://localhost:8080/api/products/${id}`) // Используем id из маршрута
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.error("Ошибка при загрузке товара:", error);
        });
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    increaseQuantity() {
      this.quantity++;
    },
    addToCart(product) {
      // Логика добавления товара в корзину
      console.log("Товар добавлен в корзину:", product);
    },
  },
  mounted() {
    const route = useRoute();
    const productId = route.params.id; // Получаем id из маршрута
    this.fetchProduct(productId); // Загружаем данные товара
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  gap: 20px;
  max-width: 900px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.product-image img {
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.product-details {
  flex: 1;
}

h1 {
  font-size: 24px;
}

.material {
  font-size: 16px;
  font-weight: bold;
}

.colors {
  display: flex;
  align-items: center;
  gap: 10px;
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #aaa;
  display: inline-block;
}

.sizes {
  margin-top: 10px;
}

.price-section {
  font-size: 24px;
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  color: gray;
  margin-left: 10px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.quantity button {
  width: 30px;
  height: 30px;
  font-size: 18px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.add-to-cart {
  background-color: #4b564d;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>