<template>
  <div class="page">
    <QuestionCondition :question-state="questionState" />
    <BannerOptions
      :optionsList="questionState.answer.options_answer"
      @answer="onAnswer"
    />
  </div>
</template>

<script>
import BannerOptions from '../components/BannerOptions.vue';
import QuestionCondition from '../components/QuestionCondition.vue';
export default {
  components: { BannerOptions, QuestionCondition },
  props: {
    questionState: {
      require: true,
    },
  },
  methods: {
    onAnswer(value) {
      this.isAnswerCorrect(value);
    },
    isAnswerCorrect(value) {
      return this.questionState.answer.correct_answer === value;
    },
  },
};
</script>
