import { createRouter, createWebHistory } from 'vue-router';

// Импортируем страницы
import MainPage from '@/pages/MainPage.vue';
import NewPage from '@/pages/NewPage.vue';
import StorePage from '@/pages/StorePage.vue';
import OnasSection1 from '@/components-mainpage/OnasSection1.vue';

import ProductsPage from './store/ProductsPage.vue';
import RegisterSection from './components-mainpage/RegisterSection.vue';
import LoginSection from './components-mainpage/LoginSection.vue';
import TovarPage from './pages/TovarPage.vue';
import UserPage from './pages/UserPage.vue';

// Определяем маршруты
const routes = [
  { path: '/', component: ProductsPage },
  { path: '/product/:id', component: TovarPage, props: true },
  { path: '/new', name: 'NewPage', component: NewPage },
  { path: '/home', name: 'HomePage', component: MainPage },
  { path: '/tovar', name: 'TovarPage', component: TovarPage },
  { path: '/store', name: 'StorePage', component: StorePage },
  {
    path: "/user",
    name: "user",
    component: UserPage,
    meta: { requiresAuth: true },  // Требуется аутентификация для этой страницы
  },
  { path: '/register', name: 'RegisterPage', component: RegisterSection },
  { path: '/login', name: 'LoginPage', component: LoginSection },
  { path: '/onas', name: 'OnasPage', component: OnasSection1 }
];

// Создаем роутер
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Перехватчик для проверки аутентификации
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');  // Проверка токена в localStorage
  if (to.meta.requiresAuth && !token) {
    // Если страница требует авторизации и токен отсутствует, перенаправляем на страницу входа
    next('/login');
  } else {
    next();
  }
});

export default router;
