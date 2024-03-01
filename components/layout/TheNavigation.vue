<script setup lang="ts">
import {ref, computed} from 'vue';
import {useRoute} from 'vue-router';
import {useWindowSize, useBreakpoints, breakpointsTailwind} from '@vueuse/core';
import TheThemeTogglerButton from "~/components/dreamlab/TheThemeTogglerButton.vue";
import TheDreamlabVectorLogo from "~/components/dreamlab/TheDreamlabVectorLogo.vue";
import TheDreamlabTextualLogo from "~/components/dreamlab/TheDreamlabTextualLogo.vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const isOpen = ref(false);
const route = useRoute();
const {width} = useWindowSize();
const isMobile = breakpoints.smallerOrEqual("sm")
// const isLaptop = breakpoints.greaterOrEqual("md")

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
  <nav class="navbar"
       :class="[isIndexPage ? 'fixed' : 'relative' ]"
  >
    <div class="wrapper">

      <div class="nav-trigger">
        <span class="menu-icon" v-if="isMobile">
          <UIcon name="i-fa6-solid-bars" @click="handleOpenMenu"/>
        </span>
      </div>
      <div class="branding">
        <TheDreamlabVectorLogo v-if="!isMobile && !isIndexPage" @click="$router.push('/')"/>
        <TheDreamlabTextualLogo v-if="!isMobile && !isIndexPage"/>
      </div>
      <div class="title">

      </div>
      <div class="actions" :class="{'mobile': isMobile}">
        <a v-if="!isMobile"
           v-for="link in navigationLinks" :key="link.label"
           :href="link.to"
           class="nav-link"
           :class="{'active': $route.path === link.to}"
        >
          {{ link.label }}
        </a>
        <TheThemeTogglerButton/>
      </div>

    </div>
  </nav>

  <USlideover v-model="isOpen"
              side="left"
  >
    <nav class="navbar">
      <div class="wrapper">
        <div class="nav-trigger">
        <span class="menu-icon" v-if="isMobile">
          <UIcon name="i-fa6-solid-xmark" @click="handleOpenMenu"/>
        </span>
        </div>
        <div class="title accent">
          menu
        </div>
      </div>
    </nav>
    <UVerticalNavigation :links="navigationLinks"/>
  </USlideover>
</template>

<style scoped>
.navbar {
  @apply top-0 left-0 right-0 grid place-items-center z-10;


  .wrapper {
    @apply w-full flex flex-row px-4 gap-4 items-center text-2xl lg:max-w-screen-xl min-h-12;

    .menu-icon {
      @apply cursor-pointer  text-primary grid place-items-center;
    }

    .branding {
      @apply flex flex-row items-center justify-start;

      .dreamlab-vector-logo {
        @apply w-12 h-12 p-1.5 cursor-pointer fill-emerald-400 drop-shadow;
      }

      .dreamlab-textual-logo {
        @apply text-sm drop-shadow;
      }

    }

    .title {
      @apply flex-1 font-bold;

      &.accent {
        @apply font-display uppercase text-emerald-400;
      }
    }

    .actions {
      @apply flex gap-4 items-center;


      & > a {
        @apply text-lg font-semibold border-b-2 px-1.5 hover:text-emerald-500 hover:dark:text-emerald-300
        hover:border-b-emerald-400 drop-shadow-sm
        transition-all duration-700 ease-in-out;

        &.active {
          @apply text-emerald-400 border-b-emerald-400;
        }
      }

      & > svg.theme-switcher {
        @apply fill-emerald-400 stroke-sky-400 drop-shadow-sm;
      }

      &.mobile {
        @apply gap-2;
      }
    }

  }
}


/* Add other styles as needed */
</style>
