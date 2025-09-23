<template>
  <article class="privacy">
    <Legal type="privacy"
      :list="$tm('privacy.list')"
      :updated="$tm('privacy.updated')"
      :note="$t('privacy.note')"
      :title="$t('privacy.title')"
      :utext="$t('privacy.utext')"
      :contacts="$tm('privacy.contacts')"
    />
  </article>
</template>
<script>
import Legal from '../components/Legal.vue';

export default {
  name: 'PrivacyView',
  components: { Legal },
};
</script>
