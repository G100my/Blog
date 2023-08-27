<script setup lang="ts">
const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
<template>
  <main class="text-white">
    <div class="space-x-10">
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink :to="switchLocalePath('zh')">繁體中文</NuxtLink>
    </div>

    <h1>{{ t('me') }}</h1>
  </main>
</template>
