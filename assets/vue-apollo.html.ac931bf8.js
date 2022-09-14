import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c,a as n,e,d as o,b as a}from"./app.a3d402e1.js";const i={},r=o('<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u8BB0\u5F55 vue-appollo \u7684\u5B66\u4E60\u7B14\u8BB0.</p></div><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><h3 id="vue-appollo" tabindex="-1"><a class="header-anchor" href="#vue-appollo" aria-hidden="true">#</a> vue-appollo</h3><h3 id="graphql" tabindex="-1"><a class="header-anchor" href="#graphql" aria-hidden="true">#</a> GraphQL</h3>',4),u={href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"},d=a("GraphQL"),k=a(" \u662F\u4E00\u79CD\u65B0\u7684 API \u7684\u67E5\u8BE2\u8BED\u8A00, \u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u9AD8\u6548\u3001\u5F3A\u5927\u548C\u7075\u6D3B API \u67E5\u8BE2\u3002\u5B83\u662F\u7531 Facebook \u5F00\u53D1\u548C\u5F00\u6E90, \u76EE\u524D\u7531\u6765\u81EA\u4E16\u754C\u5404\u5730\u7684\u5927\u516C\u53F8\u548C\u4E2A\u4EBA\u7EF4\u62A4\u3002GraphQL \u5BF9\u4F60\u7684 API \u4E2D\u7684\u6570\u636E\u63D0\u4F9B\u4E86\u4E00\u5957\u6613\u4E8E\u7406\u89E3\u7684\u5B8C\u6574\u63CF\u8FF0, \u4F7F\u5F97\u5BA2\u6237\u7AEF\u80FD\u591F\u51C6\u786E\u5730\u83B7\u5F97\u5B83\u9700\u8981\u7684\u6570\u636E, \u800C\u4E14\u6CA1\u6709\u4EFB\u4F55\u5197\u4F59\u3002\u5B83\u5F25\u8865\u4E86 RESTful API\uFF08\u5B57\u6BB5\u5197\u4F59, \u6269\u5C55\u6027\u5DEE\u3001\u65E0\u6CD5\u805A\u5408 api\u3001\u65E0\u6CD5\u5B9A\u4E49\u6570\u636E\u7C7B\u578B\u3001\u7F51\u7EDC\u8BF7\u6C42\u6B21\u6570\u591A\uFF09\u7B49\u4E0D\u8DB3\u3002"),v=o('<p>\u6CE8\u610F\uFF1AGraphQL \u662F api \u7684\u67E5\u8BE2\u8BED\u8A00, \u800C\u4E0D\u662F\u6570\u636E\u5E93\u3002\u4ECE\u8FD9\u4E2A\u610F\u4E49\u4E0A\u8BF4, \u5B83\u662F\u6570\u636E\u5E93\u65E0\u5173\u7684, \u800C\u4E14\u53EF\u4EE5\u5728\u4F7F\u7528 API \u7684\u4EFB\u4F55\u73AF\u5883\u4E2D\u6709\u6548\u4F7F\u7528, \u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u4E3A GraphQL \u662F\u57FA\u4E8E API \u4E4B\u4E0A\u7684\u4E00\u5C42\u5C01\u88C5, \u76EE\u7684\u662F\u4E3A\u4E86\u66F4\u597D, \u66F4\u7075\u6D3B\u7684\u9002\u7528\u4E8E\u4E1A\u52A1\u7684\u9700\u6C42\u53D8\u5316</p><h3 id="apollo" tabindex="-1"><a class="header-anchor" href="#apollo" aria-hidden="true">#</a> Apollo</h3><h4 id="\u53EF\u4EE5\u89E3\u51B3\u4EC0\u4E48\u6837\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u89E3\u51B3\u4EC0\u4E48\u6837\u7684\u95EE\u9898" aria-hidden="true">#</a> \u53EF\u4EE5\u89E3\u51B3\u4EC0\u4E48\u6837\u7684\u95EE\u9898</h4><p>\u524D\u540E\u7AEF\u8054\u8C03\u63A5\u53E3\u4E00\u76F4\u4EE5\u6765\u90FD\u662F\u7279\u522B\u8D39\u52B2\u7684\u4E00\u4E2A\u73AF\u8282, \u4F7F\u7528 REST \u63A5\u53E3, \u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F, \u6570\u636E\u7C7B\u578B\uFF08\u6709\u54EA\u4E9B\u5B57\u6BB5, \u5B57\u6BB5\u7684\u7C7B\u578B\uFF09\u90FD\u662F\u540E\u7AEF\u81EA\u5DF1\u9884\u5148\u5B9A\u4E49\u597D\u7684, \u5982\u679C\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\u5E76\u4E0D\u662F\u8C03\u7528\u8005\u6240\u671F\u671B\u7684, \u4F5C\u4E3A\u524D\u7AEF\u7684\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u53BB\u89E3\u51B3</p><ol><li>\u548C\u540E\u7AEF\u6C9F\u901A, \u8BE5\u63A5\u53E3\uFF08\u66F4\u6539\u6570\u636E\u6E90\uFF09</li><li>\u81EA\u5DF1\u505A\u4E00\u4E9B\u9002\u914D\u5DE5\u4F5C\uFF08\u5904\u7406\u6570\u636E\u6E90\uFF09</li></ol><p>\u6709\u8FD9\u79CD\u7ECF\u5386\u7684\u4EBA\u90FD\u77E5\u9053, \u8BA9\u540E\u7AEF\u6539\u63A5\u53E3\u8FD9\u662F\u4E00\u4E2A\u5F88\u4E0D\u73B0\u5B9E\u65B9\u6848, \u5C24\u5176\u662F\u5BF9\u4E8E\u4E09\u7AEF\uFF08web\u3001andriod\u3001ios\uFF09\u516C\u7528\u540C\u4E00\u5957\u540E\u7AEF\u63A5\u53E3\u7684\u60C5\u51B5\u4E0B, \u8BA9\u540E\u7AEF\u6539\u63A5\u53E3\u7684\u7ED3\u6784\u57FA\u672C\u4E0D\u53EF\u80FD, \u6240\u4EE5\u4E00\u822C\u90FD\u662F\u524D\u7AEF\u81EA\u5DF1\u505A\u4E00\u4E9B\u63A5\u53E3\u6570\u636E\u7684\u9002\u914D\u5DE5\u4F5C</p><p>\u5176\u5B9E\u6211\u4EEC\u771F\u7684\u5F88\u5E0C\u671B, \u6211\u4EEC\u9700\u8981\u4EC0\u4E48\u6570\u636E, \u9700\u8981\u4EC0\u4E48\u683C\u5F0F, \u540E\u7AEF\u5C31\u6309\u7167\u4EC0\u4E48\u683C\u5F0F\u7ED9\u6211\u4EEC\u8FD4\u56DE\u4EC0\u4E48\u6837\u7684\u6570\u636E\u7ED3\u6784, \u6211\u4EEC\u8981\u54EA\u4E9B\u5B57\u6BB5, \u540E\u7AEF\u5C31\u53EA\u7ED9\u6211\u4EEC\u8FD4\u56DE\u6211\u4EEC\u9700\u8981\u7684\u8FD9\u4E9B\u5B57\u6BB5, \u5176\u4ED6\u7684\u90FD\u4E0D\u8FD4\u56DE, \u8FD9\u6837, \u524D\u7AEF\u5C31\u548C\u540E\u7AEF\u89E3\u8026\u4E86, \u6211\u4EEC\u4E0D\u7528\u518D\u6BCF\u5929\u548C\u540E\u7AEF\u56E0\u4E3A\u63A5\u53E3\u95EE\u9898\u53BB\u6495\u903C, GraphQL \u5C31\u662F\u4E00\u4E2A\u8FD9\u6837\u7684\u601D\u8DEF\u6765\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u8FD9\u4E2A\u524D\u540E\u7AEF\u8054\u8C03\u63A5\u53E3\u7684\u95EE\u9898, \u5728\u524D\u7AEF\u76F4\u63A5\u5199\u67E5\u8BE2, \u540E\u7AEF\u53EA\u7BA1\u7ED9\u524D\u7AEF\u8FD4\u56DE\u524D\u7AEF\u67E5\u8BE2\u7684\u8FD9\u4E9B\u6570\u636E\uFF1B</p><h3 id="\u9700\u8981\u6D89\u53CA\u5230\u7684\u4F9D\u8D56\u5305\u4EE5\u53CA\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u6D89\u53CA\u5230\u7684\u4F9D\u8D56\u5305\u4EE5\u53CA\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u9700\u8981\u6D89\u53CA\u5230\u7684\u4F9D\u8D56\u5305\u4EE5\u53CA\u53C2\u8003\u94FE\u63A5</h3>',8),h={href:"https://apollo.vuejs.org/zh-cn/guide/",target:"_blank",rel:"noopener noreferrer"},m=a("vue-apollo"),b={href:"https://www.apollographql.com/docs/",target:"_blank",rel:"noopener noreferrer"},g=a("Apollo"),f=n("li",null,null,-1),_=o(`<h2 id="\u4E0A\u624B\u4F8B\u5B50\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u624B\u4F8B\u5B50\u4E00" aria-hidden="true">#</a> \u4E0A\u624B\u4F8B\u5B50\u4E00</h2><h3 id="\u914D\u7F6E-loader" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-loader" aria-hidden="true">#</a> \u914D\u7F6E Loader</h3><p>\u4E3A\u4E86\u5E2E\u52A9\u6211\u4EEC\u66F4\u7B80\u4FBF\u7684\u8C03\u7528 GraphQL API, \u5728\u4F7F\u7528 GraphQL \u65F6\u66F4\u52A0\u65B9\u4FBF, \u50CF\u666E\u901A js \u6A21\u5757\u4E00\u6837\u8F7B\u677E\u81EA\u5982, \u4F7F\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458\u80FD\u5728 js \u6587\u4EF6\u4E2D\u901A\u8FC7 import \u6216 require \u5BFC\u5165 <code>.gql</code> \u548C <code>.graphql</code> \u6587\u4EF6, \u7136\u540E\u76F4\u63A5\u8C03\u7528, \u5E76\u4E14\u8FD8\u9700\u8981\u652F\u6301\u901A\u8FC7 <code>#import</code> \u8BED\u6CD5\u5BFC\u5165\u5176\u5B83 <code>.gql</code> \u6587\u4EF6, \u6BD4\u5982 <code>fragments</code>\u3002\u6211\u4EEC\u5728 <code>vue.config.js</code> \u4E2D\u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E\u9879\u6765\u914D\u7F6E\u52A0\u8F7D <code>GraphQL API</code> \u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// GraphQL Loader</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.graphql$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;graphql-tag/loader&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&quot;graphql-tag/loader&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apollo-\u5BA2\u6237\u7AEF\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#apollo-\u5BA2\u6237\u7AEF\u8FDE\u63A5" aria-hidden="true">#</a> apollo \u5BA2\u6237\u7AEF\u8FDE\u63A5</h3><p>\u4F7F\u7528 <code>vue-apollo</code> \u4E0E <code>apollo-boost</code> \u521B\u5EFA\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8FDE\u63A5</p><p><code>apollo-client/index.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ApolloClient <span class="token keyword">from</span> <span class="token string">&quot;apollo-boost&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueApollo <span class="token keyword">from</span> <span class="token string">&quot;vue-apollo&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueApollo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA\u5BA2\u6237\u7AEF\u8FDE\u63A5</span>
<span class="token keyword">const</span> apolloClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u4F60\u9700\u8981\u5728\u8FD9\u91CC\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84</span>
  <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000/graphql&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9E\u4F8B\u5316 appollo \u5BA2\u6237\u7AEF\u8FDE\u63A5</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> apolloProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueApollo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">defaultClient</span><span class="token operator">:</span> apolloClient<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u5728 <code>main.js</code> \u4E2D\u6CE8\u518C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> apolloProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/apollo-client&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  apolloProvider<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function q(x,w){const s=t("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[n("a",u,[d,e(s)]),k]),v,n("ol",null,[n("li",null,[n("a",h,[m,e(s)])]),n("li",null,[n("a",b,[g,e(s)])]),f]),_])}var j=p(i,[["render",q],["__file","vue-apollo.html.vue"]]);export{j as default};
