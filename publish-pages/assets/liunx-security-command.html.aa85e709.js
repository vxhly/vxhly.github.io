import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.f29ec3fb.js";const i={},l=e(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u6536\u96C6 Liunx \u7CFB\u7EDF\u5B89\u5168\u52A0\u56FA\u65F6, \u53D1\u73B0\u7CFB\u7EDF\u6F0F\u6D1E, \u4FEE\u590D\u7CFB\u7EDF, \u52A0\u56FA\u7CFB\u7EDF\u4FE1\u606F\u7B49\u547D\u4EE4\u96C6\u5408\u3002</p></div><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528 uid \u67E5\u627E\u5BF9\u5E94\u7684\u7A0B\u5E8F</span>
<span class="token function">find</span> / -uid <span class="token number">0</span> -perm -4000

<span class="token comment"># \u67E5\u627E\u54EA\u91CC\u62E5\u6709\u5199\u6743\u9650</span>
<span class="token function">find</span> / -perm -o<span class="token operator">=</span>w

<span class="token comment"># \u67E5\u627E\u540D\u79F0\u4E2D\u5305\u542B\u70B9\u548C\u7A7A\u683C\u7684\u6587\u4EF6</span>
<span class="token function">find</span> / -name <span class="token string">&quot; &quot;</span> -print
<span class="token function">find</span> / -name <span class="token string">&quot;..&quot;</span> -print
<span class="token function">find</span> / -name <span class="token string">&quot;. &quot;</span> -print
<span class="token function">find</span> / -name <span class="token string">&quot; &quot;</span> -print

<span class="token comment"># \u67E5\u627E\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u4EBA\u7684\u6587\u4EF6</span>
<span class="token function">find</span> / -nouser

<span class="token comment"># \u67E5\u627E\u90A3\u4E9B\u6587\u4EF6\u5305\u542B\u6307\u5B9A\u6587\u672C\u5185\u5BB9</span>
<span class="token function">find</span> / -iname <span class="token string">&quot;*&quot;</span> <span class="token operator">|</span> xrags <span class="token function">grep</span> <span class="token string">&quot;[String]&quot;</span>

<span class="token comment"># \u67E5\u627E\u4E00\u5C0F\u65F6\u5185\u65B0\u589E\u7684\u6587\u4EF6</span>
<span class="token function">find</span> / -cmin -60

<span class="token comment"># \u67E5\u627E\u6240\u6709\u4E0D\u53EF\u4FEE\u6539\u7684\u6587\u4EF6</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I <span class="token function">file</span> lsattr -a <span class="token function">file</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> <span class="token function">grep</span> \u2018^\u2026.i\u2019

<span class="token comment"># \u67E5\u627E SUID root \u6587\u4EF6</span>
<span class="token function">find</span> / -user root -perm -4000 -print

<span class="token comment"># \u67E5\u627E SGID root \u6587\u4EF6:</span>
<span class="token function">find</span> / -group root -perm -2000 -print

<span class="token comment"># \u67E5\u627E SUID \u548C SGID \u6587\u4EF6:</span>
<span class="token function">find</span> / -perm -4000 -o -perm -2000 -print

<span class="token comment"># \u67E5\u627E\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7528\u6237\u7684\u6587\u4EF6:</span>
<span class="token function">find</span> / -nouser -print

<span class="token comment"># \u67E5\u627E\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7528\u6237\u7EC4\u7684\u6587\u4EF6:</span>
<span class="token function">find</span> / -nogroup -print

<span class="token comment"># \u67E5\u627E\u8F6F\u8FDE\u63A5\u53CA\u5176\u6307\u5411:</span>
<span class="token function">find</span> / -type l -ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lsof" tabindex="-1"><a class="header-anchor" href="#lsof" aria-hidden="true">#</a> lsof</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u627E\u672A\u94FE\u63A5\u7684\u6587\u4EF6</span>
<span class="token function">lsof</span> +L1

<span class="token comment"># \u83B7\u53D6\u8FDB\u7A0B\u6253\u5F00\u7AEF\u53E3\u7684\u4FE1\u606F</span>
<span class="token function">lsof</span> -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arp" tabindex="-1"><a class="header-anchor" href="#arp" aria-hidden="true">#</a> arp</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u770B\u770B ARP \u8868\u4E2D\u662F\u5426\u6709\u5947\u602A\u7684\u4E1C\u897F</span>
arp -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getent" tabindex="-1"><a class="header-anchor" href="#getent" aria-hidden="true">#</a> getent</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u8D26\u6237</span>
getent <span class="token function">passwd</span>

<span class="token comment"># \u67E5\u770B\u6240\u6709\u7528\u6237\u7EC4</span>
getent group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chattr" tabindex="-1"><a class="header-anchor" href="#chattr" aria-hidden="true">#</a> chattr</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u6587\u4EF6\u4E0D\u53EF\u4FEE\u6539</span>
chattr -i fileKK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[l];function d(t,o){return s(),a("div",null,c)}var u=n(i,[["render",d],["__file","liunx-security-command.html.vue"]]);export{u as default};
