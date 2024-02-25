<template>
  <DialogBase />
  <div class="container">
    <div class="grid-base">
      <SiteHeader />
      <PageTask
        v-if="isLoaded"
        :question-state="questionState"
      />
    </div>
  </div>
</template>

<script>
import DialogBase from './components/DialogBase.vue';
import PageTask from './pages/PageTask.vue';
import SiteHeader from './site/SiteHeader.vue';

import { fetchQuestion } from '@/connect/server-connections.js';

export default {
  components: { PageTask, DialogBase, SiteHeader },
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
<style scoped>
.grid-base {
  min-height: 100%;
}
</style>
