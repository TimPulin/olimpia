<template>
  <div class="banner">
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in optionsList"
        :key="index"
      >
        <RadioBase
          :local-value="item"
          input-name="options-answer"
          :model-value="answer"
          @update:model-value="onChange"
        />
      </li>
    </ul>
    <ButtonBase
      text="Check"
      @click="sendAnswer"
    />
  </div>
</template>

<script>
import RadioBase from '@/components/base/RadioBase.vue';
import ButtonBase from '@/components/base/ButtonBase.vue';
import { useDialogStore } from '@store/dialog.js';

export default {
  emit: ['answer'],

  props: {
    optionsList: {
      required: true,
    },
  },
  components: { RadioBase, ButtonBase },
  data() {
    return {
      answer: null,
      dialog: useDialogStore(),
    };
  },
  methods: {
    onChange(value) {
      this.answer = value;
    },
    sendAnswer() {
      if (this.answer !== null) {
        this.$emit('answer', this.answer);
      } else {
        this.dialog.$patch((state) => {
          state.isOpen = true;
          state.text = 'Выбери ответ';
        });
      }
      this.answer = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  left: 50%;
  display: flex;
  column-gap: 20px;
  width: 100vw;
  margin-left: -50vw;
  padding: 20px;
}
.list {
  @include list-reset;
  display: flex;
  column-gap: 20px;
  width: 100%;
}
.item {
  width: 100%;
  .button-base {
    width: 100%;
  }
}
</style>
