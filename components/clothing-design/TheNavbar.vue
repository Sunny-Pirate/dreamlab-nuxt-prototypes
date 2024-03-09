<script setup lang="ts">

export interface NavbarProps {
  pageTitle?: string
}
const props = defineProps<NavbarProps>();

</script>

<template>
  <header>
    <nav class="navbar">
      <div class="wrapper">
        <div class="brand-logo" @click="() => navigateTo('/clothing')">
          <NuxtImg src="/clothing-design/logo.png"/>
        </div>
        <div class="page-title" >
          <h1 v-if="pageTitle">{{pageTitle}}</h1>
        </div>
        <div class="actions">
        </div>

      </div>
    </nav>
  </header>
</template>
<style scoped>

.navbar {

  .wrapper {
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
