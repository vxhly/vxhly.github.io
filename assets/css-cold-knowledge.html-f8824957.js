import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c,d as o,a as n,b as i,f as l,e as s}from"./app-b8b4b755.js";const u={},d=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"记录常用而不易于记忆的 css 自定义代码。")],-1),r=s(`<h2 id="常见实用技巧" tabindex="-1"><a class="header-anchor" href="#常见实用技巧" aria-hidden="true">#</a> 常见实用技巧</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*禁止长按链接与图片弹出菜单*/</span>
<span class="token selector">a,
img</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-touch-callout</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*禁止ios和android用户选中文字*/</span>
<span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*改变输入框placeholder的颜色值*/</span>
<span class="token selector">::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token comment">/* WebKit browsers */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:-moz-placeholder</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Mozilla Firefox 4 to 18 */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-moz-placeholder</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Mozilla Firefox 19+ */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:-ms-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Internet Explorer 10+ */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input:focus::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*android上去掉语音输入按钮*/</span>
<span class="token selector">input::-webkit-input-speech-button</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 消除 transition 闪屏 */</span>
<span class="token selector">.css</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>
  <span class="token property">-webkit-backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">-webkit-perspective</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h2><p>在 <code>input</code> 标签中设置 <code>placeholder</code> 属性时, 有时候因为需求, 要修改占位符的默认颜色或者字体大小, 这是就可以用下面的 <code>css</code> , <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* firefox */</span>
<span class="token selector">input::-moz-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* IE */</span>
<span class="token selector">input:-ms-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* chrome */</span>
<span class="token selector">input::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是不同浏览器写法不同:</p><ul><li>都要加上各自浏览器的前缀(如 <code>-webkit-</code> )</li><li><code>firefox</code> 的 <code>placeholder</code> 的前面没有 <code>input-</code></li><li><code>firefox</code> 与 <code>chrome</code> 都是 <code>::</code> 两个冒号, 而 IE 则是一个 <code>:</code></li><li>低版本的浏览器与新版本浏览器可能写法不同</li></ul><h2 id="下拉框的小三角" tabindex="-1"><a class="header-anchor" href="#下拉框的小三角" aria-hidden="true">#</a> 下拉框的小三角</h2><p><code>select</code> 标签会出现小三角, 通常这个小三角都会去掉, 或者用背景图片的方式替换为符合要求的样子。 去掉小三角的 <code>css</code> , <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">select</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token comment">/* chrome */</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token comment">/* firefox */</span>
  <span class="token comment">/* 在IE浏览器中目前还没找到可以去掉小三角的方法。 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="input-type-number-右边的-spinners" tabindex="-1"><a class="header-anchor" href="#input-type-number-右边的-spinners" aria-hidden="true">#</a> input[type=number] 右边的 spinners</h2><p><code>nput[type=number]</code> 通常用在移动端设备上, 浏览器会识别 <code>number</code> 输入类型, 然后改变数字键盘来适应它。 但是它会出现 <code>spinners</code> , 一般不需要它。 去掉 <code>spinners</code> 的 <code>css</code> 如下:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* firefox */</span>
<span class="token selector">input[type=&quot;number&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> textfield<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* chrome */</span>
<span class="token selector">input[type=&quot;number&quot;]::-webkit-inner-spin-button,
input[type=&quot;number&quot;]::-webkit-outer-spin-button</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webkit-tap-highlight-color" tabindex="-1"><a class="header-anchor" href="#webkit-tap-highlight-color" aria-hidden="true">#</a> -webkit-tap-highlight-color</h2><p>在移动端浏览器上(如微信、 QQ 内置浏览器), 当你点击一个链接或者通过 <code>JavaScript</code> 定义的可点击元素的时候, 会出现蓝色边框, 我是很讨厌这个边框的, 所以一般会这样去除, <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a,
button,
input,
textarea</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-user-modify</span><span class="token punctuation">:</span> read-write-plaintext-only<span class="token punctuation">;</span> //-webkit-user-modify有个副作用<span class="token punctuation">,</span> 就是输入法不再能够输入多个字符
<span class="token punctuation">}</span>

<span class="token comment">/*也可以..., 简单粗暴*/</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将高亮色设为透明, 这样就看不到蓝色边框了。</p><h2 id="滚动条" tabindex="-1"><a class="header-anchor" href="#滚动条" aria-hidden="true">#</a> 滚动条</h2><p><code>webkit</code> 现在支持拥有 <code>overflow</code> 属性的区域, <code>列表框</code> , <code>下拉菜单</code> , <code>textarea</code> 的滚动条自定义样式。 有时候需要把滚动条去掉, 特别是页面中出现几条滚动条的时候, <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token comment">/* 这将去除整个页面的滚动条 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置滚动条的宽度为 <code>0</code> 就可以去除滚动条了。</p><h2 id="文字换行" tabindex="-1"><a class="header-anchor" href="#文字换行" aria-hidden="true">#</a> 文字换行</h2><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.text-warp</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 强制不换行 */</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>

  <span class="token comment">/* 自动换行 */</span>
  <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>

  <span class="token comment">/* 强制英文单词断行 */</span>
  <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文字两端对齐" tabindex="-1"><a class="header-anchor" href="#文字两端对齐" aria-hidden="true">#</a> 文字两端对齐</h2><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.text-justify</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
  <span class="token property">text-justify</span><span class="token punctuation">:</span> inter-ideogra<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去掉色焦点框" tabindex="-1"><a class="header-anchor" href="#去掉色焦点框" aria-hidden="true">#</a> 去掉色焦点框</h2><p>去掉 Webkit(chrome) 浏览器中 input(文本框) 或 textarea 的黄色焦点框, <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input,
button,
select,
textarea</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">textarea</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去掉黄色背景" tabindex="-1"><a class="header-anchor" href="#去掉黄色背景" aria-hidden="true">#</a> 去掉黄色背景</h2><p>chrome 表单自动填充后, input 文本框的背景会变成黄色的, 通过审查元素可以看到这是由于 chrome 会默认给自动填充的 input 表单加上 input:-webkit-autofill 私有属性, 然后对其赋予以下样式:</p><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input: -webkit-autofill</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #faffbd<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在有些情况下, 这个黄色的背景会影响到我们界面的效果。 解决方法请往下看。</p><h2 id="让-input-文本框是纯色背景的" tabindex="-1"><a class="header-anchor" href="#让-input-文本框是纯色背景的" aria-hidden="true">#</a> 让 input 文本框是纯色背景的</h2><p>可以对 <code>input:-webkit-autofill</code> 使用足够大的纯色内阴影来覆盖 <code>input</code> 输入框的黄色背景, <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input: -webkit-autofill</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0 0 0 1000 white inset<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你有使用圆角等属性, 或者发现输入框的长度高度不太对, 可以对其进行调整, 除了 <code>chrome</code> 默认定义的 <code>background-color</code> , <code>background-image</code> , <code>color</code> 不能用 <code>!important</code> 提升其优先级以外, 其他的属性均可使用 <code>!important</code> 提升其优先级, <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input: -webkit-autofill</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0 0 0 1000 white inset<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 27px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 27px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 4px 4px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="input-文本框是使用图片作为背景的" tabindex="-1"><a class="header-anchor" href="#input-文本框是使用图片作为背景的" aria-hidden="true">#</a> input 文本框是使用图片作为背景的</h2><p>这个比较麻烦, 目前还没找到完美的解决方法, 有两种选择:</p><ul><li>如果你的图片背景不太复杂, 只有一些简单的内阴影, 那个人觉得完全可以使用上面介绍的方法用足够大的纯色内阴影去覆盖掉黄色背景, 此时只不过是没有了原来的内阴影效果罢了。</li><li>如果你实在想留住原来的内阴影效果, 那就只能牺牲 chrome 自动填充表单的功能, 使用 <code>JavaScript</code> 去实现, <code>For Example:</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;ul input:not(input[type=submit])&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> outHtml <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outerHTML<span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>outHtml<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭自动填充表单功能" tabindex="-1"><a class="header-anchor" href="#关闭自动填充表单功能" aria-hidden="true">#</a> 关闭自动填充表单功能</h2><p>如果你既不想使用 <code>JavaScript</code> , 也不想用 <code>css</code> , 好吧, 在 <code>form</code> 标签上直接关闭了表单的自动填充功能: <code>autocomplete=&quot;off&quot;</code> 。 <code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>from</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>from</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="seperate-table" tabindex="-1"><a class="header-anchor" href="#seperate-table" aria-hidden="true">#</a> seperate-table</h2><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.tab</span> <span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> separate<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e0e0e0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab th,
.tab td</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f5f9fb<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #fff #deedf6 #deedf6 #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab th</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #edf4f0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tab tr.even td</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>222<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>222<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),k={href:"http://codepen.io/anon/pen/zBbRkJ?editors=1100#0",target:"_blank",rel:"noopener noreferrer"},v=s(`<h2 id="清除浮动-万能的-float-闭合" tabindex="-1"><a class="header-anchor" href="#清除浮动-万能的-float-闭合" aria-hidden="true">#</a> 清除浮动, 万能的 float 闭合</h2><p>给需要闭合的 DIV（class 为 clearfix） 加上如下的 CSS 样式即可, <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">*html .clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">* + html .clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过貌似这样有点麻烦, 呵呵, 大前端常用的是下面的, <code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clear</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上诉办法是在需要清除浮动的地方加个 div.clear 或者 br.clear, 我们知道这样能解决基本清浮动问题。 但是这种方法的最大缺陷就是改变了 html 结构, 虽然只是加个 div</p>`,6);function m(b,h){const a=t("ExternalLinkIcon");return p(),c("div",null,[d,o(" more "),r,n("p",null,[n("a",k,[i("codepen 调试地址"),l(a)])]),v])}const x=e(u,[["render",m],["__file","css-cold-knowledge.html.vue"]]);export{x as default};
