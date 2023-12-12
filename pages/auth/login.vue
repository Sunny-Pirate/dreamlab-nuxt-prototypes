<script setup lang="ts">
import {onUpdated, storeToRefs, useAuthStore} from "#imports";
import TheLoginForm from "~/components/authentication/TheLoginForm.vue";


const formErrors = ref<Error | null>(null)

const authStore = useAuthStore();
const router = useRouter()

const {isAuthenticated, authState, hasError, getError} = storeToRefs(authStore)

if (hasError) {
  formErrors.value = getError.value
}

onUpdated(() => {
  if (isAuthenticated.value) navigateTo("/")
})


</script>

<template>
  <main class="auth-layout">
    <div class="card">
      <h1 class="">Login</h1>
      <div v-if="formErrors" class="bg-red-200">
        <h4 class="text-red-800">An error occurred</h4>
        <p>
          {{ JSON.stringify(formErrors) }}
        </p>
      </div>
      <TheLoginForm/>
    </div>
  </main>
</template>

<style scoped>
.auth-layout {
  @apply min-h-screen grid grid-cols-1 grid-rows-1 place-items-center
}
.card {
  @apply relative bg-white shadow-md p-8 py-10 grid grid-cols-1
}
</style>
