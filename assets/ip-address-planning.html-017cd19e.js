import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,d as n,a as e,e as l}from"./app-04dc5a52.js";const c={},s=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"前言"),e("p",null,"当申请到一个 C 类网络地址时, 很多时候需要对其子网划分, 那么一个高效简便的子网划分方法由此而生。")],-1),r=l(`<h2 id="先分清五类网络地址" tabindex="-1"><a class="header-anchor" href="#先分清五类网络地址" aria-hidden="true">#</a> 先分清五类网络地址</h2><p>IP 地址分为 A, B, C, D, E 五类</p><ul><li>网络号: 用于识别主机所在的网络</li><li>主机号: 用于识别该网络中的主机</li></ul><p>其中 A 类分配给政府机关使用, B 类地址给大中型企业使用, C 类地址给个人使用。这三种是主要的。</p><p>D 类用于组播, E 类用于实验, 各类可容纳的地址数目不同。</p><p>其中 A 类、B 类、C 类这三类地址用于 <code>TCP/IP</code> 节点。其它两类 D 类和 E 类被用于特殊用途。</p><p>A、B、C 三类 IP 地址的特征: 当将 IP 地址写成二进制形式时, A 类地址的第一位总是 O, B 类地址的前两位总是 10, C 类地址的前三位总是 <code>110</code> 。</p><h3 id="a-类地址" tabindex="-1"><a class="header-anchor" href="#a-类地址" aria-hidden="true">#</a> A 类地址</h3><ul><li>A 类地址第 1 字节为网络地址, 其它 3 个字节为主机地址</li><li>A 类地址范围: <code>1.0.0.1</code> -- <code>126.255.255.254</code></li><li>A 类地址中的私有地址和保留地址（所谓的私有地址就是在互联网上不使用, 而被用在局域网络中的地址；保留地址则不被分配。）</li></ul><p>-- <code>10.X.X.X</code> 是私有地址 -- <code>127.X.X.X</code> 是保留地址, 用做循环测试用的</p><ul><li>最大的网络数: <code>2^7-2</code> , 网络中最大的主机数: <code>2^24-2</code></li></ul><h3 id="b-类地址" tabindex="-1"><a class="header-anchor" href="#b-类地址" aria-hidden="true">#</a> B 类地址</h3><ul><li>B 类地址第 1 字节和第 2 字节为网络地址, 其它 2 个字节为主机地址</li><li>B 类地址范围: <code>128.0.0.1</code> -- <code>191.255.255.254</code></li><li>B 类地址的私有地址和保留地址</li></ul><p>-- <code>172.16.0.0</code> -- <code>172.31.255.255</code> 是私有地址 -- <code>169.254.X.X</code> 是保留地址。如果你的 IP 地址是自动获取 IP 地址, 而你在网络上又没有找到可用的 DHCP 服务器。就会得到其中一个 IP</p><ul><li>最大的网络数: <code>2^14-2</code> , 网络中最大的主机数: <code>2^16-2</code></li></ul><h3 id="c-类地址" tabindex="-1"><a class="header-anchor" href="#c-类地址" aria-hidden="true">#</a> C 类地址</h3><ul><li>C 类地址第 1 字节、第 2 字节和第 3 个字节为网络地址, 第 4 个个字节为主机地址。另外第 1 个字节的前三位固定为 <code>110</code></li><li>C 类地址范围: <code>192.0.0.1</code> -- <code>223.255.255.254</code></li><li>C 类地址中的私有地址:</li></ul><p>-- <code>192.168.X.X</code> 是私有地址</p><ul><li>最大的网络数: <code>2^21-2</code> , 网络中最大的主机数: <code>2^8-2</code></li></ul><h3 id="d-类地址" tabindex="-1"><a class="header-anchor" href="#d-类地址" aria-hidden="true">#</a> D 类地址</h3><ul><li>D 类地址不分网络地址和主机地址, 它的第 1 个字节的前四位固定为 <code>1110</code></li><li>D 类地址范围: <code>224.0.0.1</code> -- <code>239.255.255.254</code></li></ul><h3 id="e-类地址" tabindex="-1"><a class="header-anchor" href="#e-类地址" aria-hidden="true">#</a> E 类地址</h3><ul><li>E 类地址也不分网络地址和主机地址, 它的第 1 个字节的前五位固定为 <code>11110</code></li><li>E 类地址范围: <code>240.0.0.1</code> -- <code>255.255.255.254</code></li></ul><h2 id="c-类-ip-地址规划" tabindex="-1"><a class="header-anchor" href="#c-类-ip-地址规划" aria-hidden="true">#</a> C 类 IP 地址规划</h2><h3 id="首先-准确的记住-2-1-2-8-的得数" tabindex="-1"><a class="header-anchor" href="#首先-准确的记住-2-1-2-8-的得数" aria-hidden="true">#</a> 首先, 准确的记住 2^1 ~ 2^8 的得数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2^1 = 2
2^2 = 4
2^3 = 8
2^4 = 16
2^5 = 32
2^6 = 64
2^7 = 128
2^8 = 256
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="地址划分" tabindex="-1"><a class="header-anchor" href="#地址划分" aria-hidden="true">#</a> 地址划分</h3><p>划分时要么根据主机数来划分；要么根据子网数来划分。</p><h4 id="第一种情况" tabindex="-1"><a class="header-anchor" href="#第一种情况" aria-hidden="true">#</a> 第一种情况</h4><p>已知 IP 地址段和子网个数, 求子网的规划</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>已知,某公司总部申请到 200.200.200.0 网段,该公司总部有三个部门。
每个部门都将拥有属于该部门的子网,写出每个部门将会分配到的IP地址段（包含网络地址和广播地址）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解析: 要划分 3 个子网, 那么 2^n&gt;=3 , 得出 n&gt;=2 , 取 n=2 , 即 2^2=4 , 可以划分四个子网。每个子网有 2^(8-2)-2=62 个主机。广播号等于网络号加 (2^(8-2)-1), 子网掩码为 24+2=26。</p><p><code>答案: </code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>四个子网分别是:

A: 200.200.200.0/26 ~ 200.200.200.63/26
B: 200.200.200.64/26 ~ 200.200.200.127/26
C: 200.200.200.128/26 ~ 200.200.200.191/26
D: 200.200.200.192/26 ~ 200.200.200.255/26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二种情况" tabindex="-1"><a class="header-anchor" href="#第二种情况" aria-hidden="true">#</a> 第二种情况</h4><p>已知 IP 地址段和各子网的主机个数, 求子网规划</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>已知,某公司总部申请到 200.200.200.0 网段,该公司总部有三个部门,
分别是 A 部们、B 部门、 C 部门,
其中 A 部门有 100 台电脑,B 部门有 48 台电脑,C 部门有 50 台电脑,
写出每个部门将会分配到的 IP 地址段（包含网络地址和广播地址）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析: 要划分 3 个子网, 第一个子网有 100 台主机, 那么 2^n&gt;=100, 得出 n&gt;=7, 则该子网总共能容纳主机数为 2^7-2=126。广播号等于网络号加上 (2^7-1), 该子网的掩码为 32-7=25。以此类推。</p><p><code>答案: </code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>三个子网分别是:

A: 200.200.200.0/25 ~ 200.200.200.127/25
B: 200.200.200.128/26 ~ 200.200.200.191/26
C: 200.200.200.192/26 ~ 200.200.200.255/26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ip-地址规划练习" tabindex="-1"><a class="header-anchor" href="#ip-地址规划练习" aria-hidden="true">#</a> IP 地址规划练习</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>已知, 某公司总部申请到 211.91 .5 .0 网段, 该公司总部有六个部门,
每个部门对应的电脑台数分别是 A 部门 100 台、 B 部门 50 台、 C 部门 10 台、 E 部门 10 台、 F 部门 10 台。
写出每个部门将会分配到的 IP 地址段（ 包含网络地址和广播地址）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析: 要划分 6 个子网, 第一个子网有 100 台主机, 那么 2^n&gt;=100, 得出 n&gt;=7, 则该子网总共能容纳主机数为 2^7-2=126。广播号等于网络号加上 (2^7-1), 该子网的掩码为 32-7=25。以此类推。</p><p><code>答案: </code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>六个子网分别是:

A: 211.91.5.0/25 ~ 211.91.5.127/25
B: 211.91.5.128/26 ~ 211.91.5.191/26
C: 211.91.5.192/28 ~ 211.91.5.207/28
D: 211.91.5.208/28 ~ 211.91.5.223/28
E: 211.91.5.224/28 ~ 211.91.5.239/28
F: 211.91.5.240/28 ~ 211.91.5.255/28
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function t(o,u){return i(),a("div",null,[s,n(" more "),r])}const m=d(c,[["render",t],["__file","ip-address-planning.html.vue"]]);export{m as default};
