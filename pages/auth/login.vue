<script setup lang="ts">

import TheAuthNavigation from "~/components/layout/TheAuthNavigation.vue";
import {useStrapiAuth} from "#imports";
import type {AsyncDataRequestStatus} from "#app/composables/asyncData";

const formData = ref<{ email: string, password: string }>({email: '', password: ''});
const isPending = useState('pending', () => false);
const formStatus = useState<AsyncDataRequestStatus>('status', () => "idle")
const formErrors = useState<Error | null>('errors', () => null)
const strapiAuth = useStrapiAuth()
const authStore = useAuthStore();


const {isAuthenticated} = storeToRefs(authStore);
const handleSubmit = () => {
  console.log(`[login] Pressed login action`)
  const {status, pending, data, error} = useAsyncData('doLogin', () => $fetch('/api/auth/strapi-login', {
    method: "POST",
    body: {
      identifier: formData.value.email,
      password: formData.value.password
    }
  }))
  if (error.value) formErrors.value = error.value
  if (status.value) formStatus.value = status.value
  if (pending.value) isPending.value = pending.value

  if (status.value === "success") {
    console.log(`[login] Hurray the user is correctly logged in ${data.value?.user.value?.username}`)
  } else {

  }

}

</script>

<template>
  <main class="auth-layout">
    <TheAuthNavigation/>
    <div class="card">
      <h3 class="title">Login</h3>
      <div>
        <p v-if="isAuthenticated" class="debug">Is Auth: {{ isAuthenticated }}</p>
        <p class="debug">Pending: {{ isPending }}</p>
        <p v-if="status" class="debug">Status: {{ status }}</p>
        <p v-if="error" class="debug">Error: {{ error.cause }}</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email</label>
        <input v-model="formData.email" name="email" type="email"/>
        <label for="password">Password</label>
        <input v-model="formData.password" name="password" type="password"/>
        <button :disabled="isAuthenticated || pending">
          Login
        </button>
      </form>
    </div>
  </main>
</template>
