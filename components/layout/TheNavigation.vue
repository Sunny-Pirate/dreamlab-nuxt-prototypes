<script setup lang="ts">
import TheLogoutButton from "~/components/authentication/TheLogoutButton.vue";

const user = useStrapiUser();
</script>

<template>
  <nav class="default">
    <div class="wrapper">
      <router-link to="/">Home</router-link>
      <router-link to="/labs">Labs</router-link>
      <router-link v-if="user" to="/simgarage">Simgarage</router-link>
      <TheLogoutButton v-if="user"/>
    </div>
  </nav>
</template>
