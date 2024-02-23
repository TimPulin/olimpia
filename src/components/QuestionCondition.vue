<template>
  <div class="question-condition grid-base">
    <div class="first-line row">
      <ButtonBase aria-label="close">
        <img
          src="@img/close_btn.png"
          alt="close"
        />
      </ButtonBase>
      <div>Choose the right answer</div>
      <ButtonBase aria-label="close">
        <img
          src="@img/bulb.png"
          alt="close"
        />
      </ButtonBase>
    </div>
    <div class="question-text row">Which shape shows third</div>
    <div class="question-img row">
      <img
        class="img"
        src="@img/task/task_img.png"
        alt="task image"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonBase from './base/ButtonBase.vue';
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
