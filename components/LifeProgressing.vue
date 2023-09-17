<script setup lang="ts">
// 70 * 12 = 28 * 30 = 21 * 40 = 840

onMounted(() => {
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth()
  const nowIndex = (y - 1991) * 12 + (m - 0)

  const target = document
    .getElementById('date_container')
    ?.children.item(nowIndex) as HTMLDivElement
  target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
})
</script>
<template>
  <div
    id="date_container"
    class="grid h-screen w-full grid-cols-[repeat(21,1fr)] grid-rows-[repeat(40,1fr)] items-center justify-items-center gap-0.5 p-3"
  >
    <div
      v-for="i in 840"
      class="h-3 w-3 rounded-[1px] border border-neutral-900 bg-blue-950/40 sm:h-4 sm:w-4"
    />
  </div>
</template>
