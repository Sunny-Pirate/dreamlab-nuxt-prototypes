<script setup lang="ts">


const form = ref<IMagicLinkPayload>({
  email: ""
})
const formStatus = ref<IFormStatus<IAuthSession>>({
  pending: false
})


const authStore = useAuthStore();

const submitMagikLink = async () => {
  const {error, data, pending, status} = await authStore.login(form.value.email);
  if (pending.value) formStatus.value.pending = pending.value
  if (error.value) formStatus.value.error = error.value
  if (status.value) formStatus.value.status = status.value
  if (data.value) formStatus.value.data = data.value
}
</script>

<template>
  <form @submit.prevent="submitMagikLink" class="login-form">
    <h3 class="text-xl text-center">Login</h3>
    <input name="email" v-model="form.email" type="email" placeholder="Insert your email here"/>
    <button type="submit" :disabled="formStatus.pending">
      Entra
      <Icon icon="ri:mail-send-fill"/>
    </button>
  </form>

  <div v-if="formStatus.error?.message" class="max-w-3xl text-red-800 bg-red-300 rounded text-xs">
    <h6>{{ formStatus.error?.name }}</h6>
    <p>{{ formStatus.error?.message }}</p>
    <p>{{ formStatus.error?.cause }}</p>
  </div>
</template>

<style scoped>


</style>
