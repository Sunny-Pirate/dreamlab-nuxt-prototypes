<script setup lang="ts">

import TheHeroServices from "~/components/layout/TheHeroServices.vue";
import TheHeroSlogan from "~/components/layout/TheHeroSlogan.vue";
import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

definePageMeta({
  name: "Index"
})

useSeoMeta({
  ogDescription: "Un prodotto dalle caratteristiche fantastiche",
  ogImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U8BFIOn33DZpuj8tzoVyFF-KEYEwOEbcAZkJRImLXg&s",
  ogUrl: "https://www.dreamlab.solutions",
  twitterTitle: "_DREAM.LAB_",
  twitterDescription: "Questo è il prodotto che rivoluziona l'evoluzione dell'involuzione."
})

useHead({
  title: "DreamLab.Solutions",
  titleTemplate: "DreamLab.Solutions",
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/dreamlab/primarySolidBordered.png'
    }
  ]
})

const currentView = ref<'intro' | 'content'>('intro')

</script>

<template>
  <main class="webpage index">
    <TheNavigation />
    <TheHeroSlogan scrollToId="services"/>
    <TheHeroServices/>
    <TheFooter />
  </main>
</template>

<style scoped>
.index {
  @apply min-h-screen grid grid-cols-1;
}
</style>
