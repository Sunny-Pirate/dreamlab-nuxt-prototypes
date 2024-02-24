<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";

interface ProjectItem {
  name: string
}

const projects: ProjectItem[] = [
  {name: "DreamLab.Solution WebApp"},
  {name: "KITMe App Workshops plugin"},

]

</script>

<template>
  <TheNavigation pageTitle="Portfolio"/>

  <ul class="portfolio-list">
    <li class="card" v-for="(project, pKey) in projects" :key="pKey">
      {{ project.name }}
    </li>
  </ul>

</template>

<style scoped>
.portfolio-list {
  @apply px-4;
}
</style>
