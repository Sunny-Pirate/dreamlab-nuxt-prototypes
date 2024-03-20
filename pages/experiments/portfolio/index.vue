<script setup lang="ts">

import TheFooter from "~/components/TheFooter.vue";
import TheNavbar from "~/components/TheNavbar.vue";

const config = useRuntimeConfig()

</script>

<template>

  <main class="landing-page dashboard">
    <TheNavbar title="Portfolio" brandImageUrl="/dreamlab/alternateLogo.svg"/>
    <TheFooter/>
  </main>

</template>

<style scoped>

</style>
