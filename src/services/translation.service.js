import { createI18n } from 'vue-i18n';
import ru from '../locales/ru.json';
import en from '../locales/en.json';
import ro from '../locales/ro.json';

export default createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    ru,
    en,
    ro,
  },
});
