import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,d as t,a,e as i}from"./app-fdf13f0b.js";const p={},c=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"前言"),a("p",null,"本篇是 Liunx 的学习笔记系列第三篇, 这一篇将介绍在 Liunx 下压缩解压文件或目录常用命令。压缩文件及目录可以大大增加磁盘的利用率。")],-1),l=i(`<h2 id="gz-格式" tabindex="-1"><a class="header-anchor" href="#gz-格式" aria-hidden="true">#</a> .gz 格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>          <span class="token comment"># 压缩文件</span>
<span class="token function">gzip</span> <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.gz    <span class="token comment"># 解压缩文件</span>
gunzip <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.gz     <span class="token comment"># 解压缩文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>只能压缩文件而不能压缩目录, 且不保留原文件</p></div><h2 id="tar-gz-格式" tabindex="-1"><a class="header-anchor" href="#tar-gz-格式" aria-hidden="true">#</a> .tar.gz 格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>.tar.gz <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>    <span class="token comment"># 压缩目录或文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>.tar.gz               <span class="token comment"># 解压目录或文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项解释" tabindex="-1"><a class="header-anchor" href="#选项解释" aria-hidden="true">#</a> 选项解释</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span>    <span class="token comment"># 打包</span>
<span class="token parameter variable">-x</span>    <span class="token comment"># 解包</span>
<span class="token parameter variable">-v</span>    <span class="token comment"># 显示详细信息</span>
<span class="token parameter variable">-f</span>    <span class="token comment"># 指定文件名</span>
<span class="token parameter variable">-z</span>    <span class="token comment"># 打包同时压缩 / 解压缩</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>可以打包或压缩目录和文件, -f 选项是必须的, 且必须放在选项中的最后一位, 可以保留原文件</p></div><h2 id="zip-格式" tabindex="-1"><a class="header-anchor" href="#zip-格式" aria-hidden="true">#</a> .zip 格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-r</span> <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>.zip <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>   <span class="token comment"># 压缩目录</span>
<span class="token function">zip</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.zip <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>          <span class="token comment"># 压缩文件</span>
<span class="token function">unzip</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.zip                 <span class="token comment"># 压缩目录或文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项解释-1" tabindex="-1"><a class="header-anchor" href="#选项解释-1" aria-hidden="true">#</a> 选项解释</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-r</span>    压缩目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gz-格式-1" tabindex="-1"><a class="header-anchor" href="#gz-格式-1" aria-hidden="true">#</a> .gz 格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>          <span class="token comment"># 压缩文件</span>
<span class="token function">gzip</span> <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.gz    <span class="token comment"># 解压缩文件</span>
gunzip <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.gz     <span class="token comment"># 解压缩文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>只能压缩文件而不能压缩目录, 且不保留原文件</p></div><h2 id="zip-格式-1" tabindex="-1"><a class="header-anchor" href="#zip-格式-1" aria-hidden="true">#</a> .zip 格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-r</span> <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>.zip <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>     <span class="token comment"># 压缩目录</span>
<span class="token function">zip</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.zip <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>            <span class="token comment"># 压缩文件</span>
<span class="token function">unzip</span> <span class="token parameter variable">-uo</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.zip <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span> <span class="token comment"># 解压缩目录或者文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项解释</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-r</span>    <span class="token comment"># 压缩目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>可以压缩目录或文件, -r 选项用于压缩目录, 可以保留原文件</p></div><h2 id="bz2-格式" tabindex="-1"><a class="header-anchor" href="#bz2-格式" aria-hidden="true">#</a> .bz2 格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bzip2</span> <span class="token parameter variable">-k</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>                         <span class="token comment"># 压缩文件且保留原文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-cjvf</span> <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>.tar.bz2 <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>   <span class="token comment"># 压缩目录或文###件</span>
bunzip <span class="token parameter variable">-k</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>.bz2                    <span class="token comment"># 解压缩文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-xjvf</span> <span class="token punctuation">[</span>folderName<span class="token punctuation">]</span>.tar.bz2              <span class="token comment"># 解压缩文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项解释</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-k</span>      <span class="token comment"># 产生压缩文件后保留原文件</span>
<span class="token parameter variable">-j</span>      <span class="token comment"># 格式为 .bz2 的压缩包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>bzip2 命令, 只能压缩文件, 不能压缩目录, 要使原文件保留, 使用 -k 选 项；要压缩目录使用 tar 命令的 -j 选项 用 tar 命令的 -j 选项</p></div>`,25);function o(r,d){return s(),e("div",null,[c,t(" more "),l])}const v=n(p,[["render",o],["__file","file-compression-and-decompression.html.vue"]]);export{v as default};