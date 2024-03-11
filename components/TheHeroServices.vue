<script setup lang="ts">

const services = [
  {
    id: "ux",
    uiClass: "gradient-primary",
    name: "UX Design",
    description: "We map out the user journey to create seamless, memorable experiences that resonate with your audience.",
  },
  {
    id: "ui",
    uiClass: "gradient-success",
    name: "UI Development",
    description:
        "Merging aesthetics with functionality, we build interfaces that are both beautiful and robust, ensuring they perform across all devices and platforms."
  },
  {
    id: "consulting",
    uiClass: "gradient-accent",
    name: "IT Consulting",
    description: "With a holistic approach, we provide strategic guidance to navigate the complexities of technology in business."
  }
]

</script>

<template>

  <section id="hero-services" class="hero">
    <card :pt="{
      content: 'flex flex-col md:flex-row gap-4',
    }">
      <template #title>Welcome to DreamLab.Solutions</template>
      <template #subtitle>your innovative partner in the digital realm.</template>
      <template #content>
        <card v-for="(service, sKey) in services" :key="sKey"
              :pt="{
                  root: `service-card-${service.uiClass}`,
                }"
        >
          <template #title>{{ service.name }}</template>
          <template #content>{{ service.description }}</template>
        </card>
      </template>
    </card>
  </section>
</template>

<style scoped>
.hero {
  @apply px-4 mx-auto;
}

div[class^="service-card-"]{
  @apply text-emerald-400;
}
</style>
