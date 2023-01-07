import{_ as n,V as e,W as s,Z as i,X as a,$ as d}from"./framework-ac7be777.js";const c={},t=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"主要介绍 npm 中的各个选项的作用以及其区别。npm 依赖于 Node.js, 童鞋们要注意你的系统是否有 Node.js 环境。")],-1),o=d(`<h2 id="npm-是什么" tabindex="-1"><a class="header-anchor" href="#npm-是什么" aria-hidden="true">#</a> npm 是什么</h2><div class="hint-container tip"><p class="hint-container-title">简介</p><p>NPM 的全称是 Node Package Manager, 是随同 Node.js 一起安装的包管理和分发工具, 它很方便让 JavaScript 开发者下载、安装、上传以及管理已经安装的包。</p></div><h2 id="npm-install-安装模块" tabindex="-1"><a class="header-anchor" href="#npm-install-安装模块" aria-hidden="true">#</a> npm install 安装模块</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>安装包, 默认会安装最新的版本, 最后所有的依赖会存放在 <code>node_modules</code> 目录下的, 如:</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> gulp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="全局安装" tabindex="-1"><a class="header-anchor" href="#全局安装" aria-hidden="true">#</a> 全局安装</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>只需加上 <code>-g</code> 或者 <code>--global</code> 参数, 就可以实现全局安装, 如:</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> gulp <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装指定版本" tabindex="-1"><a class="header-anchor" href="#安装指定版本" aria-hidden="true">#</a> 安装指定版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> gulp@3.9.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="s-save" tabindex="-1"><a class="header-anchor" href="#s-save" aria-hidden="true">#</a> -S, --save</h2><h3 id="添加模块命令" tabindex="-1"><a class="header-anchor" href="#添加模块命令" aria-hidden="true">#</a> 添加模块命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> <span class="token parameter variable">--save</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><div class="hint-container tip"><p class="hint-container-title">作用</p><p>自动把模块和版本号添加至 <code>package.json</code> 的 <code>dependencies</code> （生产阶段的依赖）部分, 避免了手动添加。</p></div><p><code>package.json</code> 文件的 <code>dependencies</code> 字段:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;[module-name]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[version]&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="d-save-dev" tabindex="-1"><a class="header-anchor" href="#d-save-dev" aria-hidden="true">#</a> -D, --save-dev</h2><h3 id="添加模块命令-1" tabindex="-1"><a class="header-anchor" href="#添加模块命令-1" aria-hidden="true">#</a> 添加模块命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> --save-dev
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h3><div class="hint-container tip"><p class="hint-container-title">作用</p><p>自动把模块和版本号添加至 <code>package.json</code> 的 <code>devDependencies</code> （开发阶段的依赖）部分, 避免了手动添加。</p></div><p><code>package.json</code> 文件的 <code>devDependencies</code> 字段:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;[module-name]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[version]&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="o-save-optional" tabindex="-1"><a class="header-anchor" href="#o-save-optional" aria-hidden="true">#</a> -O, --save-optional</h2><h3 id="添加模块命令-2" tabindex="-1"><a class="header-anchor" href="#添加模块命令-2" aria-hidden="true">#</a> 添加模块命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> --save-optional
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> <span class="token parameter variable">-O</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2" aria-hidden="true">#</a> 作用</h3><div class="hint-container tip"><p class="hint-container-title">作用</p><p>自动把模块和版本号添加至 <code>package.json</code> 的 <code>optionalDependencies</code> （可选阶段的依赖）部分, 避免了手动添加。</p></div><p><code>package.json</code> 文件的 <code>optionalDependencies</code> 字段:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;optionalDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;[module-name]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[version]&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="e-save-exact" tabindex="-1"><a class="header-anchor" href="#e-save-exact" aria-hidden="true">#</a> -E, --save-exact</h2><h3 id="添加模块命令-3" tabindex="-1"><a class="header-anchor" href="#添加模块命令-3" aria-hidden="true">#</a> 添加模块命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> --save-exact
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> <span class="token parameter variable">-E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用-3" tabindex="-1"><a class="header-anchor" href="#作用-3" aria-hidden="true">#</a> 作用</h3><div class="hint-container tip"><p class="hint-container-title">作用</p><p>自动把模块和版本号添加至 <code>package.json</code> 的 <code>dependencies</code> （精确安装指定模块版本）部分, 避免了手动添加。需要注意的是: <code>package.json</code> 文件的 <code>dependencies</code> 字段, 版本号中的 <code>^</code> 消失了</p></div><p><code>package.json</code> 文件的 <code>dependencies</code> 字段</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;[module-name]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[version]&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-其他命令" tabindex="-1"><a class="header-anchor" href="#npm-其他命令" aria-hidden="true">#</a> npm 其他命令</h2><h3 id="查看依赖包的所有的版本号" tabindex="-1"><a class="header-anchor" href="#查看依赖包的所有的版本号" aria-hidden="true">#</a> 查看依赖包的所有的版本号</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> info <span class="token punctuation">[</span>package-name<span class="token punctuation">]</span> versions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建-package-json-文件" tabindex="-1"><a class="header-anchor" href="#创建-package-json-文件" aria-hidden="true">#</a> 创建 package.json 文件</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>安装包的信息可保持到项目的 <code>package.json</code> 文件中, 以便后续的其它的项目开发或者他人合作使用, 也说 <code>package.json</code> 在项目中是必不可少的。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装模块" tabindex="-1"><a class="header-anchor" href="#安装模块" aria-hidden="true">#</a> 安装模块</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>模块的依赖都被写入了 <code>package.json</code> 文件后, 他人打开项目的根目录（项目开源、内部团队合作）, 时, 只需一条命令就可以安装 <code>package.json</code> 中的依赖。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>加上 <code>--save</code> 会安装 <code>package.json</code> 中 <code>dependencies</code> 里的所有模块。 :::</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="卸载模块" tabindex="-1"><a class="header-anchor" href="#卸载模块" aria-hidden="true">#</a> 卸载模块</h3><p>想要卸载模块也很简单。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> uninstall <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>以上写法并不会改变 <code>package.json</code> 文件, 使用 <code>-S | --save | -D | --save-dev | -O | --save-optional</code> 选项即可删除 <code>package.json</code> 文件中的依赖。<br> 如使用 <code>--save</code> 选项, 将会删除 <code>package.json</code> 文件 <code>dependencies</code> 中的该模块名和版本号。</p></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> uninstall <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span> <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新模块" tabindex="-1"><a class="header-anchor" href="#更新模块" aria-hidden="true">#</a> 更新模块</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>从服务器下载最新版本的模块。需要注意的是, 最新版本的模块并不是最稳定的, 模块还是选择相对稳定的版本较好。支持 <code>-g</code> 选项。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> update <span class="token punctuation">[</span>-g<span class="token punctuation">]</span> <span class="token punctuation">[</span>module-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检查模块是否已经过时" tabindex="-1"><a class="header-anchor" href="#检查模块是否已经过时" aria-hidden="true">#</a> 检查模块是否已经过时</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此命令会列出所有已经过时的包, 可以及时进行包的更新.</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> outdated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动模块" tabindex="-1"><a class="header-anchor" href="#启动模块" aria-hidden="true">#</a> 启动模块</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> start <span class="token punctuation">[</span>-- <span class="token operator">&lt;</span>args<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该命令写在 <code>package.json</code> 文件 <code>scripts</code> 的 <code>start</code> 字段中, 可以自定义命令来配置一个服务器环境和安装一系列的必要程序, 如:</p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gulp -s&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果 <code>package.json</code> 文件没有设置 <code>start</code> , 则将直接启动 <code>node server.js</code></p></div><h3 id="停止模块" tabindex="-1"><a class="header-anchor" href="#停止模块" aria-hidden="true">#</a> 停止模块</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> stop <span class="token punctuation">[</span>-- <span class="token operator">&lt;</span>args<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重新启动模块" tabindex="-1"><a class="header-anchor" href="#重新启动模块" aria-hidden="true">#</a> 重新启动模块</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> restart <span class="token punctuation">[</span>-- <span class="token operator">&lt;</span>args<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新模块-1" tabindex="-1"><a class="header-anchor" href="#更新模块-1" aria-hidden="true">#</a> 更新模块</h3><p>可以安装全局插件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npm-check-updates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看最新的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ npm-check-updates
$ ncu <span class="token comment"># 为上一条指令的缩写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>升级至最新版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ncu <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在使用下载最新的安装包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然, 如果所有包都是最新版本, 执行 ncu 后会提示:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>All dependencies match the latest package versions <span class="token builtin class-name">:</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看包的安装路径" tabindex="-1"><a class="header-anchor" href="#查看包的安装路径" aria-hidden="true">#</a> 查看包的安装路径</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>输出 node_modules 的路径, 支持 <code>-g</code> 选项。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> root <span class="token punctuation">[</span>-g<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="管理-npm-的配置路径" tabindex="-1"><a class="header-anchor" href="#管理-npm-的配置路径" aria-hidden="true">#</a> 管理 npm 的配置路径</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于 config 这块用得最多应该是设置代理, 解决 npm 安装一些模块失败的问题</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-g<span class="token operator">|</span>--global<span class="token punctuation">]</span>
$ <span class="token function">npm</span> config delete <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span>
$ <span class="token function">npm</span> config list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看命令的帮助" tabindex="-1"><a class="header-anchor" href="#查看命令的帮助" aria-hidden="true">#</a> 查看命令的帮助</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token builtin class-name">help</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><ol><li><code>--save-dev</code> 是你开发时候依赖的东西； <code>--save</code> 是你发布之后还依赖的东西。</li><li><code>--save-optional</code> 是可选依赖, 非必下； <code>--save-exact</code> 可以指定精确的版本号, 也就是说当发布了新版本, 系统不会系在最新版本的模块, 只会下载该版本的模块。</li><li><code>npm install</code> 下载依赖时会安装 <code>package.json</code> 中 <code>dependencies</code> 和 <code>devDependencies</code> 里的所有模块。</li><li><code>npm install --save</code> 下载依赖时只会安装 <code>package.json</code> 中 <code>dependencies</code> 里的所有模块。</li><li>比如, 你写 <code>ES6</code> 代码, 如果你想编译成 <code>ES5</code> 发布那么 <code>babel</code> 就是 <code>devDependencies</code> 。</li><li>如果你用了 <code>jQuery</code> , 由于发布之后还是依赖 <code>jQuery</code> , 所以是 <code>dependencies</code> 。</li><li>最常用的还是 <code>npm</code> 中的 <code>--save</code> 和 <code>--save-dev</code> 选项。 <code>--save</code> 和 <code>--save-dev</code> 选项。</li></ol>`,85);function p(l,r){return e(),s("div",null,[t,i(" more "),o])}const h=n(c,[["render",p],["__file","talk-npm-on-node-js.html.vue"]]);export{h as default};
