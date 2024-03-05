<script setup lang="ts">
import {ref} from 'vue';
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import TheThemeTogglerButton from "~/components/dreamlab/branding/TheThemeTogglerButton.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const isOpen = ref(false);

const navigationLinks: NavigationItem[] = [
  {label: "Home", to: "/"},
  {label: "Portfolio", to: "/dreamlab/portfolio"},
  // Additional links...
];

interface NavigationProps {
  pageTitle?: string
  navItems?: NavigationItem[]
}

const props = defineProps<NavigationProps>();

const handleOpenMenu = () => isOpen.value = !isOpen.value;
</script>

<template>
  <nav class="navbar">
    <div class="wrapper">
      <div class="nav-trigger">
        <span class="menu-icon">
          <UIcon name="i-fa6-solid-bars" @click="handleOpenMenu"/>
        </span>
      </div>
      <div class="branding">
        <slot name="branding">

        </slot>
      </div>
      <div class="actions">
        <UHorizontalNavigation  :links="navigationLinks" class="hidden sm:flex"/>
        <TheThemeTogglerButton/>
      </div>

    </div>
  </nav>

  <USlideover v-model="isOpen" side="left">
    <nav class="navbar">
      <div class="wrapper">
        <div class="nav-trigger">
        <span class="menu-icon">
          <UIcon name="i-fa6-solid-xmark" @click="handleOpenMenu"/>
        </span>
        </div>
        <div class="title">
          menu
        </div>
      </div>
    </nav>
    <UVerticalNavigation :links="navigationLinks"/>
  </USlideover>
</template>

<style scoped>
.navbar {
  @apply relative w-full grid max-w-screen;

  .wrapper {
    @apply grid grid-cols-navigation w-full px-4 items-center text-2xl lg:max-w-screen-lg mx-auto min-h-12;

    .nav-trigger {
      @apply sm:hidden justify-self-start;

      .menu-icon {
        @apply cursor-pointer text-primary grid place-items-center;
      }

    }

    .actions {
      @apply flex gap-4 items-center col-start-3 justify-self-end;

      &.mobile {
        @apply gap-2;
      }
    }

  }
}


/* Add other styles as needed */
</style>
