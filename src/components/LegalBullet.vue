<template>
  <li class="legal_item">
    <h2 class="legal_item-title">{{ title }}</h2>
    <ul class="legal_item-list strong" v-if="type === 'strong-ul'">
      <li class="legal_item-subitem" v-for="(i, idx) in text" :key="idx">
        <strong>{{ i.strong }}</strong> — {{ i.text }}
      </li>
    </ul>
    <ul class="legal_item-list" v-else-if="type === 'ul'">
      <li class="legal_item-subitem" v-for="(i, idx) in text" :key="idx">
        {{ i }}
      </li>
    </ul>
    <p class="legal_item-text" v-else>{{ text }}</p>
  </li>
</template>
<script>
export default {
  name: 'LegalBullet',
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    text: {
      type: [String, Array],
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.legal_item{
  margin-bottom: 24px;
  &::marker{
    font-size: 22px;
    font-weight: bold;
    text-align: left;
  }
  &-title{
    display: inline;
    font-weight: 800;
    font-size: 22px;
  }
  &-text{
    color: $dark-grey;
    margin-top: 8px;
  }
  &-list{
    margin-top: 8px;
    list-style-type: disc;
    color: $dark-grey;
    list-style-position: outside;
    margin-left: 40px;
  }
  &-subitem{
    &::marker{
      background: $red;
      margin-right: 0px !important;
    }
  }
}
</style>
