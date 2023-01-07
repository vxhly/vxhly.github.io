import{_ as o,V as r,W as t,X as a,Y as e,a0 as s,Z as l,$ as i,G as d}from"./framework-ac7be777.js";const c="/assets/git-commit-1.png",p={},m={class:"hint-container tip"},u=a("p",{class:"hint-container-title"},"前言",-1),h={href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#toc10",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="commit-message-的作用" tabindex="-1"><a class="header-anchor" href="#commit-message-的作用" aria-hidden="true">#</a> Commit message 的作用</h2><h3 id="提供更多的历史信息-方便快速浏览。" tabindex="-1"><a class="header-anchor" href="#提供更多的历史信息-方便快速浏览。" aria-hidden="true">#</a> 提供更多的历史信息, 方便快速浏览。</h3><p>比如, 下面的命令显示上次发布后的变动, 每个 commit 占据一行。你只看行首, 就知道某次 commit 的目的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token operator">&lt;</span>last tag<span class="token operator">&gt;</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="可以过滤某些-commit-比如文档改动-便于快速查找信息" tabindex="-1"><a class="header-anchor" href="#可以过滤某些-commit-比如文档改动-便于快速查找信息" aria-hidden="true">#</a> 可以过滤某些 commit（比如文档改动）, 便于快速查找信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token operator">&lt;</span>last release<span class="token operator">&gt;</span> HEAD <span class="token parameter variable">--grep</span> feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="可以直接从-commit-生成-change-log" tabindex="-1"><a class="header-anchor" href="#可以直接从-commit-生成-change-log" aria-hidden="true">#</a> 可以直接从 commit 生成 Change log</h3><p>Change Log 是发布新版本时, 用来说明与上一个版本差异的文档, 详见后文</p><figure><img src="`+c+`" alt="Change Log" tabindex="0" loading="lazy"><figcaption>Change Log</figcaption></figure><h3 id="其他优点" tabindex="-1"><a class="header-anchor" href="#其他优点" aria-hidden="true">#</a> 其他优点</h3><ul><li>可读性好, 清晰, 不必深入看代码即可了解当前 commit 的作用。</li><li>为 Code Reviewing 做准备</li><li>方便跟踪工程历史</li><li>让其他的开发者在运行 git blame 的时候想跪谢</li><li>提高项目的整体质量, 提高个人工程素质</li></ul><h2 id="commit-message-的格式" tabindex="-1"><a class="header-anchor" href="#commit-message-的格式" aria-hidden="true">#</a> Commit message 的格式</h2><p>每次提交, Commit message 都包括三个部分: header, body 和 footer。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>BLANK LINE<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>BLANK LINE<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中, header 是必需的, body 和 footer 可以省略。 不管是哪一个部分, 任何一行都不得超过 72 个字符（或 100 个字符）。这是为了避免自动换行影响美观。</p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>Header 部分只有一行, 包括三个字段: type（必需）、scope（可选）和 subject（必需）。</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><p>用于说明 commit 的类别, 只允许使用下面 7 个标识。</p><ul><li><strong>feat</strong>: 一项新功能</li><li><strong>fix</strong>: 修复一个 bug</li><li><strong>docs</strong>: 仅仅修改文档（documentation）</li><li><strong>style</strong>: 不影响代码含义的更改（空格, 格式, 缺少分号等）</li><li><strong>refactor</strong>: 重构（即不是新增功能, 也不是修改 bug 的代码变动）</li><li><strong>perf</strong>: 改进性能的代码更改</li><li><strong>test</strong>: 添加缺失测试或更正现有测试</li><li><strong>build</strong>: 影响构建系统或外部依赖项的更改（示例范围: gulp, broccoli, npm）</li><li><strong>ci</strong>: 对 CI 配置文件和脚本的更改（示例范围: Travis, Circle, BrowserStack, SauceLabs）</li><li><strong>chore</strong>: 其他不修改 src 或测试文件的更改</li><li><strong>revert</strong>: 恢复之前的提交（即回滚）</li></ul><p>如果 type 为 <code>feat</code> 和 <code>fix</code> , 则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定, 要不要放入 Change log, 建议是不要。</p><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h4><p>scope 用于说明 commit 影响的范围, 比如数据层、控制层、视图层等等, 视项目不同而不同。</p><p>例如在 Angular, 可以是 $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView 等。</p><p>如果你的修改影响了不止一个 scope, 你可以使用 <code>*</code> 代替。</p><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h4><p>subject 是 commit 目的的简短描述, 不超过 50 个字符。</p><p>其他注意事项:</p><ul><li>以动词开头, 使用第一人称现在时, 比如 change, 而不是 changed 或 changes</li><li>第一个字母小写</li><li>结尾不加句号（.）</li></ul><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h3><p>Body 部分是对本次 commit 的详细描述, 可以分成多行。下面是一个范例。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>More detailed explanatory text, if necessary. Wrap it to about 72 characters or so.

Further paragraphs come after blank lines.

<span class="token list punctuation">-</span> Bullet points are okay, too
<span class="token list punctuation">-</span> Use a hanging indent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有两个注意点:</p><ul><li>使用第一人称现在时, 比如使用 change 而不是 changed 或 changes。</li><li>永远别忘了第 2 行是空行</li><li>应该说明代码变动的动机, 以及与以前行为的对比。</li></ul><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> Footer</h3><p>Footer 部分只用于以下两种情况:</p><h4 id="不兼容变动" tabindex="-1"><a class="header-anchor" href="#不兼容变动" aria-hidden="true">#</a> 不兼容变动</h4><p>如果当前代码与上一个版本不兼容, 则 Footer 部分以 BREAKING CHANGE 开头, 后面是对变动的描述、以及变动理由和迁移方法。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>BREAKING CHANGE: isolate scope bindings definition has changed.

<span class="token code keyword">    To migrate the code follow the example below:</span>

<span class="token code keyword">    Before:</span>

<span class="token code keyword">    scope: {
      myAttr: &#39;attribute&#39;,
    }</span>

<span class="token code keyword">    After:</span>

<span class="token code keyword">    scope: {
      myAttr: &#39;@&#39;,
    }</span>

<span class="token code keyword">    The removed \`inject\` wasn&#39;t generaly useful for directives so there should be no code using it.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭-issue" tabindex="-1"><a class="header-anchor" href="#关闭-issue" aria-hidden="true">#</a> 关闭 Issue</h4><p>如果当前 commit 针对某个 issue, 那么可以在 Footer 部分关闭这个 issue 。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Closes <span class="token comment">#234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="revert" tabindex="-1"><a class="header-anchor" href="#revert" aria-hidden="true">#</a> Revert</h4><p>还有一种特殊情况, 如果当前 commit 用于撤销以前的 commit, 则必须以 revert: 开头, 后面跟着被撤销 Commit 的 Header。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>revert: feat(pencil): add &#39;graphiteWidth&#39; option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Body 部分的格式是固定的, 必须写成 <code>This reverts commit &lt;hash&gt;</code> ., 其中的 hash 是被撤销 commit 的 SHA 标识符。</p><p>如果当前 commit 与被撤销的 commit, 在同一个发布（release）里面, 那么它们都不会出现在 Change log 里面。如果两者在不同的发布, 那么当前 commit, 会出现在 Change log 的 Reverts 小标题下面。</p><h2 id="commitizen" tabindex="-1"><a class="header-anchor" href="#commitizen" aria-hidden="true">#</a> Commitizen</h2><p>可以使用典型的 git 工作流程或通过使用 CLI 向导 Commitizen 来添加提交消息格式。</p><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> commitizen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后, 在项目目录里, 运行下面的命令, 使其支持 Angular 的 Commit message 格式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>commitizen init cz-conventional-changelog <span class="token parameter variable">--save</span> --save-exact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以后, 凡是用到 <code>git commit</code> 命令, 一律改为使用 <code>git cz</code> 。这时, 就会出现选项, 用来生成符合格式的 Commit message。</p><h2 id="生成-change-log" tabindex="-1"><a class="header-anchor" href="#生成-change-log" aria-hidden="true">#</a> 生成 Change log</h2><p>如果你的所有 Commit 都符合 Angular 格式, 那么发布新版本时, Change log 就可以用脚本自动生成。生成的文档包括以下三个部分:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>New features

Bug fixes

Breaking changes.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个部分都会罗列相关的 commit , 并且有指向这些 commit 的链接。当然, 生成的文档允许手动修改, 所以发布前, 你还可以添加其他内容。</p>`,58),b={href:"https://github.com/ajoslin/conventional-changelog",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> conventional-changelog-cli
<span class="token builtin class-name">cd</span> my-project
conventional-changelog <span class="token parameter variable">-p</span> angular <span class="token parameter variable">-i</span> CHANGELOG.md <span class="token parameter variable">-s</span> <span class="token parameter variable">-r</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然你也可以在你的 <code>package.json</code> 中添加快捷 script</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;changelog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;conventional-changelog -p angular -i src/CHANGELOG.md -s -r 0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(x,y){const n=d("ExternalLinkIcon");return r(),t("div",null,[a("div",m,[u,a("p",null,[e("目前, 社区有多种 Commit message 的写法规范。本文介绍 "),a("a",h,[e("Angular 规范"),s(n)]),e(" 是目前使用最广的写法, 比较合理和系统化, 并且有配套的工具。前前端框架 "),a("a",g,[e("Angular.js"),s(n)]),e(" 采用的就是该规范。")])]),l(" more "),v,a("p",null,[a("a",b,[e("conventional-changelog"),s(n)]),e(" 就是生成 Change log 的工具, 运行下面的命令即可。")]),k])}const _=o(p,[["render",f],["__file","git-commit-specification-guide.html.vue"]]);export{_ as default};
