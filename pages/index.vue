<script setup lang="ts">


import TheHero from "~/components/web/TheHero.vue";
import {useScrollToTagId} from "#imports";
import useMockBackendServiceList from "~/composables/useMockBackendServiceList";

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

const scrollToServices = () => useScrollToTagId("services");
const services = useMockBackendServiceList();
</script>

<template>
  <main class="index">

    <TheNavbar class="fixed w-full"
               :class="{' bg-white shadow-md': y>100}"
    />
    <TheHero class="slogan"  layout-classes="flex flex-col gap-16">
      <template #title>
        <h1 class="dreamlab-textual-logo indexpage animated text-3xl md:text-5xl">DreamLab</h1>
      </template>
      <template #subtitle>
        <h2 class="subtitle">Where Passion Meets Professionalism</h2>
      </template>
      <template #cta>
        <div class="cta-scroll-down" @click="scrollToServices">
          <Icon name="double-arrow-down" class="text-purple-500 cursor-pointer text-4xl"/>
        </div>
      </template>
    </TheHero>
    <TheHero id="services"  layoutClasses="flex-layout px-4">
      <template #subtitle>
        <h3 class="subtitle text-emerald-500">
          Your innovative partner in the digital realm:
        </h3>
      </template>
      <div class="layout-horizontal-grid-2-cols">
        <Card v-for="(service, sKey) in services" :key="sKey"
              :pt="{
                  root: `service-card ${service.uiClass} flex flex-col`,
                  content: `px-2 py-1 lg:px-4 lg:py-2 flex-1`,
                  body:`flex-1`
                }"
        >
          <template #subtitle>{{ service.name }}</template>
          <template #content>{{ service.description }}</template>
        </Card>
      </div>
      <template #cta>
        <NuxtLink to="/contact-us" class="cta-contact-us flex justify-center">
          <Button label="Contact us" outlined />
        </NuxtLink>
      </template>
    </TheHero>
    <TheFooter/>
  </main>
</template>

<style scoped>
</style>


<!--
<TheHeroSlogan scrollToId="hero-services"
               backgroundImage="url('https://img.reintech.io/variants/s2odbtfbi1vnj0v0lpk08uk9n9fl/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b');"
               backgroundClasses="bg-no-reapeat bg-cover"
               />
-->
