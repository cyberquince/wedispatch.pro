<template>
  <article class="legal" :class="type">
    <h1 class="legal_title">{{ title }}</h1>
    <span class="legal_updated" :class="{ padded: !note }" v-if="updated">
      {{ `${utext}: ${$d(normalDate, 'short')}` }}
    </span>
    <p class="legal_note" v-if="note">{{ note }}</p>
    <ol class="legal_bullet">
      <div v-for="(i, idx) in list" :key="idx">
        <LegalBullet :title="i.title" :type="i.type" :text="i.text" />
      </div>
      <li class="legal_item" v-if="contacts">
        <h2 class="legal_item-title">{{ contacts.title }}</h2>
        <div class="legal_item-info">
          <p class="legal_item-note" v-if="contacts.note">{{ contacts.note }}</p>
          <strong class="ss">{{ capitalize($t('base.email')) }}: </strong>
          <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a><br>
          <strong class="ss">{{ capitalize($t('base.phone')) }}: </strong>
          <span class="pre">{{ contacts.phone }}</span>
        </div>
      </li>
    </ol>
  </article>
</template>
<script>
import LegalBullet from './LegalBullet.vue';

export default {
  name: 'legal',
  components: { LegalBullet },
  props: {
    type: {
      type: String,
      required: true,
    },
    updated: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
    list: {
      type: Array,
      required: true,
    },
    utext: {
      type: String,
      required: true,
    },
    contacts: {
      type: Object,
      required: false,
    },
  },
  methods: {
    capitalize(val) {
      return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    },
  },
  computed: {
    normalDate() {
      return new Date(this.updated * 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.legal{
  &_title{
    font-size: 40px;
  }
  &_updated{
    color: $dark-grey;
    font-size: 14px;
    &.padded{
      display: block;
      margin-bottom: 24px;
    }
  }
  &_note{
    margin: 16px 0;
    color: $dark-grey;
  }
  &_item{
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
    &-info{
      color: $dark-grey;
      margin-top: 8px;
      line-height: 1.6;
      a{
        color: $red;
        &:visited{
          color: $red;
        }
      }
    }
  }
}
</style>
