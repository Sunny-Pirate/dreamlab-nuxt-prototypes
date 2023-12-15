<script setup lang="ts">

import TheAuthNavigation from "~/components/layout/TheAuthNavigation.vue";
import {execute} from "graphql/execution";

const formData = ref<{ email: string, password: string }>({email: '', password: ''});
const formStatus = ref<IFormStatus<any>>({
  pending: false
});
const authStore = useAuthStore();

const {isAuthenticated} = storeToRefs(authStore);
const handleSubmit = () => {
  formStatus.value.pending = true
  const {pending, error, status} = useAsyncData(() => authStore.loginWithCredentials({
    identifier: formData.value.email,
    password: formData.value.password
  }));
  if (error.value) formStatus.value.error = error.value
  if (status.value) formStatus.value.status = status.value

  formStatus.value.pending = pending.value
}

</script>

<template>
  <main class="auth-layout">
    <TheAuthNavigation/>
    <div class="card">
      <h3 class="title">Login</h3>
      <div>
        <p class="debug">Is Auth: {{ isAuthenticated }}</p>
        <p class="debug">Pending: {{ formStatus.pending }}</p>
        <p class="debug">Status: {{ formStatus.status }}</p>
        <p class="debug">Error: {{ formStatus.error }}</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email</label>
        <input v-model="formData.email" name="email" type="email"/>
        <label for="password">Password</label>
        <input v-model="formData.password" name="password" type="password"/>
        <button :disabled="isAuthenticated || formStatus.pending">
          Login
        </button>
      </form>
    </div>
  </main>
</template>
