const e=JSON.parse('{"key":"v-403fa7dc","path":"/views/liunx/iptables-settings.html","title":"RedHat 系统安全加固（五）防火墙 (iptables) 的设置","lang":"zh-CN","frontmatter":{"author":"星火燎原@vxhly","title":"RedHat 系统安全加固（五）防火墙 (iptables) 的设置","category":["liunx"],"tag":["Liunx","Security"],"date":"2016-10-27T10:00:55.000Z","description":"前言 本系列笔记又是 Liunx 学习系列教程的一大步, 本系列学习笔记记录 RedHat 系统的安全加固。本篇笔记记录 RedHat 下的防火请的开启和关闭, 还有允许哪些端口通过防火墙。","head":[["link",{"rel":"canonical","href":"https://vxhly.github.io/views/liunx/iptables-settings.html"}],["meta",{"property":"og:url","content":"https://vxhly.github.io/views/liunx/iptables-settings.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"RedHat 系统安全加固（五）防火墙 (iptables) 的设置"}],["meta",{"property":"og:description","content":"前言 本系列笔记又是 Liunx 学习系列教程的一大步, 本系列学习笔记记录 RedHat 系统的安全加固。本篇笔记记录 RedHat 下的防火请的开启和关闭, 还有允许哪些端口通过防火墙。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-11T12:24:01.000Z"}],["meta",{"property":"article:author","content":"星火燎原@vxhly"}],["meta",{"property":"article:tag","content":"Liunx"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:published_time","content":"2016-10-27T10:00:55.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-11T12:24:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RedHat 系统安全加固（五）防火墙 (iptables) 的设置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-10-27T10:00:55.000Z\\",\\"dateModified\\":\\"2022-06-11T12:24:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"星火燎原@vxhly\\"}]}"]]},"headers":[{"level":2,"title":"防火墙的开启和关闭","slug":"防火墙的开启和关闭","link":"#防火墙的开启和关闭","children":[{"level":3,"title":"永久性生效","slug":"永久性生效","link":"#永久性生效","children":[]},{"level":3,"title":"即时生效","slug":"即时生效","link":"#即时生效","children":[]}]},{"level":2,"title":"iptables 命令解释","slug":"iptables-命令解释","link":"#iptables-命令解释","children":[{"level":3,"title":"选项解释","slug":"选项解释","link":"#选项解释","children":[]},{"level":3,"title":"命令输入顺序","slug":"命令输入顺序","link":"#命令输入顺序","children":[]}]},{"level":2,"title":"iptables 的设置与查看","slug":"iptables-的设置与查看","link":"#iptables-的设置与查看","children":[{"level":3,"title":"查看 iptables 的设置","slug":"查看-iptables-的设置","link":"#查看-iptables-的设置","children":[]},{"level":3,"title":"清除已有 iptables 规则","slug":"清除已有-iptables-规则","link":"#清除已有-iptables-规则","children":[]},{"level":3,"title":"开放指定的端口","slug":"开放指定的端口","link":"#开放指定的端口","children":[]},{"level":3,"title":"屏蔽 IP","slug":"屏蔽-ip","link":"#屏蔽-ip","children":[]},{"level":3,"title":"保存当前设置的规则","slug":"保存当前设置的规则","link":"#保存当前设置的规则","children":[]}]}],"git":{"createdTime":1654950241000,"updatedTime":1654950241000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":1}]},"readingTime":{"minutes":3.19,"words":957},"filePathRelative":"views/liunx/iptables-settings.md","localizedDate":"2016年10月27日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>本系列笔记又是 Liunx 学习系列教程的一大步, 本系列学习笔记记录 RedHat 系统的安全加固。本篇笔记记录 RedHat 下的防火请的开启和关闭, 还有允许哪些端口通过防火墙。</p>\\n</div>\\n","copyright":{"author":"星火燎原@vxhly","license":"MIT"},"autoDesc":true}');export{e as data};