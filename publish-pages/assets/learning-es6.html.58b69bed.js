const e=JSON.parse('{"key":"v-03996e2a","path":"/views/web/learning-es6.html","title":"ES6 \u5B66\u4E60\u7B14\u8BB0","lang":"zh-CN","frontmatter":{"author":"\u661F\u706B\u71CE\u539F@vxhly","title":"ES6 \u5B66\u4E60\u7B14\u8BB0","category":["web"],"tag":["JavaScript","Node.js","ES6"],"date":"2017-11-17T21:35:51.000Z","summary":"\u524D\u8A00\\n\u672C\u7BC7\u5B66\u4E60\u7B14\u8BB0\u7EAF\u7CB9\u8BB0\u5F55\u5B66\u4E60 ES6 \u7684\u8FC7\u7A0B\u4EE5\u53CA\u4E00\u4E9B\u5751\u70B9, \u4E0B\u9762\u7684\u4F8B\u5B50\u6CA1\u6709\u5148\u540E\u4E4B\u5206, \u4E5F\u662F\u5F88\u7B80\u5355\u7684\u4F8B\u5B50, \u60F3\u4E86\u89E3\u66F4\u591A\u7684\u76F4\u63A5\u6233 ECMAScript 6 \u5165\u95E8\u3002\\n\\n","head":[["meta",{"property":"og:url","content":"https://vxhly.github.io/views/web/learning-es6.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"ES6 \u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-11T12:24:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u661F\u706B\u71CE\u539F@vxhly"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"ES6"}],["meta",{"property":"article:published_time","content":"2017-11-17T21:35:51.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-11T12:24:01.000Z"}],["link",{"rel":"canonical","href":"https://vxhly.github.io/views/web/learning-es6.html"}]]},"excerpt":"<div class=\\"custom-container tip\\"><p class=\\"custom-container-title\\">\u524D\u8A00</p>\\n<p>\u672C\u7BC7\u5B66\u4E60\u7B14\u8BB0\u7EAF\u7CB9\u8BB0\u5F55\u5B66\u4E60 ES6 \u7684\u8FC7\u7A0B\u4EE5\u53CA\u4E00\u4E9B\u5751\u70B9, \u4E0B\u9762\u7684\u4F8B\u5B50\u6CA1\u6709\u5148\u540E\u4E4B\u5206, \u4E5F\u662F\u5F88\u7B80\u5355\u7684\u4F8B\u5B50, \u60F3\u4E86\u89E3\u66F4\u591A\u7684\u76F4\u63A5\u6233 <a href=\\"http://es6.ruanyifeng.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ECMAScript 6 \u5165\u95E8<ExternalLinkIcon/></a>\u3002</p>\\n</div>\\n","headers":[{"level":2,"title":"\u5EFA\u7ACB\u4E00\u4E2A ES6 \u4E13\u5C5E\u9879\u76EE","slug":"\u5EFA\u7ACB\u4E00\u4E2A-es6-\u4E13\u5C5E\u9879\u76EE","children":[{"level":3,"title":"\u8FD0\u884C\u4F60\u7684\u9879\u76EE","slug":"\u8FD0\u884C\u4F60\u7684\u9879\u76EE","children":[]}]},{"level":2,"title":"ES6 \u5757\u7EA7\u4F5C\u7528\u57DF","slug":"es6-\u5757\u7EA7\u4F5C\u7528\u57DF","children":[]},{"level":2,"title":"\u5B57\u7B26\u4E32\u5904\u7406\u4E0E\u51FD\u6570","slug":"\u5B57\u7B26\u4E32\u5904\u7406\u4E0E\u51FD\u6570","children":[]},{"level":2,"title":"\u89E3\u6784\u548C\u6269\u5C55\u5BF9\u8C61\u7684\u529F\u80FD\u6027","slug":"\u89E3\u6784\u548C\u6269\u5C55\u5BF9\u8C61\u7684\u529F\u80FD\u6027","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F Symbol \u4EE5\u53CA\u600E\u4E48\u4F7F\u7528","slug":"\u4EC0\u4E48\u662F-symbol-\u4EE5\u53CA\u600E\u4E48\u4F7F\u7528","children":[]},{"level":2,"title":"\u65B0\u7684 Set \u96C6\u5408, Map \u96C6\u5408","slug":"\u65B0\u7684-set-\u96C6\u5408-map-\u96C6\u5408","children":[]},{"level":2,"title":"iterator \u548C generator \u7684\u4F7F\u7528","slug":"iterator-\u548C-generator-\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"\u600E\u4E48\u5199\u7C7B, \u4EE5\u53CA Promise \u548C\u5982\u4F55\u5C01\u88C5\u5904\u7406\u5F02\u6B65","slug":"\u600E\u4E48\u5199\u7C7B-\u4EE5\u53CA-promise-\u548C\u5982\u4F55\u5C01\u88C5\u5904\u7406\u5F02\u6B65","children":[]},{"level":2,"title":"\u4EE3\u7406\u548C\u53CD\u5C04","slug":"\u4EE3\u7406\u548C\u53CD\u5C04","children":[]},{"level":2,"title":"\u4F7F\u7528\u6A21\u5757\u5C01\u88C5\u4EE3\u7801","slug":"\u4F7F\u7528\u6A21\u5757\u5C01\u88C5\u4EE3\u7801","children":[]}],"git":{"createdTime":1654950241000,"updatedTime":1654950241000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":1}]},"readingTime":{"minutes":31.78,"words":9533},"copyright":"\u8457\u4F5C\u6743\u5F52\u661F\u706B\u71CE\u539F@vxhly\u6240\u6709\\n\u57FA\u4E8EMIT\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://vxhly.github.io/views/web/learning-es6.html","filePathRelative":"views/web/learning-es6.md","localizedDate":"2017\u5E7411\u670818\u65E5"}');export{e as data};
