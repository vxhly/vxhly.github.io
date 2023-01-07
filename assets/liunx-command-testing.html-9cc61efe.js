import{_ as s,V as n,W as e,Z as i,X as a,$ as t}from"./framework-ac7be777.js";const l={},c=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"简单的一些 Liunx 命令练习。")],-1),d=t(`<h2 id="【文件的压缩和解压缩】" tabindex="-1"><a class="header-anchor" href="#【文件的压缩和解压缩】" aria-hidden="true">#</a> 【文件的压缩和解压缩】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>使用 tar 命令将 <code>/etc</code> 目录打包至 <code>/tmp</code> 目录下（仅打包, 不压缩）, 将打包后的文件, 以 <code>gzip</code> 方式压缩【共两条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> /tmp/etc.tar /etc
<span class="token function">gzip</span> /tmp/etc.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【创建软链接和硬链接】" tabindex="-1"><a class="header-anchor" href="#【创建软链接和硬链接】" aria-hidden="true">#</a> 【创建软链接和硬链接】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>给系统文件 <code>/etc/profile</code> 创建一个软链接 <code>lnsprofile</code> 和一个硬链接 <code>lnhprofile</code>【共两条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/profile ./lnsprofile
<span class="token function">ln</span> /etc/profile ./lnhprofile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【为文件设置隐藏属性】" tabindex="-1"><a class="header-anchor" href="#【为文件设置隐藏属性】" aria-hidden="true">#</a> 【为文件设置隐藏属性】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>为文件 <code>test</code> 设置隐藏属性, 要求其只能无法写入数据, 也无法删除它【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr +a <span class="token builtin class-name">test</span>
<span class="token comment"># or</span>
chattr +i <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【创建目录和删除目录】" tabindex="-1"><a class="header-anchor" href="#【创建目录和删除目录】" aria-hidden="true">#</a> 【创建目录和删除目录】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>创建目录 <code>./test/2017/6/25</code>, 并切换目录至 <code>./test/2017/6</code>, 删除空目录 ./25（不能使用 rm -rf）【共三条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./test/2017/6/25
<span class="token builtin class-name">cd</span> ./test/2017/6
<span class="token function">rmdir</span> ./25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">需求</p><p>查看当前所在的目录【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">需求</p><p>查看当前目录下有哪些文件或目录（包括隐藏文件）【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-la</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="【普通用户提权】" tabindex="-1"><a class="header-anchor" href="#【普通用户提权】" aria-hidden="true">#</a> 【普通用户提权】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>普通用户切换成 root 超级用户【举例两个】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span>
<span class="token comment"># or</span>
<span class="token function">su</span> -
<span class="token comment"># or</span>
<span class="token function">sudo</span> <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【创建用户和用户组】" tabindex="-1"><a class="header-anchor" href="#【创建用户和用户组】" aria-hidden="true">#</a> 【创建用户和用户组】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>创建一个用户 stuxxx, 其家目录为 <code>/home/stu</code>, 备注信息为 &quot;this is student, ID is xxxxxx&quot;, 登录 shell 为 <code>/sbin/nologi</code>n, 并设置登陆密码【共三条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-d</span> /home/stu <span class="token parameter variable">-m</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;this is student,ID is xxxxxx&quot;</span> <span class="token parameter variable">-s</span> /sbin/nologin <span class="token parameter variable">-p</span> <span class="token string">&quot;&quot;</span> stuxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">需求</p><p>创建一个 uid 为 0 的用户 student【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span>  <span class="token parameter variable">-o</span>  <span class="token parameter variable">-u</span>  <span class="token number">0</span>  student
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">需求</p><p>创建用户组 test【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="【用户管理】" tabindex="-1"><a class="header-anchor" href="#【用户管理】" aria-hidden="true">#</a> 【用户管理】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>锁定用户 stuxxx, 使其不能登陆系统【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-s</span> /sbin/nologin stu2xxx
<span class="token comment"># or</span>
<span class="token function">passwd</span> <span class="token parameter variable">-l</span> stu2xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【新建文件】" tabindex="-1"><a class="header-anchor" href="#【新建文件】" aria-hidden="true">#</a> 【新建文件】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>新建一个文件 file, 添加内容 &quot;this is text, ID is xxxxxx&quot;, 设置其权限为 000【共三条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> <span class="token function">file</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;this is text,ID is xxxxxx&quot;</span> <span class="token operator">&gt;</span> <span class="token function">file</span>
<span class="token function">chmod</span> 000 <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【文件的快速搜索】" tabindex="-1"><a class="header-anchor" href="#【文件的快速搜索】" aria-hidden="true">#</a> 【文件的快速搜索】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>在 <code>/etc</code> 目录下搜索 apache、ssh、ftp 的配置文件【共三条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> /etc <span class="token parameter variable">-type</span> f <span class="token parameter variable">-iname</span> <span class="token string">&#39;*apache2.*&#39;</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-type</span> f <span class="token parameter variable">-iname</span> <span class="token string">&#39;*ssh.*&#39;</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-type</span> f <span class="token parameter variable">-iname</span> <span class="token string">&#39;*ftp.*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【文件的查看和快速定位】" tabindex="-1"><a class="header-anchor" href="#【文件的查看和快速定位】" aria-hidden="true">#</a> 【文件的查看和快速定位】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>查看 <code>/etc/passwd</code> 文件和 <code>/etc/shadow</code> 文件, 并使用 grep 过滤出 student 用户的信息【共两条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;student&#39;</span>
<span class="token function">cat</span> /etc/shadow <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;student&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【更改目录或者文件的属性】" tabindex="-1"><a class="header-anchor" href="#【更改目录或者文件的属性】" aria-hidden="true">#</a> 【更改目录或者文件的属性】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>将目录 <code>./test/\\*</code> 的所有者和所有组修改成 student【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> student:student ./test/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="【系统环境变量的查看与配置】" tabindex="-1"><a class="header-anchor" href="#【系统环境变量的查看与配置】" aria-hidden="true">#</a> 【系统环境变量的查看与配置】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>查看当前的系统环境变量配置【共两条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">env</span>
<span class="token comment"># or</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">需求</p><p>将 <code>/tmp</code> 目录添加至系统 <code>$PATH</code> 变量中【共一条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="【iptables-规则】" tabindex="-1"><a class="header-anchor" href="#【iptables-规则】" aria-hidden="true">#</a> 【iptables 规则】</h2><div class="hint-container tip"><p class="hint-container-title">需求</p><p>设置 iptables 规则, 只允许 80 端口和 22 端口通过防火墙【共两条命令】</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,49);function r(p,o){return n(),e("div",null,[c,i(" more "),d])}const v=s(l,[["render",r],["__file","liunx-command-testing.html.vue"]]);export{v as default};
