import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.f29ec3fb.js";const t={},p=e(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u4ECB\u7ECD HTML \u548C CSS \u7684\u683C\u5F0F\u548C\u4EE3\u7801\u89C4\u8303, \u65E8\u5728\u63D0\u9AD8\u4EE3\u7801\u8D28\u91CF\u548C\u534F\u4F5C\u6548\u7387\u3002</p></div><h2 id="\u901A\u7528\u6837\u5F0F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u6837\u5F0F\u89C4\u8303" aria-hidden="true">#</a> \u901A\u7528\u6837\u5F0F\u89C4\u8303</h2><h3 id="\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE" aria-hidden="true">#</a> \u534F\u8BAE</h3><p>\u7701\u7565\u56FE\u7247\u3001\u6837\u5F0F\u3001\u811A\u672C\u4EE5\u53CA\u5176\u4ED6\u5A92\u4F53\u6587\u4EF6 URL \u7684\u534F\u8BAE\u90E8\u5206\uFF08 <code>http:</code> , <code>https:</code> \uFF09, \u9664\u975E\u6587\u4EF6\u5728\u4E24\u79CD\u534F\u8BAE\u4E0B\u90FD\u4E0D\u53EF\u7528\u3002\u8FD9\u79CD\u65B9\u6848\u79F0\u4E3A <code>protocol-relative URL</code> , \u597D\u5904\u662F\u65E0\u8BBA\u4F60\u662F\u4F7F\u7528 <code>HTTPS</code> \u8FD8\u662F <code>HTTP</code> \u8BBF\u95EE\u9875\u9762, \u6D4F\u89C8\u5668\u90FD\u4F1A\u4EE5\u76F8\u540C\u7684\u534F\u8BAE\u8BF7\u6C42\u9875\u9762\u4E2D\u7684\u8D44\u6E90, \u540C\u65F6\u53EF\u4EE5\u8282\u7701\u4E00\u90E8\u5206\u5B57\u8282\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.google.com/js/gweb/analytics/autotrack.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//www.google.com/js/gweb/analytics/autotrack.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.google.com/images/exampl&quot;</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;//www.google.com/images/example&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u901A\u7528\u683C\u5F0F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u683C\u5F0F\u89C4\u8303" aria-hidden="true">#</a> \u901A\u7528\u683C\u5F0F\u89C4\u8303</h2><h3 id="\u7F29\u8FDB" tabindex="-1"><a class="header-anchor" href="#\u7F29\u8FDB" aria-hidden="true">#</a> \u7F29\u8FDB</h3><p>\u4E00\u6B21\u7F29\u8FDB 2 \u4E2A\u7A7A\u683C, \u4E0D\u8981\u4F7F\u7528 tab \u6216\u8005\u6DF7\u5408 tab \u548C\u7A7A\u683C\u7684\u7F29\u8FDB\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Fantastic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Great<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#\u5927\u5C0F\u5199" aria-hidden="true">#</a> \u5927\u5C0F\u5199</h3><p>\u4EE5\u4E0B\u90FD\u5E94\u8BE5\u7528\u5C0F\u5199: HTML \u5143\u7D20\u540D\u79F0, \u5C5E\u6027, \u5C5E\u6027\u503C\uFF08\u9664\u975E text/CDATA\uFF09, CSS \u9009\u62E9\u5668, \u5C5E\u6027, \u5C5E\u6027\u503C\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>google.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Google<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED3\u5C3E\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5C3E\u7A7A\u683C" aria-hidden="true">#</a> \u7ED3\u5C3E\u7A7A\u683C</h3><p>\u7ED3\u5C3E\u7A7A\u683C\u4E0D\u4EC5\u591A\u4F59, \u800C\u4E14\u5728\u6BD4\u8F83\u4EE3\u7801\u65F6\u4F1A\u66F4\u9EBB\u70E6\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>What?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Yes please.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u901A\u7528\u5143\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u5143\u89C4\u8303" aria-hidden="true">#</a> \u901A\u7528\u5143\u89C4\u8303</h2><h3 id="\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7801" aria-hidden="true">#</a> \u7F16\u7801</h3><p>\u5728 HTML \u4E2D\u901A\u8FC7 <code>&lt;meta charset=&quot;utf-8&quot;&gt;</code> \u6307\u5B9A\u7F16\u7801\u65B9\u5F0F, CSS \u4E2D\u4E0D\u9700\u8981\u6307\u5B9A, \u56E0\u4E3A\u9ED8\u8BA4\u662F UTF-8\u3002</p><h3 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h3><p>\u4F7F\u7528\u6CE8\u91CA\u6765\u89E3\u91CA\u4EE3\u7801: \u5305\u542B\u7684\u6A21\u5757, \u529F\u80FD\u4EE5\u53CA\u4F18\u70B9\u3002</p><h3 id="\u4EFB\u52A1\u9879" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u9879" aria-hidden="true">#</a> \u4EFB\u52A1\u9879</h3><p>\u7528 TODO \u6765\u6807\u8BB0\u5F85\u529E\u4E8B\u9879, \u800C\u4E0D\u662F\u7528\u4E00\u4E9B\u5176\u4ED6\u7684\u6807\u8BB0, \u50CF @@\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- TODO: remove optional tags --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Apples<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Oranges<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-\u98CE\u683C\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#html-\u98CE\u683C\u89C4\u8303" aria-hidden="true">#</a> HTML \u98CE\u683C\u89C4\u8303</h2><h3 id="\u6587\u6863\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u7C7B\u578B" aria-hidden="true">#</a> \u6587\u6863\u7C7B\u578B</h3><p>HTML \u6587\u6863\u5E94\u4F7F\u7528 HTML5 \u7684\u6587\u6863\u7C7B\u578B: <code>&lt;!DOCTYPE html&gt;</code> \u3002</p><p>\u5B64\u7ACB\u6807\u7B7E\u65E0\u9700\u5C01\u95ED\u81EA\u8EAB, \u5982: <code>&lt;br&gt;</code> \u4E0D\u8981\u5199\u6210 <code>&lt;br /&gt;</code> \u3002</p><h3 id="html-\u6B63\u786E\u6027" tabindex="-1"><a class="header-anchor" href="#html-\u6B63\u786E\u6027" aria-hidden="true">#</a> HTML \u6B63\u786E\u6027</h3><p>\u5C3D\u53EF\u80FD\u4F7F\u7528\u6B63\u786E\u7684 HTML\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
  This is only a test.

  <span class="token comment">&lt;!-- Good --&gt;</span>
  <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>This is only a test.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BED\u4E49\u5316" tabindex="-1"><a class="header-anchor" href="#\u8BED\u4E49\u5316" aria-hidden="true">#</a> \u8BED\u4E49\u5316</h3><p>\u6839\u636E\u4F7F\u7528\u573A\u666F\u9009\u62E9\u6B63\u786E\u7684 HTML \u5143\u7D20\uFF08\u6709\u65F6\u88AB\u9519\u8BEF\u7684\u79F0\u4E3A&quot;\u6807\u7B7E&quot;\uFF09\u3002\u4F8B\u5982, \u4F7F\u7528 h1 \u5143\u7D20\u521B\u5EFA\u6807\u9898, p \u5143\u7D20\u521B\u5EFA\u6BB5\u843D, a \u5143\u7D20\u521B\u5EFA\u94FE\u63A5\u7B49\u7B49\u3002\u6B63\u786E\u7684\u4F7F\u7528 HTML \u5143\u7D20\u5BF9\u4E8E\u53EF\u8BBF\u95EE\u6027\u3001\u53EF\u91CD\u7528\u6027\u4EE5\u53CA\u7F16\u7801\u6548\u7387\u90FD\u5F88\u91CD\u8981\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">goToRecommendations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>All recommendations<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommendations/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>All recommendations<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u591A\u5A92\u4F53\u5143\u7D20\u964D\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u591A\u5A92\u4F53\u5143\u7D20\u964D\u7EA7" aria-hidden="true">#</a> \u591A\u5A92\u4F53\u5143\u7D20\u964D\u7EA7</h3><p>\u5BF9\u4E8E\u50CF\u56FE\u7247\u3001\u89C6\u9891\u3001canvas \u52A8\u753B\u7B49\u591A\u5A92\u4F53\u5143\u7D20, \u786E\u4FDD\u63D0\u4F9B\u5176\u4ED6\u53EF\u8BBF\u95EE\u7684\u5185\u5BB9\u3002\u56FE\u7247\u53EF\u4EE5\u4F7F\u7528\u66FF\u4EE3\u6587\u672C\uFF08alt\uFF09, \u89C6\u9891\u548C\u97F3\u9891\u53EF\u4EE5\u4F7F\u7528\u6587\u5B57\u7248\u672C\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spreadsheet.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spreadsheet.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Spreadsheet screenshot.<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u6CE8\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#\u5173\u6CE8\u5206\u79BB" aria-hidden="true">#</a> \u5173\u6CE8\u5206\u79BB</h3><p>\u6807\u8BB0\u3001\u6837\u5F0F\u548C\u811A\u672C\u5206\u79BB, \u786E\u4FDD\u76F8\u4E92\u8026\u5408\u6700\u5C0F\u5316\u3002</p><h3 id="\u5B9E\u4F53\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53\u5F15\u7528" aria-hidden="true">#</a> \u5B9E\u4F53\u5F15\u7528</h3><p>\u5982\u679C\u56E2\u961F\u4E2D\u6587\u4EF6\u548C\u7F16\u8F91\u5668\u4F7F\u7528\u540C\u6837\u7684\u7F16\u7801\u65B9\u5F0F, \u5C31\u6CA1\u5FC5\u8981\u4F7F\u7528\u5B9E\u4F53\u5F15\u7528, \u9664\u4E86\u4E00\u4E9B\u5728 HTML \u4E2D\u6709\u7279\u6B8A\u542B\u4E49\u7684\u5B57\u7B26\uFF08\u5982 <code>&lt;</code> \u548C <code>&amp;</code> \uFF09\u4EE5\u53CA\u4E0D\u53EF\u89C1\u7684\u5B57\u7B26\uFF08\u5982\u7A7A\u683C\uFF09\u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
The currency symbol for the Euro is \u201C<span class="token entity named-entity" title="&amp;eur;">&amp;eur;</span>\u201D.

<span class="token comment">&lt;!-- Good --&gt;</span>
The currency symbol for the Euro is \u201C\u20AC\u201D.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#type-\u5C5E\u6027" aria-hidden="true">#</a> type \u5C5E\u6027</h3><p>\u5728\u5F15\u7528\u6837\u5F0F\u8868\u548C\u811A\u672C\u65F6, \u4E0D\u8981\u6307\u5B9A type \u5C5E\u6027, \u9664\u975E\u4E0D\u662F CSS \u6216 JavaScript\u3002</p><p>\u56E0\u4E3A HTML5 \u4E2D\u5DF2\u7ECF\u9ED8\u8BA4\u6307\u5B9A\u6837\u5F0F\u53D8\u7684 type \u662F <code>text/css</code> , \u811A\u672C\u7684 type \u662F <code>text/javascript</code> \u3002</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.google.com/css/maia.css<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//www.google.com/css/maia.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.google.com/js/gweb/analytics/autotrack.js<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//www.google.com/js/gweb/analytics/autotrack.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-\u683C\u5F0F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#html-\u683C\u5F0F\u89C4\u8303" aria-hidden="true">#</a> HTML \u683C\u5F0F\u89C4\u8303</h2><h3 id="html-\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#html-\u5F15\u53F7" aria-hidden="true">#</a> HTML \u5F15\u53F7</h3><p>\u5C5E\u6027\u503C\u7528\u53CC\u5F15\u53F7\u3002 <code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maia-button maia-button-secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Sign in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maia-button maia-button-secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Sign in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-\u98CE\u683C\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#css-\u98CE\u683C\u89C4\u8303" aria-hidden="true">#</a> CSS \u98CE\u683C\u89C4\u8303</h2><h3 id="id-\u548C-class-\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#id-\u548C-class-\u547D\u540D" aria-hidden="true">#</a> ID \u548C Class \u547D\u540D</h3><p>\u4F7F\u7528\u6709\u542B\u4E49\u7684 id \u548C class \u540D\u79F0\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low: \u6BEB\u65E0\u610F\u4E49 */</span>
<span class="token selector">#yee-1901</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Low: \u8868\u8FF0\u76F4\u89C9 */</span>
<span class="token selector">.button-green</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.clear</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good: \u5177\u4F53\u7684 */</span>
<span class="token selector">#gallery</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">#login</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.video</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good: \u901A\u7528\u7684 */</span>
<span class="token selector">.aux</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.alt</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-\u548C-class-\u547D\u540D\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#id-\u548C-class-\u547D\u540D\u98CE\u683C" aria-hidden="true">#</a> ID \u548C Class \u547D\u540D\u98CE\u683C</h3><p>id \u548C class \u5E94\u8BE5\u5C3D\u91CF\u7B80\u77ED, \u540C\u65F6\u8981\u5BB9\u6613\u7406\u89E3\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">#navigation</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.atr</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">#nav</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.author</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a> \u9009\u62E9\u5668</h3><p>\u9664\u975E\u9700\u8981, \u5426\u5219\u4E0D\u8981\u5728 id \u6216 class \u524D\u52A0\u5143\u7D20\u540D\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">ul#example</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">div.error</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">#example</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.error</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7B80\u5199" aria-hidden="true">#</a> \u5C5E\u6027\u7B80\u5199</h3><p>\u5C3D\u91CF\u4F7F\u7528 CSS \u4E2D\u53EF\u4EE5\u7B80\u5199\u7684\u5C5E\u6027 (\u5982 font), \u53EF\u4EE5\u63D0\u9AD8\u7F16\u7801\u6548\u7387\u4EE5\u53CA\u4EE3\u7801\u53EF\u8BFB\u6027\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">border-top-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> palatino<span class="token punctuation">,</span> georgia<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100%/1.6 palatino<span class="token punctuation">,</span> georgia<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 1em 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0-\u548C\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#_0-\u548C\u5355\u4F4D" aria-hidden="true">#</a> 0 \u548C\u5355\u4F4D</h3><p>\u503C\u4E3A 0 \u65F6\u4E0D\u7528\u6DFB\u52A0\u5355\u4F4D\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F00\u5934\u7684-0" tabindex="-1"><a class="header-anchor" href="#\u5F00\u5934\u7684-0" aria-hidden="true">#</a> \u5F00\u5934\u7684 0</h3><p>\u503C\u5728 -1 \u548C 1 \u4E4B\u95F4\u65F6, \u4E0D\u9700\u8981\u52A0 0\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-\u8FDB\u5236\u8868\u793A\u6CD5" tabindex="-1"><a class="header-anchor" href="#_16-\u8FDB\u5236\u8868\u793A\u6CD5" aria-hidden="true">#</a> 16 \u8FDB\u5236\u8868\u793A\u6CD5</h3><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eebbcc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ebc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F00" aria-hidden="true">#</a> \u524D\u7F00</h3><p>\u4F7F\u7528\u5E26\u524D\u7F00\u7684\u547D\u540D\u7A7A\u95F4\u53EF\u4EE5\u9632\u6B62\u547D\u540D\u51B2\u7A81, \u540C\u65F6\u63D0\u9AD8\u4EE3\u7801\u53EF\u7EF4\u62A4\u6027\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.adw-help</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* AdWords */</span>
<span class="token selector">#maia-note</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Maia */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u62E9\u5668\u4E2D\u4F7F\u7528\u8FDE\u5B57\u7B26\u53EF\u4EE5\u63D0\u9AD8\u53EF\u8BFB\u6027\u3002" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u4E2D\u4F7F\u7528\u8FDE\u5B57\u7B26\u53EF\u4EE5\u63D0\u9AD8\u53EF\u8BFB\u6027\u3002" aria-hidden="true">#</a> \u9009\u62E9\u5668\u4E2D\u4F7F\u7528\u8FDE\u5B57\u7B26\u53EF\u4EE5\u63D0\u9AD8\u53EF\u8BFB\u6027\u3002</h3><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low: does not separate the words \u201Cdemo\u201D and \u201Cimage\u201D */</span>
<span class="token selector">.demoimage</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Low: uses underscore instead of hyphen */</span>
<span class="token selector">.error_status</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">#video-id</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.ads-sample</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-\u683C\u5F0F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#css-\u683C\u5F0F\u89C4\u8303" aria-hidden="true">#</a> CSS \u683C\u5F0F\u89C4\u8303</h2><h3 id="css-\u4E66\u5199\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#css-\u4E66\u5199\u987A\u5E8F" aria-hidden="true">#</a> CSS \u4E66\u5199\u987A\u5E8F</h3><ul><li>\u4F4D\u7F6E\u5C5E\u6027 { <code>position</code> , <code>top</code> , <code>right</code> , <code>z-index</code> , <code>display</code> , <code>float</code> \u7B49}</li><li>\u5927\u5C0F { <code>width</code> , <code>height</code> , <code>padding</code> , <code>margin</code> \u7B49}</li><li>\u6587\u5B57\u7CFB\u5217 { <code>font</code> , <code>line-height</code> , <code>letter-spacing</code> , <code>color</code> , <code>text-align</code> \u7B49}</li><li>\u80CC\u666F { <code>background</code> , <code>border</code> \u7B49}</li><li>\u5176\u4ED6 { <code>animation</code> , <code>transition</code> \u7B49}</li></ul><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #9e0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #9e0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5757\u7EA7\u5185\u5BB9\u7F29\u8FDB" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u5185\u5BB9\u7F29\u8FDB" aria-hidden="true">#</a> \u5757\u7EA7\u5185\u5BB9\u7F29\u8FDB</h3><p>\u4E3A\u4E86\u53CD\u6620\u5C42\u7EA7\u5173\u7CFB\u548C\u63D0\u9AD8\u53EF\u8BFB\u6027, \u5757\u7EA7\u5185\u5BB9\u90FD\u5E94\u7F29\u8FDB\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen<span class="token punctuation">,</span> projection</span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u58F0\u660E\u7ED3\u675F" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u7ED3\u675F" aria-hidden="true">#</a> \u58F0\u660E\u7ED3\u675F</h3><p>\u6BCF\u884C CSS \u90FD\u5E94\u4EE5\u5206\u53F7\u7ED3\u5C3E\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C5E\u6027\u540D\u7ED3\u5C3E" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u540D\u7ED3\u5C3E" aria-hidden="true">#</a> \u5C5E\u6027\u540D\u7ED3\u5C3E</h3><p>\u5C5E\u6027\u540D\u548C\u503C\u4E4B\u95F4\u90FD\u5E94\u6709\u4E00\u4E2A\u7A7A\u683C\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u58F0\u660E\u6837\u5F0F\u5757\u7684\u5206\u9694" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u6837\u5F0F\u5757\u7684\u5206\u9694" aria-hidden="true">#</a> \u58F0\u660E\u6837\u5F0F\u5757\u7684\u5206\u9694</h3><p>\u5728\u9009\u62E9\u5668\u548C {} \u4E4B\u95F4\u7528\u7A7A\u683C\u9694\u5F00\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low: missing space */</span>
<span class="token selector">#video</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Low: unnecessary line break */</span>
<span class="token selector">#video</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">#video</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u62E9\u5668\u5206\u9694" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u5206\u9694" aria-hidden="true">#</a> \u9009\u62E9\u5668\u5206\u9694</h3><p>\u6BCF\u4E2A\u9009\u62E9\u5668\u90FD\u53E6\u8D77\u4E00\u884C\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">a:focus,
a:active</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">h1,
h2,
h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89C4\u5219\u5206\u9694" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u5206\u9694" aria-hidden="true">#</a> \u89C4\u5219\u5206\u9694</h3><p>\u89C4\u5219\u4E4B\u95F4\u90FD\u7528\u7A7A\u884C\u9694\u5F00\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#css-\u5F15\u53F7" aria-hidden="true">#</a> CSS \u5F15\u53F7</h3><p>\u5C5E\u6027\u9009\u62E9\u5668\u548C\u5C5E\u6027\u503C\u7528\u5355\u5F15\u53F7, URI \u7684\u503C\u4E0D\u9700\u8981\u5F15\u53F7\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://www.google.com/css/maia.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;open sans&quot;</span><span class="token punctuation">,</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;//www.google.com/css/maia.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;open sans&quot;</span><span class="token punctuation">,</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-\u5143\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#css-\u5143\u89C4\u5219" aria-hidden="true">#</a> CSS \u5143\u89C4\u5219</h2><h3 id="\u5206\u6BB5\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u5206\u6BB5\u6CE8\u91CA" aria-hidden="true">#</a> \u5206\u6BB5\u6CE8\u91CA</h3><p>\u7528\u6CE8\u91CA\u628A CSS \u5206\u6210\u5404\u4E2A\u90E8\u5206\u3002 <code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Header */</span>

<span class="token selector">#adw-header</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Footer */</span>

<span class="token selector">#adw-footer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Gallery */</span>

<span class="token selector">.adw-gallery</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120),c=[p];function l(i,o){return s(),a("div",null,c)}var r=n(t,[["render",l],["__file","html-and-css-code-criterion.html.vue"]]);export{r as default};
