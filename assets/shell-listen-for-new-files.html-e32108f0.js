import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,d as i,a,e as l}from"./app-95dad6bf.js";const t="/assets/shell-new-files-1.png",r="/assets/shell-new-files-2.png",c="/assets/shell-new-files-3.png",d="/assets/shell-new-files-4.png",o={},p=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"Liunx 下的监听 shell 脚本, 脚本功能实现, 当一小时内有新增的新文件, 立刻删除它, 此脚本允许被后台运行。")],-1),h=l(`<h2 id="功能解释" tabindex="-1"><a class="header-anchor" href="#功能解释" aria-hidden="true">#</a> 功能解释</h2><ol><li>若含有文件上传漏洞时, 该脚本能够自动删除上传的文件</li><li>在 <code>PWD(攻防对抗)</code> 中非常有用</li><li>后台运行, 只占用进程号, 不占用 shell 界面</li></ol><h2 id="脚本代码" tabindex="-1"><a class="header-anchor" href="#脚本代码" aria-hidden="true">#</a> 脚本代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
  <span class="token function">find</span> /var/www/dvwa/ <span class="token parameter variable">-cmin</span> <span class="token parameter variable">-60</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>
  <span class="token function">sleep</span> <span class="token number">1</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本解释" tabindex="-1"><a class="header-anchor" href="#脚本解释" aria-hidden="true">#</a> 脚本解释</h3><ul><li><code>while true</code> =&gt; 持续监听</li><li><code>-cmin -60</code> =&gt; 查找一小时内（包含一小时）新增文件</li><li><code>-type f</code> =&gt; 制定文件类型为文件</li><li><code>|</code> =&gt; 管道符, 将前一个命令执行结果传送至后一个命令执行</li><li><code>xargs</code> =&gt; 命令传递参数的一个过滤器, 可以批量执行</li><li><code>sleep 1</code> =&gt; 上一条命令执行之后, 暂停 1 秒</li><li><code>/var/www/dvwa/</code> =&gt; 可为任何目录, 这边是一个测试目录</li></ul><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.sh
./<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程号查询" tabindex="-1"><a class="header-anchor" href="#进程号查询" aria-hidden="true">#</a> 进程号查询</h3><p>脚本后台运行时, 会生成一个进程号<br></p><figure><img src="`+t+'" alt="Shell 监听脚本" tabindex="0" loading="lazy"><figcaption>Shell 监听脚本</figcaption></figure><p>通过 ps 命令可以查询进程<br></p><figure><img src="'+r+'" alt="Shell 监听脚本" tabindex="0" loading="lazy"><figcaption>Shell 监听脚本</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><h3 id="本地测试" tabindex="-1"><a class="header-anchor" href="#本地测试" aria-hidden="true">#</a> 本地测试</h3><p>在 <code>/var/www/dvwa/</code> 某个目录下新增文件<br></p><figure><img src="'+c+'" alt="Shell 监听脚本" tabindex="0" loading="lazy"><figcaption>Shell 监听脚本</figcaption></figure><h3 id="在有上传文件漏洞中测试" tabindex="-1"><a class="header-anchor" href="#在有上传文件漏洞中测试" aria-hidden="true">#</a> 在有上传文件漏洞中测试</h3><p>在 dvwa 中的上传文件漏洞环境进行测试<br></p><figure><img src="'+d+'" alt="Shell 监听脚本" tabindex="0" loading="lazy"><figcaption>Shell 监听脚本</figcaption></figure>',20);function u(f,g){return s(),n("div",null,[p,i(" more "),h])}const v=e(o,[["render",u],["__file","shell-listen-for-new-files.html.vue"]]);export{v as default};