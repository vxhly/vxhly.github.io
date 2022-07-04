import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.f29ec3fb.js";const t={},e=p(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u81EA\u4ECE vue cli \u5347\u7EA7\u5230 3.0 \u4E4B\u540E, vue \u9879\u76EE\u5BF9 TypeScript \u7684\u652F\u6301\u5EA6\u4E5F\u4E0D\u65AD\u7684\u63D0\u5347, \u4E3A\u4E86\u66F4\u597D\u7684\u5B66\u4E60 TypeScript, \u672C\u7BC7\u6587\u7AE0\u8BB0\u5F55\u7740 vue \u5168\u5BB6\u6876\u7ED3\u5408 TypeScript \u7684\u98DF\u7528\u65B9\u5F0F\u3002</p></div><h2 id="vue-cli-3-0" tabindex="-1"><a class="header-anchor" href="#vue-cli-3-0" aria-hidden="true">#</a> vue-cli 3.0</h2><h3 id="cli-\u5DE5\u5177\u5230\u5E95\u5347\u7EA7\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#cli-\u5DE5\u5177\u5230\u5E95\u5347\u7EA7\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> cli \u5DE5\u5177\u5230\u5E95\u5347\u7EA7\u4E86\u4EC0\u4E48</h3><ul><li>GUI \u9879\u76EE\u7BA1\u7406\u754C\u9762</li><li>\u66F4\u52A0\u7B80\u6D01\u7684\u76EE\u5F55\u7ED3\u6784</li><li>TypeScript \u7684\u652F\u6301</li><li>Git Hook \u63D0\u4EA4 commit \u7684\u65F6\u5019\u68C0\u67E5\u4EE3\u7801\u7684\u89C4\u8303\u6027</li><li>\u4F9D\u8D56\u548C\u63D2\u4EF6\u7BA1\u7406\u66F4\u52A0\u65B9\u4FBF(GUI \u7BA1\u7406)</li><li>Progressive Web App \u7684\u652F\u6301</li><li>Vue Router &amp; Vuex</li><li>ESLint / TSLint / Prettier</li><li>\u7528 Jest \u6216 Mocha \u8FDB\u884C\u5355\u5143\u6D4B\u8BD5</li><li>\u7528 Cypress \u6216\u8005 Nightwatch \u8FDB\u884C E2E \u6D4B\u8BD5</li><li>\u9884\u914D\u7F6E webpack \u529F\u80FD, \u5982\u6A21\u5757\u70ED\u66FF\u6362\u3001\u4EE3\u7801\u62C6\u5206\u3001 \u6447\u6811\u4F18\u5316\uFF08tree-shaking\uFF09\u3001\u9AD8\u6548\u6301\u4E45\u5316\u7F13\u5B58\u7B49</li><li>\u901A\u8FC7 Babel 7 + preset-env\uFF08Babel \u63D2\u4EF6\uFF09\u5BF9 ES2017 \u8FDB\u884C\u8F6C\u6362\u548C\u57FA\u4E8E\u4F7F\u7528\u60C5\u51B5\u6CE8\u5165 polyfill</li><li>\u652F\u6301 PostCSS\uFF08\u9ED8\u8BA4\u542F\u7528 autoprefixer\uFF09\u548C\u6240\u6709\u4E3B\u8981\u7684 CSS \u9884\u5904\u7406\u5668</li></ul><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue create <span class="token punctuation">[</span>productName<span class="token punctuation">]</span>
<span class="token comment"># or</span>
vue ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u9009\u65B9\u6848\u65F6, \u8BB0\u5F97\u628A TypeScript \u7684\u652F\u6301\u52FE\u9009</p><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><p>TypeScript \u662F\u4E00\u79CD\u7531\u5FAE\u8F6F\u5F00\u53D1\u7684\u81EA\u7531\u548C\u5F00\u6E90\u7684\u7F16\u7A0B\u8BED\u8A00\u3002\u5B83\u662F JavaScript \u7684\u4E00\u4E2A\u8D85\u96C6, \u800C\u4E14\u672C\u8D28\u4E0A\u5411\u8FD9\u4E2A\u8BED\u8A00\u6DFB\u52A0\u4E86\u53EF\u9009\u7684\u9759\u6001\u7C7B\u578B\u548C\u57FA\u4E8E\u7C7B\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B. TypeScript \u6269\u5C55\u4E86 JavaScript \u8BED\u6CD5, \u4EFB\u4F55\u5DF2\u7ECF\u5B58\u5728\u7684 JavaScript \u7A0B\u5E8F, \u53EF\u4EE5\u4E0D\u52A0\u4EFB\u4F55\u6539\u52A8, \u5728 TypeScript \u73AF\u5883\u4E0B\u8FD0\u884C\u3002TypeScript \u53EA\u662F\u5411 JavaScript \u6DFB\u52A0\u4E86\u4E00\u4E9B\u65B0\u7684\u9075\u5FAA ES6 \u89C4\u8303\u7684\u8BED\u6CD5, \u4EE5\u53CA\u57FA\u4E8E\u7C7B\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u8FD9\u79CD\u7279\u6027\u3002</p><h2 id="\u5728\u9879\u76EE\u4E2D\u98DF\u7528-typescript" tabindex="-1"><a class="header-anchor" href="#\u5728\u9879\u76EE\u4E2D\u98DF\u7528-typescript" aria-hidden="true">#</a> \u5728\u9879\u76EE\u4E2D\u98DF\u7528 TypeScript</h2><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h3><h4 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">&quot;vue-class-component&quot;</span><span class="token punctuation">;</span>

  @Component
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg1</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
    <span class="token literal-property property">msg2</span><span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string">&quot;hello word&quot;</span><span class="token punctuation">;</span>
    <span class="token literal-property property">obj</span><span class="token operator">:</span> Object <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg1</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token literal-property property">msg2</span><span class="token operator">:</span> <span class="token string">&quot;hello word&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span> Array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&quot;hello word&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>======&gt;</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg1</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg2</span><span class="token operator">:</span> <span class="token string">&quot;hello word&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">msg1</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg2</span><span class="token operator">:</span> <span class="token string">&quot;hello word&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&quot;hello word&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h4><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>@Watch(path: string, options: WatchOptions = {})</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Vue<span class="token punctuation">,</span> Component<span class="token punctuation">,</span> Watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-property-decorator&quot;</span><span class="token punctuation">;</span>

  @Component
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    @<span class="token function">Watch</span><span class="token punctuation">(</span><span class="token string">&quot;child&quot;</span><span class="token punctuation">)</span>
    <span class="token function">onChildChanged</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">oldVal</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    @<span class="token function">Watch</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onPersonChanged</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> Person<span class="token punctuation">,</span> <span class="token literal-property property">oldVal</span><span class="token operator">:</span> Person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>======&gt;</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token string">&quot;onChildChanged&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token string">&quot;onPersonChanged&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">onChildChanged</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">onPersonChanged</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h3><h3 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h3><h4 id="\u9700\u8981\u5B89\u88C5\u63CF\u8FF0\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u5B89\u88C5\u63CF\u8FF0\u6587\u4EF6" aria-hidden="true">#</a> \u9700\u8981\u5B89\u88C5\u63CF\u8FF0\u6587\u4EF6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D @types/axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4E00\u4E2A\u6817\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u6817\u5B50" aria-hidden="true">#</a> \u4E00\u4E2A\u6817\u5B50</h4><p><code>config.ts</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">serverURL</span><span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string">&quot;http://127.0.0.1:8090/api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> serverURL <span class="token keyword">as</span> url <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>axios.ts</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> url <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/config&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> protocol <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span>
<span class="token keyword">const</span> host <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>host<span class="token punctuation">;</span>
<span class="token keyword">const</span> domain <span class="token operator">=</span> document<span class="token punctuation">.</span>domain<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">serverURL</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>domain <span class="token operator">===</span> <span class="token string">&quot;127.0.0.1&quot;</span> <span class="token operator">||</span> domain <span class="token operator">===</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  serverURL <span class="token operator">=</span> url<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  serverURL <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>protocol<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> <span class="token string">&quot;//&quot;</span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:8090/api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA axios \u5B9E\u4F8B</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> serverURL<span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> instance<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[e];function l(c,i){return s(),a("div",null,o)}var d=n(t,[["render",l],["__file","usage-typescript-in-vue-family-bucket.html.vue"]]);export{d as default};
