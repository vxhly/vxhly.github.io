import{_ as n,V as s,W as e,Z as t,X as a,$ as p}from"./framework-72db3d75.js";const o={},c=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"新版本的 ECMAScript 引入了三个新的逻辑赋值运算符：空运算符, AND 和 OR 运算符, 这些运算符的出现, 也是希望让我们的代码更干净简洁, 下面分享几个优雅的 JavaScript 运算符使用技巧。")],-1),i=p(`<h2 id="可选链接运算符【-】" tabindex="-1"><a class="header-anchor" href="#可选链接运算符【-】" aria-hidden="true">#</a> 可选链接运算符【？.】</h2><p><code>可选链接运算符（Optional Chaining Operator）</code> 处于 ES2020 提案的第 4 阶段, 因此应将其添加到规范中。它改变了访问对象内部属性的方式, 尤其是深层嵌套的属性。它也可以作为 TypeScript 3.7 + 中的功能使用。</p><p>相信大部分开发前端的的小伙伴们都会遇到 null 和未定义的属性。JS 语言的动态特性使其无法不碰到它们。特别是在处理嵌套对象时, 以下代码很常见：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// I have a title!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码用于 API 响应, 我必须解析 JSON 以确保名称存在。但是, 当对象具有可选属性或某些配置对象具有某些值的动态映射时, 可能会遇到类似情况, 需要检查很多边界条件。</p><p>这时候, 如果我们使用可选链接运算符, 一切就变得更加轻松了。它为我们检查嵌套属性, 而不必显式搜索梯形图。我们所要做的就是使用 “？” 要检查空值的属性之后的运算符。我们可以随意在表达式中多次使用该运算符, 并且如果未定义任何项, 它将尽早返回。</p><h3 id="静态属性和动态属性" tabindex="-1"><a class="header-anchor" href="#静态属性和动态属性" aria-hidden="true">#</a> 静态属性和动态属性</h3><p>对于<code>静态属性</code>用法是：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>object<span class="token operator">?.</span>property<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于<code>动态属性</code>用法是：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>object<span class="token operator">?.</span><span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的代码可以简化为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> title <span class="token operator">=</span> data<span class="token operator">?.</span>children<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>title<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后, 如果我们有:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> data<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token operator">?.</span>children<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;codercao&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token operator">?.</span>children<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// codercao</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样写是不是更加简单了呢？由于操作符一旦为空值就会终止, 因此也可以使用它来有条件地调用方法或应用条件逻辑</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> conditionalProperty <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>conditionalProperty<span class="token operator">?.</span><span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对于方法的调用你可以这样写" tabindex="-1"><a class="header-anchor" href="#对于方法的调用你可以这样写" aria-hidden="true">#</a> 对于方法的调用你可以这样写</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>object<span class="token punctuation">.</span>runsOnlyIfMethodExists<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如下面的<code>parent</code>对象, 如果我们直接调用<code>parent.getTitle()</code>, 则会报<code>Uncaught TypeError: parent.getTitle is not a function</code>错误, <code>parent.getTitle?.()</code>则会终止不会执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;parent&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;p1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;p3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

parent<span class="token punctuation">.</span>getName<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// parent</span>
parent<span class="token punctuation">.</span>getTitle<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//不会执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与无效合并一起使用" tabindex="-1"><a class="header-anchor" href="#与无效合并一起使用" aria-hidden="true">#</a> 与无效合并一起使用</h3><p>提供了一种方法来处理未定义或为空值和表达提供默认值。我们可以使用??运算符, 为表达式提供默认值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">??</span> <span class="token string">&quot;codercao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// codercao</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因此, 如果属性不存在, 则可以将无效的合并运算符与可选链接运算符结合使用以提供默认值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> title <span class="token operator">=</span> data<span class="token operator">?.</span>children<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>title <span class="token operator">??</span> <span class="token string">&quot;codercao&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// codercao</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑空分配" tabindex="-1"><a class="header-anchor" href="#逻辑空分配" aria-hidden="true">#</a> 逻辑空分配（?? =）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>expr1 <span class="token operator">??=</span> expr2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>逻辑空值运算符仅在 nullish 值（null 或者 undefined）时才将值分配给 expr1, 表达方式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">??=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可能看起来等效于：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">=</span> x <span class="token operator">??</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但事实并非如此！有细微的差别。</p><p>空的合并运算符（??）从左到右操作, 如果 x 不为 nullish 值则中表达式不执行。因此, 如果 x 不为 null 或者 undefined, 则永远不会对表达式 y 进行求值。如果 y 是一个函数, 它将根本不会被调用。因此, 此逻辑赋值运算符等效于</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">??</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="逻辑或分配" tabindex="-1"><a class="header-anchor" href="#逻辑或分配" aria-hidden="true">#</a> 逻辑或分配（|| =）</h2><p>此逻辑赋值运算符仅在左侧表达式为 <code>falsy 值（虚值）</code> 时才赋值。Falsy 值（虚值）与 null 有所不同, 因为 falsy 值（虚值）可以是任何一种值：undefined, null, 空字符串 (双引号 &quot;&quot;、单引号’’、反引号 \`\`), NaN, 0。IE 浏览器中的 document.all, 也算是一个。</p><p>语法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">||=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等同于</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">||</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在我们想要保留现有值（如果不存在）的情况下，这很有用，否则我们想为其分配默认值。例如，如果搜索请求中没有数据，我们希望将元素的内部 HTML 设置为默认值。否则，我们要显示现有列表。这样，我们避免了不必要的更新和任何副作用，例如解析，重新渲染，失去焦点等。我们可以简单地使用此运算符来使用 JavaScript 更新 HTML：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;search&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">||=</span>
  <span class="token string">&quot;&lt;i&gt;No posts found matching this search.&lt;/i&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑与分配" tabindex="-1"><a class="header-anchor" href="#逻辑与分配" aria-hidden="true">#</a> 逻辑与分配（&amp;&amp; =）</h2><p>可能你已经猜到了，此逻辑赋值运算符仅在左侧为真时才赋值。因此</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">&amp;&amp;=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等同于</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>本次分享几个优雅的 JavaScript 运算符使用技巧，重点分享了可选链接运算符的使用，这样可以让我们不需要再编写大量我们例子中代码即可轻松访问嵌套属性。但是 IE 不支持它，因此，如果需要支持该版本或更旧版本的浏览器，则可能需要添加 Babel 插件。对于 Node.js，需要为此升级到 Node 14 LTS 版本，因为 12.x 不支持该版本。</p>`,50);function l(r,u){return s(),e("div",null,[c,t(" more "),i])}const k=n(o,[["render",l],["__file","javascript-operator.html.vue"]]);export{k as default};
