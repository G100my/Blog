<template>
  <p>建置中</p>
</template>
<script setup>
import {
  usePageFrontmatter,
} from '@vuepress/client'
// import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'

const frontmatter = usePageFrontmatter()

console.log(frontmatter)

</script>
