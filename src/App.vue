<template>
  <Header @burger-opened="(n) => burgerOpened = n" />
  <Modal ref="appModal" :modal-props="modalProps" :component="component" />
  <router-view
    class="content"
    :class="{ long: burgerOpened }"
    @open-modal="openModal"
  />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Header, Footer, Modal },
  data() {
    return {
      burgerOpened: false,
      component: null,
      modalProps: {},
    };
  },
  methods: {
    openModal(component, props = {}) {
      this.component = component;
      this.modalProps = props;
      this.$refs.appModal.open();
      console.log(this.modalProps);
    },
    closeModal() {
      this.$refs.appModal.close();
    },
  },
  beforeMount() {
    if (!this.$store.getters.countryCode) this.$store.dispatch('fetchCountry');
    if (!this.$store.getters.locale) this.$store.dispatch('fetchLocale');
    if (this.$i18n.locale !== this.$store.getters.locale) {
      this.$store.dispatch('changeLocale', this.$store.getters.locale);
    }
  },
};
</script>

<style lang="scss">
.content{
  max-width: 1100px;
  margin: 0 auto;
  padding: 46px 0;
  transition: padding .4s ease;
  &.long{
    padding-top: 95px !important;
  }
  min-height: calc(100dvh - 284px);
  @media screen {
    @media (max-width: 1100px) {
      max-width: 95%;
    }
  }
}
</style>
