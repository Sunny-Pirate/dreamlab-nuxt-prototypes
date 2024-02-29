<script setup lang="ts">
import {ref, computed} from 'vue';
import {useRoute} from 'vue-router';
import {useWindowSize, useBreakpoints, breakpointsTailwind} from '@vueuse/core';
import TheThemeTogglerButton from "~/components/dreamlab/TheThemeTogglerButton.vue";
import TheDreamlabLogo from "~/components/dreamlab/TheDreamlabLogo.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const isOpen = ref(false);
const route = useRoute();
const {width} = useWindowSize();
const isLaptop = breakpoints.greaterOrEqual("md")

const navigationLinks = [
  {label: "Home", to: "/"},
  {label: "Portfolio", to: "/dreamlab/portfolio"},
  // Additional links...
];

export interface NavigationProps {
  pageTitle?: string
}

const props = defineProps<NavigationProps>();


const isIndexPage = computed(() => route.path === "/");
const handleOpenMenu = () => isOpen.value = !isOpen.value;
</script>

<template>
  <nav class="navbar">
    <div class="wrapper"><!-- Mobile Menu Trigger / Logo -->
      <div class="menu-trigger" @click="handleOpenMenu">
      <span v-if="isOpen" class="menu-icon">
        <UIcon name="i-fa6-solid-xmark"/>
      </span>
        <span v-else class="menu-icon">
        <UIcon name="i-fa6-solid-bars"/>
      </span>
      </div>

      <!-- Title (for mobile) or Logo (for desktop) -->
      <div class="title-or-logo">
        <TheDreamlabLogo v-if="isLaptop" fill="fill-emerald-400" stroke="stroke-purple-400"/>
        <h1 v-else>{{ pageTitle }}</h1>
      </div>

      <!-- Desktop Navigation / Mobile Action Items -->
      <div class="navigation-or-actions">
        <div v-if="isLaptop" class="desktop-navigation">
          <a v-for="link in navigationLinks" :key="link.label" :href="link.to" class="nav-link">{{ link.label }}</a>
        </div>
      </div>
      <TheThemeTogglerButton />
    </div>
  </nav>

  <!-- Mobile Navigation Drawer -->
  <!-- ... -->
</template>

<style scoped>
.navbar {
  @apply fixed top-0 left-0 right-0 ;

  .wrapper {
    @apply flex justify-between items-center px-4 py-2 gap-4;
  }
}

.menu-trigger {
  @apply p-2 cursor-pointer md:hidden;
  /* Only show the menu trigger on mobile */
}

.menu-icon {
  @apply text-2xl;
}

.title-or-logo {
  @apply flex-1 flex justify-center md:justify-start;

    &:has(svg) {
      @apply w-12 h-12;
    }
}
.navigation-or-actions {
  @apply flex-1 flex justify-end;
}

.desktop-navigation {
  @apply hidden md:flex space-x-4;
  /* Only show the navigation links on desktop */
}

.nav-link {
  @apply text-emerald-500 hover:text-emerald-600;
}



/* Add other styles as needed */
</style>
