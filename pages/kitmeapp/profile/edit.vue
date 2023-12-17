<script setup lang="ts">

import TheKitterProfileNavigation from "~/components/kitme/TheKitterProfileNavigation.vue";
</script>

<template>
<main>
  <TheKitterProfileNavigation />
  <div class="card">vista della form di editing delle informazioni di base</div>
</main>
</template>

<style scoped>
main {
  @apply min-h-screen grid place-items-center;
  .card {
    @apply w-8/12 text-center;
  }
}
</style>
