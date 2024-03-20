<script setup lang="ts">
import type {Provider} from "@supabase/gotrue-js";
import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";

const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')

const handleOtpLogin = async () => {
  try {
    loading.value = true
    const {error} = await supabase.auth.signInWithOtp({email: email.value})
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error: any) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}


const handleOAuthLogin = async (provider: Provider) => {
  try {
    loading.value = true
    const {error} = await supabase.auth.signInWithOAuth({provider});
    if (error) throw error
    console.log(`Loggin in with ${provider}`)
  } catch (error: any) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
};
</script>

<template>
  <div class="card-auth">
    <NuxtLink to="/" class="auth-logo">
      <TheDreamlabVectorLogo />
    </NuxtLink>
    <div class="font-headings text-center  max-w-sm px-2">
      <h2 class="title">DreamLab.Solutions</h2>
      <p class="subtitle">Sign in via magic link with your email below</p>
    </div>
    <form @submit.prevent="handleOtpLogin">
<!--      <div class="flex flex-col gap-2">
        <label for="email">E-mail</label>
        <InputText id="email" v-model="email" aria-describedby="email-help"/>
        <small id="email-help">Enter your email, you'll receive a link to authenticate.</small>
      </div>-->
      <div class="flex flex-col gap-2">
      <FloatLabel>
        <InputGroup>
          <InputText id="email" v-model="email" />
        </InputGroup>
        <label for="email" aria-describedby="email-help">Email</label>
      </FloatLabel>
      <small id="email-help">Enter your email, you'll receive a link to authenticate.</small>
      </div>
      <Button type="submit" :label="loading ? 'Loading' : 'Send magic link'" icon="pi pi-send" :loading="loading" :disabled="loading"  />
      </form>
    <Divider layout="horizontal">
      <template #default>
        or
      </template>
    </Divider>
    <div class="providers-auth">
      <Button label="Login With Google"
              severity="secondary"
              icon="pi pi-google"
              :disabled="loading"
              @click.prevent="handleOAuthLogin('google')"
      />
      <Button label="Login With GitHub"
              severity="contrast"
              icon="pi pi-github"
              :disabled="loading"
              @click.prevent="handleOAuthLogin('github')"
      />
    </div>
  </div>
</template>

<style scoped>
.card-auth {
  @apply relative bg-white shadow-md grid grid-cols-1 gap-6 py-6 mx-2 max-w-screen-sm;
}

form, .providers-auth {
  @apply grid grid-cols-1 gap-2 px-2;
}

.auth-logo {
  @apply place-self-center size-12 absolute -top-6 fill-emerald-500 stroke-1 stroke-purple-500;
}




</style>
