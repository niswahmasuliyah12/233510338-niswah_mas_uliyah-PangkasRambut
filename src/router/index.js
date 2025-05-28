import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../components/Dashboard.vue';
import Services from '../components/Services.vue';
import Booking from '../components/Booking.vue';
import CheckStatus from '../components/CheckStatus.vue';
import About from '../components/About.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', redirect: '/login' }, // default awal ke login
  { path: '/Dashboard', component: Dashboard },
  { path: '/services', component: Services },
  { path: '/booking', component: Booking },
  { path: '/status', component: CheckStatus },
  { path: '/about', component: About },
  { path: '/login', component: Login }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
