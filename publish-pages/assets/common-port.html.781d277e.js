import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as a,e as c}from"./app.f29ec3fb.js";const s={},i=c(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u5217\u51FA TCP/UDP \u534F\u8BAE\u5E38\u89C1\u7684\u7AEF\u53E3\u53F7\u5360\u7528\u60C5\u51B5, \u4EE5\u52A9\u4E8E\u5206\u6790\u8BE5\u670D\u52A1\u5668\u5F00\u653E\u4E86\u54EA\u4E9B\u7AEF\u53E3\u53F7, \u6216\u8005\u7A0B\u5E8F\u5360\u7528\u4E86\u54EA\u4E9B\u7AEF\u53E3\u53F7\u3002</p></div><h2 id="\u5982\u4F55\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u67E5\u770B" aria-hidden="true">#</a> \u5982\u4F55\u67E5\u770B</h2><h3 id="windows-\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#windows-\u7CFB\u7EDF" aria-hidden="true">#</a> Windows \u7CFB\u7EDF</h3><p>\u901A\u8FC7 <code>netstat</code> \u5217\u51FA\u6240\u6709\u7AEF\u53E3\u7684\u4F7F\u7528\u60C5\u51B5, <code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -ano
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>findstr</code> \u67E5\u8BE2\u5305\u542B\u5173\u952E\u5B57\u7684\u7AEF\u53E3\u4F7F\u7528\u60C5\u51B5, <code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>netsata -ano <span class="token operator">|</span> findstr <span class="token string">&quot;:80&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>tasklist</code> \u67E5\u8BE2\u54EA\u4E2A\u7A0B\u5E8F\u6216\u5E94\u7528\u5360\u7528\u8BE5\u7AEF\u53E3\u5BF9\u5E94\u7684 <code>PID</code> , <code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tasklist <span class="token operator">|</span> findstr <span class="token string">&quot;2180&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="liunx-\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#liunx-\u7CFB\u7EDF" aria-hidden="true">#</a> Liunx \u7CFB\u7EDF</h3><p>\u901A\u8FC7 <code>netstat</code> \u5217\u51FA\u76D1\u542C\u7684\u7AEF\u53E3, <code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -tlun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>netstat</code> \u5217\u51FA\u6240\u6709\u7684\u7F51\u7EDC\u8FDE\u63A5, <code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -an
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>ps</code> \u67E5\u770B\u8FDB\u7A0B\u5360\u7528\u72B6\u6001, <code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5E38\u89C1\u7AEF\u53E3\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7AEF\u53E3\u53F7" aria-hidden="true">#</a> \u5E38\u89C1\u7AEF\u53E3\u53F7</h2><h3 id="tcp-\u534F\u8BAE\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#tcp-\u534F\u8BAE\u76F8\u5173" aria-hidden="true">#</a> TCP \u534F\u8BAE\u76F8\u5173</h3><ul><li><code>20</code> =&gt; FTP\uFF08\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09 \u4F20\u8F93\u6570\u636E\u7AEF\u53E3, \u7528\u4E8E\u7EAF\u5C5E\u6570\u636E</li><li><code>21</code> =&gt; FTP\uFF08\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09 \u8FDE\u63A5\u7AEF\u53E3, \u7528\u4E8E\u767B\u9646\u8BA4\u8BC1</li><li><code>22</code> =&gt; SSH\uFF08\u5B89\u5168\u5916\u58F3\u534F\u8BAE\uFF09 \u52A0\u5BC6\u7684\u8FDC\u7A0B\u8FDE\u63A5, SFTP\uFF08\u5B89\u5168\u7684\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09 \u4F20\u8F93\u5B89\u5168\u7684\u6570\u636E</li><li><code>23</code> =&gt; Telnet\uFF08\u8FDC\u7A0B\u7EC8\u7AEF\u534F\u8BAE\uFF09 \u76F8\u5BF9\u4E0D\u5B89\u5168\u7684\u8FDC\u7A0B\u8FDE\u63A5</li><li><code>25</code> =&gt; SMTP\uFF08\u7B80\u5355\u90AE\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09 \u4F7F\u7528\u7684\u7AEF\u53E3</li><li><code>53</code> =&gt; DNS \u670D\u52A1\u5668\u5F00\u653E\u7684\u7AEF\u53E3, \u5165\u4FB5\u8005\u53EF\u80FD\u662F\u8BD5\u56FE\u8FDB\u884C\u533A\u57DF\u4F20\u9012\uFF08TCP\uFF09, \u6240\u4EE5\u9632\u706B\u5899\u5E38\u5E38\u8FC7\u6EE4\u6216\u8BB0\u5F55\u8BE5\u7AEF\u53E3</li><li><code>80</code> / <code>8080</code> / <code>3128</code> / <code>8081</code> / <code>9080</code> =&gt; HTTP\uFF08\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF09 \u4F7F\u7528\u7684\u7AEF\u53E3</li><li><code>109</code> =&gt; POP2\uFF08\u90AE\u4EF6\u534F\u8BAE 2\uFF09 \u670D\u52A1\u5668\u5F00\u653E\u7684\u7AEF\u53E3</li><li><code>110</code> =&gt; POP3\uFF08\u90AE\u4EF6\u534F\u8BAE 3\uFF09 \u670D\u52A1\u5668\u5F00\u653E\u7684\u7AEF\u53E3, \u7528\u4E8E\u63A5\u6536\u90AE\u4EF6, \u5BA2\u6237\u7AEF\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u90AE\u4EF6\u670D\u52A1</li><li><code>139</code> =&gt; \u6587\u4EF6\u5171\u4EAB\u4F7F\u7528\u7684\u7AEF\u53E3</li><li><code>443</code> =&gt; HTTPS\uFF08\u5B89\u5168\u5957\u63A5\u5B57\u5C42\u7684\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF09 \u9ED8\u8BA4\u7AEF\u53E3, \u4F20\u8F93\u6570\u636E\u66F4\u52A0\u5B89\u5168</li><li><code>445</code> =&gt; SMB\uFF08\u6587\u4EF6\u5171\u4EAB\u670D\u52A1\uFF09\u5F00\u653E\u7684\u7AEF\u53E3</li><li><code>1433</code> =&gt; SQL Server \u9ED8\u8BA4\u7684\u7AEF\u53E3, \u7528\u4E8E\u4F9B SQL Server \u5BF9\u5916\u63D0\u4F9B\u670D\u52A1</li><li><code>1521</code> =&gt; Oracle \u6570\u636E\u5E93\u9ED8\u8BA4\u7AEF\u53E3</li><li><code>3306</code> =&gt; MySQL \u6570\u636E\u5E93\u9ED8\u8BA4\u7AEF\u53E3</li><li><code>3389</code> =&gt; \u8FDC\u7A0B\u684C\u9762\u4F7F\u7528\u7684\u7AEF\u53E3</li><li><code>8080</code> =&gt; Tomcat \u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7AEF\u53E3</li></ul><h3 id="udp-\u534F\u8BAE\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#udp-\u534F\u8BAE\u76F8\u5173" aria-hidden="true">#</a> UDP \u534F\u8BAE\u76F8\u5173</h3><ul><li><code>53</code> =&gt; DNS \u670D\u52A1\u5668\u5F00\u653E\u7684\u7AEF\u53E3, \u5165\u4FB5\u8005\u53EF\u80FD\u662F\u8BD5\u56FE\u8FDB\u884C\u6B3A\u9A97 DNS\uFF08UDP\uFF09\u6216\u9690\u85CF\u5176\u4ED6\u7684\u901A\u4FE1, \u6240\u4EE5\u9632\u706B\u5899\u5E38\u5E38\u8FC7\u6EE4\u6216\u8BB0\u5F55\u8BE5\u7AEF\u53E3</li><li><code>69</code> =&gt; TFTP\uFF08\u7B80\u5355\u6587\u4EF6\u4F20\u8F93\u534F\u8BAE\uFF09 \u9ED8\u8BA4\u7684\u7AEF\u53E3\u53F7</li><li><code>139</code> =&gt; \u6587\u4EF6\u5171\u4EAB\u4F7F\u7528\u7684\u7AEF\u53E3</li><li><code>161</code> =&gt; SNMP\uFF08\u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE\uFF09 \u5165\u4FB5\u8005\u5E38\u63A2\u6D4B\u7684\u7AEF\u53E3</li><li><code>162</code> =&gt; SNMP\uFF08\u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE\uFF09 \u9ED8\u8BA4\u7684\u7AEF\u53E3\u53F7</li><li><code>445</code> =&gt; SMB\uFF08\u6587\u4EF6\u5171\u4EAB\u670D\u52A1\uFF09\u5F00\u653E\u7684\u7AEF\u53E3</li><li><code>1434</code> =&gt; SQL Server \u9ED8\u8BA4\u7684\u7AEF\u53E3, \u4E8E\u5411\u8BF7\u6C42\u8005\u8FD4\u56DE SQL Server \u4F7F\u7528\u4E86\u54EA\u4E2A TCP/IP \u7AEF\u53E3</li></ul>`,21),o=[i];function n(l,t){return d(),a("div",null,o)}var u=e(s,[["render",n],["__file","common-port.html.vue"]]);export{u as default};
