<script setup lang="ts">

const formData = ref<{
  email: string
  isTermsAccepted: boolean
}>({
  email: '',
  isTermsAccepted: false
})

const handleRegistrationBtn = () => {
  console.log('user is trying to register', formData)
}
</script>

<template>
  <form @submit.prevent="handleRegistrationBtn">
    <div class="input-group">
      <label for="email">Email</label>
      <input v-model="formData.email" type="email"/>
    </div>
    <div>
      <input v-model="formData.isTermsAccepted" type="checkbox"/>
      <label for="email">By selecting this checkbox you agree to our Terms and Conditions</label>
    </div>
    <button type="submit" :disabled="!formData.isTermsAccepted">Send registration email</button>
  </form>
</template>

<style scoped lang="postcss">
form {
  @apply grid grid-cols-1 place-items-center gap-3;


  .input-group {
    @apply relative grid grid-cols-1 w-full;

    > label {
      @apply ml-1 mb-0 z-1 text-sm;
    }

  }

  button {
    @apply px-6 py-4 bg-sky-500/70;

    &:disabled {
      @apply bg-slate-400
    }
  }
}

</style>
