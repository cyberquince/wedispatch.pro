<template>
  <div class="m-icon"
    ref="mainIcon"
    :width="w"
    :height="h"
    @click="$emit('click')">
    <svg :width="w"
      :height="h"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      ref="svg">
      <image :xlink:href="makePath(name)" :width="w" :height="h" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'mIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    w: {
      type: Number,
      default: 24,
    },
    h: {
      type: Number,
      default: 24,
    },
  },
  methods: {
    makePath(name) {
      return `${process.env.ASSET_PATH}icons/${name}.svg`;
    },
  },
};
</script>
<style lang="scss">
.m-icon{
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .icon{
    width: auto;
    display: flex;
  }
}
</style>
