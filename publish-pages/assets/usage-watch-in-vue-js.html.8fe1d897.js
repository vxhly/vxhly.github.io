import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as e,c as o,a as n,b as c,d as s,e as l}from"./app.f29ec3fb.js";const i={},u=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u524D\u8A00"),n("p",null,"\u4E00\u4E2A\u5BF9\u8C61, \u952E\u662F\u9700\u8981\u89C2\u5BDF\u7684\u8868\u8FBE\u5F0F, \u503C\u662F\u5BF9\u5E94\u56DE\u8C03\u51FD\u6570\u3002\u503C\u4E5F\u53EF\u4EE5\u662F\u65B9\u6CD5\u540D, \u6216\u8005\u5305\u542B\u9009\u9879\u7684\u5BF9\u8C61\u3002Vue \u5B9E\u4F8B\u5C06\u4F1A\u5728\u5B9E\u4F8B\u5316\u65F6\u8C03\u7528 $watch(), \u904D\u5386 watch \u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u3002")],-1),r=n("h2",{id:"api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),s(" API")],-1),d={href:"https://cn.vuejs.org/v2/api/#watch",target:"_blank",rel:"noopener noreferrer"},k=s("$watch()"),v=l(`<h2 id="\u7B80\u5355\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u7528\u6CD5" aria-hidden="true">#</a> \u7B80\u5355\u7684\u7528\u6CD5</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">cityName</span><span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token string">&quot;nameChange&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">nameChange</span><span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="immediate-\u548C-handler" tabindex="-1"><a class="header-anchor" href="#immediate-\u548C-handler" aria-hidden="true">#</a> immediate \u548C handler</h2><p>\u8FD9\u6837\u4F7F\u7528 watch \u65F6\u6709\u4E00\u4E2A\u7279\u70B9, \u5C31\u662F\u5F53\u503C\u7B2C\u4E00\u6B21\u7ED1\u5B9A\u7684\u65F6\u5019, \u4E0D\u4F1A\u6267\u884C\u76D1\u542C\u51FD\u6570, \u53EA\u6709\u503C\u53D1\u751F\u6539\u53D8\u624D\u4F1A\u6267\u884C\u3002\u5982\u679C\u6211\u4EEC\u9700\u8981\u5728\u6700\u521D\u7ED1\u5B9A\u503C\u7684\u65F6\u5019\u4E5F\u6267\u884C\u51FD\u6570, \u5219\u5C31\u9700\u8981\u7528\u5230 immediate \u5C5E\u6027\u3002</p><p>\u6BD4\u5982\u5F53\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u52A8\u6001\u4F20\u503C\u65F6, \u5B50\u7EC4\u4EF6 props \u9996\u6B21\u83B7\u53D6\u5230\u7236\u7EC4\u4EF6\u4F20\u6765\u7684\u9ED8\u8BA4\u503C\u65F6, \u4E5F\u9700\u8981\u6267\u884C\u51FD\u6570, \u6B64\u65F6\u5C31\u9700\u8981\u5C06 immediate \u8BBE\u4E3A true\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">cityName</span><span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76D1\u542C\u7684\u6570\u636E\u540E\u9762\u5199\u6210\u5BF9\u8C61\u5F62\u5F0F, \u5305\u542B handler \u65B9\u6CD5\u548C immediate, \u4E4B\u524D\u6211\u4EEC\u5199\u7684\u51FD\u6570\u5176\u5B9E\u5C31\u662F\u5728\u5199\u8FD9\u4E2A handler \u65B9\u6CD5\uFF1B</p><p>immediate \u8868\u793A\u5728 watch \u4E2D\u9996\u6B21\u7ED1\u5B9A\u7684\u65F6\u5019, \u662F\u5426\u6267\u884C handler, \u503C\u4E3A <code>true</code> \u5219\u8868\u793A\u5728 watch \u4E2D\u58F0\u660E\u7684\u65F6\u5019, \u5C31\u7ACB\u5373\u6267\u884C handler \u65B9\u6CD5, \u503C\u4E3A false, \u5219\u548C\u4E00\u822C\u4F7F\u7528 watch \u4E00\u6837, \u5728\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u624D\u6267\u884C handler\u3002</p><h2 id="deep" tabindex="-1"><a class="header-anchor" href="#deep" aria-hidden="true">#</a> deep</h2><p>\u5F53\u9700\u8981\u76D1\u542C\u4E00\u4E2A\u5BF9\u8C61\u7684\u6539\u53D8\u65F6, \u666E\u901A\u7684 watch \u65B9\u6CD5\u65E0\u6CD5\u76D1\u542C\u5230\u5BF9\u8C61\u5185\u90E8\u5C5E\u6027\u7684\u6539\u53D8, \u53EA\u6709 data \u4E2D\u7684\u6570\u636E\u624D\u80FD\u591F\u76D1\u542C\u5230\u53D8\u5316, \u6B64\u65F6\u5C31\u9700\u8981 deep \u5C5E\u6027\u5BF9\u5BF9\u8C61\u8FDB\u884C\u6DF1\u5EA6\u76D1\u542C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// ...</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6E deep: true \u5219\u53EF\u4EE5\u76D1\u542C\u5230 cityName.name \u7684\u53D8\u5316, \u6B64\u65F6\u4F1A\u7ED9 cityName \u7684\u6240\u6709\u5C5E\u6027\u90FD\u52A0\u4E0A\u8FD9\u4E2A\u76D1\u542C\u5668, \u5F53\u5BF9\u8C61\u5C5E\u6027\u8F83\u591A\u65F6, \u6BCF\u4E2A\u5C5E\u6027\u503C\u7684\u53D8\u5316\u90FD\u4F1A\u6267\u884C handler\u3002\u5982\u679C\u53EA\u9700\u8981\u76D1\u542C\u5BF9\u8C61\u4E2D\u7684\u4E00\u4E2A\u5C5E\u6027\u503C, \u5219\u53EF\u4EE5\u505A\u4EE5\u4E0B\u4F18\u5316: \u4F7F\u7528\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u76D1\u542C\u5BF9\u8C61\u5C5E\u6027:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;shanghai&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;cityName.name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// ...</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(b,h){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,r,n("p",null,[n("a",d,[k,c(a)])]),v])}var w=t(i,[["render",m],["__file","usage-watch-in-vue-js.html.vue"]]);export{w as default};
