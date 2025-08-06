import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/widget',
      name: 'widget',
      children: [
        {
          path: 'checkout',
          name: 'widget-checkout',
          component: () => import('../pages/widget/WidgetCheckout.vue'),
        },
        {
          path: 'success',
          name: 'widget-success',
          component: () => import('../pages/widget/WidgetSuccess.vue'),
        },
      ],
    },
  ],
});

export default router;
