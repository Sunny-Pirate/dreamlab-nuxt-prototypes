<script setup lang="ts">
const {logout} = useStrapiAuth();

const handleLogoutAction = async () => {
  const {pending, status, error, data} = await useAsyncData('logout', async () => logout());
  console.log(`[TheLogoutButton] ${data.value}`)
  if (status.value === 'success') {
    navigateTo('/')
  }
}
</script>

<template>
  <button @click.prevent="handleLogoutAction">
    Logout
  </button>
</template>

<style scoped>

</style>
