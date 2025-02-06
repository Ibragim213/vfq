import { createRouter, createWebHistory } from 'vue-router';

// Импортируем страницы
import MainPage from '@/pages/MainPage.vue';
import NewPage from '@/pages/NewPage.vue';
import StorePage from '@/pages/StorePage.vue';
import OnasSection1 from '@/components-mainpage/OnasSection1.vue';
import OtzivSection from '@/components-mainpage/OtzivSection.vue';
import ProductsPage from './store/ProductsPage.vue';
import RegisterSection from './components-mainpage/RegisterSection.vue';
import LoginSection from './components-mainpage/LoginSection.vue';

// Определяем маршруты
const routes = [
  { path: '/', component: ProductsPage },
  { path: '/product/:id', component: OtzivSection, props: true },
  { path: '/new', name: 'NewPage', component: NewPage },
  { path: '/home', name: 'HomePage', component: MainPage },
  { path: '/store', name: 'StorePage', component: StorePage },
  { path: '/register', name: 'RegisterPage', component: RegisterSection },
  { path: '/login', name: 'LoginPage', component: LoginSection },
  { path: '/onas', name: 'OnasPage', component: OnasSection1 }
];

// Создаем роутер
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
