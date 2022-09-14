import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as l,a as n,e as t,d as p,b as s}from"./app.a3d402e1.js";const u={},i=p(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u8BB2\u5230\u524D\u7AEF\u7684\u6846\u67B6, \u5927\u5BB6\u60F3\u5FC5\u90FD\u80FD\u8131\u53E3\u800C\u51FA: Angular\u3001React\u3001Vue, \u90A3\u4E48\u8FD9\u51E0\u4E2A\u6846\u67B6\u7684\u4F18\u7F3A\u70B9, \u4EE5\u53CA\u5728\u9879\u76EE\u5F53\u4E2D\u5982\u4F55\u6289\u62E9\u6846\u67B6\u7684\u4F7F\u7528\u7B49\u7B49, \u672C\u7BC7\u5C31\u5C06\u4ECB\u7ECD\u8FD9\u4E09\u5927\u6846\u67B6\u7684\u4F7F\u7528\u611F\u53D7\u3002</p></div><h2 id="\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u53CC\u5411\u7ED1\u5B9A</h2><p>\u5F00\u7BC7\u5C31\u7528\u8FD9\u4E09\u5927\u6846\u67B6\u7684\u53CC\u5411\u7ED1\u5B9A\u7684\u5B9E\u73B0\u4F5C\u4E3A\u4E00\u4E2A demo \u5F15\u5165, \u901A\u8FC7\u8FD9\u4E09\u5927\u6846\u67B6\u7684\u53CC\u5411\u7ED1\u5B9A\u80FD\u591F\u7B80\u5355\u7684\u4E86\u89E3\u4E09\u5927\u6846\u67B6\u5728\u7F16\u7801\u4E0A\u7684\u4E00\u4E9B\u533A\u522B\u4EE5\u53CA\u5176\u7684\u7B80\u6613\u7A0B\u5EA6, \u4ECE\u4E0B\u9762\u7684\u4EE3\u7801\u7B80\u6D01\u7A0B\u5EA6\u6765\u8BB2, vue.js \u7ED9\u6211\u4EEC\u5E26\u6765\u7684\u4F53\u9A8C\u8FD8\u662F\u4E0D\u9519\u7684</p><h3 id="angular" tabindex="-1"><a class="header-anchor" href="#angular" aria-hidden="true">#</a> Angular</h3><p><code>\u7279\u70B9</code></p><ul><li>\u57FA\u4E8E MVVM \u5F00\u53D1\u6A21\u5F0F</li><li>Dependency Injection\uFF08\u4F9D\u8D56\u6CE8\u5165\uFF09</li><li>TypeScript</li><li>\u6A21\u5757\u5316</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">ng-app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyModule<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ng-controller</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyCtrl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ng-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/angular.js/1.7.8/angular.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// \u8FD9\u8FB9\u4F7F\u7528\u5230\u7684\u662F\u63A8\u65AD\u578B\u4F9D\u8D56\u6CE8\u5165</span>
      <span class="token keyword">const</span> MyModule <span class="token operator">=</span> angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">&quot;MyModule&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> <span class="token function-variable function">MyCtrl</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $scope<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;Hello world !!!&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      MyModule<span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">&quot;MyCtrl&quot;</span><span class="token punctuation">,</span> MyCtrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3><p><code>\u7279\u70B9</code></p><ul><li>Virtual DOM</li><li>\u58F0\u660E\u5F0F\u8BBE\u8BA1</li><li>\u9AD8\u6548\u3001\u7075\u6D3B</li><li>JSX</li><li>\u7EC4\u4EF6\u5316</li><li>\u5355\u5411\u54CD\u5E94\u7684\u6570\u636E\u6D41</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/react/16.9.0-alpha.0/umd/react.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/react-dom/16.8.6/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u6CE8\u610F\u8FD9\u8FB9\u7684 babel \u53EA\u80FD\u7528 5.x \u4EE5\u4E0B\u7248\u672C\u7684 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/babel-core/5.8.38/browser.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/babel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// \u8FD9\u8FB9\u4F7F\u7528\u5230\u7684\u662F JSX \u8BED\u6CD5,React \u5185\u90E8\u5E76\u6CA1\u6709\u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A,\u6240\u4EE5\u8FD9\u8FB9\u4F7F\u7528\u4E86 input \u7684 change  \u4E8B\u4EF6\u6765\u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A</span>
      <span class="token keyword">class</span> <span class="token class-name">Input</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello world !!!&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span> <span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Input <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3><p><code>\u7279\u70B9</code></p><ul><li>\u57FA\u4E8E MVVM \u5F00\u53D1\u6A21\u5F0F</li><li>\u6E10\u8FDB\u5F0F</li><li>\u6570\u636E\u9A71\u52A8\u53CB\u597D</li><li>\u7EC4\u4EF6\u5316</li><li>\u8F7B\u91CF</li><li>\u7B80\u6D01</li><li>\u5FEB\u901F</li><li>\u6A21\u5757\u5316\u53CB\u597D</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/vue/2.6.10/vue.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello world !!!&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="starts" tabindex="-1"><a class="header-anchor" href="#starts" aria-hidden="true">#</a> Starts</h2>`,16),k=n("thead",null,[n("tr",null,[n("th",null,"package"),n("th",null,"starts"),n("th",null,"forks"),n("th",null,"issues"),n("th",null,"created"),n("th",null,"version"),n("th",null,"downloads"),n("th",null,"size")])],-1),r={href:"https://github.com/angular/angular",target:"_blank",rel:"noopener noreferrer"},d=s("angular"),v=n("td",null,"47.2k",-1),g=n("td",null,"12.6k",-1),m=n("td",null,"2k+",-1),h=n("td",null,"Jan 6, 2010",-1),b=n("td",null,null,-1),q=n("td",null,null,-1),_=n("td",null,null,-1),y=n("p",null,[n("img",{src:"https://img.shields.io/npm/v/angular.svg",alt:"npm"}),s(" | "),n("img",{src:"https://img.shields.io/npm/dm/angular.svg",alt:"npm dowloads"}),s(" | "),n("img",{src:"https://img.shields.io/bundlephobia/min/angular.svg",alt:"npm bundle size"})],-1),f=s("| | "),w={href:"https://github.com/facebook/react",target:"_blank",rel:"noopener noreferrer"},x=s("react"),j=s(" | 127k | 23k | 400+ | May 25, 2013 |"),M=n("p",null,[n("img",{src:"https://img.shields.io/npm/v/react.svg",alt:"npm"}),s(" | "),n("img",{src:"https://img.shields.io/npm/dm/react.svg",alt:"npm dowloads"}),s(" | "),n("img",{src:"https://img.shields.io/bundlephobia/min/react.svg",alt:"npm bundle size"})],-1),V=s("| | "),C={href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"},D=s("vue"),A=s(" | 136k | 19.3k | 190+ | Jul 29, 2013 |"),T=p(`<p><img src="https://img.shields.io/npm/v/vue.svg" alt="npm"> | <img src="https://img.shields.io/npm/dm/vue.svg" alt="npm dowloads"> | <img src="https://img.shields.io/bundlephobia/min/vue.svg" alt="npm bundle size"></p><pre><code> |
</code></pre><h2 id="npm-\u4E0B\u8F7D\u8D8B\u52BF" tabindex="-1"><a class="header-anchor" href="#npm-\u4E0B\u8F7D\u8D8B\u52BF" aria-hidden="true">#</a> npm \u4E0B\u8F7D\u8D8B\u52BF</h2>`,3),R={href:"https://npmcharts.com/compare/react,angular,vue?minimal=true&interval=7",target:"_blank",rel:"noopener noreferrer"},S=s("npm charts"),O=p('<h2 id="vue-\u4E0E-angular-js-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vue-\u4E0E-angular-js-\u7684\u533A\u522B" aria-hidden="true">#</a> Vue \u4E0E Angular.js \u7684\u533A\u522B</h2><h3 id="\u76F8\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u70B9" aria-hidden="true">#</a> \u76F8\u540C\u70B9</h3><ul><li>\u90FD\u652F\u6301\u6307\u4EE4\u3001\u5185\u7F6E\u6307\u4EE4\u548C\u81EA\u5B9A\u4E49\u6307\u4EE4</li><li>\u90FD\u652F\u6301\u8FC7\u6EE4\u5668\u3001\u5185\u7F6E\u8FC7\u6EE4\u5668\u548C\u81EA\u52A8\u4E00\u8FC7\u6EE4\u5668</li><li>\u90FD\u652F\u6301\u53CC\u5411\u7ED1\u5B9A</li><li>\u90FD\u652F\u6301\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</li><li>\u90FD\u4E0D\u652F\u6301\u4F4E\u7AEF\u6D4F\u89C8\u5668</li></ul><h3 id="\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u70B9" aria-hidden="true">#</a> \u4E0D\u540C\u70B9</h3><ul><li>Angular.js \u7684\u5B66\u4E60\u6210\u672C\u6BD4 Vue.js \u9AD8, \u6BD4\u5982\u589E\u52A0\u4E86 <code>Dependency Injection\uFF08\u4F9D\u8D56\u6CE8\u5165\uFF09</code> \u7279\u6027, \u800C Vue.js \u672C\u8EAB\u63D0\u4F9B\u7684 API \u90FD\u6BD4\u8F83\u7B80\u5355\u3001\u76F4\u89C2\uFF1B\u800C\u6700\u65B0\u7248\u7684 Angular.js \u76F4\u63A5\u91C7\u7528 TypeScript \u7F16\u5199, Vue.js 3.x \u7248\u672C\u867D\u7136\u6E90\u7801\u662F\u91C7\u7528 TypeScript \u7F16\u5199, \u4F46\u662F\u5B9E\u9645\u9879\u76EE\u4E2D\u53EF\u4EE5\u4E0D\u7528 TypeScript, \u5373\u662F\u4E00\u4E2A\u6E10\u8FDB\u5F0F\u6846\u67B6</li><li>\u5728\u6027\u80FD\u4E0A, Angular.js \u4F9D\u8D56\u5BF9\u6570\u636E\u505A <code>\u810F\u68C0\u67E5</code> , \u6240\u4EE5 Watcher \u8D8A\u591A\u8D8A\u6162\u3002Vue.js \u4F7F\u7528\u57FA\u4E8E\u4F9D\u8D56\u8FFD\u8E2A\u7684\u89C2\u5BDF\u5E76\u4E14\u4F7F\u7528\u5F02\u6B65\u961F\u5217\u66F4\u65B0, \u6240\u4EE5\u7684\u6570\u636E\u90FD\u662F\u72EC\u7ACB\u89E6\u53D1\u7684</li></ul><h2 id="vue-\u4E0E-react-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vue-\u4E0E-react-\u7684\u533A\u522B" aria-hidden="true">#</a> Vue \u4E0E React \u7684\u533A\u522B</h2><h3 id="\u76F8\u540C\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u70B9-1" aria-hidden="true">#</a> \u76F8\u540C\u70B9</h3><ul><li>react \u91C7\u7528\u7279\u6B8A\u7684 JSX \u8BED\u6CD5, Vue.js \u5728\u7EC4\u4EF6\u5F00\u53D1\u4E2D\u4E5F\u63A8\u5D07\u7F16\u5199 <code>.vue</code> \u7279\u6B8A\u6587\u4EF6\u683C\u5F0F, \u5BF9\u6587\u4EF6\u5185\u5BB9\u90FD\u6709\u4E00\u5B9A\u7684\u7EA6\u5B9A, \u4E24\u8005\u90FD\u9700\u8981\u7F16\u8BD1\u540E\u4F7F\u7528</li><li>\u4E2D\u5FC3\u601D\u60F3: \u4E00\u5207\u90FD\u662F\u7EC4\u4EF6, \u7EC4\u4EF6\u5B9E\u4F8B\u4E4B\u95F4\u53EF\u4EE5\u4E92\u76F8\u5D4C\u5957</li><li>\u90FD\u63D0\u4F9B\u5408\u7406\u7684\u94A9\u5B50\u51FD\u6570, \u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u5B9A\u5236\u5316\u7684\u53BB\u5904\u7406\u9700\u6C42</li><li>\u90FD\u4E0D\u5185\u7F6E\u51FD\u6570 AJAX, Route \u7B49\u529F\u80FD\u548C\u5230\u548C\u884C\u5305, \u800C\u662F\u4EE5\u63D2\u4EF6\u7684\u65B9\u5F0F\u52A0\u8F7D</li><li>\u5728\u7EC4\u4EF6\u5F00\u53D1\u4E2D\u90FD\u652F\u6301 mixins \u7684\u7279\u6027</li></ul><h3 id="\u4E0D\u540C\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u70B9-1" aria-hidden="true">#</a> \u4E0D\u540C\u70B9</h3><ul><li>React \u4F9D\u8D56 Virtual DOM, \u800C Vue.js \u4F7F\u7528\u7684\u662F DOM \u6A21\u677F\u3002React \u91C7\u7528 Virtual DOM \u4F1A\u5BF9\u6E32\u67D3\u51FA\u6765\u7684\u7ED3\u679C\u505A <code>\u810F\u68C0\u67E5</code></li><li>React \u4E0D\u652F\u6301\u53CC\u5411\u7ED1\u5B9A\uFF08\u9700\u8981\u81EA\u5DF1\u7F16\u5199\u76F8\u5173\u7684 change \u51FD\u6570\uFF09</li><li>Vue.js \u5728\u6A21\u677F\u4E2D\u63D0\u4F9B\u4E86\u6307\u4EE4\u3001\u8FC7\u6EE4\u5668\u7B49, \u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF, \u5FEB\u6377\u7684\u64CD\u4F5C DOM</li></ul>',10);function I(E,X){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("table",null,[k,n("tbody",null,[n("tr",null,[n("td",null,[n("a",r,[d,t(a)])]),v,g,m,h,b,q,_])])]),y,n("p",null,[f,n("a",w,[x,t(a)]),j]),M,n("p",null,[V,n("a",C,[D,t(a)]),A]),T,n("p",null,[n("a",R,[S,t(a)])]),O])}var z=e(u,[["render",I],["__file","talk-web-frame.html.vue"]]);export{z as default};
