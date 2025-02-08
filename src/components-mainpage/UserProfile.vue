<template>
    <div class="user-profile">
      <h2>Профиль пользователя</h2>
      <div v-if="user">
        <p><strong>Имя:</strong> {{ user.firstName }}</p>
        <p><strong>Фамилия:</strong> {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Телефон:</strong> {{ user.phoneNumber }}</p>
        <!-- Добавьте дополнительные поля, если нужно -->
      </div>
      <div v-else>
        <p>Вы не авторизованы. Пожалуйста, <router-link to="/login">войдите</router-link>.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserProfile',
    data() {
      return {
        user: null,
        error: null,
      };
    },
    created() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        const token = localStorage.getItem('token');
        if (!token) {
          this.error = 'Токен не найден';
          this.user = null;
          return;
        }
        try {
          const response = await axios.get('http://localhost:8080/api/user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.user = response.data;
        } catch (error) {
          console.error("Ошибка получения данных пользователя", error);
          this.error = 'Ошибка получения данных пользователя';
          this.user = null;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    padding: 20px;
  }
  .user-profile h2 {
    margin-bottom: 20px;
  }
  .user-profile p {
    margin: 5px 0;
  }
  </style>
  