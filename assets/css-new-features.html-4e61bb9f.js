import{_ as s,V as a,W as e,Z as t,X as n,$ as p}from"./framework-dfdacaa9.js";const i="/assets/css-new-features-1.png",c="/assets/css-new-features-2.gif",o="/assets/css-new-features-3.png",l="/assets/css-new-features-4.png",u={},r=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"在众多的 CSS 新特性中, 有 3 个采用的新特性值得我们一起学习, 这里将记录这些新特性的使用方法。")],-1),d=p(`<h2 id="特性查询" tabindex="-1"><a class="header-anchor" href="#特性查询" aria-hidden="true">#</a> 特性查询</h2><p>特性查询, 使用 <code>@supports</code> 规则, 允许我们将 CSS 包含在一个条件块中, 这个条件块中会检查当前 <code>user agent</code> 是否支持一个 CSS 属性键值对, 在支持的情况下其中的内容才会生效。</p><p>这里有一个简单的例子, 只在浏览器支持 Flexbox 的时候应用 <code>display: flex</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外, 使用像 and 和 not 这样的运算符, 我们甚至可以创建更复杂的特性查询。</p><p>比如, 我们可以检测浏览器是否仅仅支持老的 Flexbox 语法 -</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flexbox<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.foo</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flexbox<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持情况" tabindex="-1"><a class="header-anchor" href="#支持情况" aria-hidden="true">#</a> 支持情况</h3><figure><img src="`+i+'" alt="CSS 的新特性" tabindex="0" loading="lazy"><figcaption>CSS 的新特性</figcaption></figure><h2 id="表格布局" tabindex="-1"><a class="header-anchor" href="#表格布局" aria-hidden="true">#</a> 表格布局</h2><p>CSS 表格布局模块 所定义的系统用于创建基于表格的布局。 它与 <code>弹性盒布局</code> 模块相似, 但它更明确地为页面布局而设计, 它们之间存在许多不同的特性。</p><h3 id="明确项目定位" tabindex="-1"><a class="header-anchor" href="#明确项目定位" aria-hidden="true">#</a> 明确项目定位</h3><p>网格由表格容器(通过 <code>display: grid</code> 创建)和表格项(子组件)组成。 在我们的 CSS 中, 我们可以清楚的组织表格项的位置和顺序, 而这与它们的标记(指 HTML 标记)无关。<br></p><figure><img src="'+c+`" alt="CSS 的新特性" tabindex="0" loading="lazy"><figcaption>CSS 的新特性</figcaption></figure><p>像上面这张图的布局, 它的背后的 CSS 代码是非常简单的</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hg__header</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hg__footer</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> footer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hg__main</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> main<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hg__left</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> navigation<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hg__right</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> ads<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hg</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&quot;header header header&quot;</span>
    <span class="token string">&quot;navigation main ads&quot;</span>
    <span class="token string">&quot;footer footer footer&quot;</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr 150px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 1fr 30px<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.hg</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
      <span class="token string">&quot;header&quot;</span>
      <span class="token string">&quot;navigation&quot;</span>
      <span class="token string">&quot;main&quot;</span>
      <span class="token string">&quot;ads&quot;</span>
      <span class="token string">&quot;footer&quot;</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 50px 1fr 50px 30px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="灵活的长度" tabindex="-1"><a class="header-anchor" href="#灵活的长度" aria-hidden="true">#</a> 灵活的长度</h3><p><code>CSS Grid</code> 模块引入了一个新的长度单位, <code>fr</code> , 它代表了表格容器中剩余空间的一个等分。</p><p>它使得我们在表格容器根据可用空间来为表格项分配高度和宽度成为可能。 例如在圣杯布局( <code>Holy Grail Layout</code> )中, 我希望 main 分区占据两个边栏之外的所有空间。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hg</span> <span class="token punctuation">{</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="间距" tabindex="-1"><a class="header-anchor" href="#间距" aria-hidden="true">#</a> 间距</h3><p>我们可以使用 <code>grid-row-gap</code> 、 <code>grid-column-gap</code> 和 <code>grid-gap</code> 属性来明确定义间距。 这些属性的值是 <code>&lt;length-percentage(长度百分比)&gt;</code> 数据类型 , 是内容区域尺寸的百分比。</p><p>比如, 需要 %5 的间距, 可以这样写</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hg</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持情况-1" tabindex="-1"><a class="header-anchor" href="#支持情况-1" aria-hidden="true">#</a> 支持情况</h3><figure><img src="`+o+`" alt="CSS 的新特性" tabindex="0" loading="lazy"><figcaption>CSS 的新特性</figcaption></figure><h2 id="原生变量" tabindex="-1"><a class="header-anchor" href="#原生变量" aria-hidden="true">#</a> 原生变量</h2><p>最后要说的是原生 CSS 变量。 这个模块引入了一种由创建作者定义变量的方法, 这个变量可以像 CSS 属性一样赋值。</p><p>比如, 假设在我们的样式表中多处用到一个主题颜色, 我们可以将其抽象出来保存到变量中, 再引用变量, 以此代替多次直接写出实际的值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--theme-colour</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-colour<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-colour<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">strong</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-colour<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前在像 SASS 这样 CSS 预处理器中已经可以做到这些事情, 但 CSS 变量在浏览器中具有活性。 也就是说, 它们的值可以实时更新。 例如, 要改变上例中 <code>--theme-color</code> 属性的值, 我们只需要这样做</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> rootEl <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>
rootEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;--theme-colour&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持情况-2" tabindex="-1"><a class="header-anchor" href="#支持情况-2" aria-hidden="true">#</a> 支持情况</h3><figure><img src="`+l+'" alt="CSS 的新特性" tabindex="0" loading="lazy"><figcaption>CSS 的新特性</figcaption></figure>',34);function v(k,m){return a(),e("div",null,[r,t(" more "),d])}const g=s(u,[["render",v],["__file","css-new-features.html.vue"]]);export{g as default};
