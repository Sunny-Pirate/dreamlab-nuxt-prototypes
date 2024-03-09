<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";
import TheDreamlabTextualLogo from "~/components/dreamlab/branding/TheDreamlabTextualLogo.vue";

const config = useRuntimeConfig();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smallerOrEqual("sm")
</script>

<template>
  <footer>
    <!--    <div class="legal">KvK Number: NL004794144B26</div>-->
    <div class="wrapper">
      <div class="legal">
        <div v-if="config.public.companyKvkNumber">
          <ClientOnly v-if="isMobile">
            <UTooltip :text="`KVK Id: ${config.public.companyKvkNumber}`">KVK</UTooltip>
          </ClientOnly>
          <span v-else>KVK Id: {{ $config.public.companyKvkNumber }}</span>
        </div>
        <span v-if="config.public.companyKvkNumber && config.public.companyBtwNumber"> - </span>
        <div v-if="config.public.companyBtwNumber">
          <ClientOnly v-if="isMobile">

            <UTooltip :text="`VAT Number: ${ config.public.companyBtwNumber }`">VAT</UTooltip>
          </ClientOnly>
          <span v-else>VAT: {{ $config.public.companyBtwNumber }}</span>
        </div>
      </div>
      <div class="copy">
        EngineeredBy
        <TheDreamlabTextualLogo/> &copy;{{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
