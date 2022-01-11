<template>
  <div>
    <div class="flex gap-2">
      <button v-for="tab in ['componentA', 'componentB', 'componentC']" :key="tab" @click="() => handleClick(tab)">
        {{ tab }}
      </button>
    </div>
    <component :is="current" class="tab" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import componentA from './A.vue'
import componentB from './B.vue'
import componentC from './C.vue'

const current = ref(componentA)
const handleClick = tab => {
  console.log(tab)
  switch (tab) {
    case 'componentA':
      current.value = componentA
      break
    case 'componentB':
      current.value = componentB
      break
    case 'componentC':
      current.value = componentC
      break
    default:
      return
  }
}
</script>
