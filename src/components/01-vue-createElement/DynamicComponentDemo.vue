<template>
  <div>
    <div id="dynamic-component-demo" class="flex gap-2">
      <button
        v-for="tab in ['componentA', 'componentB', 'componentC']"
        :key="tab"
        @click="
          () => {
            currentTab = tab
          }
        "
      >
        {{ tab }}
      </button>
    </div>
    <component :is="current" class="tab" />
  </div>
</template>

<script>
import {} from 'vue'
import componentA from './A.vue'
import componentB from './B.vue'
import componentC from './C.vue'

export default {
  components: {
    componentA,
    componentB,
    componentC,
  },
  setup() {
    // const current = useref
    const handleClick = tab => {
      console.log(tab)
    }

    return {
      current: 'componentA',
    }
  },
}
</script>
