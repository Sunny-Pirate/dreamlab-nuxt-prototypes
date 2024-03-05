<script setup lang="ts">

import TheDreamlabVectorLogo from "~/components/dreamlab/branding/TheDreamlabVectorLogo.vue";

interface TheLogoProps {
  twClasses?: string[]
}


const props = defineProps<TheLogoProps>();

</script>

<template>
  <div class="dreamlab-textual-logo">
    DreamLab<span>.</span>Solutions
  </div>
</template>

<style scoped>
.dreamlab-textual-logo {
  @apply font-display text-lg text-transparent bg-gradient-to-tr bg-clip-text from-emerald-500 from-65% to-emerald-300;
  span {
    @apply text-purple-400;
  }
}
</style>
