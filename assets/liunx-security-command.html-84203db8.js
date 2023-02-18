import{_ as n,V as s,W as e,Z as i,X as a,$ as l}from"./framework-0ab02afe.js";const r={},t=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"收集 Liunx 系统安全加固时, 发现系统漏洞, 修复系统, 加固系统信息等命令集合。")],-1),p=l(`<h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 uid 查找对应的程序</span>
<span class="token function">find</span> / <span class="token parameter variable">-uid</span> <span class="token number">0</span> <span class="token parameter variable">-perm</span> <span class="token parameter variable">-4000</span>

<span class="token comment"># 查找哪里拥有写权限</span>
<span class="token function">find</span> / <span class="token parameter variable">-perm</span> <span class="token parameter variable">-o</span><span class="token operator">=</span>w

<span class="token comment"># 查找名称中包含点和空格的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-print</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot;..&quot;</span> <span class="token parameter variable">-print</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot;. &quot;</span> <span class="token parameter variable">-print</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 查找不属于任何人的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-nouser</span>

<span class="token comment"># 查找那些文件包含指定文本内容</span>
<span class="token function">find</span> / <span class="token parameter variable">-iname</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">|</span> xrags <span class="token function">grep</span> <span class="token string">&quot;[String]&quot;</span>

<span class="token comment"># 查找一小时内新增的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-cmin</span> <span class="token parameter variable">-60</span>

<span class="token comment"># 查找所有不可修改的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token function">file</span> lsattr <span class="token parameter variable">-a</span> <span class="token function">file</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> <span class="token function">grep</span> ‘^….i’

<span class="token comment"># 查找 SUID root 文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-user</span> root <span class="token parameter variable">-perm</span> <span class="token parameter variable">-4000</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 查找 SGID root 文件:</span>
<span class="token function">find</span> / <span class="token parameter variable">-group</span> root <span class="token parameter variable">-perm</span> <span class="token parameter variable">-2000</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 查找 SUID 和 SGID 文件:</span>
<span class="token function">find</span> / <span class="token parameter variable">-perm</span> <span class="token parameter variable">-4000</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-perm</span> <span class="token parameter variable">-2000</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 查找不属于任何用户的文件:</span>
<span class="token function">find</span> / <span class="token parameter variable">-nouser</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 查找不属于任何用户组的文件:</span>
<span class="token function">find</span> / <span class="token parameter variable">-nogroup</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 查找软连接及其指向:</span>
<span class="token function">find</span> / <span class="token parameter variable">-type</span> l <span class="token parameter variable">-ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lsof" tabindex="-1"><a class="header-anchor" href="#lsof" aria-hidden="true">#</a> lsof</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找未链接的文件</span>
<span class="token function">lsof</span> +L1

<span class="token comment"># 获取进程打开端口的信息</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arp" tabindex="-1"><a class="header-anchor" href="#arp" aria-hidden="true">#</a> arp</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 看看 ARP 表中是否有奇怪的东西</span>
arp <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getent" tabindex="-1"><a class="header-anchor" href="#getent" aria-hidden="true">#</a> getent</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有账户</span>
getent <span class="token function">passwd</span>

<span class="token comment"># 查看所有用户组</span>
getent group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chattr" tabindex="-1"><a class="header-anchor" href="#chattr" aria-hidden="true">#</a> chattr</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使文件不可修改</span>
chattr <span class="token parameter variable">-i</span> fileKK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function c(o,d){return s(),e("div",null,[t,i(" more "),p])}const v=n(r,[["render",c],["__file","liunx-security-command.html.vue"]]);export{v as default};
