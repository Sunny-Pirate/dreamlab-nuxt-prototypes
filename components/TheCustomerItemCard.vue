<script setup lang="ts">
import type {CdCustomerEntity} from "#gql"

export interface CustomerItemCardProps {
  item: CdCustomerEntity
}

const props = defineProps<CustomerItemCardProps>();

</script>

<template>
  <Card pt="{
    root: { class: 'shadow rounded-md bg-amber-50 px-1 py-0.5'}
  }">
    <template #title>
      {{ item.attributes?.name }}
    </template>
    <template #subtitle>
      {{ item.attributes?.pec }}
    </template>
    <template #content>
      <div class="legal-info">
        <div class="legal-info-item">Partita IVA: {{ item.attributes?.vatNumber }}</div>
        <div class="legal-info-item">Codice Fiscale: {{ item.attributes?.ssnNumber }}</div>
        <div class="legal-info-item">PEC: {{ item.attributes?.pec }}</div>
        <div class="legal-info-item">Codice SDI: {{ item.attributes?.SDIcode }}</div>
        <div class="legal-info-item">Registro imprese: {{ item.attributes?.countryCompanyRegsitrationNumber }}</div>
      </div>
    </template>
<!--    <template #footer></template>-->
  </Card>
</template>

<style scoped>
.legal-info {
  @apply flex flex-col gap-3 flex-wrap;

  .legal-info-item {
    @apply p-1;
  }
}
</style>
