<script setup lang="ts">

import TheDreamlabVectorLogo from "~/components/dreamlab/TheDreamlabVectorLogo.vue";

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
  <div id="hero">
    <div class="brand-wrapper">
      <TheDreamlabVectorLogo  />
      <h1 class="title">{{ company.title }}</h1>
      <h2 class="subtitle">{{ company.slogan }}</h2>
    </div>
    <div class="scroller" @click="scrollToContent(scrollToId ?? null)" v-if="scrollToId">
      <Icon name="solar:double-alt-arrow-down-line-duotone"/>
    </div>
  </div>
</template>

<style scoped>
#hero {
  @apply relative max-w-screen-sm mx-auto min-h-screen h-screen grid grid-cols-1 gap-12 px-4 place-items-center;

  .brand-wrapper {

    @apply text-center grid gap-4 place-items-center;

    .dreamlab-vector-logo {
      @apply w-32 h-32 md:w-56 md:h-56 fill-emerald-400 stroke-lime-400 stroke-1;
    }

    .title {
      @apply font-headings text-2xl text-emerald-400;
    }

    .subtitle {
      @apply font-headings text-xl;
    }
  }

  .scroller {
    @apply absolute bottom-12
    text-5xl text-emerald-400;
  }

}

</style>
