---
author: 星火燎原@vxhly
title: vue3.x 学习笔记
categories: [vuejs]
tags: [Node.js, Vue.js]
date: 2020-09-02 11:50:11
---

<Boxx changeTime="10000"/>

::: tip 前言
vue 3.x 已经发布了 Beta 版本, 由此又有一个大坑需要我们前端工程师来填, 本篇将记录我在学习 vue3.x 时所遇到的坑
:::
<!-- more -->

## 看文档很重要

学习 vue 3.x 的第一步当然是上文档：[vue3 官方文档](https://vue3js.cn/docs)

::: tip 全新版本号
最新的Beta版本：3.0.0-rc.1
:::

### vue3.x 的真香警告

::: tip 重点
Higlights:

* Performance 【高性能】
* Tree-shaking support 【更小的体积】
* Composition API 【合成API】
* Fragment, Teleport, Suspense 【片段, 传送, 悬念】
* Better TypeScript support 【更好的 ts 支持】
* Custom Renderer API 【自定义渲染API】

:::

::: tip 合成API
Composition API:

* Usable alongside existing Options API 【可与现有选项API一起使用】
* Flexible logic composition and reuse 【柔性逻辑组合与重用】
* Reactivity module can be used as a standalone library 【反应性模块可用作独立库】

:::

::: tip 更好的 ts 支持
Better TypeScript support:

* Codebase written inTS w/ auto-generated type definitions 【CodeBase 编写的 INT w/自动生成的类型定义】
* API is the same in JS and TS 【API在JS和TS中是相同的】
  + In fact, code will also be largely the same 【实际上, 代码在很大程度上也是相同的】
* TSX support 【TSX支持】
* Class component is still supported 【类组件仍然受支持】
  + (vue-class-component@next is currently in alpha) 【(vue-class-Component@next 当前在alpha中)】

:::

::: tip 高性能
Performance:

* Rewritten virtual dom implementation 【重写虚拟域实现】
* Compiler-informed fast paths 【编译器通知的快速路径】
* More efficient component initialization 【更有效的组件初始化】
* 1.3~2x better update performance 【1.3~2 倍更好的更新性能】
* 2~3x faster 【SSR 2~3 倍快 SSR】

:::

## 一如既往的开启 vue3.x

我们使用官方推荐的 [Vite](https://github.com/vitejs/vite) 脚手架

::: tip 关于 Vite
Vite 是一个Web开发构建工具,由于其本机ES模块导入方法,因此可以快速提供代码服务。
:::

``` bash
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```
