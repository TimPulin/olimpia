<template>
  <div class="container">
    <div class="grid-base">
      <SiteHeader />
      <PageTask />
    </div>
  </div>
</template>

<script setup>
import PageTask from './pages/PageTask.vue';
import SiteHeader from './site/SiteHeader.vue';
</script>

<style lang="scss" scoped>
.grid-base {
  min-height: 100vh;
}
</style>
