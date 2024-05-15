const l=JSON.parse(`{"key":"v-149d9caf","path":"/system-architect/basic-knowledge/basic-architecture-design.html","title":"系统架构-章节重点整理-系统架构设计","lang":"zh-CN","frontmatter":{"author":"星火燎原@vxhly","title":"系统架构-章节重点整理-系统架构设计","category":["软考"],"tag":["软考","系统架构设计师"],"date":"2024-04-10T19:25:20.000Z","seo":false,"head":[["link",{"rel":"canonical","href":"https://vxhly.github.io/system-architect/basic-knowledge/basic-architecture-design.html"}]]},"headers":[{"level":2,"title":"软件架构设计","slug":"软件架构设计","link":"#软件架构设计","children":[{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]}]},{"level":2,"title":"软件架构的重要性","slug":"软件架构的重要性","link":"#软件架构的重要性","children":[{"level":3,"title":"软件架构演化","slug":"软件架构演化","link":"#软件架构演化","children":[]},{"level":3,"title":"'4+1' 视图","slug":"_4-1-视图","link":"#_4-1-视图","children":[]}]},{"level":2,"title":"基于架构的软件开发方法 ABSD","slug":"基于架构的软件开发方法-absd","link":"#基于架构的软件开发方法-absd","children":[]},{"level":2,"title":"特定领域软件体系结构 DSSA","slug":"特定领域软件体系结构-dssa","link":"#特定领域软件体系结构-dssa","children":[{"level":3,"title":"DSSA 基本活动","slug":"dssa-基本活动","link":"#dssa-基本活动","children":[]},{"level":3,"title":"DSSA 参与人员","slug":"dssa-参与人员","link":"#dssa-参与人员","children":[]},{"level":3,"title":"DSSA 建立过程的阶段","slug":"dssa-建立过程的阶段","link":"#dssa-建立过程的阶段","children":[]},{"level":3,"title":"体系结构演化","slug":"体系结构演化","link":"#体系结构演化","children":[]}]},{"level":2,"title":"基于场景的架构评估方法（SAAM）","slug":"基于场景的架构评估方法-saam","link":"#基于场景的架构评估方法-saam","children":[]},{"level":2,"title":"软件架构风格","slug":"软件架构风格","link":"#软件架构风格","children":[{"level":3,"title":"数据流体系结构风格","slug":"数据流体系结构风格","link":"#数据流体系结构风格","children":[]},{"level":3,"title":"调用/返回体系结构风格","slug":"调用-返回体系结构风格","link":"#调用-返回体系结构风格","children":[]},{"level":3,"title":"以数据为中心的体系结构风格","slug":"以数据为中心的体系结构风格","link":"#以数据为中心的体系结构风格","children":[]},{"level":3,"title":"虚拟机体系结构风格","slug":"虚拟机体系结构风格","link":"#虚拟机体系结构风格","children":[]},{"level":3,"title":"独立构件体系结构风格","slug":"独立构件体系结构风格","link":"#独立构件体系结构风格","children":[]},{"level":3,"title":"C2","slug":"c2","link":"#c2","children":[]},{"level":3,"title":"闭环控制架构 - 过程控制","slug":"闭环控制架构-过程控制","link":"#闭环控制架构-过程控制","children":[]}]},{"level":2,"title":"软件架构复用","slug":"软件架构复用","link":"#软件架构复用","children":[]},{"level":2,"title":"软件系统质量属性","slug":"软件系统质量属性","link":"#软件系统质量属性","children":[{"level":3,"title":"开发期质量属性（6 个）","slug":"开发期质量属性-6-个","link":"#开发期质量属性-6-个","children":[]},{"level":3,"title":"运行期质量属性（7 个）","slug":"运行期质量属性-7-个","link":"#运行期质量属性-7-个","children":[]}]},{"level":2,"title":"七大面向架构评估的质量属性","slug":"七大面向架构评估的质量属性","link":"#七大面向架构评估的质量属性","children":[{"level":3,"title":"性能","slug":"性能","link":"#性能","children":[]},{"level":3,"title":"可靠性","slug":"可靠性","link":"#可靠性","children":[]},{"level":3,"title":"可用性","slug":"可用性","link":"#可用性","children":[]},{"level":3,"title":"安全性","slug":"安全性","link":"#安全性","children":[]},{"level":3,"title":"可修改性","slug":"可修改性","link":"#可修改性","children":[]},{"level":3,"title":"功能性","slug":"功能性","link":"#功能性","children":[]},{"level":3,"title":"可变性","slug":"可变性","link":"#可变性","children":[]},{"level":3,"title":"互操作性","slug":"互操作性","link":"#互操作性","children":[]}]},{"level":2,"title":"软件质量特性","slug":"软件质量特性","link":"#软件质量特性","children":[]},{"level":2,"title":"质量属性场景描述","slug":"质量属性场景描述","link":"#质量属性场景描述","children":[]},{"level":2,"title":"软件架构评估","slug":"软件架构评估","link":"#软件架构评估","children":[{"level":3,"title":"架构层次","slug":"架构层次","link":"#架构层次","children":[]},{"level":3,"title":"基于场景的架构分析方法 SAAM 方法","slug":"基于场景的架构分析方法-saam-方法","link":"#基于场景的架构分析方法-saam-方法","children":[]},{"level":3,"title":"架构权衡分析方法 ATAM 方法","slug":"架构权衡分析方法-atam-方法","link":"#架构权衡分析方法-atam-方法","children":[]}]},{"level":2,"title":"基于体系结构的开发模型（ABSDM）","slug":"基于体系结构的开发模型-absdm","link":"#基于体系结构的开发模型-absdm","children":[]},{"level":2,"title":"面向服务的架构（SOA）","slug":"面向服务的架构-soa","link":"#面向服务的架构-soa","children":[]},{"level":2,"title":"消息中间件","slug":"消息中间件","link":"#消息中间件","children":[]},{"level":2,"title":"新兴技术","slug":"新兴技术","link":"#新兴技术","children":[{"level":3,"title":"云计算","slug":"云计算","link":"#云计算","children":[]},{"level":3,"title":"区块链","slug":"区块链","link":"#区块链","children":[]}]}],"git":{"createdTime":1712762370000,"updatedTime":1715773496000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":8}]},"readingTime":{"minutes":21.31,"words":6392},"filePathRelative":"system-architect/basic-knowledge/basic-architecture-design.md","localizedDate":"2024年4月10日","copyright":{"author":"星火燎原@vxhly","license":"MIT"}}`);export{l as data};
