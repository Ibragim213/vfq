// тут у нас атрибуты страницы в виде маисва

import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../src/pages/MainPage.vue'
import NewPage from './pages/NewPage.vue';
import StorePage from './pages/StorePage.vue'

// тут мы создаем адрес страницы и куда переходим
const routes = [
  {
path: '/new',
name: 'NewPage',
component: NewPage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: MainPage,
  },
  {
    path: '/store',
    name: 'StorePage',
    component: StorePage,
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;