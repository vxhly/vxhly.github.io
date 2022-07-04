import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e as a}from"./app.f29ec3fb.js";var c="/assets/redhat-reinforce-12.png",d="/assets/redhat-reinforce-14.png",o="/assets/redhat-reinforce-15.png";const i={},l=a(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u672C\u7CFB\u5217\u7B14\u8BB0\u53C8\u662F Liunx \u5B66\u4E60\u7CFB\u5217\u6559\u7A0B\u7684\u4E00\u5927\u6B65, \u672C\u7CFB\u5217\u5B66\u4E60\u7B14\u8BB0\u8BB0\u5F55 RedHat \u7CFB\u7EDF\u7684\u5B89\u5168\u52A0\u56FA\u3002\u672C\u7BC7\u7B14\u8BB0\u662F\u8BB0\u5F55\u7528\u6237\u548C\u6587\u4EF6\u7684\u6743\u9650\uFF08\u4E3B\u8981\u662F\u7279\u6B8A\u6743\u9650\uFF09, \u52A0\u5F3A\u7CFB\u7EDF\u7684\u9632\u5FA1\u80FD\u529B\u3002</p></div><h2 id="\u4E3B\u8981\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E3B\u8981\u7684\u4ECB\u7ECD</h2><p>Linux \u6587\u4EF6\u7CFB\u7EDF\u7684\u5B89\u5168\u4E3B\u8981\u662F\u901A\u8FC7\u8BBE\u7F6E\u6587\u4EF6\u7684\u6743\u9650\u6765\u5B9E\u73B0\u7684\u3002\u6BCF\u4E00\u4E2A Linux \u7684\u6587\u4EF6\u6216\u76EE\u5F55, \u90FD\u6709 3 \u7EC4\u5C5E\u6027, \u5206\u522B\u5B9A\u4E49\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u6709\u8005, \u7528\u6237\u7EC4\u548C\u5176\u4ED6\u4EBA\u7684\u4F7F\u7528\u6743\u9650\uFF08 <code>\u53EA\u8BFB</code> \u3001 <code>\u53EF\u5199</code> \u3001 <code>\u53EF\u6267\u884C</code> \u3001 <code>\u5141\u8BB8 SUID</code> \u3001 <code>\u5141\u8BB8 SGID</code> \u7B49\uFF09\u3002\u7279\u522B\u6CE8\u610F, \u6743\u9650\u4E3A <code>SUID</code> \u548C <code>SGID</code> \u7684\u53EF\u6267\u884C\u6587\u4EF6, \u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D, \u4F1A\u7ED9\u8FDB\u7A0B\u8D4B\u4E88\u6240\u6709\u8005\u7684\u6743\u9650, \u5982\u679C\u88AB\u9ED1\u5BA2\u53D1\u73B0\u5E76\u5229\u7528\u5C31\u4F1A\u7ED9\u7CFB\u7EDF\u9020\u6210\u5371\u5BB3\u3002</p><h2 id="\u67E5\u627E\u540C\u65F6\u5B58\u5728-suid-\u548C-sgid-\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u540C\u65F6\u5B58\u5728-suid-\u548C-sgid-\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u627E\u540C\u65F6\u5B58\u5728 SUID \u548C SGID \u7684\u6587\u4EF6</h2><p>\u4F7F\u7528 <code>find</code> \u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -xdev -perm  -6000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3E\u4F8B, \u666E\u901A\u7528\u6237\u65E0\u6CD5\u76F4\u63A5 vi \u4FEE\u6539 <code>/etc/passwd</code> \u6587\u4EF6, \u4F46\u5374\u53EF\u4EE5\u901A\u8FC7 <code>passwd</code> \u547D\u4EE4\u6765\u4FEE\u6539\u81EA\u8EAB\u7684\u5BC6\u7801\u3002\u8FD9\u65F6\u5C31\u5229\u7528\u4E86 <code>/bin/passwd</code> \u7684 SUID \u7684\u6743\u9650\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u7A0B\u5E8F\u88AB\u8BBE\u7F6E\u6210\u4E86 <code>S</code> \u4F4D\u6807\u5FD7, \u90A3\u4E48\u666E\u901A\u7528\u6237\u5C31\u53EF\u4EE5\u4EE5 root \u8EAB\u4EFD\u6765\u8FD0\u884C\u8FD9\u4E2A\u7A0B\u5E8F\u3002\u5BF9\u7CFB\u7EDF\u5B89\u5168\u6027\u6709\u8F83\u5927\u4E0D\u5229\u5F71\u54CD, \u6240\u4EE5\u5E94\u7981\u6B62\u6240\u6709\u4E0D\u5FC5\u8981\u7684 <code>SUID/SGID</code> \u7A0B\u5E8F\u3002</p><p>\u4FEE\u6539\u90E8\u5206\u7CFB\u7EDF\u6587\u4EF6\u7684 SUID \u548C SGID \u7684\u6743\u9650:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> a-s /usr/bin/chage
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#find-\u547D\u4EE4" aria-hidden="true">#</a> find \u547D\u4EE4</h3><p>\u9009\u9879\u89E3\u91CA</p><ul><li><strong><code>-perm &lt;\u6743\u9650\u6570\u503C&gt;</code></strong> =&gt; \u67E5\u627E\u7B26\u5408\u6307\u5B9A\u7684\u6743\u9650\u6570\u503C\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B</li><li><strong><code>-xdev</code></strong> =&gt; \u5C06\u8303\u56F4\u5C40\u9650\u5728\u5148\u884C\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E2D\uFF1B</li><li><code>find -perm mode</code> =&gt; \u8868\u793A\u4E25\u683C\u5339\u914D, \u4E5F\u5C31\u662F\u4F60\u7684\u6587\u4EF6\u6743\u9650\u4F4D\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u5341\u8FDB\u5236\u6570\u5B57\u4E0E mode \u4E00\u6A21\u4E00\u6837, \u90A3\u4E48\u5339\u914D\u6210\u529F, \u9700\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C mode \u7ED9\u7684\u6570\u5B57\u4E0D\u8DB3 3 \u4F4D, \u90A3\u4E48\u524D\u9762\u81EA\u52A8\u6DFB 0 (\u4E25\u683C\u7684\u8BF4\u662F\u4E0D\u8DB3 4 \u4F4D, \u539F\u56E0\u5C31\u662F\u524D\u9762\u6240\u8BF4\u7684 <code>SetUID</code> , <code>SetGID</code> \uFF09</li><li><code>find -perm -mode</code> =&gt; \u8868\u793A\u6A21\u7CCA\u67E5\u8BE2, \u4E5F\u5C31\u662F\u8BF4\u4F60\u7684\u6587\u4EF6\u6743\u9650\u4F4D\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u5341\u8FDB\u5236\u6570\u5B57\u88AB mode \u5305\u542B, \u5C31\u4F1A\u88AB\u641C\u7D22\u51FA\u6765</li><li><code>find -perm +mode</code> =&gt; \u4E0E <code>-mode</code> \u7684\u533A\u522B\u662F <code>+mode</code> \u53EA\u9700\u5176\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A 1 \u7684\u90E8\u5206\u88AB\u5339\u914D, <code>-mode</code> \u662F\u6240\u6709 1 \u7684\u90E8\u5206\u90FD\u5FC5\u987B\u88AB\u5339\u914D, \u540C\u6837 <code>+mode</code> \u4E5F\u4E0D\u7BA1 0 \u4F4D</li></ul><h2 id="\u6587\u4EF6\u7684\u9ED8\u8BA4\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u7684\u9ED8\u8BA4\u6743\u9650" aria-hidden="true">#</a> \u6587\u4EF6\u7684\u9ED8\u8BA4\u6743\u9650</h2><p>\u4F7F\u7528 <code>umask</code> \u6307\u5B9A\u5F53\u524D\u7528\u6237\u521B\u5EFA\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u7684\u9ED8\u8BA4\u6743\u9650\u5C5E\u6027</p><ul><li>\u82E5\u4F7F\u7528\u8005\u5EFA\u7ACB\u4E3A <code>\u6587\u4EF6</code> , \u5219\u9884\u8BBE <code>\u6CA1\u6709\u53EF\u6267\u884C ( x ) \u9879\u76EE</code> , \u4EA6\u5373\u53EA\u6709 <code>rw</code> \u8FD9\u4E24\u4E2A\u9879\u76EE, \u4E5F\u5C31\u662F\u6700\u5927\u4E3A <code>666</code> , \u5373\u6743\u9650\u4E3A <code>-rw-rw-rw-</code></li><li>\u82E5\u4F7F\u7528\u8005\u5EFA\u7ACB\u4E3A <code>\u76EE\u5F55</code> , \u5219\u7531\u4E8E <code>x</code> \u4E0E\u662F\u5426\u53EF\u4EE5\u8FDB\u5165\u6B64\u76EE\u5F55\u6709\u5173, \u56E0\u6B64\u9884\u8BBE\u4E3A\u6240\u6709\u6743\u9650\u5747\u5F00\u653E, \u4EA6\u5373\u4E3A <code>777</code> , \u5373\u6743\u9650\u4E3A <code>drwxrwxrwx</code></li></ul><h3 id="\u4FEE\u6539\u9ED8\u8BA4\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9ED8\u8BA4\u6743\u9650" aria-hidden="true">#</a> \u4FEE\u6539\u9ED8\u8BA4\u6743\u9650</h3><p>\u4E3B\u8981\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 <code>/etc/profile</code> \u3001 <code>/etc/bashrc</code> \u3001 <code>/etc/csh.login</code> \u3001 <code>/etc/csh.cshrc</code></p><ul><li>\u751F\u6210\u76EE\u5F55\u7684\u6743\u9650\u4E3A <code>777-002=775</code> , \u5373 <code>drwxrwxr-x</code></li><li>\u751F\u6210\u6587\u4EF6\u7684\u6743\u9650\u4E3A <code>666-002=664</code> , \u5373 <code>-rw-rw-r--</code> <code>For Exmaple:</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">umask</span> 002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u751F\u6210\u76EE\u5F55\u7684\u6743\u9650\u4E3A <code>777-022=755</code> , \u5373 <code>drwxrwxr-x</code></li><li>\u751F\u6210\u6587\u4EF6\u7684\u6743\u9650\u4E3A <code>666-022=644</code> , \u5373 - <code>rw-r--r--</code> <code>For Exmaple:</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">umask</span> 022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E0D\u8981\u5355\u7EAF\u7684\u8FDB\u884C\u6570\u5B57\u52A0\u51CF<br> \u6BD4\u5982, <code>umask 003</code> , \u5982\u679C\u4EE5\u6570\u5B57\u52A0\u51CF, \u5219\u6587\u4EF6\u6743\u9650\u4E3A <code>666-003=663</code> , \u76F8\u5F53\u4E8E <code>-rw-rw--wx</code> , \u663E\u7136\u4E0D\u6B63\u786E, \u5E94\u8BE5\u5148\u8F6C\u6362\u6210\u6743\u9650\u5C5E\u6027\u518D\u76F8\u51CF <code>-rw-rw-rw-</code> \u51CF\u53BB <code>--------wx</code> , \u5373\u5E94\u8BE5\u4E3A <code>-rw-rw-r--</code> <br> \u5F71\u54CD: \u79FB\u52A8\u89C4\u8303\u8981\u6C42 <code>umask 027</code> , \u8FD9\u6837\u751F\u6210\u7684\u6587\u4EF6\u9ED8\u8BA4\u6743\u9650\u4E3A <code>-rw-r-----</code> , \u53EA\u6709\u672C\u7528\u6237\u53EF\u8BFB\u3001\u5199\u3001\u6267\u884C\u3002\u5982\u679C\u4E1A\u52A1\u9700\u8981, \u5176\u4ED6\u7528\u6237\u4E5F\u9700\u8981\u64CD\u4F5C\u8BE5 \u7528\u6237\u7684\u6587\u4EF6, \u5C31\u4F1A\u6709\u95EE\u9898\u3002\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u7684 <code>022</code></p></div><h2 id="\u73AF\u5883\u53D8\u91CF\u7684\u5B89\u5168\u6027" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u7684\u5B89\u5168\u6027" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u7684\u5B89\u5168\u6027</h2><h3 id="root-\u7528\u6237\u73AF\u5883\u53D8\u91CF\u7684\u5B89\u5168\u6027" tabindex="-1"><a class="header-anchor" href="#root-\u7528\u6237\u73AF\u5883\u53D8\u91CF\u7684\u5B89\u5168\u6027" aria-hidden="true">#</a> root \u7528\u6237\u73AF\u5883\u53D8\u91CF\u7684\u5B89\u5168\u6027</h3><p>\u4E3B\u8981\u68C0\u67E5 <code>PATH</code> \u53D8\u91CF, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">&#39;(^|:)(\\.|:|$)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+`" alt="RedHat \u5B89\u5168\u52A0\u56FA"></p><p>\u68C0\u67E5\u662F\u5426\u5305\u542B\u7EC4\u76EE\u5F55\u6743\u9650\u4E3A <code>o+w</code> \u7684\u76EE\u5F55\u6216\u8005 <code>g+w</code> \u7684\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39; &#39;</span><span class="token variable">\`</span></span> -type d <span class="token punctuation">\\</span><span class="token punctuation">(</span> -perm -002 -o -perm -020 <span class="token punctuation">\\</span><span class="token punctuation">)</span> -ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-002</code> \u8868\u793A\u4EFB\u4F55\u76EE\u5F55\u6216\u6587\u4EF6, \u53EA\u8981\u5E26 <code>o+w</code> \u5C31\u5339\u914D</li><li><code>+002</code> \u8868\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u53EA\u6709 <code>o+w</code> \u6743\u9650, \u5373 <code>-------w-</code> \u53EF\u80FD\u4F1A\u51FA\u73B0\u62A5\u9519\u63D0\u793A <code>/root/bin</code> \u76EE\u5F55\u4E0D\u5B58\u5728, <code>PATH</code> \u91CC\u6709\u8BE5\u8DEF\u5F84, \u800C\u5B9E\u9645\u4E0A\u6CA1\u6709, \u53EF\u4EE5\u5148\u5728 <code>/root</code> \u4E0B\u5EFA\u7ACB\u4E00\u4E2A <code>bin</code> \u76EE\u5F55</li></ul><h3 id="\u68C0\u67E5-root-\u7528\u6237\u73AF\u5883\u53D8\u91CF-path-\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5-root-\u7528\u6237\u73AF\u5883\u53D8\u91CF-path-\u89C4\u8303" aria-hidden="true">#</a> \u68C0\u67E5 root \u7528\u6237\u73AF\u5883\u53D8\u91CF path \u89C4\u8303</h3><p>\u68C0\u67E5\u7CFB\u7EDF root \u7528\u6237\u73AF\u5883\u53D8\u91CF path \u4E2D\u662F\u5426\u5305\u542B <code>\u201C.\u201D</code> , <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u6587\u4EF6 <code>/etc/profile</code> \u3001 <code>/etc/bashrc</code> \u6216 <code>/root/.bash_profile</code> \u5728 <code>\u201CPATH\uFF1D\u2026\u2026\u201D</code> \u8FD9\u53E5\u4E2D\u5220\u9664</p><ul><li><code>-002</code> \u8868\u793A\u4EFB\u4F55\u76EE\u5F55\u6216\u6587\u4EF6, \u53EA\u8981\u5E26 <code>o+w</code> \u5C31\u5339\u914D</li><li><code>+002</code> \u8868\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u53EA\u6709 <code>o+w</code> \u6743\u9650, \u5373 <code>-------w-</code> \u53EF\u80FD\u4F1A\u51FA\u73B0\u62A5\u9519\u63D0\u793A <code>/root/bin</code> \u76EE\u5F55\u4E0D\u5B58\u5728, <code>PATH</code> \u91CC\u6709\u8BE5\u8DEF\u5F84, \u800C\u5B9E\u9645\u4E0A\u6CA1\u6709, \u53EF\u4EE5\u5148\u5728 <code>/root</code> \u4E0B\u5EFA\u7ACB\u4E00\u4E2A <code>bin</code> \u76EE\u5F55</li></ul><h2 id="\u8FDC\u7A0B\u8FDE\u63A5\u7684\u5B89\u5168\u6027\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u8FDE\u63A5\u7684\u5B89\u5168\u6027\u914D\u7F6E" aria-hidden="true">#</a> \u8FDC\u7A0B\u8FDE\u63A5\u7684\u5B89\u5168\u6027\u914D\u7F6E</h2><p>\u4E3B\u8981\u67E5\u627E\u7CFB\u7EDF\u4E2D\u662F\u5426\u542B\u6709 <code>.netrc</code> \u548C <code>.rhosts</code> \u6587\u4EF6, \u5982\u65E0\u5FC5\u8981, \u5220\u9664\u8FD9\u4E24\u4E2A\u6587\u4EF6, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -name .netrc
<span class="token function">find</span> / -name .rhosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91CD\u8981\u76EE\u5F55\u548C\u6587\u4EF6\u7684\u6743\u9650\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u76EE\u5F55\u548C\u6587\u4EF6\u7684\u6743\u9650\u8BBE\u7F6E" aria-hidden="true">#</a> \u91CD\u8981\u76EE\u5F55\u548C\u6587\u4EF6\u7684\u6743\u9650\u8BBE\u7F6E</h2><p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u76EE\u5F55\u548C\u6587\u4EF6\u7684\u6743\u9650\u8BBE\u7F6E\u60C5\u51B5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l /etc/
<span class="token function">ls</span> -l /etc/rc.d/init.d/
<span class="token function">ls</span> -l /tmp
<span class="token function">ls</span> -l /etc/inetd.conf
<span class="token function">ls</span> -l /etc/passwd
<span class="token function">ls</span> -l /etc/shadow
<span class="token function">ls</span> -l /etc/group
<span class="token function">ls</span> -l /etc/security
<span class="token function">ls</span> -l /etc/services
<span class="token function">ls</span> -l /etc/rc*.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u91CD\u8981\u76EE\u5F55, \u5EFA\u8BAE\u6267\u884C\u5982\u4E0B\u7C7B\u4F3C\u64CD\u4F5C, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> -R <span class="token number">750</span> /etc/rc.d/init.d/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u53EA\u6709 root \u53EF\u4EE5\u8BFB\u3001\u5199\u548C\u6267\u884C, \u7F16\u5199\u811A\u672C\u4E00\u6B21\u6027\u6267\u884C, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">644</span> /etc/passwd
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\u5F71\u54CD</p><p>\u6709\u7684\u79FB\u52A8\u5B89\u5168\u52A0\u56FA\u6807\u51C6\u8981\u6C42/etc \u76EE\u5F55\u662F 750 \u6743\u9650, \u4F46\u5982\u679C/etc \u76EE\u5F55\u662F\u6743\u9650\u662F 750\uFF08drwxr-x---\uFF09\u7684\u8BDD, \u7531\u4E8E\u5176\u4ED6\u7EC4\u6CA1\u6709 x \u6743\u9650, \u90A3\u4E48\u666E\u901A\u7528\u6237\u5C31\u65E0\u6743\u8BBF\u95EE/etc \u76EE\u5F55\u4EE5\u53CA\u4EE5\u4E0B\u6240\u6709\u6587\u4EF6, \u7528\u6237\u83B7\u53D6\u4E0D\u5230\u57FA\u672C\u7684\u73AF\u5883\u53D8\u91CF/etc/profile \u548C/etc/passwd\u3001group \u7B49\u6587\u4EF6, \u4E00\u4E9B\u57FA\u672C\u547D\u4EE4\u90FD\u4F1A\u51FA\u73B0\u95EE\u9898, \u672C\u7528\u6237\u7684\u6587\u4EF6\u53EA\u6709 uid\u3001gid, \u65E0\u6CD5\u5BF9\u5E94\u540D\u7528\u6237\u540D\u79F0\u548C\u7EC4\u540D\u79F0\u3002</p></div><h2 id="\u68C0\u67E5\u4EFB\u4F55\u4EBA\u90FD\u6709\u5199\u6743\u9650\u7684\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u4EFB\u4F55\u4EBA\u90FD\u6709\u5199\u6743\u9650\u7684\u76EE\u5F55" aria-hidden="true">#</a> \u68C0\u67E5\u4EFB\u4F55\u4EBA\u90FD\u6709\u5199\u6743\u9650\u7684\u76EE\u5F55</h2><p><code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -type d -perm -0222 -exec <span class="token function">ls</span> -ldg <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u4E9B\u76EE\u5F55\u662F\u5B58\u653E\u6BCF\u4E2A\u7528\u6237\u4E34\u65F6\u6587\u4EF6\u7684, \u76EE\u5F55\u672C\u8EAB\u662F\u5E26 <code>Sticky BIT</code> \u7C98\u6EDE\u4F4D\u7684, \u5373\u4F7F\u91CC\u9762\u7684\u6587\u4EF6\u6709 <code>o+w</code> \u6743\u9650\u4E5F\u6CA1\u95EE\u9898, \u7CFB\u7EDF\u672C\u8EAB\u6709\u4FDD\u62A4\u6027\u63AA\u65BD\u3002</p></div><h2 id="\u67E5\u627E\u4EFB\u4F55\u4EBA\u90FD\u6709\u5199\u6743\u9650\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u4EFB\u4F55\u4EBA\u90FD\u6709\u5199\u6743\u9650\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u627E\u4EFB\u4F55\u4EBA\u90FD\u6709\u5199\u6743\u9650\u7684\u6587\u4EF6</h2><p><code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -type f -perm -0222 -exec <span class="token function">ls</span> -lg <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+`" alt="RedHat \u5B89\u5168\u52A0\u56FA"></p><h2 id="\u68C0\u67E5\u6CA1\u6709\u5C5E\u4E3B\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u6CA1\u6709\u5C5E\u4E3B\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u68C0\u67E5\u6CA1\u6709\u5C5E\u4E3B\u7684\u6587\u4EF6</h2><p><code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -nouser -o -nogroup -print
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53D1\u73B0\u6CA1\u6709\u5C5E\u4E3B\u7684\u6587\u4EF6\u5F80\u5F80\u5C31\u610F\u5473\u7740\u6709\u9ED1\u5BA2\u5165\u4FB5\u4F60\u7684\u7CFB\u7EDF\u4E86\u3002\u4E0D\u80FD\u5141\u8BB8\u6CA1\u6709\u4E3B \u4EBA\u7684\u6587\u4EF6\u5B58\u5728\u3002\u5982\u679C\u5728\u7CFB\u7EDF\u4E2D\u53D1\u73B0\u4E86\u6CA1\u6709\u5C5E\u4E3B\u7684\u6587\u4EF6\u6216\u76EE\u5F55, \u5148\u67E5\u770B\u5B83\u7684\u5B8C \u6574\u6027, \u5982\u679C\u4E00\u5207\u6B63\u5E38, \u7ED9\u5B83\u4E00\u4E2A\u5C5E\u4E3B\u3002\u6709\u65F6\u5019\u5378\u8F7D\u7A0B\u5E8F\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E00\u4E9B\u6CA1\u6709 \u4E3B\u4EBA\u7684\u6587\u4EF6\u6216\u76EE\u5F55, \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u53EF\u4EE5\u628A\u8FD9\u4E9B\u6587\u4EF6\u548C\u76EE\u5F55\u5220\u9664\u6389\u3002</p><p>\u5728\u5B89\u5168\u52A0\u56FA\u811A\u672C\u4E2D, \u628A\u6CA1\u6709\u5C5E\u4E3B\u6216\u5C5E\u7EC4\u7684\u6587\u4EF6\u76F4\u63A5\u8D4B\u4E88\u4E86 <code>nobody</code> \u7528\u6237\u548C\u7EC4, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -path <span class="token string">&quot;/proc&quot;</span> -prune -nouser -o -nogroup -exec <span class="token function">chown</span> nobody:nobody <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u547D\u4EE4\u4E2D\u6392\u9664\u4E86 /proc \u76EE\u5F55</p></div><h2 id="\u68C0\u67E5\u5F02\u5E38\u9690\u542B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u5F02\u5E38\u9690\u542B\u6587\u4EF6" aria-hidden="true">#</a> \u68C0\u67E5\u5F02\u5E38\u9690\u542B\u6587\u4EF6</h2><p><code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> / -xdev -name <span class="token string">&quot;..*&quot;</span> -print
<span class="token function">find</span> / -xdev -name <span class="token string">&quot;...*&quot;</span> -print
<span class="token function">find</span> / -xdev -name <span class="token string">&quot;..^G&quot;</span> -print
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\u4E5F\u8981\u6CE8\u610F\u8C61 <code>\u201C.xx\u201D</code> \u548C <code>\u201C.mail\u201D</code> \u8FD9\u6837\u7684\u6587\u4EF6\u540D\u7684\u3002\uFF08\u8FD9\u4E9B\u6587\u4EF6\u540D\u770B\u8D77\u6765\u90FD\u5F88\u8C61\u6B63\u5E38\u7684\u6587\u4EF6\u540D\uFF09\u5728\u7CFB\u7EDF\u7684\u6BCF\u4E2A\u5730\u65B9\u90FD\u8981\u67E5\u770B\u4E00\u4E0B\u6709\u6CA1\u6709\u5F02\u5E38\u9690\u542B\u6587\u4EF6\uFF08\u70B9\u53F7\u662F\u8D77\u59CB\u5B57\u7B26\u7684, \u7528 <code>\u201Cls\u201D</code> \u547D\u4EE4\u770B\u4E0D\u5230\u7684\u6587\u4EF6\uFF09, \u56E0\u4E3A\u8FD9\u4E9B\u6587\u4EF6\u53EF\u80FD\u662F\u9690\u85CF\u7684\u9ED1\u5BA2\u5DE5\u5177\u6216\u8005\u5176\u5B83\u4E00\u4E9B\u4FE1\u606F\uFF08\u53E3\u4EE4\u7834\u89E3\u7A0B\u5E8F\u3001\u5176\u5B83\u7CFB\u7EDF\u7684\u53E3\u4EE4\u6587\u4EF6, \u7B49\u7B49\uFF09\u3002\u5728 <code>UNIX</code> \u4E0B, \u4E00\u4E2A\u5E38\u7528\u7684\u6280\u672F\u5C31\u662F\u7528\u4E00\u4E9B\u7279\u6B8A\u7684\u540D, \u5982: <code>\u201C...\u201D</code> \u3001 <code>\u201C.. \u201D\uFF08\u70B9\u70B9\u7A7A\u683C</code> \uFF09\u6216 <code>\u201C..^G\u201D\uFF08\u70B9\u70B9 ctrl+v \u548C ctrl+G\uFF09</code> , \u6765\u9690\u542B\u6587\u4EF6\u6216\u76EE\u5F55\u3002</p><p>\u57FA\u672C\u4E0A\u7CFB\u7EDF\u9ED8\u8BA4\u53EA\u6709\u4E00\u4E2A\u6587\u4EF6 <code>/usr/share/man/man1/..1.gz</code> , \u5728\u52A0\u56FA\u811A\u672C\u4E2D\u7684\u5904\u7406\u65B9\u5F0F\u662F\u5B58\u5728\u5C31\u76F4\u63A5\u628A\u5B83\u5220\u9664\u6389\u3002<br></p><p><img src="`+o+`" alt="RedHat \u5B89\u5168\u52A0\u56FA"></p><h2 id="\u52A0\u9501\u91CD\u8981\u53E3\u4EE4\u6587\u4EF6\u548C\u7EC4\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A0\u9501\u91CD\u8981\u53E3\u4EE4\u6587\u4EF6\u548C\u7EC4\u6587\u4EF6" aria-hidden="true">#</a> \u52A0\u9501\u91CD\u8981\u53E3\u4EE4\u6587\u4EF6\u548C\u7EC4\u6587\u4EF6</h2><p>\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u7ED9\u53E3\u4EE4\u6587\u4EF6\u548C\u7EC4\u6587\u4EF6\u8BBE\u7F6E\u4E0D\u53EF\u6539\u53D8\u4F4D\u52A0\u9501, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>chattr +i /etc/passwd
chattr +i /etc/shadow
chattr +i /etc/group
chattr +i /etc/gshadow
chattr +i /etc/xinetd.conf
chattr +i /etc/services
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u9501\u540E, \u5C31\u4E0D\u80FD\u88AB\u6539\u53D8\u6587\u4EF6\u5185\u5BB9\u3002\u540C\u65F6\u4F1A\u5F71\u54CD <code>useradd</code> \u3001 <code>userdel</code> \u7B49\u8DDF\u5E10\u6237\u76F8\u5173\u7684\u64CD\u4F5C</p><p>\u67E5\u770B\u547D\u4EE4, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lsattr /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7ED3\u679C\u4E3A: <code>----i-------- /etc/passwd</code> \u5982\u679C\u8981\u4FEE\u6539\u6587\u4EF6, \u5FC5\u987B\u5148\u5BF9\u8BE5\u6587\u4EF6\u8FDB\u884C\u89E3\u9501, <code>For Exmaple:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>chattr -i /etc/passwd
chattr -i /etc/shadow
chattr -i /etc/group
chattr -i /etc/gshadow
chattr -i /etc/xinetd.conf
chattr -i /etc/services
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),t=[l];function r(p,u){return n(),s("div",null,t)}var v=e(i,[["render",r],["__file","user-and-file-permissions.html.vue"]]);export{v as default};
