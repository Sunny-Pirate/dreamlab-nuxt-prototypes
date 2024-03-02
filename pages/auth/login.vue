<script setup lang="ts">

import TheAuthNavigation from "~/components/layout/TheAuthNavigation.vue";

const formData = ref<{ email: string, password: string }>({email: '', password: ''});
const errorState = useState<Error | null>('error', () => null);
const redirectCookie = useCookie('login-redirect', {path: '/'});

const handleSubmit = async () => {


  console.log(`[login] Pressed login action`)
/*
  const {pending, error, data, status} = await useAsyncData('doCredentialsLoginAction', () => login({
    identifier: formData.value.email,
    password: formData.value.password
  }));

  console.log(status.value)
  // If pending form disabled

  // If error show errors to client
  if (error.value) errorState.value = error.value

  // if status == success and data -> redirect to cookieRedicrect
  if (status.value === "success") {
    const redirectPath = redirectCookie.value
    console.log(`[login] User is correctly loggedIn redirect it to: `, redirectPath)
    redirectCookie.value = undefined
    // navigateTo redirectCookieValue
    navigateTo(redirectPath)
  }*/
}

</script>

<template>
  <main class="auth-layout">
    <TheAuthNavigation/>
    <div class="card">
      <h3 class="title">Login</h3>
      <div class="text-xs bg-red-200 rounded">
<!--        <p v-if="user" class="debug">Is Auth: {{ user ? "Yes" : "NO" }}</p>-->
        <div v-if="errorState" class="debug grid gap-1">
          <h5 class="font-semibold">
            <span>{{ errorState.name }}&nbsp;</span>
<!--            <span>{{ errorState.cause.error.status }}&nbsp;</span>-->
<!--            <span>{{ errorState.cause.error.name }}</span>-->
          </h5>

<!--          <p>{{ errorState.cause.error.message }}</p>-->
<!--          <p>{{ errorState.cause.error.details }}</p>-->
        </div>
      </div>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email</label>
        <input v-model="formData.email" name="email" type="email"/>
        <label for="password">Password</label>
        <input v-model="formData.password" name="password" type="password"/>
        <button>
          Login
        </button>
      </form>
    </div>
  </main>
</template>
