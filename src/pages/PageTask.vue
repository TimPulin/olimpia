<template>
  <div class="page">
    <QuestionCondition :question-state="questionState" />
  </div>
  <BannerOptions
    :optionsList="questionState.answer.options_answer"
    @answer="onAnswer"
  />
</template>

<script>
import BannerOptions from '../components/BannerOptions.vue';
import QuestionCondition from '../components/QuestionCondition.vue';

import { useDialogStore } from '@/store/dialog.js';
import SiteHeader from '../site/SiteHeader.vue';

const CORRECT_ANSWER_TEXT = 'Это правильный ответ. Молодец!';
const WRONG_ANSWER_TEXT = 'Это неправильный ответ. Попробуй еще раз';

export default {
  components: { BannerOptions, QuestionCondition, SiteHeader },
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
    onAnswer(value) {
      this.dialog.$patch((state) => {
        state.isOpen = true;
        state.text = `Твой ответ: ${value}. ${this.currentTextAnswer(value)}`;
      });
    },
    currentTextAnswer(value) {
      return this.isAnswerCorrect(value)
        ? CORRECT_ANSWER_TEXT
        : WRONG_ANSWER_TEXT;
    },
    isAnswerCorrect(value) {
      return this.questionState.answer.correct_answer === value;
    },
  },
};
</script>
