---
author: 星火燎原@vxhly
title: 前端面经
category: [web]
tag: [HTML, JavaScript, CSS, Vue.js, Node.js]
date: 2023-01-01 20:35:17
---

::: tip 前言

收录 WEB 前端常见的面试题以及其答案, 比较偏概念和底层原理（仅供参考, 献给准备换工作的童鞋）。

:::

<!-- more -->

## 综合性知识

::: tip 问:

Vue 和 React 对比?

:::

- 相同点

都有组件化思想
都支持服务器端渲染
都有 Virtual DOM（虚拟 dom）
数据驱动视图
都有支持 native 的方案: Vue 的 weex、React 的 React native
都有自己的构建工具: Vue 的 vue-cli、React 的 Create React App

- 区别

数据流向的不同。react 从诞生开始就推崇单向数据流, 而 Vue 是双向数据流
数据变化的实现原理不同。react 使用的是不可变数据, 而 Vue 使用的是可变的数据
组件化通信的不同。react 中我们通过使用回调函数来进行通信的, 而 Vue 中子组件向父组件传递消息有两种方式: 事件和回调函数
diff 算法不同。react 主要使用 diff 队列保存需要更新哪些 DOM, 得到 patch 树, 再统一操作批量更新 DOM。Vue 使用双向指针, 边对比, 边更新 DOM

::: tip 问:

Vue/React/Angular 框架的视图更新机制

:::

答:
1、Vue.js:

- Vue.js 使用了基于依赖追踪的响应式系统。当数据发生变化时, Vue 能够追踪到数据的变化, 并且自动更新相关的 DOM。
- Vue 通过数据劫持和 Observer 模式来实现响应式。当数据发生改变时, Vue 会重新计算相关的虚拟 DOM, 并通过 Diff 算法找出变化的部分, 最后更新到真实 DOM 上。

2、React:

- React 使用了虚拟 DOM 来进行高效的 DOM 操作。当数据发生变化时, React 首先计算出新的虚拟 DOM 树, 然后与旧的虚拟 DOM 树进行比较, 找出变化的部分（Diff 算法）, 最后将变化的部分更新到真实 DOM 上。
- React 的设计理念是“状态驱动”, 即当组件的状态（state）发生改变时, 触发重新渲染, 更新视图。

3、Angular:

- Angular 使用了 Zone.js 来实现变更检测。当触发了一些异步事件（如 DOM 事件、XHR 请求、定时器等）后, Angular 会进入变更检测阶段。
- Angular 通过脏检查机制来检测变化, 它会持续监测所有的数据绑定, 检查是否有数据变化, 然后更新视图。

::: tip 问:

什么是跨域?解决方式有哪些?

:::

答: 跨域指的是在 web 开发中, 当一个网页尝试去请求另一个域名下的资源时, 浏览器会因为安全策略的限制而阻止这种行为。域名指的是不同的协议、端口或者子域名。

解决跨域问题的方式有几种:

1、CORS（跨域资源共享）: 是最常用的解决方案。通过服务器设置响应头部信息, 允许指定来源（域、协议、端口）的请求访问资源。

2、JSONP（JSON with Padding）: 通过动态创建 `<script>` 标签, 利用 `<script>` 标签的 src 不受同源策略限制的特性, 来进行跨域通信。但是 JSONP 只支持 GET 请求, 并且存在安全性和可靠性方面的问题, 因为它是通过 script 标签引入外部资源, 存在潜在的安全风险。

3、代理: 在同源服务器上设置一个代理服务器, 由代理服务器转发请求到目标服务器, 然后再将响应返回给客户端。这种方式需要开发者维护额外的代理服务器。

4、iframe: 利用 iframe 的跨域特性, 将要访问的资源放在一个隐藏的 iframe 中, 然后通过 JavaScript 与 iframe 进行通信来达到跨域的目的。不过这种方式也存在一些限制和安全风险。

5、WebSocket: WebSocket 是 HTML5 新增的协议, 能够在浏览器和服务器之间建立持久的连接, 支持双向通信, 不受同源策略的限制。通过 WebSocket 可以实现跨域通信, 但需要服务器端的支持。

::: tip 问:

什公是组件化和模供化?

:::

答:
组件化:

组件化是将软件系统拆分为独立、可复用的部分（组件）。这些组件可以独立开发、测试、维护, 并且可以在不同的系统或应用中重复使用。
在前端开发中, 组件通常是指可重用的 UI 元素, 如按钮、表单、导航栏等。使用组件化开发方法可以提高代码的复用性和可维护性, 使开发更高效。

模块化:

模块化是将软件系统拆分为相互独立的功能模块或代码块。每个模块有清晰的边界和功能, 可以在系统中被独立调用、测试和替换。
在软件开发中, 模块化可以指代码的模块化, 例如使用模块化的编程语言特性（如 ES6 模块、CommonJS 等）将代码分割为多个模块, 便于管理和维护。

::: tip 问:

前端性能优化的方法有哪些？

:::

1、文件压缩和合并:

- 压缩 JavaScript、CSS 和 HTML 文件, 减少文件大小, 提高加载速度。
- 合并多个小文件为一个大文件, 减少 HTTP 请求次数。

2、图片优化:

- 使用适当的图片格式（如 WebP、JPEG、PNG）, 根据需求选择合适的压缩率和清晰度。
- 使用懒加载或者响应式图片, 根据视口或设备大小加载适当尺寸的图片。

3、缓存优化:

- 使用浏览器缓存和服务端缓存, 减少资源重复加载。
- 使用 HTTP 缓存头（如 ETag、Cache-Control、Expires）来控制缓存策略。

4、异步加载和延迟加载:

- 将不影响首屏渲染的资源进行异步加载, 如将 JavaScript 放在页面底部或使用 async/defer 属性。
- 延迟加载非关键资源, 如图片懒加载, 只在需要时加载。

5、减少重绘和重排:

- 通过合理使用 CSS、避免频繁的 DOM 操作, 减少页面重排和重绘。
- 使用 CSS3 动画替代 JavaScript 动画, 提高性能。

6、CDN 加速:

- 使用内容分发网络（CDN）来分发静态资源, 提高资源加载速度。

7、代码优化:

- 优化 JavaScript 和 CSS 代码, 删除无用代码, 减少文件大小。
- 避免使用过多的第三方库和插件, 选择轻量级的替代方案。

8、响应式设计:

- 使用响应式设计和布局, 适配不同设备和屏幕大小, 减少不必要的资源加载。

9、使用服务端渲染(SSR)或预渲染:

- 对于需要 SEO 和更快的首屏加载的应用, 考虑使用服务端渲染或预渲染技术。

10、监控和性能分析:

- 使用工具进行性能监控和分析, 如 Chrome DevTools、Lighthouse 等, 找出性能瓶颈并进行优化。

::: tip 问:

webpack 打包速度优化手段?

:::

- exclude、include 配置来转译更少的文件
- cache-loader 缓存编译结果
- happypack 多核构建, 把任务分给多个子进程并发执行
- thread-loader 把 loader 放置在单独的 worker 池中进行
- HardSourceWebpackPlugin 提供中间缓存, 节省二次编译构建时间
- DllPlugin 和 DLLReferencePlugin 实现拆分 bundles, 将不会频繁更新的第三方库（如: react、react-dom 等）单独打包
- optimization.splitChunks 抽离公共代码
- webpack-bundle-analyzer 分析包体积

## 前端安全

::: tip 问:

XSS 攻击和 CSRF 攻击的区别？

:::

- XSS 攻击指的是攻击者在网站上注入恶意的客户端代码, 当用户浏览网页时, 恶意代码会自动执行, 从而达到攻击的目的。XSS 攻击通常可以分为存储型 XSS 攻击和反射型 XSS 攻击。
- CSRF 攻击指的是攻击者诱导用户点击链接或打开网站时, 利用用户的登录状态发起恶意请求。CSRF 攻击通常可以分为基于表单的 CSRF 攻击和基于 URL 的 CSRF 攻击。

::: tip 问:

预防 XSS 攻击和 CSRF 攻击？

:::

- 预防 XSS 攻击: 对用户输入的数据进行过滤和转义, 避免用户输入的数据作为代码被执行。
- 预防 CSRF 攻击: 使用验证码、Referer Check、CSRF Token 等方式来防御 CSRF 攻击。

## HTML

::: tip 问:

你是如何理解 HTML 语义化的?

:::

答: 根据内容的结构化（内容语义化）, 选择合适的标签（代码语义化）来编写 HTML 代码, 这样便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。在没有 CSS 的情况下, 页面也能呈现出很好地内容结构和代码结构, 有利于 SEO, 和搜索引擎建立良好沟通, 有助于爬虫抓取更多的有效信息, 爬虫依赖于标签来确定上下文和各个关键字的权重；便于团队开发和维护, 语义化更具可读性, 都遵循 W3C 标准的团队, 可以减少差异化。

::: tip 问:

meta viewport 是做什么用的, 怎么写?

:::

答: `meta viewport` 是专为移动设备下显示所设计的, 只有检测到在移动设备上使用包含 meta 的文档时, meta 标签才会起作用。

```html
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
/>
```

::: tip 问:

你用过哪些 HTML 5 标签?

:::

答: `<header>` 、 `<footer>` 、 `<address>` 、 `<article>` 、 `<title>` 、 `<canvas>` 、 `<video>` 、 `<time>`

::: tip 问:

DOCTYPE 有什么作用? HTML4 和 HTML5 有什么区别?

:::

答: DOCTYHPE 是 document type 的简写, 是用来告诉浏览器以什么文档规范来解析 HTML, 它不是 HTML 标签, 位于 HTML 文档第一行。H5 更加语义化能够更加明确地将文档结构表示清楚, H4 的 DOCTYPE 声明需要指定 HTML 使用到的版本号, 但是 H5 并不需要。

::: tip 问:

HTML 中空（void）元素有哪些?

:::

答: `br` 、 `meta` 、 `img` 、 `hr` 、 `link` 、 `input`

## CSS

::: tip 问:

CSS 中的盒子模型?

:::

答: 盒子模型分为 IE 盒子模型和 W3C 盒子模型。

- ie 的盒子模型包括（margin(外边距), padding(内边距), 边框(border), 内容(content) (ie 的 width=content+padding+border) ;
- w3c 的盒子模型包括（margin(外边距), padding(内边距), 边框(border), 内容(content)（w3c 的 width=content）

::: tip 问:

什么是 BFC?

:::

答: BFC 即 Block Formatting Contexts (块级格式化上下文)。具有 BFC 特性的元素可以看作是隔离了的独立容器, 容器里面的元素不会在布局上影响到外面的元素, 并且 BFC 具有普通容器所没有的一些特性。通俗一点来讲, 可以把 BFC 理解为一个封闭的大箱子, 箱子内部的元素无论如何翻江倒海, 都不会影响到外部。

::: tip 问:

如何触发 BFC?

:::

答: 只要元素满足下面任一条件即可触发 BFC 特性:

- body 根元素
- 浮动元素: float 除 none 以外的值
- 绝对定位元素: position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

::: tip 问:

什么是弹性布局?

:::

答: Flex 是 Flexible Box 的缩写, 意为"弹性布局", 用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为 Flex 布局。Flex 布局, 可以简便、完整、响应式地实现各种页面布局.

## JavaScript

::: tip 问:

js 加载执行: async, defer, preload, prefetch 的区别？

:::

- `async`: 立即下载（异步, 不会阻碍文档解析）, 异步执行（执行的时候会阻碍文档解析）
- `defer`: 立即下载（异步, 不会阻碍文档解析）, 延迟执行, 在整个页面都解析完毕后执行
- `preload`: 提前下载, 需要的时候立即执行, 无需再下载
- `prefetch`: 提前下载, 在未来的某个页面可能会执行, 节省下载时间

::: tip 问:

说明一下 this 指向问题?

:::

答: this 是 JavaScript 的一个关键字, 它代表函数运行时, 自动生成的一个内部对象, 只能在函数内部使用。this 的指向, 是在函数运行时, 自动绑定的, 只取决于函数的调用位置。在全局环境下调用函数, this 会指向顶层对象（浏览器中是 window 对象）；在对象的方法中调用函数, this 会指向该对象；在构造函数中调用函数, this 会指向实例对象；使用 apply、call、bind 调用函数, this 会指向指定的对象。

::: tip 问:

foo = foo || bar, 这行代码是什么意思？为什么要这样写？
foo = foo ?? bar, 这行代码是什么意思？为什么要这样写？

:::

1、`foo = foo || bar`: 这行代码意味着如果 foo 变量的值为假值（例如 undefined、null、0、false、''等）, 则将 bar 的值赋给 foo。如果 foo 已经有一个真值（非假值）, 则不执行赋值操作, 保持 foo 原有的值。
2、`foo = foo ?? bar`: 这行代码使用了 ES2020 引入的空值合并运算符（Nullish Coalescing Operator）。这个运算符的作用是, 如果 foo 的值是 null 或 undefined, 则将 bar 的值赋给 foo；否则, 保持 foo 原有的值。

::: tip 问:

什么是回调地狱？解决方法有哪些？

:::

回调地狱指的是在异步编程中, 多层嵌套的回调函数造成代码难以阅读、理解和维护的情况。当有大量异步操作需要顺序执行或者有依赖关系时, 为了处理这些异步操作, 开发者会嵌套多个回调函数, 导致代码缩进过深, 称为回调地狱。

解决回调地狱的方法包括:

- 使用 Promise: 使用 Promise 对象来管理异步操作, 它可以更清晰地表达异步操作的状态和结果, 并支持链式调用, 避免了多层嵌套。
- 使用 async/await: async/await 是 ES8 引入的语法糖, 可以更优雅地处理异步操作。async 函数返回一个 Promise 对象, await 关键字可以暂停异步函数的执行, 等待 Promise 解析或拒绝。

::: tip 问:

请解释什么是 DOM 事件冒泡?

:::

答: DOM（文档对象模型）事件冒泡是指在 HTML 或 XML 文档中, 当一个事件被触发时, 它会从最内层的元素开始向外逐级传播, 直到达到文档根部。这意味着如果你在一个嵌套的元素上触发了某个事件（比如点击事件）, 这个事件将会在嵌套层级中依次被各个父元素捕获并执行绑定的处理函数。事件冒泡的机制使得可以在更高级别的元素上捕获事件, 这意味着你可以在父元素上设置一个事件监听器, 来捕获子元素上相同事件的触发, 这样可以更方便地管理和处理事件, 同时也可以避免在每个子元素上都绑定事件处理函数。

::: tip 问:

JavaScript 的数据类型?

:::

答:

- 基本数据类型: Number, String, Boolean, Undefined, Null
- 复杂数据类型: Object, Array, Function, RegExp, Date, Error
- 全局数据类型: Math

::: tip 问:

`localStorage` 和 `sessionStorage` 区别?

:::

答: `localStorage` 是除了主动去清除它, 否则是会永久保留的； `sessionStorage` 仅在当前会话下有效, 关闭页面或浏览器后被清除, 存放数据大小在 5M 左右。

::: tip 问:

JavaScript 中的数组方法有哪些?

:::

答: `map()` 、 `push()` 、 `unshift()` 、 `filter()` 、 `forEach()` 、 `concat()` 、 `join()` 、 `pop()` 、 `sort()` 、 `reverse()` 、 `toString()` 、 `indexOf()` 、 `lastIndexOf()`

::: tip 问:

JavaScript 的闭包理解?

:::

答: 在 JavaScript 中, 每当函数被创建, 就会在函数生成时生成闭包。在闭包中, 总体上表现为函数嵌套函数, 它允许我们从内部函数中访问外部函数的作用域, 但是外部函数却访问不到内部函数的作用域, 垃圾回收机制上参数和变量不会被垃圾回收机制回收, 因为内部函数还在引用。闭包有几个好处, 变量可以长期驻扎在内存之中, 不容易引起内存泄漏(引起内存泄漏的基本上算是浏览器处理的问题), 避免全局变量的污染, 有私有成员。

::: tip 问:

JSONP 和 AJAX 的区别?

:::

答: JSONP 只是支持 GET 请求, 但是不支持其他的请求方式, AJAX 支持所有的请求方式。JSONP 是动态创建一个 script 标签, 利用 script 标签 src 属性访问没有限制来实现跨域, 它允许用户传递一个 callback 参数给服务端, AJAX 的核心是通过 xmlHttpRequest 获取非本页内容。AJAX 禁止跨域, 但通过服务端代理一样跨域；JSONP 是为了解决 AJAX 禁止跨域的问题, 但 JSONP 并不排斥同域的数据的获取。

::: tip 问:

什么是 JSONP, 什么是 CORS, 什么是跨域?

:::

答: Jsonp(JSON with Padding) 是 json 的一种"使用模式", 可以让网页从别的域名（网站）那获取资料, 即跨域读取数据。跨域资源共享(CORS) 是一种机制, 它使用额外的 HTTP 头来告诉浏览器, 让运行在一个 origin (domain) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源。不符合同源策略的皆会引起跨域, 同源（即指在同一个域）就是两个页面具有相同的协议（protocol）, 主机（host）和端口号（port）。

::: tip 问:

什么是 Promise?

:::

答: Promise 对象用于表示一个异步操作的最终完成 (成功或失败), 及其结果值。是为了解决异步编程造成的回调陷阱等问题。

::: tip 问:

Promise 有几种状态, 分别是什么? 有什么方法?

:::

答: 有三种, 分别是等待态、成功态、失败态。 `Promise.all()` 允许发送多个请求, 多个请求中只要有一个请求失败那么最终返回的既是失败; `Promise.race()` 允许发送多个请求, 多个请求中只要有一个请求失败那么最终返回的便是成功; `Promise.reject()` 快速获取一个成功状态的 Promise 对象; `Promise.resolve()` 快速获取一个拒绝状态的 Promise 对象。

::: tip 问:

Promise 链式调用中的 then、catch、finally 分别代表什么?

:::

答: then 方法。catch 方法是 then 方法的语法糖, 只接受 rejected 态的数据。finally 方法是无论是成功了失败了都会走这里。

::: tip 问:

原型链是什么?

:::

答: 每个对象都会在其内部初始化一个属性, 就是 prototype(原型), 当我们访问一个对象的属性时, 如果这个对象内部不存在这个属性, 那么他就会去 prototype 里找这个属性。

::: tip 问:

作用域链是什么?

:::

答: 内部环境可以通过作用域链来访问外部环境的属性和方法, 但是, 外部环境不能访问内部环境的任何属性和方法。

::: tip 问:

原生 JavaScript 实现 AJAX?

:::

答: AJAX 的核心是 XMLHttpRequest。一个完整的 AJAX 请求一般包括以下步骤:

- 实例化 XMLHttpRequest 对象
- 连接服务器
- 发送请求
- 接收响应数据

::: tip 问:

ES6 的新特性?

:::

答:

- 变量声明 const 和 let
- 模版字符串
- 箭头函数
- 函数的参数默认值
- Spread / Rest 操作符（即 `...` ）
- 二进制和八进制字面量
- 对象和数组解构
- for...of 和 for...in
- 对象超类, ES6 允许在对象中使用 super 方法
- ES6 中支持 class 语法, 不过, ES6 的 class 不是新的对象继承模型, 它只是原型链的语法糖表现形式

::: tip 问:

深拷贝和浅拷贝的区别?

:::

答: 浅拷贝创建一个新对象, 并将原始对象中的所有属性复制到新对象中。但对于原始对象中的引用类型（例如数组、对象）, 浅拷贝只复制了引用, 而不是引用指向的实际对象。深拷贝创建一个新对象, 并递归地复制原始对象中的所有属性及其值。这包括了引用类型的内容, 确保原始对象和深拷贝对象之间的完全独立性。

## Typescript

::: tip 问:

Typescript 中的 interface 和 type 有什么区别？

:::

答:

- interface 定义数据的形状, 具体这个数据的结构如何、有什么属性
- type 定义数据的类型, 指一个数据具体是什么类型
- interface 可以被 class 继承和实现, 也可以继承 class, 但是 type 不行
- interface 不能作为交叉、联合类型的产物, 但是可以作为其组成的元素

::: tip 问:

TypeScript（TS）的内置数据类型

:::

答:

1. 基本数据类型:

- `number`: 用于表示数值, 可以是整数或浮点数。
- `string`: 用于表示文本字符串。
- `boolean`: 用于表示布尔值, 即 true 或 false。

```ts
let num: number = 42;
let str: string = "Hello, TypeScript";
let isTrue: boolean = true;
```

2. 数组类型:

TypeScript 支持数组, 可以通过指定元素类型来定义数组。

```ts
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["apple", "banana", "orange"];
```

3. 元组（Tuple）类型:

元组是一个固定长度的数组, 每个元素可以是不同的类型。

```ts
let tuple: [string, number] = ["John", 25];
```

4. 枚举（Enum）类型:

枚举类型用于定义一组命名的常量值, 默认情况下, 枚举成员从 0 开始。

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;
```

5. 任意（Any）类型:

`any` 类型可以用来表示任意类型, 它不会进行类型检查。

```ts
let variable: any = 42;
variable = "Hello, TypeScript";
```

6. Void 类型:

`void` 类型表示没有任何返回值的函数。

```ts
function sayHello(): void {
  console.log("Hello, TypeScript");
}
```

7. Null 和 Undefined 类型:

`null` 和 `undefined` 分别表示空值和未定义的值。

```ts
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

## 计算机网络知识

::: tip 问:

HTTP 的请求动词有哪些?

:::

答: `GET` 、 `POST` 、 `PUT` 、 `PATCH` 、 `DELETE` 、 `OPTIONS` 、 `TRACE` 、 `HEAD` 、 `CONNECT`

::: tip 问:

常见的 HTTP 状态码哪些? 分别代表的是什么?

:::

答:

- `200` (OK): 当您的操作将在响应正文中返回数据时, 出现此结果。
- `204` (No Content): 当您的操作成功, 但不在响应正文中返回数据时, 出现此结果。
- `304` (Not Modified): 当测试实体自上次检索以来是否被修改时, 出现此结果。
- `400` (BadRequest): 当参数无效时, 出现此结果。
- `401` (Unauthorized): 权限验证失败
- `403` (Forbidden): 客户端错误, 表示资源不可用
- `404` (Not Found): 客户端错误, 当资源不存在时, 出现此结果。
- `413` (Payload Too Large): 当请求长度过长时, 出现此结果。
- `500` (Internal Server Error): 服务器遇到了一个未曾预料的状况, 导致了它无法完成对请求的处理。一般来说, 这个问题都会在服务器端的源代码出现错误时出现。

::: tip 问:

GET 和 POST 有什么区别?

:::

答: GET 的传参方式是放在 URL 上面表现为 `xx?xx=xx` , POST 的传参方式是放在请求包体中, 安全性方面 POST 会比 GET 高。GET 的 URL 的最大长度是 2083 个字节, path 的部分最长是 2048 个字节（每个浏览器支持的长度都不一致, 一般的不超过 IE 支持的在各个浏览器中都能兼容）, POST 不会受到请求长度的限制。GET 若要支持 IE, 则最大长度为 2083byte, 若只支持 Chrome, 则最大长度 8182byte。

::: tip 问:

浏览器从输入 url 到看到页面的过程发生了什么?

:::

答: 先是域名解析（DNS）, 把输入的域名解析成其对应的 IP 地址, 然后接着是建立 TCP 三次握手, 三次握手结束之后会发送 HTTP 请求, 服务器处理请求返回 HTTP 报文, 再接着是浏览器下载响应的 HTML 以及相应的资源进行解析渲染工作, 当数据传输结束后需要断开 TCP 连接, 此时会发起 TCP 的四次挥手。

::: tip 问:

HTTP 缓存有哪几种?

:::

答: 强制缓存、协商缓存、通过文件内容来缓存

::: tip 问:

前端安全性问题要考虑哪些？

:::

答:

- 浏览器安全（浏览器的同源策略, 限制来自不同源的脚本对当前域的调用和访问。）
- 跨站脚本攻击（XSS, 分为持久型和非持久性）
- CSRF 攻击（跨站请求伪造, 攻击者构造出一个后端请求地址, 诱导用户点击或者通过某些途径自动发起请求）
- 点击劫持（点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中, 并将 iframe 设置为透明, 在页面中透出一个按钮诱导用户点击。）

::: tip 问:

HTTP、HTTPS 和 WebSocket 有什么优缺点？

:::

1、HTTP（HyperText Transfer Protocol）:

优点:

- 简单易用: HTTP 是一种无状态协议, 请求-响应模型简单, 易于理解和实现。
- 兼容性好: 由于广泛使用, 几乎所有的网络设备和服务器都支持 HTTP。

缺点:

- 长连接效率低: 每个请求都需要建立一个新的连接, 这会导致较高的延迟。
- 明文传输: HTTP 传输的数据是明文的, 可能存在安全隐患, 尤其是在处理敏感信息时。

2、HTTPS（HTTP Secure）:

优点

- 安全性: 通过使用 SSL/TLS 协议, HTTPS 提供了数据加密和身份验证, 增强了通信安全性。
- 信任度高: 用户更容易信任通过 HTTPS 连接的网站, 因为它表明网站采取了额外的安全措施。

缺点:

- 加解密开销: 由于加密解密的操作, HTTPS 的通信开销比 HTTP 更高, 可能导致一些性能损失。
- 部署成本高: 配置和维护 SSL 证书需要一些额外的工作, 而且有一些费用与之相关。

3、 WebSocket:

优点:

- 实时性: WebSocket 支持全双工通信, 可以在客户端和服务器之间建立持久连接, 实现实时通信。
- 较低的开销: 相对于 HTTP, WebSocket 在维持连接方面的开销较低。

缺点:

- 不适合所有场景: WebSocket 更适用于实时通信的场景, 对于传统的请求-响应模型可能不是最佳选择。
- 部署复杂性: 与 HTTP 相比, WebSocket 的部署可能较为复杂, 需要服务器端和客户端都支持 WebSocket 协议。

## Vue

::: tip 问:

Vue 2.x 数据双向绑定原理

:::

实现 mvvm 的数据双向绑定, 是采用数据劫持结合发布者-订阅者模式的方式, 通过 `Object.defineProperty()` 来给各个属性添加 setter, getter 并劫持监听, 在数据变动时发布消息给订阅者, 触发相应的监听回调。

::: tip 问:

Vue3.x 响应式数据原理

:::

Vue3.x 改用 Proxy 替代 `Object.defineProperty()`。判断当前 Reflect.get 的返回值是否为 Object, 如果是则再通过 reactive 方法做代理, 这样就实现了深度观测。

::: tip 问:

SPA 首屏加载速度慢的怎么解决？

:::

首屏时间（First Contentful Paint）, 指的是浏览器从响应用户输入网址地址, 到首屏内容渲染完成的时间, 此时整个网页不一定要全部渲染完成, 但需要展示当前视窗需要的内容；

加载慢的原因

- 网络延时问题
- 资源文件体积是否过大 s
- 资源是否重复发送请求去加载了
- 加载脚本的时候, 渲染内容堵塞了

常见的几种 SPA 首屏优化方式

- 减小入口文件积
- 静态资源本地缓存
- UI 框架按需加载
- 图片资源的压缩
- 组件重复打包
- 开启 GZip 压缩
- 使用 SSR

::: tip 问:

vue2 和 vue3 核心 diff 算法区别？

:::

答:

- Vue 2.x 使用的是双向指针遍历的算法, 也就是通过逐层比对新旧虚拟 DOM 树节点的方式来计算出更新需要做的最小操作集合。但这种算法的缺点是, 由于遍历是从左到右、从上到下进行的, 当发生节点删除或移动时, 会导致其它节点位置的计算出现错误, 因此会造成大量无效的重新渲染。
- Vue 3.x 使用了经过优化的单向遍历算法, 也就是只扫描新虚拟 DOM 树上的节点, 判断是否需要更新, 跳过不需要更新的节点, 进一步减少了不必要的操作。此外, 在虚拟 DOM 创建后, Vue 3 会缓存虚拟 DOM 节点的描述信息, 以便于复用, 这也会带来性能。

::: tip 问:

Vue 的生命周期?

:::

答: beforeCreate（创建前）, created（创建后）, beforeMount(载入前), mounted（载入后）, beforeUpdate（更新前）, updated（更新后）, beforeDestroy（销毁前）, destroyed（销毁后）

::: tip 问:

created（创建后）和 mounted（载入后）有什么区别?

:::

答: created: 在模板渲染成 html 前调用, 即通常初始化某些属性值, 然后再渲染成视图。 mounted: 在模板渲染成 html 后调用, 通常是初始化页面完成后, 再对 html 的 dom 节点进行一些需要的操作。

::: tip 问:

Vue 是如何实现数据响应?

:::

答: 采用数据劫持结合发布者-订阅者模式的方式, 通过 `Object.defineProperty()` 来劫持各个属性的 setter, getter, 在数据变动时发布消息给订阅者, 触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时, Vue 将遍历它的属性, 用 `Object.defineProperty` 将它们转为 getter/setter。

::: tip 问:

Proxy 与 Object.defineProperty() 对比?

:::

答: Proxy 的优点:

- 可以直接监听对象而非属性, 并返回一个新对象；
- 可以直接监听数值的变化；
- 可以劫持整个对象, 并返回一个新对象；

Proxy 的缺点:

- Proxy 是 es6 提供的新特性, 兼容性不好, 所以导致 Vue3.0 一直没有正式发布让开发者使用

Object.defineProperty() 的优点:

- 兼容性好, 支持 IE9
- IE9 以下的版本不兼容

Object.defineProperty() 的缺点:

- 无法监控到数组下标的变化, 导致直接通过数组的下标给数组设置值, 不能实时响应；
- 只能劫持对象的属性, 我们需要对每个对象的每个属性进行遍历；

::: tip 问:

Vue-router 中有几种模式? 有什么区别?

:::

答: hash 和 history。hash 模式下 `#` 后面 hash 值的变化, 并不会导致浏览器向服务器发出请求, 浏览器不发出请求, 也就不会刷新页面。history 模式则会将 URL 修改得就和正常请求后端的 URL 一样, 如后端没有配置对应 /user/id 的路由处理, 则会返回 404 错误。

::: tip 问:

为什么避免 v-if 和 v-for 一起使用

:::

vue2.x 版本中, 当 v-if 与 v-for 一起使用时, v-for 具有比 v-if 更高的优先级；
vue3.x 版本中, 当 v-if 与 v-for 一起使用时, v-if 具有比 v-for 更高的优先级。
官网明确指出：避免 v-if 和 v-for 一起使用, 永远不要在一个元素上同时使用 v-if 和 v-for。

可以先对数据在计算数据中进行过滤, 然后再进行遍历渲染；
操作和实现起来都没有什么问题, 页面也会正常展示。但是会带来不必要的性能消耗；

::: tip 问:

v-show 与 v-if 区别?

:::

答: v-show 是 css 切换, v-if 是完整的销毁和重新创建。v-if 切换时开销大, 会在切换过程中对条件块的事件监听器和子组件进行销毁和重建, v-show 的初始化渲染开销大, 在需要频繁切换的或者切换部分内部的 DOM 比较复杂的使用 v-show。

::: tip 问:

vuex 中的 mutation 和 action 有什么区别?

:::

答: 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。action 类似于 mutation, 不同在于 action 提交的是 mutation, 而不是直接变更状态, action 亦可包含任意的异步操作。

::: tip 问:

computed 和 watch 有什么区别?

:::

答: computed 计算属性, 是依赖其他属性的计算值, 并且有缓存, 只有当依赖的值变化时才会更新。 watch 是在监听的属性发生变化时, 在回调中执行一些逻辑。所以, computed 适合在模板渲染中, 某个值是依赖了其他的响应式对象甚至是计算属性计算而来, 而 watch 适合监听某个值的变化去完成一段复杂的业务逻辑。

::: tip 问:

为什么 v-for 和 v-if 不建议用在一起?

:::

答: 当 v-for 和 v-if 处于同一个节点时, v-for 的优先级比 v-if 更高, 这意味着 v-if 将分别重复运行于每个 v-for 循环中。如果要遍历的数组很大, 而真正要展示的数据很少时, 这将造成很大的性能浪费。这种场景建议使用 computed, 先对数据进行过滤。

::: tip 问:

Vue-router 导航守卫有哪些?

:::

答:

- 全局前置/钩子: beforeEach、beforeResolve、afterEach
- 路由独享的守卫: beforeEnter
- 件内的守卫: beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

::: tip 问:

Vue 之 EventBus 数据传输优点以及弊端?

:::

答:

- 优点: 传递数据较为方便, 可以进行兄弟之间, 父子之间的传递
- 缺点: 必须先 on 监听才能进行 emit 触发

::: tip 问:

Vue 子组件如何调用父组件的方法?

:::

答: `$emit` 、 `$parent` 、 `props` 、 `vuex`

::: tip 问:

Vue 组件间的通信方式?

:::

答: `props` 、 `$emit` 、 `EventBus` 、 `vuex` 、 `$attrs` 、 `$listeners` 、 `provide` 、 `inject` 、 `$parent` 、 `$children` 、 `$ref`

## React

::: tip 问:

你知道哪些 React hooks？

:::

- `useState`: 用于管理功能组件中的状态。
- `useEffect`: 用于在功能组件中执行副作用, 例如获取数据或订阅事件。
- `useContext`: 用于访问功能组件内的 React 上下文的值。
- `useRef`: 用于创建对跨渲染持续存在的元素或值的可变引用。
- `useCallback`: 用于记忆函数以防止不必要的重新渲染。
- `useMemo`: 用于记忆值, 通过缓存昂贵的计算来提高性能。
- `useReducer`: 用于通过 reducer 函数管理状态, 类似于 Redux 的工作原理。
- `useLayoutEffect`: 与 useEffect 类似, 但效果在所有 DOM 突变后同步运行。

::: tip 问:

react 的优势以及特点？

:::

优势

- 实现对虚拟 DOM 的操作, 使得它速度快, 提高了 Web 性能
- 组件化, 模块化。react 里每一个模块都是一个组件, 组件化开发, 可维护性高
- 单向数据流, 比较有序, 有便于管理, 它随着 React 视图库的开发而被 Facebook 概念
- 跨浏览器兼容: 虚拟 DOM 帮助我们解决了跨浏览器问题, 它为我们提供了标准化的 API, 甚至在 IE8 中都是没问题的

不足

- react 中只是 MVC 模式的 View 部分, 要依赖引入很多其他模块开发
- 当父组件进行重新渲染操作时, 即使子组件的 props 或 state 没有做出任何改变, 也会同样进行重新渲染

特点

- 声明式设计: React 采用声明范式, 可以轻松描述应用
- 高效: React 通过对 DOM 的模拟, 最大限度地减少与 DOM 的交互
- 灵活: React 可以与已知的库或框架很好地配合

::: tip 问:

做过哪些 Vue 的性能优化？

:::

编码阶段

- 尽量减少 data 中的数据, data 中的数据都会增加 getter 和 setter, 会收集对应的 watcher
- v-if 和 v-for 不能连用
- 如果需要使用 v-for 给每项元素绑定事件时使用事件代理
- SPA 页面采用 keep-alive 缓存组件
- 在更多的情况下, 使用 v-if 替代 v-show
- key 保证唯一
- 使用路由懒加载、异步组件
- 防抖、节流
- 第三方模块按需导入
- 长列表滚动到可视区域动态加载
- 图片懒加载
- SEO 优化

服务端渲染 SSR

- 预渲染
- 打包优化

压缩代码

- Tree Shaking/Scope Hoisting
- 使用 cdn 加载第三方模块
- 多线程打包 happypack
- splitChunks 抽离公共文件
- sourceMap 优化

## Node.js

::: tip 问:

Node. js 的优缺点是什么？

:::

- 优点如下:
  （1） Node. js 是基于事件驱动和无阻塞的, 非常适合处理并发请求, 因此构建在 Node. js 的代理服务器相比其他技术实现的服务器要好一点。
  （2）与 Node. js 代理服务器交互的客户端代码由 JavaScript 语言编写, 客户端与服务端都采用一种语言编写。

- 缺点如下:
  （1） Node .js 是一个相对新的开源项目, 不太稳定, 变化速度快。
  （2）不适合 CPU 密集型应用, 如果有长时间运行的计算（比如大循环）, 将会导致 CPU 时间片不能释放, 使得后续 I/O 无法发起。

::: tip 问:

为什么 Node.js 是单线程的？

:::

Node.js 是作为异步处理的实验显式创建的。这是为了尝试一种新的理论, 即在单个线程上进行异步处理, 而不是通过不同框架进行缩放的现有基于线程的实现。

::: tip 问:

`process.cwd()` 与 `__dirname` 的区别 ?

:::

- `process.cwd()` 是当前执行 node 命令时候的文件夹地址 => 工作目录

- `__dirname` 是被执行的 js 文件的地址 => 文件所在目录
