import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,d as t,a as n,e as p}from"./app-44879862.js";const c={},l=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"介绍 HTML 和 CSS 的格式和代码规范, 旨在提高代码质量和协作效率。")],-1),i=p(`<h2 id="通用样式规范" tabindex="-1"><a class="header-anchor" href="#通用样式规范" aria-hidden="true">#</a> 通用样式规范</h2><h3 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h3><p>省略图片、样式、脚本以及其他媒体文件 URL 的协议部分（ <code>http:</code> , <code>https:</code> ）, 除非文件在两种协议下都不可用。这种方案称为 <code>protocol-relative URL</code> , 好处是无论你是使用 <code>HTTPS</code> 还是 <code>HTTP</code> 访问页面, 浏览器都会以相同的协议请求页面中的资源, 同时可以节省一部分字节。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.google.com/js/gweb/analytics/autotrack.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//www.google.com/js/gweb/analytics/autotrack.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.google.com/images/exampl&quot;</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;//www.google.com/images/example&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通用格式规范" tabindex="-1"><a class="header-anchor" href="#通用格式规范" aria-hidden="true">#</a> 通用格式规范</h2><h3 id="缩进" tabindex="-1"><a class="header-anchor" href="#缩进" aria-hidden="true">#</a> 缩进</h3><p>一次缩进 2 个空格, 不要使用 tab 或者混合 tab 和空格的缩进。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Fantastic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Great<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大小写" tabindex="-1"><a class="header-anchor" href="#大小写" aria-hidden="true">#</a> 大小写</h3><p>以下都应该用小写: HTML 元素名称, 属性, 属性值（除非 text/CDATA）, CSS 选择器, 属性, 属性值。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>google.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Google<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结尾空格" tabindex="-1"><a class="header-anchor" href="#结尾空格" aria-hidden="true">#</a> 结尾空格</h3><p>结尾空格不仅多余, 而且在比较代码时会更麻烦。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>What?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Yes please.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通用元规范" tabindex="-1"><a class="header-anchor" href="#通用元规范" aria-hidden="true">#</a> 通用元规范</h2><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><p>在 HTML 中通过 <code>&lt;meta charset=&quot;utf-8&quot;&gt;</code> 指定编码方式, CSS 中不需要指定, 因为默认是 UTF-8。</p><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><p>使用注释来解释代码: 包含的模块, 功能以及优点。</p><h3 id="任务项" tabindex="-1"><a class="header-anchor" href="#任务项" aria-hidden="true">#</a> 任务项</h3><p>用 TODO 来标记待办事项, 而不是用一些其他的标记, 像 @@。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- TODO: remove optional tags --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Apples<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Oranges<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-风格规范" tabindex="-1"><a class="header-anchor" href="#html-风格规范" aria-hidden="true">#</a> HTML 风格规范</h2><h3 id="文档类型" tabindex="-1"><a class="header-anchor" href="#文档类型" aria-hidden="true">#</a> 文档类型</h3><p>HTML 文档应使用 HTML5 的文档类型: <code>&lt;!DOCTYPE html&gt;</code> 。</p><p>孤立标签无需封闭自身, 如: <code>&lt;br&gt;</code> 不要写成 <code>&lt;br /&gt;</code> 。</p><h3 id="html-正确性" tabindex="-1"><a class="header-anchor" href="#html-正确性" aria-hidden="true">#</a> HTML 正确性</h3><p>尽可能使用正确的 HTML。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
  This is only a test.

  <span class="token comment">&lt;!-- Good --&gt;</span>
  <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>This is only a test.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语义化" tabindex="-1"><a class="header-anchor" href="#语义化" aria-hidden="true">#</a> 语义化</h3><p>根据使用场景选择正确的 HTML 元素（有时被错误的称为&quot;标签&quot;）。例如, 使用 h1 元素创建标题, p 元素创建段落, a 元素创建链接等等。正确的使用 HTML 元素对于可访问性、可重用性以及编码效率都很重要。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">goToRecommendations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>All recommendations<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommendations/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>All recommendations<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多媒体元素降级" tabindex="-1"><a class="header-anchor" href="#多媒体元素降级" aria-hidden="true">#</a> 多媒体元素降级</h3><p>对于像图片、视频、canvas 动画等多媒体元素, 确保提供其他可访问的内容。图片可以使用替代文本（alt）, 视频和音频可以使用文字版本。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spreadsheet.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spreadsheet.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Spreadsheet screenshot.<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关注分离" tabindex="-1"><a class="header-anchor" href="#关注分离" aria-hidden="true">#</a> 关注分离</h3><p>标记、样式和脚本分离, 确保相互耦合最小化。</p><h3 id="实体引用" tabindex="-1"><a class="header-anchor" href="#实体引用" aria-hidden="true">#</a> 实体引用</h3><p>如果团队中文件和编辑器使用同样的编码方式, 就没必要使用实体引用, 除了一些在 HTML 中有特殊含义的字符（如 <code>&lt;</code> 和 <code>&amp;</code> ）以及不可见的字符（如空格）。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
The currency symbol for the Euro is “<span class="token entity named-entity" title="&amp;eur;">&amp;eur;</span>”.

<span class="token comment">&lt;!-- Good --&gt;</span>
The currency symbol for the Euro is “€”.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type-属性" tabindex="-1"><a class="header-anchor" href="#type-属性" aria-hidden="true">#</a> type 属性</h3><p>在引用样式表和脚本时, 不要指定 type 属性, 除非不是 CSS 或 JavaScript。</p><p>因为 HTML5 中已经默认指定样式变的 type 是 <code>text/css</code> , 脚本的 type 是 <code>text/javascript</code> 。</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-格式规范" tabindex="-1"><a class="header-anchor" href="#html-格式规范" aria-hidden="true">#</a> HTML 格式规范</h2><h3 id="html-引号" tabindex="-1"><a class="header-anchor" href="#html-引号" aria-hidden="true">#</a> HTML 引号</h3><p>属性值用双引号。 <code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Low --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maia-button maia-button-secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Sign in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maia-button maia-button-secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Sign in<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-风格规范" tabindex="-1"><a class="header-anchor" href="#css-风格规范" aria-hidden="true">#</a> CSS 风格规范</h2><h3 id="id-和-class-命名" tabindex="-1"><a class="header-anchor" href="#id-和-class-命名" aria-hidden="true">#</a> ID 和 Class 命名</h3><p>使用有含义的 id 和 class 名称。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low: 毫无意义 */</span>
<span class="token selector">#yee-1901</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Low: 表述直觉 */</span>
<span class="token selector">.button-green</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.clear</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good: 具体的 */</span>
<span class="token selector">#gallery</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">#login</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.video</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good: 通用的 */</span>
<span class="token selector">.aux</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.alt</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-和-class-命名风格" tabindex="-1"><a class="header-anchor" href="#id-和-class-命名风格" aria-hidden="true">#</a> ID 和 Class 命名风格</h3><p>id 和 class 应该尽量简短, 同时要容易理解。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">#navigation</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.atr</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">#nav</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.author</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h3><p>除非需要, 否则不要在 id 或 class 前加元素名。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">ul#example</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">div.error</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">#example</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.error</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性简写" tabindex="-1"><a class="header-anchor" href="#属性简写" aria-hidden="true">#</a> 属性简写</h3><p>尽量使用 CSS 中可以简写的属性 (如 font), 可以提高编码效率以及代码可读性。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0-和单位" tabindex="-1"><a class="header-anchor" href="#_0-和单位" aria-hidden="true">#</a> 0 和单位</h3><p>值为 0 时不用添加单位。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开头的-0" tabindex="-1"><a class="header-anchor" href="#开头的-0" aria-hidden="true">#</a> 开头的 0</h3><p>值在 -1 和 1 之间时, 不需要加 0。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-进制表示法" tabindex="-1"><a class="header-anchor" href="#_16-进制表示法" aria-hidden="true">#</a> 16 进制表示法</h3><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #eebbcc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.example</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ebc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前缀" tabindex="-1"><a class="header-anchor" href="#前缀" aria-hidden="true">#</a> 前缀</h3><p>使用带前缀的命名空间可以防止命名冲突, 同时提高代码可维护性。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.adw-help</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* AdWords */</span>
<span class="token selector">#maia-note</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Maia */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择器中使用连字符可以提高可读性。" tabindex="-1"><a class="header-anchor" href="#选择器中使用连字符可以提高可读性。" aria-hidden="true">#</a> 选择器中使用连字符可以提高可读性。</h3><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low: does not separate the words “demo” and “image” */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-格式规范" tabindex="-1"><a class="header-anchor" href="#css-格式规范" aria-hidden="true">#</a> CSS 格式规范</h2><h3 id="css-书写顺序" tabindex="-1"><a class="header-anchor" href="#css-书写顺序" aria-hidden="true">#</a> CSS 书写顺序</h3><ul><li>位置属性 { <code>position</code> , <code>top</code> , <code>right</code> , <code>z-index</code> , <code>display</code> , <code>float</code> 等}</li><li>大小 { <code>width</code> , <code>height</code> , <code>padding</code> , <code>margin</code> 等}</li><li>文字系列 { <code>font</code> , <code>line-height</code> , <code>letter-spacing</code> , <code>color</code> , <code>text-align</code> 等}</li><li>背景 { <code>background</code> , <code>border</code> 等}</li><li>其他 { <code>animation</code> , <code>transition</code> 等}</li></ul><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级内容缩进" tabindex="-1"><a class="header-anchor" href="#块级内容缩进" aria-hidden="true">#</a> 块级内容缩进</h3><p>为了反映层级关系和提高可读性, 块级内容都应缩进。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen<span class="token punctuation">,</span> projection</span> <span class="token punctuation">{</span>
  <span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明结束" tabindex="-1"><a class="header-anchor" href="#声明结束" aria-hidden="true">#</a> 声明结束</h3><p>每行 CSS 都应以分号结尾。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性名结尾" tabindex="-1"><a class="header-anchor" href="#属性名结尾" aria-hidden="true">#</a> 属性名结尾</h3><p>属性名和值之间都应有一个空格。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明样式块的分隔" tabindex="-1"><a class="header-anchor" href="#声明样式块的分隔" aria-hidden="true">#</a> 声明样式块的分隔</h3><p>在选择器和 {} 之间用空格隔开。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low: missing space */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择器分隔" tabindex="-1"><a class="header-anchor" href="#选择器分隔" aria-hidden="true">#</a> 选择器分隔</h3><p>每个选择器都另起一行。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规则分隔" tabindex="-1"><a class="header-anchor" href="#规则分隔" aria-hidden="true">#</a> 规则分隔</h3><p>规则之间都用空行隔开。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-引号" tabindex="-1"><a class="header-anchor" href="#css-引号" aria-hidden="true">#</a> CSS 引号</h3><p>属性选择器和属性值用单引号, URI 的值不需要引号。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;https://www.google.com/css/maia.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;open sans&quot;</span><span class="token punctuation">,</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;//www.google.com/css/maia.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;open sans&quot;</span><span class="token punctuation">,</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-元规则" tabindex="-1"><a class="header-anchor" href="#css-元规则" aria-hidden="true">#</a> CSS 元规则</h2><h3 id="分段注释" tabindex="-1"><a class="header-anchor" href="#分段注释" aria-hidden="true">#</a> 分段注释</h3><p>用注释把 CSS 分成各个部分。 <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Header */</span>

<span class="token selector">#adw-header</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Footer */</span>

<span class="token selector">#adw-footer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Gallery */</span>

<span class="token selector">.adw-gallery</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,119);function o(u,d){return a(),e("div",null,[l,t(" more "),i])}const k=s(c,[["render",o],["__file","html-and-css-code-criterion.html.vue"]]);export{k as default};
