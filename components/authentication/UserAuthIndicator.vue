<script setup lang="ts">
import {storeToRefs, useAuthStore} from "#imports";

const authStore = useAuthStore();
const {isAuthenticated} = storeToRefs(authStore)
</script>

<template>
  <div class="user-auth-indicator">
      <div v-if="isAuthenticated">
        Auth
      </div>
      <div v-else>
        <NuxtLink to="/auth/login" class="py-2 px-4 rounded bg-purple-900 text-white font-semibold shadow">
          Login
        </NuxtLink>
      </div>
  </div>
</template>

<style scoped>
  .user-auth-indicator{
    @apply absolute top-2 right-2 flex flex-col bg-transparent
  }
</style>
