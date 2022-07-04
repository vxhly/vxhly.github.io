import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o,c,a as n,b as t,d as s,e as l}from"./app.f29ec3fb.js";const i={},u=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u524D\u8A00"),n("p",null,"\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5728\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u4E2D\u662F\u4E00\u4E2A\u5E38\u89C1\u800C\u53C8\u7B80\u5355\u7684\u9700\u6C42, \u8FD9\u91CC\u4ECB\u7ECD\u5230\u7684\u662F\u5728 vue.js \u9879\u76EE\u4E2D\u4F7F\u7528 wangEditor \u8FD9\u4E00\u6B3E\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u3002")],-1),r=n("h2",{id:"wangeditor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wangeditor","aria-hidden":"true"},"#"),s(" wangEditor")],-1),k=n("p",null,"\u81F3\u4E8E\u8FD9\u6B3E\u7F16\u8F91\u5668\u5E76\u4E0D\u60F3\u505A\u8FC7\u591A\u7684\u4ECB\u7ECD, \u81EA\u884C\u67E5\u9605\u5B98\u65B9\u6587\u6863",-1),d={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"\u76F8\u5173\u94FE\u63A5",-1),m=s("\u5B98\u7F51: "),b={href:"http://www.wangeditor.com/",target:"_blank",rel:"noopener noreferrer"},g=s("www.wangEditor.com"),h=s(" \u6587\u6863: "),q={href:"http://www.kancloud.cn/wangfupeng/wangeditor3/332599",target:"_blank",rel:"noopener noreferrer"},y=s("www.kancloud.cn/wangfupeng/wangeditor3/332599"),f=l(`<h2 id="\u7ED3\u5408-vue-js-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5408-vue-js-\u9879\u76EE" aria-hidden="true">#</a> \u7ED3\u5408 Vue.js \u9879\u76EE</h2><h3 id="\u5EFA\u7ACB-vue-js-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB-vue-js-\u9879\u76EE" aria-hidden="true">#</a> \u5EFA\u7ACB Vue.js \u9879\u76EE</h3><p>\u9996\u5148\u8BE5\u9879\u76EE\u662F\u57FA\u4E8E webpack \u7684\u4E00\u4E2A\u9879\u76EE, \u5982\u679C\u5DF2\u7ECF\u662F\u4E86\u8BF7\u5FFD\u7565</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue init webpack demo
<span class="token builtin class-name">cd</span> demo
<span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-wangeditor-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-wangeditor-\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5 wangEditor \u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> wangeditor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7F16\u5199\u7EC4\u4EF6\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u7EC4\u4EF6\u4EE3\u7801" aria-hidden="true">#</a> \u7F16\u5199\u7EC4\u4EF6\u4EE3\u7801</h3><p>\u5728\u7EC4\u4EF6\u76EE\u5F55\u4E0B\u65B0\u5EFA <code>EditorBar.vue</code> , \u7136\u540E\u5C31\u53EF\u4EE5\u7F16\u5199\u4EE3\u7801\u4E86</p><p>\u8FD9\u8FB9\u4F7F\u7528\u83DC\u5355\u4E0E\u7F16\u8F91\u5668\u533A\u57DF\u5206\u79BB\u4F5C\u4E3A demo, \u8FD9\u8FB9\u4E5F\u5217\u51FA\u4E86\u5728 vue \u4E2D\u5E38\u89C1\u51E0\u79CD API \u8C03\u7528\u65B9\u6CD5</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token constant">E</span> <span class="token keyword">from</span> <span class="token string">&quot;wangeditor&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Editorbar&quot;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">info_</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isClear</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">isClear</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u89E6\u53D1\u6E05\u9664\u6587\u672C\u57DF\u5185\u5BB9</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>info_ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">seteditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>txt<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">seteditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">E</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>toolbar<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>editor<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadImgShowBase64 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// base 64 \u5B58\u50A8\u56FE\u7247</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadImgServer <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u914D\u7F6E\u670D\u52A1\u5668\u7AEF\u5730\u5740</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadImgHeaders <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \u81EA\u5B9A\u4E49 header</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadFileName <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u540E\u7AEF\u63A5\u53D7\u4E0A\u4F20\u6587\u4EF6\u7684\u53C2\u6570\u540D</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadImgMaxSize <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u56FE\u7247\u5927\u5C0F\u9650\u5236\u4E3A 2M</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadImgMaxLength <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// \u9650\u5236\u4E00\u6B21\u6700\u591A\u4E0A\u4F20 3 \u5F20\u56FE\u7247</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadImgTimeout <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4</span>

        <span class="token comment">// \u914D\u7F6E\u83DC\u5355</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>menus <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u9898</span>
          <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u7C97\u4F53</span>
          <span class="token string">&quot;fontSize&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u53F7</span>
          <span class="token string">&quot;fontName&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53</span>
          <span class="token string">&quot;italic&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u659C\u4F53</span>
          <span class="token string">&quot;underline&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u5212\u7EBF</span>
          <span class="token string">&quot;strikeThrough&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5220\u9664\u7EBF</span>
          <span class="token string">&quot;foreColor&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u5B57\u989C\u8272</span>
          <span class="token string">&quot;backColor&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u80CC\u666F\u989C\u8272</span>
          <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u5165\u94FE\u63A5</span>
          <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5217\u8868</span>
          <span class="token string">&quot;justify&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u9F50\u65B9\u5F0F</span>
          <span class="token string">&quot;quote&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F15\u7528</span>
          <span class="token string">&quot;emoticon&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8868\u60C5</span>
          <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u5165\u56FE\u7247</span>
          <span class="token string">&quot;table&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8868\u683C</span>
          <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u5165\u89C6\u9891</span>
          <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u5165\u4EE3\u7801</span>
          <span class="token string">&quot;undo&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u64A4\u9500</span>
          <span class="token string">&quot;redo&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u91CD\u590D</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span>uploadImgHooks <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> editor<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u63D2\u5165\u56FE\u7247\u5931\u8D25\u56DE\u8C03</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> editor<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u56FE\u7247\u4E0A\u4F20\u6210\u529F\u56DE\u8C03</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">timeout</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7F51\u7EDC\u8D85\u65F6\u7684\u56DE\u8C03</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u56FE\u7247\u4E0A\u4F20\u9519\u8BEF\u7684\u56DE\u8C03</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function-variable function">customInsert</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">insertImg<span class="token punctuation">,</span> result<span class="token punctuation">,</span> editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u56FE\u7247\u4E0A\u4F20\u6210\u529F,\u63D2\u5165\u56FE\u7247\u7684\u56DE\u8C03</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>info_ <span class="token operator">=</span> html<span class="token punctuation">;</span> <span class="token comment">// \u7ED1\u5B9A\u5F53\u524D\u9010\u6E10\u5730\u503C</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>info_<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u5185\u5BB9\u540C\u6B65\u5230\u7236\u7EC4\u4EF6\u4E2D</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// \u521B\u5EFA\u5BCC\u6587\u672C\u7F16\u8F91\u5668</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.editor</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.toolbar</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.text</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u8F91\u7236\u7EC4\u4EF6\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u7236\u7EC4\u4EF6\u4EE3\u7801" aria-hidden="true">#</a> \u7F16\u8F91\u7236\u7EC4\u4EF6\u4EE3\u7801</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>editor-bar</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor.info<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:isClear</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isClear<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>editor-bar</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> EditorBar <span class="token keyword">from</span> <span class="token string">&quot;@/components/EditorBar&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isClear</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>info1 <span class="token operator">=</span> val<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      EditorBar<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function w(_,x){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,r,k,n("div",d,[v,n("p",null,[m,n("a",b,[g,t(a)]),h,n("a",q,[y,t(a)])])]),f])}var I=p(i,[["render",w],["__file","usage-wangEditor-in-vue-js.html.vue"]]);export{I as default};
