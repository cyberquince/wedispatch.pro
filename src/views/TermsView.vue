<template>
  <article class="terms">
    <Legal type="terms"
      :list="$tm('terms.list')"
      :updated="$tm('terms.updated')"
      :title="$t('terms.title')"
      :utext="$t('terms.utext')"
      :contacts="$tm('terms.contacts')"
    />
  </article>
</template>
<script>
import Legal from '../components/Legal.vue';

export default {
  name: 'TermsView',
  components: { Legal },
};
</script>
