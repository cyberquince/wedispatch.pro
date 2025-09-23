<template>
  <article class="about">
    <div class="about_section board">
      <div class="about_stats">
        <h2 class="about_stats-title">{{ $tm('about.title') }}</h2>
        <p class="about_stats-note">{{ $t('about.note') }}</p>
        <div class="about_stats-figures">
          <!-- Align figure on mobile -->
          <div class="figure" v-for="(f, idx) in $tm('about.stats')" :key="idx">
            <span class="strong">{{ f.count }}{{ f.value }}</span>
            <span class="note">{{ f.text }}</span>
          </div>
        </div>
        <div class="about_stats-cta">
          <div class="about_stats-cta_button">
            <router-link to="/services" class="base_link btn_submit">
              {{ $t('about.button_all') }}
            </router-link>
          </div>
          <div class="about_stats-cta_button">
            <router-link to="/contacts" class="base_link btn_submit alt">
              {{ $t('about.button_contact') }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="about_mission">
        <h2 class="about_mission-title">{{ $t('about.mission.title') }}</h2>
        <p class="about_mission-note">{{ $t('about.mission.note') }}</p>
        <div class="about_mission-points">
          <Points :points="$tm('about.mission_stats')" small background />
        </div>
      </div>
    </div>
    <div class="about_section">
      <div class="about_milestone">
        <div class="about_milestone-title">{{ $t('about.milestone') }}</div>
        <div class="about_milestones">
          <div class="about_milestones-year" v-for="(m, idx) in $tm('about.milestones')"
            :key="idx">
            <h2 class="year">{{ m.years }}</h2>
            <p class="text">{{ m.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about_section team" v-if="showTeam">
      <div class="about_team-header">
        <h2 class="about_title">{{ $t('about.team_title') }}</h2>
        <router-link to="/careers" class="base_link btn_submit">
          {{ $t('about.team_cta') }}
        </router-link>
      </div>
      <div class="about_team-team">
        <div class="about_team-team-member" v-for="(m, idx) in $tm('team.members')" :key="idx">
          <Badge :name="m.name" :position="m.position" :image="m.image" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Points from '../components/Points.vue';
import Badge from '../components/Badge.vue';

export default {
  name: 'AboutView',
  components: { Points, Badge },
  data() {
    return {
      showTeam: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.about{
  &_title{
    font-size: 24px;
    font-weight: 800;
  }
  &_section.board{
    background: $white;
    padding: 22px;
    border-radius: 20px;
    border: 1px solid $light-grey;
    gap: 22px;
    display: flex;
    @media screen {
      @media (max-width: 1075px) {
        gap: 10px;
      }
      @media (max-width: 940px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 22px;
        max-width: 70%;
        justify-self: center;
      }
      @media screen {
        @media (max-width: 677px) {
          max-width: 95%;
        }
      }
    }
  }
  &_stats{
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen {
      @media (max-width: 940px) {
        max-width: 95%;
        justify-self: center;
      }
    }
    &-title{
      font-weight: 800;
      font-size: 40px;
      line-height: 1.1;
      margin-bottom: 10px;
      @media screen {
        @media (max-width: 850px) {
          text-align: center;
        }
      }
    }
    &-note{
      font-size: 14px;
      color: $grey;
      margin: 14px 0;
    }
    &-figures{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 5px;
      .figure{
        background: white;
        border: 1px solid $light-grey;
        border-radius: 14px;
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: center;
        flex-basis: 170px;
        margin: 0 auto;
        .strong{
          font-size: 28px;
          font-weight: 800;
        }
        .note{
          font-size: 14px;
          color: $grey;
          text-align: center;
        }
      }
    }
    &-cta{
      display: flex;
      margin-top: 24px;
      @media screen {
        @media (max-width: 940px) {
          justify-content: center;
        }
        @media (max-width: 500px) {
          flex-direction: column;
          text-align: center;
        }
      }
      &_button{
        margin-right: 12px;
        @media (max-width: 500px) {
          margin: 0;
          margin-bottom: 12px;
        }
        &:last-child{
          margin-right: 0;
          @media (max-width: 500px) {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
  &_mission{
    background: white;
    border: 1px solid $light-grey;
    border-radius: 16px;
    padding: 18px;
    max-width: 465px;
    @media screen {
      @media (max-width: 940px) {
        max-width: 95%;
        justify-self: center;
      }
    }
    &-title{
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 6px;
      @media (max-width: 500px) {
        text-align: center;
      }
    }
    &-note{
      font-size: 14px;
      color: $grey;
      font-weight: 600;
    }
  }
  &_milestone{
    padding: 32px 0;
    &-title{
      font-size: 14px;
      font-weight: 800;
      color: $grey;
      margin-bottom: 10px;
    }
  }
  &_milestones{
    display: flex;
    height: auto;
    justify-content: space-between;
    align-items: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 16px;
    &-year{
      border-radius: 16px;
      flex: 1;
      background: white;
      border: 1px solid $light-grey;
      flex-basis: 250px;
      display: flex;
      flex-direction: column;
      padding: 16px;
      .year{
        font-weight: 800;
      }
      .text{
        margin-top: 6px;
        color: $grey;
        font-weight: 700;
      }
    }
  }
  &_team{
    &-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      .btn_submit{
        width: auto;
      }
    }
    &-team{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      @media (max-width: 840px) {
        justify-content: space-evenly;
      }
      &-member{
        flex-basis: 254px;
        justify-self: center;
      }
    }
  }
}
</style>
