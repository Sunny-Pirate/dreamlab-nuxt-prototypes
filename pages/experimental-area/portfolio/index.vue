<script setup lang="ts">

import TheFooter from "~/components/TheFooter.vue";
import TheNavbar from "~/components/TheNavbar.vue";

const config = useRuntimeConfig()

</script>

<template>

  <main class="webpage dashboard">
    <TheNavbar pageTitle="Portfolio" brandImageUrl="/dreamlab/alternateLogo.svg"/>
    <TheFooter/>
  </main>

</template>

<style scoped>

</style>
