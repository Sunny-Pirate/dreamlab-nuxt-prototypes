<script setup lang="ts">



import TheHero from "~/components/web/TheHero.vue";
import {useScrollToTagId} from "#imports";

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

const scrollToServices = () => useScrollToTagId("hero-services");

</script>

<template>
  <main class="index">

    <TheNavbar class="fixed w-full z-99"
               :class="{' bg-white shadow-md': y>100}"
    />
    <TheHero>
      <template #title>
        <h1 class="title text-3xl md:text-4xl">DreamLab</h1>
      </template>
      <template #subtitle>
        <h2 class="subtitle">Where Passion Meets Professionalism</h2>
      </template>
      <template #cta>
        <div class="cta-scroll-down" @click="scrollToServices">
          <icon class="pi pi-angle-double-down text-4xl"/>
        </div>
      </template>
    </TheHero>
    <TheHeroServices/>
    <TheFooter/>
  </main>
</template>

<style scoped>
main.index {
  @apply flex flex-col w-full;
}

.cta-scroll-down {
  @apply flex flex-row justify-center;
}
</style>


<!--
<TheHeroSlogan scrollToId="hero-services"
               backgroundImage="url('https://img.reintech.io/variants/s2odbtfbi1vnj0v0lpk08uk9n9fl/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b');"
               backgroundClasses="bg-no-reapeat bg-cover"
               />
-->
