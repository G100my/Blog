---
title: 把 Default theme 做點修改
description: 使用 Vuepress Theme API，把既有的 Default theme 做點修改，改掉局部頁面。
date: '2021-10-02'
---

## 修改 Default theme 的顏色

要修改 Default theme 的顏色、元件寬高請到這裡 - [Default theme reference](https://v2.vuepress.vuejs.org/reference/default-theme/styles.html#style-file)

只要在 `docs/.vuepress/styles/index.scss` 裡把你要修改的 CSS Variables 寫進去，

Vuepress 就會從上面的預設路徑(`docs/.vuepress/styles/index.scss`)去讀取 CSS 進行複寫，極簡單。

如果要更改預設路徑 (意思就是更改檔案目錄結構配置)，

很遺憾，似乎是沒有辦法單做這項的修改。(如果可以請告知Q_Q)

**可能要使用 Theme API 來 extend Default theme ，把它變成新的 theme 再做設定才可以。**

個人覺得也沒有必要特地去改變這項預設值，如果使用其他工具來產出 `.css`、`.scss` ，

應該都可以用其他工具的配置讓檔案直接產出在指定目錄，

Vuepress v2 的文件也沒有寫出比較詳細的檔案結構目錄，

如果真的好奇，可以去 v1 的文件去看，

但我覺得沒寫大概是表示--沒有特別去約定這個的必要。

## Frontmatter - Layout

:::murmur
v2 文件真的有夠給他不清不楚的 💩.......
最後是 v1 文件解救了我 :angel:...
開頭就 murmur :laughing: 實在是因為浪費太多時間，
還以為會很輕鬆簡單地找到資源，
我只是要客製個 Homepage 啊啊啊~~~
:::

請服用 [文件](https://v2.vuepress.vuejs.org/reference/frontmatter.html#layout)

**來做個 custom homepage 吧!!**

我打算用 Frontmatter - Layout 來客製我的 Homepage

你說為什麼不去 config 改 home page 的 component 之類的呢? 去更改 homepage 使用的檔案路徑之類的~?

噢~我本來真的打算這麼做，但是看了 default theme 的 `Layout.vue` 後發現好像有點困難，

又換句話說，在 `.md` 裡面設定 Layout 就是 vuepress 指定 component 的方式。

:::details 來~ 點我看 Layout.vue

```html{33}
<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
    </slot>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <Sidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>

    <slot name="page">
      <Home v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </slot>
  </div>
</template>
```

:::

文件翻來翻去也找不到比較清楚的篇章，

別怕!! stackoverflow 一定有!

- [How can I use Custom Layout for Specific Pages of the Vuepress?](https://stackoverflow.com/questions/60161705/how-can-i-use-custom-layout-for-specific-pages-of-the-vuepress)
- [How can I use markdown in the Homepage layout of the VuePress?](https://stackoverflow.com/questions/60880191/how-can-i-use-markdown-in-the-homepage-layout-of-the-vuepress)

雖然都有點文不對題，但都可以得出方法。

1. frontmatter - layout，可以設定"這份" `.md` 要使用的 vue component
1. frontmatter - home，可以設定"這份" `.md` 要不要當作首頁

那這部分...要額外建立個 `.md` 來當作 homepage 的 markdown file 呢? 還是使用 `README.md` ?

其實都一樣啦~

取決於你的 Blog github repo 的 `README.md` 呈現，

我的話應該會另外設置一個 `Home.md`，`README.md` 就寫一些關於這個部落格架設的技術簡介，

`Home.vue` component 可以結合 `Home.md` 的內容快速做調整，

應該是這樣吧?

---

```vue
<template>
  <p>I am Home page</p>
</template>
```

```javascript{7}
// docs/.vuepress/clientAppEnhance.js
import { defineClientAppEnhance } from '@vuepress/client'
import Home from './Home.vue'

export default defineClientAppEnhance(({ app }) => {
  // 把 Custom Home SFC 註冊為可以全域使用的 component
  app.component('Home', Home)
})
```

```text{4,5}
---
title: Home
date: '2021-10-02'
home: true
layout: Home
---
...some content
```

這樣~ 首頁就是吃到 Custom Home SFC 了~

剩下的就參考原本 vuepress 的 Home.vue 來放 props 應該就可以了。

~~...最好這麼簡單~~

來~先來看一下 [Default Theme Reference - Frontmatter](https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html#all-pages)。

:::details 再來~點我看原本的 Home.vue。

```javascript{55,59,66,72,75,87,100,105,109}
<template>
  <main class="home" :aria-labelledby="heroText ? 'main-title' : undefined">
    <header class="hero">
      <img v-if="heroImage" :src="heroImage" :alt="heroAlt" />

      <h1 v-if="heroText" id="main-title">
        {{ heroText }}
      </h1>

      <p v-if="tagline" class="description">
        {{ tagline }}
      </p>

      <p v-if="actions.length" class="actions">
        <NavLink
          v-for="action in actions"
          :key="action.text"
          class="action-button"
          :class="[action.type]"
          :item="action"
        />
      </p>
    </header>

    <div v-if="features.length" class="features">
      <div v-for="feature in features" :key="feature.title" class="feature">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <div class="theme-default-content custom">
      <Content />
    </div>

    <template v-if="footer">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="footerHtml" class="footer" v-html="footer" />
      <div v-else class="footer" v-text="footer" />
    </template>
  </main>
</template>

<script setup lang="ts">
import {
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
import NavLink from './NavLink.vue'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()

// hero image and title
const heroImage = computed(() => {
  if (!frontmatter.value.heroImage) {
    return null
  }

  return withBase(frontmatter.value.heroImage)
})
const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})
const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero'
)
const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

// action buttons
const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

// feature list
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})

// footer
const footer = computed(() => frontmatter.value.footer)
const footerHtml = computed(() => frontmatter.value.footerHtml)
</script>
```

:::

標記的地方，是不是有種似曾相似的感覺?

---

## usePageFrontmatter

Q: 所以...是不是 Frontmatter 裡面的 property name 可以自訂?

A: **可以!**。

```yaml
---
lang: en-US
title: Title of this page
description: Description of this page
---
```

被 \`---` 標記的部分是 [YAML](https://yaml.org/)，可以直接點擊連結看 YAML 是什麼。

**它，就只是一種格式。** 這樣理解它 就好。

不然可以看這位大大的 [IThome 文章](https://ithelp.ithome.com.tw/articles/10206454)

`usePageFrontmatter` 會把當前頁面的 Frontmatter(YAML) 拿出來給你使用。

所以假設今天我想讓我的 Home page 是客製化的個人經歷/履歷/自我介紹，
這類幾個月就要添上一筆的東西，就很適合使用 frontmatter 來寫，在自訂自己想要的 component 依序渲染。

(嘿對，就跟你平常工作使用 vue 來寫網頁一樣XD)

大概是這樣子~
