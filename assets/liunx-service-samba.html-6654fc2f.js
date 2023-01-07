import{_ as s,V as n,W as e,Z as i,X as a,$ as t}from"./framework-ac7be777.js";const d="/assets/liunx-samba-1.png",c="/assets/liunx-samba-2.png",o="/assets/liunx-samba-3.png",r="/assets/liunx-samba-4.png",l="/assets/liunx-samba-5.png",p="/assets/liunx-samba-6.png",u="/assets/liunx-samba-7.png",m="/assets/liunx-samba-8.png",b="/assets/liunx-samba-9.png",h={},g=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"本篇是 Liunx 的服务配置笔记系列第五篇, 这一篇将具体介绍 Red Hat Liunx 下 SAMBA 服务的安全配置。所谓 SAMBA 就是建立 Liunx 和 Windows 之间的共享, 使 Windows 能够访问 Liunx 下共享出来的文件。")],-1),v=t(`<h2 id="配置文件的位置" tabindex="-1"><a class="header-anchor" href="#配置文件的位置" aria-hidden="true">#</a> 配置文件的位置</h2><p>主配置文件: <strong>/etc/samba/smb.conf</strong></p><h2 id="服务的启动与停止" tabindex="-1"><a class="header-anchor" href="#服务的启动与停止" aria-hidden="true">#</a> 服务的启动与停止</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>SAMBA 的服务名并不叫做 <code>samba</code> , 而是 <code>smb</code> 。<br> 修改配置文件过后一定要重启 <code>smb</code> 服务。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> smb status        <span class="token comment"># 状态</span>
<span class="token function">service</span> smb start         <span class="token comment"># 启动</span>
<span class="token function">service</span> smb stop          <span class="token comment"># 暂停</span>
<span class="token function">service</span> smb restart       <span class="token comment"># 重启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务的安装" tabindex="-1"><a class="header-anchor" href="#服务的安装" aria-hidden="true">#</a> 服务的安装</h2><h3 id="创建挂载目录" tabindex="-1"><a class="header-anchor" href="#创建挂载目录" aria-hidden="true">#</a> 创建挂载目录</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mnt/cdrom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="挂在光盘" tabindex="-1"><a class="header-anchor" href="#挂在光盘" aria-hidden="true">#</a> 挂在光盘</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mount</span> /dev/cdrom /mnt/cdrom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /mnt/cdrom/Server
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> perl-Convert-ASN1-0.20-1.1.noarch.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> samba-3.0.33-3.28.el5.i386.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h2 id="安全配置" tabindex="-1"><a class="header-anchor" href="#安全配置" aria-hidden="true">#</a> 安全配置</h2><h3 id="配置工作组和-netbios-名字" tabindex="-1"><a class="header-anchor" href="#配置工作组和-netbios-名字" aria-hidden="true">#</a> 配置工作组和 NetBIOS 名字</h3><p><code>Default Configuration:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>workgroup <span class="token operator">=</span> MYGROUP
<span class="token punctuation">;</span>netbios name <span class="token operator">=</span> MYSERVER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该文件默认配置的工作组是 MYGROUP, 而 Windows 下的工作组默认为 WORKGROUP, Liunx 和 Windows 的工作组一定要一样, 才能访问共享的文件。<br> 该文件默认将 NetBIOS 的名字注释掉了, NetBIOS 名字就是会在 Windows 下的网上邻居能够看到的名字, 注释掉就是会看不到, 建议去掉注释。</p></div><figure><img src="`+c+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h3 id="配置安全级别" tabindex="-1"><a class="header-anchor" href="#配置安全级别" aria-hidden="true">#</a> 配置安全级别</h3><p><code>Default Configuration:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>security <span class="token operator">=</span> user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认的配置是 <code>user</code> 模式, 在该模式下, Windows 下访问 SAMBA 需要用户名和密码, 还可以设置的选项还有 <code>share/user/server/domain/ads</code> 。可以根据需求修改此选项。</p><ul><li><strong>share</strong>: 访问 Samba 服务器共享资源时不需要输入用户名和密码, 属于匿名访问。</li><li><strong>user</strong>: 访问 Samba 服务器共享资源时需要输入用户名和密码, 认证用户来源为 Samba 服务器本机。</li><li><strong>server</strong>: 访问 Samba 服务器共享资源时需要输入用户名和密码, 认证用户来源为另一台 Samba 服务器或 Windows 服务器。</li><li><strong>domain</strong>: Samba 服务器在一个基于 Windows NT 平台的 Windows 域中, 访问共享资源需要输入用户名和密码, 认证用户来源为 Windows 域。</li><li><strong>ads</strong>: Samba 服务器在一个基于 Windows 200X 平台的 Windows 活动目录中, 访问共享资源需要输入用户名和密码, 认证用户来源为 Windows 活动目录。</li></ul><h3 id="配置认证密码在传输过程中加密" tabindex="-1"><a class="header-anchor" href="#配置认证密码在传输过程中加密" aria-hidden="true">#</a> 配置认证密码在传输过程中加密</h3><p>在默认的配置文件中没有此选项, 可以手动添加, 正常情况下是需要开启的。</p><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>encrypt passwords <span class="token operator">=</span> <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h3 id="配置用户密码的存储方式" tabindex="-1"><a class="header-anchor" href="#配置用户密码的存储方式" aria-hidden="true">#</a> 配置用户密码的存储方式</h3><p><code>Default Configuration:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>passdb backend <span class="token operator">=</span> tdbsam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认的配置为 <code>tdbsam</code> , 配置这个选项就是需要 <code>smbpasswd -a [userName]</code> 来建立 Samba 用户。还可以配置项为 <code>tdbsam/smbpasswd/ldapsam/mysql</code> 。可以根据需求进行修改。</p></div><ul><li><strong>tdbsam</strong>: 该方式使用一个数据库文件来建立用户数据库, 数据库文件名为 passdb.tdb 。可以使用 smbpasswd -a [用户名] 来建立 Samba 用户。也可以使用 pdbedit 命令来建立用户。</li><li><strong>smbpasswd</strong>: 该方式使用 Samba 提供的工具 smbpasswd 来给系统用户设置一个用于访问 Samba 服务的密码, 客户端就用这个密码访问 Samba 共享资源。此方式还要使用一个 smb passwd file = /usr/local/samba/etc/smbpasswd（或 /etc/samba/smbpasswd） 参数来指定保存用户名和密码的文件, 该文件需要手动建立。不推荐使用此方法。</li><li><strong>ldapsam</strong>: 该方式基于 LADP 的账户管理方式来验证用户, 先要建立 LDAP 服务。</li><li><strong>mysql</strong>: 该方式是将 Samba 服务器的用户名和密码存储到 MySQL 数据库中。</li></ul><figure><img src="`+r+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h3 id="设置白名单" tabindex="-1"><a class="header-anchor" href="#设置白名单" aria-hidden="true">#</a> 设置白名单</h3><p><code>Default Configuration:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">;</span>hosts allow <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">\\</span>. <span class="token number">192.168</span>.12<span class="token punctuation">\\</span>. <span class="token number">192.168</span>.13.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认的配置是将白名单进行注释掉的, 这里需要注意的是, 可以配置一个具体的 IP 地址, 也可以配置一个 IP 地址段, 在配置 IP 地址段的时候要注意最后一个 <code>.</code> 不要忘了写。如默认配置中的 <code>127.</code> 就是规定 <code>127.0.0.1 ～ 127.255.255.254</code> 这个 IP 地址段可以进行访问, 具体的 IP 地址不需要最后的 <code>.</code> .</p></div><p><code>For Example:</code> <br></p><figure><img src="`+l+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h3 id="单目录限定用户访问-禁止写入文件" tabindex="-1"><a class="header-anchor" href="#单目录限定用户访问-禁止写入文件" aria-hidden="true">#</a> 单目录限定用户访问, 禁止写入文件</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>test<span class="token punctuation">]</span>                    <span class="token comment"># 共享目录的名字</span>
  comment <span class="token operator">=</span> <span class="token builtin class-name">test</span>          <span class="token comment"># 描述信息</span>
  path <span class="token operator">=</span> /home/test       <span class="token comment"># 共享目录路径</span>
  browseable <span class="token operator">=</span> <span class="token function">yes</span>        <span class="token comment"># 是否允许浏览</span>
  writable <span class="token operator">=</span> no           <span class="token comment"># 是否允许用户写入或者创建文件</span>
  guest ok <span class="token operator">=</span> no           <span class="token comment"># 是否允许 guest 用户访问</span>
  valid <span class="token function">users</span> <span class="token operator">=</span> sx
  <span class="token comment"># 白名单,指定能够进入此资源目录的特定用户,使用逗号隔开,如果是组的话,使用 @ 指明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外还可以配置以下参数</p><ul><li><strong>read only</strong> =&gt; 设置是否只读, <code>yes/no</code></li><li><strong>public</strong> =&gt; 设置是否让所有可以登录的用户看到这个项目</li><li><strong>create mode</strong> =&gt; 指明新建立的文件的属性, 一般是 <code>0755</code> 。</li><li><strong>directory mode</strong> =&gt; 指明新建立的目录的属性, 一般是 <code>0755</code> 。</li></ul><figure><img src="`+p+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h3 id="创建共享目录-设置权限" tabindex="-1"><a class="header-anchor" href="#创建共享目录-设置权限" aria-hidden="true">#</a> 创建共享目录, 设置权限</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /hoem/test
<span class="token function">chmod</span> <span class="token number">777</span> /home/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>共享目录一定要有执行权限, 一般 <code>755</code> 就够了, 这里设置 <code>777</code> 就是权限大一点就是了。</p></div><figure><img src="`+u+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h3 id="添加-samba-用户" tabindex="-1"><a class="header-anchor" href="#添加-samba-用户" aria-hidden="true">#</a> 添加 SAMBA 用户</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> zc
<span class="token function">useradd</span> sx
smbpasswd <span class="token parameter variable">-a</span> zc
smbpasswd <span class="token parameter variable">-a</span> sx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里需要注意的是, 要使用 <code>smbpasswd -a</code> 创建用户, 因为之前设置了用户密码的存储方式为 <code>tdbsam</code> 。</p></div><figure><img src="`+m+'" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><h3 id="使用-windows-访问" tabindex="-1"><a class="header-anchor" href="#使用-windows-访问" aria-hidden="true">#</a> 使用 windows 访问</h3><p><code>For Example:</code> <br></p><figure><img src="'+b+`" alt="SAMBA 服务安全配置" tabindex="0" loading="lazy"><figcaption>SAMBA 服务安全配置</figcaption></figure><p>输入用户名和密码, 就可以愉快的进行测试了, 这里就不多说了。</p><h3 id="使用-smbclient-访问" tabindex="-1"><a class="header-anchor" href="#使用-smbclient-访问" aria-hidden="true">#</a> 使用 smbclient 访问</h3><h4 id="列出共享文件夹" tabindex="-1"><a class="header-anchor" href="#列出共享文件夹" aria-hidden="true">#</a> 列出共享文件夹</h4><p>列出某个 IP 地址所提供的共享文件夹</p><p><code>Connect Format:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>smbclient <span class="token parameter variable">-L</span> <span class="token punctuation">[</span>ip<span class="token punctuation">]</span> <span class="token parameter variable">-U</span> <span class="token punctuation">[</span>userName<span class="token punctuation">]</span>%<span class="token punctuation">[</span>password<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="像-ftp-客户端一样使用-smbclient" tabindex="-1"><a class="header-anchor" href="#像-ftp-客户端一样使用-smbclient" aria-hidden="true">#</a> 像 FTP 客户端一样使用 smbclient</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>执行 smbclient 命令成功后, 进入 smbclient 环境, 出现提示符: <code>smb:\\&gt;</code> 这里有许多命令和 ftp 命令相似, 如 <code>cd</code> 、 <code>lcd</code> 、 <code>get</code> 、 <code>megt</code> 、 <code>put</code> 、 <code>mput</code> 等。通过这些命令, 我们可以访问远程主机的共享资源。</p></div><p><code>Connect Format:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>smbclient http://<span class="token punctuation">[</span>ip<span class="token punctuation">]</span>/<span class="token punctuation">[</span>shareFolder<span class="token punctuation">]</span> <span class="token parameter variable">-U</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span>%<span class="token punctuation">[</span>password<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,73);function f(k,x){return n(),e("div",null,[g,i(" more "),v])}const S=s(h,[["render",f],["__file","liunx-service-samba.html.vue"]]);export{S as default};
