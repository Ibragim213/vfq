<template>
  <div class="auth-container">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <input v-model="user.firstName" placeholder="Имя" required />
      <input v-model="user.lastName" placeholder="Фамилия" required />
      <input v-model="user.email" type="email" placeholder="Email" required />
      <input v-model="user.phoneNumber" type="tel" placeholder="Телефон" required />
      <input v-model="user.password" type="password" placeholder="Пароль" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        await axios.post("http://localhost:8080/api/auth/register", this.user);
        alert("Регистрация успешна! Теперь войдите в аккаунт.");
        this.$router.push("/login");
      } catch (error) {
        alert("Ошибка регистрации: " + (error.response?.data || "Попробуйте снова"));
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
