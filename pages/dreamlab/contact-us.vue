<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

const state = reactive({
  fullName: undefined,
  email: undefined,
  companyName: undefined,
})

</script>

<template>
  <main class="webpage dashboard">
    <TheNavigation/>
    <div class="content">
      <p class="intro">Fill-in the form to contact us.</p>
      <UForm >
        <UInput color="primary" variant="outline" placeholder="Your full name" v-model="state.fullName"/>
        <UInput color="primary" variant="outline" placeholder="Your e-mail" v-model="state.fullName"/>
        <UInput color="primary" variant="outline" placeholder="Your company name" v-model="state.fullName"/>
      </UForm>
    </div>

    <TheFooter/>
  </main>
</template>

<style scoped>
.content {
  @apply w-full max-w-screen-lg mx-auto flex flex-col justify-center;
  p {
    @apply text-center;
  }
  form {
    @apply flex flex-col gap-4;
  }
}
</style>
