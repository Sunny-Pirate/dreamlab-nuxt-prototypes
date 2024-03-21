<script setup lang="ts">

export interface TheNavbarProps {
  title?: string
}

const props = defineProps<TheNavbarProps>();

const sidebarOpen = ref<boolean>(false);

const links = useNavigationLinks();

const menubarEl = ref();
const router = useRouter()
const isActive = computed(() => {
  return (path: string) => router.currentRoute.value.path.startsWith(path)
});

</script>


<template>
  <nav class="navbar">
    <Toolbar :pt="{ root: 'p-toolbar p-component flex items-center justify-between flex-wrap gap-6 px-6 py-2 min-h-[4rem]'}">
      <template #start>
        <div class="block md:hidden">
          <i class="pi pi-bars text-2xl" @click="() => sidebarOpen = !sidebarOpen"/>
        </div>
      </template>
      <template #center v-if="title">
        {{ title }}
      </template>
      <template #end>
        <Menubar ref="menubarEl" :model="links" :pt="{root: ``}">
          <template #item="{ item, props, hasSubmenu }" >
            <Button text
                    :severity="$route.path === item.url ? 'success': 'primary'"
                    :icon="item.icon"
                    :label="item.label" />
          </template>
          </Menubar>
        <TheUserAvatar/>
      </template>
    </Toolbar>
    <Sidebar v-model:visible="sidebarOpen" header="menu" :pt="{
      title: `heading title uppercase`
    }">
      <Menu :model="links" :pt="{root: ''}" >
        <template #item="{item, label}">
          <Button text
                  :icon="item.icon"
                  :severity="$route.path === item.url ? 'success': 'primary'"
                  :label="item.label" />
        </template>
      </Menu>
    </Sidebar>
  </nav>
</template>


<style scoped>

</style>
