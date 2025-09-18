<template>
  <article class="contacts">
    <div class="contacts_body">
      <div class="contacts_info">
        <h2 class="contacts_info-title">{{ $t('contact.getintouch') }}</h2>
        <div class="contacts_info-body">
          <div class="contacts_info-item phone">
            <mIcon name="call" :w="32" :h="32"/>
            <a href="tel:+12244072559" class="base_link">(224) 407-2559</a>
          </div>
          <div class="contacts_info-item email">
            <mIcon name="email" :w="32" :h="32" />
            <a href="mailto:offce@routeonedispatch.com" class="base_link">
              office@routeonedispatch.com
            </a>
          </div>
          <div class="contacts_info-item loc">
            <mIcon name="location" :w="32" :h="32" />
            <a href="https://maps.app.goo.gl/emvatXjo3y8mhMhL6" class="base_link">
              2815 Forbs Ave Suite 107, Hoffman Estates, IL 60192, US
            </a>
          </div>
        </div>
        <h2 class="contacts_info-title">{{ $t('contact.social') }}</h2>
        <div class="contacts_info-socials">
          <a href="https://www.instagram.com/we_dispatch_pro" class="base_link">
            <mIcon name="instagram" :w="32" :h="32" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554474125019" class="base_link">
            <mIcon name="facebook" :w="32" :h="32" />
          </a>
        </div>
      </div>
      <div class="contacts_form">
        <h2 class="contacts_form-title">{{ $t('contact.formtitle') }}</h2>
        <form class="contacts_form-form" @submit.prevent="sendForm">
          <input :placeholder="$t('contact.form.name')" type="text" required autocomplete="off"
            v-model="newForm.name" class="input_wide" />
          <input type="email" :placeholder="$t('contact.form.email')" required
            v-model="newForm.email" class="input_wide" />
          <input :placeholder="$t('contact.form.phone')" type="number" inputmode="tel"
            v-model="newForm.phone" class="input_wide" />
          <textarea :placeholder="$t('contact.form.additional')" v-model="newForm.additional"
            class="input_wide"></textarea>
          <CheckBox :text="$tm('contact.consent')" v-model="newForm.consent" />
          <button class="btn btn_submit alt" type="submit">{{ $t('contact.send') }}</button>
          <transition name="appear">
            <p class="contacts_form-alert" :class="formSentStatus" v-if="formSentStatus">
              {{ $t(`contact.form.${formSentStatus}`) }}
            </p>
          </transition>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
import mIcon from '../components/materialIcon.vue';
import CheckBox from '../components/CheckBox.vue';

export default {
  name: 'ContactsView',
  components: { mIcon, CheckBox },
  data() {
    return {
      newForm: {
        name: null,
        phone: null,
        email: null,
        additional: null,
        consent: false,
      },
      formSentStatus: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.contacts{
  padding: 36px 0;
  &_body{
    gap: 24px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    @media screen {
      @media (max-width: 860px) {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
  &_info{
    background: white;
    border: 1px solid $light-grey;
    border-radius: 16px;
    padding: 22px;
    flex-basis: 480px;
    @media screen {
      @media (max-width: 860px) {
        flex-basis: 580px;
      }
    }
    &-title{
      text-align: center;
      margin-bottom: 16px;
      font-size: 18px;
      font-weight: 800;
    }
    &-item{
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      color: $dark-grey;
      .base_link{
        &:hover{
          text-decoration: underline;
          color: $red;
        }
      }
      .m-icon{
        margin-right: 10px;
        cursor: default;
      }
    }
    &-socials{
      display: flex;
      .base_link{
        .m-icon{
          margin-right: 10px;
          cursor: default;
        }
        &:last-child .m-icon{
          margin-right: 0;
        }
      }
    }
  }
  &_form{
    background: white;
    border: 1px solid $light-grey;
    border-radius: 16px;
    padding: 22px;
    flex-basis: 580px;
    @media screen {
      @media (max-width: 860px) {
        flex-basis: 580px;
      }
    }
    &-title{
      font-weight: 800;
      text-align: center;
      margin-bottom: 16px;
      font-size: 18px;
    }
    &-form{
      .input_wide{
        margin-bottom: 12px;
        &:last-child{
          margin-bottom: 0;
        }
      }
      .btn_submit{
        margin-top: 16px;
        z-index: 2;
      }
      .consent{
        span{
          font-size: 14px;
          color: $grey;
        }
      }
    }
    &-alert{
      font-size: 14px;
      padding: 0 10px;
      margin-top: 5px;
      color: $dark-grey;
      &.error{
        color: $red;
      }
    }
  }
}
.appear-enter-active,
.appea-leave-active{
  transform: translateY(0px);
  opacity: 1;
  z-index: 1;
  transition: all .4s ease;
}
.appear-enter-from,
.appear-leave-to{
  z-index: -10;
  opacity: 0;
  transform: translateY(-30px);
}
</style>
