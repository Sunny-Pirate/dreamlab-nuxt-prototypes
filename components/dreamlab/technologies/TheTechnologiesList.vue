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

</script>

<template>
  <div class="techs">
    <h6 class="title">Technologies</h6>
    <UAvatarGroup size="xs" :max="showAllTechs ? null : props.maxVisibleAvatars"  @click.prevent="handleShowTech">
      <UAvatar v-for="(tech, tIdx) in items"
               class="list"
               :key="tIdx"
               :src="useStrapiBackend(tech.attributes?.thumbnail?.data?.attributes?.url as string)"
               :alt="tech.attributes?.thumbnail?.data?.attributes?.alternativeText"
      />
    </UAvatarGroup>
  </div>
</template>

<style scoped>
.techs {
  @apply grid grid-cols-1 justify-self-start;

  .list {
    @apply flex flex-row cursor-pointer;
  }
}
</style>
