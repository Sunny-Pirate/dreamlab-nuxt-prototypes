<script setup lang="ts">

import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";
import type {NuxtLinkProps} from "#app";
import type {ButtonProps} from "primevue/button";


export interface TheNavbarProps {
  title?: string
  titlePos?: "start" | "center"
  links?: (NuxtLinkProps & ButtonProps)[]
  showLogo?: boolean
}

const props = defineProps<TheNavbarProps>();


</script>

<template>
  <nav class="navbar">
    <Toolbar :pt="{ root: 'p-toolbar p-component flex items-center justify-between flex-wrap gap-6 px-6 py-2 min-h-[4rem]'}">
      <template #start v-if="showLogo">
        <div class="flex items-center gap-2">
          <slot name="brand">
            <TheDreamlabVectorLogo @click="() => navigateTo('/')" class="size-10 fill-emerald-500 stroke-purple-500 stroke-1"/>
          </slot>
        </div>
        <span v-if="title && titlePos === 'start'">{{ title }}</span>
      </template>
      <template #center v-if="title && titlePos === ('center' || undefined)">
        {{ title }}
      </template>
      <template #end>
        <NuxtLink class="nav-item" v-for="(item, nKey) in links" :key="nKey" :to="item.to">
          <Button :label="item.label" :icon="item.icon" link/>
        </NuxtLink>
        <TheUserAvatar  />
      </template>
    </Toolbar>
  </nav>
</template>
<style scoped>


</style>
