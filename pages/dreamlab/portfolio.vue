<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

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
    testimonials: ["SunnyDay.Software"],
    technologies: [
      {name: "Balsamiq Mockups", logoUrl: "/dreamlab/mocks/logos/balsamiq-icon.png"},
      {name: "Adobe Illustrator", logoUrl: "/dreamlab/mocks/logos/adobe-illustrator-icon.png"},
      {name: "Git", logoUrl: "/dreamlab/mocks/logos/git-icon.png"},
      {name: "Google Drive", logoUrl: "/dreamlab/mocks/logos/google-drive-color-icon.png"},
      {name: "GraphQL", logoUrl: "/dreamlab/mocks/logos/graphql-icon.png"},
      {name: "Next.JS", logoUrl: "/dreamlab/mocks/logos/nextjs-icon.png"},
      {name: "NPM", logoUrl: "/dreamlab/mocks/logos/npm-icon.png"},
      {name: "Postgresql", logoUrl: "/dreamlab/mocks/logos/postgresql-icon.png"},
      {name: "SCSS", logoUrl: "/dreamlab/mocks/logos/sass-icon.png"},
      {name: "Typescript", logoUrl: "/dreamlab/mocks/logos/typescript-icon.png"},
    ]
  },
  {
    title: "Profilo Social",
    slug: "/dreamlab/portfolio/profilo-social",
    caseStudyIntro: "Frontend development with React.js.",
    testimonials: ["Paolucci Ventures"]
  },
]

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smallerOrEqual("sm")

</script>

<template>
  <TheNavigation pageTitle="Portfolio"/>

  <UCarousel v-slot="{ item: project, index }"
             :items="projects"
             :arrows="!isMobile"
             indicators
             class="page-content"
             :ui="{ item: 'basis-full grid place-items-center' }"
  >

    <UCard>
      <template #header>
        <ULink
            :to="project.slug"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <h3 class="text-primary">{{ project.title }}</h3>
        </ULink>
        <h4 class="text-sm">{{ project.subtitle }}</h4>
      </template>
      <div class="content">
        <div class="image-wrapper" v-if="project.imageUrl">
          <NuxtImg :src="project.imageUrl" :alt="project.imageAltText"/>
        </div>
        <div class="case-study text-ellipsis">
          {{ project.caseStudyIntro }}
        </div>
      </div>

      <template #footer>
        <div class="technology-section" v-if="project.technologies">
          <h5>Techs:</h5>
          <ul class="technology-list">
            <li class="technology-item" v-for="(tech, tKey) in project.technologies" :key="tKey">
              <UTooltip :text="tech.name">
                <NuxtImg v-if="tech.logoUrl" :src="tech.logoUrl" :alt="tech.name"></NuxtImg>
              </UTooltip>
            </li>
          </ul>
        </div>
      </template>
    </UCard>

  </UCarousel>
  <!--

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
  -->

</template>

<style scoped>


.content {
  @apply grid gap-4;

  .image-wrapper {

    img {
      @apply w-full h-24 object-cover;
    }
  }

  .case-study {
    @apply px-2;
  }
}

.technology-section {

  @apply grid grid-cols-1 gap-2 px-2;

  .technology-list {
    @apply flex flex-row w-full gap-2;

    .technology-item {
      @apply w-6 h-6;
    }
  }
}


</style>
