import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e}from"./app.f29ec3fb.js";const i={},c=e(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u5B89\u88C5 Node.js \u7684\u6700\u4F73\u65B9\u5F0F\u662F\u4F7F\u7528 nvm\u3002nvm \u6700\u5F00\u59CB\u662F\u5728 <code>Mac OS</code> \u4E0B\u5F00\u53D1\u7684, \u6240\u4EE5 <code>Mac OS</code> \u4E0B\u540C\u6837\u4F7F\u7528 nvm \u5B89\u88C5 Node.js\u3002</p></div><h2 id="\u4E0B\u8F7D-nvm" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-nvm" aria-hidden="true">#</a> \u4E0B\u8F7D nvm</h2><h3 id="\u901A\u8FC7-curl-\u4E0B\u8F7D-\u9700\u8981\u5B89\u88C5-curl" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-curl-\u4E0B\u8F7D-\u9700\u8981\u5B89\u88C5-curl" aria-hidden="true">#</a> \u901A\u8FC7 curl \u4E0B\u8F7D\uFF08\u9700\u8981\u5B89\u88C5 curl\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7-wget-\u4E0B\u8F7D-liunx-\u4E0B\u8F7D\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-wget-\u4E0B\u8F7D-liunx-\u4E0B\u8F7D\u547D\u4EE4" aria-hidden="true">#</a> \u901A\u8FC7 wget \u4E0B\u8F7D\uFF08liunx \u4E0B\u8F7D\u547D\u4EE4\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u91CD\u542F\u7EC8\u7AEF-\u5B89\u88C5-node-js" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F\u7EC8\u7AEF-\u5B89\u88C5-node-js" aria-hidden="true">#</a> \u91CD\u542F\u7EC8\u7AEF, \u5B89\u88C5 Node.js</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8BBE\u5B9A-node-js-\u7684\u9ED8\u8BA4\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5B9A-node-js-\u7684\u9ED8\u8BA4\u7248\u672C" aria-hidden="true">#</a> \u8BBE\u5B9A Node.js \u7684\u9ED8\u8BA4\u7248\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token builtin class-name">alias</span> defaults <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B-node-js-\u548C-npm-\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-node-js-\u548C-npm-\u7248\u672C\u53F7" aria-hidden="true">#</a> \u67E5\u770B Node.js \u548C npm \u7248\u672C\u53F7</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> -v
<span class="token function">npm</span> -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-\u6DD8\u5B9D\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#npm-\u6DD8\u5B9D\u6362\u6E90" aria-hidden="true">#</a> npm \u6DD8\u5B9D\u6362\u6E90</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>npm \u52A0\u8F7D\u7684\u6A21\u5757, \u591A\u6570\u662F\u56FD\u5916\u6E90\u7684, \u6240\u4EE5\u5F88\u5BB9\u6613\u88AB\u5899, \u89E3\u51B3\u529E\u6CD5, \u9664\u4E86\u7FFB\u5899, \u8FD8\u6709\u5C31\u662F npm \u6362\u6E90, \u4F7F\u7528\u56FD\u5185\u6E90, \u4F46\u662F\u672C\u4EBA\u8FD8\u662F\u63A8\u4ECB\u4F7F\u7528\u56FD\u5916\u6E90, \u56E0\u4E3A\u56FD\u5916\u6E90\u8F83\u56FD\u5185\u6E90\u7A33\u5B9A\u3001\u5168\u9762\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g cnpm --registry<span class="token operator">=</span>//registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528 cnpm \u5B89\u88C5\u6A21\u5757</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cnpm <span class="token function">install</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),d=[c];function l(t,r){return a(),s("div",null,d)}var u=n(i,[["render",l],["__file","usage-nvm-to-install-node-js.html.vue"]]);export{u as default};
