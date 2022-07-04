import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.f29ec3fb.js";const t={},o=e(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u6574\u7406\u4E86\u4E0B SQL \u8BED\u6CD5\u57FA\u7840, \u9002\u7528\u4E8E SQL server \u548C MySQL, \u672C\u535A\u6587\u7686\u4E3A\u5B9E\u4F8B SQL \u8BED\u53E5\u4EC5\u4F9B\u53C2\u8003\u3002</p></div><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><h3 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h3><ul><li>\u6570\u636E\u5E93\u4E2D\u7684\u884C\u79F0\u4F5C <code>\u5143\u7EC4</code> \u3001 <code>\u8BB0\u5F55</code></li><li>\u6570\u636E\u5E93\u4E2D\u7684\u5217\u79F0\u4F5C <code>\u5C5E\u6027</code> \u3001 <code>\u5B57\u6BB5</code></li><li>\u5E38\u89C1\u6570\u636E\u5E93\u6A21\u578B <code>\u5C42\u6B21\u6A21\u578B</code> <code>\u7F51\u72B6\u6A21\u578B</code> <code>\u5173\u7CFB\u6A21\u578B</code> <code>\u5BF9\u8C61\u5173\u7CFB\u6A21\u578B</code> <code>\u5BF9\u8C61\u6A21\u578B</code></li></ul><h3 id="\u8868\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u8868\u7EA6\u675F" aria-hidden="true">#</a> \u8868\u7EA6\u675F</h3><ul><li>\u4E3B\u952E\u7EA6\u675F\uFF08Primay Key Coustraint\uFF09 \u552F\u4E00\u6027, \u975E\u7A7A\u6027</li><li>\u552F\u4E00\u7EA6\u675F \uFF08Unique Counstraint\uFF09\u552F\u4E00\u6027, \u53EF\u4EE5\u7A7A, \u4F46\u53EA\u80FD\u6709\u4E00\u4E2A</li><li>\u68C0\u67E5\u7EA6\u675F (Check Counstraint) \u5BF9\u8BE5\u5217\u6570\u636E\u7684\u8303\u56F4\u3001\u683C\u5F0F\u7684\u9650\u5236\uFF08\u5982: \u5E74\u9F84\u3001\u6027\u522B\u7B49\uFF09</li><li>\u9ED8\u8BA4\u7EA6\u675F (Default Counstraint) \u8BE5\u6570\u636E\u7684\u9ED8\u8BA4\u503C</li><li>\u5916\u952E\u7EA6\u675F (Foreign Key Counstraint) \u9700\u8981\u5EFA\u7ACB\u4E24\u8868\u95F4\u7684\u5173\u7CFB\u5E76\u5F15\u7528\u4E3B\u8868\u7684\u5217</li></ul><h3 id="curd" tabindex="-1"><a class="header-anchor" href="#curd" aria-hidden="true">#</a> CURD</h3><ul><li>\u521B\u5EFA\uFF08Create\uFF09</li><li>\u66F4\u65B0\uFF08Update\uFF09</li><li>\u8BFB\u53D6\uFF08Retrieve\uFF09</li><li>\u5220\u9664\uFF08Delete\uFF09</li></ul><h2 id="\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93" aria-hidden="true">#</a> \u6570\u636E\u5E93</h2><h3 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> dbxx
<span class="token keyword">on</span> <span class="token punctuation">(</span>
  name<span class="token operator">=</span>dd1<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;c:\\dd\\dd1.mdf&quot;</span><span class="token punctuation">,</span>
  maxsize<span class="token operator">=</span>unlimited<span class="token punctuation">,</span>filegrowth<span class="token operator">=</span><span class="token number">10</span><span class="token operator">%</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
filegroup xx <span class="token punctuation">(</span>
  name<span class="token operator">=</span>dd2<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;c:\\dd\\dd2,mdf&quot;</span><span class="token punctuation">,</span>
  maxsize<span class="token operator">=</span>unlimited
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span>
  name<span class="token operator">=</span>dd3<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;d:\\dd\\dd3.ndf&quot;</span><span class="token punctuation">,</span>
  size<span class="token operator">=</span><span class="token number">50</span>MB<span class="token punctuation">,</span>maxsize<span class="token operator">=</span>unlimited<span class="token punctuation">,</span>filegrowth<span class="token operator">=</span><span class="token number">10</span>MB
<span class="token punctuation">)</span>
log <span class="token keyword">on</span> <span class="token punctuation">(</span>
  name<span class="token operator">=</span>LLg<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;d:\\dd\\ll.;df&quot;</span><span class="token punctuation">,</span>
  size<span class="token operator">=</span><span class="token number">10</span>MB<span class="token punctuation">,</span>maxsize<span class="token operator">=</span><span class="token number">50</span>MB<span class="token punctuation">,</span>filegrowth<span class="token operator">=</span><span class="token number">20</span>MB
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">use</span> master
<span class="token keyword">drop</span> <span class="token keyword">database</span> dbxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u8868" aria-hidden="true">#</a> \u521B\u8868</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> Student
<span class="token punctuation">(</span>
  stuNo <span class="token keyword">int</span><span class="token punctuation">,</span>
  stuName <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  sex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  dep <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  ID <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  weight <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u7EA6\u675F" aria-hidden="true">#</a> \u7EA6\u675F</h2><h3 id="\u4E3B\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u952E\u7EA6\u675F" aria-hidden="true">#</a> \u4E3B\u952E\u7EA6\u675F</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u6DFB\u52A0\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> PK_S1 <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">(</span>stuNo<span class="token punctuation">)</span>

<span class="token comment">-- \u5220\u9664\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> PK_S1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u552F\u4E00\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u552F\u4E00\u7EA6\u675F" aria-hidden="true">#</a> \u552F\u4E00\u7EA6\u675F</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u6DFB\u52A0\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> UN_S2 <span class="token keyword">union</span><span class="token punctuation">(</span>ID<span class="token punctuation">)</span>

<span class="token comment">-- \u5220\u9664\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> UN_S2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9ED8\u8BA4\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7EA6\u675F" aria-hidden="true">#</a> \u9ED8\u8BA4\u7EA6\u675F</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u6DFB\u52A0\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> DF_S3 <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">)</span> <span class="token keyword">for</span> sex

<span class="token comment">-- \u5220\u9664\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> DF_S3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u68C0\u67E5\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u7EA6\u675F" aria-hidden="true">#</a> \u68C0\u67E5\u7EA6\u675F</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u521B\u5EFA\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> CK_S4 <span class="token keyword">check</span><span class="token punctuation">(</span>sex<span class="token operator">=</span><span class="token string">&#39;\u7537&#39;</span> <span class="token operator">or</span> sex<span class="token operator">=</span><span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">)</span>

<span class="token comment">-- \u5220\u9664\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> CK_S4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5916\u952E\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u5916\u952E\u7EA6\u675F" aria-hidden="true">#</a> \u5916\u952E\u7EA6\u675F</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u521B\u5EFA\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> FK_S5 <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>stuNo<span class="token punctuation">)</span> stuInfo<span class="token punctuation">(</span>stuID<span class="token punctuation">)</span>

<span class="token comment">-- \u5220\u9664\u7EA6\u675F</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> FK_S5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664-1" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664-1" aria-hidden="true">#</a> \u5220\u9664</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u5220\u8868\u4E4B\u524D\u4E00\u5B9A\u8981\u5148\u628A\u5916\u952E\u7EA6\u675F\u5148\u5220\u6389</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> Student

<span class="token comment">-- \u5220\u9664\u8868\u4E2D\u7684\u67D0\u4E00\u5217</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">column</span> dep

<span class="token comment">-- \u5220\u9664\u6307\u5B9A\u6570\u636E</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> Student
<span class="token keyword">where</span> dep<span class="token operator">=</span><span class="token string">&quot;\u4FE1\u606F\u7CFB&quot;</span>

<span class="token comment">-- \u9010\u884C\u5220\u9664</span>
<span class="token keyword">delete</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student

<span class="token comment">-- \u6309\u6761\u4EF6\u5220\u9664</span>
<span class="token keyword">delete</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student
<span class="token keyword">where</span> sex<span class="token operator">=</span><span class="token string">&#39;\u7537&#39;</span>

<span class="token comment">-- \u5FEB\u901F\u5220\u9664\u8868\u6570\u636E</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> Student
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a> \u66F4\u65B0</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u65B0\u589E\u6570\u636E</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student
<span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">123096832</span><span class="token punctuation">,</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u5916\u8BED\u7CFB&#39;</span><span class="token punctuation">,</span><span class="token number">350181123401021298</span><span class="token punctuation">)</span>

<span class="token comment">-- \u66F4\u65B0\u6570\u636E</span>
<span class="token keyword">update</span> <span class="token keyword">table</span> Student
<span class="token keyword">set</span> stuName<span class="token operator">=</span><span class="token string">&#39;\u5F20\u4E09&#39;</span> <span class="token keyword">where</span> stuNo<span class="token operator">=</span><span class="token string">&#39;1013141516&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a> \u67E5\u8BE2</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student

<span class="token keyword">select</span> <span class="token keyword">all</span> sex <span class="token keyword">from</span> Student
<span class="token keyword">select</span> <span class="token keyword">distinct</span> sex <span class="token keyword">from</span>  Student <span class="token comment">-- \u8FC7\u6EE4\u91CD\u590D</span>

<span class="token keyword">select</span> <span class="token keyword">top</span> <span class="token number">3</span> <span class="token keyword">percent</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token comment">-- \u524D 3% \u6761</span>
<span class="token keyword">select</span> <span class="token keyword">top</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token comment">-- \u524D 3 \u6761</span>

<span class="token comment">-- \u6839\u636E\u67D0\u4E00\u5217\u67E5\u8BE2</span>
<span class="token keyword">select</span> <span class="token keyword">top</span> <span class="token number">3</span> <span class="token keyword">with</span> ties weight
<span class="token keyword">from</span> Student
<span class="token keyword">order</span> <span class="token keyword">by</span> weight <span class="token keyword">asc</span>

<span class="token comment">-- \u6392\u5E8F\u3002\u9ED8\u8BA4\u5347\u5E8F</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">order</span> <span class="token keyword">by</span> name
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">order</span> <span class="token keyword">by</span> name <span class="token keyword">desc</span> <span class="token comment">-- \u964D\u5E8F</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">order</span> <span class="token keyword">by</span> name <span class="token keyword">asc</span> <span class="token comment">-- \u5347\u5E8F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u8BA1" aria-hidden="true">#</a> \u7EDF\u8BA1</h2><p>\u5047\u8BBE Student \u8868\u4E2D\u5171\u6709 20 \u884C\u8BB0\u5F55, \u5176\u4E2D\u6709\u6548\u6027\u522B\u884C\u6570\u4E3A 18</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> Student <span class="token comment">-- \u8FD4\u56DE\u503C 20,\u8FD4\u56DE\u884C\u4E3A 1</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span> <span class="token keyword">from</span> Student <span class="token comment">-- \u8FD4\u56DE\u503C 18,\u4E0D\u4F1A\u7EDF\u8BA1 NULL,\u8FD4\u56DE\u884C\u4E3A 1</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> sec<span class="token punctuation">)</span> <span class="token keyword">from</span> Student <span class="token comment">-- \u8FD4\u56DE\u503C 2,\u8BA1\u7B97\u4E0D\u91CD\u590D\u7684,\u8FD4\u56DE\u884C\u4E3A 1</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span><span class="token punctuation">,</span> weight
<span class="token keyword">from</span> Student <span class="token keyword">group</span> <span class="token keyword">by</span> weight
<span class="token keyword">having</span> weight <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),l=[o];function p(c,i){return s(),a("div",null,l)}var k=n(t,[["render",p],["__file","sql-grammar.html.vue"]]);export{k as default};
