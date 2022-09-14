import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as e}from"./app.a3d402e1.js";const t={},p=e(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u8BB0\u5F55 graphql \u7684\u5B66\u4E60\u7B14\u8BB0.</p></div><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><h2 id="schema-\u5305\u542B\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#schema-\u5305\u542B\u7684\u7C7B\u578B" aria-hidden="true">#</a> Schema \u5305\u542B\u7684\u7C7B\u578B</h2><ul><li><p><code>Scalar types</code></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u4E0B\u9762\u7684\u6570\u636E\u7C7B\u578B\u7C7B\u4F3C\u4E8E\u6211\u4EEC\u5E73\u5E38\u4F7F\u7528\u7684\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u539F\u59CB\u7C7B\u578B\u3002</li><li>\u9700\u8981\u5B9A\u4E49\u975E\u7A7A\u7C7B\u578B\u65F6, \u9700\u8981\u6DFB\u52A0 <code>!</code>, \u4F8B\u5982\uFF1A<code>Int!</code></li></ul></div><ul><li><code>Int</code>\uFF1A\u6709\u7B26\u53F7 32 \u4F4D\u6574\u6570\u3002</li><li><code>Float</code>\uFF1A\u6709\u7B26\u53F7\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u503C\u3002</li><li><code>String</code>\uFF1AUTF\u20108 \u5B57\u7B26\u5E8F\u5217\u3002</li><li><code>Boolean</code>\uFF1A true \u6216\u8005 false \u3002</li><li><code>ID</code>\uFF1AID \u6807\u91CF\u7C7B\u578B\u8868\u793A\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\u7B26, \u901A\u5E38\u7528\u4EE5\u91CD\u65B0\u83B7\u53D6\u5BF9\u8C61\u6216\u8005\u4F5C\u4E3A\u7F13\u5B58\u4E2D\u7684\u952E\u3002ID \u7C7B\u578B\u4F7F\u7528\u548C String \u4E00\u6837\u7684\u65B9\u5F0F\u5E8F\u5217\u5316\uFF1B\u7136\u800C\u5C06\u5176\u5B9A\u4E49\u4E3A ID \u610F\u5473\u7740\u5E76\u4E0D\u9700\u8981\u4EBA\u7C7B\u53EF\u8BFB\u578B\u3002</li></ul></li><li><p><code>Object types</code></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\u5305\u542B\u4E00\u7EC4\u5B57\u6BB5, \u6BCF\u4E2A\u5B57\u6BB5\u53EF\u4EE5\u662F\u6807\u91CF\u7C7B\u578B\u6216\u53E6\u4E00\u79CD\u5BF9\u8C61\u7C7B\u578B\u3002</p></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">author</span><span class="token punctuation">:</span> <span class="token class-name">Author</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token punctuation">{</span>
  <span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">books</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Book</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>The Query type</code></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u5B9A\u4E49\u5BA2\u6237\u7AEF\u53EF\u4EE5\u9488\u5BF9\u60A8\u7684\u6570\u636E\u56FE\u6267\u884C\u54EA\u4E9B GraphQL \u8BFB\u53D6\u64CD\u4F5C\u3002</li><li>Query \u7C7B\u578B\u7684\u6BCF\u4E2A\u5B57\u6BB5\u5B9A\u4E49\u4E86\u4E0D\u540C\u652F\u6301\u67E5\u8BE2\u7684\u540D\u79F0\u548C\u8FD4\u56DE\u7C7B\u578B\u3002</li></ul></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Query</span> <span class="token punctuation">{</span>
  <span class="token attr-name">getBooks</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Book</span><span class="token punctuation">]</span> <span class="token comment"># =&gt; \u5F53\u524D API \u4E3A /api/books</span>
  <span class="token attr-name">getAuthors</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Author</span><span class="token punctuation">]</span> <span class="token comment"># =&gt; \u5F53\u524D API \u4E3A /api/authors</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6267\u884C\u67E5\u8BE2\u4E00</p></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token object">qurty</span> <span class="token punctuation">{</span>
  <span class="token object">getBooks</span> <span class="token punctuation">{</span>
    <span class="token property">title</span>
  <span class="token punctuation">}</span>

  <span class="token object">getAuthors</span> <span class="token punctuation">{</span>
    <span class="token property">name</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=&gt; \u8FD4\u56DE</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;getBooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token comment">// ......</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token property">&quot;getAuthors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;nmae&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token comment">// ......</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token comment">// ......</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6267\u884C\u67E5\u8BE2\u4E8C</p></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token object">qurty</span> <span class="token punctuation">{</span>
  <span class="token object">getBooks</span> <span class="token punctuation">{</span>
    <span class="token property">title</span>
    <span class="token object">author</span> <span class="token punctuation">{</span>
      <span class="token property">name</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=&gt; \u8FD4\u56DE</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;getBooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ......</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token comment">// ......</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>The Mutation type</code></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u5B9A\u4E49\u652F\u6301\u7684\u5199\u64CD\u4F5C\u3002</li><li>Mutation \u7C7B\u578B\u7684\u6BCF\u4E2A\u5B57\u6BB5\u5B9A\u4E49\u4E86\u4E0D\u540C\u7A81\u53D8\u7684\u7B7E\u540D\u548C\u8FD4\u56DE\u7C7B\u578B\u3002</li></ul></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Mutation</span> <span class="token punctuation">{</span>
  <span class="token attr-name">addBook</span><span class="token punctuation">(</span><span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">,</span> <span class="token attr-name">author</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Book</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6267\u884C\u6DFB\u52A0</p></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">mutation</span> <span class="token punctuation">{</span>
  <span class="token property-query property-mutation">addBook</span><span class="token punctuation">(</span><span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token attr-name">author</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">title</span>
    <span class="token object">author</span> <span class="token punctuation">{</span>
      <span class="token property">name</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=&gt; \u8FD4\u56DE</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;addBook&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ......</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token comment">// ......</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Input type</code></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u5141\u8BB8\u60A8\u5C06\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u7684\u7279\u6B8A\u5BF9\u8C61\u7C7B\u578B\u8FDB\u884C\u67E5\u8BE2\u548C\u7A81\u53D8\u3002</li><li>\u5E2E\u52A9\u4FDD\u6301\u64CD\u4F5C\u7B7E\u540D\u6E05\u6D01\u3002</li></ul></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Mutation</span> <span class="token punctuation">{</span>
  <span class="token attr-name">createPost</span><span class="token punctuation">(</span><span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">,</span> <span class="token attr-name">body</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">,</span> <span class="token attr-name">mediaUrls</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token scalar">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Post</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8F93\u5165\u7C7B\u578B</p></div><div class="language-graphql ext-graphql line-numbers-mode"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Mutation</span> <span class="token punctuation">{</span>
  <span class="token attr-name">createPost</span><span class="token punctuation">(</span><span class="token attr-name">post</span><span class="token punctuation">:</span> <span class="token atom-input class-name">PostAndMediaInput</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Post</span>
<span class="token punctuation">}</span>

<span class="token keyword">input</span> <span class="token atom-input class-name">PostAndMediaInput</span> <span class="token punctuation">{</span>
  <span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">body</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">mediaUrls</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token scalar">String</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,4),l=[p];function i(o,c){return s(),a("div",null,l)}var d=n(t,[["render",i],["__file","learn-graphql.html.vue"]]);export{d as default};
