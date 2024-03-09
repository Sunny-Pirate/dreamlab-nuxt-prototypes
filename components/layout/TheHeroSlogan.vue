<script setup lang="ts">

import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";

interface HeroProps {
  title?: string
  slogan?: string
  scrollToId?: string
}


const company = {
  title: "DreamLab.Solutions",
  slogan: "Where Passion Meets Professionalism",
  logo: "/dreamlab/primarySolidBordered.png"
}


const scrollToContent = (id: string | null) => {
  console.log(`Scrolling to the TAG ${id}`)
  if (id === null) return;
  const element = document.querySelector(`#${id}`);
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}

const props = defineProps<HeroProps>();

</script>

<template>
  <section id="hero">
    <div class="brand-wrapper">
      <TheDreamlabVectorLogo  />
      <h1 class="title">{{ company.title }}</h1>
      <h2 class="subtitle">{{ company.slogan }}</h2>
    </div>
    <div class="scroller" @click="scrollToContent(scrollToId ?? null)" v-if="scrollToId">
      <i  class="pi pi-angle-double-down"/>
    </div>
  </section>
</template>

<style scoped>

</style>
