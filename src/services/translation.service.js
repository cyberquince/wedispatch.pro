import { createI18n } from 'vue-i18n';
import ru from '../locales/ru.json';
import en from '../locales/en.json';
import ro from '../locales/ro.json';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ru,
    en,
    ro,
  },
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric', month: 'long', day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    ru: {
      short: {
        year: 'numeric', month: 'numeric', day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
    ro: {
      short: {
        year: 'numeric', month: 'numeric', day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
  },
});
