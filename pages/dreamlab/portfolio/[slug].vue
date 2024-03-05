<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
import TheDreamlabTextualLogo from "~/components/dreamlab/branding/TheDreamlabTextualLogo.vue";
import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";
import TheStatusIndicator from "~/components/dreamlab/projects/TheStatusIndicator.vue";
import {type Project} from "#gql";

const route = useRoute();
const config = useRuntimeConfig();
const GqlInstance = useGql()
const {projects} = await GqlInstance("getProjectIdBySlug", {slug: route.params.slug as string});
const projectId = projects?.data[0].id || "-1";
const {project} = await GqlInstance("getProjectById", {id: projectId});

const DEFAULT_MAX_TECH_AVATARS: number = 3;
const showAllTechs = ref<boolean>(false)
const handleShowTech = () => {
  showAllTechs.value = !showAllTechs.value;
}

const projectData = computed(() => {
  return {
    id: projectId,
    title: project?.data?.attributes?.title,
    subtitle: project?.data?.attributes?.subtitle,
    website: project?.data?.attributes?.website,
    goal: project?.data?.attributes?.goal,
    strategy: project?.data?.attributes?.strategy,
    description: project?.data?.attributes?.description,
    caseStudy: project?.data?.attributes?.caseStudy,
    results: project?.data?.attributes?.results,
    technologies: project?.data?.attributes?.technologies
  } as Project & { id: string }
})

const cardTextualItems = computed(() => {
  const goal = {label: "Goal", content: projectData.value.goal, defaultOpen: true};
  const strategy = {label: "Strategy", content: projectData.value.strategy, defaultOpen: true};
  const description = {label: "Description", content: projectData.value.description, defaultOpen: true};
  const caseStudy = {label: "Case Study", content: projectData.value.caseStudy, defaultOpen: true};
  const results = {label: "Results", content: projectData.value.results, defaultOpen: true};

  return [goal, strategy, caseStudy, results]
})
</script>

<template>
  <main class="webpage article">
    <TheNavigation>
      <template #branding>
        <TheDreamlabVectorLogo @click="$router.push('/')"/>
        <TheDreamlabTextualLogo/>
      </template>
    </TheNavigation>
    <header>
      <h3 class="title">{{ projectData.title }} <span class="project-id" v-if="projectId">#ID: {{ projectId }}</span></h3>
      <h4 class="subtitle">{{ projectData.subtitle }}</h4>
    </header>
    <section class="body">
      <section class="meta">
        <div class="status">
          <h6 class="heading">Status</h6>
          <TheStatusIndicator :status="project?.data?.attributes?.status" class="item"/>
        </div>
        <div class="technologies" @click="handleShowTech">
          <h6 class="heading">Technologies</h6>
          <UAvatarGroup size="xs" :max="showAllTechs ? null : DEFAULT_MAX_TECH_AVATARS">
            <UAvatar v-for="(tech, tIdx) in projectData.technologies?.data"
                     :key="tIdx"
                     :src="config.public.backend.url + tech.attributes?.thumbnail?.data?.attributes?.url"
                     :alt="tech.attributes?.thumbnail?.data?.attributes?.alternativeText"
            />
          </UAvatarGroup>
        </div>
      </section>
      <section class="container">
        <div class="description" v-if="projectData.description" v-html="projectData.description" />
      </section>
    </section>
    <TheFooter/>
  </main>
</template>

<style scoped>
.article {
  @apply min-h-screen flex flex-col max-w-screen-lg mx-auto ;

  header {
    @apply pt-6 sm:pt-8 lg:pt-12 px-4;
  }

  .body {
    @apply flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] auto-rows-min pt-4 sm:pt-6 lg:pt-8;

  }
}

.container {
  @apply grid grid-cols-1 px-4 md:order-1;
}

.project-grid {
  @apply grid grid-cols-1 py-4 gap-4 sm:grid-cols-2;
}

.title {
  @apply text-center sm:text-left text-lg;
}

.heading {
  @apply font-headings text-sm;
}

.project-id {
  @apply hidden sm:inline-flex;
}

.meta {
  @apply w-full grid grid-cols-2 px-4 md:order-2 md:grid-cols-1 md:auto-rows-min;

  .technologies, .status {
    @apply grid grid-cols-1;

    .item {
      @apply justify-self-start self-center;
    }
    .list {
      @apply flex flex-row;
    }
  }

}
</style>
