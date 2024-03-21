<script setup lang="ts">
const isOpen = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'menuTrigger'): void
}>()
const handleMenuTriggerIcon = () => {
  console.log("TheMenuTrigger", "handleMenuTriggerIcon", `Changing menu icon from ${isOpen.value}`)
  isOpen.value = !isOpen.value
  emit('menuTrigger')
}



</script>

<template>
  <div class="menu-trigger text-2xl" @click="handleMenuTriggerIcon">
    <i v-if="!isOpen" class="pi pi-bars " />
    <i v-else class="pi pi-times " />
  </div>
</template>

<style scoped>

</style>
