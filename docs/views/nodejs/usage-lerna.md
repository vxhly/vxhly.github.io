---
author: 星火燎原@vxhly
title: lerna 的使用指南
categories: [nodejs]
tags: [Node.js]
date: 2020-10-26 14:49:11
---

<Boxx changeTime="10000"/>

::: tip 前言
从 GitHub 上找到了比较多的仓库开始采用 lerna 来管理仓库的多包依赖, 也逐渐发现 lerna 的管理模式确实比较好, so 现贴上我的填坑笔记。
:::
<!-- more -->

## 参考资料

先贴上我的参考资料来源

1. lerna 官网: [lerna.js.org/](https://lerna.js.org/)
2. lerna 仓库：[github.com/lerna/lerna/](https://github.com/lerna/lerna/)

当然也得感谢前人栽的树

1. [lerna的基础使用](https://www.jianshu.com/p/8b7e6025354b)
2. [lerna入门篇](https://www.jianshu.com/p/63ec67445b0f)

## 什么是 lernaJs

lernaJs 是由 Babel 团队出的一个多包管理工具, 是 GitHub 上面开源的一款 js 代码库管理软件, 用来对一系列相互耦合比较大、又相互独立的 js git 库进行管理。因为 Babel 包含很多子包, 以前都是放在多个仓库里的, 管理比较困难, 特别是有调用系统内包的时候, 发布比较麻烦。所以为了能更好更快的跨包管理, babel 推出了 lernaJs, 使用了 monorepo 的概念, 现在 React,Babel,Angular,Jest 都在使用这个工具来管理包。

对于一些功能比较全的库, 我们往往会把各个小功能拆分成独立的npm库, 他们直接有比较强的依赖关系。可以解决各个库之间修改混乱、难以跟踪的问题。lerna可以优化这种情形下的工作流。

### 代码库结构

lerna 管理的库文件结构类似如下这样

``` text
my-lerna-repo
  |
  |- packages
  |    |
  |    |- package-1
  |    |    |
  |    |    └─ package.json
  |    |
  |    └─ package-2
  |         |
  |         └─ package.json
  |
  |- package.json
  |
  └─ lerna.json
```

### lerna 主要做了什么

1. 通过 lerna 的命令 `lerna bootstrap` 将会把代码库进行 link。
2. 通过 `lerna publish` 发布最新改动的库

