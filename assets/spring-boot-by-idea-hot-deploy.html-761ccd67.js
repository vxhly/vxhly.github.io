const e=JSON.parse('{"key":"v-1b7f8438","path":"/views/java/spring-boot-by-idea-hot-deploy.html","title":"在 IntelliJ IDEA 中配置 Spring Boot 项目的热部署","lang":"zh-CN","frontmatter":{"author":"星火燎原@vxhly","title":"在 IntelliJ IDEA 中配置 Spring Boot 项目的热部署","category":["java"],"tag":["SpringBoot","Maven","Java"],"date":"2018-08-22T14:47:20.000Z","description":"前言 Spring Boot 是由 Pivotal 团队提供的全新框架, 其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置, 从而使开发人员不再需要定义样板化的配置。Spring Boot 的 Web 项目, 在每一次修改了 java 文件或者是 resource 的时候, 都必须去重启一下项目, 这样的话浪费了很多的时间, 实现了热部署, 在每一次作了修改之后, 都会自动的重启。","head":[["meta",{"property":"og:url","content":"https://vxhly.github.io/views/java/spring-boot-by-idea-hot-deploy.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"在 IntelliJ IDEA 中配置 Spring Boot 项目的热部署"}],["meta",{"property":"og:description","content":"前言 Spring Boot 是由 Pivotal 团队提供的全新框架, 其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置, 从而使开发人员不再需要定义样板化的配置。Spring Boot 的 Web 项目, 在每一次修改了 java 文件或者是 resource 的时候, 都必须去重启一下项目, 这样的话浪费了很多的时间, 实现了热部署, 在每一次作了修改之后, 都会自动的重启。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-11T12:24:01.000Z"}],["meta",{"property":"article:author","content":"星火燎原@vxhly"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2018-08-22T14:47:20.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-11T12:24:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 IntelliJ IDEA 中配置 Spring Boot 项目的热部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-08-22T14:47:20.000Z\\",\\"dateModified\\":\\"2022-06-11T12:24:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"星火燎原@vxhly\\"}]}"],["link",{"rel":"canonical","href":"https://vxhly.github.io/views/java/spring-boot-by-idea-hot-deploy.html"}]]},"headers":[{"level":2,"title":"使用 IntelliJ IDEA 创建 Spring Boot 项目","slug":"使用-intellij-idea-创建-spring-boot-项目","link":"#使用-intellij-idea-创建-spring-boot-项目","children":[{"level":3,"title":"新建 Spring Initializr 项目","slug":"新建-spring-initializr-项目","link":"#新建-spring-initializr-项目","children":[]},{"level":3,"title":"填写项目信息","slug":"填写项目信息","link":"#填写项目信息","children":[]},{"level":3,"title":"选择项目使用的技术","slug":"选择项目使用的技术","link":"#选择项目使用的技术","children":[]},{"level":3,"title":"填写项目名称","slug":"填写项目名称","link":"#填写项目名称","children":[]},{"level":3,"title":"项目架构及依赖","slug":"项目架构及依赖","link":"#项目架构及依赖","children":[]}]},{"level":2,"title":"添加测试控制器","slug":"添加测试控制器","link":"#添加测试控制器","children":[{"level":3,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}]},{"level":2,"title":"IntelliJ IDEA 配置热部署","slug":"intellij-idea-配置热部署","link":"#intellij-idea-配置热部署","children":[{"level":3,"title":"配置 pom.xml","slug":"配置-pom-xml","link":"#配置-pom-xml","children":[]},{"level":3,"title":"配置 Maven 下载加速","slug":"配置-maven-下载加速","link":"#配置-maven-下载加速","children":[]},{"level":3,"title":"IntelliJ IDEA 相关配置","slug":"intellij-idea-相关配置","link":"#intellij-idea-相关配置","children":[]}]}],"git":{"createdTime":1654950241000,"updatedTime":1654950241000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":1}]},"readingTime":{"minutes":2.87,"words":860},"filePathRelative":"views/java/spring-boot-by-idea-hot-deploy.md","localizedDate":"2018年8月22日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>Spring Boot 是由 Pivotal 团队提供的全新框架, 其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置, 从而使开发人员不再需要定义样板化的配置。Spring Boot 的 Web 项目, 在每一次修改了 java 文件或者是 resource 的时候, 都必须去重启一下项目, 这样的话浪费了很多的时间, 实现了热部署, 在每一次作了修改之后, 都会自动的重启。</p>\\n</div>\\n","copyright":{"author":"星火燎原@vxhly","license":"MIT"},"autoDesc":true}');export{e as data};
