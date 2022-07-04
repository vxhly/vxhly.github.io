import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.f29ec3fb.js";const p={},o=t(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u5728 es6 \u91CC\u4F7F\u7528 jquery \u65F6, \u4E60\u60EF\u7528 es5 \u4E2D\u76F4\u63A5\u83B7\u53D6 dom \u5143\u7D20, \u5982 <code>$(&#39;selector&#39;)</code>, \u7ED1 \u5B9A click \u6216 hover \u7B49\u4E8B\u4EF6; \u82E5\u4F60\u4E5F\u8FFD\u6C42\u6F6E\u6D41, \u5728\u9009\u62E9\u5668\u4E8B\u4EF6\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u6765\u5B9A\u4E49, \u5E76\u7528\u5230 $(this) \u7684\u8BDD, \u90A3\u4E48\u4F60\u4F1A\u53D1\u73B0\u8FD9\u5B8C\u5168\u884C\u4E0D\u901A, \u60F3\u8981\u77E5\u9053\u89E3\u51B3\u65B9\u6848\u7684\u8BDD\u5C31\u7EE7\u7EED\u9605\u8BFB\u4E0B\u53BB\u3002</p></div><h2 id="\u95EE\u9898\u91CD\u73B0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u91CD\u73B0" aria-hidden="true">#</a> \u95EE\u9898\u91CD\u73B0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;[data-action=&quot;imgQRCodeCtrl&quot;]&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">hover</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token operator">!</span>Base<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>mobile <span class="token operator">&amp;&amp;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.qr-code&quot;</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.qr-code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Base<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>mobile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4D\u4E00\u770B, \u8FD9\u6BB5\u4EE3\u7801\u6CA1\u4EC0\u4E48\u95EE\u9898, \u903B\u8F91\u4E5F\u5F88\u7B80\u5355, \u5C31\u662F\u5728\u6240\u6709\u5C5E\u6027\u6709 <code>data-action=&quot;imgQRCodeCtrl&quot;</code> \u7684\u5217\u8868\u5143\u7D20\u4E0A\u7ED1\u5B9A <code>hover</code> \u53CA <code>click</code> \u4E8B\u4EF6, \u5B9E\u73B0 pc \u7AEF hover \u65F6\u80FD\u591F\u4F7F\u5185\u90E8\u7684\u4E00\u4E2A\u5757\u663E\u793A\u6216\u9690\u85CF, \u79FB\u52A8\u7AEF\u70B9\u51FB\u65F6\u83B7\u53D6\u5F53\u524D\u5C5E\u6027\u4E0A\u7684 href \u5E76\u8FDB\u884C\u8DF3\u8F6C\uFF1B</p><p>\u5F53\u7136 so easy, \u5728\u8FC7\u53BB\u7684 es5 \u4E0A\u6309\u8FD9\u79CD\u903B\u8F91\u5199\u5B8C\u5168\u4E48\u6709\u95EE\u9898\uFF1Bbut ES6 \u91CC\u89E3\u6790\u540E, \u4F1A\u91CD\u65B0\u5B9A\u4E49 this,</p><p>\u5982\u4E0B\u662F\u771F\u5B9E\u6D4F\u89C8\u5668\u4E0A\u52A0\u8F7D\u7684\u89E3\u6790\u540E\u7684\u4EE3\u7801:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token string">&quot;./node_modules/jquery/dist/jquery.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token comment">//....</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;[data-action=&quot;imgQRCodeCtrl&quot;]&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">hover</span><span class="token punctuation">(</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">!</span>_base2<span class="token punctuation">.</span>default<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>mobile <span class="token operator">&amp;&amp;</span>
          <span class="token function">$</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.qr-code&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token function">$</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.qr-code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;z-index&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_base2<span class="token punctuation">.</span>default<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>mobile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a> \u539F\u56E0</h3><p>\u8FD9\u662F Stack Overflow \u4E0A\u5927\u725B\u7684\u89E3\u8BFB</p><blockquote><p>This has nothing to do with Traceur and turning something off, this is simply how ES6 works. It&#39;s the specific functionality you&#39;re asking for by using =&gt; instead of function () { }.</p></blockquote><blockquote><p>If you want to write ES6, you need to write ES6 all the time, you can&#39;t switch in and out of it on certain lines of code, and you definitely cannot suppress or alter the way =&gt; works. Even if you could, you would just wind up with some bizarre version of JavaScript that only you understand and which would never work correctly outside of your customized Traceur, which definitely isn&#39;t the point of Traceur.</p></blockquote><p>\u4EE5\u4E0A\u5927\u6982\u610F\u601D\u662F &quot;ES6 \u7684\u5DE5\u4F5C\u65B9\u5F0F\u5C31\u662F\u8FD9\u6837, \u8DDF\u7F16\u8BD1\u65E0\u5173, \u4E0E\u5199\u6CD5\u6709\u5173\uFF1B\u82E5\u60F3\u7528 ES6, \u6700\u597D\u5168\u7528 ES6 \u7684\u5199\u6CD5, \u4E0D\u80FD\u6539\u53D8\u5B83\u539F\u672C\u7684\u5B9A\u4E49...&quot;</p><p>\u539F\u6765\u7BAD\u5934\u51FD\u6570, \u4E0D\u7ED1\u5B9A\u81EA\u5DF1\u7684 this, \u8FD9\u4E00\u4E0B\u5C31\u8BF4\u901A\u4E86\uFF1B\u597D\u597D\u770B\u770B\u4E0B\u9762\u8FD9\u53E5\u5427, \u4E0D\u9047\u5230\u95EE\u9898\u65F6\u6C38\u8FDC\u8BB0\u5FC6\u6A21\u7CCA, \u54C8\u54C8</p><blockquote><p>\u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u8BED\u6CD5\u6BD4\u51FD\u6570\u8868\u8FBE\u5F0F\u66F4\u77ED, \u5E76\u4E14\u4E0D\u7ED1\u5B9A\u81EA\u5DF1\u7684 this, arguments, super \u6216 new.target\u3002\u8FD9\u4E9B\u51FD\u6570\u8868\u8FBE\u5F0F\u6700\u9002\u5408\u7528\u4E8E\u975E\u65B9\u6CD5\u51FD\u6570, \u5E76\u4E14\u5B83\u4EEC\u4E0D\u80FD\u7528\u4F5C\u6784\u9020\u51FD\u6570\u3002</p></blockquote><h2 id="\u95EE\u9898\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a> \u95EE\u9898\u89E3\u51B3</h2><h3 id="\u65B9\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00</h3><p>\u7ED1\u5B9A <code>this</code> \u7684\u51FD\u6570\u4E0D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u4E0D\u5C31\u884C\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;[data-action=&quot;imgQRCodeCtrl&quot;]&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">//...</span>
  <span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Base<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>mobile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C</h3><p>\u4E0D\u4F7F\u7528 <code>this</code> , \u4F7F\u7528 <code>event.currentTarget</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;[data-action=&quot;imgQRCodeCtrl&quot;]&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">//...</span>
  <span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Base<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>mobile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B9\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09</h3><p>\u5229\u7528 <code>each</code> \u51FD\u6570\u5FAA\u73AF\u7ED1\u5B9A\u5230\u6BCF\u4E00\u4E2A\u5C0F\u5143\u7D20\u4E0A, \u5982\u6B64\u5C31\u4E0D\u9700\u8981 <code>this</code> \u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;[data-action=&quot;imgQRCodeCtrl&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _this <span class="token operator">=</span> element<span class="token punctuation">;</span>
  <span class="token function">$</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Base<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>mobile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),e=[o];function c(i,u){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","es6-and-jquery.html.vue"]]);export{r as default};
