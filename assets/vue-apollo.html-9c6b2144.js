import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c,d as i,a as n,b as a,f as e,e as o}from"./app-95dad6bf.js";const r={},u=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"记录 vue-appollo 的学习笔记.")],-1),d=o('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="vue-appollo" tabindex="-1"><a class="header-anchor" href="#vue-appollo" aria-hidden="true">#</a> vue-appollo</h3><h3 id="graphql" tabindex="-1"><a class="header-anchor" href="#graphql" aria-hidden="true">#</a> GraphQL</h3>',3),k={href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"},v=o('<p>注意：GraphQL 是 api 的查询语言, 而不是数据库。从这个意义上说, 它是数据库无关的, 而且可以在使用 API 的任何环境中有效使用, 我们可以理解为 GraphQL 是基于 API 之上的一层封装, 目的是为了更好, 更灵活的适用于业务的需求变化</p><h3 id="apollo" tabindex="-1"><a class="header-anchor" href="#apollo" aria-hidden="true">#</a> Apollo</h3><h4 id="可以解决什么样的问题" tabindex="-1"><a class="header-anchor" href="#可以解决什么样的问题" aria-hidden="true">#</a> 可以解决什么样的问题</h4><p>前后端联调接口一直以来都是特别费劲的一个环节, 使用 REST 接口, 接口返回的数据格式, 数据类型（有哪些字段, 字段的类型）都是后端自己预先定义好的, 如果返回的数据格式并不是调用者所期望的, 作为前端的我们可以通过以下两种方式去解决</p><ol><li>和后端沟通, 该接口（更改数据源）</li><li>自己做一些适配工作（处理数据源）</li></ol><p>有这种经历的人都知道, 让后端改接口这是一个很不现实方案, 尤其是对于三端（web、andriod、ios）公用同一套后端接口的情况下, 让后端改接口的结构基本不可能, 所以一般都是前端自己做一些接口数据的适配工作</p><p>其实我们真的很希望, 我们需要什么数据, 需要什么格式, 后端就按照什么格式给我们返回什么样的数据结构, 我们要哪些字段, 后端就只给我们返回我们需要的这些字段, 其他的都不返回, 这样, 前端就和后端解耦了, 我们不用再每天和后端因为接口问题去撕逼, GraphQL 就是一个这样的思路来帮助我们解决这个前后端联调接口的问题, 在前端直接写查询, 后端只管给前端返回前端查询的这些数据；</p><h3 id="需要涉及到的依赖包以及参考链接" tabindex="-1"><a class="header-anchor" href="#需要涉及到的依赖包以及参考链接" aria-hidden="true">#</a> 需要涉及到的依赖包以及参考链接</h3>',8),h={href:"https://apollo.vuejs.org/zh-cn/guide/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.apollographql.com/docs/",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,null,-1),g=o(`<h2 id="上手例子一" tabindex="-1"><a class="header-anchor" href="#上手例子一" aria-hidden="true">#</a> 上手例子一</h2><h3 id="配置-loader" tabindex="-1"><a class="header-anchor" href="#配置-loader" aria-hidden="true">#</a> 配置 Loader</h3><p>为了帮助我们更简便的调用 GraphQL API, 在使用 GraphQL 时更加方便, 像普通 js 模块一样轻松自如, 使前端开发人员能在 js 文件中通过 import 或 require 导入 <code>.gql</code> 和 <code>.graphql</code> 文件, 然后直接调用, 并且还需要支持通过 <code>#import</code> 语法导入其它 <code>.gql</code> 文件, 比如 <code>fragments</code>。我们在 <code>vue.config.js</code> 中加入以下配置项来配置加载 <code>GraphQL API</code> 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apollo-客户端连接" tabindex="-1"><a class="header-anchor" href="#apollo-客户端连接" aria-hidden="true">#</a> apollo 客户端连接</h3><p>使用 <code>vue-apollo</code> 与 <code>apollo-boost</code> 创建一个客户端连接</p><p><code>apollo-client/index.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ApolloClient <span class="token keyword">from</span> <span class="token string">&quot;apollo-boost&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueApollo <span class="token keyword">from</span> <span class="token string">&quot;vue-apollo&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueApollo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建客户端连接</span>
<span class="token keyword">const</span> apolloClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 你需要在这里使用绝对路径</span>
  <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000/graphql&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 实例化 appollo 客户端连接</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> apolloProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueApollo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">defaultClient</span><span class="token operator">:</span> apolloClient<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在 <code>main.js</code> 中注册</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> apolloProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/apollo-client&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  apolloProvider<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function f(q,_){const s=t("ExternalLinkIcon");return l(),c("div",null,[u,i(" more "),d,n("p",null,[n("a",k,[a("GraphQL"),e(s)]),a(" 是一种新的 API 的查询语言, 它提供了一种更高效、强大和灵活 API 查询。它是由 Facebook 开发和开源, 目前由来自世界各地的大公司和个人维护。GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述, 使得客户端能够准确地获得它需要的数据, 而且没有任何冗余。它弥补了 RESTful API（字段冗余, 扩展性差、无法聚合 api、无法定义数据类型、网络请求次数多）等不足。")]),v,n("ol",null,[n("li",null,[n("a",h,[a("vue-apollo"),e(s)])]),n("li",null,[n("a",m,[a("Apollo"),e(s)])]),b]),g])}const y=p(r,[["render",f],["__file","vue-apollo.html.vue"]]);export{y as default};