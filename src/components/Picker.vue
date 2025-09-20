<template>
  <div class="selection" :class="{opened}" @click="toggleOpened">
    <div class="selection_options" v-show="opened" v-if="nested">
      <div class="selection_option" v-for="(k, v, idx) in options" :key="idx">
        <div class="option" @click="select(v, k)">{{ k }}</div>
      </div>
    </div>
    <div class="selection_options" v-show="opened" v-else>
      <div class="selection_option" v-for="(k, idx) in options" :key="idx">
        <div class="option" @click="select(k)">{{ k }}</div>
      </div>
      <div class="selection_option last">
        <div class="option" @click="select(`${this.options + 1}+`)">{{ this.options + 1 }}+</div>
      </div>
    </div>
    <div class="selection_default selected" v-if="selected">{{ localText }}</div>
    <div class="selection_default" v-else>{{ placeholder }}</div>
  </div>
</template>
<script>
export default {
  name: 'Picker',
  model: {
    prop: 'selected',
    event: 'update',
  },
  props: {
    options: {
      type: [Array, Object, Number],
      required: true,
    },
    selected: {
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    nested: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: ['update:selected'],
  data() {
    return {
      localText: null,
      opened: false,
    };
  },
  computed: {
    modelValue: {
      get() { return this.selected; },
      set(value) { this.$emit('update:selected', value); },
    },
  },
  methods: {
    select(k, v = null) {
      this.localText = v || k;
      this.modelValue = k;
    },
    toggleOpened() {
      this.opened = !this.opened;
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.opened = false;
      }
    },
  },
  watch: {
    opened(newVal) {
      if (newVal) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>
<style lang="scss" scoped>
.selection{
  user-select: none;
  height: 40px;
  font-family: $text-font;
  color: $black;
  margin-bottom: 5px;
  position: relative;
  box-sizing: border-box;
  &:after{
    position: absolute;
    content: '\f078';
    font-family: 'FontAwesome';
    width: 12px;
    height: 12px;
    top: calc(50% - 6px);
    right: 8px;
    color: $dark-grey;
    font-size: 14px;
    transition: all .4s ease;
    z-index: 1;
  }
  &.opened:after{
    transform: rotateX(180deg);
    top: calc(50% - 3px);
  }
  &_options{
    position: absolute;
    width: calc(100% - 4px);
    background: white;
    border-radius: 0 0 6px 6px;
    left: 2px;
    padding: 11px 5px 5px 5px;
    top: calc(100% - 6px);
    z-index: 4;
    .option{
      width: 100%;
      line-height: 20px;
      margin-bottom: 2px;
      border-radius: 2px;
      padding: 0 5px;
      font-size: 14px;
      cursor: pointer;
      &:hover{
        background: $light-grey;
      }
    }
  }
  &_default{
    position: relative;
    line-height: 40px;
    color: $dark-grey;
    font-size: 16px;
    background: white;
    outline: none;
    border: 1px solid $light-grey;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0 12px;
    padding-right: 30px;
    z-index: 1;
    &.selected{
      color: $black;
    }
  }
}
</style>
