import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,d as t,a as s,e as i}from"./app-16d9b7db.js";const r={},l=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"前言"),s("p",null,"Homebrew 是一款自由及开放源代码的软件包管理系统, 用以简化 macOS 和 linux 系统上的软件安装过程。以下是提供 Homebrew 的国内切源方法。")],-1),o=i(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Homebrew 是一款自由及开放源代码的软件包管理系统, 用以简化 macOS 和 linux 系统上的软件安装过程。它拥有安装、卸载、更新、查看、搜索等很多实用的功能, 通过简单的一条指令, 就可以实现包管理, 十分方便快捷。</p><p><code>Homebrew</code> 主要有四个部分组成: <code>brew</code>、<code>homebrew-core</code> 、<code>homebrew-bottles</code>、<code>homebrew-cask</code>。</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>brew</td><td>Homebrew 源代码仓库</td></tr><tr><td>homebrew-core</td><td>Homebrew 核心软件仓库</td></tr><tr><td>homebrew-bottles</td><td>Homebrew 预编译二进制软件包</td></tr><tr><td>homebrew-cask</td><td>提供 macOS 应用和大型二进制文件</td></tr></tbody></table><h2 id="查看本地的源" tabindex="-1"><a class="header-anchor" href="#查看本地的源" aria-hidden="true">#</a> 查看本地的源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 brew.git 当前源</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin    https://github.com/Homebrew/brew.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    https://github.com/Homebrew/brew.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 查看 homebrew-core.git 当前源</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/core<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
origin    https://github.com/Homebrew/homebrew-core.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    https://github.com/Homebrew/homebrew-core.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换为阿里源" tabindex="-1"><a class="header-anchor" href="#替换为阿里源" aria-hidden="true">#</a> 替换为阿里源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改 brew.git 为阿里源</span>
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

<span class="token comment"># 修改 homebrew-core.git 为阿里源</span>
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

<span class="token comment"># zsh 替换 brew bintray 镜像</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
$ <span class="token builtin class-name">source</span> ~/.zshrc

<span class="token comment"># bash 替换 brew bintray 镜像</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># 刷新源</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换为清华源" tabindex="-1"><a class="header-anchor" href="#替换为清华源" aria-hidden="true">#</a> 替换为清华源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 替换各个源</span>
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/cask<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

<span class="token comment"># zsh 替换 brew bintray 镜像</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
$ <span class="token builtin class-name">source</span> ~/.zshrc

<span class="token comment"># bash 替换 brew bintray 镜像</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># 刷新源</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换为中科大源" tabindex="-1"><a class="header-anchor" href="#替换为中科大源" aria-hidden="true">#</a> 替换为中科大源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 替换各个源</span>
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.ustc.edu.cn/brew.git
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/cask<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

<span class="token comment"># zsh 替换 brew bintray 镜像</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
$ <span class="token builtin class-name">source</span> ~/.zshrc

<span class="token comment"># bash 替换 brew bintray 镜像</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># 刷新源</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重置为官方源" tabindex="-1"><a class="header-anchor" href="#重置为官方源" aria-hidden="true">#</a> 重置为官方源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重置 brew.git 为官方源</span>
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span><span class="token variable">)</span></span>&quot;</span> remote set-url origin https://github.com/Homebrew/brew.git

<span class="token comment"># 重置 homebrew-core.git 为官方源</span>
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://github.com/Homebrew/homebrew-core.git

<span class="token comment"># 重置 homebrew-cask.git 为官方源</span>
$ <span class="token function">git</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew <span class="token parameter variable">--repo</span> homebrew/cask<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://github.com/Homebrew/homebrew-cask

<span class="token comment"># zsh 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置</span>
$ <span class="token function">vi</span> ~/.zshrc
<span class="token comment"># export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx</span>

<span class="token comment"># bash 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置</span>
$ <span class="token function">vi</span> ~/.bash_profile
<span class="token comment"># export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx</span>

<span class="token comment"># 刷新源</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function c(p,b){return n(),e("div",null,[l,t(" more "),o])}const u=a(r,[["render",c],["__file","HomeBrew-change-source.html.vue"]]);export{u as default};
