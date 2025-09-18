<template>
  <details class="detail">
    <summary>{{ q }}</summary>
    <div class="detail_answer">{{ a }}</div>
  </details>
</template>
<script>
export default {
  name: 'Detail',
  props: {
    q: {
      type: String,
      required: true,
    },
    a: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.detail{
  background:#fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px;
  margin-top:10px;
  summary{
    cursor: pointer;
    font-weight: 700;
  }
  &_answer{
    padding: 5px 12px;
    font-size: 15px;
    color: $dark-grey;
  }
}
</style>
