const e=JSON.parse('{"key":"v-1d583925","path":"/views/nodejs/install-hexo-next-on-github.html","title":"\u4F7F\u7528 Hexo+NexT \u5728 Github \u4E0A\u642D\u5EFA\u9759\u6001\u535A\u5BA2","lang":"zh-CN","frontmatter":{"author":"\u661F\u706B\u71CE\u539F@vxhly","title":"\u4F7F\u7528 Hexo+NexT \u5728 Github \u4E0A\u642D\u5EFA\u9759\u6001\u535A\u5BA2","category":["nodejs"],"tag":["Liunx","Node.js","Hexo"],"date":"2016-08-03T13:11:30.000Z","summary":"\u524D\u8A00\\nHexo \u662F\u4E00\u4E2A\u5FEB\u901F, \u7B80\u5355\u800C\u9AD8\u6548\u7684\u9759\u6001\u535A\u5BA2\u6846\u67B6, \u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728 GitHub \u4E0A\u4F7F\u7528 Hexo+NexT \u642D\u5EFA\u9759\u6001\u535A\u5BA2\u3002\\n\\n","head":[["meta",{"property":"og:url","content":"https://vxhly.github.io/views/nodejs/install-hexo-next-on-github.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"\u4F7F\u7528 Hexo+NexT \u5728 Github \u4E0A\u642D\u5EFA\u9759\u6001\u535A\u5BA2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-01T13:55:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u661F\u706B\u71CE\u539F@vxhly"}],["meta",{"property":"article:tag","content":"Liunx"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"Hexo"}],["meta",{"property":"article:published_time","content":"2016-08-03T13:11:30.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-01T13:55:22.000Z"}],["link",{"rel":"canonical","href":"https://vxhly.github.io/views/nodejs/install-hexo-next-on-github.html"}]]},"excerpt":"<div class=\\"custom-container tip\\"><p class=\\"custom-container-title\\">\u524D\u8A00</p>\\n<p>Hexo \u662F\u4E00\u4E2A\u5FEB\u901F, \u7B80\u5355\u800C\u9AD8\u6548\u7684\u9759\u6001\u535A\u5BA2\u6846\u67B6, \u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728 GitHub \u4E0A\u4F7F\u7528 Hexo+NexT \u642D\u5EFA\u9759\u6001\u535A\u5BA2\u3002</p>\\n</div>\\n","headers":[{"level":2,"title":"\u51C6\u5907","slug":"\u51C6\u5907","children":[{"level":3,"title":"Node.js \u73AF\u5883","slug":"node-js-\u73AF\u5883","children":[]},{"level":3,"title":"\u5B89\u88C5 Git","slug":"\u5B89\u88C5-git","children":[]}]},{"level":2,"title":"Hexo \u521D\u59CB\u5316\u535A\u5BA2\u6846\u67B6","slug":"hexo-\u521D\u59CB\u5316\u535A\u5BA2\u6846\u67B6","children":[{"level":3,"title":"\u5B89\u88C5 Hexo","slug":"\u5B89\u88C5-hexo","children":[]},{"level":3,"title":"\u521D\u59CB\u5316\u6846\u67B6","slug":"\u521D\u59CB\u5316\u6846\u67B6","children":[]},{"level":3,"title":"\u751F\u6210\u9759\u6001\u7F51\u7AD9","slug":"\u751F\u6210\u9759\u6001\u7F51\u7AD9","children":[]},{"level":3,"title":"\u672C\u5730\u9884\u89C8","slug":"\u672C\u5730\u9884\u89C8","children":[]},{"level":3,"title":"\u90E8\u7F72\u7F51\u7AD9\u81F3 github","slug":"\u90E8\u7F72\u7F51\u7AD9\u81F3-github","children":[]}]},{"level":2,"title":"\u4F7F\u7528 NexT \u4E3B\u9898\u8BA9\u7AD9\u70B9\u66F4\u9177\u70AB","slug":"\u4F7F\u7528-next-\u4E3B\u9898\u8BA9\u7AD9\u70B9\u66F4\u9177\u70AB","children":[{"level":3,"title":"\u4E0B\u8F7D\u4E3B\u9898","slug":"\u4E0B\u8F7D\u4E3B\u9898","children":[]},{"level":3,"title":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6","slug":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"\u9A8C\u8BC1\u4E3B\u9898\u6548\u679C","slug":"\u9A8C\u8BC1\u4E3B\u9898\u6548\u679C","children":[]}]},{"level":2,"title":"\u7AD9\u5185\u641C\u7D22","slug":"\u7AD9\u5185\u641C\u7D22","children":[{"level":3,"title":"\u5B89\u88C5 hexo-generator-search","slug":"\u5B89\u88C5-hexo-generator-search","children":[]},{"level":3,"title":"\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6","slug":"\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6","slug":"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6","children":[]}]},{"level":2,"title":"\u5F00\u542F\u5B57\u6570\u7EDF\u8BA1\u548C\u9605\u8BFB\u65F6\u957F","slug":"\u5F00\u542F\u5B57\u6570\u7EDF\u8BA1\u548C\u9605\u8BFB\u65F6\u957F","children":[{"level":3,"title":"\u5B89\u88C5 hexo-wordcount","slug":"\u5B89\u88C5-hexo-wordcount","children":[]},{"level":3,"title":"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6","slug":"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6-1","children":[]}]},{"level":2,"title":"\u7AD9\u70B9\u914D\u7F6E\u6587\u4EF6","slug":"\u7AD9\u70B9\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":2,"title":"\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\u6587\u4EF6","slug":"\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\u6587\u4EF6","children":[]},{"level":2,"title":"\u817E\u8BAF\u516C\u76CA 404 \u9875\u9762","slug":"\u817E\u8BAF\u516C\u76CA-404-\u9875\u9762","children":[]}],"git":{"createdTime":1654950241000,"updatedTime":1659362122000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":2}]},"readingTime":{"minutes":3.45,"words":1035},"copyright":"\u8457\u4F5C\u6743\u5F52\u661F\u706B\u71CE\u539F@vxhly\u6240\u6709\\n\u57FA\u4E8EMIT\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://vxhly.github.io/views/nodejs/install-hexo-next-on-github.html","filePathRelative":"views/nodejs/install-hexo-next-on-github.md","localizedDate":"2016\u5E748\u67083\u65E5"}');export{e as data};
