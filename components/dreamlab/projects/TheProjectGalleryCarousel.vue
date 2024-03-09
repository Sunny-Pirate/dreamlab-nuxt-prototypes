<script setup lang="ts">
import type {UploadFileEntity} from "#gql"

interface GalleryCarouselItemProps {
  items: UploadFileEntity[]
}

const props = withDefaults(defineProps<GalleryCarouselItemProps>(), {})

const carouselRef = ref()
const isModalOpenRef = ref(false)


onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 5000)
})

</script>

<template>

  <div class="wrapper">
    <h6 class="title">Screenshots</h6>
    <UCarousel :items="items" v-slot="{ item }" class="col-span-full" ref="carouselRef">
      <div class="flex flex-col h-32 mx-auto">
        <NuxtImg :src="useStrapiBackend(item.attributes.url)" class="w-full object-cover min-h-0" @click="isModalOpenRef"/>

      </div>
      <UModal v-model="isModalOpenRef">
        <div class="p-4">
          <NuxtImg :src="useStrapiBackend(item.attributes.url)" class="w-full"/>
        </div>
      </UModal>
    </UCarousel>
  </div>
</template>

<style scoped>
/*
.wrapper {
  @apply col-span-full;
}
*/
</style>
