import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,d as l,a as n,b as s,f as p,e as a}from"./app-265bffc0.js";const u="/assets/vue-performance-1.png",r="/assets/vue-performance-2.png",d="/assets/vue-performance-3.png",k={},v=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"随着 Vue 项目越做越大, 依赖的第三方 npm 包越来越多, 构建之后的文件也会越来越大, 尤其是 vendor.js, 甚至会达到 2M 左右, 为了解决这个问题, 需要做一些探索, 在几乎不需要改动业务代码的情况下, 找到了几种有明显效果的优化方案 ---- CDN + Gzip。")],-1),m=a('<h2 id="好景不长" tabindex="-1"><a class="header-anchor" href="#好景不长" aria-hidden="true">#</a> 好景不长</h2><p>先来看看没有任何优化的项目需要优化些什么</p><h3 id="首先是文件大小" tabindex="-1"><a class="header-anchor" href="#首先是文件大小" aria-hidden="true">#</a> 首先是文件大小</h3><p>这是一个通过 Vue-cli 3.0 构建的 demo 项目, 先执行一下 <code>npm run build</code> , 当然也可以通过 <code>vue ui</code> 的 GUI 界面进行编译</p><figure><img src="'+u+'" alt="vue-performance" tabindex="0" loading="lazy"><figcaption>vue-performance</figcaption></figure><p>可以看到这个默认项目的各个 JS 文件还可以, 不算是比较大的</p><h3 id="加载速度" tabindex="-1"><a class="header-anchor" href="#加载速度" aria-hidden="true">#</a> 加载速度</h3><p>禁用浏览器缓存, 网速限定为 Fast 3G 下的 Network 图(运行在本地的 nginx 服务器上)</p><figure><img src="'+r+'" alt="vue-performance" tabindex="0" loading="lazy"><figcaption>vue-performance</figcaption></figure><p>嗯~ , 故意调了个比较慢的网络环境, 可以看到这边的加载速度真的慢到极致了</p><h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2>',11),b=n("code",null,"vue",-1),g=n("code",null,"vue-router",-1),h=n("code",null,"vuex",-1),f=n("code",null,"element-ui",-1),y=n("code",null,"axios",-1),q=n("code",null,"loadsh",-1),x={href:"https://www.bootcdn.cn/",target:"_blank",rel:"noopener noreferrer"},_=a(`<h3 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> externals <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VueRouter&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">vuex</span><span class="token operator">:</span> <span class="token string">&quot;Vuex&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;element-ui&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ELEMENT&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">_</span><span class="token operator">:</span> <span class="token string">&quot;lodash&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cdn <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 开发环境</span>
  <span class="token literal-property property">dev</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.7/theme-chalk/index.css&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 生产环境</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.7/theme-chalk/index.css&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;https://cdn.bootcss.com/vue/2.5.17/vue.min.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;https://cdn.bootcss.com/axios/0.18.0/axios.min.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.7/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> myConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1\\. 生产环境 npm 包转 CDN</span>
      myConfig<span class="token punctuation">.</span>externals <span class="token operator">=</span> externals<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/**
       * 关闭host check,方便使用ngrok之类的内网转发工具
       */</span>
      myConfig<span class="token punctuation">.</span>devServer <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">disableHostCheck</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> myConfig<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 删除懒加载模块的prefetch,降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * 而且预渲染时生成的prefetch标签是modern版本的,低版本浏览器是不需要的
     */</span>
    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;prefetch&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 添加CDN参数到htmlWebpackPlugin配置中
     */</span>
    config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cdn <span class="token operator">=</span> cdn<span class="token punctuation">.</span>build<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cdn <span class="token operator">=</span> cdn<span class="token punctuation">.</span>dev<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> args<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html" aria-hidden="true">#</a> index.html</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= BASE_URL %&gt;favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 使用CDN加速的CSS文件,配置在vue.config.js下 --&gt;</span>
    &lt;% for (var i in
    htmlWebpackPlugin.options.cdn&amp;&amp;htmlWebpackPlugin.options.cdn.css) { %&gt;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= htmlWebpackPlugin.options.cdn.css[i] %&gt;<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= htmlWebpackPlugin.options.cdn.css[i] %&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    &lt;% } %&gt;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span>
        <span class="token punctuation">&gt;</span></span>We&#39;re sorry but demo doesn&#39;t work properly without JavaScript enabled.
        Please enable it to continue.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span>
      <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 使用CDN加速的JS文件,配置在vue.config.js下 --&gt;</span>
    &lt;% for (var i in
    htmlWebpackPlugin.options.cdn&amp;&amp;htmlWebpackPlugin.options.cdn.js) { %&gt;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= htmlWebpackPlugin.options.cdn.js[i] %&gt;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    &lt;% } %&gt;
    <span class="token comment">&lt;!-- built files will be auto injected --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化对比" tabindex="-1"><a class="header-anchor" href="#优化对比" aria-hidden="true">#</a> 优化对比</h3><p>再来看看使用了 CDN 之后的编译大小</p><figure><img src="`+d+'" alt="vue-performance" tabindex="0" loading="lazy"><figcaption>vue-performance</figcaption></figure><p>天哪!!! <code>chunk-vendors</code> 这个文件小了不是一点点</p><p><code>chunk-vendors</code> 该文件打包了 vue, vuex, vue-router 等依赖资源, 这也是这个文件之所以大的原因</p><p>因为是优化产品模式下的代码, 这里就构建一个 Nginx 服务器来查看加载的情况</p>',10),j={href:"https://www.baidu.com/link?url=A3pEi1xHX8pn-3a6xug88gaY_LZPuY9nlZQ51dGXsNW&wd=&eqid=e847c04100012f59000000065bd1d0be",target:"_blank",rel:"noopener noreferrer"},w=a(`<h2 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> Gzip</h2><p>使用 Gzip 两个明显的好处, 一是可以减少存储空间, 二是通过网络传输文件时, 可以减少传输的时间。</p><p>开启 gzip 的方式主要是通过修改服务器配置, 这里贴出 nginx 的配置方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
    gzip on;
    gzip_static on;
    gzip_min_length 1024;
    gzip_buffers 4 16 k;
    gzip_comp_level 2;
    gzip_types text / plain application / javascript application / x - javascript text / css application / xml text / javascript application / x - httpd - php application / vnd.ms - fontobject font / ttf font / opentype font / x - woff image / svg + xml;
    gzip_vary off;
    gzip_disable &quot;MSIE [1-6]\\.&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然只有 nginx 这边开启了 gzip 是不够的, webpack 工具提供了 productionGzip 来开启 gzip</p><p>在此之前还需安装一个依赖项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> compression-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>补全 <code>vue.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> CompressionWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> externals <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;vue&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue-router&#39;</span><span class="token operator">:</span> <span class="token string">&#39;VueRouter&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vuex&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Vuex&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;axios&#39;</span><span class="token operator">:</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;element-ui&#39;</span><span class="token operator">:</span> <span class="token string">&#39;ELEMENT&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;_&#39;</span><span class="token operator">:</span> <span class="token string">&#39;lodash&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> cdn <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 开发环境</span>
    <span class="token literal-property property">dev</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.7/theme-chalk/index.css&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 生产环境</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.7/theme-chalk/index.css&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;https://cdn.bootcss.com/vue/2.5.17/vue.min.js&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;https://cdn.bootcss.com/axios/0.18.0/axios.min.js&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.7/index.js&#39;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 是否使用gzip</span>
<span class="token keyword">const</span> productionGzip <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">// 需要gzip压缩的文件后缀</span>
<span class="token keyword">const</span> productionGzipExtensions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> myConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 1\\. 生产环境 npm 包转 CDN</span>
                myConfig<span class="token punctuation">.</span>externals <span class="token operator">=</span> externals
                myConfig<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

                <span class="token comment">// 构建时开启gzip,降低服务器压缩对CPU资源的占用,服务器也要相应开启gzip</span>
                productionGzip <span class="token operator">&amp;&amp;</span> myConfig<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;\\\\.(&#39;</span> <span class="token operator">+</span> productionGzipExtensions<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;|&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> &#39;<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token doc-comment comment">/**
                     * 关闭host check,方便使用ngrok之类的内网转发工具
                     */</span>
                    myConfig<span class="token punctuation">.</span>devServer <span class="token operator">=</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">disableHostCheck</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> myConfig
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token doc-comment comment">/**
                 * 删除懒加载模块的prefetch,降低带宽压力
                 * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
                 * 而且预渲染时生成的prefetch标签是modern版本的,低版本浏览器是不需要的
                 */</span>
                config<span class="token punctuation">.</span>plugins
                    <span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;prefetch&#39;</span><span class="token punctuation">)</span>
                <span class="token doc-comment comment">/**
                 * 添加CDN参数到htmlWebpackPlugin配置中
                 */</span>
                config
                    <span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token parameter">args</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cdn <span class="token operator">=</span> cdn<span class="token punctuation">.</span>build
                        <span class="token punctuation">}</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cdn <span class="token operator">=</span> cdn<span class="token punctuation">.</span>dev
                        <span class="token punctuation">}</span>
                        <span class="token keyword">return</span> args
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function N(E,z){const t=o("ExternalLinkIcon");return c(),i("div",null,[v,l(" more "),m,n("p",null,[s("首先是 CDN 优化, 把比较经常使用的依赖, 像 "),b,s(" , "),g,s(" , "),h,s(" , "),f,s(" , "),y,s(" , "),q,s(" 直接使用 CDN 来分发, 这边选用的 CDN 服务是 "),n("a",x,[s("bootcdn"),p(t)])]),_,n("p",null,[s("构建的话, 自行百度, 比较懒的推荐 "),n("a",j,[s("upupw"),p(t)]),s(" , 当然闲的无聊的话可以写一个 express 当作本地服务器")]),w])}const V=e(k,[["render",N],["__file","vue-performance-optimization.html.vue"]]);export{V as default};
