import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,d as t,a as n,e as o}from"./app-c3cafe5d.js";const l={},p=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"整理了下 SQL 语法基础, 适用于 SQL server 和 MySQL, 本博文皆为实例 SQL 语句仅供参考。")],-1),d=o(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><ul><li>数据库中的行称作 <code>元组</code> 、 <code>记录</code></li><li>数据库中的列称作 <code>属性</code> 、 <code>字段</code></li><li>常见数据库模型 <code>层次模型</code> <code>网状模型</code> <code>关系模型</code> <code>对象关系模型</code> <code>对象模型</code></li></ul><h3 id="表约束" tabindex="-1"><a class="header-anchor" href="#表约束" aria-hidden="true">#</a> 表约束</h3><ul><li>主键约束（Primay Key Coustraint） 唯一性, 非空性</li><li>唯一约束 （Unique Counstraint）唯一性, 可以空, 但只能有一个</li><li>检查约束 (Check Counstraint) 对该列数据的范围、格式的限制（如: 年龄、性别等）</li><li>默认约束 (Default Counstraint) 该数据的默认值</li><li>外键约束 (Foreign Key Counstraint) 需要建立两表间的关系并引用主表的列</li></ul><h3 id="curd" tabindex="-1"><a class="header-anchor" href="#curd" aria-hidden="true">#</a> CURD</h3><ul><li>创建（Create）</li><li>更新（Update）</li><li>读取（Retrieve）</li><li>删除（Delete）</li></ul><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> dbxx
<span class="token keyword">on</span> <span class="token punctuation">(</span>
  name<span class="token operator">=</span>dd1<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;c:\\dd\\dd1.mdf&quot;</span><span class="token punctuation">,</span>
  maxsize<span class="token operator">=</span>unlimited<span class="token punctuation">,</span>filegrowth<span class="token operator">=</span><span class="token number">10</span><span class="token operator">%</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
filegroup xx <span class="token punctuation">(</span>
  name<span class="token operator">=</span>dd2<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;c:\\dd\\dd2,mdf&quot;</span><span class="token punctuation">,</span>
  maxsize<span class="token operator">=</span>unlimited
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span>
  name<span class="token operator">=</span>dd3<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;d:\\dd\\dd3.ndf&quot;</span><span class="token punctuation">,</span>
  size<span class="token operator">=</span><span class="token number">50</span>MB<span class="token punctuation">,</span>maxsize<span class="token operator">=</span>unlimited<span class="token punctuation">,</span>filegrowth<span class="token operator">=</span><span class="token number">10</span>MB
<span class="token punctuation">)</span>
log <span class="token keyword">on</span> <span class="token punctuation">(</span>
  name<span class="token operator">=</span>LLg<span class="token punctuation">,</span>filename<span class="token operator">=</span><span class="token string">&quot;d:\\dd\\ll.;df&quot;</span><span class="token punctuation">,</span>
  size<span class="token operator">=</span><span class="token number">10</span>MB<span class="token punctuation">,</span>maxsize<span class="token operator">=</span><span class="token number">50</span>MB<span class="token punctuation">,</span>filegrowth<span class="token operator">=</span><span class="token number">20</span>MB
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> master
<span class="token keyword">drop</span> <span class="token keyword">database</span> dbxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创表" tabindex="-1"><a class="header-anchor" href="#创表" aria-hidden="true">#</a> 创表</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> Student
<span class="token punctuation">(</span>
  stuNo <span class="token keyword">int</span><span class="token punctuation">,</span>
  stuName <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  sex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  dep <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  ID <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  weight <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h2><h3 id="主键约束" tabindex="-1"><a class="header-anchor" href="#主键约束" aria-hidden="true">#</a> 主键约束</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 添加约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> PK_S1 <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">(</span>stuNo<span class="token punctuation">)</span>

<span class="token comment">-- 删除约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> PK_S1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="唯一约束" tabindex="-1"><a class="header-anchor" href="#唯一约束" aria-hidden="true">#</a> 唯一约束</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 添加约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> UN_S2 <span class="token keyword">union</span><span class="token punctuation">(</span>ID<span class="token punctuation">)</span>

<span class="token comment">-- 删除约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> UN_S2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认约束" tabindex="-1"><a class="header-anchor" href="#默认约束" aria-hidden="true">#</a> 默认约束</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 添加约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> DF_S3 <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span> <span class="token keyword">for</span> sex

<span class="token comment">-- 删除约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> DF_S3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查约束" tabindex="-1"><a class="header-anchor" href="#检查约束" aria-hidden="true">#</a> 检查约束</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> CK_S4 <span class="token keyword">check</span><span class="token punctuation">(</span>sex<span class="token operator">=</span><span class="token string">&#39;男&#39;</span> <span class="token operator">or</span> sex<span class="token operator">=</span><span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span>

<span class="token comment">-- 删除约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> CK_S4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> 外键约束</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">add</span> <span class="token keyword">constraint</span> FK_S5 <span class="token keyword">foreign</span> <span class="token keyword">key</span><span class="token punctuation">(</span>stuNo<span class="token punctuation">)</span> stuInfo<span class="token punctuation">(</span>stuID<span class="token punctuation">)</span>

<span class="token comment">-- 删除约束</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">constraint</span> FK_S5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除-1" tabindex="-1"><a class="header-anchor" href="#删除-1" aria-hidden="true">#</a> 删除</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删表之前一定要先把外键约束先删掉</span>
<span class="token keyword">drop</span> <span class="token keyword">table</span> Student

<span class="token comment">-- 删除表中的某一列</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> Student
<span class="token keyword">drop</span> <span class="token keyword">column</span> dep

<span class="token comment">-- 删除指定数据</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> Student
<span class="token keyword">where</span> dep<span class="token operator">=</span><span class="token string">&quot;信息系&quot;</span>

<span class="token comment">-- 逐行删除</span>
<span class="token keyword">delete</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student

<span class="token comment">-- 按条件删除</span>
<span class="token keyword">delete</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student
<span class="token keyword">where</span> sex<span class="token operator">=</span><span class="token string">&#39;男&#39;</span>

<span class="token comment">-- 快速删除表数据</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> Student
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 新增数据</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> Student
<span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">123096832</span><span class="token punctuation">,</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;外语系&#39;</span><span class="token punctuation">,</span><span class="token number">350181123401021298</span><span class="token punctuation">)</span>

<span class="token comment">-- 更新数据</span>
<span class="token keyword">update</span> <span class="token keyword">table</span> Student
<span class="token keyword">set</span> stuName<span class="token operator">=</span><span class="token string">&#39;张三&#39;</span> <span class="token keyword">where</span> stuNo<span class="token operator">=</span><span class="token string">&#39;1013141516&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student

<span class="token keyword">select</span> <span class="token keyword">all</span> sex <span class="token keyword">from</span> Student
<span class="token keyword">select</span> <span class="token keyword">distinct</span> sex <span class="token keyword">from</span>  Student <span class="token comment">-- 过滤重复</span>

<span class="token keyword">select</span> <span class="token keyword">top</span> <span class="token number">3</span> <span class="token keyword">percent</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token comment">-- 前 3% 条</span>
<span class="token keyword">select</span> <span class="token keyword">top</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token comment">-- 前 3 条</span>

<span class="token comment">-- 根据某一列查询</span>
<span class="token keyword">select</span> <span class="token keyword">top</span> <span class="token number">3</span> <span class="token keyword">with</span> ties weight
<span class="token keyword">from</span> Student
<span class="token keyword">order</span> <span class="token keyword">by</span> weight <span class="token keyword">asc</span>

<span class="token comment">-- 排序。默认升序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">order</span> <span class="token keyword">by</span> name
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">order</span> <span class="token keyword">by</span> name <span class="token keyword">desc</span> <span class="token comment">-- 降序</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> Student <span class="token keyword">order</span> <span class="token keyword">by</span> name <span class="token keyword">asc</span> <span class="token comment">-- 升序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统计" tabindex="-1"><a class="header-anchor" href="#统计" aria-hidden="true">#</a> 统计</h2><p>假设 Student 表中共有 20 行记录, 其中有效性别行数为 18</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> Student <span class="token comment">-- 返回值 20,返回行为 1</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span> <span class="token keyword">from</span> Student <span class="token comment">-- 返回值 18,不会统计 NULL,返回行为 1</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> sec<span class="token punctuation">)</span> <span class="token keyword">from</span> Student <span class="token comment">-- 返回值 2,计算不重复的,返回行为 1</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span><span class="token punctuation">,</span> weight
<span class="token keyword">from</span> Student <span class="token keyword">group</span> <span class="token keyword">by</span> weight
<span class="token keyword">having</span> weight <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function c(i,r){return a(),e("div",null,[p,t(" more "),d])}const v=s(l,[["render",c],["__file","sql-grammar.html.vue"]]);export{v as default};
