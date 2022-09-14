import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,d as a}from"./app.a3d402e1.js";const i={},t=a(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>Homebrew \u662F\u4E00\u6B3E\u81EA\u7531\u53CA\u5F00\u653E\u6E90\u4EE3\u7801\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u7CFB\u7EDF, \u7528\u4EE5\u7B80\u5316 macOS \u548C linux \u7CFB\u7EDF\u4E0A\u7684\u8F6F\u4EF6\u5B89\u88C5\u8FC7\u7A0B\u3002\u4EE5\u4E0B\u662F\u63D0\u4F9B Homebrew \u7684\u56FD\u5185\u5207\u6E90\u65B9\u6CD5\u3002</p></div><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>Homebrew \u662F\u4E00\u6B3E\u81EA\u7531\u53CA\u5F00\u653E\u6E90\u4EE3\u7801\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u7CFB\u7EDF, \u7528\u4EE5\u7B80\u5316 macOS \u548C linux \u7CFB\u7EDF\u4E0A\u7684\u8F6F\u4EF6\u5B89\u88C5\u8FC7\u7A0B\u3002\u5B83\u62E5\u6709\u5B89\u88C5\u3001\u5378\u8F7D\u3001\u66F4\u65B0\u3001\u67E5\u770B\u3001\u641C\u7D22\u7B49\u5F88\u591A\u5B9E\u7528\u7684\u529F\u80FD, \u901A\u8FC7\u7B80\u5355\u7684\u4E00\u6761\u6307\u4EE4, \u5C31\u53EF\u4EE5\u5B9E\u73B0\u5305\u7BA1\u7406, \u5341\u5206\u65B9\u4FBF\u5FEB\u6377\u3002</p><p><code>Homebrew</code> \u4E3B\u8981\u6709\u56DB\u4E2A\u90E8\u5206\u7EC4\u6210: <code>brew</code>\u3001<code>homebrew-core</code> \u3001<code>homebrew-bottles</code>\u3001<code>homebrew-cask</code>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>brew</td><td>Homebrew \u6E90\u4EE3\u7801\u4ED3\u5E93</td></tr><tr><td>homebrew-core</td><td>Homebrew \u6838\u5FC3\u8F6F\u4EF6\u4ED3\u5E93</td></tr><tr><td>homebrew-bottles</td><td>Homebrew \u9884\u7F16\u8BD1\u4E8C\u8FDB\u5236\u8F6F\u4EF6\u5305</td></tr><tr><td>homebrew-cask</td><td>\u63D0\u4F9B macOS \u5E94\u7528\u548C\u5927\u578B\u4E8C\u8FDB\u5236\u6587\u4EF6</td></tr></tbody></table><h2 id="\u67E5\u770B\u672C\u5730\u7684\u6E90" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u672C\u5730\u7684\u6E90" aria-hidden="true">#</a> \u67E5\u770B\u672C\u5730\u7684\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B brew.git \u5F53\u524D\u6E90</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> remote -v
origin    https://github.com/Homebrew/brew.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    https://github.com/Homebrew/brew.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># \u67E5\u770B homebrew-core.git \u5F53\u524D\u6E90</span>
$ <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/core<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> remote -v
origin    https://github.com/Homebrew/homebrew-core.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    https://github.com/Homebrew/homebrew-core.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66FF\u6362\u4E3A\u963F\u91CC\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u4E3A\u963F\u91CC\u6E90" aria-hidden="true">#</a> \u66FF\u6362\u4E3A\u963F\u91CC\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FEE\u6539 brew.git \u4E3A\u963F\u91CC\u6E90</span>
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

<span class="token comment"># \u4FEE\u6539 homebrew-core.git \u4E3A\u963F\u91CC\u6E90</span>
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

<span class="token comment"># zsh \u66FF\u6362 brew bintray \u955C\u50CF</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
$ <span class="token builtin class-name">source</span> ~/.zshrc

<span class="token comment"># bash \u66FF\u6362 brew bintray \u955C\u50CF</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># \u5237\u65B0\u6E90</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66FF\u6362\u4E3A\u6E05\u534E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u4E3A\u6E05\u534E\u6E90" aria-hidden="true">#</a> \u66FF\u6362\u4E3A\u6E05\u534E\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66FF\u6362\u5404\u4E2A\u6E90</span>
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/cask<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

<span class="token comment"># zsh \u66FF\u6362 brew bintray \u955C\u50CF</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
$ <span class="token builtin class-name">source</span> ~/.zshrc

<span class="token comment"># bash \u66FF\u6362 brew bintray \u955C\u50CF</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># \u5237\u65B0\u6E90</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66FF\u6362\u4E3A\u4E2D\u79D1\u5927\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u4E3A\u4E2D\u79D1\u5927\u6E90" aria-hidden="true">#</a> \u66FF\u6362\u4E3A\u4E2D\u79D1\u5927\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66FF\u6362\u5404\u4E2A\u6E90</span>
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.ustc.edu.cn/brew.git
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/cask<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

<span class="token comment"># zsh \u66FF\u6362 brew bintray \u955C\u50CF</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
$ <span class="token builtin class-name">source</span> ~/.zshrc

<span class="token comment"># bash \u66FF\u6362 brew bintray \u955C\u50CF</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
$ <span class="token builtin class-name">source</span> ~/.bash_profile

<span class="token comment"># \u5237\u65B0\u6E90</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91CD\u7F6E\u4E3A\u5B98\u65B9\u6E90" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7F6E\u4E3A\u5B98\u65B9\u6E90" aria-hidden="true">#</a> \u91CD\u7F6E\u4E3A\u5B98\u65B9\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u91CD\u7F6E brew.git \u4E3A\u5B98\u65B9\u6E90</span>
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://github.com/Homebrew/brew.git

<span class="token comment"># \u91CD\u7F6E homebrew-core.git \u4E3A\u5B98\u65B9\u6E90</span>
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/core<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://github.com/Homebrew/homebrew-core.git

<span class="token comment"># \u91CD\u7F6E homebrew-cask.git \u4E3A\u5B98\u65B9\u6E90</span>
$ <span class="token function">git</span> -C <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo homebrew/cask<span class="token variable">)</span></span>&quot;</span> remote set-url origin https://github.com/Homebrew/homebrew-cask

<span class="token comment"># zsh \u6CE8\u91CA\u6389 HOMEBREW_BOTTLE_DOMAIN \u914D\u7F6E</span>
$ <span class="token function">vi</span> ~/.zshrc
<span class="token comment"># export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx</span>

<span class="token comment"># bash \u6CE8\u91CA\u6389 HOMEBREW_BOTTLE_DOMAIN \u914D\u7F6E</span>
$ <span class="token function">vi</span> ~/.bash_profile
<span class="token comment"># export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx</span>

<span class="token comment"># \u5237\u65B0\u6E90</span>
$ brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[t];function o(l,c){return n(),e("div",null,r)}var b=s(i,[["render",o],["__file","HomeBrew-change-source.html.vue"]]);export{b as default};
