---
author: 星火燎原@vxhly
title: Vite 下一代前端开发与构建工具
star: true
category: [vite]
tag: [Vite, Webpack, Vue]
date: 2021-08-25 20:03:58
---

::: tip 前言

Vite2.x 也推出了有一段时间了, 作为一名合格的前端开发人员, 没错我入坑了, 以下本篇文章记录的是 Vite 的一些知识点。

:::

<!-- more -->

## 回顾以往的前端自动化构建工具

### Grunt - 基于任务的构建工具

- Grunt - 基于任务的构建工具
  - **优点：**
    - 灵活, 它只负责执行我们定义好的任务
    - 大量可复用插件封装好了常见的构建任务
  - **缺点：**
    - 是集成度不高, 要写很多配置后才可以用, 无法做到开箱即用
- Gulp - 基于任务的构建工具
  - **优点：**
    - 好用又不失灵活, 既可以单独完成构建, 也可以和其他工具搭配使用
  - **缺点：**
    - 是集成度不高, 要写很多配置后才可以用, 无法做到开箱即用
- Webpack - 基于模块化的构建工具

![Vite](/assets/study-vite-1.png)

- **优点：**
  - 专注于处理模块化的项目, 能做到开箱即用、一步到位
  - 可通过 Plugin 扩展, 完整好用又不失灵活性
  - 使用场景不局限于 Web 开发
  - 社区庞大活跃, 经常引入紧跟时代发展的新特性, 能为大多数场景找到已有的开源扩展
  - 良好的开发体验
- **缺点：**
  - 只能用于采用模块化开发的项目
  - 打包时间与应用大小成正比, 应用越大打包时间越久
- Rollup - 基于模块化的构建工具
  - **优点：**
    - 配置简单, 打包速度快
    - 自动移除未引用的代码（内置 `tree shaking`）
  - **缺点：**
    - 开发服务器不能实现模块热更新, 调试繁琐
    - 浏览器环境的代码分割依赖 `amd`

### 为什么会有构建工具的出现

- 解决前端模块化问题
- 使繁琐的任务变得更加简单
- 使 less/scss 预处理变得更加方便
- 资源压缩与混淆, 只有更小的和更安全的构建包才能传输的更快且不容易被拦截
  > 扩展：js 混淆与加密在线工具（[https://www.sojson.com/jsjiemi.html](https://www.sojson.com/jsjiemi.html)）

## Vite 由来

> 作者在微博在发言：
>
> Vite, 一个基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports, 在服务器端按需编译返回, 完全跳过了打包这个概念, 服务器随起随用。同时不仅有 Vue 文件支持, 还搞定了热更新, 而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打。虽然现在还比较粗糙, 但这个方向我觉得是有潜力的, 做得好可以彻底解决改一行代码等半天热更新的问题

它主要具有以下特点：

- 快速的冷启动, 不需要等待打包操作
- 即时的模块热更新, 替换性能和模块数量的解耦让更新飞起
- 真正的按需编译, 不再等待整个应用编译完成
- 基于 ESM 的 Dev Server + HMR（模块热更新）
- 基于 esbuild 的依赖预优化
- 基于 Rollup 的 Plugins + Bundle
- 更好的 SSR 支持

产生 Vite 的历程

- 传统的 Webpack Dev Server 冷启动时间是比较长的
- Webpack 模块热更新的反应速度比较慢

### Vite 的日活量

![Vite](/assets/study-vite-2.png)

### ESM 在浏览器的支持度

默认的构建目标浏览器是能 在 script 标签上支持原生 ESM 和 原生 ESM 动态导入。传统浏览器可以通过官方插件 @vitejs/plugin-legacy 支持     Vite 需要 Node.js 版本 >= 12.0.0；Vite 的 2.4.x 版本不兼容 npm@7  ESM 最大的特点是在浏览器端使用 `export import` 的方式导入和导出模块, 在 script 标签里设置 `type="module"` , 然后使用 **ES module**。正因如此, vite 高度依赖`module script`特性, 也就意味着从这里开始抛弃了 IE 市场

![Vite](/assets/study-vite-3.png)

> 扩展

- 本地 node 环境对于  ECMAScript 6 的支持度

![Vite](/assets/study-vite-4.png)

- 浏览器对 import 的支持度

![Vite](/assets/study-vite-5.png)

- 浏览器对 export 的支持度

![Vite](/assets/study-vite-6.png)

## Vite VS Webpack

### 功能对比

|                   | Vite                                                                                                                                                                         | Webpack                                                                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 支持 Vue2         | 非官方支持: [https://github.com/underfin/vite-plugin-vue2](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2Funderfin%2Fvite-plugin-vue2)                        | 支持：vue-loader@^15.0.0                                                                                                                                                |
| 支持 Vue3         | 支持                                                                                                                                                                         | 支持：vue-loader@^16.0.0([https://github.com/Jamie-Yang/vue3-boilerplate](https://link.segmentfault.com/?url=https%3A%2F%2Fgithub.com%2FJamie-Yang%2Fvue3-boilerplate)) |
| 支持 Typescript   | 支持：ESbuild （默认无类型检查）                                                                                                                                             | 支持：ts-loader                                                                                                                                                         |
| 支持 CSS 预处理器 | 支持： [https://vitejs.dev/guide/features.html#css-pre-processors](https://link.segmentfault.com/?url=https%3A%2F%2Fvitejs.dev%2Fguide%2Ffeatures.html%23css-pre-processors) | 支持：[https://vue-loader.vuejs.org/guide/pre-processors.html](https://link.segmentfault.com/?url=https%3A%2F%2Fvue-loader.vuejs.org%2Fguide%2Fpre-processors.html)     |
| 支持 CSS Modules  | 支持： [https://vitejs.dev/guide/features.html#css-modules](https://link.segmentfault.com/?url=https%3A%2F%2Fvitejs.dev%2Fguide%2Ffeatures.html%23css-modules)               | 支持：[https://vue-loader.vuejs.org/guide/css-modules.html](https://link.segmentfault.com/?url=https%3A%2F%2Fvue-loader.vuejs.org%2Fguide%2Fcss-modules.html)           |
| 支持静态文件      | 支持                                                                                                                                                                         | 支持                                                                                                                                                                    |
| 开发环境          | no-bundle native ESM（CJS → ESM）                                                                                                                                            | bundle（CJS/UMD/ESM）                                                                                                                                                   |
| HMR               | 支持                                                                                                                                                                         | 支持                                                                                                                                                                    |
| 生产环境          | Rollup、esbuild                                                                                                                                                              | Webpack                                                                                                                                                                 |
| Node API 调用能力 | 支持                                                                                                                                                                         | 支持                                                                                                                                                                    |

### Webpack 打包方式

![Vite](/assets/study-vite-7.png)

![Vite](/assets/study-vite-8.png)

- webpack 的打包时间与应用的大小是成正比的, 应用越大打包时间越久
- 打包过程：识别入口文件 => 通过逐层识别模块依赖。（Commonjs、amd 或者 es6 的 import, webpack 都会对其进行分析。来获取代码的依赖）=> webpack 做的就是分析代码。转换代码, 编译代码, 输出代码 => 最终形成打包后的代码
- 根据路由把代码整合成一个文件 bundle.js,启动开发服务器 Serverready
- vue-cli-server serve(启动服务器) → build(打包) → bundle(内存) → 启动 web server（即 Dev Server 必须等待所有模块构建完成）
- 如果改了一个模块, 是会经过重新打包的, 但是不会全部打包, 它会根据路由解析的路径差异化的打包, 但是会把内存里面的 bundle 替换, 替换完了之后再一次重启服务器
- webpack 是会把所有的模块进行提前编译, 之后打包进 bundle 里, 换句话说, 不管模块是否会被执行, 都会被编译和打包到 bundle

### Vite 打包方式

![Vite](/assets/study-vite-9.png)

![Vite](/assets/study-vite-10.png)

- 先去启动服务器, 当浏览器向服务器发送请求的时候, 浏览器需要哪些文件, 服务器 就可以返回哪些文件
- 前端需要什么,服务器就给什么,不需要打包,根据不同的路由返回不同的模块/文件 （服务器此时对请求的文件进行编译, 编译后将编译结果返回给浏览器）
- vite 可以做到压缩打包时间, vite 打包时将项目拆分为源码和依赖两部分, 依赖部分无需打包直接加载, 源码部分只需将浏览器不兼容的转成 JavaScript 即可
- Vite 以 原生 ESM 方式服务源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入的代码, 即只在当前屏幕上实际使用时才会被处理。

## 从 Vite 源码看 Vite 原理

### ESM-based Dev Server 存在的问题

- 非 ESM 模块兼容（TS/JSX/CSS...）
- Broswer ESM 不能加载 Node 模块
- Node 模块的其他问题
- 浏览器没有环境变量

### Vite 如何解决问题

> 问题：非 ESM 模块兼容（TS/JSX/CSS...）解决方案：将非 ESM 模块转换成 ESM, 至于 TS 或者 JSX 是通过 esbuild 进行转换, esbuild 可以代替 TSC/Babel

Vite 在第一次运行的时候, 会先去分析项目底下的开发依赖, 然后使用 esbuild 将亘古不变的依赖进行提取（这一步叫做预打包）, 将提取到的 ESM 模块统一存放在 node_modules/.vite 这个文件夹下, 下一次运行的时候只要没有新增的依赖项将不会进行提取, 即使新增了一项新的依赖, esbuild 也只会提取新加入的依赖项。 ​ vite 会将应用的模块拆分成依赖和源码部分, 依赖部分即是 package.json 中的运行依赖, 该部分依赖将会通过 esbuild 进行依赖提取源码 通常包含一些并非直接是 JavaScript 的文件, 需要转换（例如 JSX, CSS 或者 Vue/Svelte 组件）, 这一部分通常是交给 Rollup 进行处理

至于使用了 TS 的应用, esbuild 会将含有 TS 的代码转换成原生的 ESM, 在将其返回给浏览器, 这样浏览器就可以加载该模块而对于 vue 文件, 也会对其编译成 js, 可以从请求头中也可以看到, vue 文件实际上被转换成 js 文件了将要处理的 template,script,style 等所需依赖以 http 请求的形式、通过 query 参数的形式区分, 并加载 SFC(vue 单文件)文件各个模块内容。 vite 是基于浏览器对 ESMoudule 的支持, script 标签加上 `type="module"`  就可以解析 ES6 模块, 浏览器解析到 ES6 的 import 语法时, 会根据路径从服务端获取要引入的文件, 服务端会根据 import 的文件路径和类型进行解析

![Vite](/assets/study-vite-11.png)

> 问题：Node 模块的其他问题解决方案：将多个模块合并成一个文件, 即一个请求

- Node 模块会随着应用的体积而增多, 在 vite 中一个文件就是一个请求, 如果有非常多的 Node 模块也只能使 vite 的性能降低
- vite 使用依赖预优化（esbulid）,将多个 Node 模块打包成一个文件, 通过 http 进行缓存, 下次请求到同样的, 直接从缓存获取
- Vite 将会使用 esbuild 预构建依赖。Esbuild 使用 Go 编写, 并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍

> 问题：Broswer ESM 不能加载 Node 模块解决方案：引入 es-module-lexer 和 magic-string, 或者引入 koa 中间件

```json
{
  "es-module-lexer": "^0.7.1",
  "magic-string": "^0.25.7"
}
```

- 使用 es-module-lexer 扫描所有的 import 语法
- magic-string 将重写 Node 模块的引入路径

```javascript
// source
import { createAPP } from "vue";
// rewite to
import { createAPP } from "/node_modules/.vite/vue.js?v=7e85f123";
```

> 扩展：Vite 1.0 的解决方案

```json
{
  "rollup": "^2.32.1",
  "@rollup/plugin-commonjs": "^16.0.0",
  "koa": "^2.13.0",
  "koa-proxies": "^0.11.0",
  "koa-static": "^5.0.0"
}
```

从上我们可以看到, vite 引入入 koa 服务器, 开发时, vite 使用 Koa 构建的服务端, 在 createServer 中主要通过中间件注册相关功能, 提供一个 web server 去代理, 之后浏览器通过 http 进行请求模块。为什么会需要 koa 这样的服务来代理请求, 因为我们的开发依赖都是安装在 node_modules 中, 浏览器 ES Module 是无法直接获取到项目下 node_modules 目录中的文件, 其过程如下：

- 通过 koa 中间件获取请求 body
- 使用 es-module-lexer 解析资源 ast
- 获取 import 的内容后, 判断资源是否是绝对路径, 绝对视为 npm 模块
- 返回处理后的路径给浏览器, 例如："vue" => "/@modules/vue"

> 问题：浏览器没有环境变量解决方案：将环境变量注入到 import.meta.env

```javascript
import.meta.env.MODE; // {string}应用程序运行的模式。

import.meta.env.BASE_URL; // {string} 应用程序提供服务的基础url。这由基本配置选项决定。

import.meta.env.PROD; // {boolean} 是否在生产环境中运行。

import.meta.env.DEV; //{boolean}应用是否在开发中运行(总是与import.meta.env.PROD相反)
```

### Vite 缺点

- 生态不如 webpack
  - webpack 有非常丰富的 loader 和 plugin
  - vite 目前无法把 webpack 中的 loader 和 plugin 全部实现
- prod 环境的构建, 目前用的 Rollup
  - 原因在于 esbuild 对于 css 和代码分割不是很友好
  - 未来 esbuild 可能是一种趋势, esbuild 的生态做的越好的话, 越有可能直接替换 Rollup
