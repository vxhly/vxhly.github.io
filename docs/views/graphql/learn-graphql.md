---
author: 星火燎原@vxhly
title: graphql 学习
category: [graphql]
tag: [Graphql]
date: 2021-06-11 15:41:21
---

::: tip 前言

记录 graphql 的学习笔记.

:::

<!-- more -->

## 简介

## Schema 包含的类型

- `Scalar types`

  ::: tip 提示

  - 下面的数据类型类似于我们平常使用的编程语言中的原始类型。
  - 需要定义非空类型时, 需要添加 `!`, 例如：`Int!`

  :::

  - `Int`：有符号 32 位整数。
  - `Float`：有符号双精度浮点值。
  - `String`：UTF‐8 字符序列。
  - `Boolean`： true 或者 false 。
  - `ID`：ID 标量类型表示一个唯一标识符, 通常用以重新获取对象或者作为缓存中的键。ID 类型使用和 String 一样的方式序列化；然而将其定义为 ID 意味着并不需要人类可读型。

- `Object types`

  ::: tip 提示

  一个对象类型包含一组字段, 每个字段可以是标量类型或另一种对象类型。

  :::

  ```graphql
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }
  ```

- `The Query type`

  ::: tip 提示

  - 定义客户端可以针对您的数据图执行哪些 GraphQL 读取操作。
  - Query 类型的每个字段定义了不同支持查询的名称和返回类型。

  :::

  ```graphql
  type Query {
    getBooks: [Book] # => 当前 API 为 /api/books
    getAuthors: [Author] # => 当前 API 为 /api/authors
  }
  ```

  ::: tip 提示

  执行查询一

  :::

  ```graphql
  qurty {
    getBooks {
      title
    }

    getAuthors {
      name
    }
  }
  ```

  => 返回

  ```json
  {
    "data": {
      "getBooks": [
        {
          "title": ""
          // ......
        }
      ],

      "getAuthors": [
        {
          "nmae": ""
          // ......
        }
      ]

      // ......
    }
  }
  ```

  ::: tip 提示

  执行查询二

  :::

  ```graphql
  qurty {
    getBooks {
      title
      author {
        name
      }
    }
  }
  ```

  => 返回

  ```json
  {
    "data": {
      "getBooks": [
        {
          "title": "",
          "author": {
            "name": ""
          }
          // ......
        }
      ]

      // ......
    }
  }
  ```

- `The Mutation type`

  ::: tip 提示

  - 定义支持的写操作。
  - Mutation 类型的每个字段定义了不同突变的签名和返回类型。

  :::

  ```graphql
  type Mutation {
    addBook(title: String, author: String): Book
  }
  ```

  ::: tip 提示

  执行添加

  :::

  ```graphql
  mutation {
    addBook(title: "", author: "") {
      title
      author {
        name
      }
    }
  }
  ```

  => 返回

  ```json
  {
    "data": {
      "addBook": [
        {
          "title": "",
          "author": {
            "name": ""
          }
          // ......
        }
      ]

      // ......
    }
  }
  ```

- `Input type`

  ::: tip 提示

  - 允许您将对象作为参数传递给的特殊对象类型进行查询和突变。
  - 帮助保持操作签名清洁。

  :::

  ```graphql
  type Mutation {
    createPost(title: String, body: String, mediaUrls: [String]): Post
  }
  ```

  ::: tip 提示

  输入类型

  :::

  ```graphql
  type Mutation {
    createPost(post: PostAndMediaInput): Post
  }

  input PostAndMediaInput {
    title: String
    body: String
    mediaUrls: [String]
  }
  ```
