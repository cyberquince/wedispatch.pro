<template>
  <div class="service">
    <div class="service_icon">
      <mIcon :name="icon" />
    </div>
    <div class="service_title">{{ title }}</div>
    <p class="service_note">{{ note }}</p>
    <div class="service_cta" @click="$emit('cta')">{{ cta }}</div>
  </div>
</template>
<script>
import mIcon from './materialIcon.vue';

export default {
  name: 'ServiceCard',
  components: { mIcon },
  emits: ['cta'],
  props: {
    icon: {
      type: String,
      required: false,
      default: 'default',
    },
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
    cta: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.service{
  background: white;
  border: 1px solid $light-grey;
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  &_icon{
    justify-self: flex-start;
    margin-right: auto;
    margin-bottom: 10px;
  }
  &_title{
    font-weight: 800;
    margin-bottom: 6px;
  }
  &_note{
    color: $grey;
    font-size: 14px;
    white-space: wrap;
  }
  &_cta{
    color: $red;
    font-size: 14px;
    font-weight: 800;
    margin-top: 12px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
