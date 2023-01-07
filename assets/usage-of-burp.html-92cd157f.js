const e=JSON.parse('{"key":"v-bf19d708","path":"/views/pentest/usage-of-burp.html","title":"渗透工具用法（二）BurpSuite 的用法","lang":"zh-CN","frontmatter":{"author":"星火燎原@vxhly","title":"渗透工具用法（二）BurpSuite 的用法","category":["pentest"],"tag":["Security","Liunx","Protocol","Pentest"],"date":"2016-10-08T16:02:34.000Z","description":"前言 此系列笔记是网络渗透工具的使用方法, 本篇是介绍 Web 应用程序测试工具 BurpSuite 的使用方法。Burp Suite 其多种功能可以帮我们执行各种任务, 请求的拦截和修改, 扫描 web 应用程序漏洞, 以暴力破解登陆表单, 执行会话令牌等多种的随机性检查。","head":[["meta",{"property":"og:url","content":"https://vxhly.github.io/views/pentest/usage-of-burp.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"渗透工具用法（二）BurpSuite 的用法"}],["meta",{"property":"og:description","content":"前言 此系列笔记是网络渗透工具的使用方法, 本篇是介绍 Web 应用程序测试工具 BurpSuite 的使用方法。Burp Suite 其多种功能可以帮我们执行各种任务, 请求的拦截和修改, 扫描 web 应用程序漏洞, 以暴力破解登陆表单, 执行会话令牌等多种的随机性检查。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-11T12:24:01.000Z"}],["meta",{"property":"article:author","content":"星火燎原@vxhly"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:tag","content":"Liunx"}],["meta",{"property":"article:tag","content":"Protocol"}],["meta",{"property":"article:tag","content":"Pentest"}],["meta",{"property":"article:published_time","content":"2016-10-08T16:02:34.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-11T12:24:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"渗透工具用法（二）BurpSuite 的用法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-10-08T16:02:34.000Z\\",\\"dateModified\\":\\"2022-06-11T12:24:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"星火燎原@vxhly\\"}]}"],["link",{"rel":"canonical","href":"https://vxhly.github.io/views/pentest/usage-of-burp.html"}]]},"headers":[{"level":2,"title":"Burp Suite 环境","slug":"burp-suite-环境","link":"#burp-suite-环境","children":[{"level":3,"title":"JDK 安装和环境变量配置","slug":"jdk-安装和环境变量配置","link":"#jdk-安装和环境变量配置","children":[]}]},{"level":2,"title":"设置代理","slug":"设置代理","link":"#设置代理","children":[]},{"level":2,"title":"拦截改包和暴力破解","slug":"拦截改包和暴力破解","link":"#拦截改包和暴力破解","children":[{"level":3,"title":"模拟登录","slug":"模拟登录","link":"#模拟登录","children":[]},{"level":3,"title":"拦截请求包","slug":"拦截请求包","link":"#拦截请求包","children":[]},{"level":3,"title":"修改请求包","slug":"修改请求包","link":"#修改请求包","children":[]},{"level":3,"title":"添加字典","slug":"添加字典","link":"#添加字典","children":[]},{"level":3,"title":"开始破解","slug":"开始破解","link":"#开始破解","children":[]},{"level":3,"title":"分析","slug":"分析","link":"#分析","children":[]}]},{"level":2,"title":"Decode 和 Encode","slug":"decode-和-encode","link":"#decode-和-encode","children":[]}],"git":{"createdTime":1654950241000,"updatedTime":1654950241000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":1}]},"readingTime":{"minutes":2.69,"words":808},"filePathRelative":"views/pentest/usage-of-burp.md","localizedDate":"2016年10月8日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>此系列笔记是网络渗透工具的使用方法, 本篇是介绍 Web 应用程序测试工具 BurpSuite 的使用方法。Burp Suite 其多种功能可以帮我们执行各种任务, 请求的拦截和修改, 扫描 web 应用程序漏洞, 以暴力破解登陆表单, 执行会话令牌等多种的随机性检查。</p>\\n</div>\\n","copyright":{"author":"星火燎原@vxhly","license":"MIT"},"autoDesc":true}');export{e as data};
