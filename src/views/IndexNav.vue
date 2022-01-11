<template>
  <nav class="h-screen flex justify-center items-center bg-blue-200">
    <ul class="m-0 flex flex-col gap-2 list-none">
      <li v-for="route in routes" :key="route.name" class="rounded-sm border-solid border-2 border-black bg-white">
        <router-link class="w-full inline-block p-1" :to="route">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { routes } from '../router'

const exceptions = new Set(['IndexNav'])

export default {
  computed: {
    routes() {
      return routes.filter(i => !exceptions.has(i.name))
    },
  },
}
</script>
