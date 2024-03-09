<script setup lang="ts">

import TheNavbar from "~/components/clothing-design/TheNavbar.vue";
</script>

<template>
  <main class="cd-dashboard">
    <TheNavbar pageTitle="Cloting Design App"/>
    <section class="selection-grid">
      <div class="section-item" @click="() => navigateTo('/clothing/customers')">
        Clienti
      </div>
    </section>
  </main>
</template>

<style scoped>

.selection-grid {
  @apply grid grid-cols-2 gap-2;

  .section-item {
    @apply p-2 rounded bg-amber-50 cursor-pointer;
  }
}
</style>
