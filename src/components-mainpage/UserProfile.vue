<template>
  <div>
    <h1>Профиль пользователя</h1>
    <div v-if="user">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Имя:</strong> {{ user.firstName }}</p>
      <p><strong>Фамилия:</strong> {{ user.lastName }}</p>
      <p><strong>Телефон:</strong> {{ user.phoneNumber }}</p>
    </div>
    <div v-else>
      <p>Загрузка данных о пользователе...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const user = ref(null);

    onMounted(async () => {
      try {
        console.log('Загрузка данных о пользователе...');

        // Получаем токен из localStorage
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:8080/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Данные о пользователе загружены:', data);
          user.value = data;
        } else {
          console.error('Ошибка загрузки данных:', response.statusText);
          alert('Не удалось загрузить данные с сервера.');
        }
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        alert('Не удалось загрузить данные с сервера.');
      }
    });

    return { user };
  },
};
</script>

<style scoped>
</style>
