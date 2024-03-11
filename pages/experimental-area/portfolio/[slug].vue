<script setup lang="ts">

import TheFooter from "~/components/TheFooter.vue";
import TheNavbar from "~/components/TheNavbar.vue";

const route = useRoute();
const pageSlug = route.params.slug
const config = useRuntimeConfig();

</script>

<template>
  <main class="webpage article">
    <TheNavbar pageTitle="Project ..." brandImageUrl="/dreamlab/alternateLogo.svg"/>

    <TheFooter/>
  </main>
</template>

<style scoped>
.article {
  @apply min-h-screen flex flex-col max-w-screen-lg mx-auto ;

  header {
    @apply pt-4 lg:pt-6 px-4;
  }
}
</style>
