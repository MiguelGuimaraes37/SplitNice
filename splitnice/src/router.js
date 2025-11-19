import { createMemoryHistory, createRouter } from 'vue-router';

const UserAuth = () => import('@/pages/auth/UserAuth.vue');

const routes = [
  { path: '/', redirect: '/UserAuth' },
  { path: '/UserAuth', component: UserAuth },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
