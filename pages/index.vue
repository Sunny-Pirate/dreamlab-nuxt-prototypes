<script setup lang="ts">

import {useAuthStore, storeToRefs} from "#imports";
import UserAuthIndicator from "~/components/authentication/UserAuthIndicator.vue";

useSeoMeta({
  ogDescription: "Un prodotto dalle caratteristiche fantastiche",
  ogImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U8BFIOn33DZpuj8tzoVyFF-KEYEwOEbcAZkJRImLXg&s",
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
      href: '/dreamlab/alternateLogo.svg'
    }
  ]
})
</script>

<template>
  <main>
    <div class="hero">
      <h1 class="title">DreamLab.Solutions</h1>
      <h2 class="subtitle">Your Business Developer</h2>
    </div>
    <UserAuthIndicator/>
  </main>
</template>

<style scoped>
main {
  @apply font-dreamlab min-h-screen grid place-items-center bg-gradient-to-br from-emerald-600/60 to-sky-600/60
}

.hero {
  @apply text-center p-8 py-10 bg-gradient-to-tr from-lime-400/40 to-purple-800/40 hover:from-lime-400/30 hover:to-purple-800/30
  transition-colors duration-700 shadow rounded-ss-2xl rounded-ee-2xl text-slate-900 font-semibold
}

.title {
  @apply text-2xl
}

.subtitle {
  @apply text-xl
}
</style>
