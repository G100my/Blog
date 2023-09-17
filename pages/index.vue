<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
</script>
<template>
  <main class="mx-auto text-white">
    <Info />

    <div class="fixed bottom-1 left-1">
      <NuxtLink :to="switchLocalePath(locale === 'zh' ? 'en' : 'zh')">
        <i class="ri-translate-2 text-xl" />
      </NuxtLink>
    </div>
  </main>
</template>
<style>
/* https://cssarrowplease.com/ */
.arrow_box {
  @apply absolute right-full -translate-x-3 p-1 text-xs;
  background: #4b5563;
  border: 2px solid #f3f4f6;
}
.arrow_box:after,
.arrow_box:before {
  left: 100%;
  top: 50%;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(75, 85, 99, 0);
  border-left-color: #4b5563;
  border-width: 6px;
  margin-top: -6px;
}
.arrow_box:before {
  border-color: rgba(243, 244, 246, 0);
  border-left-color: #f3f4f6;
  border-width: 9px;
  margin-top: -9px;
}
</style>
