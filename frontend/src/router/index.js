import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';

const routes = [
  {
    path: '/:anchor?',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Check if the route has a hash (which would be an anchor link)
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' });
        }, 500); // delay to account for Vue's rendering time
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;

