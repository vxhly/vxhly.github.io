---
author: 星火燎原@vxhly
title: vue-appollo 技术探索
category: [vuejs]
tag: [Vue.js, GraphQL]
date: 2021-06-10 09:51:35
---

::: tip 前言

记录 vue-appollo 的学习笔记.

:::

<!-- more -->

## 简介

### vue-appollo

### GraphQL

[GraphQL](https://graphql.org/) 是一种新的 API 的查询语言, 它提供了一种更高效、强大和灵活 API 查询。它是由 Facebook 开发和开源, 目前由来自世界各地的大公司和个人维护。GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述, 使得客户端能够准确地获得它需要的数据, 而且没有任何冗余。它弥补了 RESTful API（字段冗余, 扩展性差、无法聚合 api、无法定义数据类型、网络请求次数多）等不足。

注意：GraphQL 是 api 的查询语言, 而不是数据库。从这个意义上说, 它是数据库无关的, 而且可以在使用 API 的任何环境中有效使用, 我们可以理解为 GraphQL 是基于 API 之上的一层封装, 目的是为了更好, 更灵活的适用于业务的需求变化

### Apollo

#### 可以解决什么样的问题

前后端联调接口一直以来都是特别费劲的一个环节, 使用 REST 接口, 接口返回的数据格式, 数据类型（有哪些字段, 字段的类型）都是后端自己预先定义好的, 如果返回的数据格式并不是调用者所期望的, 作为前端的我们可以通过以下两种方式去解决

1. 和后端沟通, 该接口（更改数据源）
2. 自己做一些适配工作（处理数据源）

有这种经历的人都知道, 让后端改接口这是一个很不现实方案, 尤其是对于三端（web、andriod、ios）公用同一套后端接口的情况下, 让后端改接口的结构基本不可能, 所以一般都是前端自己做一些接口数据的适配工作

其实我们真的很希望, 我们需要什么数据, 需要什么格式, 后端就按照什么格式给我们返回什么样的数据结构, 我们要哪些字段, 后端就只给我们返回我们需要的这些字段, 其他的都不返回, 这样, 前端就和后端解耦了, 我们不用再每天和后端因为接口问题去撕逼, GraphQL 就是一个这样的思路来帮助我们解决这个前后端联调接口的问题, 在前端直接写查询, 后端只管给前端返回前端查询的这些数据；

### 需要涉及到的依赖包以及参考链接

1. [vue-apollo](https://apollo.vuejs.org/zh-cn/guide/)
2. [Apollo](https://www.apollographql.com/docs/)
3.

## 上手例子一

### 配置 Loader

为了帮助我们更简便的调用 GraphQL API, 在使用 GraphQL 时更加方便, 像普通 js 模块一样轻松自如, 使前端开发人员能在 js 文件中通过 import 或 require 导入 `.gql` 和 `.graphql` 文件, 然后直接调用, 并且还需要支持通过 `#import` 语法导入其它 `.gql` 文件, 比如 `fragments`。我们在 `vue.config.js` 中加入以下配置项来配置加载 `GraphQL API` 文件

```js
module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule("graphql")
      .test(/\.graphql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};
```

### apollo 客户端连接

使用 `vue-apollo` 与 `apollo-boost` 创建一个客户端连接

`apollo-client/index.js`

```js
import Vue from "vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
Vue.use(VueApollo);

// 创建客户端连接
const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径
  uri: "http://localhost:3000/graphql",
});

// 实例化 appollo 客户端连接
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
```

需要在 `main.js` 中注册

```js
import Vue from "vue";

import { apolloProvider } from "@/apollo-client";

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
```
