<script setup lang="ts">
import TheDreamlabTextualLogo from "~/components/dreamlab/branding/TheDreamlabTextualLogo.vue";


const countryRegionalCode = ref('90174836')
const vatCode = ref('NL004794144B26')

</script>

<template>
  <footer>
    <div class="legal-info">
      <div class="vat-code-component" v-if="countryRegionalCode">
        <p class="text">
          KvK Number: <span class="number">{{ countryRegionalCode }}</span>
        </p>
      </div>
      <div class="country-regional-code-component" v-if="vatCode">
        <p class="text">
          VAT Number: <span class="number">{{ vatCode }}</span>
        </p>
      </div>
      <div class="copyright-component">
        <p>EngineeredBy
          <NuxtLink to="/contact-us" class="dreamlab-textual-logo primary">
            DreamLab<span>.</span>Solutions
          </NuxtLink> &copy;{{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply relative w-full flex flex-col bg-surface-300 py-0.5;

  .legal-info {
    @apply flex flex-row text-xs items-center px-2 gap-1;
  }

  .copyright-component {
    @apply flex-1 flex flex-row justify-end;

    p {
      @apply flex flex-row gap-0.5 md:gap-1 flex-wrap text-right justify-end items-end;
    }
  }
}
</style>
