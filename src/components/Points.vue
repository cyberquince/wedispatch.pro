<template>
  <div class="points">
    <div class="points_body">
      <div class="point" v-for="(p, idx) in points" :key="idx"
        :class="{ bg: background, sm: small }">
        <div class="point_icon">
          <mIcon :name="p.icon" :w="width" :h="width" />
        </div>
        <h3 class="point_title">{{ p.title }}</h3>
        <p class="point_note">{{ p.note }}</p>
      </div>
    </div>
    <div class="points_cta" v-if="cta">
      <button type="button" class="btn btn_submit" :class="{ alt: alt }"
        @click="performAction">{{ cta }}</button>
    </div>
  </div>
</template>
<script>
import mIcon from './materialIcon.vue';

export default {
  name: 'Points',
  emits: ['actionPerformed'],
  components: { mIcon },
  props: {
    points: {
      type: [Array, Object],
      required: true,
    },
    background: {
      type: Boolean,
      required: false,
      default: false,
    },
    cta: {
      type: String,
      required: false,
    },
    action: {
      required: false,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    alt: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    performAction() {
      this.$emit('actionPerformed');
    },
  },
  computed: {
    width() {
      return this.small ? 48 : 64;
    },
  },
};
</script>
<style lang="scss" scoped>
.points{
  &_body{
    display: flex;
    gap: 24px;
    margin-top: 25px;
    justify-content: space-around;
    flex-wrap: wrap;
    &:has(> .point.sm) {
      flex-wrap: nowrap;
      gap: 12px;
      @media screen {
        @media (max-width: 730px) {
          flex-wrap: wrap;
        }
      }
    }
  }
  .point{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 250px;
    &.bg{
      background: white;
      border: 1px solid $light-grey;
      border-radius: 16px;
      padding: 18px;
      &.sm{
        padding: 15px;
      }
    }
    &.sm{
      .point_title{
        text-align: center;
        font-size: 15px;
      }
      .point_icon{
        width: 72px;
        height: 72px;
      }
    }
    &_icon{
      width: 92px;
      height: 92px;
      border-radius: 50%;
      border: 1px solid $red;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
    }
    &_note{
      text-align: center;
      color: $grey;
      font-size: 14px;
    }
    &_title{
      font-weight: 800;
      font-size: 18px;
      margin-top: 12px;
      margin-bottom: 6px;
      text-align: center;
    }
  }
  &_cta{
    max-width: 250px;
    justify-self: center;
    margin: 0 auto;
    margin-top: 28px;
  }
}
</style>
