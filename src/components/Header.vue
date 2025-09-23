<template>
  <header class="header">
    <div class="header_wrapper">
      <BurgerMenu @burger-opened="(n) => $emit('burger-opened', n)"/>
      <div class="header_logo">
        <router-link to="/" class="base_link">
          <div class="header_logo-wrapper">
            <img :src="makePath('img/logo_256.png')" alt="logo" class="base_image" loading="eager">
          </div>
          <span class="logo_text">We Dispatch</span>
        </router-link>
      </div>
      <div class="header_nav">
        <div class="header_nav-item">
          <router-link to="/" class="base_link">
            <span class="header_nav-text">{{ $t('nav.home') }}</span>
          </router-link>
        </div>
        <div class="header_nav-item">
          <router-link to="/about" class="base_link">
            <span class="header_nav-text">{{ $t('nav.about') }}</span>
          </router-link>
        </div>
        <div class="header_nav-item">
          <router-link to="/services" class="base_link">
            <span class="header_nav-text">{{ $t('nav.services') }}</span>
          </router-link>
        </div>
        <div class="header_nav-item">
          <router-link to="/careers" class="base_link">
            <span class="header_nav-text">{{ $t('nav.careers') }}</span>
          </router-link>
        </div>
        <div class="header_nav-item">
          <router-link to="/contacts" class="base_link">
            <span class="header_nav-text">{{ $t('nav.contacts') }}</span>
          </router-link>
        </div>
      </div>
      <div class="header_translations">
        <div class="header_translations-wrapper" @click="toggleLangs">
          <div class="header_translations-current" :class="{ visible: showLangs }">
            {{ currentLocale }}
          </div>
          <transition name="appear">
            <div class="header_translations-langs" :class="{ visible: showLangs }"
              v-show="showLangs">
              <div class="header_translations-item" v-for="(l, idx) in filteredLangs"
                :key="idx" @click="$store.dispatch('changeLocale', l)"
                :title="l.toUpperCase()">
                {{ textToFlag(l) }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import BurgerMenu from './BurgerMenu.vue';

export default {
  name: 'Header',
  components: { BurgerMenu },
  emits: ['burger-opened'],
  data() {
    return {
      showLangs: false,
    };
  },
  computed: {
    currentLocale() {
      return this.textToFlag(this.$i18n.locale);
    },
    filteredLangs() {
      const all = this.$i18n.availableLocales;
      return all.filter((l) => l !== this.$i18n.locale);
    },
  },
  methods: {
    toggleLangs() {
      this.showLangs = !this.showLangs;
    },
    textToFlag(text) {
      const flags = {
        ru: '🇷🇺',
        en: '🇬🇧',
        ro: '🇷🇴',
      };
      return flags[text];
    },
    makePath(localPath) {
      const globalPath = process.env.ASSET_PATH;
      return `${globalPath}${localPath}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.header{
  z-index: 10;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #e5e7eb;
  &_wrapper{
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    background: $cream;
    margin: 0 auto;
    padding: 0 20px;
    @media screen {
      @media (max-width: 690px) {
        justify-content: center;
      }
    }
  }
  &_logo{
    font-weight: bold;
    z-index: 3;
    .base_link{
      display: flex;
      gap: 12px;
      align-items: center;
    }
    &-wrapper{
      border-radius: 50%;
      width: 36px;
      height: 36px;
      overflow: hidden;
    }
  }
  &_nav{
    height: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    @media screen {
      @media (max-width: 690px) {
        display: none;
      }
    }
    &-item{
      font-weight: bold;
      padding: 10px 0;
      background-image: linear-gradient(
        to bottom, transparent 0%, transparent 97%, $red 97%, $red 100%
      );
      background-repeat: no-repeat;
      background-size: 0% 100%;
      background-position-x: right;
      transition: background-size .4s;
      &:hover{
        background-size: 100% 100%;
        background-position-x: left;
      }
      & > .base_link{
        padding: 10px 0;
      }
      &:has(> .active.base_link){
        color: $red;
        background-size: 100% 100%;
        background-position-x: left;
      }
    }
  }
  &_translations{
    @media screen {
      @media (max-width: 690px) {
        position: absolute;
        right: 20px;
      }
    }
    &-wrapper{
      position: relative;
      user-select: none;
    }
    &-current{
      padding: 5px 10px;
      transition: all .4s ease;
      &.visible{
        background: $white;
        border-radius: 5px;
        border-radius: 5px 5px 0 0;
      }
    }
    &-current,
    &-item{
      font-family: $flags-font;
      cursor: pointer;
    }
    &-item{
      padding: 5px 0;
    }
    &-langs{
      position: absolute;
      border-radius: 0 0 5px 5px;
      padding: 0 10px;
      background: $white;
    }
  }
}
.appear-enter-active,
.appear-leave-active{
  transition: opacity .4s ease;
}
.appear-enter-from,
.appear-leave-to{
  opacity: 0;
}
</style>
