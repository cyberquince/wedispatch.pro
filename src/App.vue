<template>
  <Header />
  <router-view class="content" />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer },
};
</script>

<style lang="scss">
.content{
  max-width: 1100px;
  margin: 0 auto;
  padding: 46px 0;
  min-height: calc(100dvh - 300px);
  @media screen {
    @media (max-width: 1100px) {
      max-width: 95%;
    }
  }
}
</style>
