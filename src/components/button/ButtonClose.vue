<template>
  <ButtonBase
    aria-label="close"
    class="btn-close"
  >
    <img
      src="@img/close_btn.png"
      alt="close"
    />
  </ButtonBase>
</template>
<script setup>
import ButtonBase from '../base/ButtonBase.vue';
</script>
<style lang="scss" scoped>
.btn-close {
  align-self: flex-end;
  padding-inline: 10px;
  box-shadow: 1px 2px 3px 1px $color-grey_max_light;
}
</style>
