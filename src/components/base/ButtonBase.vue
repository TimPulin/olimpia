<template>
  <button class="button-base">
    <slot></slot>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    default: '',
  },
};
</script>
