<script setup lang="ts">
import {onUpdated, storeToRefs, useAuthStore} from "#imports";
import TheLoginForm from "~/components/authentication/TheLoginForm.vue";


const formErrors = ref<Error | null>(null)

const authStore = useAuthStore();
const router = useRouter()

const {isAuthenticated} = storeToRefs(authStore)

onUpdated(() => {
  console.log('login.vue - isAuth: ', isAuthenticated)
  if (isAuthenticated.value) navigateTo("/")
})


</script>

<template>
  <main class="auth-layout">
    <div class="card">
      <div v-if="!isAuthenticated">
        <TheLoginForm/>
      </div>
    </div>
  </main>
</template>

<style>
.auth-layout {
  @apply min-h-screen grid grid-cols-1 grid-rows-1 place-items-center
}
</style>
