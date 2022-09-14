const e=JSON.parse('{"key":"v-4826ebb0","path":"/views/web/fullcalendar-api-finishing.html","title":"Fullcalendar \u5168\u65E5\u5386 API \u6574\u7406","lang":"zh-CN","frontmatter":{"author":"\u661F\u706B\u71CE\u539F@vxhly","title":"Fullcalendar \u5168\u65E5\u5386 API \u6574\u7406","category":["web"],"tag":["Vue.js","jQuery"],"date":"2020-09-30T09:39:04.000Z","summary":"\u524D\u8A00\\n\u6700\u8FD1\u5728\u505A\u9879\u76EE\u7684\u65F6\u5019\u53D1\u73B0\u4E86\u4E00\u4E2A\u6BD4\u8F83\u5F3A\u5927\u7684\u65E5\u5386\u63D2\u4EF6 Fullcalendar, \u7531\u4E8E\u5B98\u65B9\u53EA\u63D0\u4F9B\u4E86\u82F1\u6587\u7248\u7684 API \u8BF4\u660E, \u9605\u8BFB\u8D77\u6765\u786E\u5B9E\u6709\u70B9\u4E0D\u65B9\u4FBF, \u5728\u793E\u533A\u627E\u5230\u7684\u4E2D\u6587\u7248 API \u6587\u6863\u662F v4 \u7248\u672C\u7684, \u7136\u9E45\u73B0\u5728 Fullcalendar \u5DF2\u7ECF\u66F4\u65B0\u5230\u4E86 v5 \u7248\u672C\u4E86, \u4E5F\u6709\u5F88\u591A\u7684 API \u5728 v5 \u7248\u672C\u91CC\u9762\u5DF2\u7ECF\u4E0D\u9002\u7528\u4E86, \u6240\u4EE5\u73B0\u5C06\u5E38\u7528\u7684 API \u8FDB\u884C\u6574\u7406\uFF08\u9488\u5BF9 v5 \u7248\u672C\u7684\uFF09\u3002\\n\\n","head":[["meta",{"property":"og:url","content":"https://vxhly.github.io/views/web/fullcalendar-api-finishing.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"Fullcalendar \u5168\u65E5\u5386 API \u6574\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-11T12:24:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u661F\u706B\u71CE\u539F@vxhly"}],["meta",{"property":"article:tag","content":"Vue.js"}],["meta",{"property":"article:tag","content":"jQuery"}],["meta",{"property":"article:published_time","content":"2020-09-30T09:39:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-11T12:24:01.000Z"}],["link",{"rel":"canonical","href":"https://vxhly.github.io/views/web/fullcalendar-api-finishing.html"}]]},"excerpt":"<div class=\\"custom-container tip\\"><p class=\\"custom-container-title\\">\u524D\u8A00</p>\\n<p>\u6700\u8FD1\u5728\u505A\u9879\u76EE\u7684\u65F6\u5019\u53D1\u73B0\u4E86\u4E00\u4E2A\u6BD4\u8F83\u5F3A\u5927\u7684\u65E5\u5386\u63D2\u4EF6 Fullcalendar, \u7531\u4E8E\u5B98\u65B9\u53EA\u63D0\u4F9B\u4E86\u82F1\u6587\u7248\u7684 API \u8BF4\u660E, \u9605\u8BFB\u8D77\u6765\u786E\u5B9E\u6709\u70B9\u4E0D\u65B9\u4FBF, \u5728\u793E\u533A\u627E\u5230\u7684\u4E2D\u6587\u7248 API \u6587\u6863\u662F v4 \u7248\u672C\u7684, \u7136\u9E45\u73B0\u5728 Fullcalendar \u5DF2\u7ECF\u66F4\u65B0\u5230\u4E86 v5 \u7248\u672C\u4E86, \u4E5F\u6709\u5F88\u591A\u7684 API \u5728 v5 \u7248\u672C\u91CC\u9762\u5DF2\u7ECF\u4E0D\u9002\u7528\u4E86, \u6240\u4EE5\u73B0\u5C06\u5E38\u7528\u7684 API \u8FDB\u884C\u6574\u7406\uFF08\u9488\u5BF9 v5 \u7248\u672C\u7684\uFF09\u3002</p>\\n</div>\\n","headers":[{"level":2,"title":"\u5E38\u89C4-\u4E0A\u6587\u6863","slug":"\u5E38\u89C4-\u4E0A\u6587\u6863","children":[]},{"level":2,"title":"\u5148\u9644\u4E0A\u5728 Vue \u4E2D\u4F7F\u7528 Fullcalendar","slug":"\u5148\u9644\u4E0A\u5728-vue-\u4E2D\u4F7F\u7528-fullcalendar","children":[]},{"level":2,"title":"\u666E\u901A\u7684\u663E\u793A\u8BBE\u7F6E","slug":"\u666E\u901A\u7684\u663E\u793A\u8BBE\u7F6E","children":[]},{"level":2,"title":"\u5207\u6362\u8BED\u8A00\u73AF\u5883\u548C\u65F6\u533A","slug":"\u5207\u6362\u8BED\u8A00\u73AF\u5883\u548C\u65F6\u533A","children":[]},{"level":2,"title":"\u64CD\u4F5C\u4E8B\u4EF6","slug":"\u64CD\u4F5C\u4E8B\u4EF6","children":[]},{"level":2,"title":"Render Hooks","slug":"render-hooks","children":[]}],"git":{"createdTime":1654950241000,"updatedTime":1654950241000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":1}]},"readingTime":{"minutes":3.32,"words":995},"copyright":"\u8457\u4F5C\u6743\u5F52\u661F\u706B\u71CE\u539F@vxhly\u6240\u6709\\n\u57FA\u4E8EMIT\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://vxhly.github.io/views/web/fullcalendar-api-finishing.html","filePathRelative":"views/web/fullcalendar-api-finishing.md","localizedDate":"2020\u5E749\u670830\u65E5"}');export{e as data};
