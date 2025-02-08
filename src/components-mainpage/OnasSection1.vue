<template>
    <div class="contact-container" style="margin-top: 20px;">
      <div class="contact-info">
        <h2>Контакты</h2>
        <p><strong>Адрес:</strong> 426011 г. Ижевск, ул. Пушкинская, 290</p>
        <p><strong>E-mail:</strong> <a href="mailto:5078096@mail.ru">5078096@mail.ru</a></p>
        <p><strong>Телефон:</strong> <a href="tel:+79829939005">+7 982 993 90 05</a></p>
        <p><strong>Время работы:</strong> пн - пт с 10:00 - 19:00</p>
        <p><strong>Социальные сети:</strong>
          <a href="#">📧</a>
          <a href="#">📱</a>
          <a href="#">💬</a>
        </p>
      </div>
      
      <div class="contact-form">
        <h2>Задать вопрос</h2>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <input v-model="name" type="text" placeholder="Как вас зовут?" required />
          </div>
          <div class="input-group">
            <input v-model="email" type="email" placeholder="E-mail" required />
          </div>
          <div class="input-group">
            <span class="icon">📞</span>
            <input v-model="phone" type="tel" placeholder="+7 (___) ___-__-__" required @input="formatPhone" />
          </div>
          <p v-if="phoneError" class="error">Введите корректный номер</p>
          <div class="input-group">
            <textarea v-model="message" placeholder="Сообщение" required></textarea>
          </div>
          <button type="submit">Отправить</button>
        </form>
        <p v-if="successMessage" class="success">С вами свяжется менеджер!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        message: "",
        successMessage: "",
        phoneError: false
      };
    },
    methods: {
      formatPhone() {
        let numbers = this.phone.replace(/\D/g, '').slice(0, 11);
        let formatted = "+7 ";
        if (numbers.length > 1) {
          formatted += `(${numbers.slice(1, 4)}`;
        }
        if (numbers.length >= 5) {
          formatted += `) ${numbers.slice(4, 7)}`;
        }
        if (numbers.length >= 8) {
          formatted += `-${numbers.slice(7, 9)}`;
        }
        if (numbers.length >= 10) {
          formatted += `-${numbers.slice(9, 11)}`;
        }
        this.phone = formatted;
        this.phoneError = numbers.length < 11;
      },
      submitForm() {
        if (this.phone.replace(/\D/g, '').length < 11) {
          this.phoneError = true;
          return;
        }
        this.successMessage = "С вами свяжется менеджер!";
        this.phoneError = false;
        setTimeout(() => {
          this.successMessage = "";
        }, 3000);
        
        // Очистка полей формы
        this.name = "";
        this.email = "";
        this.phone = "";
        this.message = "";
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
  margin-top:  20px; ;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    max-width: 800px;
    margin: auto;
  }
  .contact-info {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .contact-form {
    max-width: 400px;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .input-group {
    display: flex;
    align-items: center;
    background: white;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }
  .input-group .icon {
    margin-right: 10px;
  }
  input, textarea {
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
    background: none;
  }
  textarea {
    resize: none;
    height: 80px;
  }
  button {
    background-color: #2c3e50;
    color: white;
    border: none;
    cursor: pointer;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
  }
  button:hover {
    background-color: #1a252f;
  }
  .success {
    color: green;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
  }
  .error {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
  }
  </style>
  