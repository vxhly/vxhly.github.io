import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as c,c as o,a as s,e as l,d as a,b as n}from"./app.a3d402e1.js";const p={},d=a(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u4E00\u4E2A\u4F18\u79C0\u7684\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458, \u5728\u4E66\u5199 CSS \u65F6\u5FC5\u5B9A\u8981\u6CE8\u610F\u7684\u91CD\u70B9, \u800C\u4E0D\u662F\u968F\u610F\u7684\u4E66\u5199 CSS, \u8FD9\u6837\u4F1A\u7ED9\u81EA\u5DF1\u8FD8\u6709\u4ED6\u4EBA\u5E26\u6765\u56F0\u6270\u3002</p></div><h2 id="css-\u6587\u4EF6\u7684\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#css-\u6587\u4EF6\u7684\u7F16\u7801" aria-hidden="true">#</a> CSS \u6587\u4EF6\u7684\u7F16\u7801</h2><p>\u8868\u660E CSS \u6587\u4EF6\u7684\u9875\u9762\u7F16\u7801\u4E3A UTF-8\u3002 \u5728 CSS \u6587\u4EF6\u7684\u6700\u524D\u9762\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801</p><p><code>For Example:</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>@charset &quot;UTF-8&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="css-\u4E66\u5199\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#css-\u4E66\u5199\u987A\u5E8F" aria-hidden="true">#</a> CSS \u4E66\u5199\u987A\u5E8F</h2><ul><li>\u4F4D\u7F6E\u5C5E\u6027 { <code>position</code> , <code>top</code> , <code>right</code> , <code>z-index</code> , <code>display</code> , <code>float</code> \u7B49}</li><li>\u5927\u5C0F { <code>width</code> , <code>height</code> , <code>padding</code> , <code>margin</code> \u7B49}</li><li>\u6587\u5B57\u7CFB\u5217 { <code>font</code> , <code>line-height</code> , <code>letter-spacing</code> , <code>color</code> , <code>text-align</code> \u7B49}</li><li>\u80CC\u666F { <code>background</code> , <code>border</code> \u7B49}</li><li>\u5176\u4ED6 { <code>animation</code> , <code>transition</code> \u7B49}</li></ul><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5229\u7528\u63D2\u4EF6\u5B9E\u73B0\u81EA\u52A8\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528\u63D2\u4EF6\u5B9E\u73B0\u81EA\u52A8\u6392\u5E8F" aria-hidden="true">#</a> \u5229\u7528\u63D2\u4EF6\u5B9E\u73B0\u81EA\u52A8\u6392\u5E8F</h3>`,10),r=n("\u4F7F\u7528\u8FC7 Sublime text \u7684\u7AE5\u978B\u5E94\u8BE5\u77E5\u9053\u6709\u4E00\u6B3E\u63D2\u4EF6 "),u={href:"http://csscomb.com/",target:"_blank",rel:"noopener noreferrer"},v=n("CSScomb"),m=n(" \u662F\u7528\u6765\u81EA\u52A8\u6392\u5E8F CSS \u5C5E\u6027\u7684, \u8FD9\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u5077\u61D2\u65B9\u5F0F, \u4E5F\u662F\u52A0\u5FEB\u5F00\u53D1\u901F\u5EA6\u7684\u6280\u5DE7"),k=a(`<h2 id="css-\u4E66\u5199\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#css-\u4E66\u5199\u89C4\u8303" aria-hidden="true">#</a> CSS \u4E66\u5199\u89C4\u8303</h2><h3 id="\u4F7F\u7528-css-\u7F29\u5199\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-css-\u7F29\u5199\u5C5E\u6027" aria-hidden="true">#</a> \u4F7F\u7528 CSS \u7F29\u5199\u5C5E\u6027</h3><p>CSS \u6709\u4E9B\u5C5E\u6027\u662F\u53EF\u4EE5\u7F29\u5199\u7684, \u6BD4\u5982 padding, margin, font \u7B49\u7B49, \u8FD9\u6837\u7CBE\u7B80\u4EE3\u7801\u540C\u65F6\u53C8\u80FD\u63D0\u9AD8\u7528\u6237\u7684\u9605\u8BFB\u4F53\u9A8C\u3002</p><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border-top-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100%/1.6 serif<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 1em 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53BB\u6389\u5C0F\u6570\u70B9\u524D\u7684-0" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389\u5C0F\u6570\u70B9\u524D\u7684-0" aria-hidden="true">#</a> \u53BB\u6389\u5C0F\u6570\u70B9\u524D\u7684 &quot;0&quot;</h3><p>\u82E5\u5C5E\u6027\u7684\u503C\u5C0F\u4E8E 1, \u5EFA\u8BAE\u53BB\u6389\u5C0F\u6570\u70B9\u524D\u7684 &quot;0&quot;</p><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u503C\u4E3A-0-\u65F6-\u53BB\u6389\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u503C\u4E3A-0-\u65F6-\u53BB\u6389\u5355\u4F4D" aria-hidden="true">#</a> \u503C\u4E3A 0 \u65F6, \u53BB\u6389\u5355\u4F4D</h3><p>\u82E5\u5C5E\u6027\u7684\u503C\u7B49\u4E8E 0 \u65F6, \u5EFA\u8BAE\u53BB\u6389\u503C\u540E\u9762\u8DDF\u7740\u7684\u5355\u4F4D</p><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B80\u5199\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u547D\u540D" aria-hidden="true">#</a> \u7B80\u5199\u547D\u540D</h3><p>\u5F88\u591A\u7528\u6237\u90FD\u559C\u6B22\u7B80\u5199\u7C7B\u540D, \u4F46\u524D\u63D0\u662F\u8981\u8BA9\u4EBA\u770B\u61C2\u4F60\u7684\u547D\u540D\u624D\u80FD\u7B80\u5199\u54E6</p><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.navigation</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 1em 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.atr</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #93c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.nav</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 1em 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.author</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #93c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-\u8FDB\u5236\u989C\u8272\u4EE3\u7801\u53EF\u4EE5\u7F29\u5199" tabindex="-1"><a class="header-anchor" href="#_16-\u8FDB\u5236\u989C\u8272\u4EE3\u7801\u53EF\u4EE5\u7F29\u5199" aria-hidden="true">#</a> 16 \u8FDB\u5236\u989C\u8272\u4EE3\u7801\u53EF\u4EE5\u7F29\u5199</h3><p>\u6709\u4E9B\u989C\u8272\u4EE3\u7801\u662F\u53EF\u4EE5\u7F29\u5199\u7684, \u6211\u4EEC\u5C31\u5C3D\u91CF\u7F29\u5199\u5427, \u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u4E3A\u4E3B, \u7B80\u5199\u89C4\u5219: \u540C\u65F6\u6EE1\u8DB3 1\u3001 2 \u76F8\u540C, 3\u3001 4 \u76F8\u540C, 5\u3001 6 \u76F8\u540C</p><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eebbcc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.font</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ebc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.font</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u62E9\u5668\u547D\u540D\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a> \u9009\u62E9\u5668\u547D\u540D\u89C4\u8303</h2><ul><li>\u957F\u540D\u79F0\u6216\u8BCD\u7EC4\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6A2A\u7EBF\u6765\u4E3A\u9009\u62E9\u5668\u547D\u540D</li><li>\u4E00\u5F8B\u5C0F\u5199\u907F\u514D\u4F7F\u7528\u5927\u5199, \u533A\u5206\u4E8E <code>JS</code> \u7684\u51FD\u6570\u540D</li><li>\u5F3A\u5236\u5EFA\u8BAE\u4F7F\u7528\u82F1\u6587, \u4E0D\u4F7F\u7528\u62FC\u97F3</li><li>\u4E0D\u5EFA\u8BAE\u4F7F\u7528 <code>_</code> \u4E0B\u5212\u7EBF\u6765\u547D\u540D <code>CSS</code> \u9009\u62E9\u5668, \u4E3A\u4EC0\u4E48\u5462\uFF1F</li></ul><p>-- \u8F93\u5165\u7684\u65F6\u5019\u5C11\u6309\u4E00\u4E2A <code>shift</code> \u952E\uFF1B -- \u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898 \uFF08\u6BD4\u5982\u4F7F\u7528 <code>_tips</code> \u7684\u9009\u62E9\u5668\u547D\u540D, \u5728 <code>IE6</code> \u662F\u65E0\u6548\u7684\uFF09 -- \u80FD\u826F\u597D\u533A\u5206 <code>JavaScript</code> \u53D8\u91CF\u547D\u540D\uFF08 <code>JS</code> \u53D8\u91CF\u547D\u540D\u662F\u7528 <code>_</code> \uFF09</p><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.maintitle</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e3c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main_title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e3c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.main-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e3c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-\u9009\u62E9\u5668\u6700\u597D\u4E0D\u8981\u968F\u610F\u4F7F\u7528-id" tabindex="-1"><a class="header-anchor" href="#css-\u9009\u62E9\u5668\u6700\u597D\u4E0D\u8981\u968F\u610F\u4F7F\u7528-id" aria-hidden="true">#</a> CSS \u9009\u62E9\u5668\u6700\u597D\u4E0D\u8981\u968F\u610F\u4F7F\u7528 id</h2><ul><li><code>id</code> \u5728 <code>JS</code> \u662F\u552F\u4E00\u7684, \u4E0D\u80FD\u591A\u6B21\u4F7F\u7528, \u800C\u4F7F\u7528 <code>class</code> \u7C7B\u9009\u62E9\u5668\u5374\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528</li><li><code>id</code> \u7684\u4F18\u5148\u7EA7\u4F18\u5148\u4E0E <code>class</code> , \u6240\u4EE5 <code>id</code> \u5E94\u8BE5\u6309\u9700\u4F7F\u7528, \u800C\u4E0D\u80FD\u6EE5\u7528</li><li><code>id</code> \u9009\u62E9\u5668\u591A\u7528\u4E8E <code>JS</code> \u65B9\u6CD5\u7684\u8C03\u7528</li></ul><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">#info-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.info-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3A\u9009\u62E9\u5668\u6DFB\u52A0\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u9009\u62E9\u5668\u6DFB\u52A0\u524D\u7F00" aria-hidden="true">#</a> \u4E3A\u9009\u62E9\u5668\u6DFB\u52A0\u524D\u7F00</h2><ul><li>\u6709\u65F6\u5019\u53EF\u4EE5\u7ED9\u9009\u62E9\u5668\u6DFB\u52A0\u4E00\u4E2A\u8868\u793A\u72B6\u6001\u7684\u524D\u7F00, \u8BA9\u8BED\u4E49\u66F4\u660E\u4E86</li><li>\u5F53\u4F60\u5728\u5F00\u53D1\u5C5E\u4E8E\u81EA\u5DF1\u7684 <code>CSS</code> \u4EE3\u7801\u65F6\u4E5F\u53EF\u4EE5\u4E3A\u4F60\u7684 <code>CSS</code> \u4EE3\u7801\u6DFB\u52A0\u524D\u7F00</li></ul><p><code>For Example:</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.whithdrawal</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.divconent</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60rem<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sapninline</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.is-whithdrawal</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-div-conent</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60rem<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-sapn-inline</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u547D\u540D\u89C4\u8303\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u89C4\u8303\u4E3E\u4F8B" aria-hidden="true">#</a> \u547D\u540D\u89C4\u8303\u4E3E\u4F8B</h2><ul><li>\u6240\u6709\u547D\u540D\u4E00\u5F8B\u4F7F\u7528\u5C0F\u5199</li><li>\u6240\u6709\u7684\u547D\u540D\u4E00\u5F8B\u4F7F\u7528\u82F1\u6587, \u4E0D\u4F7F\u7528\u4E2D\u6587\u6216\u8005\u62FC\u97F3</li><li>\u7528 <code>-</code> \u4EE3\u66FF <code>_</code> , \u6587\u4EF6\u547D\u540D\u65F6\u5C3D\u91CF\u5C11\u7528 <code>-</code></li><li>\u6587\u4EF6\u547D\u540D\u65F6\u5C3D\u91CF\u4E0D\u4F7F\u7528\u7F29\u5199, \u9664\u975E\u662F\u4E00\u773C\u5C31\u53EF\u4EE5\u770B\u51FA\u6765\u8BE5\u6587\u4EF6\u662F\u5E72\u4EC0\u4E48\u7528</li><li>\u6587\u4EF6\u547D\u540D\u65F6, \u5982\u6709\u8BE5\u6587\u4EF6\u7684\u7248\u672C\u53F7, \u5C3D\u91CF\u8981\u8DDF\u4E0A, \u5982: jquery-2.1.4.min.js</li><li>\u5F15\u7528\u5916\u90E8\u6587\u4EF6\u65F6, \u5C3D\u91CF\u9009\u62E9\u538B\u7F29\u7248\u7684\u6587\u4EF6, \u8FD9\u6837\u53EF\u4EE5\u52A0\u5FEB\u7F51\u9875\u7684\u52A0\u8F7D\u901F\u5EA6</li></ul><h3 id="\u5E38\u7528\u7684-css-id-\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684-css-id-\u547D\u540D" aria-hidden="true">#</a> \u5E38\u7528\u7684 CSS / ID \u547D\u540D</h3><ul><li><strong>header / footer</strong> =&gt; \u5934\u90E8 / \u5C3E\u90E8</li><li><strong>content / container</strong> =&gt; \u5185\u5BB9</li><li><strong>nav / subnav</strong> =&gt; \u5BFC\u822A / \u5B50\u5BFC\u822A</li><li><strong>sidebar</strong> =&gt; \u4FA7\u8FB9\u680F</li><li><strong>row / column</strong> =&gt; \u884C / \u5217</li><li><strong>top / left / bottom / right</strong> =&gt; \u4E0A / \u5DE6 / \u4E0B / \u53F3</li><li><strong>logo</strong> =&gt; \u6807\u5FD7</li><li><strong>banner</strong> =&gt; \u5E7F\u544A</li><li><strong>main</strong> =&gt; \u9875\u9762\u4E3B\u4F53</li><li><strong>hot</strong> =&gt; \u70ED\u70B9</li><li><strong>news</strong> =&gt; \u65B0\u95FB</li><li><strong>download</strong> =&gt; \u4E0B\u8F7D</li><li><strong>menu / submenu</strong> =&gt; \u83DC\u5355 / \u5B50\u83DC\u5355</li><li><strong>search</strong> =&gt; \u641C\u7D22</li><li><strong>friendlink</strong> =&gt; \u53CB\u60C5\u94FE\u63A5</li><li><strong>copyright</strong> =&gt; \u7248\u6743</li><li><strong>tags</strong> =&gt; \u6807\u7B7E</li><li><strong>list</strong> =&gt; \u5217\u8868</li><li><strong>loginbar</strong> =&gt; \u767B\u5F55\u6761</li><li><strong>msg</strong> =&gt; \u63D0\u793A\u4FE1\u606F</li><li><strong>status</strong> =&gt; \u72B6\u6001</li></ul><h3 id="\u5E38\u7528-css-js-\u6587\u4EF6\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528-css-js-\u6587\u4EF6\u547D\u540D" aria-hidden="true">#</a> \u5E38\u7528 CSS / JS \u6587\u4EF6\u547D\u540D</h3><ul><li><strong>master.css</strong> =&gt; \u4E3B\u8981\u7684</li><li><strong>modeule.css</strong> =&gt; \u6A21\u5757</li><li><strong>base.css</strong> =&gt; \u57FA\u672C\u5171\u7528</li><li><strong>base.min.css</strong> =&gt; \u57FA\u672C\u5171\u7528\u6837\u5F0F\u8868\u538B\u7F29\u7248</li><li><strong>layout.css</strong> =&gt; **\u5E03\u5C40\u3001 \u7248\u9762</li><li><strong>themes.css</strong> =&gt; \u4E3B\u9898</li><li><strong>font.css</strong> =&gt; \u6587\u5B57</li><li><strong>from.css</strong> =&gt; \u8868\u5355</li><li><strong>jquery-ui-1.9.0.js</strong> =&gt; jQuery UI \u7684\u811A\u672C, \u7248\u672C\u4E3A 1.9.0</li><li><strong>jquery.min.js</strong> =&gt; jQuery \u538B\u7F29\u7248</li><li><strong>base.js</strong> =&gt; \u57FA\u672C\u5171\u7528</li><li><strong>from-ajax.js</strong> =&gt; \u901A\u8FC7 Ajax \u6280\u672F\u63D0\u4EA4\u7684\u8868\u5355</li></ul>`,40);function b(g,h){const e=t("ExternalLinkIcon");return c(),o("div",null,[d,s("p",null,[r,s("a",u,[v,l(e)]),m]),k])}var x=i(p,[["render",b],["__file","css-code-writing.html.vue"]]);export{x as default};
