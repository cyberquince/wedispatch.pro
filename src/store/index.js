import { createStore } from 'vuex';
import i18n from '../services/translation.service';

export default createStore({
  state: {
    locale: localStorage.getItem('locale') || null,
    countryCode: localStorage.getItem('countryCode') || null,
  },
  getters: {
    locale: (state) => state.locale,
    countryCode: (state) => state.countryCode,
  },
  mutations: {
    setLocale(state, locale) {
      localStorage.setItem('locale', locale);
      state.locale = locale;
    },
    setCountry(state, countryCode) {
      localStorage.setItem('countryCode', countryCode);
      state.countryCode = countryCode;
    },
  },
  actions: {
    changeLocale({ commit }, locale) {
      i18n.global.locale = locale;
      commit('setLocale', locale);
    },
    async fetchLocale({ commit }) {
      localStorage.setItem('locale', navigator.language);
      commit('setLocale', navigator.language);
      return navigator.language;
    },
    async fetchCountry({ commit }) {
      try {
        const endpoint = process.env.NODE_ENV === 'production' ? 'https://api.country.is' : '/ip';
        const response = await fetch(endpoint);
        const data = await response.json();
        commit('setCountry', data.country);
      } catch (err) {
        console.error('Failed to getch country: ', err);
      }
    },
  },
  modules: {
  },
});
