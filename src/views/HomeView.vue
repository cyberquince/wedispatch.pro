<template>
  <article class="home">
    <div class="home_section">
      <div class="home_stats">
        <h2 class="home_title">{{ $t('home.title') }}</h2>
        <p class="home_subtitle" data-i18n="home.subtitle">{{ $t('home.subtitle') }}</p>
        <div class="home_stats-kpis" role="list" aria-label="Key performance indicators">
          <div class="home_stats-kpi" role="listitem" v-for="(k, i) in $tm('home.kpis')" :key="i">
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
        <button type="button" class="btn btn_submit">{{ $t('lead.cta') }}</button>
        <p class="home_calc-cta">{{ $t('lead.note') }}</p>
      </div>
    </div>
    <div class="home_tracks">
      <h2 class="home_tracks-title">{{ $t('trailers.title') }}</h2>
      <p class="home_tracks-subtitle pre">{{ $tm('trailers.subtitle') }}</p>
      <div class="home_tracks-examples">
        <div class="home_tracks-example" v-for="(t, idx) in $tm('trailers.all')" :key="idx">
          <TrailerCard :name="t" :title="$t(`trailers.${t}.title`)"
            :description="$t(`trailers.${t}.desc`)" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Picker from '../components/Picker.vue';
import TrailerCard from '../components/TrailerCard.vue';

export default {
  name: 'HomeView',
  components: { Picker, TrailerCard },
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
    font-size: 48px;
    line-height: 1.05;
    color: $black;
    letter-spacing: -0.02em;
    font-weight: 800;
  }
  &_subtitle{
    font-size: 18px;
    margin-top: 12px;
    margin-bottom: 8px;
    color: $dark-grey;
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
  }
  &_stats{
    background: $white;
    max-width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-kpis{
      display: grid;
      gap: 8px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin-top: 16px;
    }
    &-kpi{
      padding: 18px 14px;
      border: 1px solid $light-grey;
      border-radius: 14px;
      background: white;
      .strong{
        font-size: 32px;
        font-weight: 800;
      }
      .info{
        color: $dark-grey;
        font-size: 14px;
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
    &-title{
      font-size: 24px;
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
    }
  }
  &_tracks{
    padding: 36px 0;
    &-title,
    &-subtitle{
      text-align: center;
    }
    &-title{
      font-size: 40px;
    }
    &-subtitle{
      font-size: 14px;
      color: $grey;
      margin: 14px 0;
      line-height: 1.6;
      max-width: 100%;
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
}
</style>
