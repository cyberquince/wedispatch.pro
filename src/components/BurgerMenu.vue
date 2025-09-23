<template>
  <div class="burger">
    <div class="burger_icon" @click="toggleMenu">
      <i class="wd-icon bars"></i>
    </div>
    <transition name="appear">
      <div class="burger_nav" v-show="showMenu"
        @click="toggleMenu">
        <div class="burger_nav-item">
          <router-link to="/" class="base_link">
            <span class="header_nav-text">{{ $t('nav.home') }}</span>
          </router-link>
        </div>
        <div class="burger_nav-item">
          <router-link to="/about" class="base_link">
            <span class="burger_nav-text">{{ $t('nav.about') }}</span>
          </router-link>
        </div>
        <div class="burger_nav-item">
          <router-link to="/services" class="base_link">
            <span class="burger_nav-text">{{ $t('nav.services') }}</span>
          </router-link>
        </div>
        <div class="burger_nav-item">
          <router-link to="/careers" class="base_link">
            <span class="burger_nav-text">{{ $t('nav.careers') }}</span>
          </router-link>
        </div>
        <div class="burger_nav-item">
          <router-link to="/contacts" class="base_link">
            <span class="burger_nav-text">{{ $t('nav.contacts') }}</span>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'BurgerMenu',
  emits: ['burger-opened'],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.$emit('burger-opened', this.showMenu);
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.showMenu = false;
        this.$emit('burger-opened', this.showMenu);
      }
    },
  },
  watch: {
    showMenu(newVal) {
      if (newVal) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>
<style lang="scss" scoped>
.burger{
  position: absolute;
  left: 20px;
  display: none;
  cursor: pointer;
  @media screen {
    @media (max-width: 690px) {
      display: block;
    }
  }
  &_nav{
    position: fixed;
    user-select: none;
    left: 0;
    top: 0;
    padding: 20px 30px;
    background: $cream;
    border-bottom: 1px solid $light-grey;
    width: 100%;
  }
}
.appear-enter-active,
.appear-leave-active{
  transform: translateY(0);
  transition: opacity .4s ease;
}
.appear-enter-from,
.appear-leave-to{
  opacity: 0;
  transform: translateY(-152px);
}
</style>
