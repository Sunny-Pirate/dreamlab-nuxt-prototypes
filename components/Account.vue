<script setup lang="ts">

import type {Database} from '~/types/database.types.ts'

const supabase = useSupabaseClient<Database>()

const loading = ref(true)
const fullName = ref('')
const website = ref('')
const avatarUrl = ref('')

loading.value = true
const user = useSupabaseUser()

const getUserFullProfile = async () => {

  const {data} = await supabase
      .from('profiles')
      .select(`full_name, avatar_url`)
      .eq('id', user.value?.id)
      .single()

  if (data) {
    fullName.value = data.full_name
    avatarUrl.value = data.avatar_url
  }

}


async function updateProfile() {
  try {
    loading.value = true

    const updates = {
      id: user.value?.id,
      full_name: fullName.value,
      avatar_url: avatarUrl.value,
      updated_at: new Date(),
    }

    const {status, error} = await supabase.from('profiles').upsert(updates, {});
    if (error) throw error
  } catch (error: any) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const {error} = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error: any) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Card>
    <template #content>
      <form class="form-widget" @submit.prevent="updateProfile">
        <div>
          <label for="email">Email</label>
          <input id="email" type="text" :value="user?.user_metadata?.email" disabled/>
        </div>
        <div>
          <label for="username">Full name</label>
          <input id="username" type="text" v-model="fullName"/>
        </div>


        <div>
          <input
              type="submit"
              class="button primary block"
              :value="loading ? 'Loading ...' : 'Update'"
              :disabled="loading"
          />
        </div>

        <div>
          <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
        </div>
      </form>
    </template>
  </Card>

</template>


<style scoped>


</style>
