<script setup lang="ts">
import TheNavbar from "~/components/TheNavbar.vue";

// console.log([customer/index.vue], cdCustomers)
const user = useSupabaseUser();

</script>

<template>
  <main class="cd-dashboard">
    <TheNavbar pageTitle="Clienti" brandImageUrl="/clothing-design/logo.png"/>
    <section class="customers">
      <ul class="customer-list">
<!--        <li v-for="(customer, cIdx) in cdCustomers?.data" :key="cIdx" class="customer-item">-->
<!--          <TheCustomerItemCard :item="customer" />-->
<!--        </li>-->
      </ul>
    </section>
  </main>
</template>

<style scoped>

.customers {
  @apply px-2;

  .customer-list {
    /*@apply grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ;*/
    @apply flex flex-row flex-wrap gap-2 ;

  }
}

</style>
