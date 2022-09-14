import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.a3d402e1.js";const p={},c=t(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u8FD9\u7BC7\u6587\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u4E86 JavaScript \u4E2D DOM 0 \u7EA7\u4E8B\u4EF6\u548C DOM 2 \u7EA7\u4E8B\u4EF6\u7684\u533A\u522B\u4ECB\u7ECD\u3002</p></div><h2 id="dom-0-\u7EA7\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#dom-0-\u7EA7\u4E8B\u4EF6" aria-hidden="true">#</a> DOM 0 \u7EA7\u4E8B\u4EF6</h2><h3 id="\u5199\u5728\u6807\u7B7E\u91CC" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6807\u7B7E\u91CC" aria-hidden="true">#</a> \u5199\u5728\u6807\u7B7E\u91CC</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>this is button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u6240\u793A, \u628A <code>onclick</code> \u5199\u5728\u6807\u7B7E\u5185, \u90FD\u662F DOM 0 \u7EA7\u4E8B\u4EF6, \u65B9\u6CD5 fn \u548C fn1 \u4F9D\u6B21\u6267\u884C</p><h3 id="\u7ED1\u5B9A\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u4E8B\u4EF6" aria-hidden="true">#</a> \u7ED1\u5B9A\u4E8B\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ele<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u505A\u7B2C\u4E00\u4EF6\u4E8B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E5F\u662F DOM 0 \u7EA7\u4E8B\u4EF6\u65B9\u6CD5, \u6211\u4EEC\u9700\u8981\u7528 <code>XXX.onYYY=ZZZ</code> \u8FD9\u79CD\u5F62\u5F0F\u6765\u7ED1\u5B9A\u4E8B\u4EF6, \u5F53\u70B9\u51FB\u5143\u7D20\u65F6, \u4F1A\u8F93\u51FA <code>&quot;\u505A\u7B2C\u4E00\u4EF6\u4E8B&quot;</code> , \u6069, \u5F88\u7406\u60F3\u3002</p><p>\u63A5\u4E0B\u6765, \u5F53\u6211\u4EEC\u5E0C\u671B\u5728\u70B9\u51FB\u8BE5\u5143\u7D20\u7684\u65F6\u5019\u518D\u505A\u53E6\u4E00\u4EF6\u4E8B\u600E\u4E48\u529E\u5462\uFF1F\u4E0B\u9762\u8FD9\u6837:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ele<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u505A\u7B2C\u4E8C\u4EF6\u4E8B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u80AF\u5B9A\u4E0D\u884C, \u56E0\u4E3A\u6211\u4EEC\u662F\u5E0C\u671B\u70B9\u51FB\u65F6\u65E2\u8F93\u51FA <code>\u201C\u505A\u4E00\u4EF6\u4E8B\u201D</code> , \u53C8\u8981\u8F93\u51FA <code>\u201C\u505A\u7B2C\u4E8C\u4EF6\u4E8B\u201D</code> \u3002\u800C\u8FD9\u6837\u7684\u8BDD\u540E\u9762\u7684\u65B9\u6CD5\u5C06\u524D\u9762\u7684\u8986\u76D6\u6389\u4E86, \u56E0\u4E3A <code>XXX.onYYY=ZZZ</code> \u53EA\u80FD\u7ED9\u5143\u7D20\u7684\u67D0\u4E2A\u4E8B\u4EF6\u7C7B\u578B(\u5982\u4F8B\u5B50\u4E2D\u7684 <code>click \u4E8B\u4EF6</code> )\u7ED1\u5B9A\u4E00\u4E2A\u65B9\u6CD5 <code>ZZZ</code> \uFF1B\u8FD9\u4E2A\u95EE\u9898\u96BE\u4E0D\u5230\u6211\u4EEC, \u65E2\u7136\u8FD9\u6837, \u90A3\u6211\u4EEC\u5C31\u628A\u8981\u505A\u7684\u4E8B\u60C5\u5168\u90FD\u653E\u5728 <code>ZZZ</code> \u91CC\u4E0D\u5C31\u884C\u4E86\u4E48\uFF1B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u505A\u7B2C\u4E00\u4EF6\u4E8B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u505A\u7B2C\u4E8C\u4EF6\u4E8B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ele<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dom-2-\u7EA7\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#dom-2-\u7EA7\u4E8B\u4EF6" aria-hidden="true">#</a> dom 2 \u7EA7\u4E8B\u4EF6</h2><h3 id="jquery-\u7ED1\u5B9A\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#jquery-\u7ED1\u5B9A\u4E8B\u4EF6" aria-hidden="true">#</a> jQuery \u7ED1\u5B9A\u4E8B\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#hash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;jQuery \u7684 DOM 2 \u7EA7\u70B9\u51FB\u7B2C\u4E00\u6B21&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#hash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;jQuery \u7684 DOM 2 \u7EA7\u70B9\u51FB\u7B2C\u4E8C\u6B21&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u8FC7 jQuery \u65B9\u6CD5\u6765\u7ED1\u5B9A\u4E8B\u4EF6, \u4E0D\u4F1A\u8986\u76D6\u4E4B\u524D\u65B9\u6CD5\u4F53\u91CC\u5199\u7684\u4E8B\u4EF6\u3002</p></div><h3 id="javascript-\u7ED1\u5B9A\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#javascript-\u7ED1\u5B9A\u4E8B\u4EF6" aria-hidden="true">#</a> JavaScript \u7ED1\u5B9A\u4E8B\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u539F\u751F DOM 2 \u7EA7\u7B2C\u4E00\u6B21 click&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u539F\u751F DOM 2 \u7EA7\u7B2C\u4E8C\u6B21click&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u8FC7\u539F\u751F\u7684 JavaScript \u65B9\u6CD5\u6765\u7ED1\u5B9A\u4E8B\u4EF6, \u4F1A\u8986\u76D6\u4E4B\u524D\u65B9\u6CD5\u4F53\u91CC\u5199\u7684\u4E8B\u4EF6\u3002</p></div><h2 id="dom-0-\u7EA7\u548C-dom-2-\u7EA7\u5171\u5B58" tabindex="-1"><a class="header-anchor" href="#dom-0-\u7EA7\u548C-dom-2-\u7EA7\u5171\u5B58" aria-hidden="true">#</a> DOM 0 \u7EA7\u548C DOM 2 \u7EA7\u5171\u5B58</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hash<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8FD4\u56DE\u4E0A\u9762\u8FDB\u884C\u5F00\u901A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;ade&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;ade111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> btn <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#hash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#hash&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;jQuery \u7684 DOM 2 \u7EA7\u70B9\u51FB\u7B2C\u4E00\u6B21&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u539F\u751F DOM 2 \u7EA7\u7B2C\u4E00\u6B21 click&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u6709\u4E00\u4E2A\u4E24\u4E2A DOM 0 \u7EA7\u548C\u4E24\u4E2A DOM 2 \u7EA7\u7ED1\u5B9A\u4E8B\u4EF6, js \u91CC\u9762\u5199\u7684 DOM 0 \u7EA7\u4F1A\u8986\u76D6\u884C\u5185\u7684 fn \u548C fn1 \u65B9\u6CD5, \u4F46\u662F js \u91CC\u9762\u7684 DOM 0 \u53EF\u4EE5\u548C dom2 \u5171\u5B58\u3002</p>`,22),o=[c];function e(u,i){return s(),a("div",null,o)}var d=n(p,[["render",e],["__file","dom-event-in-javascript.html.vue"]]);export{d as default};
