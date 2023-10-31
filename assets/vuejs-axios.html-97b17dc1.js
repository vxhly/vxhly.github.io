import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,d as c,a as n,b as s,f as i,e as l}from"./app-16d9b7db.js";const u={},r=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"前后端分离的时候, 通常后端要求前端发送 JSON 请求, 而后端返回的格式也是 JSON 的, 这时候就需要一个中间插件 axios 上场, 本篇文章主要介绍在 vuejs 项目中是如何二次封装 axios 的, 本篇适宜阅读人群为有一些的 Vue.js 的开发基础经验。")],-1),k=n("h2",{id:"关于-axios",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于-axios","aria-hidden":"true"},"#"),s(" 关于 axios")],-1),d={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"介绍",-1),m={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="二次封装-axios" tabindex="-1"><a class="header-anchor" href="#二次封装-axios" aria-hidden="true">#</a> 二次封装 axios</h2><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i axios
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础请求地址" tabindex="-1"><a class="header-anchor" href="#基础请求地址" aria-hidden="true">#</a> 基础请求地址</h3><p>一般来说一个项目至少对应一个后端 API 服务地址, 所以需要一个配置文件来存储这个后端 API 地址</p><p>在 <code>src/config.js</code> 中写入以下配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> baseHost <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">API1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dev_host</span><span class="token operator">:</span> <span class="token string">&quot;http://[ip]:[port]/v[n]/api/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 调试模式</span>
    <span class="token literal-property property">pro_host</span><span class="token operator">:</span> <span class="token string">&quot;http://[ip]:[port]/v[n]/api/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 线上模式</span>
    <span class="token literal-property property">file_host</span><span class="token operator">:</span> <span class="token string">&quot;http://[ip]:[port]/v[n]/file/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 文件存储前置 URL</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token constant">API2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dev_host</span><span class="token operator">:</span> <span class="token string">&quot;http://[ip]:[port]/v[n]/api/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 调试模式</span>
    <span class="token literal-property property">pro_host</span><span class="token operator">:</span> <span class="token string">&quot;http://[ip]:[port]/v[n]/api/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 线上模式</span>
    <span class="token literal-property property">file_host</span><span class="token operator">:</span> <span class="token string">&quot;http://[ip]:[port]/v[n]/file/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 文件存储前置 URL</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 还有其他的 API 往下加</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>src/API.vue</code> 中添加后端的 API 地址, 此时添加的 API 地址无需在前面的 URL 部分写出来, 参考如下</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;API&quot;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">UserLogin</span><span class="token operator">:</span> <span class="token string">&quot;/user/UserLogin&quot;</span><span class="token punctuation">,</span> <span class="token comment">// GET 用户登录</span>

    <span class="token literal-property property">GetUserInfo</span><span class="token operator">:</span> <span class="token string">&quot;/user/GetUserInfo&quot;</span><span class="token punctuation">,</span> <span class="token comment">// GET 获取用户信息</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">logout</span><span class="token operator">:</span> <span class="token string">&quot;/logout&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 登出账号</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你的 <code>src/main.js</code> 中注册这些 API 地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token constant">API</span> <span class="token keyword">from</span> <span class="token string">&quot;./API.vue&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 后端API接口地址</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token constant">API</span> <span class="token operator">=</span> <span class="token constant">API</span><span class="token punctuation">;</span> <span class="token comment">// 挂载到Vue实例上面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正式封装-axios" tabindex="-1"><a class="header-anchor" href="#正式封装-axios" aria-hidden="true">#</a> 正式封装 axios</h3><p>创建目录结构 <code>src/libraries/axios</code> , 并在这个目录下创建两个核心文件 <code>featch.js</code> 和 <code>http.js</code> <code>featch.js</code> 文件主要编写 axios 的基础配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 axios 实例</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 返回数据类型</span>
  <span class="token comment">// baseURL: serverURL, // 请求 URL</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">7000</span><span class="token punctuation">,</span> <span class="token comment">// 超时时间</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">// 最大发包长度</span>
  <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 重试次数</span>
  <span class="token literal-property property">retryDelay</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">// 重试延时, 3秒重试一次</span>
  <span class="token function-variable function">shouldRetry</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 重试条件, 默认只要是错误都需要重试</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// http request 拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在 headers 头上添加参数</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;application/json;charset=UTF-8&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// http response 拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>
      code
      <span class="token comment">// 这边可以对后端的一些状态码进行处理</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> config <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token comment">// If config does not exist or the retry option is not set, reject</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config <span class="token operator">||</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>retry<span class="token punctuation">)</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Set the variable for keeping track of the retry count</span>
    config<span class="token punctuation">.</span>__retryCount <span class="token operator">=</span> config<span class="token punctuation">.</span>__retryCount <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// Check if we&#39;ve maxed out the total number of retries</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>__retryCount <span class="token operator">&gt;=</span> config<span class="token punctuation">.</span>retry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Reject with the error</span>
      <span class="token function">Notification</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;请求超时&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;当前网络不佳, 请稍后刷新重试&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Increase the retry count</span>
    config<span class="token punctuation">.</span>__retryCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// Create new promise to handle exponential backoff</span>
    <span class="token keyword">var</span> backoff <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>retryDelay <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Return the promise in which recalls axios to retry the request</span>
    <span class="token keyword">return</span> backoff<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> instance<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>http.js</code> 主要封装 <code>GET</code> 、 <code>POST</code> 、 <code>PATCH</code> 、 <code>DELETE</code> 、 <code>PUT</code> 方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> featch <span class="token keyword">from</span> <span class="token string">&quot;./featch&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> omitBy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> baseHost <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/config&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> serverURL <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getURL</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;production&quot;</span><span class="token operator">:</span>
      serverURL <span class="token operator">=</span> baseHost<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>pro_host<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;development&quot;</span><span class="token operator">:</span>
      serverURL <span class="token operator">=</span> baseHost<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>dev_host<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;testing&quot;</span><span class="token operator">:</span>
      serverURL <span class="token operator">=</span> baseHost<span class="token punctuation">.</span>test_host<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> serverURL<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@method</span> httpGet
 *
 * import <span class="token punctuation">{</span> httpGet <span class="token punctuation">}</span> from &#39;@/libraries/axios/http&#39;
 *
 * httpGet(&#39;&#39;, payload).then().catch()
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 请求地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">payload</span> 请求参数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">type</span> 设置 baseURL
 */</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> httpGet <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;API1&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    serverURL <span class="token operator">=</span> <span class="token function">getURL</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> serverURL<span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> featch<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> payload<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@method</span> httpPost
 *
 * import <span class="token punctuation">{</span> httpPost <span class="token punctuation">}</span> from &#39;@/libraries/axios/http&#39;
 *
 * httpPost(&#39;&#39;, payload).then().catch()
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 请求地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">payload</span> 请求参数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> httpPost <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;API1&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    serverURL <span class="token operator">=</span> <span class="token function">getURL</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> serverURL<span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> featch<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@method</span> httpPut
 *
 * import <span class="token punctuation">{</span> httpPut <span class="token punctuation">}</span> from &#39;@/libraries/axios/http&#39;
 *
 * httpPut(&#39;&#39;, payload).then().catch()
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 请求地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">payload</span> 请求参数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> httpPut <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;API1&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    serverURL <span class="token operator">=</span> <span class="token function">getURL</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> serverURL<span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> featch<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@method</span> httpPatch
 *
 * import <span class="token punctuation">{</span> httpPatch <span class="token punctuation">}</span> from &#39;@/libraries/axios/http&#39;
 *
 * httpPatch(&#39;&#39;, payload).then().catch()
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 请求地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">payload</span> 请求参数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> httpPatch <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;API1&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    serverURL <span class="token operator">=</span> <span class="token function">getURL</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> serverURL<span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> featch<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@method</span> httpDelte
 *
 * import <span class="token punctuation">{</span> httpDelte <span class="token punctuation">}</span> from &#39;@/libraries/axios/http&#39;
 *
 * httpDelte(&#39;&#39;, payload).then().catch()
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span> 请求地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">payload</span> 请求参数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> httpDelte <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;API1&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    serverURL <span class="token operator">=</span> <span class="token function">getURL</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> serverURL<span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> featch<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> payload<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> httpPost <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/libraries/axios/http&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">API</span><span class="token punctuation">.</span>user<span class="token punctuation">.</span>UserLogin<span class="token punctuation">;</span>
    <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">userPassword</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">httpPost</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里的 res 即是后端返回的数据结构</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function y(h,w){const a=p("ExternalLinkIcon");return e(),o("div",null,[r,c(" more "),k,n("div",d,[v,n("p",null,[s("Axios 是一个基于 promise 的 HTTP 库, 可以用在浏览器和 node.js 中。更多的介绍, 米娜桑上 GitHub 查看官方说明, "),n("a",m,[s("axios"),i(a)]),s(", 这里不做过多的阐述")])]),b])}const q=t(u,[["render",y],["__file","vuejs-axios.html.vue"]]);export{q as default};
