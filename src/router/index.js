import { createRouter, createWebHistory } from 'vue-router';
import PayView from '../views/PayView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pay',
      component: PayView,
    },
  ],
});

export default router;
