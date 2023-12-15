<script setup lang="ts">
const user = useStrapiUser();
</script>

<template>
  <nav>
    <div class="wrapper">
      <router-link to="/">Home</router-link>
      <router-link to="/labs">Labs</router-link>
      <router-link v-if="user" to="/simgarage">Simgarage</router-link>
    </div>
  </nav>
</template>
