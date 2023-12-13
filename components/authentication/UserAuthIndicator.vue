<script setup lang="ts">
import {storeToRefs, useAuthStore} from "#imports";

const authStore = useAuthStore();
const {isAuthenticated, user} = storeToRefs(authStore)
const userInitials = computed(() => {
  if (user.value?.fullName !== undefined) {
    const userDomainSplits = user.value?.fullName.split('@');
    return userDomainSplits![0].slice(0, 1) + userDomainSplits![1].slice(0, 1)
  } else {
    return 'NN'
  }
})


</script>

<template>
  <div class="user-auth-indicator">
      <div v-if="isAuthenticated">
        <div class="w-10 h-10 rounded-full bg-slate-400 italic grid place-items-center font-semibold relative">
          {{userInitials}}

          <div class="absolute top-12 right-0 bg-white  whitespace-nowrap">
            Log out
          </div>

        </div>
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
