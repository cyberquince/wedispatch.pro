<template>
  <article class="faq">
    <div class="faq_content">
      <h2 class="faq_title">{{ $t('faq.title') }}</h2>
      <p class="faq_subtitle">{{ $t('faq.subtitle') }}</p>
      <div class="faq_answers">
        <div class="faq_answer" v-for="(f, idx) in $tm('faq.questions')" :key="idx">
          <Detail :q="f.q" :a="f.a" />
        </div>
      </div>
      <div class="faq_new">
        <router-link to="/contacts" class="base_link btn_submit alt">
          {{ $t('faq.new') }}
        </router-link>
      </div>
    </div>
  </article>
</template>
<script>
import Detail from '../components/Detail.vue';

export default {
  name: 'FaqView',
  components: { Detail },
};
</script>
<style lang="scss" scoped>
.faq{
  padding: 36px 0;
  &_content{
    border: 1px solid #e5e7eb;
    background:#fbf9f4;
    border-radius: 20px;
    padding: 22px;
    max-width: 960px;
    margin: 0 auto;
  }
  &_title{
    font-size: 32px;
    margin-bottom: 8px;
  }
  &_subtitle{
    color: $grey;
  }
  &_new{
    margin-top: 16px;
    display: flex;
    transition: all .4s ease;
    .base_link{
      width: auto;
      @media screen {
        @media (max-width: 630px) {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
