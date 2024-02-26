<script setup lang="ts">

// const user = useStrapiUser();

import IconMenu from "~/components/icons/IconMenu.vue";
import IconClose from "~/components/icons/IconClose.vue";

import {useWindowScroll} from '@vueuse/core'

interface NavigationProps {

  /** A string rendered in the title placeholder */
  pageTitle?: string

}

interface NavigationMenuItem {
  label: string
  to: string
}

const menuItems: NavigationMenuItem[] = [
  {label: "Home", to: "/"},
  {label: "Portfolio", to: "/dreamlab/portfolio"},
  // {label: "Contact Us", to: "/dreamlab/contact-us"},
]


const isOpen = ref<boolean>(false);

const route = useRoute()

// Target is used to intercept the scrolling
const {x, y} = useWindowScroll()


const props = withDefaults(defineProps<NavigationProps>(), {
  pageTitle: ""
})

const isIndexPage = computed(() => {
  return route.path === "/"
})

const handleOpenMenu = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <nav ref="target" class="default"
       :class="{
          active: y > 50 && isOpen,
          relative: $route.path !== '/'
       }"
  >
    <div class="wrapper">
      <div class="menu-trigger" @click="handleOpenMenu">
        <IconClose v-if="isOpen"/>
        <IconMenu v-else/>
      </div>
      <div class="menu-title" v-if="isOpen">
        MENU
      </div>
      <h2 class="page-title" v-if="pageTitle?.length > 0">
        <span v-if="!isOpen">{{ pageTitle }}</span>
      </h2>
    </div>
  </nav>
  <Teleport to="body">
    <div v-if="isOpen" class="modal">
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-item" v-for="(item, mKey) in menuItems" :key="mKey">
            <NuxtLink :to="item.to" activeClass="active" @click="handleOpenMenu">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>

</template>

<style scoped>
.default {
  @apply fixed top-0 bg-transparent w-full grid grid-cols-1 px-4 h-12;

  &.relative {
    position: relative;
  }

  &.active {
    @apply bg-white;
  }

  .wrapper {
    @apply w-full flex flex-row gap-4 text-2xl p-0 items-center;

    .menu-trigger {
      @apply text-3xl flex items-center hover:text-emerald-600 transition duration-700 ease-in-out;
    }

    .menu-title {
      @apply font-display;
    }

    .page-title {

    }
  }
}

.modal {
  @apply fixed inset-0 top-12 bg-white z-999;

  .menu {
    @apply text-2xl grid min-h-full place-items-center;

    .menu-list {

      @apply grid grid-cols-1 gap-4 place-items-center;

      .menu-item {
        @apply p-4 rounded hover:bg-emerald-50 transition-all duration-700 ease-linear;

        & > a.active {
          @apply text-emerald-400;
        }
      }
    }
  }

}

</style>
