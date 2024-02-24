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

export default {
  emit: ['answer'],
  data() {
    return {
      answer: null,
    };
  },
  components: { RadioBase, ButtonBase },
  props: {
    optionsList: {
      required: true,
    },
  },
  methods: {
    onChange(value) {
      this.answer = value;
    },
    sendAnswer() {
      this.answer = null;
      this.$emit('answer', this.answer);
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  column-gap: 20px;
  width: 100%;
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
