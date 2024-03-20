<script setup lang="ts">

const services = [
  {
    id: "ux",
    uiClass: "gradient-after-primary",
    name: "UX Design",
    description: "We map out the user journey to create seamless, memorable experiences that resonate with your audience.",
  },
  {
    id: "ui",
    uiClass: "gradient-after-secondary",
    name: "UI Development",
    description:
        "Merging aesthetics with functionality, we build interfaces that are both beautiful and robust, ensuring they perform across all devices and platforms."
  },
  {
    id: "consulting",
    uiClass: "gradient-after-accent",
    name: "IT Consulting",
    description: "With a holistic approach, we provide strategic guidance to navigate the complexities of technology in business."
  }
]

</script>

<template>

  <section id="hero-services" class="hero">
    <div class="services-wrapper">
      <div class="heading">
        <h2 class="title">Welcome to DreamLab.Solutions</h2>
        <h3 class="subtitle">your innovative partner in the digital realm.</h3>
      </div>
      <div class="service-list">
        <Card v-for="(service, sKey) in services" :key="sKey"
              :pt="{
                  root: `service-card ${service.uiClass} flex flex-col`,
                  content: `px-2 py-0.5 lg:px-4 lg:py-2 flex-1`,
                  body:`flex-1`
                }"
        >
          <template #subtitle>{{ service.name }}</template>
          <template #content>{{ service.description }}</template>
        </Card>
      </div>
    </div>
  </section>

</template>

<style scoped>
.hero {
  @apply px-4 py-12 mx-auto;
}

.services-wrapper {
  @apply grid grid-cols-1 gap-6 max-w-2xl mx-auto;
}

.service-list {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-2 place-items-stretch;
}
.service-card {
  @apply relative;
}
</style>
