<script setup lang="ts">


import TheStatusIndicator from "~/components/dreamlab/projects/TheStatusIndicator.vue";

const props = defineProps<{
  title: string
  slug?: string
  subtitle?: string
  caseStudyHtml?: string
  techs?: string[],
  website?: string,
  coverId?: string,
  status?: string,
  technologies?: string[]
}>();

const {uploadFile} = await GqlGetImageById({id: props.coverId ?? "-1"});
const config = useRuntimeConfig();

const imagePlaceholder = "/dreamlab/placeholders/project-cover.png";

const coverUrl = computed(() => {
  if (props.coverId) {
    return config.public.backend.url + uploadFile?.data?.attributes?.url;
  } else {
    return imagePlaceholder;
  }
})

const caseStudyText = computed(() => {
  if (props.caseStudyHtml && props.caseStudyHtml.length < 400) {
    return props.caseStudyHtml
  } else {
    return props.caseStudyHtml?.substring(0, 400) + `...`
  }
})

</script>

<template>
  <UCard>
    <template #header>
      <ULink :to="`/dreamlab/portfolio/` + slug" class="title" v-if="slug">
        {{ title }}
      </ULink>
      <h3 class="title" v-else>{{title}}</h3>
      <h4 class="subtitle">{{ subtitle }}</h4>
    </template>
    <div class="cover-image">
      <NuxtImg :src="coverUrl" :alt="uploadFile?.data?.attributes?.alternativeText"/>
    </div>
    <slot name="default">
      <div class="case-study" v-if="caseStudyHtml" v-html="caseStudyText"/>
      <div class="technologies" v-if="techs">
        <ul class="section-header">
          Techs
          <li class="tech-item" v-for="(tech, tIdx) in techs" :key="tIdx">
            {{ tech }}
          </li>
        </ul>
      </div>
    </slot>
    <template #footer>
      <div class="flex flex-row justify-between">
        <TheStatusIndicator :status="status" />
        <div v-if="website" class="website">

          <UTooltip :text="website"
                    :popper="{ placement: 'top',
                  arrow: 'true',
                  locked: 'true'
        }"
          >
            <UIcon name="i-mdi-globe" :class="`icon`"/>
          </UTooltip>

        </div>
      </div>
    </template>
  </UCard>
</template>

<style scoped>
.title {
  @apply text-lg sm:text-xl lg:text-2xl;
}

.cover-image {
  @apply flex flex-col h-16 sm:h-24 lg:h-32;

  img {
    @apply w-full object-cover min-h-0;
  }
}

.case-study {
  @apply italic;
}

.card-footer {
  @apply flex flex-row;
}

.website {
  @apply flex flex-row gap-2 items-center self-end transition-all duration-700 ease-in-out;

  span {
    @apply hidden md:inline-flex
  }
}
</style>
