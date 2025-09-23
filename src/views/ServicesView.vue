<template>
  <article class="services">
    <div class="services_section board">
      <div class="services_info">
        <h2 class="services_info-title">{{ $t('services.title') }}</h2>
        <p class="services_info-subtitle">{{ $tm('services.subtitle') }}</p>
        <div class="services_info-cta">
          <router-link to="/contacts" class="base_link btn btn_submit">
            {{ $t('services.cta') }}
          </router-link>
          <a href="tel:+13312588338" class="base_link btn_submit alt btn">
            {{ $t('services.call') }}
          </a>
        </div>
      </div>
      <div class="services_stats">
        <div class="services_stats-kpis" role="list" aria-label="Key performance indicators">
          <div class="services_stats-kpi" role="listitem" v-for="(k, i) in $tm('kpis')" :key="i">
            <span class="strong">{{ k.num }}</span>
            <span class="info">{{ k.lbl }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="services_section">
      <div class="services_cards">
        <div class="services_card" v-for="(c, idx) in $tm('services.cards')" :key="idx">
          <ServiceCard :icon="c.icon" :title="c.title" :note="c.note" :cta="c.cta"
            @cta="$router.push('/contacts')"/>
        </div>
      </div>
    </div>
    <div class="services_section">
      <div class="services_cta">
        <div class="services_cta-left">
          <h2 class="services_cta-title">{{ $t('services.big_cta.question') }}</h2>
          <h2 class="services_cta-note">{{ $t('services.big_cta.solution') }}</h2>
        </div>
        <div class="services_cta-right">
          <div class="services_cta-buttons">
            <router-link to="/contacts" class="base_link btn_submit">
              {{ $t('services.big_cta.button_start') }}
            </router-link>
            <a href="tel:+13312588338" class="base_link btn_submit alt white">
              {{ $t('services.big_cta.button_call') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue';

export default {
  name: 'ServicesView',
  components: { ServiceCard },
};
</script>
<style lang="scss" scoped>
.services{
  padding: 46px 0;
  &_section.board{
    background: $white;
    border-radius: 20px;
    border: 1px solid $light-grey;
    padding: 22px;
    display: flex;
    gap: 12px;
    justify-content: space-between;
    @media (max-width: 888px) {
      flex-wrap: wrap;
      justify-content: center;
      max-width: 70%;
      justify-self: center;
    }
    @media (max-width: 770px) {
      max-width: 85%;
    }
    @media (max-width: 580px) {
      max-width: 100%;
    }
  }
  &_info{
    flex-basis: 560px;
    @media (max-width: 888px) {
      flex-basis: 50%;
    }
    @media (max-width: 580px) {
      flex-basis: 99%;
    }
    &-title{
      font-size: 40px;
      font-weight: 800;
      @media (max-width: 888px) {
        text-align: center;
      }
    }
    &-subtitle{
      color: $grey;
      font-size: 14px;
      margin: 14px 0 18px 0;
    }
    &-cta{
      display: flex;
      @media (max-width: 580px) {
        justify-content: center;
      }
      .base_link{
        display: block;
        width: auto;
        margin-right: 12px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
  &_stats{
    background: $white;
    max-width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen {
      @media (max-width: 888px) {
        max-width: 100%;
        flex-basis: 90%;
      }
      @media (max-width: 580px) {
        flex-basis: 99%;
      }
    }
    &-kpis{
      gap: 8px;
      padding: 18px;
      background: white;
      border: 1px solid $light-grey;
      border-radius: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: stretch;
      @media (max-width: 530px) {
        flex-wrap: wrap;
      }
    }
    &-kpi{
      padding: 14px;
      border: 1px solid $light-grey;
      border-radius: 14px;
      background: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-basis: 130px;
      @media (max-width: 530px) {
        flex-basis: 100%;
      }
      .strong{
        font-size: 24px;
        font-weight: 800;
        @media screen {
          @media (max-width: 655px) {
            font-size: 24px;
          }
          @media (max-width: 430px) {
            font-size: 20px;
          }
        }
      }
      .info{
        color: $dark-grey;
        font-size: 14px;
        @media screen {
          @media (max-width: 655px) {
            word-break: break-word;
          }
        }
      }
    }
  }
  &_cards{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
    padding: 32px 0;
    @media (max-width: 1100px) {
      justify-content: space-evenly;
    }
  }
  &_card{
    flex-basis: 343px;
  }
  &_cta{
    background: $red-gradient;
    border-radius: 18px;
    color: white;
    gap: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    @media (max-width: 870px) {
      flex-direction: column;
      text-align: center;
    }
    &-title{
      font-size: 28px;
      line-height: 1.2;
    }
    &-note{
      margin-top: 6px;
      color: rgba($color: white, $alpha: .9);
    }
    &-buttons{
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 530px) {
        flex-direction: column;
      }
      .base_link{
        margin-right: 12px;
        @media (max-width: 530px) {
          margin-right: 0;
          margin-bottom: 12px;
        }
        &:last-child{
          margin-right: 0;
            @media (max-width: 530px) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
