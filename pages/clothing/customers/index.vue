<script setup lang="ts">
import TheNavbar from "~/components/clothing-design/TheNavbar.vue";
import TheCustomerItemCard from "~/components/clothing-design/cards/TheCustomerItemCard.vue";

const {cdCustomers} = await GqlGetAllCDCustomers();
// console.log([customer/index.vue], cdCustomers)
</script>

<template>
  <main class="cd-dashboard">
    <TheNavbar pageTitle="Clienti"/>
    <section class="customers">
      <ul class="customer-list">
        <li v-for="(customer, cIdx) in cdCustomers?.data" :key="cIdx" class="customer-item">
          <TheCustomerItemCard :item="customer" />
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>

.customers {
  @apply px-2;

  .customer-list {
    /*@apply grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ;*/
    @apply flex flex-row flex-wrapgap-2 ;

  }
}

</style>
