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

  <div id="services-list">
    <div class="grid-wrapper">

      <p class="intro">
        <span>Welcome to DreamLab.Solutions</span>
        <br/>
        <span>your innovative partner in the digital realm.</span>
      </p>
      <ul class="list">
        <li class="card" v-for="(service, sKey) in services" :key="sKey"
            :class="service.id === 'ux' ? 'success' : service.id === 'ui' ? 'accent' : 'warning' "
        >
          <h4 class="title">{{ service.name }}</h4>
          <p>
            {{ service.description }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>


#services-list {

  @apply max-w-screen-sm grid gap-4 px-4 w-full min-h-screen h-screen place-items-center;

  .grid-wrapper {
    @apply grid gap-12;

    .intro {
      @apply text-xl max-w-screen-sm text-center;
    }

    .list {
      @apply grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4;

      .card {
        @apply h-full md:place-content-between grid grid-cols-1 grid-rows-[1.75rem_1fr];

        .title {
          @apply place-self-center w-full;
        }
      }
    }

  }

}

</style>
