<script setup lang="ts">
// 70 * 12 = 28 * 30 = 21 * 40 = 840

onMounted(() => {
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth()
  const nowIndex = (y - 1991) * 12 + (m - 0)

  const target = document.getElementById('date_container')?.children.item(nowIndex) as HTMLDivElement
  target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
})
</script>
<template>
  <section>
    <div
      id="date_container"
      class="grid grid-cols-[repeat(21,1fr)] grid-rows-[repeat(40,1fr)] gap-0.5 h-screen w-screen p-3 items-center justify-items-center"
    >
      <div
        v-for="i in 840"
        class="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 rounded-[1px] bg-blue-950/40 border border-neutral-900"
      />
    </div>
  </section>
</template>
