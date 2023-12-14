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
  <form>
    <div class="input-group">
      <label for="email">Email</label>
      <input v-model="formData.email" type="email"/>
    </div>
    <div>
      <input v-model="formData.isTermsAccepted" type="checkbox"/>
      <label for="email">By selecting this checkbox you agree to our Terms and Conditions</label>
    </div>
    <button type="submit">Send registration email</button>
  </form>
</template>

<style scoped lang="scss">
  form {
    @apply grid grid-cols-1 place-items-center
  }

  .input-group {
    @apply relative grid grid-cols-1
    > label {
      @apply -mb-4
    }
  }
</style>
