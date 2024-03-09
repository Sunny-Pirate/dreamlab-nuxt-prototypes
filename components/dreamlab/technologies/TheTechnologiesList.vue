<script setup lang="ts">
import type {TechnologyEntity} from "#gql"

const showAllTechs = ref<boolean>(false)

interface TechListProps {
  items: TechnologyEntity[]
  showAll?: boolean
  maxVisibleAvatars?: number
  preventClick?: boolean
}

const props = withDefaults(defineProps<TechListProps>(), {
  showAll: false,
  maxVisibleAvatars: 3,
  preventClick: false
})


if (props.showAll) showAllTechs.value = props.showAll;
const handleShowTech = () => {
  if (props.preventClick) return
  showAllTechs.value = !showAllTechs.value;
}

const logError = (event: Event) => {
  console.log(event)
}

</script>

<template>
  <div class="techs">
    <h6 class="title">Technologies</h6>
    <AvatarGroup size="xs" :max="showAllTechs ? null : props.maxVisibleAvatars" @click.prevent="handleShowTech">
      <Avatar v-for="(tech, tIdx) in items" :key="tIdx"
              shape="circle"
              size="normal"
              :image="useStrapiBackend(tech.attributes?.thumbnail?.data?.attributes?.url as string)"
              @error="logError"
      />
    </AvatarGroup>
  </div>
</template>

<style scoped>

</style>
