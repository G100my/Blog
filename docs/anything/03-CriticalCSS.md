---
title: 什麼是 Critical Rendering Path？
description: Critical Rendering Path, Critical CSS
date: 2022-02-01
---

# 什麼是 Critical Rendering Path？

在想著要自己弄一套自己固定的一套開發環境時，
邊參考 [@antfu](https://github.com/antfu) 的 [Vitesse](https://github.com/antfu/vitesse) 邊建立，
其中看到一個 package - [critters](https://github.com/GoogleChromeLabs/critters)，
不知道他幹嘛用的，所以一路搜尋下來獲得不少名詞定義方面的知識，
感覺 critters 應該也是日後開發必需品，
覺得有意思，來紀錄一下

先來看一下文章～了解一下什麼是 [Critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) (by Dean Hume, google developer 上面有一堆文章也是他寫的)

文章大致上是說明該如何解決 **CSS 太過龐大導致拖慢整體網站渲染速度** 這個問題，

#### 關鍵字：`critical rendering path`

Critical Rendering Path(CRP) 並不是指什麼某個網路資源的 path，而是指**瀏覽器怎麼把 Html、CSS、Javascript 變成一堆像素畫在螢幕上的過程**

~~離開世界之前 一切都是過程 活著不難 最難的是做人 《蛋堡 - 過程》~~

瀏覽器的渲染畫面的運作流程

1. 處理 HTML，從**根**生出我們所熟知的 DOM Tree
1. 處理 CSS 並且生出 CSSOM Tree
1. 結合上述兩棵樹變成 render tree，把 style 放到相對應的 node 上
1. 計算每個 node 的 layout
1. 畫到螢幕上

瀏覽器必須要先把所有出現在 `<head>` 裡的所有 CSS 規則都先釐清了才會去進一步地做計算，然後渲染網頁。

如果 CSS 檔案不僅數量多，還很長，那肯定得多花更多時間，
而且數量多表示你發的 request 也多，會有更多時間消耗在一來一回上面。

:::info 參考
[Render-tree Construction, Layout, and Paint](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=en)

> **Optimizing the critical rendering path is the process of minimizing the total amount of time spent performing steps 1 through 5 in the above sequence.** Doing so renders content to the screen as quickly as possible and also reduces the amount of time between screen updates after the initial render; that is, achieve higher refresh rates for interactive content.

也可以看 MDN 上面對 CRP 的解釋，大同小異但可能比較清楚？
[MDN - Critical rendering path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)
:::

那如果把 CSS file 數量減少、檔案大小縮小、並且透過調整下載順序，
把關鍵的、當下頁面必須要用到的 CSS 下載下先來渲染畫面，
再去背景下載其他當下沒有急著要用的 CSS，
是不是就可以提升使用者體驗了呢？

話講得很簡單，阿就是把先不會用到的用 async 的方式延後，先下載必要的而已嘛～

阿可是怎麼歸類出那些關鍵的 CSS ?
又不能保證使用者每次進來網站，第一個畫面都是固定的，
換言之就是可能每一頁都要做這樣的處理，
手動來處理這種問題肯定會花轟...

上面提到的 critters 就是在幫助你處理這件事情

### 關鍵字：`Critical CSS`

`Critical CSS` 指的就是那些讓首頁或者使用者第一眼會看到的畫面所需要的、最關鍵的 CSS

## 修但幾勒，用這項技術前先看一下

文章提及了使用這件技術的反方

請見：

1. [A counter statement: Putting the CSS in the head - by Hans Christian Reinl](https://medium.com/@drublic/a-counter-statement-putting-the-css-in-the-head-f98103d09ce1)
1. [Why Inlining Everything Is NOT The Answer - by Guy Podjarny](https://calendar.perfplanet.com/2011/why-inlining-everything-is-not-the-answer/)

簡單講就是：
這項技術會導致 瀏覽器可能沒辦法正常的把 css 給 cathe 住，變成你每次進到一個新的頁面，就得重新下載一次。
或者有可能會下載到不必要的 css，例如瀏覽 A 頁面時，背景異步下載了Ｂ頁面的東西....
所以 **請依照專案的情境再來決定要不要使用這項技術**。
