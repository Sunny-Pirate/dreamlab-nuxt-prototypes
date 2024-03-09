<script setup lang="ts">

interface TheLogoProps {
  fill?: string
  stroke?: string
  dashArray?: number
  dashInterval?: number
}


const props = defineProps<TheLogoProps>();

</script>

<template>
  <svg class="dreamlab-vector-logo" :class="[fill, stroke]" viewBox="0 0 100 100">
    <path d="M66.5,23,97.35,77,39.79,78.19,46,64.52,76.68,65,45.48,5.67ZM2.65,89.82l35.81-56.7L53.38,60,68.3,58.49,38.46,9.25,7.13,63Zm93.84-5-67-2.66,15.8-26.35L36.53,43.59,8.81,94.05,71,94.33Z"
           stroke-linecap="round" :stroke-dasharray="dashArray" :stroke-dashoffset="dashInterval" />
  </svg>
</template>

<style scoped>
svg {
  @apply size-12;
}
</style>
