<script setup lang="ts">
useHead({
  title: 'KITme.App',
  titleTemplate: (title?) => title !== null ? `KITme | ${title}` : 'KITme',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/kitme/favicon.ico'
    }
  ]
})
</script>

<template>
  <LazyNuxtPage />
  <footer>
    <div>

    </div>
  </footer>
</template>

<style scoped>

</style>
