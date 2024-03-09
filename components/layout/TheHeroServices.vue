<script setup lang="ts">

const services = [
  {
    id: "ux",
    name: "UX Design",
    description: "We map out the user journey to create seamless, memorable experiences that resonate with your audience."
  },
  {
    id: "ui",
    name: "UI Development",
    description:
        "Merging aesthetics with functionality, we build interfaces that are both beautiful and robust, ensuring they perform across all devices and platforms."
  },
  {
    id: "consulting",
    name: "IT Consulting",
    description: "With a holistic approach, we provide strategic guidance to navigate the complexities of technology in business."
  }
]

</script>

<template>

  <section class="services">
    <p class="intro">
      <h5>Welcome to DreamLab.Solutions</h5>
      <h6>your innovative partner in the digital realm.</h6>
    </p>
    <ul class="list">
      <li class="card" v-for="(service, sKey) in services" :key="sKey"
          :class="service.id === 'ux' ? 'success' : service.id === 'ui' ? 'accent' : 'warning' "
      >
        <h4 class="service-title">{{ service.name }}</h4>
        <p>
          {{ service.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
