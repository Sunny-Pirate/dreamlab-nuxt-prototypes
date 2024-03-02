<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import TheFooter from "~/components/layout/TheFooter.vue";

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
    caseStudyIntro:
        "DreamLab.Solution WebApp is a comprehensive project that showcases my commitment to blending innovative design with cutting-edge technology. I focused on creating a user-friendly, responsive interface.",
    technologies: [
      {name: "VueJs", logoUrl: "/dreamlab/mocks/logos/vue-icon.png"},
      {name: "Nuxt 3", logoUrl: "/dreamlab/mocks/logos/nuxt-js-icon.png"},
      {name: "Pinia", logoUrl: "/dreamlab/mocks/logos/pinia-icon.png"},
      {name: "Strapi", logoUrl: "/dreamlab/mocks/logos/strapi-icon.png"},
      {name: "i18n", logoUrl: "/dreamlab/mocks/logos/i18n-icon.png"},
      {name: "Tailwind", logoUrl: "/dreamlab/mocks/logos/tailwindcss-icon.png"},
    ]
  },
  {
    title: "Workshops plugin",
    subtitle: "Workshop plugin integration based on the KITMe.App services",
    imageUrl: "/dreamlab/mocks/projects/workshops-plugin-cover.png",
    slug: "/dreamlab/portfolio/kitmeapp-workshop-plugin",
    caseStudyIntro:
        "The WMS offers managers a user-friendly platform to efficiently organize customized workshops, catering to varied needs and preferences with ease and depth.",
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
    imageUrl: "/dreamlab/mocks/projects/profilo-social-personal-area.png",
    caseStudyIntro:
        "Directed Profilo Social's frontend creation with React/Next.js, integrating NextAuth for user authentication, Nodemailer for email alerts, and Stripe for secure payments.",
    testimonials: ["Paolucci Ventures"],
    technologies: [
      {name: "Git", logoUrl: "/dreamlab/mocks/logos/git-icon.png"},
      {name: "Next.JS", logoUrl: "/dreamlab/mocks/logos/nextjs-icon.png"},
      {name: "Typescript", logoUrl: "/dreamlab/mocks/logos/typescript-icon.png"},
      {name: "Prisma", logoUrl: "/dreamlab/mocks/logos/prisma-icon.png"},
      {name: "Nodemailer", logoUrl: "/dreamlab/mocks/logos/nodemailer-icon.png"},
      {name: "Stripe API", logoUrl: "/dreamlab/mocks/logos/stripe-icon.png"},
      {name: "SCSS", logoUrl: "/dreamlab/mocks/logos/sass-icon.png"},
    ]
  },
  {
    title: "KITme App",
    subtitle: "A Scalable Social Platform Pioneered with SunnyDay.Software",
    imageUrl: "/dreamlab/mocks/projects/kitmeapp-design-example.png",
    slug: "/dreamlab/portfolio/kitme-app",
    caseStudyIntro:
        "In collaboration with SunnyDay.software, the KITme App project was born, aiming to forge a scalable social platform. My role spanned from frontend development to design and project oversight, employing technologies like React, Next.js, Vue.js, Vuetify, Flutter, alongside Adobe XD, Balsamiq for wireframing, and Jira and Bitbucket for project management. This endeavor marked a significant milestone as my second project, thrusting me into a journey of discovery across various facets of development and design.",
    technologies: [
      {name: "React", logoUrl: "/dreamlab/mocks/logos/react-icon.png"},
      {name: "Next.JS", logoUrl: "/dreamlab/mocks/logos/nextjs-icon.png"},
      {name: "VueJs", logoUrl: "/dreamlab/mocks/logos/vue-icon.png"},
      {name: "Vuetify", logoUrl: "/dreamlab/mocks/logos/vuetify-icon.png"},
      {name: "Flutter", logoUrl: "/dreamlab/mocks/logos/flutter-icon.png"},
      {name: "Adobe XD", logoUrl: "/dreamlab/mocks/logos/adobe-xd-icon.png"},
      {name: "Balsamiq Mockups", logoUrl: "/dreamlab/mocks/logos/balsamiq-icon.png"},
      {name: "Antora / Asciidoc", logoUrl: "/dreamlab/mocks/logos/asciidoc-icon.png"},
      {name: "Jira", logoUrl: "/dreamlab/mocks/logos/jira-icon.png"},
      {name: "Bitbucket", logoUrl: "/dreamlab/mocks/logos/bitbucket-icon.png"},
    ],
  },
  {
    title: "SIO 2023 Medical Conference",
    subtitle: "CMS & Schedule App development for the 108° National Congress of the Italian Society of Otolaryngology",
    // imageUrl: "/dreamlab/mocks/projects/sio-2023-conference.png",
    slug: "/dreamlab/portfolio/sio-2023-medical-conference",
    caseStudyIntro:
        "For the prestigious SIO 2023, in partnership with SunnyDay Software, we crafted a tailored CMS using Strapi, complemented by a robust frontend leveraging a suite of modern technologies including Next.js, Apollo Client, and Chakra UI. This project aimed to streamline the management and dissemination of conference information, providing an intuitive user experience for both organizers and attendees.",
    technologies: [
      {name: "Strapi", logoUrl: "/dreamlab/mocks/logos/strapi-icon.png"},
      {name: "Next.JS", logoUrl: "/dreamlab/mocks/logos/nextjs-icon.png"},
      {name: "Apollo Client", logoUrl: "/dreamlab/mocks/logos/graphql-icon.png"},
      {name: "React", logoUrl: "/dreamlab/mocks/logos/react-icon.png"},
      {name: "Redux", logoUrl: "/dreamlab/mocks/logos/redux-icon.png"},
      {name: "Chakra UI", logoUrl: "/dreamlab/mocks/logos/chakraui-icon.png"},
    ],
  },
  {
    title: "Mattiazzo Law CMS and Frontend",
    subtitle: "Innovative CMS and Frontend Solutions for Mattiazzo Law Firm",
    // imageUrl: "/dreamlab/mocks/projects/mattiazzo-law-firm.png",
    slug: "/dreamlab/portfolio/mattiazzo-law-firm-cms",
    caseStudyIntro:
        "Developing a comprehensive CMS and frontend for Mattiazzo Law Firm, we utilized a blend of advanced technologies including Next.js, Apollo Client, and MUI, ensuring a seamless and secure user experience. This project provided the firm with a dynamic platform for content management and client engagement, emphasizing privacy and ease of access.",
    technologies: [
      {name: "Next.JS", logoUrl: "/dreamlab/mocks/logos/nextjs-icon.png"},
      {name: "Apollo Client", logoUrl: "/dreamlab/mocks/logos/graphql-icon.png"},
      {name: "MUI", logoUrl: "/dreamlab/mocks/logos/mui-icon.png"},
      {name: "React", logoUrl: "/dreamlab/mocks/logos/react-icon.png"},
    ],
  }


]

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smallerOrEqual("sm")

</script>

<template>
  <main>
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
            <h3 class="text-primary text-lg font-headings font-bold">{{ project.title }}</h3>
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
    <TheFooter/>
  </main>


</template>

<style scoped>

main {

  footer {
    @apply absolute bottom-0 w-full;
  }
}

.content {
  @apply grid gap-4;

  .image-wrapper {

    img {
      @apply w-full h-32 object-cover object-center;
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
      @apply size-6;

      img {
        @apply size-max object-center object-cover;
      }
    }
  }
}


</style>
