<script setup lang="ts">


import type {CSSProperties, StyleValue} from "vue";

export interface HeroProps {
  id?: string
  backgroundImage?: string
  backgroundClasses?: CSSProperties | StyleValue[]
}

const props = defineProps<HeroProps>();

</script>

<template>
  <section :id="id" class="hero"
           :class="backgroundClasses"
           :style="{backgroundImage}">
    <div class="layout">
      <div class="heading">
        <slot name="title">
          <h1 class="title">Title</h1>
        </slot>
        <slot name="subtitle">
          <h1 class="subtitle">Subtitle</h1>
        </slot>
      </div>
      <slot name="cta">
        <div class="flex flex-col">
          <Button label="CTA"/>
        </div>
      </slot>
    </div>
  </section>
</template>

<style scoped>

</style>
