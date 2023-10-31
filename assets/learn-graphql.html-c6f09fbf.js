import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,d as t,a as n,e as p}from"./app-16d9b7db.js";const i={},l=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"记录 graphql 的学习笔记.")],-1),o=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h2 id="schema-包含的类型" tabindex="-1"><a class="header-anchor" href="#schema-包含的类型" aria-hidden="true">#</a> Schema 包含的类型</h2><ul><li><p><code>Scalar types</code></p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>下面的数据类型类似于我们平常使用的编程语言中的原始类型。</li><li>需要定义非空类型时, 需要添加 <code>!</code>, 例如：<code>Int!</code></li></ul></div><ul><li><code>Int</code>：有符号 32 位整数。</li><li><code>Float</code>：有符号双精度浮点值。</li><li><code>String</code>：UTF‐8 字符序列。</li><li><code>Boolean</code>： true 或者 false 。</li><li><code>ID</code>：ID 标量类型表示一个唯一标识符, 通常用以重新获取对象或者作为缓存中的键。ID 类型使用和 String 一样的方式序列化；然而将其定义为 ID 意味着并不需要人类可读型。</li></ul></li><li><p><code>Object types</code></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一个对象类型包含一组字段, 每个字段可以是标量类型或另一种对象类型。</p></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
  <span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">author</span><span class="token punctuation">:</span> <span class="token class-name">Author</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token punctuation">{</span>
  <span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">books</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Book</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>The Query type</code></p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>定义客户端可以针对您的数据图执行哪些 GraphQL 读取操作。</li><li>Query 类型的每个字段定义了不同支持查询的名称和返回类型。</li></ul></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Query</span> <span class="token punctuation">{</span>
  <span class="token attr-name">getBooks</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Book</span><span class="token punctuation">]</span> <span class="token comment"># =&gt; 当前 API 为 /api/books</span>
  <span class="token attr-name">getAuthors</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Author</span><span class="token punctuation">]</span> <span class="token comment"># =&gt; 当前 API 为 /api/authors</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>执行查询一</p></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token object">qurty</span> <span class="token punctuation">{</span>
  <span class="token object">getBooks</span> <span class="token punctuation">{</span>
    <span class="token property">title</span>
  <span class="token punctuation">}</span>

  <span class="token object">getAuthors</span> <span class="token punctuation">{</span>
    <span class="token property">name</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=&gt; 返回</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>执行查询二</p></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token object">qurty</span> <span class="token punctuation">{</span>
  <span class="token object">getBooks</span> <span class="token punctuation">{</span>
    <span class="token property">title</span>
    <span class="token object">author</span> <span class="token punctuation">{</span>
      <span class="token property">name</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=&gt; 返回</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>The Mutation type</code></p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>定义支持的写操作。</li><li>Mutation 类型的每个字段定义了不同突变的签名和返回类型。</li></ul></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Mutation</span> <span class="token punctuation">{</span>
  <span class="token attr-name">addBook</span><span class="token punctuation">(</span><span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">,</span> <span class="token attr-name">author</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Book</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>执行添加</p></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token keyword">mutation</span> <span class="token punctuation">{</span>
  <span class="token property-query property-mutation">addBook</span><span class="token punctuation">(</span><span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token attr-name">author</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">title</span>
    <span class="token object">author</span> <span class="token punctuation">{</span>
      <span class="token property">name</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=&gt; 返回</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Input type</code></p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>允许您将对象作为参数传递给的特殊对象类型进行查询和突变。</li><li>帮助保持操作签名清洁。</li></ul></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Mutation</span> <span class="token punctuation">{</span>
  <span class="token attr-name">createPost</span><span class="token punctuation">(</span><span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">,</span> <span class="token attr-name">body</span><span class="token punctuation">:</span> <span class="token scalar">String</span><span class="token punctuation">,</span> <span class="token attr-name">mediaUrls</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token scalar">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Post</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>输入类型</p></div><div class="language-graphql line-numbers-mode" data-ext="graphql"><pre class="language-graphql"><code><span class="token keyword">type</span> <span class="token class-name">Mutation</span> <span class="token punctuation">{</span>
  <span class="token attr-name">createPost</span><span class="token punctuation">(</span><span class="token attr-name">post</span><span class="token punctuation">:</span> <span class="token atom-input class-name">PostAndMediaInput</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Post</span>
<span class="token punctuation">}</span>

<span class="token keyword">input</span> <span class="token atom-input class-name">PostAndMediaInput</span> <span class="token punctuation">{</span>
  <span class="token attr-name">title</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">body</span><span class="token punctuation">:</span> <span class="token scalar">String</span>
  <span class="token attr-name">mediaUrls</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token scalar">String</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3);function c(u,r){return a(),e("div",null,[l,t(" more "),o])}const k=s(i,[["render",c],["__file","learn-graphql.html.vue"]]);export{k as default};
