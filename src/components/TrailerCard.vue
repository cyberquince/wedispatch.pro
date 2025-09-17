<template>
  <div class="card">
    <div class="card_image">
      <img :src="makePath(`img/trailers/${name}.png`)" class="base_image" :alt="altName">
    </div>
    <div class="card_description" v-if="description">
      <h2 class="card_description-name">{{ title }}</h2>
      <p class="note">{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TrailerCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    makePath(localPath) {
      const globalPath = process.env.ASSET_PATH;
      return `${globalPath}${localPath}`;
    },
  },
  computed: {
    altName() {
      return `${this.title} trailer`;
    },
  },
};
</script>
<style lang="scss" scoped>
.card{
  position: relative;
  padding-bottom: 70px;
  &_image{
    width: 100%;
    height: 260px;
    overflow: visible;
    position: relative;
    border-radius: 22px;
    background: white;
    border: 1px solid $light-grey;
    box-shadow: 0 10px 24px rgba($color: $black, $alpha: .06);
    &:after{
      position: absolute;
      content: '';
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 40%;
      border-bottom-left-radius: 22px;
      border-bottom-right-radius: 22px;
      background: linear-gradient(to top, rgba($color: $black, $alpha: .28), transparent);
    }
  }
  &_description{
    position: absolute;
    left: calc(50% - 100px);
    bottom: calc(0% - 20px);
    width: 200px;
    min-height: 150px;
    background: white;
    border: 1px solid $light-grey;
    border-radius: 16px;
    text-align: center;
    padding: 14px 16px;
    box-shadow: 0 8px 10px rgba($color: $black, $alpha: .12);
    z-index: 2;
    display: flex;
    flex-direction: column;
    &-name{
      font-size: 22px;
      font-weight: 800;
    }
    .note{
      margin: auto 0;
      color: $dark-grey;
      font-weight: 600;
      line-height: 1.4;
    }
  }
}
</style>
