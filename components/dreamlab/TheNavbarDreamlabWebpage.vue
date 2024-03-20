<script setup lang="ts">

import TheNavbar from "~/components/TheNavbar.vue";
import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";

export interface TheNavbarDreamlabProps {
  pageTitle?: string
}

defineProps<TheNavbarDreamlabProps>()
</script>

<template>

  <TheNavbar :title >
    <template #branding>
      <NuxtLink to="/">
        <TheDreamlabVectorLogo/>
      </NuxtLink>
    </template>
    <template #actions>
      <slot name="actions">

      </slot>
    </template>
  </TheNavbar>
</template>

<style scoped>
.dreamlab-vector-logo{
  @apply size-8 md:size-10 fill-emerald-400 stroke-purple-600 stroke-1;
}
</style>
