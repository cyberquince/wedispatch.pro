<template>
  <article class="home">
    <div class="home_section">
      <div class="home_stats">
        <h2 class="home_stats-title">{{ $t('home.title') }}</h2>
        <p class="home_stats-subtitle" data-i18n="home.subtitle">{{ $t('home.subtitle') }}</p>
        <div class="home_stats-kpis" role="list" aria-label="Key performance indicators">
          <div class="home_stats-kpi" role="listitem" v-for="(k, i) in $tm('kpis')" :key="i">
            <div class="strong">{{ k.num }}</div>
            <span class="info">{{ k.lbl }}</span>
          </div>
        </div>
      </div>
      <div class="home_calc">
        <div class="home_calc-header">
          <h2 class="home_calc-title">{{ $t('lead.title') }}</h2>
          <div class="home_calc-percent">{{ leadPercent }}</div>
        </div>
        <Picker :options="options" :placeholder="$t('lead.equipment')" v-model:selected="calc.hard"
          nested/>
        <Picker :options="nums" :placeholder="$t('lead.trucks')" v-model:selected="calc.tracks" />
        <Picker :options="times" nested :placeholder="$t('lead.months')"
          v-model:selected="calc.months" />
        <button type="button" class="btn btn_submit"
          @click="openModal">{{ $t('lead.cta') }}</button>
        <p class="home_calc-cta">{{ $t('lead.note') }}</p>
      </div>
    </div>
    <div class="home_tracks">
      <h2 class="home_tracks-title home_title">{{ $t('trailers.title') }}</h2>
      <p class="home_tracks-subtitle home_subtitle pre">{{ $tm('trailers.subtitle') }}</p>
      <div class="home_tracks-examples">
        <div class="home_tracks-example" v-for="(t, idx) in $tm('trailers.all')" :key="idx">
          <TrailerCard :name="t" :title="$t(`trailers.${t}.title`)"
            :description="$t(`trailers.${t}.desc`)" />
        </div>
      </div>
    </div>
    <div class="home_works">
      <h2 class="home_works-title home_title">{{ $t('how.title') }}</h2>
      <p class="home_works-subtitle home_subtitle">{{ $t('how.subtitle') }}</p>
      <Points :points="$tm('how.points')" :cta="$t('how.cta')"
        @action-performed="$router.push('/contacts')"
        alt />
    </div>
    <div class="home_why">
      <h2 class="home_why-title home_title">{{ $t('why.title') }}</h2>
      <p class="home_why-subtitle home_subtitle">{{ $t('why.subtitle') }}</p>
      <Points :points="$tm('why.bullets')" :cta="$t('why.cta')" background
        @action-performed="$router.push('/contacts')"
      />
    </div>
  </article>
</template>

<script>
import { markRaw } from 'vue';
import Picker from '../components/Picker.vue';
import TrailerCard from '../components/TrailerCard.vue';
import Points from '../components/Points.vue';
import Form from '../components/Form.vue';

export default {
  name: 'HomeView',
  components: { Picker, TrailerCard, Points },
  data() {
    return {
      options: {
        reefer: 'Reefer',
        flatbed: 'Flatbed',
        conestoga: 'Conestoga',
        step_deck: 'Step Deck',
      },
      nums: 9,
      times: {
        up_to_3: '0-3',
        up_to_6: '4-6',
        up_to_12: '7-12',
        up_to_24: '13-24',
        from_24: '24+',
      },
      calc: {
        hard: null,
        tracks: null,
        months: null,
      },
      monthsDiscount: {
        up_to_3: 0,
        up_to_6: 0,
        up_to_12: 0,
        up_to_24: 0.02,
        from_24: 0.04,
      },
      formOptions: [
        {
          type: 'number',
          inputmode: 'tel',
          required: true,
          placeholder: 'phone',
          name: 'number',
        },
        {
          type: 'text',
          inputmode: '',
          required: true,
          placeholder: 'name',
          name: 'username',
        },
        {
          type: 'number',
          inputmode: 'number',
          required: true,
          placeholder: 'mc_number',
          name: 'mc',
        },
      ],
    };
  },
  methods: {
    getBaseByTrucks() {
      let base = 3.1;
      if (this.calc.tracks === '10+') {
        base = 3;
        return base;
      }
      if (this.calc.tracks < 3) base = 3.2;
      return base;
    },
    normalPercent(val) {
      return `${(Math.round(val * 100) / 100).toFixed(2).replace(/\.00$/, '')}%`;
    },
    openModal() {
      const modalProps = {
        extraInfo: this.calc,
        options: this.formOptions,
        formTitle: this.$t('base.call_request'),
      };
      this.$emit('open-modal', markRaw(Form), modalProps);
    },
  },
  computed: {
    leadPercent() {
      return this.getBaseByTrucks()
        ? this.normalPercent(
          Math.max(0, (this.getBaseByTrucks() - this.monthsDiscount[this.calc.months] || 0)),
        )
        : '0%';
    },
  },
};
</script>

<style lang="scss" scoped>
.home{
  &_title{
    font-size: 40px;
    text-align: center;
    font-weight: 800;
    @media screen {
      @media (max-width: 750px) {
        font-size: 36px;
      }
    }
  }
  &_subtitle{
    font-size: 14px;
    color: $grey;
    text-align: center;
    margin: 14px 0;
    line-height: 1.6;
    max-width: 100%;
  }
  &_section{
    display: flex;
    gap: 18px;
    padding: 22px;
    background: $white;
    border: 1px solid $light-grey;
    border-radius: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen {
      @media (max-width: 1100px) {
        gap: 12px;
      }
      @media (max-width: 967px) {
        justify-content: center;
        max-width: 75%;
        justify-self: center;
      }
      @media (max-width: 800px) {
        max-width: 90%;
      }
       @media (max-width: 530px) {
        max-width: 98%;
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
      @media (max-width: 1100px) {
        max-width: 49%;
      }
      @media (max-width: 967px) {
        max-width: 90%;
      }
      @media (max-width: 530px) {
        max-width: 98%;
      }
    }
    &-kpis{
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin-top: 16px;
    }
    &-title{
      font-size: 48px;
      line-height: 1.05;
      color: $black;
      letter-spacing: -0.02em;
      font-weight: 800;
      @media screen {
        @media (max-width: 1100px) {
          font-size: 40px;
        }
      }
    }
    &-subtitle{
      font-size: 18px;
      margin-top: 12px;
      margin-bottom: 8px;
      color: $dark-grey;
    }
    &-kpi{
      padding: 18px 14px;
      border: 1px solid $light-grey;
      border-radius: 14px;
      background: white;
      .strong{
        font-size: 32px;
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
  &_calc{
    padding: 18px;
    display: flex;
    border-radius: 18px;
    background: white;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid $light-grey;
    @media screen {
      @media (max-width: 967px) {
        width: 90%;
        .selection{
          margin-bottom: 15px;
        }
      }
       @media (max-width: 530px) {
        width: 98%;
      }
    }
    &-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-percent{
      font-size: 28px;
      font-weight: bold;
    }
    &-cta{
      font-size: 14px;
      color: $grey;
      @media screen {
        @media (max-width: 967px) {
          margin-top: 15px;
        }
      }
    }
  }
  &_tracks{
    padding: 36px 0;
    &-subtitle{
      text-align: center;
    }
    &-title{
      font-size: 40px;
    }
    &-subtitle{
      @media screen {
        @media (max-width: 1100px) {
          white-space: wrap;
        }
      }
    }
    &-examples{
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 22px;
      flex-wrap: wrap;
    }
    &-example{
      flex-basis: 256px;
    }
  }
  &_works{
    padding: 46px 0;
  }
  &_why{
    padding: 46px 0;
  }
}
</style>
