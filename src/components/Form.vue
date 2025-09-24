<template>
  <div class="form">
    <div class="form_title">
      <h3 class="title">{{ formTitle }}</h3>
    </div>
    <form class="form_form" @submit.prevent="sendInfo" ref="infoForm">
      <input :type="i.type"
        :inputmode="i.inputmode"
        :placeholder="$t(`base.form.${i.placeholder}`)"
        :required="i.required"
        autocomplete="off"
        class="input_wide"
        v-for="(i, idx) in options"
        :key="idx"
        v-model="formInfo[i.name]"
      >
      <CheckBox :text="$t('base.consent')" v-model="consent" />
      <button type="submit" class="btn btn_submit"
        :disabled="!consent">
        {{ $t('base.submit') }}
      </button>
      <transition name="appear">
        <p class="pre" v-if="formResult">{{ $t(`contact.form.${formResult}`) }}</p>
      </transition>
    </form>
  </div>
</template>
<script>
import CheckBox from './CheckBox.vue';

export default {
  name: 'Form',
  components: { CheckBox },
  props: {
    options: {
      type: Array,
      required: true,
    },
    formTitle: {
      type: String,
      required: true,
    },
    extraInfo: {
      type: Object,
    },
  },
  data() {
    return {
      formInfo: {},
      consent: false,
      formResult: null,
    };
  },
  methods: {
    sendInfo() {
      const formData = new FormData();
      Object.entries(this.formInfo).forEach(([k, v]) => {
        if (k !== 'attachment') {
          formData.append(k, v);
        }
      });
      if (this.formInfo?.attachment && this.formInfo?.attachment?.length > 0) {
        Array.from(this.formInfo.attachment).forEach((file) => {
          formData.append('attachments[]', file);
        });
      }
      fetch(`${process.env.ASSET_PATH}handlers/submit_form.php`, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          this.formResult = data.status;
          if (data.status === 'success') {
            this.$refs.infoForm.reset();
          }
          setTimeout(() => {
            this.formResult = null;
          }, 5000);
        })
        .catch((err) => {
          console.error('Error: ', err);
          this.formResult = 'error';
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.form{
  &_title{
    font-size: 29px;
    text-align: center;
    margin-bottom: 20px;
  }
  &_form{
    .input_wide{
      margin-bottom: 10px;
      background: white;
    }
    .checkbox{
      margin-bottom: 10px;
    }
    .pre{
      font-size: 14px;
      color: $grey;
    }
  }
}
.appear-enter-active,
.appea-leave-active{
  transform: translateY(0px);
  opacity: 1;
  z-index: 1;
  transition: all .4s ease;
}
.appear-enter-from,
.appear-leave-to{
  z-index: -10;
  opacity: 0;
  transform: translateY(-30px);
}
</style>
