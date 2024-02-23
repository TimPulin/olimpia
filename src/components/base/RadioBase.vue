<template>
  <label
    class="radio button-base"
    :class="classesObject"
  >
    {{ localValue }}
    <input
      class="radio__input"
      type="radio"
      :name="inputName"
      :value="localValue"
      v-model="currentValue"
    />
  </label>
</template>

<script>
export default {
  props: {
    localValue: String,
    modelValue: {
      type: [String, Number, null],
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    currentValue: {
      get() {
        return this.modelValue;
      },
      set() {
        this.$emit('update:modelValue', this.localValue);
      },
    },
    classesObject() {
      return {
        'radio--checked': this.isChecked,
      };
    },
    isChecked() {
      return this.localValue === this.currentValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  position: relative;
  overflow: hidden;
  // TODO transform

  &__input,
  &__input:checked {
    position: absolute;
    z-index: -1000;
    opacity: 0;
  }
}

.radio--checked {
  box-shadow: 0 0 3px 3px $color-primary;
}
</style>
