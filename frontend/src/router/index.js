import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Resume from '../views/Resume.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

