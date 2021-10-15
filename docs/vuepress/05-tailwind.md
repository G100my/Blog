---
title: Set up Tailwind in Vuepress
description: 在 vuepress 裡使用 tailwind，
date: '2021-10-15'
---

一直都在研究 vuepress 的基礎建設，
然後寫沒幾篇文章啊 XD，
怎麼有點本末倒置 😆😆😆

---

目前用了最喜歡的 css framework 就是 tailwind 了!!!

雖然不知道自己未來會不會有常常需要在文章裡面做 demo 的需求...

總覺得這個項目弄下去就只用 home page 會用到 😆😆😆

## Set up Tailwind in Vuepress

### 直接先來一組 install

```text
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p --jit
```

### 把 tailwind 放進專案，**因為沒有 main.js**

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
import '../somewhere/index.css'
// 或者可以直接
import 'tailwindcss/tailwind.css'
```

可以把它放到 `.vuepress/clientAppEnhance.js` 這隻檔案，

或者放到 `.vuepress/styles/index.scss` (如果是使用 Default Theme 的話)。

以上是按照 TailwindCSS 官網的步驟，**Tailwindcss 並沒有起作用**。

vuepress 專案的結構和一般 vue/react 等前端框架的專案不一樣，

似乎把 postcss config 放在 root path，並不會被 vite 發現，

vite 他說

> If the project contains valid PostCSS config (any format supported by postcss-load-config, e.g. postcss.config.js), it will be automatically applied to all imported CSS.

但是因為被 vuepress 層層包住過了或者可能被覆蓋掉某些設定，

vite 無法很聰明地找到 postcss config，

所以使用 `inline config` 的方式

> [css.postcss](https://vitejs.dev/config/#css-postcss)
> Type: string | (postcss.ProcessOptions & { plugins?: postcss.Plugin[] })
>
> Inline PostCSS config (expects the same format as postcss.config.js), or a custom path to search PostCSS config from (default is project root). The search is done using postcss-load-config.
>
> Note if an inline config is provided, Vite will not search for other PostCSS config sources.

在 vuepress 裡面有關 bundler 的設置都在 [`config.bundlerConfig`](https://v2.vuepress.vuejs.org/reference/config.html#bundlerconfig)。

:::danger
bundler 底下可以設置的屬性又分為兩大類，
取決於你使用 webpack / vite
:::

如果是使用 webpack，底下會有這些可以設定

- configureWebpack
- chainWebpack
- beforeDevServer
- afterDevServer
- vue
- postcss
- stylus
- scss
- sass
- less
- evergreen

如果是使用 vite

- viteOptions (底下就跟 vite config 一模一樣)
- vuePluginOptions

如果有使用 Typescript 的可以去找他的 type 出來使用，
在設定的時候可以透過 IDE 的輔助快速秀出可以設定的屬性。

附上我的設置

```javascript
// config.ts
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({

	...

	bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      },
    }
  } as ViteBundlerOptions
})
```

重啟 dev server!!

可以了，但是開啟 dev server 的速度被 tailwind 拖得超慢.... :dizzy_face::dizzy_face::dizzy_face:

而且 `JIT` 模式會沒辦法正常運作...

~~那倒不如直接 CDN 掛進來就好~~

可能還要去深探 JIT、postcss、vite、vuepress 運作流程，

暫時先這樣吧...。 (已耗時 4 小時 :cry:)

結果我的首頁還是一行都還沒刻... 🧟‍♂️
