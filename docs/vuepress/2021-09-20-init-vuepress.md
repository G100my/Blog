---
title: 用 Vuepress 架個人部落格
description: 從零開始用 Vuepress 架部落格
date: '2021-09-20'
---

Vuepress-vite@next
===

###### tags: 'Vuepress'

## Vuepress-vite@next

剛開始寫技術文章的部落格，
第一篇當然就從建立部落格開始。

海量搜尋文章後，決定使用 **Vuepress-next**(Vuepress v2)。

- **支援 markdown**，
- 本質使用 **vue + vue router**，
- **markdown 解析引擎是使用 [markdown-it][1]**，這點對於用慣 HackMD 的人可能很重要。
- 可以在 markdown 裡面使用 vue，本身學習的第一個框架就是 vue，用得最順手，考量以後如果要寫些什麼東西額外的東西當然是選支援度最好的。
- 可以使用 Vite!!
- 雖然本質上是SPA，但已經把SSR的東西幫你處理好了

其他還有考慮過 [Hexo][hexo]、[Vitepress][vitepress]

#### 缺點(代價)

- Vuepress 相對冷門，教學並不多。唯一找到的是 第12屆鐵人賽 - [透過 VuePress 建構 JAMstack 網站來肆意玩弄 Markdown 系列文][ironman]，他介紹的版本應該是 v1，但還是值得看一下。
- v1 和 v2 的 plugins 和 theme 並不相容。
    v1 是使用 vue 2
    v2 是使用 vue 3
- 目前文件連結很有可能會連到 vuepress v1 的資源，請小心。

#### Vitepress? Vuepress?

**注意!!**

- **Vuepress-next 已經支援 Vite!**。
- Vitepress 和 Vuepress 差在**目的、定位**不一樣。[官方文件 - Other Differences][vitepress-2]

Vitepress 感覺上會更適合用在 文檔的書寫，而 Vuepress 感覺上已經偏向可以應用在 blog 這方面的需求(因為已經有生態圈、plugins，但最初誕生的目的也是為了要讓 vue 生態系的貢獻者方便寫文件)

:::warning
我是從 [將 Hexo 的 Markdown 渲染引擎換成 markdown-it][2]，及查看 hackmdio 底下的 [codimd repo][3]，得知 HackMD 的解析引擎是 markdown-it
另外 **codimd** 是 hackMD 的開源版本，功能沒有書本模式。
:::

:::info
Vuepress 的介紹除了官方也可以參考 [BILLY CHIN - 介紹 VuePress 官方部落格主題與套件][4]
:::

至於不選擇 hexo 的原因...
**因為好多人用噢...:zany_face::smirk:**

[1]:https://github.com/markdown-it/markdown-it
[2]:https://titangene.github.io/article/hexo-markdown-it.html
[3]:https://github.com/hackmdio/codimd
[4]:https://billyyyyy3320.com/zh/2020/01/25/intro-to-vuepress-blog-theme-and-plugin/
[hexo]:https://hexo.io/zh-tw/
[vitepress]:https://vitepress.vuejs.org/
[vitepress-2]:https://vitepress.vuejs.org/#other-differences
[ironman]:https://ithelp.ithome.com.tw/users/20129182/ironman/3444

## 接下來...

跳著看官網文件吧!
以下是我實作時看官網的順序:

1. install、建立空白網站 (Getting started)
1. head 設置 (自行看官網 [Configuration - Config File][head])
1. 頁面配置 ([Theme][Theme])

:::danger
**我並不會完整地把每一步每一步流程詳細列出來，**
請先大致上閱讀過**官方文件**。
**一步一步列出來、那就叫 寫實派 了**
:::

[head]:https://v2.vuepress.vuejs.org/guide/configuration.html#config-file
[Theme]:https://v2.vuepress.vuejs.org/guide/theme.html#community-theme

## install

可以在最一開始的時候就先選擇你的 bundler 要使用 webpack 還是 vite

```
npm install -D vuepress@next
// or
npm install -D vuepress-vite@next
```

照著官網 Getting started 做就可以立馬使用 `npm run dev` 在 local 建立一個 空蕩蕩 的靜態網站。

## 開始設一些基本設置

Vuepress 檔案幾乎都放在 `docs` 這個資料夾底下，
docs 底下可以建立 `.vuepress` 資料夾，`.vuepress`專門放 vuepress 指定的 config file，
而文章(`.md`)則放在 `docs`。

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  │
│  ├─ posts
│  │  └─ something.md (path: '/posts/something.html')
│  │
│  ├─ aboutme.md (path: '/aboutme.html')
│  └─ README.md (README是首頁 root path: `/`)
├─ .gitignore
└─ package.json
```

預設情況 route 是根據 `docs` 檔案目錄配置產生的。
把 `docs` 當作 **`sourceDir`**。
文件確實是使用 **`sourceDir`** 來稱呼的，大概是要跟專案內的 root path 做個區隔。可以簡單理解成 root path 即可。

**還沒有設置 nav**，
當你依照上面的規則新增檔案後，
手動的在瀏覽器網址 key 入相對應的網誌就會看到新增的內容了。

## 頁面配置

ㄜ...順順的看 Guide 可能會一頭霧水:confused:，我弄出一個空白頁面後要怎麼開始建立其他細節啊!?

在 Vuepress 的世界裡，可以把`theme`理解成是額外的 plugins，你可以寫你自己的也可以用別人已經開發好的，但是**每個 theme 可能都有不一樣的 config**。
如果你已經有中意的 theme 建議可以直接安裝、照著那個 theme 的文件是配製你的頁面。

如果覺得 default theme 已經滿足你的需求
請見 [Default Theme Config][defaultTheme]
相關設置包含 nav, sidebar, search box 都在裡面。

- 要找貢獻者們的樣式請到 npm、`keywords:vuepress-theme`找，目前似乎還沒有一個地方去整合蒐集這些 theme。
- **自己寫的話...就是用 Vue 來寫!!**

所以...我決定就先用預設的吧，之後再來自己寫樣式
> murmur: 其實是因為找不到喜歡的 theme 可以直接套用:zany_face: 目前樣式還非常非常少

[defaultTheme]:https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config
