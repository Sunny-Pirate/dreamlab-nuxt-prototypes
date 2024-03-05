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

  <section id="services">
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


#services {

  @apply max-w-screen-sm min-h-screen mx-auto grid gap-4 px-4 w-full h-full place-items-center gap-12;

  .intro {
    @apply text-xl max-w-screen-sm text-center italic;
  }

  .list {
    @apply grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4;

    .card {
      @apply h-full md:place-content-between grid grid-cols-1 gap-1.5 grid-rows-[1.75rem_1fr] leading-[1.2rem];

      .service-title {
        @apply place-self-center w-full;
      }

      &::after {
        @apply content-[""] w-full bg-gradient-to-r h-0.5 lg:h-1 drop-shadow;
      }

      &.warning {
        @apply after:from-amber-600 after:to-amber-400;
      }

      &.accent {
        @apply after:from-purple-600 after:to-purple-400;
      }

      &.success {
        @apply after:from-emerald-600 after:to-emerald-400;
      }
    }
  }

}


</style>
