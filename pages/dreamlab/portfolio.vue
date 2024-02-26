<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";

interface TechnologyItem {

  name: string;
  logoUrl: string;
  description?: string;

}

interface ProjectItem {

  title: string; // Required
  slug: string; // Required, if you're linking to a detailed page
  imageUrl?: string; // Required, if every project has an image
  imageAltText?: string; // For accessibility reasons
  subtitle?: string;
  caseStudyIntro?: string;
  technologies?: TechnologyItem[];
  completionDate?: Date; // If relevant
  testimonials?: string[]; // Array of client testimonials
  projectStatus?: 'ongoing' | 'completed' | 'paused'; // If relevant
}

const projects: ProjectItem[] = [
  {
    title: "DreamLab.Solution WebApp",
    imageUrl: "/dreamlab/mocks/projects/dreamlab-crew-imaginary.png",
    slug: "/dreamlab/portfolio/dreamlab-solution",
    technologies: [
      {name: "Nuxt 3", logoUrl: "/dreamlab/mocks/logos/nuxt-js-icon.png"}
    ]
  },
  {
    title: "Workshops plugin",
    subtitle: "Workshop plugin integration based on the KITMe.App services",
    imageUrl: "/dreamlab/mocks/projects/workshops-plugin-cover.png",
    slug: "/dreamlab/portfolio/kitmeapp-workshop-plugin",
    caseStudyIntro:
        "The Workshop Creation and Management feature within the Workshop Management System (WMS) empowers managers with an intuitive and dynamic interface for orchestrating workshops. Leveraging the system’s flexible architecture, it allows for the creation of customized workshops that meet diverse organizational needs and participant preferences, ensuring simplicity and depth in workshop execution.",
    testimonials: ["SunnyDay.Software"]
  },
  {
    title: "Profilo Social",
    slug: "/dreamlab/portfolio/profilo-social",
    caseStudyIntro: "Frontend development with React.js.",
    testimonials: ["Paolucci Ventures"]
  },
]

const activeIndex = ref<number>(0);

</script>

<template>
  <TheNavigation pageTitle="Portfolio"/>

  <ul class="portfolio-list">
    <li class="card" v-for="(project, pKey) in projects" :key="pKey">
      <div class="header">
        <h3 class="title">{{ project.title }}</h3>
        <h4 v-if="project.subtitle" class="subtitle">{{ project.subtitle }}</h4>
      </div>
      <div class="image-wrapper" v-if="project.imageUrl">
        <NuxtImg :src="project.imageUrl" :alt="project.imageAltText"></NuxtImg>
      </div>
      <div class="case-study">
        {{ project.caseStudyIntro }}
      </div>
      <ul class="technology-list" v-if="project.technologies">
        <h5>Techs:</h5>
        <li class="technology-item" v-for="(tech, tKey) in project.technologies" :key="tKey">
          <NuxtImg v-if="tech.logoUrl" :src="tech.logoUrl" :alt="tech.name"></NuxtImg>
        </li>
      </ul>
    </li>
  </ul>

</template>

<style scoped>

.portfolio-list {
  @apply min-h-screen h-screen max-h-screen flex flex-row overflow-visible;
}

.card {
  @apply max-h-[80svh] min-w-fit ;

  .header {
    @apply pl-4;

    .title {
      @apply text-2xl md:text-3xl;
    }

    .subtitle{
      @apply text-sm;
    }
  }
}


</style>
