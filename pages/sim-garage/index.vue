<script setup lang="ts">

import TheNavigation from "~/components/TheNavigation.vue";

useSeoMeta({
  ogDescription: "The SimGarage. The ultimate simdrivers experience.",
  ogImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U8BFIOn33DZpuj8tzoVyFF-KEYEwOEbcAZkJRImLXg&s",
  ogUrl: "https://www.dreamlab.solutions/simgarage",
  twitterTitle: "Sim Garage - Race, Learn, Share...",
  twitterDescription: "The SimGarage. The ultimate simdrivers experience."
})

useHead({
  title: "SimGarage",
  titleTemplate: "SimGarage",
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/rdrteam/favicon.ico'
    }
  ]
})
</script>

<template>
  <main>
    <TheNavigation />
    <div class="grid">
      <h1 id="appTitleName">SimGarage</h1>
      <h2 class="slogan">The circus of sim racing</h2>

      <div class="text-carousel">
        <h3>Connect: Meet like-minded people who share your love for Sim Racing.</h3>
        <h3>Understand: Comprehensive driving data analysis to improve your skills.</h3>
        <h3>Discover: Keep up with latest trends in Sim Racing and find commercial opportunities.</h3>
      </div>

      <div class="place-self-end">
      </div>

    </div>
  </main>
</template>

<style scoped>
main {
  @apply grid place-items-center min-h-screen bg-gradient-to-tr from-neutral-950 to-slate-800 text-white
}

#appTitleName {
  @apply text-4xl font-semibold text-center bg-gradient-to-br from-red-800 from-30% to-70% to-white bg-clip-text text-transparent leading-10 py-4
}

.text-carousel {
  @apply text-xs
}
</style>
