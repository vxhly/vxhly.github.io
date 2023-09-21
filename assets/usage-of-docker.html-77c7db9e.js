import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c,d as o,a as n,b as s,f as e,e as t}from"./app-fdf13f0b.js";const r={},u=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"Docker 是一个开源的应用容器引擎, 基于 Go 语言 并遵从 Apache2.0 协议开源。 Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中, 然后发布到任何流行的 Linux 机器上, 也可以实现虚拟化。")],-1),d=n("h2",{id:"为什么要用-docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#为什么要用-docker","aria-hidden":"true"},"#"),s(" 为什么要用 Docker？")],-1),m=n("p",null,"在没有 docker 之前, 如果我们要在 windows 上安装 mysql、mongodb 需要先下载这些软件, 然后还要一步步点设置, 并且注册到 windows 服务。并且根本不知道安装到什么地方（某些版本 mysql 不能指定安装位置, 默认到 C 盘）。同时也会在控制面板内注册许多相关的插件。以后要卸载的时候可能还会有各种残留。作为一个强迫症患者这是万万不能忍受的。 现在有了 docker, 只需要一行代码就能拉取所需软件的镜像, 然后配置一个容器就启动了。需要开发的时候就打开 docker, 服务便能够运行。占用的空间也小, 性能和原生差异不大。增删查改都只需要一行代码就能完成。卸载起来也毫无残留。更重要的是, 我可以同时有一个镜像的几个容器。即使我搞坏了一个, 也可以用其他的容器。还能随时监测这些容器的磁盘占用等状态",-1),k=n("h2",{id:"docker-文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-文档","aria-hidden":"true"},"#"),s(" docker 文档")],-1),v={class:"hint-container tip"},b=n("p",{class:"hint-container-title"},"提示",-1),h={href:"https://docs.docker.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docker_practice.gitee.io/",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="常用的-docker-命令" tabindex="-1"><a class="header-anchor" href="#常用的-docker-命令" aria-hidden="true">#</a> 常用的 docker 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token punctuation">[</span>image_name<span class="token punctuation">]</span>:<span class="token punctuation">[</span>version<span class="token punctuation">]</span>  <span class="token comment"># 下载镜像</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>docker_id<span class="token punctuation">]</span> <span class="token function">bash</span>     <span class="token comment"># 运行一个容器实例</span>

<span class="token function">docker</span> <span class="token function">ps</span>             <span class="token comment"># 查看当前运行的 docker 容器的进程信息</span>
<span class="token function">docker-compose</span> <span class="token function">ps</span>     <span class="token comment"># 查看当前的使用 docker-compose up -d 开启的容器进程信息</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>  <span class="token comment"># 使用本地的 docker-compose.yml 开启相关的容器</span>
<span class="token function">docker-compose</span> down   <span class="token comment"># 终止当前的使用 docker-compose up -d 开启的容器</span>
<span class="token function">docker</span> images         <span class="token comment"># 查看本地的所有 docker 镜像</span>
<span class="token function">docker</span> image <span class="token function">rm</span> <span class="token punctuation">[</span>docker_image_id<span class="token punctuation">]</span>   <span class="token comment"># 删除本地的 docker 镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>docker_image_id<span class="token punctuation">]</span>     <span class="token comment"># 删除本地的 docker 镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在你的机子上安装服务" tabindex="-1"><a class="header-anchor" href="#在你的机子上安装服务" aria-hidden="true">#</a> 在你的机子上安装服务</h2><p>至于一些 docker 镜像下载加速或者其他的知识自行查阅文档, 这里只收集 docker 安装各种服务的方法</p><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull ubuntu
$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><h4 id="通过镜像" tabindex="-1"><a class="header-anchor" href="#通过镜像" aria-hidden="true">#</a> 通过镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索mysql的镜像信息</span>
$ <span class="token function">docker</span> search mysql
<span class="token comment"># 从仓库拉取mysql,mysql:tag 后面可以跟标签得到指定版本,不加默认为lastest</span>
$ <span class="token function">docker</span> pull mysql

$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> test-mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token parameter variable">-d</span> mysql:5.6
$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> test-phpmyadmin <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">--link</span> test-mysql:db <span class="token parameter variable">-d</span> phpmyadmin/phpmyadmin:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#通过-docker-compose-yml" aria-hidden="true">#</a> 通过 docker-compose.yml</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.6</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>mysql
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>

    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> net<span class="token punctuation">-</span>mysql

  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> phpmyadmin/phpmyadmin<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>phpmyadmin
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:80&quot;</span>

    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
      <span class="token key atrule">PMA_HOST</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> net<span class="token punctuation">-</span>mysql

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">net-mysql</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yml 同级目录下执行: <code>docker-compose up -d</code> 之后在浏览器访问 <code>http://127.0.0.1:7777</code> 即可</p><p>如果无法正常登录的话, 使用 <code>docker exec -it [dockerId] bash</code> 进入 MySQL 容器并登陆 MySQL 执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> grant all privileges on *.*  to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Use root/p@ssw0rd as user/password credentials</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.1&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> p@ssw0rd

  <span class="token key atrule">adminer</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> adminer
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node-vue" tabindex="-1"><a class="header-anchor" href="#node-vue" aria-hidden="true">#</a> Node + Vue</h3><p>在项目文件夹下创建 <code>dockerfile</code></p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node: latest</span>

<span class="token comment"># 设置时区</span>
<span class="token instruction"><span class="token keyword">RUN</span> sh - c <span class="token string">&quot;echo &#39;Asia/Shanghai&#39; &gt; /etc/timezone&quot;</span> &amp;&amp; <span class="token operator">\\</span>
    dpkg - reconfigure - f noninteractive tzdata</span>

<span class="token comment"># 使用阿里云的Ubuntu镜像</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&#39;\\n\\
deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse\\n\\
deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse\\n\\
deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse\\n\\
deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse\\n\\
deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse\\n\\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse\\n\\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse\\n\\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse\\n\\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse\\n\\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse\\n&#39;</span>\\ &gt;</span>
    /etc/apt / sources.list

<span class="token instruction"><span class="token keyword">RUN</span> apt - get update\\ &amp;&amp;</span>
    apt - get install - y\\# node - sass 等编译依赖
make gcc g++build - essential python2 .7\\# 命令行工具
curl wget vim git git - flow yarn xsel

<span class="token comment"># 切换 node 的软件版本源 =&gt; 切源工具 cgr 和 nrm</span>
<span class="token comment"># cgr 是基于nrm的改进版本, 进行了一些优化, 能同时管理 npm、 yarn 源# cgr use taobao n =&gt; 只是切换 npm 源# cgr use taobao y =&gt; 只是切换 yarn 源</span>
<span class="token instruction"><span class="token keyword">RUN</span> true<span class="token operator">\\</span>
    &amp;&amp;</span>
    npm install - g cgr nrm\\ &amp;&amp;
    cgr use taobao\\ &amp;&amp;
    npm i - g serve @vue / cli @vue / cli - service - global\\
commitizen conventional - changelog - cli eslint - plugin - vue\\
npm - check - updates npx

<span class="token comment"># 创建工作目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir / workspace</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> / workspace</span>

<span class="token comment"># 添加权限, 755 或者 a + x</span>
<span class="token instruction"><span class="token keyword">RUN</span> chmod - R 755 / workspace</span>

<span class="token instruction"><span class="token keyword">VOLUME</span> / workspace</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目文件夹下创建 <code>docker-compose.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">dev</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token key atrule">vueimage</span><span class="token punctuation">:</span> <span class="token number">1.0</span>
<span class="token key atrule">ports</span><span class="token punctuation">:</span>

    <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span> <span class="token comment"># 映射端口, 将本机的 8080 端口映射到 docker 的 8080 端口, npm run serve</span>

<span class="token key atrule">restart</span><span class="token punctuation">:</span> always <span class="token comment"># 每次开启 docker 的时候重启服务, 适用于 MySQL、 nginx 类似于这种的服务</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>

    <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/workspace <span class="token comment"># 将执行命令的目录映射到 docker 容器的 /workspace目录</span>

<span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 命令行输入映射, 不进行设置会导致无法正常进入 docker</span>
<span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 使用TTY模式（ pseudo - TTY）。 若要使用bash, 则必须设置该选项。 若不设置该选项, 则可以输入命令, 但不显示shell</span>
<span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> vueimage<span class="token punctuation">:</span><span class="token number">1.0</span>
<span class="token key atrule">ports</span><span class="token punctuation">:</span>

    <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span> <span class="token comment"># 映射端口, 将本机的 5000 端口映射到 docker 的 5000 端口, npm run build &amp;&amp; serve dist\\</span>

<span class="token key atrule">restart</span><span class="token punctuation">:</span> always <span class="token comment"># 每次开启 docker 的时候重启服务, 适用于 MySQL、 nginx 类似于这种的服务</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>

    <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/workspace <span class="token comment"># 将执行命令的目录映射到 docker 容器的 /workspace目录</span>

<span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 命令行输入映射, 不进行设置会导致无法正常进入 docker</span>
<span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 使用TTY模式（ pseudo - TTY）。 若要使用bash, 则必须设置该选项。 若不设置该选项, 则可以输入命令, 但不显示shell</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目文件夹下执行(编译一个镜像容器出来)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> vueimage:1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成之后执行, 用以启动容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>docker ps</code> 查看 容器的 id, 之后使用以下命令进入容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>docker_id<span class="token punctuation">]</span> <span class="token function">zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确认当前目录已经挂载了当前的项目目录, 使用 <code>pwd</code> 确认当前的目录为 <code>/workspace</code> , 执行安装依赖命令并且启动服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务启动之后就在浏览器中访问 <code>http://127.0.0.1:8080</code> 经过上面的配置, 我们就可以在主机上使用喜欢的编辑器编辑代码, 通过 docker 执行。但是使用 <code>yarn serve</code> 命令进行开发时, 会发现一个问题: 在编辑器中编辑文件后, docker 无法监听到文件的修改, 从而重新编译、刷新页面；我们可以采用 webpack 的轮询功能解决:</p>`,29),f={href:"https://www.webpackjs.com/configuration/watch/",target:"_blank",rel:"noopener noreferrer"},_=t(`<p><code>vue.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">// 当第一个文件更改,会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位:</span>
      <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 通过传递 true 开启 polling,或者指定毫秒为单位进行轮询。</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此已经全部配置完毕, 重新 <code>yarn serve</code> 然后就可以愉快的写代码了</p><h3 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> Gitlab</h3><h4 id="英文官方原版" tabindex="-1"><a class="header-anchor" href="#英文官方原版" aria-hidden="true">#</a> 英文官方原版</h4><p>在项目文件夹下创建 <code>docker-compose.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">gitlab</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab
    <span class="token key atrule">image</span><span class="token punctuation">:</span> gitlab/gitlab<span class="token punctuation">-</span>ce
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;gitlab-en&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        # external_url &#39;http://gitlab.example.com:9090&#39;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;2224:22&quot;</span>

    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./en/config<span class="token punctuation">:</span>/etc/gitlab
      <span class="token punctuation">-</span> ./en/logs<span class="token punctuation">:</span>/var/log/gitlab
      <span class="token punctuation">-</span> ./en/data<span class="token punctuation">:</span>/var/opt/gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="中文社区版" tabindex="-1"><a class="header-anchor" href="#中文社区版" aria-hidden="true">#</a> 中文社区版</h4><p>在项目文件夹下创建 <code>docker-compose.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">gitlab-ce</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab<span class="token punctuation">-</span>ce
    <span class="token key atrule">image</span><span class="token punctuation">:</span> twang2218/gitlab<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>zh
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;gitlab&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&quot;Asia/Shanghai&quot;</span>
      <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        # pages_external_url = &quot;http://gitlab.demo.io/&quot;
        gitlab_rails[&#39;time_zone&#39;] = &#39;Asia/Shanghai&#39;
        gitlab_pages[&#39;enable&#39;] = true</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;2224:22&quot;</span>

    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./cn/config<span class="token punctuation">:</span>/etc/gitlab
      <span class="token punctuation">-</span> ./cn/logs<span class="token punctuation">:</span>/var/log/gitlab
      <span class="token punctuation">-</span> ./cn/data<span class="token punctuation">:</span>/var/opt/gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mongo
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mongo
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> mongo
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;27017:27017&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MONGO_INITDB_DATABASE</span><span class="token punctuation">:</span> test
      <span class="token key atrule">MONGO_INITDB_ROOT_USERNAME</span><span class="token punctuation">:</span> root
      <span class="token key atrule">MONGO_INITDB_ROOT_PASSWORD</span><span class="token punctuation">:</span> yourpassword
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/data/db
    <span class="token key atrule">command</span><span class="token punctuation">:</span> mongod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h3><h4 id="重置普通用户的密码" tabindex="-1"><a class="header-anchor" href="#重置普通用户的密码" aria-hidden="true">#</a> 重置普通用户的密码</h4><p>进入容器之后执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gitlab-rails console production <span class="token comment"># 进入gitlab管理控制台</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token assign-left variable">user</span><span class="token operator">=</span>User.where<span class="token punctuation">(</span>name: <span class="token string">&quot;[user_name]&quot;</span><span class="token punctuation">)</span>.first <span class="token comment"># 将 [user_name] 替换成用户名</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token assign-left variable">user.password</span><span class="token operator">=</span><span class="token number">12345678</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token assign-left variable">user.password_confirmation</span><span class="token operator">=</span><span class="token number">12345678</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> user.save<span class="token operator">!</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重设管理员密码" tabindex="-1"><a class="header-anchor" href="#重设管理员密码" aria-hidden="true">#</a> 重设管理员密码</h4><p>进入容器之后执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gitlab-rails console production <span class="token comment"># 进入gitlab管理控制台</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token assign-left variable">user</span><span class="token operator">=</span>User.where<span class="token punctuation">(</span>id: <span class="token number">1</span><span class="token punctuation">)</span>.first <span class="token comment"># 将 [user_name] 替换成用户名</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token assign-left variable">user.password</span><span class="token operator">=</span><span class="token number">12345678</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token assign-left variable">user.password_confirmation</span><span class="token operator">=</span><span class="token number">12345678</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> user.save<span class="token operator">!</span>
irb<span class="token punctuation">(</span>main<span class="token punctuation">)</span>:001:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有-npm-代理注册表" tabindex="-1"><a class="header-anchor" href="#私有-npm-代理注册表" aria-hidden="true">#</a> 私有 npm 代理注册表</h2><p>在项目文件夹下创建 <code>docker-compose.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">npm-private</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> npm<span class="token punctuation">-</span>private
    <span class="token key atrule">image</span><span class="token punctuation">:</span> verdaccio/verdaccio
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;4873:4873&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展-1" tabindex="-1"><a class="header-anchor" href="#拓展-1" aria-hidden="true">#</a> 拓展</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>windows 环境下不想使用 docker 的解决方案, 使用 <code>forever</code> + <code>verdaccio</code></p></div><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> forever verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code>verdaccio</code> 的配置文件, 参考文件路径为 <code>C:/Users/Administrator/AppData/Roaming/verdaccio/config.yaml</code> （必须修改, 否则只能本机访问）, 在该文件内添加</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>listen: 0.0.0.0:4873
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编写 <code>bat</code> windows 脚本</p><p>开始脚本 <code>forever-npm-start.bat</code></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
C:
cd C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\verdaccio\\build\\lib
forever start cli.js
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结束脚本 <code>forever-npm-stop.bat</code></p><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>@echo off
C:
cd C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\verdaccio\\build\\lib
forever stop cli.js
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-预处理-sass-的默认实现将迁移到-dart-sass" tabindex="-1"><a class="header-anchor" href="#css-预处理-sass-的默认实现将迁移到-dart-sass" aria-hidden="true">#</a> CSS 预处理 SASS 的默认实现将迁移到 Dart Sass</h3><p>Web 开发中流行的 CSS 预处理 - Sass 14, 于 2016 年 11 月 1 日在博客正式对外公布了 alpha 版本的 Dart Sass 32 项目, 即他们使用 Dart 对 Sass 进行了重写。对于这次迁移/重写, Sass 项目组做了以下说明:</p>`,35),q={href:"https://github.com/sass/dart-sass",target:"_blank",rel:"noopener noreferrer"},x={href:"https://sass-lang.com/dart-sass",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"node-sass",-1),S=n("code",null,"gcc",-1),O=n("code",null,"python2.7",-1),R=n("code",null,"npm install",-1),D=n("code",null,"node-sass",-1),A=n("code",null,"node-sass",-1),T=n("code",null,"dart-sass",-1),L=n("code",null,"node-sass",-1),N={href:"https://github.com/sass/dart-sass#browser-compatibility",target:"_blank",rel:"noopener noreferrer"},M=t(`<h3 id="为什么重写-sass" tabindex="-1"><a class="header-anchor" href="#为什么重写-sass" aria-hidden="true">#</a> 为什么重写 Sass？</h3><p>Sass 的主要实现有 Ruby Sass 7 和 LibSass 10（node-sass 底层使用的是 LibSass）, 它们都有各自的优缺点。Ruby Sass 的实现语言是高级语言 Ruby, 更容易迭代, 但存在运行速度慢, 不易安装的缺点。LibSass 虽然速度快, 但它的开发语言是 C/C++, 迭代速度慢, 无法快速地添加各种功能。</p><h3 id="为什么使用-dart" tabindex="-1"><a class="header-anchor" href="#为什么使用-dart" aria-hidden="true">#</a> 为什么使用 Dart？</h3><p>Dart 的运行速度是真的快, 对于大型样式文件, Dart Sass 的处理速度是 Ruby Sass 的 5~10 倍, 且只比 LibSass 慢 1.5 倍左右。同时, Dart 是一门具备静态类型的动态语言, 对比 C/C++ 甚至是 Ruby, Dart 相对更容易上手且代码也更易于编写和维护。此外, Dart 具备编译输出为 JavaScript 的能力, 使得 Dart Sass 可以兼容 NodeJS 平台。</p><h3 id="各种实现的后续规划" tabindex="-1"><a class="header-anchor" href="#各种实现的后续规划" aria-hidden="true">#</a> 各种实现的后续规划？</h3><p>LibSass 作为目前性能最好的 Sass 实现, 后续将继续维护, 只是它不再需要背负快速添加各种新功能的压力。Ruby Sass 目前也会同步维护, 但在无人接手的情况下, 它将逐渐边缘化。Sass 项目组后续主要精力将转移到 Dart Sass, 其稳定版本预计在 2017 年初放出。</p><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h3><p>现在由于我们在 docker 内部安装项目依赖, 也就是说我们当前的环境变成了 liunx, 相关的依赖包也就是 liunx 的依赖包, 所以在 windows 环境下执行 <code>git commit</code> 的时候会报依赖找不到, 那是因为安装了 liunx 的依赖包, 两个平台的安装包是不一样的</p><p>那么在 docker 下执行 <code>git commit</code> 的时候又会失败, 因为 commit 的时候 git 需要知道当前的 commit 作者是谁, 这时候不必全局配置 commit 的 config 信息, 只需在项目目录下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config   user.name <span class="token string">&#39;XXX&#39;</span>
<span class="token function">git</span> config   user.email <span class="token string">&#39;XXX&#39;</span>
<span class="token comment"># or</span>
<span class="token function">git</span> config  <span class="token parameter variable">--local</span>  user.name <span class="token string">&#39;XXX&#39;</span>
<span class="token function">git</span> config  <span class="token parameter variable">--local</span> user.email <span class="token string">&#39;XXX&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置完用 <code>git config --list</code> 进行检验, 之后的 commit 操作就在 docker 容器下执行就行了</p>`,11);function U(C,I){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,o(" more "),d,m,k,n("div",v,[b,n("p",null,[s("这里只找到了英文的文档, 所以英文不好的慎阅 "),n("a",h,[s("官方 docker 文档"),e(a)]),s(),n("a",g,[s("非官方 docker 整理文档"),e(a)])])]),y,n("p",null,[s("关于 webpack 的轮询功能 => "),n("a",f,[s("webpack"),e(a)])]),_,n("p",null,[s("关于 "),n("a",q,[s("github:dart-sass"),e(a)]),s(),n("a",x,[s("dart-sass"),e(a)])]),n("p",null,[s("因为使用 "),w,s(" 无论是在 Windows 环境下还是在 docker 的 liunx 环境下都需要依赖 "),S,s(" 和 "),O,s(" , 有的时候会出现编译错误（指的是在执行 "),R,s(" 安装 "),D,s(" 的时候由于部分库不齐备或者是编译原因导致 "),A,s(" 无法正常安装）, 所以使用 "),T,s(" 来代替 "),L,s(" 是个不错的选择, 至少目前在自测中是没有出现编译问题的, 至于兼容性问题, GitHub 文档中也给出承诺 "),n("a",N,[s("Browser Compatibility"),e(a)])]),M])}const E=i(r,[["render",U],["__file","usage-of-docker.html.vue"]]);export{E as default};
