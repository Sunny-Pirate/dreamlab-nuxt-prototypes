<script setup lang="ts">
const colorMode = useColorMode()
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
    <UIcon
        :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        class="theme-switcher"
        @click="isDark = !isDark"
        dynamic
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.theme-switcher {
  @apply text-2xl;
}
</style>
