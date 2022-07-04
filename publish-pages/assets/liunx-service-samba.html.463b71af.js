const e=JSON.parse('{"key":"v-b68a9036","path":"/views/liunx/liunx-service-samba.html","title":"Liunx \u670D\u52A1\u914D\u7F6E\u7B14\u8BB0\uFF08\u4E94\uFF09SAMBA \u670D\u52A1\u5B89\u5168\u914D\u7F6E","lang":"zh-CN","frontmatter":{"author":"\u661F\u706B\u71CE\u539F@vxhly","title":"Liunx \u670D\u52A1\u914D\u7F6E\u7B14\u8BB0\uFF08\u4E94\uFF09SAMBA \u670D\u52A1\u5B89\u5168\u914D\u7F6E","category":["liunx"],"tag":["Liunx","Service","Security","Protocol"],"date":"2016-09-19T19:33:21.000Z","summary":"\u524D\u8A00\\n\u672C\u7BC7\u662F Liunx \u7684\u670D\u52A1\u914D\u7F6E\u7B14\u8BB0\u7CFB\u5217\u7B2C\u4E94\u7BC7, \u8FD9\u4E00\u7BC7\u5C06\u5177\u4F53\u4ECB\u7ECD Red Hat Liunx \u4E0B SAMBA \u670D\u52A1\u7684\u5B89\u5168\u914D\u7F6E\u3002\u6240\u8C13 SAMBA \u5C31\u662F\u5EFA\u7ACB Liunx \u548C Windows \u4E4B\u95F4\u7684\u5171\u4EAB, \u4F7F Windows \u80FD\u591F\u8BBF\u95EE Liunx \u4E0B\u5171\u4EAB\u51FA\u6765\u7684\u6587\u4EF6\u3002\\n\\n","head":[["meta",{"property":"og:url","content":"https://vxhly.github.io/views/liunx/liunx-service-samba.html"}],["meta",{"property":"og:site_name","content":"Coding and Fixing"}],["meta",{"property":"og:title","content":"Liunx \u670D\u52A1\u914D\u7F6E\u7B14\u8BB0\uFF08\u4E94\uFF09SAMBA \u670D\u52A1\u5B89\u5168\u914D\u7F6E"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-06-11T12:24:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u661F\u706B\u71CE\u539F@vxhly"}],["meta",{"property":"article:tag","content":"Liunx"}],["meta",{"property":"article:tag","content":"Service"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:tag","content":"Protocol"}],["meta",{"property":"article:published_time","content":"2016-09-19T19:33:21.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-11T12:24:01.000Z"}],["link",{"rel":"canonical","href":"https://vxhly.github.io/views/liunx/liunx-service-samba.html"}]]},"excerpt":"<div class=\\"custom-container tip\\"><p class=\\"custom-container-title\\">\u524D\u8A00</p>\\n<p>\u672C\u7BC7\u662F Liunx \u7684\u670D\u52A1\u914D\u7F6E\u7B14\u8BB0\u7CFB\u5217\u7B2C\u4E94\u7BC7, \u8FD9\u4E00\u7BC7\u5C06\u5177\u4F53\u4ECB\u7ECD Red Hat Liunx \u4E0B SAMBA \u670D\u52A1\u7684\u5B89\u5168\u914D\u7F6E\u3002\u6240\u8C13 SAMBA \u5C31\u662F\u5EFA\u7ACB Liunx \u548C Windows \u4E4B\u95F4\u7684\u5171\u4EAB, \u4F7F Windows \u80FD\u591F\u8BBF\u95EE Liunx \u4E0B\u5171\u4EAB\u51FA\u6765\u7684\u6587\u4EF6\u3002</p>\\n</div>\\n","headers":[{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E","slug":"\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E","children":[]},{"level":2,"title":"\u670D\u52A1\u7684\u542F\u52A8\u4E0E\u505C\u6B62","slug":"\u670D\u52A1\u7684\u542F\u52A8\u4E0E\u505C\u6B62","children":[]},{"level":2,"title":"\u670D\u52A1\u7684\u5B89\u88C5","slug":"\u670D\u52A1\u7684\u5B89\u88C5","children":[{"level":3,"title":"\u521B\u5EFA\u6302\u8F7D\u76EE\u5F55","slug":"\u521B\u5EFA\u6302\u8F7D\u76EE\u5F55","children":[]},{"level":3,"title":"\u6302\u5728\u5149\u76D8","slug":"\u6302\u5728\u5149\u76D8","children":[]},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","children":[]}]},{"level":2,"title":"\u5B89\u5168\u914D\u7F6E","slug":"\u5B89\u5168\u914D\u7F6E","children":[{"level":3,"title":"\u914D\u7F6E\u5DE5\u4F5C\u7EC4\u548C NetBIOS \u540D\u5B57","slug":"\u914D\u7F6E\u5DE5\u4F5C\u7EC4\u548C-netbios-\u540D\u5B57","children":[]},{"level":3,"title":"\u914D\u7F6E\u5B89\u5168\u7EA7\u522B","slug":"\u914D\u7F6E\u5B89\u5168\u7EA7\u522B","children":[]},{"level":3,"title":"\u914D\u7F6E\u8BA4\u8BC1\u5BC6\u7801\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u52A0\u5BC6","slug":"\u914D\u7F6E\u8BA4\u8BC1\u5BC6\u7801\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u52A0\u5BC6","children":[]},{"level":3,"title":"\u914D\u7F6E\u7528\u6237\u5BC6\u7801\u7684\u5B58\u50A8\u65B9\u5F0F","slug":"\u914D\u7F6E\u7528\u6237\u5BC6\u7801\u7684\u5B58\u50A8\u65B9\u5F0F","children":[]},{"level":3,"title":"\u8BBE\u7F6E\u767D\u540D\u5355","slug":"\u8BBE\u7F6E\u767D\u540D\u5355","children":[]},{"level":3,"title":"\u5355\u76EE\u5F55\u9650\u5B9A\u7528\u6237\u8BBF\u95EE, \u7981\u6B62\u5199\u5165\u6587\u4EF6","slug":"\u5355\u76EE\u5F55\u9650\u5B9A\u7528\u6237\u8BBF\u95EE-\u7981\u6B62\u5199\u5165\u6587\u4EF6","children":[]},{"level":3,"title":"\u521B\u5EFA\u5171\u4EAB\u76EE\u5F55, \u8BBE\u7F6E\u6743\u9650","slug":"\u521B\u5EFA\u5171\u4EAB\u76EE\u5F55-\u8BBE\u7F6E\u6743\u9650","children":[]},{"level":3,"title":"\u6DFB\u52A0 SAMBA \u7528\u6237","slug":"\u6DFB\u52A0-samba-\u7528\u6237","children":[]},{"level":3,"title":"\u4F7F\u7528 windows \u8BBF\u95EE","slug":"\u4F7F\u7528-windows-\u8BBF\u95EE","children":[]},{"level":3,"title":"\u4F7F\u7528 smbclient \u8BBF\u95EE","slug":"\u4F7F\u7528-smbclient-\u8BBF\u95EE","children":[]}]}],"git":{"createdTime":1654950241000,"updatedTime":1654950241000,"contributors":[{"name":"vxhly","email":"pengchengou@gmail.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1644},"copyright":"\u8457\u4F5C\u6743\u5F52\u661F\u706B\u71CE\u539F@vxhly\u6240\u6709\\n\u57FA\u4E8EMIT\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://vxhly.github.io/views/liunx/liunx-service-samba.html","filePathRelative":"views/liunx/liunx-service-samba.md","localizedDate":"2016\u5E749\u670820\u65E5"}');export{e as data};
