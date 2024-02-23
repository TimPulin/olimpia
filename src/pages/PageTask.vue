<template>
  <div class="page">
    <QuestionCondition />
    <BannerOptions :optionsList="optionsList" />
  </div>
</template>

<script setup>
import BannerOptions from '../components/BannerOptions.vue';
import QuestionCondition from '../components/QuestionCondition.vue';

const optionsList = [{ value: 'A' }, { value: 'B' }, { value: 'C' }];
</script>
