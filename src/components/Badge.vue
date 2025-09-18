<template>
  <div class="badge">
    <div class="badge_image">
      <img :src="pathToImage" :alt="alt" class="base_image">
    </div>
    <div class="badge_name">{{ name }}</div>
    <div class="badge_position">{{ position }}</div>
  </div>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    image: {
      type: String,
      default: 'img/team/default.png',
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: false,
    },
  },
  computed: {
    pathToImage() {
      return `${process.env.ASSET_PATH}${this.image}`;
    },
    alt() {
      return `${this.name.toString().toLowerCase()} image`;
    },
  },
};
</script>
<style lang="scss" scoped>
.badge{
  background: white;
  border: 1px solid $light-grey;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  &_image{
    height: 260px;
    width: 220px;
    border-radius: 16px;
    border: 1px solid $light-grey;
    flex: 0 0 auto;
  }
  &_name{
    font-weight: 800;
    margin-top: 10px;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    min-height: 20px;
  }
  &_position{
    color: $dark-grey;
    font-size: 14px;
    min-height: 18px;
    display: block;
  }
}
</style>
