import{_ as i,o as a,c as l,f as h,e as n,g as _,b as s,F as u,h as v,i as f,j as k,t as q,k as m,r as C,d,a as c}from"./app.c89a8060.js";const x={},B=n(" I am conponent A ");function A(t,e){return a(),l("h1",null,[B,h(t.$slots,"default")])}var o=i(x,[["render",A]]);const y={};function S(t,e){return a(),l("h1",null,"I am conponent B")}var N=i(y,[["render",S]]);const E={class:"w-96 h-40 border-2 text-sm"},w={class:"flex gap-2"},$=["onClick"],j={setup(t){const e=_(o),b=r=>{switch(console.log(r),r){case"componentA":e.value=o;break;case"componentB":e.value=N;break;case"componentC":e.value={render:()=>m(o,{id:"componentC",class:"p-2",style:"background-color: lightblue",onClick:()=>alert("clicked!")},{default:g=>m("p",{class:"text-sm"},"This is <p>, placed at default slot")}),props:{test:String},created(){console.log("created")}};break;default:return}};return(r,g)=>(a(),l("div",E,[s("div",w,[(a(),l(u,null,v(["componentA","componentB","componentC"],p=>s("button",{key:p,onClick:()=>b(p),class:"border border-black bg-gray-200 p-2"},q(p),9,$)),64))]),(a(),f(k(e.value),{class:"m-2"}))]))}},F=c(`<h1 id="vue-\u7684-is-\u642D\u914D-render-function-\u8655\u7406\u4E00\u4E9B\u7279\u6B8A\u60C5\u6CC1" tabindex="-1"><a class="header-anchor" href="#vue-\u7684-is-\u642D\u914D-render-function-\u8655\u7406\u4E00\u4E9B\u7279\u6B8A\u60C5\u6CC1" aria-hidden="true">#</a> vue \u7684 :is \u642D\u914D Render function \u8655\u7406\u4E00\u4E9B\u7279\u6B8A\u60C5\u6CC1</h1><p>\u5B98\u7DB2\u7BC4\u4F8B\u662F\u55AE\u7D14\u4F7F\u7528 vuejs\uFF0C \u90A3\u5982\u679C\u63DB\u5230 vue \u7684 SFC \u5462?</p><p>\u5728 SFC \u88E1\u5927\u6982\u6703\u662F\u9019\u500B\u6A23\u5B50:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;templete&gt;
  &lt;div&gt;
    &lt;div class=&quot;flex gap-2&quot;&gt;
      &lt;button v-for=&quot;tab in [&#39;componentA&#39;, &#39;componentB&#39;]&quot; :key=&quot;tab&quot; @click=&quot;() =&gt; handleClick(tab)&quot;&gt;
        {{ tab }}
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;component :is=&quot;current&quot; class=&quot;tab&quot; /&gt;
  &lt;/div&gt;
&lt;/templete&gt;
&lt;script&gt;
import componentA from &#39;./componentA.vue&#39;
import componentB from &#39;./componentB.vue&#39;

export default {
  data() {
    return {
      current: &#39;componentA&#39;,
    }
  }
  components: {
    componentA,
    componentB,
  },
  methods: {
    handleClick(componentName) {
      this.current = componentName
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>current \u5728 vue 2 \u662F\u653E component key name\uFF0C \u5230 vue 3 <code>&lt;script setup /&gt;</code> \u88E1\u53EF\u4EE5\u76F4\u63A5\u653E <code>component</code> (\u8ACB\u898B\u5B98\u7DB2)</p><h3 id="\u9019\u88E1\u6709\u5E7E\u500B\u5C0F\u72C0\u6CC1" tabindex="-1"><a class="header-anchor" href="#\u9019\u88E1\u6709\u5E7E\u500B\u5C0F\u72C0\u6CC1" aria-hidden="true">#</a> \u9019\u88E1\u6709\u5E7E\u500B\u5C0F\u72C0\u6CC1\uFF0C</h3><ul><li>\u60F3\u76F4\u63A5\u7D44\u88DD\u51FA\u4E00\u500B\u65B0\u7684\u5C0F\u5143\u4EF6\uFF0C\u53C8\u4E0D\u60F3\u984D\u5916\u591A\u5207\u4E00\u500B SFC \u51FA\u4F86</li><li><code>&lt;component&gt;</code> \u653E\u7684 component \u6709\u5404\u81EA\u4E0D\u540C\u7684 slot\uFF0C \u5168\u90FD\u5BEB\u5728 templete \u9032\u884C\u5224\u65B7\u6703\u932F\u7D9C\u8907\u96DC?</li><li>dynamic component \u662F\u653E\u5728\u5176\u4ED6 component \u7684 slot \u88E1\uFF0C\u4F46\u5FC5\u9808\u4F9D\u7167\u4E0D\u540C component \u653E\u7F6E\u5728\u4E0D\u540C namedSlot \u88E1? (\u662F\u60F3\u591A\u8907\u96DC?)</li></ul><p>\u8A72\u600E\u9EBC\u505A? \u76EE\u524D\u770B\u8D77\u4F86 SFC \u88E1\u9762\u8981\u4F7F\u7528 dynamic component \u5C31\u5F97\u628A component \u90FD\u5207\u597D\u3001\u984D\u5916\u653E\u6210 SFC\uFF0C \u5373\u4F7F\u4ED6\u7684\u8B8A\u52D5\u5F88\u5C0F\u4E5F\u4E00\u6A23\uFF0C\u56E0\u70BA <code>:is</code> \u8981\u7684\u662F component key name?</p><h3 id="\u4ED4\u7D30\u770B-api-documents" tabindex="-1"><a class="header-anchor" href="#\u4ED4\u7D30\u770B-api-documents" aria-hidden="true">#</a> \u4ED4\u7D30\u770B api documents</h3><p><code>is</code> \u9664\u4E86 String \u53E6\u5916\u9084\u53EF\u4EE5\u63A5\u53D7 <strong>Object (component\u2019s options object)</strong> \u7576\u4F5C\u53C3\u6578 \u4F46\u9019\u500B Object \u9577\u4EC0\u9EBC\u6A23\u5B50\u537B\u597D\u50CF\u6C92\u600E\u9EBC\u8AAA\u660E? \u5176\u5BE6\u5C31\u662F SFC export \u51FA\u53BB\u7684\u90A3\u500B Object.... \u5C31\u662F vuejs \u6700\u539F\u672C\u7684\u90A3\u7A2E\u5BEB\u6CD5\uFF0C\u53EA\u662F\u597D\u50CF\u5927\u5BB6\u592A\u5E38\u8655\u5728 vue cli + SFC \u7684\u4E16\u754C\u88E1\uFF0C \u771F\u7684\u6703\u4E0D\u592A\u6E05\u695A\u5230\u5E95\u600E\u9EBC\u5BEB...?</p><h3 id="\u7528-render-function" tabindex="-1"><a class="header-anchor" href="#\u7528-render-function" aria-hidden="true">#</a> \u7528 render function</h3>`,11),V=n("\u5728 "),T=s("code",null,"this",-1),I=n("(vm) \u88E1\u9762\u6709\u4E00\u500B $createElement\uFF0C \u4ED6\u901A\u5E38\u53EA\u51FA\u73FE\u5728 "),O=s("code",null,"render",-1),D=n(" \u63A5\u6536\u5230\u7684\u53C3\u6578\uFF0C \u6587\u4EF6\u8AAA\u662F "),L=s("code",null,"\u6A21\u677F\u5B57\u4E32",-1),M=n(" \u7684\u66FF\u4EE3\u65B9\u6CD5\u3002 \u5B83 return \u7684\u6771\u897F\u662F virtual DOM \u7684 node(\u7BC0\u9EDE)\uFF0C \u6587\u4EF6\u7A31\u5B83 "),R=s("code",null,"virtual node",-1),z=n("\uFF0C\u7C21\u7A31 "),G=s("code",null,"VNode",-1),H=n("\uFF0C \u6709\u6C92\u6709\u89BA\u5F97 VNode \u5F88\u5E38\u51FA\u73FE\u5728 vue api \u6587\u4EF6\u88E1\uFF0C\u4F46\u597D\u50CF\u6C92\u4EC0\u9EBC\u5730\u65B9\u6709\u8AAA\u660E\u5B83\u5230\u5E95\u662F\u4EC0\u9EBC? \u4ED6\u88AB\u8AAA\u660E\u5728"),J={href:"https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM",target:"_blank",rel:"noopener noreferrer"},K=n("\u9019\u88E1"),P=n(" \u8ACB\u9806\u4FBF\u5F80\u4E0B\u770B createElement \u7684\u7528\u6CD5\u3002"),Q=c(`<p>\u6240\u4EE5 vue 2 \u88E1\u9762\u53EF\u4EE5\u9019\u6A23\u5BEB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;div&gt;
      &lt;button
        v-for=&quot;tab in [&#39;componentA&#39;, &#39;componentB&#39;, &#39;newComponent&#39;]&quot;
        :key=&quot;tab&quot;
        @click=&quot;() =&gt; handleClick(tab)&quot;
      &gt;
        {{ tab }}
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;component :is=&quot;current&quot; class=&quot;tab&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import componentA from &#39;./componentA.vue&#39;
import componentB from &#39;./componentB.vue&#39;
export default {
  components: {
    componentA,
    componentB,
  },
  data() {
    const newComponent = {
      render: (createElement) =&gt;
        createElement(
          componentA,
          {
            attrs: {
              id: &#39;componentC&#39;,
              class: &#39;component_C_class&#39;,
              style: &#39;background-color: lightblue&#39;,
            },
            on: {
              click: () =&gt; alert(&#39;componentC clicked!&#39;),
            },
            scopedSlots: {
              default: (props) =&gt; createElement(componentB),
            },
          },
          [
            &#39;This is text node inside the ComponetC&#39;,
            // \u4E5F\u53EF\u4EE5\u76F4\u63A5\u7528 this \u5E95\u4E0B\u7684 $createElement\uFF0C\u90FD\u662F\u4E00\u6A23\u7684\u6771\u897F
            this.$createElement(&#39;p&#39;, {}, &#39;This is child &lt;p&gt; tag&#39;),
          ],
        ),
      props: {
        test: String,
      },
      created() {
        console.log(&#39;created&#39;)
      }
    }
    return {
      current: null,
      newComponent: newComponent,
    }
  },
  methods: {
    handleClick(componentName) {
      if (componentName === &#39;newComponent&#39;) {
        console.log(componentName)
        this.current = this.newComponent
      } else {
        this.current = componentName
      }
    },
  },
}
&lt;/script&gt;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><p>vue 3 \u4E00\u6A23\u3002 \u53EA\u662F</p><ul><li>\u539F\u672C render function \u6536\u5230\u7684\u53C3\u6578 - <code>createElement</code>\uFF0C\u5728\u6587\u4EF6\u88E1\u7684\u540D\u7A31\u5F9E <code>createElement</code> \u8B8A\u6210 <code>h</code></li><li>\u4E26\u4E14 <code>h</code> \u88AB\u62C9\u5347\u5230 global\uFF0C\u9700\u8981\u53E6\u5916 Import \u8FD1\u4F86\u4F7F\u7528\uFF0C\u4E0D\u6703\u5728 render function \u88E1\u6536\u5230\u4E86\u3002</li><li>VNode props \u7684\u66F8\u5BEB\u683C\u5F0F\u5E73\u7248\u5316\uFF0C\u50CF\u662F <code>id</code>, <code>style</code>, <code>class</code>, \u4E0D\u5FC5\u518D\u5305\u5728 <code>attrs</code> \u88E1\uFF0Cclick \u62C9\u5347\u8B8A\u6210 onClick\u3002</li></ul><p>\u6700\u5F8C\u9644\u4E0A\u7528 vue 3 <code>&lt;script setup&gt;</code> \u5BEB\u7684 demo</p>`,5),U=c(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;w-96 h-40 border-2&quot;&gt;
    &lt;div class=&quot;flex gap-2&quot;&gt;
      &lt;button
        v-for=&quot;tab in [&#39;componentA&#39;, &#39;componentB&#39;, &#39;componentC&#39;]&quot;
        :key=&quot;tab&quot;
        @click=&quot;() =&gt; handleClick(tab)&quot;
        class=&quot;border border-black bg-gray-200 p-2&quot;
      &gt;
        {{ tab }}
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;component :is=&quot;current&quot; class=&quot;m-2&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, h } from &#39;vue&#39;
import componentA from &#39;./A.vue&#39;
import componentB from &#39;./B.vue&#39;

const current = ref(componentA)
const handleClick = tab =&gt; {
  console.log(tab)
  switch (tab) {
    case &#39;componentA&#39;:
      current.value = componentA
      break
    case &#39;componentB&#39;:
      current.value = componentB
      break
    case &#39;componentC&#39;:
      current.value = {
        render: () =&gt;
          h(
            componentA,
            {
              id: &#39;componentC&#39;,
              class: &#39;p-2&#39;,
              style: &#39;background-color: lightblue&#39;,
              onClick: () =&gt; alert(&#39;clicked!&#39;),
            },
            {
              default: props =&gt; h(&#39;p&#39;, &#39;This is &lt;p&gt;, placed at default slot&#39;),
            }
          ),
        props: {
          test: String,
        },
        created() {
          console.log(&#39;created&#39;)
        },
      }
      break
    default:
      return
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,1),X={setup(t){return(e,b)=>{const r=C("ExternalLinkIcon");return a(),l(u,null,[F,s("p",null,[V,T,I,O,D,L,M,R,z,G,H,s("a",J,[K,d(r)]),P]),Q,d(j),U],64)}}};export{X as default};
