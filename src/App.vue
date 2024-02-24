<template>
  <div class="container">
    <div
      class="grid-base"
      v-if="isLoaded"
    >
      <SiteHeader />
      <PageTask :question-state="questionState" />
    </div>
  </div>
</template>

<script>
import PageTask from './pages/PageTask.vue';
import SiteHeader from './site/SiteHeader.vue';
import { fetchQuestion } from '@/connect/server-connections.js';

export default {
  components: { PageTask, SiteHeader },
  data() {
    return {
      questionState: null,
      isLoaded: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoaded = false;
      const response = await fetchQuestion();
      this.questionState = response.data;
      this.isLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-base {
  min-height: 100vh;
}
</style>
