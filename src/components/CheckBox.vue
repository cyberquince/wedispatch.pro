<template>
  <div class="checkbox">
    <input type="checkbox" class="inv_input" :id="id"
      @change="onChange" :checked="modelValue">
    <div class="checkbox_checkbox" :class="{ checked: modelValue }"
      @click="toggle"></div>
    <label :for="id" class="checkbox_label">{{ text }}</label>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  props: {
    id: {
      type: String,
      default: () => `checkbox-${Math.random().toString(24).slice(2, 9)}`,
    },
    text: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {};
  },
  methods: {
    toggle() {
      this.$emit('update:modelValue', !this.modelValue);
    },
    onChange(event) {
      this.$emit('update:modelValue', event.target.checked);
    },
  },
};
</script>
<style lang="scss" scoped>
.checkbox{
  display: flex;
  align-items: center;
  &_checkbox{
    height: 25px;
    width: 25px;
    border-radius: 6px;
    background: white;
    border: 1px solid $grey;
    cursor: pointer;
    &:hover{
      border-color: $red;
    }
    &.checked{
      position: relative;
      background: $red;
      &:after{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        content: "\f00c";
        font-family: 'FontAwesome';
        color: $white;
        font-size: 18px;
      }
    }
  }
  &_label{
    color: $grey;
    margin-left: 10px;
    max-width: 90%;
    font-size: 14px;
  }
}
</style>
