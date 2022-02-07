<script setup>
function switchDarkMode() {
  const htmlClasses = document.documentElement.classList
  console.log(htmlClasses)
  if (htmlClasses.contains('dark')) {
    htmlClasses.remove('dark')
  } else {
    htmlClasses.add('dark')
  }
}
</script>
<template>
  <button class="fixed right-0 left-0 mx-auto z-10" @click="switchDarkMode">dark mode?</button>
  <router-view />
</template>
