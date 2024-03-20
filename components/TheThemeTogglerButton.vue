<script setup lang="ts">
import type {BasicColorMode} from "@vueuse/core";

const colorMode = useColorMode<BasicColorMode>()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <i
        :class="isDark ? 'pi pi-moon' : 'pi pi-sun'"
        class="theme-switcher"
        @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

