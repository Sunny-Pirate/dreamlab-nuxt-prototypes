<script setup lang="ts">

import TheHeroServices from "~/components/TheHeroServices.vue";
import TheHeroSlogan from "~/components/TheHeroSlogan.vue";
import TheFooter from "~/components/TheFooter.vue";
import TheNavbar from "~/components/TheNavbar.vue";

definePageMeta({
  name: "Index"
})

useSeoMeta({
  ogDescription: "A Freelance developer based modern web platform.",
  // ogImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U8BFIOn33DZpuj8tzoVyFF-KEYEwOEbcAZkJRImLXg&s",
  ogUrl: "https://www.dreamlab.solutions",
  twitterTitle: "DreamLab.Solutions",
  twitterDescription: "UX/UI Design & Development - A Freelance developer based modern web platform."
})

useHead({
  title: "DreamLab.Solutions",
  titleTemplate: undefined,
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/dreamlab/primarySolidBordered.png'
    }
  ]
})

const user = useSupabaseUser();


const {y} = useWindowScroll();

</script>

<template>
  <main class="index">

    <TheNavbar class="fixed w-full z-99"
               :class="{' bg-white shadow-md': y>100}"
    />
    <TheHeroSlogan scrollToId="hero-services"/>
    <TheHeroServices/>
    <TheFooter/>
  </main>
</template>

<style scoped>
main.index {
  @apply flex flex-col w-full;
}
</style>
