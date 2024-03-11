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
  <section id="hero-slogan" class="hero">
    <div class="content">
      <TheDreamlabVectorLogo/>
      <div class="text-slogan">
        <h1 class="title">{{ company.title }}</h1>
        <h2 class="subtitle">{{ company.slogan }}</h2></div>
    </div>
    <div class="scroller" @click="scrollToContent(scrollToId ?? null)" v-if="scrollToId">
      <i class="pi pi-angle-double-down"/>
    </div>
  </section>
</template>

<style scoped>

.content {
  @apply grid place-items-center gap-6;
  .dreamlab-vector-logo {
    @apply size-64 fill-emerald-400 stroke-purple-400 stroke-1;
  }

  .text-slogan {
    @apply flex flex-col gap-1 font-headings;

    h1 {
      @apply text-lg text-primary-500;
    }

    h2 {
      @apply text-base;
    }
  }
}

.scroller {
  @apply absolute bottom-8 text-2xl text-center cursor-pointer text-primary-500 hover:text-primary-400 drop-shadow-md;
}
</style>
