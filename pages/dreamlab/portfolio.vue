<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import TheFooter from "~/components/layout/TheFooter.vue";
import placeholderImage from "~/assets/img/ph/project-cover.png"

interface TechnologyItem {

  name: string;
  logoUrl: string;
  description?: string;

}

interface ProjectCardItem {
  title: string
  subtitle: string
  slug: string
  cover: string
  caseStudy: string
  status: string
  website: string
}


const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smallerOrEqual("sm")

const {status, pending, data, refresh} = await useAsyncGql("getLimitedProjects", {
  limit: 5
})

const projects = computed(() => data.value.projects?.data.map((project) => {
      return {
        title: project.attributes?.title,
        subtitle: project.attributes?.subtitle,
        slug: project.attributes?.slug,
        cover: project.attributes?.cover?.data === null ? "/dreamlab/placeholders/project-cover.png" : project.attributes?.cover?.data?.id,
        caseStudy: project.attributes?.caseStudy,
        status: project.attributes?.status,
        website: project.attributes?.website
      } as ProjectCardItem
    })
)

</script>

<template>
  <main class="webpage">
    <TheNavigation pageTitle="Portfolio"/>

    <!--    <UProgress v-if="pending" animation="elastic"/>-->
    <div class="webpage-content no-data" v-if="projects === undefined || projects.length === 0">
      <UCard class="project-card">
        <div>
          <h3 class="title">Oops...</h3>
          <p class="content">It looks like there are no public projects at the moment.</p>
        </div>
      </UCard>
    </div>
    <div v-else class="webpage-content">
      <UCarousel v-slot="{ item, index }"
                 :items="projects"
                 :arrows="!isMobile && projects.length > 1"
                 indicators
                 class="place-self-center"
                 :ui="{ item: 'basis-full grid place-items-center' }"
      >
        <UCard class="project-card">
          <template #header>
            <ULink :to="item.slug">
              <h3 class="title">{{ item.title }}</h3>
            </ULink>
            <h4 class="`subtitle`">{{ item.subtitle }}</h4>
          </template>
          <template #default>
            <div class="image-wrapper">
              <NuxtImg :src="item.cover" :alt="item.title"/>
            </div>
            <div class="content" v-html="item.caseStudy" />
          </template>
          <template #footer>
            <div class="meta-info">
              <div class="status-indicator">{{ item.status }}</div>
              <div class="website">{{ item.website }}</div>
            </div>
          </template>
        </UCard>
      </UCarousel>
    </div>

    <TheFooter/>
  </main>


</template>

<style scoped>


.no-data {
  @apply grid grid-cols-1 grid-rows-1 place-self-center;
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

<!--


        <div class="content">
          <div class="image-wrapper" v-if="item.imageUrl">
            <NuxtImg :src="item.imageUrl" :alt="item.imageAltText"/>
          </div>
          <div class="case-study text-ellipsis">
            {{ item.caseStudyIntro }}
          </div>
        </div>

        <template #footer>
          <div class="technology-section" v-if="item.technologies">
            <h5>Techs:</h5>
            <ul class="technology-list">
              <li class="technology-item" v-for="(tech, tKey) in item.technologies" :key="tKey">
                <UTooltip :text="tech.name">
                  <NuxtImg v-if="tech.logoUrl" :src="tech.logoUrl" :alt="tech.name"></NuxtImg>
                </UTooltip>
              </li>
            </ul>
          </div>
        </template>
        -->

<!--
const _projects: ProjectItem[] = [
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
-->
