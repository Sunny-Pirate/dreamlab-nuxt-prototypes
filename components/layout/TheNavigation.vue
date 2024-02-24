<script setup lang="ts">

// const user = useStrapiUser();

const isOpen = ref<boolean>(false);

interface NavigationProps {
  pageTitle?: string
}


const props = withDefaults(defineProps<NavigationProps>(), {
  pageTitle: ""
})


const handleOpenMenu = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <nav class="default">
    <div class="wrapper">
      <div class="menu-trigger-wrapper" @click="handleOpenMenu">
        <Icon name="fa6-solid:bars"/>
      </div>
      <h2 class="page-title" v-if="pageTitle?.length > 0">
        {{ pageTitle }}
      </h2>
    </div>
  </nav>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="handleOpenMenu">
        Close
      </button>
    </div>
  </Teleport>

</template>

<style scoped>
.default {
  @apply bg-transparent w-full grid grid-cols-1 px-4 h-12;

  .wrapper {
    @apply w-full flex flex-row gap-4 text-2xl p-0 items-center;

    .menu-trigger-wrapper {
      @apply flex items-center hover:text-emerald-600 transition duration-700 ease-in-out;
    }

    .page-title {

    }
  }
}
</style>
