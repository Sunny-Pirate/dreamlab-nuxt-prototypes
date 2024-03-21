<script setup>

const user = useSupabaseUser()
</script>

<template>
  <main class="auth">
    <Account v-if="user"/>
    <Auth v-else/>
  </main>
</template>


<style scoped>

main.auth {
  @apply grid grid-cols-1 grid-rows-1 min-h-screen place-items-center;
}

</style>
