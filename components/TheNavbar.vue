<script setup lang="ts">

export interface NavbarProps {
  fixed?: boolean
  pageTitle?: string
  brandImageUrl?: string
  brandNavigationLink?: string
}

const props = defineProps<NavbarProps>();

</script>

<template>
  <nav class="navbar" :class="{'fixed w-full': fixed}">
    <div class="content">
      <div class="brand-logo" v-if="brandImageUrl">
        <NuxtLink v-if="brandNavigationLink">
          <NuxtImg :src="brandImageUrl" />
        </NuxtLink>
        <NuxtImg :src="brandImageUrl" v-else/>
      </div>
      <div class="page-title">
        <h1 v-if="pageTitle">{{ pageTitle }}</h1>
      </div>
      <div class="actions">
      </div>

    </div>
  </nav>
</template>
<style scoped>

.navbar {

  .content {
    @apply px-2 flex flex-row items-center;

    .brand-logo {
      @apply p-1 cursor-pointer;

      img {
        @apply size-8 md:size-12;
      }
    }

    .page-title {
      @apply flex-1 font-elegant text-xl md:text-2xl text-center md:text-left md:pl-2 font-black ;
    }

    .actions {
      @apply size-12;
    }
  }
}

</style>
