<template>
  <Layout>
    <template #page>
      <Home />
    </template>
  </Layout>
</template>
<script setup>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Home from '../../../src/views/Home.vue'
</script>
