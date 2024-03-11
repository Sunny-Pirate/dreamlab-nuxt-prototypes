<script setup lang="ts">

import TheNavbar from "~/components/TheNavbar.vue";

const user = useSupabaseUser();

</script>

<template>
  <main class="cd-dashboard">
    <TheNavbar pageTitle="Cloting Design App" brandImageUrl="/clothing-design/logo.png"/>
    <div class="content" v-if="user">
      <h2>Welcome to Fashion Mgmt App</h2>
    </div>
    <div class="content" v-else>
      <h2>You're not registered.</h2>
      <p>Please fill-in the following form to participate</p>
      <Auth />
    </div>
  </main>
</template>

<style scoped>

</style>
