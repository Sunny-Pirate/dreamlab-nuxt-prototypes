<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
</script>

<template>
  <TheNavigation />
  <main class="grid grid-cols-1 place-items-center">
    <div class="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
      <router-link to="/kitmeapp">KITme.App</router-link>
      <router-link to="/simgarage">The Sim Garage</router-link>
    </div>
  </main>
</template>

<style scoped>

</style>
