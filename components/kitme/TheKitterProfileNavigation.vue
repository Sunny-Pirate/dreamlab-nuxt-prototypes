<script setup lang="ts">
const user = useStrapiAuth();
</script>

<template>
  <nav class="py-2.5 px-4">
    <router-link to="/kitmeapp">
      KITme
    </router-link>
    <slot name="actions" />
  </nav>
</template>

<style scoped>
nav {
  @apply grid grid-cols-2 h-12 items-center;
}
</style>
