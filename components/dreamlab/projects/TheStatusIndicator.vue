<script setup lang="ts">

interface StatusIndicatorProps {
  status: "ongoing" | "completed" | "archived"
}

defineProps<StatusIndicatorProps>();

</script>

<template>
  <div class="wrapper">
    <h6 class="title">Status</h6>
    <div v-if="status" class="status" :class="status">
      <slot name="default">
        {{ status }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.status {
  @apply inline-flex rounded py-0.5 px-1 outline outline-1 capitalize text-xs font-semibold;

  &.archived {
    @apply text-amber-600 dark:text-amber-400 outline-amber-600 dark:outline-amber-400;
  }

  &.completed {
    @apply text-purple-600 dark:text-purple-400 outline-purple-600 dark:outline-purple-400;
  }

  &.ongoing {
    @apply text-sky-600 dark:text-sky-400 outline-sky-600 dark:outline-sky-400;
  }
}
</style>
