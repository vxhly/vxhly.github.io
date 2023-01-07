import{_ as d,V as r,W as o,Z as e,X as t,$ as c}from"./framework-ac7be777.js";const n="/assets/liunx-directory-structure.png",s={},g=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"前言"),t("p",null,"接触了 Liunx 也有一段时间了, 也算对 Liunx 有一定的了解, 在这里将陆续的推出 Liunx 的学习笔记系列, 做个记录, 方便以后忘记有处可循。Liunx 是以文件系统为主的, 所以 Liunx 下的每一个目录都有其各自的作用, 则本篇将介绍 Liunx 的各个目录结构及其说明。")],-1),i=c('<h2 id="目录结构图" tabindex="-1"><a class="header-anchor" href="#目录结构图" aria-hidden="true">#</a> 目录结构图</h2><figure><img src="'+n+'" alt="目录结构图" tabindex="0" loading="lazy"><figcaption>目录结构图</figcaption></figure><h2 id="目录结构说明" tabindex="-1"><a class="header-anchor" href="#目录结构说明" aria-hidden="true">#</a> 目录结构说明</h2><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td><strong>/</strong></td><td>根目录。在 <code>Windows</code> , <code>DOS</code> 或者其他类似的操作系统里面, 每个分区都会有一个相应的根目录。但是 <code>Linux</code> 和其他 <code>UNIX</code> 系统则把所有的文件都放在一个目录树里面, <code>/</code> 就是唯一的根目录。一般来讲, 根目录下面很少保存什么文件, 或者只有一个内核映像在这里。</td></tr><tr><td><strong>/boot</strong></td><td>很多 <code>Linux</code> 系统把内核映像和其他一些和启动有关的文件都放在这里。</td></tr><tr><td><strong>/tmp</strong></td><td>一般只有启动时产生的临时文件才会放在这个地方。我们自己的临时文件都放在 <code>/var/tmp</code> 。</td></tr><tr><td><strong>/mnt</strong></td><td>这个目录下面放着一些用来安装其他设备的子目录, 比如说 <code>/mnt/cdrom</code> 或者 <code>/mnt/floppy</code> 。在有些 <code>Linux</code> 中这个目录被 <code>/mount</code> 代替。</td></tr><tr><td><strong>/lib</strong></td><td>启动的时候所要用到的库文件都放在这个目录下。那些非启动用的库文件都会放在 <code>/usr/lib</code> 下。内核模块是放在 <code>/lib/modules/</code> （内核版本）下的。</td></tr><tr><td><strong>/proc</strong></td><td>这个目录在磁盘上其实是不存在的。里面的文件都是关于当前系统的状态, 包括正在运行的进程、硬件状态、内存使用的多少等。</td></tr><tr><td><strong>/dev</strong></td><td>这个目录下保存着所有的设备文件。里面有一些是由 <code>Linux</code> 内核创建的用来控制硬件设备的特殊文件。</td></tr><tr><td><strong>/var</strong></td><td>这里有一些被系统改变过的数据。比如说 <code>/var/tmp</code> , 就是用来储存临时文件的。还有很多其他的进程和模块把它们的记录文件也放在这个地方, 包括如下一些重要的子目录</td></tr><tr><td><strong>/var/log</strong></td><td>这里放着绝大部分的记录文件。随着时间的增长, 这个目录会变得很庞大, 所以要定期清理。</td></tr><tr><td><strong>/var/run</strong></td><td>包括了各种运行时的信息。</td></tr><tr><td><strong>/var/lib</strong></td><td>包括了一些系统运行时需要的文件。</td></tr><tr><td><strong>/var/spool</strong></td><td>邮件, 新闻, 打印序列的所在地。</td></tr><tr><td><strong>/root</strong></td><td><code>root</code> 用户的主目录。</td></tr><tr><td><strong>/home</strong></td><td>一般用户的主目录都会放在这个目录下。在 <code>Linux</code> 下, 可以通过 <code>#cd ~</code> 来进入自己的主目录。</td></tr><tr><td><strong>/etc</strong></td><td>这里保存着绝大部分的系统配置文件。相对来讲, 单个用户的系统配置文件会保存在这个用户自己的主目录里面。下面列举其中一些重要的子目录。</td></tr><tr><td><strong>/etc/X11</strong></td><td>这里放着 X 窗口系统（ <code>Linux</code> 中的图形用户界面系统）所需要的配置文件。 <code>XF86Config</code> 就是把配置储存到这个地方的。 <code>/etc/X11/fonts</code> 里面放着一些服务器需要的字体, 还存放一些窗口管理器存放的配置文件。</td></tr><tr><td><strong>/etc/init.d</strong></td><td>这个目录保存着启动描述文件, 包括各种模块和服务的加载描述。所以如果不清楚的话, 千万不要随便删除其中的文件, 这里存放的文件都是系统自动进行配置的, 不需要用户配置。</td></tr><tr><td><strong>/etc/rcS.d</strong></td><td>这里放着一些连接到 <code>/etc/init.d</code> 的文件, 根据 <code>runlevel</code> 的不同而执行相应的描述。这里的文件名都是由 <code>S</code> 来开头的, 然后是一个两位的数字----表示各种服务启动的顺序。比如, <code>S24foo</code> 就是在 <code>S42bar</code> 前面执行的。接着就是相应的连接到 <code>/etc/init.d</code> 下面的文件名字了。</td></tr><tr><td><strong>/etc/rc0.d - /etc/rc6.d</strong></td><td>这里面也是一些连接文件, 和 <code>/etc/rcS.d</code> 差不多。不同的是, 这些只会在指定的 <code>runlevel</code> 下运行相应的描述。 <code>0</code> 表示关机, <code>6</code> 表示重启。所有以 <code>K</code> 开头的文件表示关闭, 所有以 <code>S</code> 开头的文件表示重启。目前来讲, 文件的命名方式和 <code>/etc/rcS.d</code> 是一样的。</td></tr><tr><td><strong>/bin, /sbin</strong></td><td>这里分别放着启动时所需要的普通程序和系统程序。很多程序在启动以后也很有用, 它们放在这个目录下是因为它们经常要被其他程序调用。</td></tr><tr><td><strong>/usr</strong></td><td>这是一个很复杂、庞大的目录。除了上述目录之外, 几乎所有的文件都存放在这下面。下面列举其中一些重要的子目录。</td></tr><tr><td><strong>/usr/X11R6, /usr/X11, /usr/Xfree86</strong></td><td>这里保存着 X 窗口系统所需要的文件, 它的目录结构和 <code>/usr</code> 是一样的。</td></tr><tr><td><strong>/usr/bin</strong></td><td>二进制可执行文件存放的目录, 这里放着绝大部分的应用程序。</td></tr><tr><td><strong>/usr/sbin</strong></td><td>这里放着绝大部分的系统程序。</td></tr><tr><td><strong>/usr/games</strong></td><td>游戏程序和相应的数据会放在这里。</td></tr><tr><td><strong>/usr/include</strong></td><td>这个目录保存着 <code>C</code> 和 <code>C++</code> 的头文件。</td></tr><tr><td><strong>/usr/lib</strong></td><td>启动时用不到的库文件都会放在这里。</td></tr><tr><td><strong>/usr/info</strong></td><td>这里保存着 <code>GNU Info</code> 程序所需要的数据。</td></tr><tr><td><strong>/usr/man</strong></td><td>这里保存着 <code>man</code> 程序所需要的数据。</td></tr><tr><td><strong>/usr/src</strong></td><td>这里保存着源代码文件。</td></tr><tr><td><strong>/usr/doc</strong></td><td>这里保存着各种文档文件。这些文件可以帮助你了解 <code>Linux</code> , 解决问题和提供一些技巧。</td></tr><tr><td><strong>/usr/local</strong></td><td>这里保存着本地计算机所需要的文件。在用户进行远程访问的时候特别有意义。这个目录在有些 <code>Linux</code> 系统下就是一个单独的分区, 存放一些这台机子所属的那个用户的文件。里面的结构和 <code>/usr</code> 是一样的。</td></tr><tr><td><strong>/usr/shared, /usr/share</strong></td><td>这里保存着各种共享文件。</td></tr></tbody></table>',4);function a(u,l){return r(),o("div",null,[g,e(" more "),i])}const m=d(s,[["render",a],["__file","liunx-directory-structure.html.vue"]]);export{m as default};
