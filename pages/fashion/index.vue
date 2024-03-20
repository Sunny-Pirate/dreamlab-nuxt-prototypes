<script setup lang="ts">

import TheNavbar from "~/components/TheNavbar.vue";


import type {Database} from "~/types/database.types.ts"

const user = useSupabaseUser();
const supabase = useSupabaseClient<Database>()

const username = ref<string | null>("")
const website = ref<string | null>("")
const avatarUrl = ref<string | null>("")

async function getUserProfile() {
  const {data, error} = await supabase.from('users').select(`full_name, avatar_url`).single();

  if (error) {
    console.log(error)
    throw new Error(error.message)
  }


  if (data) {
    username.value = data.full_name
    avatarUrl.value = data.avatar_url
  }
  console.log('fashion/index getUserProfile() data:', data)

}

onMounted(() => {
  getUserProfile()
})

</script>

<template>
  <main class="cd-dashboard">
    <TheNavbar
        :showLogo="true"
        title="Cloting Design App"
        :userAvatar="user?.user_metadata?.avatar_url"
    >
      <template #brand>
        <NuxtImg src="/clothing-design/logo.png" class="size-10 object-cover"/>
      </template>
    </TheNavbar>
    <div class="content" v-if="user">
      <h2>{{ username }}, welcome to the FashionApp!</h2>
      <h4>Your profile website: {{ website }}</h4>
      <div class="h-40">
        <NuxtImg :src="avatarUrl" v-if="avatarUrl"/>
      </div>
    </div>
    <div class="content" v-else>
      <h2>You're not registered.</h2>
      <p>Please fill-in the following form to participate</p>
      <Auth/>
    </div>
  </main>
</template>

<style scoped>
.content {
  @apply grid grid-cols-1 grid-rows-1 place-items-center;
}
</style>
