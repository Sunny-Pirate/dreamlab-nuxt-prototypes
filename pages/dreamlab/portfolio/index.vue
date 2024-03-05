<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";
import TheDreamlabTextualLogo from "~/components/dreamlab/branding/TheDreamlabTextualLogo.vue";
import {type GetLimitedProjectsQuery, type Project} from '#gql'
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
    cover: item.attributes?.cover?.data?.id,
    slug: item.attributes?.slug,
    technologies: item.attributes?.technologies?.data.map((item) => item.id)
  } as Project))
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
                           :subtitle="item.subtitle"
                           :slug="item.slug"
                           :website="item.website"
                           :caseStudyHtml="item.caseStudy"
                           :coverId="item.cover"
                           :status="item.status"
        />
        <!--        <UCard class="project-card">
                  <template #header>
                    <div class="header">
                      <NuxtLink :to="item.slug">
                        <h3 class="title">{{ item.title }}</h3>
                      </NuxtLink>
                      <h4 class="subtitle">{{ item.subtitle }}</h4>
                    </div>
                  </template>
                  <template #default class="card-body">
                    <div class="cover">
                      &lt;!&ndash;              <NuxtImg :src="$config.public.backend.url + item.cover.cover.uploadFile.data.attributes.url"/>&ndash;&gt;
                    </div>
                    <div class="case-study" v-html="item.caseStudy"/>

                    <div class="technologies">
                      <h5 class="tech-list-title">Used technologies:</h5>
                      <div class="tech-list">
                        &lt;!&ndash;                <div class="tech-item" v-for="tech in item.technologies">&ndash;&gt;
                        &lt;!&ndash;                                   <UTooltip :text="tech.attributes.title" :popper="{ placement: 'top', arrow: true, strategy: 'absolute' }">
                                                              <div class="thumbnail">
                                                                <NuxtImg :src="$config.public.backend.url +tech.attributes.thumbnail.data.attributes.url"
                                                                         :alt="tech.attributes.thumbnail.data.attributes.alternativeText"

                                                                />
                                                              </div>
                                                            </UTooltip>&ndash;&gt;
                        &lt;!&ndash;                </div>&ndash;&gt;
                      </div>
                    </div>
                  </template>
                  <template #footer>
                    <div class="meta-info">
                      &lt;!&ndash;              <div class="status-indicator" :class="item.status">{{ item.status }}</div>&ndash;&gt;
                      &lt;!&ndash;              <div class="website-indicator" v-if="item.website">&ndash;&gt;
                      &lt;!&ndash;                <ULink class="address" :to="item.website" target="_blank" external="external">&ndash;&gt;
                      &lt;!&ndash;                  {{ item.website }}&ndash;&gt;
                      &lt;!&ndash;                </ULink>&ndash;&gt;
                      &lt;!&ndash;                <UTooltip :text="item.website" :popper="{ placement: 'top', arrow: true, strategy: 'absolute' }">&ndash;&gt;
                      &lt;!&ndash;                  <UIcon name="i-mdi-web"/>&ndash;&gt;
                      &lt;!&ndash;                </UTooltip>&ndash;&gt;
                      &lt;!&ndash;              </div>&ndash;&gt;
                    </div>
                  </template>
                </UCard>-->
      </UCarousel>
    </div>


    <TheFooter/>
  </main>

</template>

<style scoped>
.dashboard {

  @apply h-screen grid grid-cols-1 grid-rows-dashboard;

  .container {
    @apply relative w-full grid grid-cols-1 grid-rows-1 place-items-center;
  }
}

.case-study {
  @apply italic;
}
</style>
