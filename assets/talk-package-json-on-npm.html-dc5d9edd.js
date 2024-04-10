const e=JSON.parse('{"key":"v-61668ab5","path":"/views/nodejs/talk-package-json-on-npm.html","title":"解读 npm 中的 package.json","lang":"zh-CN","frontmatter":{"author":"星火燎原@vxhly","title":"解读 npm 中的 package.json","star":true,"category":["nodejs"],"tag":["Node.js"],"date":"2016-08-30T17:08:18.000Z","description":"前言 package.json 是 Node.js 应用中比较重要的部分, 它定义了项目的依赖关系, 这里将介绍该文件各个配置项的作用。","head":[["link",{"rel":"canonical","href":"https://vxhly.github.io/views/nodejs/talk-package-json-on-npm.html"}],["meta",{"property":"og:url","content":"https://vxhly.github.io/views/nodejs/talk-package-json-on-npm.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"解读 npm 中的 package.json"}],["meta",{"property":"og:description","content":"前言 package.json 是 Node.js 应用中比较重要的部分, 它定义了项目的依赖关系, 这里将介绍该文件各个配置项的作用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-19T02:00:37.000Z"}],["meta",{"property":"article:author","content":"星火燎原@vxhly"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:published_time","content":"2016-08-30T17:08:18.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-19T02:00:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解读 npm 中的 package.json\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-08-30T17:08:18.000Z\\",\\"dateModified\\":\\"2023-02-19T02:00:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"星火燎原@vxhly\\"}]}"]]},"headers":[{"level":2,"title":"创建 package.json 文件","slug":"创建-package-json-文件","link":"#创建-package-json-文件","children":[]},{"level":2,"title":"package.json 文件解读","slug":"package-json-文件解读","link":"#package-json-文件解读","children":[{"level":3,"title":"默认值","slug":"默认值","link":"#默认值","children":[]},{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"version","slug":"version","link":"#version","children":[]},{"level":3,"title":"description","slug":"description","link":"#description","children":[]},{"level":3,"title":"keywords","slug":"keywords","link":"#keywords","children":[]},{"level":3,"title":"homepage","slug":"homepage","link":"#homepage","children":[]},{"level":3,"title":"bugs","slug":"bugs","link":"#bugs","children":[]},{"level":3,"title":"license","slug":"license","link":"#license","children":[]},{"level":3,"title":"people fields: author, contributors","slug":"people-fields-author-contributors","link":"#people-fields-author-contributors","children":[]},{"level":3,"title":"files","slug":"files","link":"#files","children":[]},{"level":3,"title":"main","slug":"main","link":"#main","children":[]},{"level":3,"title":"bin","slug":"bin","link":"#bin","children":[]},{"level":3,"title":"man","slug":"man","link":"#man","children":[]},{"level":3,"title":"directories","slug":"directories","link":"#directories","children":[]},{"level":3,"title":"directories.lib","slug":"directories-lib","link":"#directories-lib","children":[]},{"level":3,"title":"directories.bin","slug":"directories-bin","link":"#directories-bin","children":[]},{"level":3,"title":"directories.man","slug":"directories-man","link":"#directories-man","children":[]},{"level":3,"title":"directories.doc","slug":"directories-doc","link":"#directories-doc","children":[]},{"level":3,"title":"directories.example","slug":"directories-example","link":"#directories-example","children":[]},{"level":3,"title":"repository","slug":"repository","link":"#repository","children":[]},{"level":3,"title":"scripts","slug":"scripts","link":"#scripts","children":[]},{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":3,"title":"依赖 URL","slug":"依赖-url","link":"#依赖-url","children":[]},{"level":3,"title":"依赖 Git URL","slug":"依赖-git-url","link":"#依赖-git-url","children":[]},{"level":3,"title":"GitHub URLs","slug":"github-urls","link":"#github-urls","children":[]},{"level":3,"title":"devDependencies","slug":"devdependencies","link":"#devdependencies","children":[]},{"level":3,"title":"peerDependencies","slug":"peerdependencies","link":"#peerdependencies","children":[]},{"level":3,"title":"bundledDependencies","slug":"bundleddependencies","link":"#bundleddependencies","children":[]},{"level":3,"title":"engines","slug":"engines","link":"#engines","children":[]},{"level":3,"title":"engineStrict","slug":"enginestrict","link":"#enginestrict","children":[]},{"level":3,"title":"os","slug":"os","link":"#os","children":[]},{"level":3,"title":"cpu","slug":"cpu","link":"#cpu","children":[]},{"level":3,"title":"preferGlobal","slug":"preferglobal","link":"#preferglobal","children":[]},{"level":3,"title":"private","slug":"private","link":"#private","children":[]},{"level":3,"title":"publishConfig","slug":"publishconfig","link":"#publishconfig","children":[]},{"level":3,"title":"SEE ALSO","slug":"see-also","link":"#see-also","children":[]}]}],"git":{"createdTime":1654950241000,"updatedTime":1676772037000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":2}]},"readingTime":{"minutes":12.57,"words":3771},"filePathRelative":"views/nodejs/talk-package-json-on-npm.md","localizedDate":"2016年8月30日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>package.json 是 Node.js 应用中比较重要的部分, 它定义了项目的依赖关系, 这里将介绍该文件各个配置项的作用。</p>\\n</div>\\n","copyright":{"author":"星火燎原@vxhly","license":"MIT"},"autoDesc":true}');export{e as data};