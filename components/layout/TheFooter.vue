<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";

const config = useRuntimeConfig();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smallerOrEqual("sm")
</script>

<template>
  <footer>
    <!--    <div class="legal">KvK Number: NL004794144B26</div>-->
    <div class="legal">
      <div v-if="config.public.companyKvkNumber">
        <UTooltip v-if="isMobile" :text="`KVK Id: ${config.public.companyKvkNumber}`">KVK</UTooltip>
        <span v-else>KVK Id: {{ config.public.companyKvkNumber }}</span>
      </div>
      <span v-if="config.public.companyKvkNumber && config.public.companyBtwNumber"> - </span>
      <div v-if="config.public.companyBtwNumber">
        <UTooltip v-if="isMobile" :text="`VAT Number: ${ config.public.companyBtwNumber }`">VAT</UTooltip>
        <span v-else>VAT: {{ config.public.companyBtwNumber }}</span>
      </div>
    </div>
    <div class="copy">
      EngineeredBy
      <DreamlabTheDreamlabTextualLogo/> &copy;{{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply flex flex-row justify-between items-end text-xs pb-0.5 px-1.5;

  .legal {
    @apply flex flex-row gap-0.5;
  }
  .copy {
    @apply flex flex-row  gap-1 items-baseline;

    .dreamlab-textual-logo {
      @apply text-xs font-bold;
    }
  }
}
</style>
