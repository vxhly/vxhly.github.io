import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as l,d as r,a as n,b as a,f as e,e as o}from"./app-eb30587d.js";const c="/assets/install-mongodb-1.png",p="/assets/install-mongodb-2.png",u="/assets/install-mongodb-3.png",g="/assets/install-mongodb-4.png",h="/assets/install-mongodb-5.png",b="/assets/install-mongodb-6.png",m="/assets/install-mongodb-7.png",v="/assets/install-mongodb-8.png",f={},k=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"MongoDB 是目前在 IT 行业非常流行的一种非关系型数据库 (NoSql), 其灵活的数据存储方式备受当前 IT 从业人员的青睐。这里主要讲如何在 Windows 平台下安装 MongoDB。")],-1),_=n("h2",{id:"下载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),a(" 下载")],-1),D={href:"http://www.mongodb.com/download-center?jmp=nav#community",target:"_blank",rel:"noopener noreferrer"},x=o('<h2 id="手动简单的配置" tabindex="-1"><a class="header-anchor" href="#手动简单的配置" aria-hidden="true">#</a> 手动简单的配置</h2><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3><p>安装成功之后, 将 mongodb 目录下的 bin 目录添加至 path 变量中, 如:</p><figure><img src="'+c+'" alt="Windows 下安装 MongoDB" tabindex="0" loading="lazy"><figcaption>Windows 下安装 MongoDB</figcaption></figure><h3 id="创建数据库文件存放目录" tabindex="-1"><a class="header-anchor" href="#创建数据库文件存放目录" aria-hidden="true">#</a> 创建数据库文件存放目录</h3><p>创建数据库文件的存放位置, 比如 <code>D:\\mongodb\\data\\db</code> 。启动 mongodb 服务之前需要必须创建数据库文件的存放文件夹, 否则命令不会自动创建, 而且不能启动成功。</p><figure><img src="'+p+`" alt="Windows 下安装 MongoDB" tabindex="0" loading="lazy"><figcaption>Windows 下安装 MongoDB</figcaption></figure><p>接下来打开命令行窗口, 切换到 <code>D:\\MongoDB\\bin</code> 目录执行如下命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--dbpath</span> D:<span class="token punctuation">\\</span>MongoDB<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>db <span class="token comment"># 其中 --dbpath 是指定数据库存放目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是命令行窗口会打印一些启动信息, 最后一行显示为如下信息时表示启动成功了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2017</span>-05-29T17:23:16.752+0800 I NETWORK  <span class="token punctuation">[</span>thread1<span class="token punctuation">]</span> waiting <span class="token keyword">for</span> connections on port <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建日志文件存放目录" tabindex="-1"><a class="header-anchor" href="#创建日志文件存放目录" aria-hidden="true">#</a> 创建日志文件存放目录</h3><p>我们需要指定 log 目录, 所以我们创建 log 目录 <code>D:\\MongoDB\\data\\logs\\mongodb.log</code> .</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--dbpath</span> D:<span class="token punctuation">\\</span>MongoDB<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>db <span class="token parameter variable">--logpath</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>MongoDB<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>logs<span class="token punctuation">\\</span>mongodb.log <span class="token parameter variable">--logappend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="Windows 下安装 MongoDB" tabindex="0" loading="lazy"><figcaption>Windows 下安装 MongoDB</figcaption></figure><p>这是命令行窗口会打印一些启动信息, 最后一行显示为如下信息时表示启动成功了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2017</span>-05-29T17:23:16.752+0800 I NETWORK  <span class="token punctuation">[</span>thread1<span class="token punctuation">]</span> waiting <span class="token keyword">for</span> connections on port <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装为-windows-服务" tabindex="-1"><a class="header-anchor" href="#安装为-windows-服务" aria-hidden="true">#</a> 安装为 Windows 服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sc create MongoDB <span class="token assign-left variable">binPath</span><span class="token operator">=</span> <span class="token string">&quot;D:\\MongoDB<span class="token entity" title="\\b">\\b</span>in\\mongod.exe --service --dbpath D:\\MongoDB\\data\\db --logpath=D:\\MongoDB\\data\\logs\\mongodb.log --logappend&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动服务时需要管理员权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net start MongoDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="Windows 下安装 MongoDB" tabindex="0" loading="lazy"><figcaption>Windows 下安装 MongoDB</figcaption></figure><h2 id="使用配置文件" tabindex="-1"><a class="header-anchor" href="#使用配置文件" aria-hidden="true">#</a> 使用配置文件</h2><p>很遗憾, 官方下载的安装包里面没有默认的配置文件, 若想使用配置文件只能自己建一个了, 另外个人也推荐使用配置文件来管理 MongoDB 的配置, 使用配置文件配置数据库文件、日志文件以及其它的一些配置都一目了然</p><ol><li>解压安装包到 <code>D:\\MongoDB</code></li><li>建立数据库目录 <code>D:\\MongoDB\\data</code></li><li>建立日志目录 <code>D:\\MongoDB\\logs</code></li><li>建立配置文件目录 <code>D:\\MongoDB\\etc</code></li><li>建立配置文件 <code>D:\\MongoDB\\etc\\mongodb.conf</code></li></ol><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">dbpath</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>MongoDB<span class="token punctuation">\\</span>data <span class="token comment"># 数据库路径</span>
<span class="token assign-left variable">logpath</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>MongoDB<span class="token punctuation">\\</span>logs<span class="token punctuation">\\</span>mongodb.log <span class="token comment"># 日志输出文件路径</span>
<span class="token assign-left variable">logappend</span><span class="token operator">=</span>true <span class="token comment"># 错误日志采用追加模式,配置这个选项后 mongodb 的日志会追加到现有的日志文件,而不是从新创建一个新文件</span>
<span class="token assign-left variable">journal</span><span class="token operator">=</span>true <span class="token comment"># 启用日志文件,默认启用</span>
<span class="token assign-left variable">quiet</span><span class="token operator">=</span>true <span class="token comment"># 这个选项可以过滤掉一些无用的日志信息,若需要调试使用请设置为 false</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">27017</span> <span class="token comment"># 端口号 默认为 27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),M={href:"https://docs.mongodb.org/manual/reference/configuration-options/",target:"_blank",rel:"noopener noreferrer"},B=o(`<h3 id="普通启动" tabindex="-1"><a class="header-anchor" href="#普通启动" aria-hidden="true">#</a> 普通启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--config</span> D:<span class="token punctuation">\\</span>MongoDB<span class="token punctuation">\\</span>etc<span class="token punctuation">\\</span>mongodb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装为-windows-服务-1" tabindex="-1"><a class="header-anchor" href="#安装为-windows-服务-1" aria-hidden="true">#</a> 安装为 Windows 服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongod <span class="token parameter variable">--config</span> D:<span class="token punctuation">\\</span>MongoDB<span class="token punctuation">\\</span>etc<span class="token punctuation">\\</span>mongodb.conf <span class="token parameter variable">--install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-sc-安装为-windows-服务" tabindex="-1"><a class="header-anchor" href="#使用-sc-安装为-windows-服务" aria-hidden="true">#</a> 使用 SC 安装为 Windows 服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sc create MongoDB <span class="token assign-left variable">binPath</span><span class="token operator">=</span> <span class="token string">&quot;D:\\MongoDB<span class="token entity" title="\\b">\\b</span>in\\mongod.exe --service --config=D:\\MongoDB<span class="token entity" title="\\e">\\e</span>tc\\mongodb.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动服务时需要管理员权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net start MongoDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="浏览器测试" tabindex="-1"><a class="header-anchor" href="#浏览器测试" aria-hidden="true">#</a> 浏览器测试</h3>`,9),w={href:"http://127.0.0.1:27017/",target:"_blank",rel:"noopener noreferrer"},W=n("br",null,null,-1),y=o('<figure><img src="'+h+`" alt="Windows 下安装 MongoDB" tabindex="0" loading="lazy"><figcaption>Windows 下安装 MongoDB</figcaption></figure><h2 id="附上-ubuntu-下安装" tabindex="-1"><a class="header-anchor" href="#附上-ubuntu-下安装" aria-hidden="true">#</a> 附上 Ubuntu 下安装</h2><p>Ubuntu 下安装非常简单, 执行一条命令就行, 无需任何配置, 执行完后直接使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="图形化管理工具" tabindex="-1"><a class="header-anchor" href="#图形化管理工具" aria-hidden="true">#</a> 图形化管理工具</h2>`,5),N={class:"hint-container tip"},z=n("p",{class:"hint-container-title"},"工具推荐",-1),T={href:"http://adminmongo.markmoffat.com/",target:"_blank",rel:"noopener noreferrer"},q=o(`<h3 id="环境需求" tabindex="-1"><a class="header-anchor" href="#环境需求" aria-hidden="true">#</a> 环境需求</h3><ul><li>Node.js(使用 nvm 进行安装)</li><li>pm2( <code>npm -g pm2</code> )</li><li>git</li></ul><h3 id="下载-1" tabindex="-1"><a class="header-anchor" href="#下载-1" aria-hidden="true">#</a> 下载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/mrvautin/adminMongo.git
<span class="token builtin class-name">cd</span> adminMongo <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pm2-启动" tabindex="-1"><a class="header-anchor" href="#pm2-启动" aria-hidden="true">#</a> pm2 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> adminMongo
pm2 start app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问测试" tabindex="-1"><a class="header-anchor" href="#访问测试" aria-hidden="true">#</a> 访问测试</h3>`,7),C={href:"http://127.0.0.1:1234/",target:"_blank",rel:"noopener noreferrer"},I=n("br",null,null,-1),E=n("figure",null,[n("img",{src:b,alt:"Windows 下安装 MongoDB",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Windows 下安装 MongoDB")],-1),V=n("h3",{id:"配置使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置使用","aria-hidden":"true"},"#"),a(" 配置使用")],-1),j=n("code",null,"mongodb://<user>:<password>@127.0.0.1:<port>/<db>",-1),O={href:"http://mongodb.github.io/node-mongodb-native/2.1/reference/connecting/connection-settings/",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,[a("连接成功后创建一个数据库进行测试"),n("br")],-1),K=n("figure",null,[n("img",{src:m,alt:"Windows 下安装 MongoDB",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Windows 下安装 MongoDB")],-1),L=n("p",null,[a("随意添加一些数据, 注意数据为 JSON 格式"),n("br")],-1),P=n("figure",null,[n("img",{src:v,alt:"Windows 下安装 MongoDB",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Windows 下安装 MongoDB")],-1);function R(U,J){const s=t("ExternalLinkIcon");return d(),l("div",null,[k,r(" more "),_,n("p",null,[n("a",D,[a("MongoDB 官网下载链接"),e(s)])]),x,n("p",null,[a("这里仅指定了几个常用项, 更多详细配置请参考官方文档 "),n("a",M,[a("https://docs.mongodb.org/manual/reference/configuration-options/"),e(s)])]),B,n("p",null,[a("打开浏览器, 访问 "),n("a",w,[a("http://127.0.0.1:27017/"),e(s)]),a(" , 显示以下内容表示安装成功"),W]),y,n("div",N,[z,n("p",null,[a("工具推荐推荐图形化管理工具 "),n("a",T,[a("adminMongo"),e(s)])])]),q,n("p",null,[a("打开浏览器, 访问 "),n("a",C,[a("http://127.0.0.1:1234/"),e(s)]),a(" , 显示以下内容表示安装成功"),I]),E,V,n("p",null,[a("Connection name => 连接名随意 Connection string => 连接方法: "),j,a(" Connection options => 链接选项 "),n("a",O,[a("docs"),e(s)])]),S,K,L,P])}const G=i(f,[["render",R],["__file","install-mongodb-on-windwos.html.vue"]]);export{G as default};