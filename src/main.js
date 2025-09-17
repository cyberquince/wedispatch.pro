import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './services/translation.service';
import '@/assets/main.scss';

createApp(App).use(i18n).use(store).use(router)
  .mount('#app');
