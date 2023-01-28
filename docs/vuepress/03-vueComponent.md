---
title: 直接在 `.md` 裡面直接引用 Vue
description: 直接在 `.md` 裡面引用 Vue
date: '2021-09-29'
---

## 直接在 `.md` 裡面直接引用 Vue

下面這個白色區塊是夾雜在 `.md` 的 Vue Component

<CountSample />

先直接上文檔 [Markdown and Vue SFC](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/markdown-and-vue-sfc.html)

**這篇文檔算是最吸引我、讓我選擇使用 Vuepress 當作 Blog 框架的地方，**
雖然它被藏在 Learn More > Cookbook 這樣不起眼的目錄底下，
看完有沒有覺得好像很輕易的就多了無限發展的可能??

如果前面有看文檔，
應該還記得，
**Vuepress 是把每個 Markdown file 解析變成 HTML Template，再把它轉換成 Vue SFC。**

:::info HTML Template?
這裡的 HTML Template，指的就是 SFC 的 `<template>`
:::

所以 其實可以把每個 Markdown file 都當成 Vue SFC。
只要你所寫的在解析時能夠被 vuepress 看懂，你想使用什麼 Vue SFC 常用的語法，照理講都可以使用。

> Blocks \<script> and \<style> are treated as Vue SFC blocks as they are. In other words, they are hoisted from the \<template> block to the top-level of SFC.
>
> Everything outside \<script> and \<style> will be compiled into HTML, and be treated as Vue SFC \<template> block.

當 Markdown file 在被解析時，
遇到 `<script>` 和 `<style>` 會保留下來作為 Vue SFC 的 `<script>` 和 `<style>`

文檔的範例是用 [`Declarative Rendering`](https://vuejs.org/v2/guide/) 的方式寫 component，
所以下面示範用 SFC 的方式引用 component。

```javascript
// CountSample.vue

<template>
  <div class="container">
    <p class="title">
      count:
      <span class="count">{{ count }}</span>
    </p>
    <button type="button" @click="clickHandler">click me</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    clickHandler() {
      this.count += 1
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  ...
}
</style>

```

```javascript{1,5}
// sample.md

...some text

<CountSample />

...some text

<script>
// 把 component 引用進來 .md，並且註冊在 components
import CountSample from '...?.../CountSample.vue'
export default {
  components: {
    CountSample
  }
}
</script>
```

:::warning

> As Vue SFC can contain only one \<script> element, you should avoid using more than one \<script> in VuePress markdown.

避免使用多個 \<script>，正常情況下應該也不會這樣寫。
如果在單一 Markdown file 裡面有使用多個 components，
就直接用 options API - components 引用進來就好啦~
:::
