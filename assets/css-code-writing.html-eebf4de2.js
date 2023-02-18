import{_ as i,V as t,W as c,Z as o,X as n,Y as s,a0 as l,$ as a,G as p}from"./framework-0ab02afe.js";const d={},r=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"一个优秀的前端开发人员, 在书写 CSS 时必定要注意的重点, 而不是随意的书写 CSS, 这样会给自己还有他人带来困扰。")],-1),u=a(`<h2 id="css-文件的编码" tabindex="-1"><a class="header-anchor" href="#css-文件的编码" aria-hidden="true">#</a> CSS 文件的编码</h2><p>表明 CSS 文件的页面编码为 UTF-8。 在 CSS 文件的最前面添加如下代码</p><p><code>For Example:</code></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>@charset &quot;UTF-8&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="css-书写顺序" tabindex="-1"><a class="header-anchor" href="#css-书写顺序" aria-hidden="true">#</a> CSS 书写顺序</h2><ul><li>位置属性 { <code>position</code> , <code>top</code> , <code>right</code> , <code>z-index</code> , <code>display</code> , <code>float</code> 等}</li><li>大小 { <code>width</code> , <code>height</code> , <code>padding</code> , <code>margin</code> 等}</li><li>文字系列 { <code>font</code> , <code>line-height</code> , <code>letter-spacing</code> , <code>color</code> , <code>text-align</code> 等}</li><li>背景 { <code>background</code> , <code>border</code> 等}</li><li>其他 { <code>animation</code> , <code>transition</code> 等}</li></ul><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="利用插件实现自动排序" tabindex="-1"><a class="header-anchor" href="#利用插件实现自动排序" aria-hidden="true">#</a> 利用插件实现自动排序</h3>`,9),v={href:"http://csscomb.com/",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="css-书写规范" tabindex="-1"><a class="header-anchor" href="#css-书写规范" aria-hidden="true">#</a> CSS 书写规范</h2><h3 id="使用-css-缩写属性" tabindex="-1"><a class="header-anchor" href="#使用-css-缩写属性" aria-hidden="true">#</a> 使用 CSS 缩写属性</h3><p>CSS 有些属性是可以缩写的, 比如 padding, margin, font 等等, 这样精简代码同时又能提高用户的阅读体验。</p><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="去掉小数点前的-0" tabindex="-1"><a class="header-anchor" href="#去掉小数点前的-0" aria-hidden="true">#</a> 去掉小数点前的 &quot;0&quot;</h3><p>若属性的值小于 1, 建议去掉小数点前的 &quot;0&quot;</p><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="值为-0-时-去掉单位" tabindex="-1"><a class="header-anchor" href="#值为-0-时-去掉单位" aria-hidden="true">#</a> 值为 0 时, 去掉单位</h3><p>若属性的值等于 0 时, 建议去掉值后面跟着的单位</p><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简写命名" tabindex="-1"><a class="header-anchor" href="#简写命名" aria-hidden="true">#</a> 简写命名</h3><p>很多用户都喜欢简写类名, 但前提是要让人看懂你的命名才能简写哦</p><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-进制颜色代码可以缩写" tabindex="-1"><a class="header-anchor" href="#_16-进制颜色代码可以缩写" aria-hidden="true">#</a> 16 进制颜色代码可以缩写</h3><p>有些颜色代码是可以缩写的, 我们就尽量缩写吧, 提高用户体验为主, 简写规则: 同时满足 1、 2 相同, 3、 4 相同, 5、 6 相同</p><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择器命名规范" tabindex="-1"><a class="header-anchor" href="#选择器命名规范" aria-hidden="true">#</a> 选择器命名规范</h2><ul><li>长名称或词组可以使用中横线来为选择器命名</li><li>一律小写避免使用大写, 区分于 <code>JS</code> 的函数名</li><li>强制建议使用英文, 不使用拼音</li><li>不建议使用 <code>_</code> 下划线来命名 <code>CSS</code> 选择器, 为什么呢？</li></ul><p>-- 输入的时候少按一个 <code>shift</code> 键； -- 浏览器兼容问题 （比如使用 <code>_tips</code> 的选择器命名, 在 <code>IE6</code> 是无效的） -- 能良好区分 <code>JavaScript</code> 变量命名（ <code>JS</code> 变量命名是用 <code>_</code> ）</p><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-选择器最好不要随意使用-id" tabindex="-1"><a class="header-anchor" href="#css-选择器最好不要随意使用-id" aria-hidden="true">#</a> CSS 选择器最好不要随意使用 id</h2><ul><li><code>id</code> 在 <code>JS</code> 是唯一的, 不能多次使用, 而使用 <code>class</code> 类选择器却可以重复使用</li><li><code>id</code> 的优先级优先与 <code>class</code> , 所以 <code>id</code> 应该按需使用, 而不能滥用</li><li><code>id</code> 选择器多用于 <code>JS</code> 方法的调用</li></ul><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
<span class="token selector">#info-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good */</span>
<span class="token selector">.info-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为选择器添加前缀" tabindex="-1"><a class="header-anchor" href="#为选择器添加前缀" aria-hidden="true">#</a> 为选择器添加前缀</h2><ul><li>有时候可以给选择器添加一个表示状态的前缀, 让语义更明了</li><li>当你在开发属于自己的 <code>CSS</code> 代码时也可以为你的 <code>CSS</code> 代码添加前缀</li></ul><p><code>For Example:</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Low */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名规范举例" tabindex="-1"><a class="header-anchor" href="#命名规范举例" aria-hidden="true">#</a> 命名规范举例</h2><ul><li>所有命名一律使用小写</li><li>所有的命名一律使用英文, 不使用中文或者拼音</li><li>用 <code>-</code> 代替 <code>_</code> , 文件命名时尽量少用 <code>-</code></li><li>文件命名时尽量不使用缩写, 除非是一眼就可以看出来该文件是干什么用</li><li>文件命名时, 如有该文件的版本号, 尽量要跟上, 如: jquery-2.1.4.min.js</li><li>引用外部文件时, 尽量选择压缩版的文件, 这样可以加快网页的加载速度</li></ul><h3 id="常用的-css-id-命名" tabindex="-1"><a class="header-anchor" href="#常用的-css-id-命名" aria-hidden="true">#</a> 常用的 CSS / ID 命名</h3><ul><li><strong>header / footer</strong> =&gt; 头部 / 尾部</li><li><strong>content / container</strong> =&gt; 内容</li><li><strong>nav / subnav</strong> =&gt; 导航 / 子导航</li><li><strong>sidebar</strong> =&gt; 侧边栏</li><li><strong>row / column</strong> =&gt; 行 / 列</li><li><strong>top / left / bottom / right</strong> =&gt; 上 / 左 / 下 / 右</li><li><strong>logo</strong> =&gt; 标志</li><li><strong>banner</strong> =&gt; 广告</li><li><strong>main</strong> =&gt; 页面主体</li><li><strong>hot</strong> =&gt; 热点</li><li><strong>news</strong> =&gt; 新闻</li><li><strong>download</strong> =&gt; 下载</li><li><strong>menu / submenu</strong> =&gt; 菜单 / 子菜单</li><li><strong>search</strong> =&gt; 搜索</li><li><strong>friendlink</strong> =&gt; 友情链接</li><li><strong>copyright</strong> =&gt; 版权</li><li><strong>tags</strong> =&gt; 标签</li><li><strong>list</strong> =&gt; 列表</li><li><strong>loginbar</strong> =&gt; 登录条</li><li><strong>msg</strong> =&gt; 提示信息</li><li><strong>status</strong> =&gt; 状态</li></ul><h3 id="常用-css-js-文件命名" tabindex="-1"><a class="header-anchor" href="#常用-css-js-文件命名" aria-hidden="true">#</a> 常用 CSS / JS 文件命名</h3><ul><li><strong>master.css</strong> =&gt; 主要的</li><li><strong>modeule.css</strong> =&gt; 模块</li><li><strong>base.css</strong> =&gt; 基本共用</li><li><strong>base.min.css</strong> =&gt; 基本共用样式表压缩版</li><li><strong>layout.css</strong> =&gt; **布局、 版面</li><li><strong>themes.css</strong> =&gt; 主题</li><li><strong>font.css</strong> =&gt; 文字</li><li><strong>from.css</strong> =&gt; 表单</li><li><strong>jquery-ui-1.9.0.js</strong> =&gt; jQuery UI 的脚本, 版本为 1.9.0</li><li><strong>jquery.min.js</strong> =&gt; jQuery 压缩版</li><li><strong>base.js</strong> =&gt; 基本共用</li><li><strong>from-ajax.js</strong> =&gt; 通过 Ajax 技术提交的表单</li></ul>`,40);function k(b,g){const e=p("ExternalLinkIcon");return t(),c("div",null,[r,o(" more "),u,n("p",null,[s("使用过 Sublime text 的童鞋应该知道有一款插件 "),n("a",v,[s("CSScomb"),l(e)]),s(" 是用来自动排序 CSS 属性的, 这是一个不错的偷懒方式, 也是加快开发速度的技巧")]),m])}const y=i(d,[["render",k],["__file","css-code-writing.html.vue"]]);export{y as default};
