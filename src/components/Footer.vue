<template>
  <footer class="footer">
    <div class="footer_wrapper">
      <div class="footer_item">
        <div class="footer_logo">
          <router-link to="/" class="base_link">
            <div class="footer_logo-wrapper">
              <img :src="makePath('img/logo_256.png')" class="base_image" alt="logo"
                loading="eager">
            </div>
            <span class="footer_title">We Dispatch</span>
          </router-link>
        </div>
        <div class="footer_logo-note">
          {{ $t('footer.note') }}
        </div>
      </div>
      <div class="footer_item">
        <div class="footer_company footer_title">{{ $t('footer.company') }}</div>
        <ul class="footer_company-nav">
          <li class="footer_company-nav_item">
            <router-link to="/about" class="base_link">
              {{ $t('nav.about') }}
            </router-link>
          </li>
          <li class="footer_company-nav_item">
            <router-link to="/services" class="base_link">
              {{ $t('nav.services') }}
            </router-link>
          </li>
          <li class="footer_company-nav_item">
            <router-link to="/careers" class="base_link">
              {{ $t('nav.careers') }}
            </router-link>
          </li>
          <li class="footer_company-nav_item">
            <router-link to="/contacts" class="base_link">
              {{ $t('nav.contacts') }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer_item">
        <div class="footer_resources footer_title">{{ $t('footer.resources') }}</div>
        <ul class="footer_resources-nav">
          <li class="footer_resources-nav_item">
            <router-link to="#" class="base_link">
              {{ $t('footer.resource_list.blog') }}
            </router-link>
          </li>
          <li class="footer_resources-nav_item">
            <router-link to="/faq" class="base_link">
              {{ $t('footer.resource_list.faq') }}
            </router-link>
          </li>
          <li class="footer_resources-nav_item">
            <router-link to="/privacy" class="base_link">
              {{ $t('footer.resource_list.privacy') }}
            </router-link>
          </li>
          <li class="footer_resources-nav_item">
            <router-link to="/terms" class="base_link">
              {{ $t('footer.resource_list.consent') }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer_item">
        <div class="footer_newsletter footer_title">{{ $t('footer.subscribe') }}</div>
        <div class="footer_newsletter-form">
          <form class="subscribe" @submit.prevent="acceptNL">
            <input type="email" class="input_wide" v-model="newsletter.email"
              placeholder="you@email.com" required autocomplete="off"
              @input="validateEmail" :class="{ small: validEmail }">
            <!-- Fix button appearance on mobile (iOS) -->
            <transition name="appear-left">
              <button type="submit" class="btn btn_submit small"
                v-show="validEmail"></button>
            </transition>
          </form>
        </div>
      </div>
    </div>
    <div class="footer_copy">
      2025
      <span class="copyright">&copy;</span>
      We Dispatch
    </div>
    <div class="footer_developer">
      Developed by
      <a :href="linkToDeveloper('https://cyberquince.dev/')"
        class="base_link" target="_blank">CyberQuince</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      newsletter: {
        email: null,
      },
      validEmail: false,
    };
  },
  methods: {
    validateEmail() {
      const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const valid = this.newsletter.email.toLowerCase().match(regexp);
      this.validEmail = Boolean(valid);
    },
    linkToDeveloper(netloc) {
      const paramData = {
        utm_source: 'client',
        utm_from: location.href,
        utm_partner: 'wedispatch',
      };
      const params = new URLSearchParams(paramData);
      const url = new URL(`?${params.toString()}`, netloc);
      return url;
    },
    acceptNL() {
      if (!this.validEmail) return;
      console.log(this.validEmail, this.newsletter.email);
    },
    makePath(localPath) {
      return `${process.env.ASSET_PATH}${localPath}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.footer{
  background: $white;
  padding: 28px 0 18px 0;
  border-top: 1px solid $light-grey;
  &_wrapper{
    display: flex;
    justify-content: space-around;
    gap: 18px;
    max-width: 1100px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  &_item{
    flex-basis: 260px;
  }
  &_logo{
    margin-bottom: 8px;
    .base_link{
      display: flex;
      align-items: center;
      gap: 12px;
    }
    &-wrapper{
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    &-note{
      font-size: 14px;
    }
    .footer_title{
      margin-bottom: 0;
    }
  }
  &_company{
    &-nav{
      display: flex;
      flex-direction: column;
      font-size: 15px;
      &_item{
        display: flex;
        .base_link{
          &:hover{
            color: $red;
          }
        }
      }
    }
  }
  &_resources{
    &-nav{
      display: flex;
      flex-direction: column;
      font-size: 15px;
      &_item{
        display: flex;
        .base_link{
          &:hover{
            color: $red;
          }
        }
      }
    }
  }
  &_newsletter{
    &-form{
      display: flex;
      align-items: center;
      .subscribe{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        .input_wide{
          transition: width .4s ease;
          &.small{
            width: calc(100% - 51px);
          }
        }
        .btn_submit.small{
          position: absolute;
          right: 1px;
          margin-left: 10px;
        }
      }
    }
  }
  &_copy{
    text-align: center;
    margin-top: 15px;
    color: $grey;
    font-size: 15px;
  }
  &_developer{
    text-align: center;
    color: $grey;
    font-size: 13px;
    .base_link{
      color: $red;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  &_title{
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 8px;
  }
}
.appear-left-enter-active,
.appear-left-leave-active{
  transform: translateX(0px);
  opacity: 1;
  transition: all .4s ease;
}
.appear-left-enter-from,
.appear-left-leave-to{
  opacity: 0;
  transform: translateX(60px);
}
</style>
