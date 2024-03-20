<script setup lang="ts">

const user = useSupabaseUser()
const client = useSupabaseClient()

const op = ref();

const toggle = (event: Event) => {
  op.value.toggle(event);
}

const handleLogout = async () => {
  const {error} = await client.auth.signOut();
  if (error) {
    console.log(error)
    throw new Error(error.message)
  }
}

const handleLoginRedirection = async () => {
  navigateTo("/auth/login")
}

console.log(user)

</script>

<template>
  <div v-if="user?.id">
    <Avatar :image="user?.user_metadata.avatar_url" shape="circle" @click="toggle"/>
    <OverlayPanel ref="op">
      <div class="grid grid-cols-1 justify-items-end gap-3 min-w-xl">
        <p v-if="user">Ciao, {{ user?.user_metadata?.full_name }}</p>
        <small>{{ user?.email }}</small>
        <Button label="Logout" severity="danger" outlined="outlined" @click="handleLogout"/>
      </div>
    </OverlayPanel>
  </div>
  <div v-else>
    <Button label="Reserved Area" severity="accent" icon="pi pi-lock" @click="handleLoginRedirection"/>
  </div>
</template>

<style scoped>

</style>
