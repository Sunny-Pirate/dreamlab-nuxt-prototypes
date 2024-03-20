<script setup lang="ts">
import TheNavbar from "~/components/TheNavbar.vue";

const links = useNavigationLinks();
</script>

<template>

  <main class="landing-page">
    <TheNavbar title="Portfolio" :links showLogo />

  </main>

</template>

<style scoped>

</style>
