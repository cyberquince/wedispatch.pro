import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CareersView from '../views/CareersView.vue';
import ServicesView from '../views/ServicesView.vue';
import ContactsView from '../views/ContactsView.vue';
import ConsentView from '../views/ConsentView.vue';
import PrivacyView from '../views/PrivacyView.vue';
import FaqView from '../views/FaqView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/careers',
    name: 'careers',
    component: CareersView,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
  {
    path: '/consent',
    name: 'consent',
    component: ConsentView,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyView,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
});

export default router;
