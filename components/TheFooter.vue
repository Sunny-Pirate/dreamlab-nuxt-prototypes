<script setup lang="ts">
import TheDreamlabTextualLogo from "~/components/dreamlab/branding/TheDreamlabTextualLogo.vue";
</script>

<template>
  <footer>
    <div class="content">
      <div class="legal">
          <div class="legal">KvK Number: NL004794144B26</div>
      </div>
      <div class="copy">
        EngineeredBy
        <NuxtLink to="/contact-us" ><TheDreamlabTextualLogo/></NuxtLink> &copy;{{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
