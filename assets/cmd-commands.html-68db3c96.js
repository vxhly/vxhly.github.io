import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,d as i,a,e as t}from"./app-95dad6bf.js";const c={},p=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"记录 windows 下常用的 CMD 命令。")],-1),l=t(`<h2 id="改变-cmd-显示颜色" tabindex="-1"><a class="header-anchor" href="#改变-cmd-显示颜色" aria-hidden="true">#</a> 改变 CMD 显示颜色</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>color <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="支持的颜色" tabindex="-1"><a class="header-anchor" href="#支持的颜色" aria-hidden="true">#</a> 支持的颜色</h3><ul><li>0 = 黑色</li><li>1 = 蓝色</li><li>2 = 绿色</li><li>3 = 浅绿色</li><li>4 = 红色</li><li>5 = 紫色</li><li>6 = 黄色</li><li>7 = 白色</li><li>8 = 灰色</li><li>9 = 淡蓝色</li><li>A = 淡绿色</li><li>B = 淡浅绿色</li><li>C = 淡红色</li><li>D = 淡紫色</li><li>E = 淡黄色</li><li>F = 亮白色</li></ul><h2 id="用户和用户组相关的命令" tabindex="-1"><a class="header-anchor" href="#用户和用户组相关的命令" aria-hidden="true">#</a> 用户和用户组相关的命令</h2><h3 id="添加或删除用户" tabindex="-1"><a class="header-anchor" href="#添加或删除用户" aria-hidden="true">#</a> 添加或删除用户</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加一个永不过期的用户, 并且设置登录口令</span>
net user <span class="token punctuation">[</span>userName<span class="token punctuation">]</span> <span class="token punctuation">[</span>password<span class="token punctuation">]</span> /add /expires:never

<span class="token comment"># 删除用户</span>
net user <span class="token punctuation">[</span>userName<span class="token punctuation">]</span> /delete
将用户添加到管理员组或从管理员组删除

<span class="token comment"># 将用户添加到管理员组</span>
net localgroup Administrators <span class="token punctuation">[</span>userName<span class="token punctuation">]</span> /add

<span class="token comment"># 将用户从管理员组删除</span>
net localgroup Administrators <span class="token punctuation">[</span>userName<span class="token punctuation">]</span> /delete

<span class="token comment"># 修改当前用户的密码</span>
net user <span class="token punctuation">[</span>userName<span class="token punctuation">]</span> <span class="token punctuation">[</span>password<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="激活或禁用用户" tabindex="-1"><a class="header-anchor" href="#激活或禁用用户" aria-hidden="true">#</a> 激活或禁用用户</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net user <span class="token punctuation">[</span>userName<span class="token punctuation">]</span> /active:yes    <span class="token comment"># 激活用户</span>
net user <span class="token punctuation">[</span>userName<span class="token punctuation">]</span> /active:no    <span class="token comment"># 禁用用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建或删除用户组" tabindex="-1"><a class="header-anchor" href="#新建或删除用户组" aria-hidden="true">#</a> 新建或删除用户组</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net localgroup <span class="token punctuation">[</span>groupName<span class="token punctuation">]</span> /add      <span class="token comment"># 新建用户组</span>
net localgroup <span class="token punctuation">[</span>groupName<span class="token punctuation">]</span> /delete    <span class="token comment"># 删除用户组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件和目录相关命令" tabindex="-1"><a class="header-anchor" href="#文件和目录相关命令" aria-hidden="true">#</a> 文件和目录相关命令</h2><h3 id="列出目录结构" tabindex="-1"><a class="header-anchor" href="#列出目录结构" aria-hidden="true">#</a> 列出目录结构</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dir</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>
<span class="token function">dir</span> /a:h /s    <span class="token comment"># 显示当前目录及其子目录下的隐藏文件</span>
<span class="token function">dir</span> /a:s /s    <span class="token comment"># 显示当前目录及其子目录下的系统文件</span>
<span class="token function">dir</span> /a:r /s    <span class="token comment"># 显示当前目录及其子目录下的只读文件</span>
<span class="token function">dir</span> /a:a /s    <span class="token comment"># 显示当前目录及其子目录下的存档文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建文件并向文件输出信息" tabindex="-1"><a class="header-anchor" href="#创建文件并向文件输出信息" aria-hidden="true">#</a> 创建文件并向文件输出信息</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;test text&quot;</span> <span class="token operator">&gt;</span> <span class="token number">1</span>.txt    <span class="token comment"># 覆盖</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tesr text&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>.txt   <span class="token comment"># 追加</span>
conpy con <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>    <span class="token comment"># ctrl+Z 回车结束输入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>md <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="切换目录、-盘符" tabindex="-1"><a class="header-anchor" href="#切换目录、-盘符" aria-hidden="true">#</a> 切换目录、 盘符</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>
<span class="token builtin class-name">cd</span> /      <span class="token comment"># 切换到根目录</span>
d:        <span class="token comment"># 切换到 D 盘</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件或目录" tabindex="-1"><a class="header-anchor" href="#删除文件或目录" aria-hidden="true">#</a> 删除文件或目录</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>del <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>           <span class="token comment"># 删除文件</span>
rd <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>          <span class="token comment"># 删除空目录（目录中不能有子目录和文件）</span>
rd <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span> /S /Q    <span class="token comment"># 删除目录并同时删除目录中的子目录以及文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动或复制文件" tabindex="-1"><a class="header-anchor" href="#移动或复制文件" aria-hidden="true">#</a> 移动或复制文件</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>move <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>    <span class="token comment"># 移动文件（也可重命名）</span>
copy <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>    <span class="token comment"># 复制单文件</span>

<span class="token comment"># 复制目录及其子目录（包含空目录）</span>
xcopy <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>folderName<span class="token punctuation">]</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>folderName<span class="token punctuation">]</span> /E

<span class="token comment"># 复制目录及其子目录（不包含空目录）</span>
xcopy path:/<span class="token punctuation">[</span>folderName<span class="token punctuation">]</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>folderName<span class="token punctuation">]</span> /S

<span class="token comment"># 复制隐藏文件和系统文件</span>
xcopy <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span> /H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看文件的内容" tabindex="-1"><a class="header-anchor" href="#查看文件的内容" aria-hidden="true">#</a> 查看文件的内容</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">type</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>     <span class="token comment"># 在 DOS 下查看</span>
start <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>    <span class="token comment"># 调用默认程序查看</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置文件或目录属性" tabindex="-1"><a class="header-anchor" href="#设置文件或目录属性" aria-hidden="true">#</a> 设置文件或目录属性</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>attrib +S +H <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>    <span class="token comment"># 添加系统文件和隐藏文件属性</span>

<span class="token comment"># 处理文件夹及子文件里匹配的文件（包含该文件夹）</span>
attrib +S +H <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span> /S /D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名" tabindex="-1"><a class="header-anchor" href="#重命名" aria-hidden="true">#</a> 重命名</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ren <span class="token punctuation">[</span>fileName1<span class="token punctuation">]</span> <span class="token punctuation">[</span>fileName2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示目录树" tabindex="-1"><a class="header-anchor" href="#显示目录树" aria-hidden="true">#</a> 显示目录树</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree <span class="token punctuation">[</span>path<span class="token punctuation">]</span>:/<span class="token punctuation">[</span>folderName<span class="token punctuation">]</span> /F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="网络、-服务相关" tabindex="-1"><a class="header-anchor" href="#网络、-服务相关" aria-hidden="true">#</a> 网络、 服务相关</h2><h3 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ping</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-l</span> <span class="token number">65500</span> <span class="token punctuation">[</span>IP or domain<span class="token punctuation">]</span>      <span class="token comment"># 死亡之 ping</span>
<span class="token function">ping</span> <span class="token punctuation">[</span>ip<span class="token punctuation">]</span>                           <span class="token comment"># 测试网络的连通性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ipconfig" tabindex="-1"><a class="header-anchor" href="#ipconfig" aria-hidden="true">#</a> ipconfig</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ipconfig  <span class="token parameter variable">-all</span>      <span class="token comment"># 查看当前所有的 ip 地址信息</span>
ipconfig /release   <span class="token comment"># 清除当前获取到的 ip 地址</span>
ipconfig /renew     <span class="token comment"># 重新获取 ip 地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="natstat" tabindex="-1"><a class="header-anchor" href="#natstat" aria-hidden="true">#</a> natstat</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-ano</span>    <span class="token comment"># 列出所有端口的使用情况</span>
<span class="token function">netstat</span> <span class="token parameter variable">-o</span>      <span class="token comment"># 显示连接进程的情况, 通常用于查找是否有木马程序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arp" tabindex="-1"><a class="header-anchor" href="#arp" aria-hidden="true">#</a> arp</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>arp <span class="token parameter variable">-a</span>      <span class="token comment"># 显示 ARP 列表</span>
arp <span class="token parameter variable">-d</span>      <span class="token comment"># 清除 ARP 列表, 需要管理员权限</span>
arp <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>ip<span class="token punctuation">]</span> <span class="token punctuation">[</span>macAddress<span class="token punctuation">]</span>    <span class="token comment"># 添加静态项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="net" tabindex="-1"><a class="header-anchor" href="#net" aria-hidden="true">#</a> net</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net view      <span class="token comment"># 查看当前局域网内的其他连接者</span>
net start     <span class="token comment"># 查看开启了哪些服务</span>
net start <span class="token punctuation">[</span>serviceName<span class="token punctuation">]</span>     <span class="token comment"># 开启某一个服务</span>
net stop <span class="token punctuation">[</span>serviceName<span class="token punctuation">]</span>      <span class="token comment"># 停止某一个服务</span>

<span class="token comment"># 将某一个服务器的 C 盘映射成 K 盘, 攻击者常用命令</span>
net use k: <span class="token punctuation">\\</span>/<span class="token punctuation">[</span>ipAddress<span class="token punctuation">]</span><span class="token punctuation">\\</span>c$

<span class="token comment"># 以下命令建议需管理员权限</span>
net share             <span class="token comment"># 查看本地开启的共享</span>
net share ipc$        <span class="token comment"># 开启 ipc$ 共享</span>
net share ipc$ /del   <span class="token comment"># 删除 ipc$ 共享</span>
net share c$ /del     <span class="token comment"># 删除 C 盘的共享</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tracert" tabindex="-1"><a class="header-anchor" href="#tracert" aria-hidden="true">#</a> tracert</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tracert <span class="token punctuation">[</span>IP or domain<span class="token punctuation">]</span>       <span class="token comment"># 跟踪路由</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mstsc" tabindex="-1"><a class="header-anchor" href="#mstsc" aria-hidden="true">#</a> mstsc</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mstsc /v: <span class="token punctuation">[</span>ip<span class="token punctuation">]</span> /console     <span class="token comment"># 远程连接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关机和重启" tabindex="-1"><a class="header-anchor" href="#关机和重启" aria-hidden="true">#</a> 关机和重启</h2><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">shutdown</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-t</span> <span class="token number">180</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;确定关机吗？ &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项解释</p><ul><li><code>-s</code> 关机</li><li><code>-r</code> 重启</li><li><code>-t</code> 指定时间</li><li><code>-c</code> 对话框确认信息</li><li><code>-a</code> 取消上一个任务</li></ul><h2 id="获取命令的帮助信息" tabindex="-1"><a class="header-anchor" href="#获取命令的帮助信息" aria-hidden="true">#</a> 获取命令的帮助信息</h2><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
<span class="token builtin class-name">help</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
<span class="token punctuation">[</span>command<span class="token punctuation">]</span> /?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统文件修复-需管理员权限" tabindex="-1"><a class="header-anchor" href="#系统文件修复-需管理员权限" aria-hidden="true">#</a> 系统文件修复（需管理员权限）</h2><h3 id="查看当前的系统信息" tabindex="-1"><a class="header-anchor" href="#查看当前的系统信息" aria-hidden="true">#</a> 查看当前的系统信息</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systeminfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="扫描系统文件错误并复原" tabindex="-1"><a class="header-anchor" href="#扫描系统文件错误并复原" aria-hidden="true">#</a> 扫描系统文件错误并复原</h3><p><code>For Example:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sfc /scannow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,82);function d(o,r){return s(),e("div",null,[p,i(" more "),l])}const h=n(c,[["render",d],["__file","cmd-commands.html.vue"]]);export{h as default};