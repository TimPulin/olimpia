<template>
  <div class="question-condition grid-base">
    <div class="first-line row">
      <ButtonClose />
      <div>{{ questionState.condition }}</div>
      <ButtonBase
        aria-label="open help"
        @click="openHelp"
      >
        <img
          src="@img/bulb.png"
          alt="open help"
        />
      </ButtonBase>
    </div>
    <div class="question-text row">{{ questionState.text }}</div>
    <div class="question-img row">
      <img
        class="img"
        :src="questionState.img"
        alt="task image"
      />
    </div>
  </div>
</template>

<script>
import ButtonBase from './base/ButtonBase.vue';
import ButtonClose from './button/ButtonClose.vue';
import { useDialogStore } from '../store/dialog';

export default {
  components: { ButtonBase, ButtonClose },
  props: {
    questionState: {
      require: true,
    },
  },
  data() {
    return {
      dialog: useDialogStore(),
    };
  },
  methods: {
    openHelp() {
      this.dialog.$patch((state) => {
        state.isOpen = true;
        state.text = 'Текст с помощью';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.question-condition {
  height: 100%;
}
.row {
  grid-column: 1 / span 12;
}
.grid-base {
  row-gap: 10px;
  grid-template-rows: repeat(2, auto);
  grid-auto-rows: 1fr;
}
.first-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question-text {
  text-align: center;
  font-size: 24px;
}
.question-img {
  display: flex;
}
.img {
  margin: auto auto;
}

.button-base {
  padding-inline: 10px;
  box-shadow: 1px 2px 3px 1px $color-grey_max_light;
}
</style>
