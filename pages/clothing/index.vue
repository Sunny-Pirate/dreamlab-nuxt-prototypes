<script setup lang="ts">

import TheNavbar from "~/components/clothing-design/TheNavbar.vue";

export interface ClothingDashboardCard {
  label: string,
  to?: string
}

const cardItems = ref<ClothingDashboardCard[]>([
  {label: 'Clienti', to: '/clothing/customers'},
  {label: 'Modelli', to: '/clothing/paper-patterns'},
])



</script>

<template>
  <main class="cd-dashboard">
    <TheNavbar pageTitle="Cloting Design App"/>
    <section class="selection-grid">
      <Card v-for="(card, cIdx) in cardItems" :key="cIdx"
            :pt="{
              title: 'flex flex-row justify-between items-baseline',
              root: 'cursor-default'

            }"
          class="section-item">
        <template #title>
          {{card.label}} <span class="link" v-if="card.to"><NuxtLink :to="card.to">Vedi tutti</NuxtLink></span>
        </template>

      </Card>
    </section>
  </main>
</template>

<style scoped>

.selection-grid {
  @apply grid grid-cols-2 gap-2;

  .section-item {
    @apply p-2 rounded bg-amber-50;
  }

  .link {
    @apply text-primary-400 hover:text-primary-600 text-xs;
  }
}
</style>
