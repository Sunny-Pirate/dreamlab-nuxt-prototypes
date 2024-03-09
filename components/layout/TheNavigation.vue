<script setup lang="ts">
import {ref} from 'vue';
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import TheThemeTogglerButton from "~/components/dreamlab/branding/TheThemeTogglerButton.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const isOpen = ref(false);

const navigationLinks: HorizontalNavigationLink[] = [
  {label: "Home", to: "/"},
  {label: "Portfolio", to: "/dreamlab/portfolio"},
  {label: "Contact Us", to: "/dreamlab/contact-us"},
  // Additional links...
];

interface NavigationProps {
  pageTitle?: string
  navItems?: HorizontalNavigationLink[]
}

const props = defineProps<NavigationProps>();

const handleOpenMenu = () => isOpen.value = !isOpen.value;
</script>

<template>
  <nav class="navbar"></nav>
</template>

<style scoped>

</style>
