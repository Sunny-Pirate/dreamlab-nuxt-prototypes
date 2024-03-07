<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";
import TheDreamlabTextualLogo from "~/components/dreamlab/branding/TheDreamlabTextualLogo.vue";
import type { GetLimitedProjectsQuery, Project, UploadFileEntityResponse} from '#gql'
import ThePortfolioSlide from "~/components/dreamlab/projects/ThePortfolioSlide.vue";

const config = useRuntimeConfig()


const GqlInstance = useGql()
const {projects}: GetLimitedProjectsQuery = await GqlInstance("getLimitedProjects", {limit: 5});

const count = computed(() => {
  return projects?.meta.pagination.total ?? 0
})

const carouselItems = computed(() => {
  return projects?.data.map(item => ({
    title: item.attributes?.title,
    subtitle: item.attributes?.subtitle,
    status: item.attributes?.status,
    website: item.attributes?.website,
    caseStudy: item.attributes?.caseStudy,
    cover: item.attributes?.cover,
    slug: item.attributes?.slug,
    technologies: item.attributes?.technologies,
  } as Project))
})

const coverId = computed(() => (cover: UploadFileEntityResponse) => {
  return cover.data?.id;
})
</script>

<template>

  <main class="webpage dashboard">
    <TheNavigation>
      <template #branding>
        <TheDreamlabVectorLogo @click="$router.push('/')"/>
        <TheDreamlabTextualLogo/>
      </template>
    </TheNavigation>

    <div class="container">

      <ThePortfolioSlide v-if="count === 0"
                         title="Oops..."
                         subtitle="It looks like there are no public projects at the moment."
                         caseStudyHtml="Try to contact us with the <b>Contact</b> page"

      >
        <UButton label="Contact Us" variant="soft" @click="navigateTo('/dreamlab/contact-us')"/>
      </ThePortfolioSlide>

      <UCarousel v-else v-slot="{ item, index }"
                 :items="carouselItems"
                 :arrows="count > 1"
                 indicators
      >
        <ThePortfolioSlide :title="item.title"
                           :slug="item.slug"
                           :subtitle="item.subtitle"
                           :coverId="coverId(item.cover)"
                           :website="item.website"
                           :caseStudyHtml="item.caseStudy"
                           :technologies="item.technologies"
                           :status="item.status"
                           @click="navigateTo('/dreamlab/portfolio/' + item.slug)"
                           class="cursor-pointer"
        />
      </UCarousel>
    </div>


    <TheFooter/>
  </main>

</template>

<style scoped>
  .container {
    @apply relative w-full grid grid-cols-1 grid-rows-1 place-items-center;
  }

.case-study {
  @apply italic;
}
</style>
