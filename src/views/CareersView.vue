<template>
  <article class="careers">
    <div class="careers_section board">
      <div class="careers_section-intro">
        <h1 class="careers_section-intro_title">{{ $t('careers.title')}}</h1>
        <p class="careers_section-intro_note">{{ $t('careers.lead') }}</p>
        <div class="careers_section-intro_cta">
          <div class="careers_section-intro-buttons">
            <router-link to="/contacts" class="base_link btn_submit">
              {{ $t('careers.cta.referral') }}
            </router-link>
            <a href="#careers" class="base_link btn_submit alt">
              {{ $t('careers.cta.view') }}
            </a>
          </div>
        </div>
        <div class="careers_section-intro_benefits">
          <h3 class="careers_section-title">{{ $t('careers.benefits.title') }}</h3>
          <div class="careers_section-intro_benefits-row">
            <div class="careers_section-intro_benefit"
              v-for="(b, idx) in $tm('careers.benefits.bullets')" :key="idx">
              <span class="strong">{{ b.title }}</span>
              <span class="info">{{ b.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="careers_section-aside">
        <h3 class="careers_section-aside_title">{{ $t('careers.stats_title') }}</h3>
        <div class="careers_section-kpis" role="list" aria-label="Key performance indicators">
          <div class="careers_section-kpi" role="listitem" v-for="(k, i) in $tm('kpis')" :key="i">
            <span class="strong">{{ k.num }}</span>
            <span class="info">{{ k.lbl }}</span>
          </div>
        </div>
        <div class="careers_section-muted">{{ $t('careers.culture_link') }}</div>
      </div>
    </div>
    <div class="careers_section vacancies">
      <div class="careers_section-filters">
        <input type="text" :placeholder="$t('careers.filters.placeholder')" class="input_wide"
          v-model="filter.kwds">
        <Picker :options="availPositions" nested :placeholder="$t('careers.filters.team')" />
        <Picker :options="availLocations" nested :placeholder="$t('careers.filters.loc')" />
        <Picker :options="availTime" nested :placeholder="$t('careers.filters.format')" />
      </div>
      <div class="careers_section-vacancy" v-for="v in positions" :key="v.id">
        <div class="careers_section-vacancy-info">
          <h2 class="vacancy_title">{{ $t(`careers.positions.${v.title}`) }}</h2>
          <div class="vacancy_captions">
            <span class="caption">{{ $t(`careers.positions.${v.position}`) }}</span>
            <span class="caption" v-for="(c, idx) in v.captions" :key="idx">
              ·
              <span v-for="(k, l) in c" :key="k">{{ $t(`careers.${l}.${k}`) }}</span>
            </span>
          </div>
          <div class="vacancy_tags">
            <span class="vacancy_tag" v-for="(t, idx) in v.tags" :key="idx">
              <span class="tag">{{ $t(`careers.keywords.${t}`) }}</span>
            </span>
          </div>
        </div>
        <div class="careers_section-vacancy-cta">
          <button type="button" class="btn_submit btn">{{ $t('careers.apply') }}</button>
        </div>
      </div>
    </div>
    <div class="careers_section process">
      <h2 class="careers_section-title">{{ $t('careers.process.title') }}</h2>
      <div class="careers_section-posts">
        <div class="careers_section-post" v-for="(p, idx) in $tm('careers.process.posts')"
          :key="idx">
          <h4 class="careers_section-post_title">{{ p.title }}</h4>
          <p class="careers_section-post_text">{{ p.text }}</p>
        </div>
      </div>
    </div>
    <div class="careers_section faq">
      <div class="careers_detail" v-for="(q, idx) in $tm('careers.questions')" :key="idx">
        <Detail :q="q.q" :a="q.a" />
      </div>
    </div>
  </article>
</template>

<script>
import Detail from '../components/Detail.vue';
import Picker from '../components/Picker.vue';

export default {
  name: 'CareersView',
  components: { Detail, Picker },
  data() {
    return {
      positions: [
        {
          id: 'asd1zx',
          title: 'dp_reefer',
          position: 'dispatch',
          captions: [
            {
              locations: 'remote',
            },
            {
              time: 'full',
            },
          ],
          tags: ['reefer', 'en_b2', 'tms'],
        },
      ],
      filter: {
        kwds: null,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.careers{
  padding: 36px 0;
  &_section{
    margin: 24px 0;
    &.board,
    &.vacancies{
      background: $white;
      border: 1px solid $light-grey;
      border-radius: 20px;
      padding: 22px;
      gap: 22px;
    }
    &.board{
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen {
        @media (max-width: 950px) {
          flex-direction: column;
        }
      }
    }
    &-intro{
      &_title{
        font-size: 40px;
        margin-bottom: 10px;
        line-height: 1.1;
        font-weight: 800;
      }
      &_note{
        color: $grey;
        font-size: 14px;
      }
      &_cta{
        display: flex;
        margin-top: 18px;
        @media (max-width: 530px) {
          display: block;
        }
      }
      &-buttons{
        display: flex;
        gap: 12px;
        @media (max-width: 530px) {
          flex-direction: column;
          text-align: center;
        }
      }
      &_benefits{
        margin-top: 28px;
        &-row{
          gap: 8px;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          @media (max-width: 530px) {
            justify-content: space-evenly;
            flex-wrap: wrap;
          }
        }
      }
      &_benefit{
        padding: 14px;
        border: 1px solid $light-grey;
        border-radius: 14px;
        background: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 175px;
        text-align: left;
        @media (max-width: 530px) {
          flex-basis: 100%;
        }
        .strong{
          margin-bottom: 6px;
          font-weight: 800;
          margin-top: auto;
        }
        .info{
          margin-top: auto;
          font-size: 14px;
          color: $grey;
        }
      }
    }
    &-filters{
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 14px;
      @media screen {
        @media (max-width: 770px) {
          flex-wrap: wrap;
        }
      }
      .input_wide{
        width: 25%;
        background: white;
        @media screen {
          @media (max-width: 770px) {
            width: 49%;
          }
          @media (max-width: 460px) {
            width: 100%;
          }
        }
      }
      .selection{
        flex: 1 0 25%;
        flex-basis: 170px;
        margin-bottom: 0;
      }
    }
    &-vacancy{
      border: 1px solid $light-grey;
      border-radius: 14px;
      background: white;
      padding: 16px;
      gap: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen {
        @media (max-width: 550px) {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      &-cta{
        @media (max-width: 550px) {
          width: 100%;
        }
      }
      .vacancy_captions{
        margin-top: 5px;
        .caption{
          font-size: 14px;
          color: $grey;
        }
      }
      .vacancy_tags{
        margin-top: 5px;
        gap: 10px;
        display: flex;
        .tag{
          border: 1px solid $light-grey;
          border-radius: 20px;
          font-size: 12px;
          padding: 6px 10px;
          box-sizing: border-box;
          display: block;
        }
      }
    }
    &-title{
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 10px;
      @media screen {
        @media (max-width: 700px) {
          text-align: center;
        }
      }
    }
    &-posts{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      @media screen {
        @media (max-width: 865px) {
          justify-content: space-evenly;
        }
      }
    }
    &-post{
      flex-basis: 255px;
      border: 1px solid $light-grey;
      border-radius: 14px;
      padding: 16px;
      text-align: center;
      background: white;
      &_title{
        font-size: 19px;
      }
      &_text{
        color: $grey;
        font-weight: 600;
      }
    }
    &-aside{
      padding: 18px;
      background: white;
      border: 1px solid $light-grey;
      border-radius: 20px;
      &_title{
        font-size: 19px;
        font-weight: 800;
        margin-bottom: 10px;
        @media screen {
          @media (max-width: 700px) {
            text-align: center;
          }
        }
      }
    }
    &-kpis{
      gap: 8px;
      display: flex;
      justify-content: space-evenly;
      align-items: stretch;
      @media (max-width: 530px) {
        flex-wrap: wrap;
      }
    }
    &-muted{
      font-size: 14px;
      color: $grey;
      margin-top: 10px;
      @media screen {
        @media (max-width: 700px) {
          text-align: center;
        }
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
}
</style>
