---
author: 星火燎原@vxhly
title: typescript 的基础使用
star: true
category: [typescript]
tag: [TypeScript, JavaScript]
date: 2021-05-18 10:03:58
---

::: tip 前言

vue3 已经发布了, ts 的脚步已经阻拦不住了, 还只会 es6?别想了, 人家都已经在行动了, 以下是 ts 的基本系列教程, ts 的基本语法, 高级语法等, 以及在 vue 项目中如何应用 ts, 跟着我赶紧撸起来吧.

:::

<!-- more -->

## 基本数据类型

### 数字

```typescript
const a: number = 3;
```

### 字符串

```typescript
const b: string = "1";
```

### 数组

```typescript
const c: number[] = [1, 2, 3];
const d: Array<number> = [1, 3];
const arr: any[] = [1, "33", true];
```

### 元组

可以为数组中的每个参数定义相对应的类型

```typescript
const e: [number, string] = [1, "ww"];
```

### 枚举

```typescript
enum error {
  blue = 3,
  "orange",
}
const f: error = error.orange;
console.log(f); //输出4
```

::: tip 提示

如果未赋值的上一个值是数字那么这个未赋值的值的是上一个值的值 +1 如果未赋值的上一个值未赋值那么输出的就是它的下标如果未赋值的上一个值的值是非数字, 那么必须赋值

:::

### 布尔类型

```typescript
const g: boolean = true;
```

### 对象

```typescript
const i: object = {};
```

### undefined

常用于组合类型

```typescript
let j: number | undefined;
```

### null

```typescript
let k: null;
```

### void

指定方法类型, 表示没有返回值,方法体中不能 return

```typescript
function aa(): void {
  console.log(1);
}

//如果方法有返回值, 可以加上返回值的类型
function bb(): number {
  return 1;
}
```

### never

其他类型 (包括 null 和 undefined)的子类型, 代表从不会出现的值

```typescript
let l: never;

//匿名函数并抛出异常
l = (() => {
  throw new Error("111");
})();
```

### 任意类型

让参数可以是任何一种类型

```typescript
let h: any = 1;
h = true;
h = "st";
```

## 函数

### 函数申明

```typescript
function cc(): void {}
```

### 方法传参

```typescript
function getUserInfo(name: string, age?: number, school: string = "清华大学") {
  return `name:${name}--age:${age}--school:${school}`;
}
```

::: tip 提示

`:?` 代表这个参数可传可不传,不传就是 undefined,也可定义个默认的值

:::

### 剩余参数

传递多个时, 如果用了剩余参数, 就可以把未定义的形参转换为数组。

```typescript
function sum(a: number, b: number, ...arr: number[]): number {
  let sum: number = a + b;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(arr);
  [3, 4, 5];
  return sum;
}
console.log(sum(1, 2, 3, 4, 5)); //15
```

### 函数重载

```typescript
function reload(name: string): string;
function reload(age: number): string;
function reload(param: any): any {
  return typeof param === "string" ? `我是:${param}` : `我的年龄:${param}`;
}
console.log(reload(18)); //年龄
```

::: tip 提示

被重载的方法, 是没有方法体, 可以根据参数的类型走其中一个方法并判断参数, 但如果传入的参数类型不是任何被重载方法的参数类型就不允许通过。

:::

## 类

```typescript
class Person {
  // 私有变量
  private name: string;

  // 构造函数
  constructor(name: string) {
    this.name = name;
  }

  // 获取名字
  getName(): string {
    return this.name;
  }

  // 设置名字
  setName(name: string): void {
    this.name = name;
  }
}

let p = new Person("张三");
p.setName("李四");
console.log(p);
```

## 继承

```typescript
class Son extends Person {
  // 静态属性
  public static age: number = 18;
  // 学校
  public school: string;
  //构造方法
  constructor(name: string, school: string) {
    // 访问派生类的构造函数中的 "this" 前, 必须调用 "super",初始化父类构造函数 --并把参数传给父类
    super(name);
    //把传进来的school赋值给全局变量
    this.school = school;
  }
  //静态方法
  static run(name: string): string {
    return `${name}在跑步,他的年龄才${this.age}`;
  }
}

let son = new Son("王五", "清华大学");
son.setName("赵六"); // 私有类也不能在子类的外部访问,但可通过公开的方法中进行赋值和访问
console.log(son);
console.log(Son.run("方七"));
console.log(Son.age);
```

::: tip 提示

1. public 在当前类里面, 子类, 类外面都可以访问
2. protected 在当前类和子类内部可以访问, 类外部无法访问
3. private 在当前类内部可访问, 子类, 类外部都无法访问。
4. 属性不加修饰符,默认就是公有的 (public)

:::

## 多态

通过抽象方法/方法重载--实现多态--多态的作用是用来定义标准

```typescript
// 抽象父类
abstract class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  //抽象成员--方法
  abstract eat(): any;
  //抽象成员--属性
  protected abstract ages: Number;
  sleep(): void {
    console.log("睡觉");
  }
}

class cat extends Animal {
  ages: Number = 2;
  constructor(name: string) {
    super(name);
  }
  //非抽象类“cat”不会自动实现继承自“Animal”类的抽象成员“eat”,  必须手动定义父类中的抽象方法--多态
  eat(): string {
    return "猫吃鱼";
  }

  //多态
  sleep(): string {
    return "猫在睡觉";
  }
}

console.log(new cat("33").sleep());
```

::: tip 提示

抽象类无法实例化。非抽象类继承抽象父类时不会自动实现来自父类的抽象成员,必须手动定义父类中的抽象成员, 否则报错。抽象成员包括属性和方法

:::

## 接口

在面向对象的编程中, 接口是一种规范的定义, 它定义了行为和动作的规范,

在程序设计里面, 接口起到一种限制和规范的作用。

接口定义了某一批类所需要遵守的规范, 接口不关心这些类的内部状态数据, 也不关心这些类里方法的实现细节, 它只规定这批类里必须提供某些方法, 提供这些方法的类就可以满足实际需要。ts 中的接口类似于 java, 同时还增加了更灵活的接口类型, 包括属性、函数、可索引和类等。

### 属性接口

```typescript
interface InterfaceName {
  first: string;
  second?: string; //加个问号, 接口属性就可以变成可传可不传了, 不传默认是undefined。
}
//打印变量
function logParam(name: InterfaceName): void {
  console.log(name.first, name.second, 11);
}
//定义参数
const obj = { first: "1", second: "fff", three: 1 };
//logParam({ first: "1", second: "1", three: 1 }); //报错,只能传接口定义的值
logParam(obj);
```

::: tip 提示

用个变量来存储传入的变量,这样可以传入定义的接口以外的值, 否则如果直接传入对象中无接口定义的值会报错, 所以建议接口定义了哪些值就传哪些值。

:::

### 函数类型接口

对方法传入的参数类型,以及返回值类型进行约束,可批量进行约束。

```typescript
interface keyMap {
  (key: string, value: string): string;
}
let logKeyMap: keyMap = function (key1: string, value: string): string {
  return key1 + value;
};
console.log(logKeyMap("key1", "value"));
```

::: tip 提示

接口只对传入的参数的类型和参数的个数进行约束, 不对参数名称进行约束。

:::

### 可索引接口

#### 约束数组

```typescript
interface Arr {
  [index: number]: string;
}
let ss: Arr = ["2121"];
```

### 约束对象

```typescript
interface Obj {
  [index: string]: string;
}

let interfaceArr: Obj = { aa: "1" };
```

::: tip 提示

对数组进行约束,index 后必须跟着 number 类型。对对象进行约束,index 后必须跟着 string 类型索引签名参数类型必须为 "string" 或 "number"

:::

### 类类型接口

#### 对类进行约束,类似抽象类的实现

```typescript
interface Animals {
  name: string;
  eat(): void;
}

class Dogs implements Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {}
}
```

#### 接口继承--接口可以继承接口

```typescript
interface Dog {
  eat(): void;
}

interface Persons extends Dog {
  work(): void;
}

class Cat {
  code() {
    console.log("猫在敲代码");
  }
}

//可继承类后再实现接口
class SuperMan extends Cat implements Persons {
  eat(): void {
    console.log(1);
  }
  work(): void {
    console.log(2);
  }
}
let superMan = new SuperMan();
superMan.code();
```

::: tip 提示

类接口会对类的属性和方法进行约束, 类似非抽象类继承抽象类时必须实现某些方法和属性, 但对属性和方法的类型的约束更加严格, 除了方法 void 类型可被重新定义外, 其他属性或方法的类型定义需要和接口保持一致

:::

## 泛型

软件工程中, 我们不仅要创建一致的定义良好的 api, 同时也要考虑可重用性。组件不仅能够支持当前的数据类型, 同时也能支持未来的数据类型, 这在创建大型系统时为你提供了十分灵活的功能

泛型就是解决类、接口、方法的复用性, 以及对不特定数据类型的支持。

要求:传入的参数和返回的参数一致

### 函数的泛型

```typescript
function getDate<T>(value: T): T {
  return value;
}
console.log(getDate<number>(123));
```

::: tip 提示

这里的 T 可改成其他任意值但定义的值, 和传入的参数以及返回的参数是一样的,一般默认写法是 T, 也是业内规范的选择。

:::

### 类的泛型

```typescript
class MinClass<T> {
  public list: T[] = [];
  //添加
  add(value: T): void {
    this.list.push(value);
  }

  //求最小值
  min(): T {
    //假设这个值最小
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      //比较并获取最小值
      minNum = minNum < this.list[i] ? minNum : this.list[i];
    }
    return minNum;
  }
}
//实例化类 并且指定了类的T的类型是number
let minClass = new MinClass<number>();
minClass.add(23);
minClass.add(5);
minClass.add(2);
console.log(minClass.min());
//实例化类 并且指定了类的T的类型是string, 则其方法的传参和返回都是string类型
let minClass2 = new MinClass<string>();
minClass2.add("23");
minClass2.add("5");
minClass2.add("2");
console.log(minClass2.min());
```

### 接口的泛型

#### 第一种写法

```typescript
interface ConfigFn {
  //规范参数类型,返回值类型
  <T>(value: T): T;
}

let getData: ConfigFn = function <T>(value: T): T {
  return value;
};

console.log(getData<string>("z11"));
```

#### 第二种写法

```typescript
interface ConfigFn<T> {
  //参数类型 , 返回值类型
  (value: T): T;
}

//接口方法
function getData<T>(value: T): T {
  return value;
}

//使用接口
let myGetDate: ConfigFn<string> = getData;
console.log(myGetDate("3"));
```

::: tip 提示

接口的泛型只针对函数类型的接口

:::

### 类当做参数传入泛型类

```typescript
//用户类--和数据库表字段进行映射
class User {
  username: string | undefined;
  password: string | undefined;
  //构造函数-初始化参数
  constructor(param: {
    username: string | undefined;
    password?: string | undefined;
  }) {
    this.username = param.username;
    this.password = param.password;
  }
}

//数据库类
class Db<T> {
  add(user: T): boolean {
    console.log(user);
    return true;
  }
  updated(user: T, id: number): boolean {
    console.log(user, id);
    return true;
  }
}

let u = new User({
  username: "张三",
});

//u.username = "李四";
u.password = "111111";
let db = new Db<User>();
db.add(u);
db.updated(u, 1);
```

::: tip 提示

类的参数名和类型都做了约束。

:::

## 模块

内部模块称为命名空间, 外部模块简称为模块, 模块在其自身的作用域里执行, 而不是在全局作用域里;

这意味着定义在一个模块里的变量、函数、类等等在模块外部是不可见的, 除非你明确的使用`export`形式之一导出它们。

相反, 如果想使用其它模块导出的变量, 函数, 类, 接口等的时候, 你必须要导人它们, 可以使用`import`形式之一。

我们可以一些公共的功能单独抽离成一个文件作为一个模块。模块里面的变量、函数、类等默认是私有的, 如果我们要在外部访问模块里面的数据(变量、函数、类) 我们需要通过`export`暴露模块里面的数据(变量、函数、类...)。暴露后我们通过`import`引入模块就可以使用模块里面暴露的数据(变量、函数、类...)

```typescript
//modules/db.ts
function getDate(): any[] {
  console.log("获取数据");
  return [
    {
      userName: "张三",
    },
    {
      userName: "李四",
    },
  ];
}

//一个模块里面可以用多次
// export { getDate };
//一个模块里面只能用一次
export default getDate;
```

```typescript
import { getDate as getDbDate } from "./modules/db";
import getDbDate from "./modules/db";
getDbDate();
```

::: tip 提示

这个调试时浏览器中不能直接使用,可在`node`和`weakpack`的环境中调试。

:::

## 命名空间

在代码量较大的情况下, 为了避免各种变量命名相冲突, 可将相似功能的函数、类、接口等放置到命名空间内 TypeScript 的命名空间可以将代码包裹起来, 只对外暴露需要在外部访问的对象。

命名空间和模块的区别

- 命名空间：内部模块, 主要用于组织代码, 避免命名冲突。
- 模块：ts 外部模块的简称, 侧重代码的复用, 一个模块里可能会有多个命名空间。

```typescript
// modules/Animal.ts
export namespace A {
  interface Animal {
    name: String;
    eat(): void;
  }

  export class Dog implements Animal {
    name: String;
    constructor(theName: string) {
      this.name = theName;
    }
    eat() {
      console.log("我是" + this.name);
    }
  }
}

export namespace B {
  interface Animal {
    name: String;
    eat(): void;
  }

  export class Dog implements Animal {
    name: String;
    constructor(theName: string) {
      this.name = theName;
    }
    eat() {}
  }
}
```

```typescript
import { A, B } from "./modules/Animal";
let ee = new A.Dog("小贝");
ee.eat();
```

## 装饰器

### 类装饰器

类装饰器在类申明之前被申明(紧靠着类申明), 类装饰器应用于类构造函数, 可以用于监视, 修改或者替换类定义。

```typescript
function logClass(params: any) {
  console.log(params);
  //params 就是指代当前类--HttpClient
  params.prototype.apiUrl = "动态扩展属性";
  params.prototype.run = function () {
    console.log("动态扩展方法");
  };
  params.prototype.getDate = function () {
    console.log("动态扩展方法2");
  };
}

@logClass
class HttpClient {
  constructor() {}
  getDate() {
    console.log(1);
  }
}

let http: any = new HttpClient();
console.log(http.apiUrl);
http.run();
http.getDate();
```

::: tip 提示

装饰器会覆盖被装饰的类中的方法

:::

### 装饰器工厂

可传参的装饰器

```typescript
function logClassB(param: string) {
  return function (target: any) {
    console.log(target, "装饰器以下的类");
    console.log(param, "装饰器传进来的属性");
  };
}

@logClassB("小慧")
class HttpClients {
  constructor() {}
  getDate() {}
}

let https: any = new HttpClients();
console.log(https);
```

### 构造函数装饰器

```typescript
function logClassC(target: any) {
  console.log(target, 1111);
  //用在这里继承目标类并重载方法和属性
  return class extends target {
    a: any = "我是修改后的属性";
    getDate() {
      console.log(this.a + "--装饰器中的方法输出的");
    }
  };
}

@logClassC
class HttpClient2 {
  public a: string | undefined;
  constructor() {
    this.a = "我是构造函数里面的a";
  }
  getDate() {
    console.log(this.a);
  }
}
const https2 = new HttpClient2();
https2.getDate();
```
