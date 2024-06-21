import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,d as c,a,e as i}from"./app-eb30587d.js";const d="/assets/redhat-reinforce-12.png",o="/assets/redhat-reinforce-14.png",t="/assets/redhat-reinforce-15.png",r={},l=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"本系列笔记又是 Liunx 学习系列教程的一大步, 本系列学习笔记记录 RedHat 系统的安全加固。本篇笔记是记录用户和文件的权限（主要是特殊权限）, 加强系统的防御能力。")],-1),p=i(`<h2 id="主要的介绍" tabindex="-1"><a class="header-anchor" href="#主要的介绍" aria-hidden="true">#</a> 主要的介绍</h2><p>Linux 文件系统的安全主要是通过设置文件的权限来实现的。每一个 Linux 的文件或目录, 都有 3 组属性, 分别定义文件或目录的所有者, 用户组和其他人的使用权限（ <code>只读</code> 、 <code>可写</code> 、 <code>可执行</code> 、 <code>允许 SUID</code> 、 <code>允许 SGID</code> 等）。特别注意, 权限为 <code>SUID</code> 和 <code>SGID</code> 的可执行文件, 在程序运行过程中, 会给进程赋予所有者的权限, 如果被黑客发现并利用就会给系统造成危害。</p><h2 id="查找同时存在-suid-和-sgid-的文件" tabindex="-1"><a class="header-anchor" href="#查找同时存在-suid-和-sgid-的文件" aria-hidden="true">#</a> 查找同时存在 SUID 和 SGID 的文件</h2><p>使用 <code>find</code> 命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-xdev</span> <span class="token parameter variable">-perm</span>  <span class="token parameter variable">-6000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例, 普通用户无法直接 vi 修改 <code>/etc/passwd</code> 文件, 但却可以通过 <code>passwd</code> 命令来修改自身的密码。这时就利用了 <code>/bin/passwd</code> 的 SUID 的权限。</p><p>如果一个程序被设置成了 <code>S</code> 位标志, 那么普通用户就可以以 root 身份来运行这个程序。对系统安全性有较大不利影响, 所以应禁止所有不必要的 <code>SUID/SGID</code> 程序。</p><p>修改部分系统文件的 SUID 和 SGID 的权限:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> a-s /usr/bin/chage
<span class="token function">chmod</span> a-s /usr/bin/gpasswd
<span class="token function">chmod</span> a-s /usr/bin/wall
<span class="token function">chmod</span> a-s /usr/bin/chfn
<span class="token function">chmod</span> a-s /usr/bin/chsh
<span class="token function">chmod</span> a-s /usr/bin/newgrp
<span class="token function">chmod</span> a-s /usr/bin/write
<span class="token function">chmod</span> a-s /usr/sbin/usernetctl
<span class="token function">chmod</span> a-s /bin/mount
<span class="token function">chmod</span> a-s /bin/umount
<span class="token function">chmod</span> a-s /sbin/netreport
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-命令" tabindex="-1"><a class="header-anchor" href="#find-命令" aria-hidden="true">#</a> find 命令</h3><p>选项解释</p><ul><li><strong><code>-perm &lt;权限数值&gt;</code></strong> =&gt; 查找符合指定的权限数值的文件或目录；</li><li><strong><code>-xdev</code></strong> =&gt; 将范围局限在先行的文件系统中；</li><li><code>find -perm mode</code> =&gt; 表示严格匹配, 也就是你的文件权限位转换成对应的十进制数字与 mode 一模一样, 那么匹配成功, 需要注意的是如果 mode 给的数字不足 3 位, 那么前面自动添 0 (严格的说是不足 4 位, 原因就是前面所说的 <code>SetUID</code> , <code>SetGID</code> ）</li><li><code>find -perm -mode</code> =&gt; 表示模糊查询, 也就是说你的文件权限位转换成对应的十进制数字被 mode 包含, 就会被搜索出来</li><li><code>find -perm +mode</code> =&gt; 与 <code>-mode</code> 的区别是 <code>+mode</code> 只需其中的任意一个 1 的部分被匹配, <code>-mode</code> 是所有 1 的部分都必须被匹配, 同样 <code>+mode</code> 也不管 0 位</li></ul><h2 id="文件的默认权限" tabindex="-1"><a class="header-anchor" href="#文件的默认权限" aria-hidden="true">#</a> 文件的默认权限</h2><p>使用 <code>umask</code> 指定当前用户创建文件夹和文件的默认权限属性</p><ul><li>若使用者建立为 <code>文件</code> , 则预设 <code>没有可执行 ( x ) 项目</code> , 亦即只有 <code>rw</code> 这两个项目, 也就是最大为 <code>666</code> , 即权限为 <code>-rw-rw-rw-</code></li><li>若使用者建立为 <code>目录</code> , 则由于 <code>x</code> 与是否可以进入此目录有关, 因此预设为所有权限均开放, 亦即为 <code>777</code> , 即权限为 <code>drwxrwxrwx</code></li></ul><h3 id="修改默认权限" tabindex="-1"><a class="header-anchor" href="#修改默认权限" aria-hidden="true">#</a> 修改默认权限</h3><p>主要修改配置文件 <code>/etc/profile</code> 、 <code>/etc/bashrc</code> 、 <code>/etc/csh.login</code> 、 <code>/etc/csh.cshrc</code></p><ul><li>生成目录的权限为 <code>777-002=775</code> , 即 <code>drwxrwxr-x</code></li><li>生成文件的权限为 <code>666-002=664</code> , 即 <code>-rw-rw-r--</code> <code>For Exmaple:</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">umask</span> 002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>生成目录的权限为 <code>777-022=755</code> , 即 <code>drwxrwxr-x</code></li><li>生成文件的权限为 <code>666-022=644</code> , 即 - <code>rw-r--r--</code> <code>For Exmaple:</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">umask</span> 022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不要单纯的进行数字加减<br> 比如, <code>umask 003</code> , 如果以数字加减, 则文件权限为 <code>666-003=663</code> , 相当于 <code>-rw-rw--wx</code> , 显然不正确, 应该先转换成权限属性再相减 <code>-rw-rw-rw-</code> 减去 <code>--------wx</code> , 即应该为 <code>-rw-rw-r--</code> <br> 影响: 移动规范要求 <code>umask 027</code> , 这样生成的文件默认权限为 <code>-rw-r-----</code> , 只有本用户可读、写、执行。如果业务需要, 其他用户也需要操作该 用户的文件, 就会有问题。可以使用默认的 <code>022</code></p></div><h2 id="环境变量的安全性" tabindex="-1"><a class="header-anchor" href="#环境变量的安全性" aria-hidden="true">#</a> 环境变量的安全性</h2><h3 id="root-用户环境变量的安全性" tabindex="-1"><a class="header-anchor" href="#root-用户环境变量的安全性" aria-hidden="true">#</a> root 用户环境变量的安全性</h3><p>主要检查 <code>PATH</code> 变量, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">&#39;(^|:)(\\.|:|$)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="RedHat 安全加固" tabindex="0" loading="lazy"><figcaption>RedHat 安全加固</figcaption></figure><p>检查是否包含组目录权限为 <code>o+w</code> 的目录或者 <code>g+w</code> 的目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39; &#39;</span><span class="token variable">\`</span></span> <span class="token parameter variable">-type</span> d <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-perm</span> <span class="token parameter variable">-002</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-perm</span> <span class="token parameter variable">-020</span> <span class="token punctuation">\\</span><span class="token punctuation">)</span> <span class="token parameter variable">-ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-002</code> 表示任何目录或文件, 只要带 <code>o+w</code> 就匹配</li><li><code>+002</code> 表示目录或文件只有 <code>o+w</code> 权限, 即 <code>-------w-</code> 可能会出现报错提示 <code>/root/bin</code> 目录不存在, <code>PATH</code> 里有该路径, 而实际上没有, 可以先在 <code>/root</code> 下建立一个 <code>bin</code> 目录</li></ul><h3 id="检查-root-用户环境变量-path-规范" tabindex="-1"><a class="header-anchor" href="#检查-root-用户环境变量-path-规范" aria-hidden="true">#</a> 检查 root 用户环境变量 path 规范</h3><p>检查系统 root 用户环境变量 path 中是否包含 <code>“.”</code> , <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改文件 <code>/etc/profile</code> 、 <code>/etc/bashrc</code> 或 <code>/root/.bash_profile</code> 在 <code>“PATH＝……”</code> 这句中删除</p><ul><li><code>-002</code> 表示任何目录或文件, 只要带 <code>o+w</code> 就匹配</li><li><code>+002</code> 表示目录或文件只有 <code>o+w</code> 权限, 即 <code>-------w-</code> 可能会出现报错提示 <code>/root/bin</code> 目录不存在, <code>PATH</code> 里有该路径, 而实际上没有, 可以先在 <code>/root</code> 下建立一个 <code>bin</code> 目录</li></ul><h2 id="远程连接的安全性配置" tabindex="-1"><a class="header-anchor" href="#远程连接的安全性配置" aria-hidden="true">#</a> 远程连接的安全性配置</h2><p>主要查找系统中是否含有 <code>.netrc</code> 和 <code>.rhosts</code> 文件, 如无必要, 删除这两个文件, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> .netrc
<span class="token function">find</span> / <span class="token parameter variable">-name</span> .rhosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重要目录和文件的权限设置" tabindex="-1"><a class="header-anchor" href="#重要目录和文件的权限设置" aria-hidden="true">#</a> 重要目录和文件的权限设置</h2><p>执行以下命令检查目录和文件的权限设置情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/rc.d/init.d/
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /tmp
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/inetd.conf
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/passwd
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/shadow
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/group
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/security
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/services
<span class="token function">ls</span> <span class="token parameter variable">-l</span> /etc/rc*.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于重要目录, 建议执行如下类似操作, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">750</span> /etc/rc.d/init.d/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样只有 root 可以读、写和执行, 编写脚本一次性执行, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">644</span> /etc/passwd
<span class="token function">chmod</span> <span class="token number">600</span> /etc/shadow
<span class="token function">chmod</span> <span class="token number">644</span> /etc/group
<span class="token function">chmod</span> <span class="token number">600</span> /etc/gshadow
<span class="token function">chmod</span> <span class="token number">700</span> /bin/rpm
<span class="token function">chmod</span> <span class="token number">644</span> /usr/bin/xhost
<span class="token function">chmod</span> <span class="token number">664</span> /etc/hosts
<span class="token function">chmod</span> <span class="token number">644</span> /etc/exports
<span class="token function">chmod</span> <span class="token number">644</span> /etc/issue
<span class="token function">chmod</span> <span class="token number">664</span> /var/log/wtmp
<span class="token function">chmod</span> <span class="token number">644</span> /etc/services
<span class="token function">chmod</span> <span class="token number">600</span>  /etc/xinetd.conf
<span class="token function">chmod</span> <span class="token number">600</span> /etc/login.defs
<span class="token function">chmod</span> <span class="token number">600</span> /etc/hosts.allow
<span class="token function">chmod</span> <span class="token number">600</span> /etc/hosts.deny
<span class="token function">chmod</span> <span class="token number">600</span> /etc/securetty
<span class="token function">chmod</span> <span class="token number">600</span> /etc/ssh/ssh_host_key
<span class="token function">chmod</span> <span class="token number">600</span> /etc/ssh/sshd_config
<span class="token function">chmod</span> <span class="token number">600</span> /var/log/lastlog
<span class="token function">chmod</span> <span class="token number">600</span> /var/log/messages
<span class="token function">chmod</span> <span class="token number">600</span> /etc/security
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意影响</p><p>有的移动安全加固标准要求/etc 目录是 750 权限, 但如果/etc 目录是权限是 750（drwxr-x---）的话, 由于其他组没有 x 权限, 那么普通用户就无权访问/etc 目录以及以下所有文件, 用户获取不到基本的环境变量/etc/profile 和/etc/passwd、group 等文件, 一些基本命令都会出现问题, 本用户的文件只有 uid、gid, 无法对应名用户名称和组名称。</p></div><h2 id="检查任何人都有写权限的目录" tabindex="-1"><a class="header-anchor" href="#检查任何人都有写权限的目录" aria-hidden="true">#</a> 检查任何人都有写权限的目录</h2><p><code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-type</span> d <span class="token parameter variable">-perm</span> <span class="token parameter variable">-0222</span> <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token parameter variable">-ldg</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这些目录是存放每个用户临时文件的, 目录本身是带 <code>Sticky BIT</code> 粘滞位的, 即使里面的文件有 <code>o+w</code> 权限也没问题, 系统本身有保护性措施。</p></div><h2 id="查找任何人都有写权限的文件" tabindex="-1"><a class="header-anchor" href="#查找任何人都有写权限的文件" aria-hidden="true">#</a> 查找任何人都有写权限的文件</h2><p><code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-type</span> f <span class="token parameter variable">-perm</span> <span class="token parameter variable">-0222</span> <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token parameter variable">-lg</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="RedHat 安全加固" tabindex="0" loading="lazy"><figcaption>RedHat 安全加固</figcaption></figure><h2 id="检查没有属主的文件" tabindex="-1"><a class="header-anchor" href="#检查没有属主的文件" aria-hidden="true">#</a> 检查没有属主的文件</h2><p><code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-nouser</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-nogroup</span> <span class="token parameter variable">-print</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现没有属主的文件往往就意味着有黑客入侵你的系统了。不能允许没有主 人的文件存在。如果在系统中发现了没有属主的文件或目录, 先查看它的完 整性, 如果一切正常, 给它一个属主。有时候卸载程序可能会出现一些没有 主人的文件或目录, 在这种情况下可以把这些文件和目录删除掉。</p><p>在安全加固脚本中, 把没有属主或属组的文件直接赋予了 <code>nobody</code> 用户和组, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-path</span> <span class="token string">&quot;/proc&quot;</span> <span class="token parameter variable">-prune</span> <span class="token parameter variable">-nouser</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-nogroup</span> <span class="token parameter variable">-exec</span> <span class="token function">chown</span> nobody:nobody <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>命令中排除了 /proc 目录</p></div><h2 id="检查异常隐含文件" tabindex="-1"><a class="header-anchor" href="#检查异常隐含文件" aria-hidden="true">#</a> 检查异常隐含文件</h2><p><code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-xdev</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;..*&quot;</span> <span class="token parameter variable">-print</span>
<span class="token function">find</span> / <span class="token parameter variable">-xdev</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;...*&quot;</span> <span class="token parameter variable">-print</span>
<span class="token function">find</span> / <span class="token parameter variable">-xdev</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;..^G&quot;</span> <span class="token parameter variable">-print</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时也要注意象 <code>“.xx”</code> 和 <code>“.mail”</code> 这样的文件名的。（这些文件名看起来都很象正常的文件名）在系统的每个地方都要查看一下有没有异常隐含文件（点号是起始字符的, 用 <code>“ls”</code> 命令看不到的文件）, 因为这些文件可能是隐藏的黑客工具或者其它一些信息（口令破解程序、其它系统的口令文件, 等等）。在 <code>UNIX</code> 下, 一个常用的技术就是用一些特殊的名, 如: <code>“...”</code> 、 <code>“.. ”（点点空格</code> ）或 <code>“..^G”（点点 ctrl+v 和 ctrl+G）</code> , 来隐含文件或目录。</p><p>基本上系统默认只有一个文件 <code>/usr/share/man/man1/..1.gz</code> , 在加固脚本中的处理方式是存在就直接把它删除掉。<br></p><figure><img src="`+t+`" alt="RedHat 安全加固" tabindex="0" loading="lazy"><figcaption>RedHat 安全加固</figcaption></figure><h2 id="加锁重要口令文件和组文件" tabindex="-1"><a class="header-anchor" href="#加锁重要口令文件和组文件" aria-hidden="true">#</a> 加锁重要口令文件和组文件</h2><p>可以用下面的命令给口令文件和组文件设置不可改变位加锁, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr +i /etc/passwd
chattr +i /etc/shadow
chattr +i /etc/group
chattr +i /etc/gshadow
chattr +i /etc/xinetd.conf
chattr +i /etc/services
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加锁后, 就不能被改变文件内容。同时会影响 <code>useradd</code> 、 <code>userdel</code> 等跟帐户相关的操作</p><p>查看命令, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lsattr /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回结果为: <code>----i-------- /etc/passwd</code> 如果要修改文件, 必须先对该文件进行解锁, <code>For Exmaple:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr <span class="token parameter variable">-i</span> /etc/passwd
chattr <span class="token parameter variable">-i</span> /etc/shadow
chattr <span class="token parameter variable">-i</span> /etc/group
chattr <span class="token parameter variable">-i</span> /etc/gshadow
chattr <span class="token parameter variable">-i</span> /etc/xinetd.conf
chattr <span class="token parameter variable">-i</span> /etc/services
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75);function u(m,v){return s(),n("div",null,[l,c(" more "),p])}const k=e(r,[["render",u],["__file","user-and-file-permissions.html.vue"]]);export{k as default};