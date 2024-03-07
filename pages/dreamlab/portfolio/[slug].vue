<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
import TheDreamlabTextualLogo from "~/components/dreamlab/branding/TheDreamlabTextualLogo.vue";
import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";
import TheStatusIndicator from "~/components/dreamlab/projects/TheStatusIndicator.vue";
import type {BreadcrumbLink} from "#ui/types"
import type {UploadFileEntity} from "#gql"
import TheTechnologiesList from "~/components/dreamlab/technologies/TheTechnologiesList.vue";
import TheProjectGalleryCarousel from "~/components/dreamlab/projects/TheProjectGalleryCarousel.vue";
import {useStrapiBackend} from "~/composables/useStrapiBackend";

const route = useRoute();
const pageSlug = route.params.slug
const config = useRuntimeConfig();
const GqlInstance = useGql()


const {projects: projectsWithThisSlug} = await GqlInstance("getProjectIdBySlug", {slug: pageSlug as string});
const projectId = projectsWithThisSlug?.data[0].id || "-1"; // Get the first element or -1 to handle the error with graphQl
const {project} = await GqlInstance("getProjectById", {id: projectId});

const coverUploadFile = ref<UploadFileEntity>();
const galleryUploadFiles = ref<UploadFileEntity[]>([]);

const getImages = () => project?.data?.attributes?.gallery?.data.map(async (imageId) => {
  const {uploadFile} = await GqlGetImageById({id: imageId.id as string});
  // console.log('Image: ', uploadFile?.data?.attributes?.name)
  if (uploadFile?.data) {
    galleryUploadFiles.value.push(uploadFile.data)
  }
})

const getCoverImage = async () => {
  const {uploadFile} = await GqlGetImageById({id: project?.data?.attributes?.cover?.data?.id as string});
  if (uploadFile?.data) {
    coverUploadFile.value = uploadFile.data;
  }
}

onMounted(() => {
  getCoverImage();
  getImages();
})


const projectStepDescriptionItems = computed(() => ([
  {label: "Goal", content: project?.data?.attributes?.goal, disabled: !project?.data?.attributes?.goal},
  {label: "Strategy", content: project?.data?.attributes?.strategy, disabled: !project?.data?.attributes?.strategy},
  {label: "Description", content: project?.data?.attributes?.description, disabled: !project?.data?.attributes?.description},
  {label: "Case Study", content: project?.data?.attributes?.caseStudy, disabled: !project?.data?.attributes?.caseStudy},
  {label: "Results", content: project?.data?.attributes?.results, disabled: !project?.data?.attributes?.results},
]))

const breadcrumbLinks = computed(() => {
  const _breadcrumbStaticItems: BreadcrumbLink[] = [
    {label: 'Home', to: "/", icon: "i-heroicons-home-solid"},
    {label: 'Portfolio', to: "/dreamlab/portfolio", icon: "i-heroicons-briefcase"},
  ]
  const _pageBreadcrumbItem: BreadcrumbLink = {
    label: project?.data?.attributes?.codename as string || '_',
    to: '/dreamlab/portfolio/' + pageSlug,
    icon: 'i-heroicons-hashtag'
  }
  return [..._breadcrumbStaticItems, _pageBreadcrumbItem]
})

</script>

<template>
  <main class="webpage article">
    <TheNavigation>
      <template #branding>
        <TheDreamlabVectorLogo @click.prevent="$router.push('/')"/>
        <TheDreamlabTextualLogo/>
      </template>
    </TheNavigation>
    <header>
      <UBreadcrumb :links="breadcrumbLinks"/>
      <h3 class="title">{{ project?.data?.attributes?.title }} <span class="project-id" v-if="projectId">#ID: {{ projectId }}</span></h3>
      <h4 class="subtitle">{{ project?.data?.attributes?.subtitle }}</h4>
    </header>
    <section class="body">
      <NuxtImg :src="useStrapiBackend(coverUploadFile?.attributes?.url as string)"
               :alt="coverUploadFile?.attributes?.alternativeText"
               class="col-span-2 w-full h-40 object-cover mb-4"
      />
      <section class="meta">
        <TheProjectGalleryCarousel :items="galleryUploadFiles"/>
        <TheStatusIndicator :status="project?.data?.attributes?.status" class="item"/>
        <TheTechnologiesList :items="project?.data?.attributes?.technologies?.data"/>
      </section>
      <section class="container">
        <ClientOnly>
          <UTabs :items="projectStepDescriptionItems" class="content-tabs">
            <template #item="{ item }">
              <UContainer v-if="item.content">
                <div class="content" v-html="item.content"/>
              </UContainer>
            </template>
          </UTabs>
        </ClientOnly>
        <!--        <div class="gallery" ></div>-->
      </section>
    </section>
    <TheFooter/>
  </main>
</template>

<style scoped>
.article {
  @apply min-h-screen flex flex-col max-w-screen-lg mx-auto ;

  header {
    @apply pt-4 lg:pt-6 px-4;
  }

  .body {
    @apply flex-1 flex flex-col md:grid md:grid-cols-[2fr_1fr] auto-rows-min pt-2 lg:pt-4;

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


.project-id {
  @apply hidden sm:inline-flex;
}

.meta {
  @apply w-full grid grid-cols-2 p-4 pt-2 md:order-2 md:grid-cols-1 md:auto-rows-min order-last;

  .gallery {
    @apply col-span-full;
  }


}
</style>
