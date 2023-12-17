<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
</script>

<template>
  <main>
    <TheNavigation/>
    <div class="hero">
      <h1 id="appTitleName">KITme.App</h1>
      <h2 class="slogan">Il social che rivoluziona come usufruisci dei servizi</h2>

      <div class="text-carousel">
        <h3>Scopri fantastici servizi.</h3>
        <h3>Usufruisci dei servizi con i nostri partner e ottieni punti fedeltà.</h3>
        <h3>Organizza KitGang e ottieni servizi per tutti.</h3>
      </div>

      <div class="place-self-end">
          <router-link to="/kitmeapp/profile">Vai al tuo profilo</router-link>
      </div>

    </div>
  </main>

</template>

<style scoped>
main {
  @apply min-h-screen grid place-items-center px-4;

  .hero {
    @apply container
  }
}
</style>
