<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheHero from "~/components/layout/TheHero.vue";
import TheServicesList from "~/components/layout/TheServicesList.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

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
  <main>
    <TheNavigation pageTitle="Index"/>
    <TheHero scrollToId="services-list"/>
    <TheServicesList/>
    <TheFooter />
  </main>
</template>

<style scoped>

</style>
