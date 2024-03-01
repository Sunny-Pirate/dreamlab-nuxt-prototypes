<script setup lang="ts">
</script>

<template>
  <footer>
<!--    <div class="legal">KvK Number: NL004794144B26</div>-->
    <div class="legal">
      <span v-if="$config.public.companyKvkNumber">KvK: {{ $config.public.companyKvkNumber }}</span>
      <span v-if="$config.public.companyKvkNumber && $config.public.companyBtwNumber"> - </span>
      <span v-if="$config.public.companyBtwNumber">BTW: {{ $config.public.companyBtwNumber }}</span>

    </div>
    <div class="copy">
      EngineeredBy <DreamlabTheDreamlabTextualLogo /> &copy;{{new Date().getFullYear()}}
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply flex flex-row justify-between items-end text-xs pb-0.5 px-1.5;

  .copy {
    @apply flex flex-row  gap-1 items-baseline;
    .dreamlab-textual-logo{
      @apply text-sm font-sans font-bold;
    }
  }
}
</style>
