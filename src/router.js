// тут у нас атрибуты страницы в виде маисва

import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../src/pages/MainPage.vue'
// тут мы создаем адрес страницы и куда переходим
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: MainPage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

