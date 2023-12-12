<script setup lang="ts">
import {useAuthStore} from "~/stores/auth-store";

const form = ref<{ email: string }>({
  email: ""
})

const authStore = useAuthStore();

const submitMagikLink = async () => {
  await authStore.login(form.value.email);
}


</script>

<template>
  <form @submit.prevent="submitMagikLink" class="login-form">
    <input name="email" v-model="form.email" type="email" placeholder="Insert your email here"/>
    <button type="submit">
      Entra
      <Icon icon="ri:mail-send-fill"/>
    </button>
  </form>
</template>

<style scoped>
  .login-form {
    @apply grid grid-cols-1
  }
</style>
