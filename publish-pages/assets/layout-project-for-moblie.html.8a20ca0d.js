import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c,a as n,b as p,e as i,d as s}from"./app.f29ec3fb.js";var l="/assets/layout-moblie.gif";const d={},u=i(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u89E3\u51B3\u79FB\u52A8\u7AEF\u7F51\u9875\u7684\u81EA\u9002\u5E94, \u8BA9\u5F00\u53D1\u53D8\u5F97\u66F4\u52A0\u7B80\u6D01\u3002</p></div><h2 id="mate-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#mate-\u6807\u7B7E" aria-hidden="true">#</a> mate \u6807\u7B7E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u9996\u5148\u8981\u8BA9\u9875\u9762\u5927\u5C0F\u94FA\u6EE1\u5C4F\u5E55\u53C8\u4E0D\u80FD\u6EA2\u51FA\u3002\u53EA\u9700\u8981\u5728 html \u7684 head \u6807\u7B7E\u5185\u52A0\u5165 viewport\uFF08\u5982\u4E0B\uFF09, \u53C2\u6570\u5206\u522B\u8868\u793A: \u9875\u9762\u5BBD\u5EA6\uFF1D\u5C4F\u5E55\u5BBD\u5EA6, \u6700\u5927\u548C\u6700\u5C0F\u4F38\u7F29\u6BD4\u90FD\u662F 1, \u4E0D\u5141\u8BB8\u7528\u6237\u62C9\u7F29\u3002</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>width</strong>: viewport \u7684\u5BBD\u5EA6, \u53EF\u4EE5\u6307\u5B9A\u4E3A\u4E00\u4E2A\u50CF\u7D20\u503C, \u5982: 640, \u6216\u8005\u4E3A\u7279\u6B8A\u7684\u503C, \u5982: device-width \uFF08\u8BBE\u5907\u7684\u5BBD\u5EA6\uFF09\u3002</li><li><strong>initial-scale</strong>: \u521D\u59CB\u7F29\u653E\u6BD4\u4F8B, \u5373\u5F53\u6D4F\u89C8\u5668\u7B2C\u4E00\u6B21\u52A0\u8F7D\u9875\u9762\u65F6\u7684\u7F29\u653E\u6BD4\u4F8B\u3002\u503C\u4E3A 1.0 \u5373\u539F\u59CB\u5C3A\u5BF8\u3002</li><li><strong>maximum-scale</strong>: \u5141\u8BB8\u6D4F\u89C8\u8005\u7F29\u653E\u5230\u7684\u6700\u5927\u6BD4\u4F8B, \u4E00\u822C\u8BBE\u4E3A 1.0, \u5373\u539F\u59CB\u5C3A\u5BF8\u3002</li><li><strong>minimum-scale</strong>: \u5141\u8BB8\u6D4F\u89C8\u8005\u7F29\u653E\u5230\u7684\u6700\u5C0F\u6BD4\u4F8B, \u4E00\u822C\u8BBE\u4E3A 1.0, \u5373\u539F\u59CB\u5C3A\u5BF8\u3002</li><li><strong>user-scalable</strong>: \u6D4F\u89C8\u8005\u662F\u5426\u53EF\u4EE5\u624B\u52A8\u7F29\u653E, yes \u6216 no \u3002</li></ul><h2 id="\u4F7F\u7528\u767E\u5206\u6BD4\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u767E\u5206\u6BD4\u81EA\u9002\u5E94" aria-hidden="true">#</a> \u4F7F\u7528\u767E\u5206\u6BD4\u81EA\u9002\u5E94</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u628A\u957F\u5EA6\u5355\u4F4D\u8F6C\u6362\u4E3A\u767E\u5206\u6BD4\u6765\u8868\u793A, \u8FD9\u6837\u5728\u4E0D\u540C\u7684\u5BBD\u5EA6\u4E0B, \u5143\u7D20\u7684\u957F\u5BBD\u4E5F\u4F1A\u968F\u4E4B\u53D8\u5316\u3002</p></div><ul><li>\u4F18\u70B9: \u5BBD\u5EA6\u4E4B\u95F4\u65E0\u7F1D\u8854\u63A5, \u64CD\u4F5C\u8D77\u6765\u4E5F\u76F8\u5BF9\u6BD4\u8F83\u65B9\u4FBF\u3002</li><li>\u7F3A\u70B9: \u5B57\u4F53\u5927\u5C0F\u9700\u8981\u53E6\u5916\u4E00\u5957\u81EA\u9002\u5E94\u65B9\u6CD5\u6765\u8C03\u6574\uFF1B\u5F53\u5C4F\u5E55\u5BBD\u5EA6\u5927\u4E8E <code>700px</code> \u540E, \u7EE7\u7EED\u6309\u7167\u767E\u5206\u6BD4\u5143\u7D20\u4F1A\u504F\u5927, \u8FD9\u4E2A\u65F6\u5019\u8C03\u6574\u8D77\u6765\u4F1A\u6BD4\u8F83\u9EBB\u70E6\u3002</li></ul><h2 id="rem-em-\u81EA\u9002\u5E94" tabindex="-1"><a class="header-anchor" href="#rem-em-\u81EA\u9002\u5E94" aria-hidden="true">#</a> rem, em \u81EA\u9002\u5E94</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7528\u5A92\u4F53\u67E5\u8BE2\u7684\u65B9\u6CD5, \u786E\u5B9A\u5728\u4E0D\u540C\u5C4F\u5E55\u5BBD\u5EA6\u4E0B, \u6539\u53D8 html \u6216 body \u7684 font-size\u3002\u518D\u7528 rem , em \u66FF\u4EE3 px \u4F5C\u4E3A\u5355\u4F4D\u5B9E\u73B0\u81EA\u9002\u5E94\u3002</p></div><ul><li>\u4F18\u70B9: \u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u5C4F\u5E55\u5BBD\u5EA6\u6765\u8BBE\u7F6E, \u53EF\u4EE5\u5B8C\u7F8E\u89E3\u51B3\u4E0A\u9762\u8BF4\u7684\u5C4F\u5E55\u504F\u5927\u65F6\u7684\u6BD4\u4F8B\u95EE\u9898\u3002\u5B57\u4F53\u7684\u5927\u5C0F\u4E5F\u4E0D\u5B58\u5728\u95EE\u9898\u3002</li><li>\u7F3A\u70B9: \u6839\u636E\u5BBD\u5EA6\u533A\u95F4\u6765\u8BBE\u7F6E, \u65E0\u6CD5\u5B9E\u73B0\u65E0\u7F1D\u53D8\u6362\u3002</li></ul><h2 id="\u5F15\u5165-javascript-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165-javascript-\u4EE3\u7801" aria-hidden="true">#</a> \u5F15\u5165 JavaScript \u4EE3\u7801</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u4E9B\u517C\u5BB9\u65B9\u6CD5\u5404\u6709\u4F18\u7F3A\u70B9, \u90FD\u4E0D\u7B97\u5B8C\u7F8E, \u600E\u6837\u624D\u80FD\u628A\u4F18\u70B9\u7ED3\u5408\u5728\u4E00\u8D77, \u540C\u65F6\u907F\u514D\u7F3A\u70B9\u5462? \u5F15\u5165 JavaScript \u65B9\u6CD5\u6E90\u7801, \u65B9\u6CD5\u539F\u7406: \u4F7F\u9875\u9762 html \u7684 font-size \u4F1A\u6839\u636E\u5C4F\u5E55\u7684\u5BBD\u5EA6\u81EA\u52A8\u8C03\u6574, \u800C\u4E14\u5C4F\u5E55\u5BBD\u5EA6\u548C\u6240\u8BBE\u5B57\u4F53\u5927\u5C0F\u7684\u5546\u662F\u4E00\u5B9A\u7684, \u7136\u540E\u6309\u7167\u56FA\u5B9A\u6BD4\u4F8B\u7F29\u5C0F\u540E\u4F5C\u4E3A rem \u7684\u5355\u4F4D\u957F\u5EA6\u5B9E\u73B0\u81EA\u9002\u5E94\u3002</p></div><h3 id="\u65B9\u6CD5\u6E90\u7801\u4E00-\u9700\u5F15\u5165-jquery" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u6E90\u7801\u4E00-\u9700\u5F15\u5165-jquery" aria-hidden="true">#</a> \u65B9\u6CD5\u6E90\u7801\u4E00\uFF08\u9700\u5F15\u5165 jQuery\uFF09</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Zepto</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u6587\u6863\u7684\u6839\u8282\u70B9</span>
  <span class="token keyword">var</span> doc <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7A97\u53E3\u7684\u5BBD\u5EA6</span>
    <span class="token keyword">var</span> winWidth <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 640 \u5BBD\u5EA6\u4EE5\u4E0A\u8FDB\u884C\u9650\u5236</span>
    <span class="token keyword">var</span> size <span class="token operator">=</span> <span class="token punctuation">(</span>winWidth <span class="token operator">/</span> <span class="token number">640</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
    doc<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token punctuation">(</span>size <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token operator">?</span> size <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u9632\u6B62\u5728 html \u672A\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u6267\u884C,\u4FDD\u8BC1\u83B7\u53D6\u6B63\u786E\u7684\u9875\u5BBD</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316</span>
    <span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u6E90\u7801\u4E8C-javascript-\u539F\u751F\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u6E90\u7801\u4E8C-javascript-\u539F\u751F\u4EE3\u7801" aria-hidden="true">#</a> \u65B9\u6CD5\u6E90\u7801\u4E8C\uFF08JavaScript \u539F\u751F\u4EE3\u7801\uFF09</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u6587\u6863\u7684\u6839\u8282\u70B9</span>
  <span class="token keyword">var</span> docEl <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>
  <span class="token comment">// \u5224\u65AD\u79FB\u52A8\u7AEF\u662F\u5426\u53D1\u751F\u65B9\u5411\u6539\u53D8</span>
  <span class="token keyword">var</span> resizeEvt <span class="token operator">=</span>
    <span class="token string">&quot;orientationchange&quot;</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token string">&quot;orientationchange&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;resize&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> <span class="token function-variable function">recalc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u5BF9\u8C61\u7684\u5BBD\u5EA6</span>
    <span class="token keyword">var</span> clientWidth <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clientWidth<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">&gt;=</span> <span class="token number">640</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">/</span> <span class="token number">640</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>doc<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>resizeEvt<span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  doc<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4EE5\u4E0A\u4E24\u4E2A\u65B9\u6CD5\u6E90\u7801\u662F rem \u5E03\u5C40\u7684\u6838\u5FC3\u4EE3\u7801\u3002 \u5982\u679C\u4F60\u7684\u9875\u9762\u4E0D\u9700\u8981\u5F15\u5165 jQuery, \u5EFA\u8BAE\u4F60\u4F7F\u7528 JavaScript \u539F\u751F\u4EE3\u7801\u3002 \u4EE3\u7801\u5927\u610F: \u5982\u679C\u9875\u9762\u7684\u5BBD\u5EA6\u8D85\u8FC7\u4E86 640px, \u90A3\u4E48\u9875\u9762\u4E2D html \u7684 font-size \u6052\u4E3A 100px, \u5426\u5219, \u9875\u9762\u4E2D html \u7684 font-size \u7684\u5927\u5C0F\u4E3A: <code>100 \\ (\u5F53\u524D\u9875\u9762\u5BBD\u5EA6 / 640)</code></p></div><h3 id="\u4E3A\u4EC0\u4E48\u662F-640px" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u662F-640px" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u662F 640px?</h3><p>\u5BF9\u4E8E\u624B\u673A\u5C4F\u5E55\u6765\u8BF4, <code>640px</code> \u7684\u9875\u9762\u5BBD\u5EA6\u662F\u4E00\u4E2A\u5B89\u5168\u7684\u6700\u5927\u5BBD\u5EA6, \u4FDD\u8BC1\u4E86\u79FB\u52A8\u7AEF\u9875\u9762\u4E24\u8FB9\u4E0D\u4F1A\u7559\u767D\u3002\u6CE8\u610F\u8FD9\u91CC\u7684 <code>px</code> \u662F <code>css</code> \u903B\u8F91\u50CF\u7D20, \u4E0E\u8BBE\u5907\u7684\u7269\u7406\u50CF\u7D20\u662F\u6709\u533A\u522B\u7684\u3002 \u5982\u679C\u8981\u5207\u79FB\u52A8\u7AEF\u9875\u9762, \u4F60\u53EF\u4EE5\u5148\u628A\u6548\u679C\u56FE\u5BBD\u5EA6\u7B49\u6BD4\u4F8B\u7F29\u653E\u5230 <code>640px</code> , \u5F88\u597D\u7528\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u8981\u8BBE\u7F6E-html-\u7684-font-size" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u8BBE\u7F6E-html-\u7684-font-size" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u8BBE\u7F6E html \u7684 font-size?</h3><p><code>rem</code> \u5C31\u662F\u6839\u5143\u7D20\uFF08\u5373: <code>html</code> \uFF09\u7684\u5B57\u4F53\u5927\u5C0F\u3002 <code>html</code> \u4E2D\u7684\u6240\u6709\u6807\u7B7E\u6837\u5F0F\u51E1\u662F\u6D89\u53CA\u5230\u5C3A\u5BF8\u7684\uFF08\u5982: <code>height</code> , <code>width</code> , <code>padding</code> , <code>margin</code> , <code>font-size</code> \u3002\u751A\u81F3 <code>left</code> , <code>top</code> \u7B49\uFF09\u4F60\u90FD\u53EF\u4EE5\u653E\u5FC3\u5927\u80C6\u7684\u7528 <code>rem</code> \u4F5C\u5355\u4F4D\u3002 \u5982\u679C\u4F60\u628A <code>html</code> \u7684 <code>font-size</code> \u8BBE\u4E3A <code>20px</code> , \u524D\u9762\u8BF4\u8FC7, <code>rem</code> \u5C31\u662F <code>html</code> \u7684\u5B57\u4F53\u5927\u5C0F, \u90A3\u4E48 <code>1rem = 20px</code> \u3002</p><h3 id="\u6A21\u62DF\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-iphone-4" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-iphone-4" aria-hidden="true">#</a> \u6A21\u62DF\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 iphone 4?</h3><p>\u5047\u8BBE\u4F60\u90E8\u95E8\u7684\u8BBE\u8BA1\u5E08\u7ED9\u4F60\u7684\u9875\u9762\u6807\u51C6\u5BBD\u5EA6\u4E3A <code>640px</code> , \u5219\u9875\u9762\u4E2D\u6240\u6709\u7684 <code>\u5BBD\u9AD8</code> \u5168\u90E8\u9664\u4EE5 2 , Chrome \u6D4F\u89C8\u5668 \u6A21\u62DF\u624B\u673A\u9875\u9762 \u8BBE\u7F6E\u624B\u673A\u578B\u53F7\u4E3A <code>IPhone 4</code> \u3002 \u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u8981\u5C06\u6240\u6709\u7684\u5BBD\u9AD8\u9664\u4EE5 2 \u7684\u539F\u56E0: <code>IPhone 4</code> \u6807\u51C6 \u5BBD \u662F <code>320 px</code> \u3002 \u7136\u540E\u6B63\u5E38\u7684\u7528 <code>px</code> \u4E3A\u5355\u4F4D \u5199\u4F60\u7684 <code>css</code> , \u4F60\u6240\u9700\u8981\u505A\u7684\u5C31\u662F\u4F60\u5199\u7684\u9875\u9762, \u8981\u5728 <code>IPhone 4</code> \u5B8C\u5168\u6B63\u786E\u663E\u793A\u3002 \u5982\u679C\u4F60\u8BF4, \u90A3\u8BBE\u8BA1\u90A3\u8FB9\u7ED9\u7684\u4E0D\u662F <code>640px</code> \u6807\u51C6\u600E\u4E48\u529E? \u4F60\u53EA\u8981\u8BA9\u4F60\u7684\u9875\u9762\u6309\u7167\u8BBE\u8BA1\u56FE\u5728 <code>iphone 4</code> \u4E0A\u6B63\u786E\u663E\u793A, \u5C31\u6728\u95EE\u9898\u3002</p><h3 id="rem-\u5355\u4F4D\u662F\u5982\u4F55\u6362\u7B97\u7684" tabindex="-1"><a class="header-anchor" href="#rem-\u5355\u4F4D\u662F\u5982\u4F55\u6362\u7B97\u7684" aria-hidden="true">#</a> rem \u5355\u4F4D\u662F\u5982\u4F55\u6362\u7B97\u7684?</h3><p>\u9875\u9762 <code>css</code> \u5168\u90E8\u5199\u5B8C\u4E4B\u540E, \u5C06\u6240\u6709\u7684 <code>px</code> \u8F6C\u6362\u4E3A\u4EE5 <code>rem</code> \u4E3A\u5355\u4F4D\u7684\u6570\u5B57\u3002 \u4F8B\u5982 \u6211\u8BBE\u7F6E <code>body</code> \u7684 <code>width: 320px\uFF1B</code> \u5219\u6839\u636E\u8BBE\u7F6E\u7684 <code>font - size</code> \u503C, \u8F6C\u6362\u4E3A <code>rem</code> , \u5219\u662F <code>width: 16 rem\uFF1B</code> \u3010320 / 20 (\u4F60\u8BBE\u7F6E\u7684\u6807\u51C6 <code>font - size</code> ) = 16\u3011\u3002</p><h3 id="\u5982\u4F55\u4F7F\u7528\u63D2\u4EF6\u6362\u7B97" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u63D2\u4EF6\u6362\u7B97" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u63D2\u4EF6\u6362\u7B97?</h3>`,28),r=s("\u5982\u679C\u4F60\u8BF4\u4E00\u4E2A\u9875\u9762\u7684 "),k=n("code",null,"css",-1),m=s(" \u6709\u51E0\u767E\u884C, \u5199\u5B8C\u518D\u53BB\u6539\u592A\u9EBB\u70E6\u4E86, \u90A3\u53EF\u4EE5\u7528 "),v=n("code",null,"px",-1),h=s(" \u8F6C\u6362\u6210 "),b=n("code",null,"rem",-1),f=s(" \u7684\u63D2\u4EF6\u3002 \u6211\u8FD9\u91CC\u6709\u4E00\u6B3E\u63A8\u8350: "),_=n("code",null,"cssrem",-1),x=s(" \uFF08\u4E0B\u8F7D\u4F7F\u7528\u7F51\u5740 "),g={href:"http://github.com/flashlizi/cssrem",target:"_blank",rel:"noopener noreferrer"},w=s("cssrem"),y=s("\uFF09\u3002 \u8BE5\u63D2\u4EF6\u662F "),z=n("code",null,"sublime text",-1),q=s(" \u7684\u4E00\u6B3E\u63D2\u4EF6\u3002"),j=n("br",null,null,-1),E=n("p",null,[n("img",{src:l,alt:"cssrem"})],-1);function S(W,L){const a=t("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,k,m,v,h,b,f,_,x,n("a",g,[w,p(a)]),y,z,q,j]),E])}var N=e(d,[["render",S],["__file","layout-project-for-moblie.html.vue"]]);export{N as default};
