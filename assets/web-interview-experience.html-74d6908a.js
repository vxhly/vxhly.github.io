import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,d as c,a as i,e as o}from"./app-100346d7.js";const p={},a=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"前言"),i("p",null,"收录 WEB 前端常见的面试题以及其答案, 比较偏概念和底层原理（仅供参考, 献给准备换工作的童鞋）。")],-1),l=o(`<h2 id="综合性知识" tabindex="-1"><a class="header-anchor" href="#综合性知识" aria-hidden="true">#</a> 综合性知识</h2><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue/React/Angular 框架的视图更新机制</p></div><p>答:<br> 1、Vue.js：</p><ul><li>Vue.js 使用了基于依赖追踪的响应式系统。当数据发生变化时，Vue 能够追踪到数据的变化，并且自动更新相关的 DOM。</li><li>Vue通过数据劫持和 Observer 模式来实现响应式。当数据发生改变时，Vue 会重新计算相关的虚拟 DOM，并通过 Diff 算法找出变化的部分，最后更新到真实DOM上。</li></ul><p>2、React：</p><ul><li>React 使用了虚拟 DOM 来进行高效的DOM操作。当数据发生变化时，React 首先计算出新的虚拟DOM树，然后与旧的虚拟DOM树进行比较，找出变化的部分（Diff 算法），最后将变化的部分更新到真实DOM上。</li><li>React 的设计理念是“状态驱动”，即当组件的状态（state）发生改变时，触发重新渲染，更新视图。</li></ul><p>3、Angular：</p><ul><li>Angular 使用了 Zone.js 来实现变更检测。当触发了一些异步事件（如 DOM 事件、XHR 请求、定时器等）后，Angular 会进入变更检测阶段。</li><li>Angular 通过脏检查机制来检测变化，它会持续监测所有的数据绑定，检查是否有数据变化，然后更新视图。</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>什么是跨域?解决方式有哪些?</p></div><p>答: 跨域指的是在 web 开发中，当一个网页尝试去请求另一个域名下的资源时，浏览器会因为安全策略的限制而阻止这种行为。域名指的是不同的协议、端口或者子域名。</p><p>解决跨域问题的方式有几种：</p><p>1、CORS（跨域资源共享）: 是最常用的解决方案。通过服务器设置响应头部信息，允许指定来源（域、协议、端口）的请求访问资源。</p><p>2、JSONP（JSON with Padding）: 通过动态创建 <code>&lt;script&gt;</code> 标签，利用 <code>&lt;script&gt;</code> 标签的 src 不受同源策略限制的特性，来进行跨域通信。但是 JSONP 只支持 GET 请求，并且存在安全性和可靠性方面的问题，因为它是通过 script 标签引入外部资源，存在潜在的安全风险。</p><p>3、代理: 在同源服务器上设置一个代理服务器，由代理服务器转发请求到目标服务器，然后再将响应返回给客户端。这种方式需要开发者维护额外的代理服务器。</p><p>4、iframe: 利用 iframe 的跨域特性，将要访问的资源放在一个隐藏的 iframe 中，然后通过 JavaScript 与 iframe 进行通信来达到跨域的目的。不过这种方式也存在一些限制和安全风险。</p><p>5、WebSocket: WebSocket 是 HTML5 新增的协议，能够在浏览器和服务器之间建立持久的连接，支持双向通信，不受同源策略的限制。通过 WebSocket 可以实现跨域通信，但需要服务器端的支持。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>什公是组件化和模供化?</p></div><p>答:<br> 组件化：</p><p>组件化是将软件系统拆分为独立、可复用的部分（组件）。这些组件可以独立开发、测试、维护，并且可以在不同的系统或应用中重复使用。<br> 在前端开发中，组件通常是指可重用的 UI 元素，如按钮、表单、导航栏等。使用组件化开发方法可以提高代码的复用性和可维护性，使开发更高效。</p><p>模块化：</p><p>模块化是将软件系统拆分为相互独立的功能模块或代码块。每个模块有清晰的边界和功能，可以在系统中被独立调用、测试和替换。<br> 在软件开发中，模块化可以指代码的模块化，例如使用模块化的编程语言特性（如 ES6 模块、CommonJS 等）将代码分割为多个模块，便于管理和维护。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>前端性能优化的方法有哪些？</p></div><p>1、文件压缩和合并：</p><ul><li>压缩 JavaScript、CSS 和 HTML 文件，减少文件大小，提高加载速度。</li><li>合并多个小文件为一个大文件，减少 HTTP 请求次数。</li></ul><p>2、图片优化：</p><ul><li>使用适当的图片格式（如 WebP、JPEG、PNG），根据需求选择合适的压缩率和清晰度。</li><li>使用懒加载或者响应式图片，根据视口或设备大小加载适当尺寸的图片。</li></ul><p>3、缓存优化：</p><ul><li>使用浏览器缓存和服务端缓存，减少资源重复加载。</li><li>使用 HTTP 缓存头（如 ETag、Cache-Control、Expires）来控制缓存策略。</li></ul><p>4、异步加载和延迟加载：</p><ul><li>将不影响首屏渲染的资源进行异步加载，如将 JavaScript 放在页面底部或使用 async/defer 属性。</li><li>延迟加载非关键资源，如图片懒加载，只在需要时加载。</li></ul><p>5、减少重绘和重排：</p><ul><li>通过合理使用 CSS、避免频繁的 DOM 操作，减少页面重排和重绘。</li><li>使用 CSS3 动画替代 JavaScript 动画，提高性能。</li></ul><p>6、CDN 加速：</p><ul><li>使用内容分发网络（CDN）来分发静态资源，提高资源加载速度。</li></ul><p>7、代码优化：</p><ul><li>优化 JavaScript 和 CSS 代码，删除无用代码，减少文件大小。</li><li>避免使用过多的第三方库和插件，选择轻量级的替代方案。</li></ul><p>8、响应式设计：</p><ul><li>使用响应式设计和布局，适配不同设备和屏幕大小，减少不必要的资源加载。</li></ul><p>9、使用服务端渲染(SSR)或预渲染：</p><ul><li>对于需要 SEO 和更快的首屏加载的应用，考虑使用服务端渲染或预渲染技术。</li></ul><p>10、监控和性能分析：</p><ul><li>使用工具进行性能监控和分析，如 Chrome DevTools、Lighthouse 等，找出性能瓶颈并进行优化。</li></ul><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><div class="hint-container tip"><p class="hint-container-title">问:</p><p>你是如何理解 HTML 语义化的?</p></div><p>答: 根据内容的结构化（内容语义化）, 选择合适的标签（代码语义化）来编写 HTML 代码, 这样便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。在没有 CSS 的情况下, 页面也能呈现出很好地内容结构和代码结构, 有利于 SEO, 和搜索引擎建立良好沟通, 有助于爬虫抓取更多的有效信息, 爬虫依赖于标签来确定上下文和各个关键字的权重；便于团队开发和维护, 语义化更具可读性, 都遵循 W3C 标准的团队, 可以减少差异化。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>meta viewport 是做什么用的, 怎么写?</p></div><p>答: <code>meta viewport</code> 是专为移动设备下显示所设计的, 只有检测到在移动设备上使用包含 meta 的文档时, meta 标签才会起作用。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">问:</p><p>你用过哪些 HTML 5 标签?</p></div><p>答: <code>&lt;header&gt;</code> 、 <code>&lt;footer&gt;</code> 、 <code>&lt;address&gt;</code> 、 <code>&lt;article&gt;</code> 、 <code>&lt;title&gt;</code> 、 <code>&lt;canvas&gt;</code> 、 <code>&lt;video&gt;</code> 、 <code>&lt;time&gt;</code></p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>DOCTYPE 有什么作用? HTML4 和 HTML5 有什么区别?</p></div><p>答: DOCTYHPE 是 document type 的简写, 是用来告诉浏览器以什么文档规范来解析 HTML, 它不是 HTML 标签, 位于 HTML 文档第一行。H5 更加语义化能够更加明确地将文档结构表示清楚, H4 的 DOCTYPE 声明需要指定 HTML 使用到的版本号, 但是 H5 并不需要。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>HTML 中空（void）元素有哪些?</p></div><p>答: <code>br</code> 、 <code>meta</code> 、 <code>img</code> 、 <code>hr</code> 、 <code>link</code> 、 <code>input</code></p><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><div class="hint-container tip"><p class="hint-container-title">问:</p><p>CSS 中的盒子模型?</p></div><p>答: 盒子模型分为 IE 盒子模型和 W3C 盒子模型。</p><ul><li>ie 的盒子模型包括（margin(外边距), padding(内边距), 边框(border), 内容(content) (ie 的 width=content+padding+border) ;</li><li>w3c 的盒子模型包括（margin(外边距), padding(内边距), 边框(border), 内容(content)（w3c 的 width=content）</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>什么是 BFC?</p></div><p>答: BFC 即 Block Formatting Contexts (块级格式化上下文)。具有 BFC 特性的元素可以看作是隔离了的独立容器, 容器里面的元素不会在布局上影响到外面的元素, 并且 BFC 具有普通容器所没有的一些特性。通俗一点来讲, 可以把 BFC 理解为一个封闭的大箱子, 箱子内部的元素无论如何翻江倒海, 都不会影响到外部。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>如何触发 BFC?</p></div><p>答: 只要元素满足下面任一条件即可触发 BFC 特性:</p><ul><li>body 根元素</li><li>浮动元素: float 除 none 以外的值</li><li>绝对定位元素: position (absolute、fixed)</li><li>display 为 inline-block、table-cells、flex</li><li>overflow 除了 visible 以外的值 (hidden、auto、scroll)</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>什么是弹性布局?</p></div><p>答: Flex 是 Flexible Box 的缩写, 意为&quot;弹性布局&quot;, 用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为 Flex 布局。Flex 布局, 可以简便、完整、响应式地实现各种页面布局.</p><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><div class="hint-container tip"><p class="hint-container-title">问:</p><p>说明一下 this 指向问题?</p></div><p>答: this 是 JavaScript 的一个关键字, 它代表函数运行时, 自动生成的一个内部对象, 只能在函数内部使用。this 的指向, 是在函数运行时, 自动绑定的, 只取决于函数的调用位置。在全局环境下调用函数, this 会指向顶层对象（浏览器中是 window 对象）；在对象的方法中调用函数, this 会指向该对象；在构造函数中调用函数, this 会指向实例对象；使用 apply、call、bind 调用函数, this 会指向指定的对象。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>foo = foo || bar，这行代码是什么意思？为什么要这样写？<br> foo = foo ?? bar，这行代码是什么意思？为什么要这样写？</p></div><p>1、<code>foo = foo || bar</code>: 这行代码意味着如果 foo 变量的值为假值（例如 undefined、null、0、false、&#39;&#39;等），则将 bar 的值赋给 foo。如果 foo 已经有一个真值（非假值），则不执行赋值操作，保持 foo 原有的值。<br> 2、<code>foo = foo ?? bar</code>: 这行代码使用了 ES2020 引入的空值合并运算符（Nullish Coalescing Operator）。这个运算符的作用是，如果 foo 的值是 null 或 undefined，则将 bar 的值赋给 foo；否则，保持 foo 原有的值。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>什么是回调地狱？解决方法有哪些？</p></div><p>回调地狱指的是在异步编程中，多层嵌套的回调函数造成代码难以阅读、理解和维护的情况。当有大量异步操作需要顺序执行或者有依赖关系时，为了处理这些异步操作，开发者会嵌套多个回调函数，导致代码缩进过深，称为回调地狱。</p><p>解决回调地狱的方法包括：</p><ul><li>使用 Promise: 使用 Promise 对象来管理异步操作，它可以更清晰地表达异步操作的状态和结果，并支持链式调用，避免了多层嵌套。</li><li>使用 async/await: async/await 是 ES8 引入的语法糖，可以更优雅地处理异步操作。async 函数返回一个 Promise 对象，await 关键字可以暂停异步函数的执行，等待 Promise 解析或拒绝。</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>请解释什么是 DOM 事件冒泡?</p></div><p>答: DOM（文档对象模型）事件冒泡是指在 HTML 或 XML 文档中，当一个事件被触发时，它会从最内层的元素开始向外逐级传播，直到达到文档根部。这意味着如果你在一个嵌套的元素上触发了某个事件（比如点击事件），这个事件将会在嵌套层级中依次被各个父元素捕获并执行绑定的处理函数。事件冒泡的机制使得可以在更高级别的元素上捕获事件，这意味着你可以在父元素上设置一个事件监听器，来捕获子元素上相同事件的触发，这样可以更方便地管理和处理事件，同时也可以避免在每个子元素上都绑定事件处理函数。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>JavaScript 的数据类型?</p></div><p>答:</p><ul><li>基本数据类型: Number, String, Boolean, Undefined, Null</li><li>复杂数据类型: Object, Array, Function, RegExp, Date, Error</li><li>全局数据类型: Math</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p><code>localStorage</code> 和 <code>sessionStorage</code> 区别?</p></div><p>答: <code>localStorage</code> 是除了主动去清除它, 否则是会永久保留的； <code>sessionStorage</code> 仅在当前会话下有效, 关闭页面或浏览器后被清除, 存放数据大小在 5M 左右。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>JavaScript 中的数组方法有哪些?</p></div><p>答: <code>map()</code> 、 <code>push()</code> 、 <code>unshift()</code> 、 <code>filter()</code> 、 <code>forEach()</code> 、 <code>concat()</code> 、 <code>join()</code> 、 <code>pop()</code> 、 <code>sort()</code> 、 <code>reverse()</code> 、 <code>toString()</code> 、 <code>indexOf()</code> 、 <code>lastIndexOf()</code></p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>JavaScript 的闭包理解?</p></div><p>答: 在 JavaScript 中, 每当函数被创建, 就会在函数生成时生成闭包。在闭包中, 总体上表现为函数嵌套函数, 它允许我们从内部函数中访问外部函数的作用域, 但是外部函数却访问不到内部函数的作用域, 垃圾回收机制上参数和变量不会被垃圾回收机制回收, 因为内部函数还在引用。闭包有几个好处, 变量可以长期驻扎在内存之中, 不容易引起内存泄漏(引起内存泄漏的基本上算是浏览器处理的问题), 避免全局变量的污染, 有私有成员。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>JSONP 和 AJAX 的区别?</p></div><p>答: JSONP 只是支持 GET 请求, 但是不支持其他的请求方式, AJAX 支持所有的请求方式。JSONP 是动态创建一个 script 标签, 利用 script 标签 src 属性访问没有限制来实现跨域, 它允许用户传递一个 callback 参数给服务端, AJAX 的核心是通过 xmlHttpRequest 获取非本页内容。AJAX 禁止跨域, 但通过服务端代理一样跨域；JSONP 是为了解决 AJAX 禁止跨域的问题, 但 JSONP 并不排斥同域的数据的获取。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>什么是 JSONP, 什么是 CORS, 什么是跨域?</p></div><p>答: Jsonp(JSON with Padding) 是 json 的一种&quot;使用模式&quot;, 可以让网页从别的域名（网站）那获取资料, 即跨域读取数据。跨域资源共享(CORS) 是一种机制, 它使用额外的 HTTP 头来告诉浏览器, 让运行在一个 origin (domain) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源。不符合同源策略的皆会引起跨域, 同源（即指在同一个域）就是两个页面具有相同的协议（protocol）, 主机（host）和端口号（port）。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>什么是 Promise?</p></div><p>答: Promise 对象用于表示一个异步操作的最终完成 (成功或失败), 及其结果值。是为了解决异步编程造成的回调陷阱等问题。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Promise 有几种状态, 分别是什么? 有什么方法?</p></div><p>答: 有三种, 分别是等待态、成功态、失败态。 <code>Promise.all()</code> 允许发送多个请求, 多个请求中只要有一个请求失败那么最终返回的既是失败; <code>Promise.race()</code> 允许发送多个请求, 多个请求中只要有一个请求失败那么最终返回的便是成功; <code>Promise.reject()</code> 快速获取一个成功状态的 Promise 对象; <code>Promise.resolve()</code> 快速获取一个拒绝状态的 Promise 对象。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Promise 链式调用中的 then、catch、finally 分别代表什么?</p></div><p>答: then 方法。catch 方法是 then 方法的语法糖, 只接受 rejected 态的数据。finally 方法是无论是成功了失败了都会走这里。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>原型链是什么?</p></div><p>答: 每个对象都会在其内部初始化一个属性, 就是 prototype(原型), 当我们访问一个对象的属性时, 如果这个对象内部不存在这个属性, 那么他就会去 prototype 里找这个属性。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>作用域链是什么?</p></div><p>答: 内部环境可以通过作用域链来访问外部环境的属性和方法, 但是, 外部环境不能访问内部环境的任何属性和方法。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>原生 JavaScript 实现 AJAX?</p></div><p>答: AJAX 的核心是 XMLHttpRequest。一个完整的 AJAX 请求一般包括以下步骤：</p><ul><li>实例化 XMLHttpRequest 对象</li><li>连接服务器</li><li>发送请求</li><li>接收响应数据</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>ES6 的新特性?</p></div><p>答:</p><ul><li>变量声明 const 和 let</li><li>模版字符串</li><li>箭头函数</li><li>函数的参数默认值</li><li>Spread / Rest 操作符（即 <code>...</code> ）</li><li>二进制和八进制字面量</li><li>对象和数组解构</li><li>for...of 和 for...in</li><li>对象超类, ES6 允许在对象中使用 super 方法</li><li>ES6 中支持 class 语法, 不过, ES6 的 class 不是新的对象继承模型, 它只是原型链的语法糖表现形式</li></ul><h2 id="计算机网络知识" tabindex="-1"><a class="header-anchor" href="#计算机网络知识" aria-hidden="true">#</a> 计算机网络知识</h2><div class="hint-container tip"><p class="hint-container-title">问:</p><p>HTTP 的请求动词有哪些?</p></div><p>答: <code>GET</code> 、 <code>POST</code> 、 <code>PUT</code> 、 <code>PATCH</code> 、 <code>DELETE</code> 、 <code>OPTIONS</code> 、 <code>TRACE</code> 、 <code>HEAD</code> 、 <code>CONNECT</code></p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>常见的 HTTP 状态码哪些? 分别代表的是什么?</p></div><p>答:</p><ul><li><code>200</code> (OK): 当您的操作将在响应正文中返回数据时, 出现此结果。</li><li><code>204</code> (No Content): 当您的操作成功, 但不在响应正文中返回数据时, 出现此结果。</li><li><code>304</code> (Not Modified): 当测试实体自上次检索以来是否被修改时, 出现此结果。</li><li><code>400</code> (BadRequest): 当参数无效时, 出现此结果。</li><li><code>401</code> (Unauthorized): 权限验证失败</li><li><code>403</code> (Forbidden): 客户端错误, 表示资源不可用</li><li><code>404</code> (Not Found): 客户端错误, 当资源不存在时, 出现此结果。</li><li><code>413</code> (Payload Too Large): 当请求长度过长时, 出现此结果。</li><li><code>500</code> (Internal Server Error): 服务器遇到了一个未曾预料的状况, 导致了它无法完成对请求的处理。一般来说, 这个问题都会在服务器端的源代码出现错误时出现。</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>GET 和 POST 有什么区别?</p></div><p>答: GET 的传参方式是放在 URL 上面表现为 <code>xx?xx=xx</code> , POST 的传参方式是放在请求包体中, 安全性方面 POST 会比 GET 高。GET 的 URL 的最大长度是 2083 个字节, path 的部分最长是 2048 个字节（每个浏览器支持的长度都不一致, 一般的不超过 IE 支持的在各个浏览器中都能兼容）, POST 不会受到请求长度的限制。GET 若要支持 IE, 则最大长度为 2083byte, 若只支持 Chrome, 则最大长度 8182byte。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>浏览器从输入 url 到看到页面的过程发生了什么?</p></div><p>答: 先是域名解析（DNS）, 把输入的域名解析成其对应的 IP 地址, 然后接着是建立 TCP 三次握手, 三次握手结束之后会发送 HTTP 请求, 服务器处理请求返回 HTTP 报文, 再接着是浏览器下载响应的 HTML 以及相应的资源进行解析渲染工作, 当数据传输结束后需要断开 TCP 连接, 此时会发起 TCP 的四次挥手。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>HTTP 缓存有哪几种?</p></div><p>答: 强制缓存、协商缓存、通过文件内容来缓存</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>前端安全性问题要考虑哪些？</p></div><p>答:</p><ul><li>浏览器安全（浏览器的同源策略, 限制来自不同源的脚本对当前域的调用和访问。）</li><li>跨站脚本攻击（XSS, 分为持久型和非持久性）</li><li>CSRF 攻击（跨站请求伪造, 攻击者构造出一个后端请求地址, 诱导用户点击或者通过某些途径自动发起请求）</li><li>点击劫持（点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中, 并将 iframe 设置为透明, 在页面中透出一个按钮诱导用户点击。）</li></ul><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h2><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue 的生命周期?</p></div><p>答: beforeCreate（创建前）, created（创建后）, beforeMount(载入前), mounted（载入后）, beforeUpdate（更新前）, updated（更新后）, beforeDestroy（销毁前）, destroyed（销毁后）</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>created（创建后）和 mounted（载入后）有什么区别?</p></div><p>答: created: 在模板渲染成 html 前调用, 即通常初始化某些属性值, 然后再渲染成视图。 mounted: 在模板渲染成 html 后调用, 通常是初始化页面完成后, 再对 html 的 dom 节点进行一些需要的操作。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue 是如何实现数据响应?</p></div><p>答: 采用数据劫持结合发布者-订阅者模式的方式, 通过 <code>Object.defineProperty()</code> 来劫持各个属性的 setter, getter, 在数据变动时发布消息给订阅者, 触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时, Vue 将遍历它的属性, 用 <code>Object.defineProperty</code> 将它们转为 getter/setter。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Proxy 与 Object.defineProperty() 对比?</p></div><p>答: Proxy 的优点:</p><ul><li>可以直接监听对象而非属性, 并返回一个新对象；</li><li>可以直接监听数值的变化；</li><li>可以劫持整个对象, 并返回一个新对象；</li></ul><p>Proxy 的缺点:</p><ul><li>Proxy 是 es6 提供的新特性, 兼容性不好, 所以导致 Vue3.0 一直没有正式发布让开发者使用</li></ul><p>Object.defineProperty() 的优点:</p><ul><li>兼容性好, 支持 IE9</li><li>IE9 以下的版本不兼容</li></ul><p>Object.defineProperty() 的缺点:</p><ul><li>无法监控到数组下标的变化, 导致直接通过数组的下标给数组设置值, 不能实时响应；</li><li>只能劫持对象的属性, 我们需要对每个对象的每个属性进行遍历；</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue-router 中有几种模式? 有什么区别?</p></div><p>答: hash 和 history。hash 模式下 <code>#</code> 后面 hash 值的变化, 并不会导致浏览器向服务器发出请求, 浏览器不发出请求, 也就不会刷新页面。history 模式则会将 URL 修改得就和正常请求后端的 URL 一样, 如后端没有配置对应 /user/id 的路由处理, 则会返回 404 错误。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>v-show 与 v-if 区别?</p></div><p>答: v-show 是 css 切换, v-if 是完整的销毁和重新创建。v-if 切换时开销大, 会在切换过程中对条件块的事件监听器和子组件进行销毁和重建, v-show 的初始化渲染开销大, 在需要频繁切换的或者切换部分内部的 DOM 比较复杂的使用 v-show。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>vuex 中的 mutation 和 action 有什么区别?</p></div><p>答: 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。action 类似于 mutation, 不同在于 action 提交的是 mutation, 而不是直接变更状态, action 亦可包含任意的异步操作。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>computed 和 watch 有什么区别?</p></div><p>答: computed 计算属性, 是依赖其他属性的计算值, 并且有缓存, 只有当依赖的值变化时才会更新。 watch 是在监听的属性发生变化时, 在回调中执行一些逻辑。所以, computed 适合在模板渲染中, 某个值是依赖了其他的响应式对象甚至是计算属性计算而来, 而 watch 适合监听某个值的变化去完成一段复杂的业务逻辑。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>为什么 v-for 和 v-if 不建议用在一起?</p></div><p>答: 当 v-for 和 v-if 处于同一个节点时, v-for 的优先级比 v-if 更高, 这意味着 v-if 将分别重复运行于每个 v-for 循环中。如果要遍历的数组很大, 而真正要展示的数据很少时, 这将造成很大的性能浪费。这种场景建议使用 computed, 先对数据进行过滤。</p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue-router 导航守卫有哪些?</p></div><p>答:</p><ul><li>全局前置/钩子: beforeEach、beforeResolve、afterEach</li><li>路由独享的守卫: beforeEnter</li><li>件内的守卫: beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue 之 EventBus 数据传输优点以及弊端?</p></div><p>答:</p><ul><li>优点: 传递数据较为方便, 可以进行兄弟之间, 父子之间的传递</li><li>缺点: 必须先 on 监听才能进行 emit 触发</li></ul><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue 子组件如何调用父组件的方法?</p></div><p>答: <code>$emit</code> 、 <code>$parent</code> 、 <code>props</code> 、 <code>vuex</code></p><div class="hint-container tip"><p class="hint-container-title">问:</p><p>Vue 组件间的通信方式?</p></div><p>答: <code>props</code> 、 <code>$emit</code> 、 <code>EventBus</code> 、 <code>vuex</code> 、 <code>$attrs</code> 、 <code>$listeners</code> 、 <code>provide</code> 、 <code>inject</code> 、 <code>$parent</code> 、 <code>$children</code> 、 <code>$ref</code></p>`,156);function s(d,r){return t(),n("div",null,[a,c(" more "),l])}const v=e(p,[["render",s],["__file","web-interview-experience.html.vue"]]);export{v as default};
