import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as i,e as a}from"./app-44879862.js";const l={},r=a('<div class="hint-container tip"><p class="hint-container-title">前言</p><p><code>系统架构设计师</code> 考试中上午选择题知识点汇总。</p></div><h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h2><h3 id="电子政务" tabindex="-1"><a class="header-anchor" href="#电子政务" aria-hidden="true">#</a> 电子政务</h3><ul><li><code>G2B</code>: 政府对企业</li><li><code>G2C</code>: 政府对公民</li><li><code>G2E</code>: 政府对公务员</li><li><code>G2G</code>: 政府对政府</li></ul><h3 id="云计算" tabindex="-1"><a class="header-anchor" href="#云计算" aria-hidden="true">#</a> 云计算</h3><ul><li><code>PaaS</code>: 平台即服务</li><li><code>SaaS</code>: 软件（应用）即服务</li><li><code>IaaS</code>: 基础设施即服务</li></ul><h3 id="软件工程" tabindex="-1"><a class="header-anchor" href="#软件工程" aria-hidden="true">#</a> 软件工程</h3><ul><li><code>OOA</code>: 面向对象分析</li><li><code>OOD</code>: 面向对象设计</li><li><code>OOP</code>: 面向对象的程序设计</li></ul><h3 id="数据库设计规范" tabindex="-1"><a class="header-anchor" href="#数据库设计规范" aria-hidden="true">#</a> 数据库设计规范</h3><ul><li><code>第一范式（1NF）</code>: 若关系模型 R 的每一个属性是不可再分的数据项, 则符合 <code>1NF</code></li><li><code>第二范式（2NF）</code>: 若关系模型 <code>R ∈ 1NF</code>, 且每一个非主属性完全依赖主键, 则符合 <code>2NF</code></li><li><code>第三范式（3NF）</code>: 即当 2NF 消除了非主属性对主键的传递依赖, 则符合 <code>3NF</code></li></ul><h2 id="计算机原理" tabindex="-1"><a class="header-anchor" href="#计算机原理" aria-hidden="true">#</a> 计算机原理</h2><h3 id="指令系统" tabindex="-1"><a class="header-anchor" href="#指令系统" aria-hidden="true">#</a> 指令系统</h3><ul><li>指令系统是计算机硬件的语言系统, 是机器所具有的全部指令的集合, 反映了计算机所拥有的基本功能。</li></ul><h3 id="指令系统特点" tabindex="-1"><a class="header-anchor" href="#指令系统特点" aria-hidden="true">#</a> 指令系统特点</h3><table><thead><tr><th>名称</th><th>指令要求</th><th>寻址方式</th><th>实现方式</th><th>编译</th></tr></thead><tbody><tr><td>复杂指令系统 CISC</td><td>指令数量众多,使用频率相差悬殊.可变长指令格式</td><td>多种寻址方式</td><td>与主存直接交互.微程序控制</td><td>编译复杂</td></tr><tr><td>精简指令系统 RISC</td><td>指令数量少,长度固定</td><td>寻址方式少</td><td>硬布线逻辑控制.流水线技术.与寄存器交互.</td><td>优化的编辑器</td></tr></tbody></table><h3 id="计算机存储" tabindex="-1"><a class="header-anchor" href="#计算机存储" aria-hidden="true">#</a> 计算机存储</h3><ul><li>存储速度从快到慢分别是：寄存器组(CPU)、Cache、内存、Flash。</li><li>接近 CPU 的存储器容量更小、速度更快、成本更高, 辅存容量更大、速度更慢、成本更低。</li><li>采用分级存储体系的目的是解决存储的容量、价格和速度之间的矛盾。</li><li>不能转换对应的物理地址原因是逻辑地址到物理地址转换时地址越界。</li><li>段页式存储管理方式即先将用户程序分成若干个段，再把每个段分成若干个页，并为每一个段赋予一个段名，使用段页表来进行管理。</li></ul><h3 id="系统性能评价" tabindex="-1"><a class="header-anchor" href="#系统性能评价" aria-hidden="true">#</a> 系统性能评价</h3><ul><li>通常用户采用评价程序来评价系统的性能。评价程序一般有专门的测量程序、仿真程序等, 而评测准确度最高的评价程序是<code>真实程序</code>。</li><li>在计算机性能评估中, 通常将评价程序中用的最多、最频繁的<code>核心程序</code>作为评价计算机性能的标准程序, 称其为基准测试程序。</li><li>基准测试程序的分类: 核心程序, 小型基准程序, 合成基准程序, 基准测试程序组。</li></ul><h3 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h3><ul><li>在实时操作系统中, 两个任务并发执行, 一个任务要等待另一个任务发来消息, 或建立某个条件后再向前执行, 这种制约合作关系被称为<code>同步</code></li><li>在进程管理中，<code>互斥</code>是指一种保护共享资源不被多个进程同时访问的机制。当多个进程需要访问同一资源时，如果没有互斥机制，可能会导致竞态条件或数据不一致的问题。</li><li>场景中每个事务都在等待被下一个事务所占有的资源，形成一个环形等待，导致所有事务都无法继续前进，都处于阻塞状态，是一种死锁状态。</li></ul><h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h3><table><thead><tr><th>线程共享资源</th><th>线程独享资源</th></tr></thead><tbody><tr><td>地址空间</td><td>程序寄存器</td></tr><tr><td>全局变量</td><td>寄存器</td></tr><tr><td>打开的文件</td><td>栈</td></tr><tr><td>子进程</td><td>状态字</td></tr><tr><td>定时器</td><td></td></tr><tr><td>信号量</td><td></td></tr></tbody></table><h2 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h2><h3 id="常见的-tcp-udp-端口号" tabindex="-1"><a class="header-anchor" href="#常见的-tcp-udp-端口号" aria-hidden="true">#</a> 常见的 TCP/UDP 端口号</h3><ul><li><code>HTTP</code>: 80</li><li><code>HTTPS</code>: 443</li><li><code>FTP</code>: 21 用来传输控制信息, 20 用来传输文件内容</li><li><code>TFTP</code>: 69 (建立在 UDP 上)</li><li><code>POP3</code>: 110</li><li><code>SMTP</code>: 25</li><li><code>IMAP</code>: 143</li></ul><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h3 id="三级模式" tabindex="-1"><a class="header-anchor" href="#三级模式" aria-hidden="true">#</a> 三级模式</h3><p>外模式、模式和内模式，分别对应视图级别、表级别和文件级别。</p><ul><li>外模式是用户与数据库系统的接口，</li><li>模式是数据库中全部数据的逻辑结构和特征的描述，</li><li>内模式是数据物理结构和存储方式的描述。对于内模式而言，是定义所有内部的记录类型，索引和文件的组织方式，以及数据控制方面的细节。</li></ul><h3 id="armstrong-公理" tabindex="-1"><a class="header-anchor" href="#armstrong-公理" aria-hidden="true">#</a> Armstrong 公理</h3><div class="hint-container tip"><p class="hint-container-title">前置条件</p><p>设关系模式 <code>R&lt;U,F&gt;</code>, 其中 U 为属性集合, F 是 U 上的一组函数依赖, 则有以下的推论</p></div><ul><li>自反律: 若 <code>Y⊆X⊆U</code>, 则 <code>X-&gt;Y</code> 为 F 所蕴含</li><li>增广律: 若 <code>X-&gt;Y</code> 为 F 所蕴含, 且 <code>Z⊆U</code>, 则 <code>XZ-&gt;YZ</code> 为 F 所蕴含</li><li>传递律: 若 <code>X-&gt;Y</code>, <code>Y-&gt;Z</code> 为 F 所蕴含, 则 <code>X-&gt;Z</code> 为 F 所蕴含</li><li>合并规则: 若 <code>X-&gt;Y</code>, <code>X-&gt;Z</code>, 则 <code>X-&gt;YZ</code> 为 F 所蕴含</li><li>伪传递规则: 若 <code>X-&gt;Y</code>, <code>WY-&gt;Z</code>, 则 <code>XW-&gt;Z</code> 为 F 所蕴含</li><li>分解规则: 若 <code>X-&gt;Y</code>, <code>Z⊆Y</code>, 则 <code>X-&gt;Z</code> 为 F 所蕴含</li></ul><h3 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h3><ul><li>在数据库设计的需求分析阶段应该完成包括<code>需求规格说明书、数据字典和数据流图</code>在内的文档.</li><li>数据库设计的概念设计阶段的主要任务是<code>设计概念模型</code>, 包括<code>E-R 图、E-R 图的转换</code>等.</li><li>数据库设计的逻辑设计阶段的主要任务是<code>设计逻辑模型</code>, 包括<code>关系模式、关系模式的规范化</code>等.</li><li>数据库设计的物理设计阶段的主要任务是<code>设计物理模型</code>, 包括<code>存储结构、存取路径、存取方法</code>等.</li><li>数据库的安全机制中, 通过提供<code>存储过程</code>供第三方开发人员调用进行数据更新, 从而保证数据库的关系模式不被第三方获取</li></ul><h3 id="分布式数据库" tabindex="-1"><a class="header-anchor" href="#分布式数据库" aria-hidden="true">#</a> 分布式数据库</h3><ul><li>分布式数据库两个阶段提交协议中的两个阶段分别是<code>表决阶段</code>和<code>执行阶段</code></li><li>分布透明性包括: 分片透明性、位置透明性、复制透明性和局部数据模型透明性 <ul><li>分片透明性: 用户不知道数据分布在哪里</li><li>位置透明性: 用户不知道数据存储在哪里</li><li>复制透明性: 用户不知道数据是否被复制</li><li>局部数据模型透明性: 用户不知道数据的存储方式</li></ul></li></ul><h2 id="软件工程-1" tabindex="-1"><a class="header-anchor" href="#软件工程-1" aria-hidden="true">#</a> 软件工程</h2><h3 id="软件工程的三要素" tabindex="-1"><a class="header-anchor" href="#软件工程的三要素" aria-hidden="true">#</a> 软件工程的三要素</h3><ul><li>方法</li><li>工具</li><li>过程</li></ul><h3 id="面向对象的分析步骤" tabindex="-1"><a class="header-anchor" href="#面向对象的分析步骤" aria-hidden="true">#</a> 面向对象的分析步骤</h3><ol><li>利用<code>用例及用例图</code>来表示需求</li><li>你用<code>包图及类图</code>表示目标软件系统的总体框架结构</li></ol><p>用例之间的关系主要有包含、扩展和泛化</p><ol><li>包含关系: 两个或两个以上的用例的公共行为可以表示用例之间的行为</li><li>扩展关系: 一个用例混合了两种或两种以上不同的场景(分支)可以表示用例之间的关系</li><li>泛化关系: 多用例具有一种共性, 可以将共性抽象为父用例, 其他用例作为泛化关系的子用例</li></ol><h3 id="结构化设计的特征" tabindex="-1"><a class="header-anchor" href="#结构化设计的特征" aria-hidden="true">#</a> 结构化设计的特征</h3><ol><li>可修改性、可测试性、可移植性</li><li>模块化</li><li>高内聚低耦合</li></ol><h3 id="结构化设计" tabindex="-1"><a class="header-anchor" href="#结构化设计" aria-hidden="true">#</a> 结构化设计</h3><ul><li>模块化设计是将一个待开发的软件分解成为若干小的简单部分--模块。具体来说，模块是指执行某一特定任务的数据结构和程序代码。</li><li>通常将模块的结构和功能定义为其外部特性，将模块的局部数据和实现该模块的程序代码称为内部特性。</li><li>模块独立是指每个模块完成相对独立的特定子功能，与其他模块之间的关系最简单。</li><li>通常用内聚和耦合两个标准来衡量模块的独立性，其设计原则是&quot;高内聚、低耦合&quot;。</li></ul><h3 id="面向对象设计" tabindex="-1"><a class="header-anchor" href="#面向对象设计" aria-hidden="true">#</a> 面向对象设计</h3><table><thead><tr><th>设计原则</th><th>描述</th></tr></thead><tbody><tr><td>单一职责原则</td><td>设计目的单一的类</td></tr><tr><td>开放-封闭原则</td><td>对扩展开放，对修改封闭</td></tr><tr><td>依赖倒置原则</td><td>要依赖于抽象、不是具体实践。对接口进行编程，不是针对实现编程</td></tr><tr><td>里式替换原则</td><td>子类可以替换父类</td></tr><tr><td>接口隔离原则</td><td>使用多个专门的接口比使用单一的总接口好</td></tr><tr><td>组合重用原则</td><td>尽量使用组合不是继承达到重用的目的</td></tr><tr><td>迪米特原则(最少知识)</td><td>一个对象应当对其他对象有尽可能少的了解</td></tr></tbody></table><table><thead><tr><th>模式(分类)</th><th>描述</th><th>具体模式</th></tr></thead><tbody><tr><td>创建型模式</td><td>用于创建对象</td><td>工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。共五种。口诀从单抽元件(建)厂工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。共五种。口诀从单抽元件(建)厂</td></tr><tr><td>结构型模式</td><td>处理类或者对象的组合</td><td>适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合式、享元模式。共七种。口诀:外侨(桥)组员(元)戴(代)配饰。</td></tr><tr><td>行为型模式</td><td>描述类与对象怎样交互、怎样分配职责</td><td>策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。共十一种。口诀:观摩(模)对(迭)策，责令解放(访)，戒(介)忘台</td></tr><tr><td>(态)</td><td></td><td></td></tr></tbody></table><h3 id="结构化方法分析模型" tabindex="-1"><a class="header-anchor" href="#结构化方法分析模型" aria-hidden="true">#</a> 结构化方法分析模型</h3><ul><li>数据模型（代表为 E-R 图）</li><li>功能模型（代表为 DFD 图）</li><li>行为模型（代表为状态转换图）</li></ul><h3 id="面向对象的分析模型" tabindex="-1"><a class="header-anchor" href="#面向对象的分析模型" aria-hidden="true">#</a> 面向对象的分析模型</h3><ul><li>顶层架构图</li><li>用例与用例图</li><li>领域概念模型</li></ul><h3 id="软件结构化设计的步骤" tabindex="-1"><a class="header-anchor" href="#软件结构化设计的步骤" aria-hidden="true">#</a> 软件结构化设计的步骤</h3><ol><li>架构设计</li><li>接口设计</li><li>数据设计</li><li>过程设计</li></ol><h3 id="软件开发生命周期" tabindex="-1"><a class="header-anchor" href="#软件开发生命周期" aria-hidden="true">#</a> 软件开发生命周期</h3><ul><li>按照传统的软件生命周期方法学, 可以将软件生命周期分为<code>软件定义、软件开发、软件运行与维护</code>三个阶段。</li><li>根据国家标准 G B/T 8566—2007 ，软件生命周期可以划分为<code>可行性研究、需求分析、概要设计、详细设计、实现、组装测试、确认测试、使用、维护、退役</code> 10 个阶段。</li><li>软件定义包括可行性研究和详细需求分析过程, 任务是确定软件开发工程必须完成的目标. 具体可以分为<code>问题定义、可行性研究、需求分析</code>等。</li><li>软件开发时期是软件的设计与实现, 可以分为<code>概要(总体)设计、详细设计、编码、测</code>试等。</li><li>软件活动主要包括<code>软件描述、软件开发、软件有效性验证和软件演化</code>。</li><li>软件过程是指一组制作软件产品的活动和结果，其主要包括<code>软件描述、开发、有效性验证和进化</code>。</li></ul><h3 id="软件开发方法分类" tabindex="-1"><a class="header-anchor" href="#软件开发方法分类" aria-hidden="true">#</a> 软件开发方法分类</h3><h4 id="按照开发风范" tabindex="-1"><a class="header-anchor" href="#按照开发风范" aria-hidden="true">#</a> 按照开发风范</h4><ul><li><code>自顶向下</code>: 大问题分化成小问题, 逐一解决, 代表是结构化方法</li><li><code>自底向上</code>: 从具体的部件开始, 凭借设计者的技巧进行相互连接、修改和扩大, 代表是面向对象方法</li></ul><h4 id="按照性质" tabindex="-1"><a class="header-anchor" href="#按照性质" aria-hidden="true">#</a> 按照性质</h4><ul><li><code>形式化开发</code>: 数学推理开发, 代表有净室工程</li><li><code>非形式化开发</code>: 各种开发模型</li></ul><h4 id="适用范围" tabindex="-1"><a class="header-anchor" href="#适用范围" aria-hidden="true">#</a> 适用范围</h4><ul><li><code>整体性</code>: 软件开发全过程的方法</li><li><code>局部性</code>: 某个具体阶段的软件方法</li></ul><h3 id="构件化开发方法" tabindex="-1"><a class="header-anchor" href="#构件化开发方法" aria-hidden="true">#</a> 构件化开发方法</h3><p>(1) 关键字分类法<br> 根据领域分析的结果将应用领域的概念按照从抽象到具体的顺序逐次分解为树形或有向无回路图结构。<br> (2) 刻面分类法<br> 利用 Facet(刻面)描述构件执行的功能、被操作的数据、构件应用的语境或任意其他特征。<br> (3) 超文本方法<br> 基于全文检索技术，使得检索者在阅读文档过程中可以按照人类的联想思维方式任意跳转到包含相关概念或构件的文档。</p><h3 id="软件重用" tabindex="-1"><a class="header-anchor" href="#软件重用" aria-hidden="true">#</a> 软件重用</h3><ul><li>软件重用是指在两次或多次不同的软件开发过程中重复使用相同或相似软件元素的过程。</li><li>软件元素包括需求分析文档、设计过程、设计文档、程序代码、测试用例、领域知识等。</li><li>软件重用分垂直式重用与水平式重用，垂直式重用是指局限于某一垂直领域的重用，如只在电力系统中用到的构件;而水平式重用是指通用领域的重用，如标准函数库，任何软件都能用，所以是水平式重用。</li></ul><h3 id="逆向工程" tabindex="-1"><a class="header-anchor" href="#逆向工程" aria-hidden="true">#</a> 逆向工程</h3><p>逆向工程导出的信息可以分为如下 4 个抽象层次。<br> ① 实现级:包括程序的抽象语法树、符号表等信息。<br> ② 结构级:包括反映程序分量之间相互依赖关系的信息，例如调用图、结构图等。<br> ③ 功能级:包括反映程序段功能及程序段之间关系的信息。<br> ④ 领域级:包括反映程序分量或程序诸实体与应用领域概念之间对应关系的信息。</p><h3 id="软件过程模型" tabindex="-1"><a class="header-anchor" href="#软件过程模型" aria-hidden="true">#</a> 软件过程模型</h3><p>软件过程模型的基本概念:软件过程是制作软件产品的一组活动以及结果，这些活动主要由软件人员来完成，软件活动主要有:<br> (1)软件描述。必须定义软件功能以及使用的限制。<br> (2)软件开发。也就是软件的设计和实现，软件工程人员制作出能满足描述的软件。<br> (3)软件有效性验证。软件必须经过严格的验证，以保证能够满足客户的需求。<br> (4)软件进化。软件随着客户需求的变化不断地改进。</p><h3 id="软件开发模型" tabindex="-1"><a class="header-anchor" href="#软件开发模型" aria-hidden="true">#</a> 软件开发模型</h3><h4 id="螺旋模型" tabindex="-1"><a class="header-anchor" href="#螺旋模型" aria-hidden="true">#</a> 螺旋模型</h4><p>螺旋模型是在快速原型的基础上扩展而成的一种生存周期模型。这种模型将整个软件开发流程分成多个阶段，每个阶段都由 4 部分组成，它们是:<br> ①<code>目标设定</code>。为该项目进行需求分析，定义和确定这一个阶段的专门目标，指定对过程和产品的约束，并且制定详细的管理计划。<br> ②<code>风险分析</code>。对可选方案进行风险识别和详细分析，制定解决办法，采取有效的措施避免这些风险。<br> ③<code>开发和有效性验证</code>。风险评估后，可以为系统选择开发型，并且进行原型开发，即开发软件产品。<br> ④<code>评审</code>。对项目进行评审，以确定是否需要进入螺旋线的下一次回路，如果决定继续，就要制定下一阶段计划。</p><h4 id="瀑布模型" tabindex="-1"><a class="header-anchor" href="#瀑布模型" aria-hidden="true">#</a> 瀑布模型</h4><p>瀑布模型的特点是因果关系紧密相连，前一个阶段工作的结果是后一个阶段工作的输入。或者说，每一个阶段都是建立在前一个阶段的正确结果之上，前一个阶段的错误和疏漏会隐蔽地带入后一个阶段。</p><h4 id="原型模型" tabindex="-1"><a class="header-anchor" href="#原型模型" aria-hidden="true">#</a> 原型模型</h4><p>原型模型先是使用原型获取需求，需求获取到之后有可能抛弃丢原型，然后根据原型获得的需求进行目标软件的开发。</p><h4 id="rup-模型" tabindex="-1"><a class="header-anchor" href="#rup-模型" aria-hidden="true">#</a> RUP 模型</h4><p>RUP 中的软件过程在时间上被分解为 4 个顺序的阶段，分别是初始阶段、细化阶段、构建阶段和移交阶段。<br> ① 初始阶段的任务是为系统建立业务模型并确定项目的边界。<br> ② 细化阶段的任务是分析问题领域，建立完善的架构，淘汰项目中最高风险的元素。<br> ③ 构建阶段，要开发所有剩余的构件和应用程序功能，把这些构件集成为产品。移交阶段的重点是确保软件对最终用户是可用的。</p><p>RUP(Rational Unified Process)软件开发生命周期是一个二维的软件开发模型，RUP 的 9 个核心工作流有:<br> 1、业务建模: 理解待开发系统所在的机构及其商业运作，确保所有参与人员对待开发系统所在的机构有共同的认识，评估待开发系统对所在机构的影响。<br> 2、需求: 定义系统功能及用户界面，使客户知道系统的功能，使开发人员理解系统的需求，为项目预算及计划提供基础。<br> 3、分析与设计: 把需求分析的结果转化为分析与设计模型。<br> 4、实现: 把设计模型转换为实现结果，对开发的代码做单元测试，将不同实现人员开发的模块集成为可执行系统。<br> 5、测试: 检查各子系统的交互与集成，，验证所有需求是否均被正确实现，对发现的软件质量上的缺陷进行归档，对软件质量提出改进建议。<br> 6、部署: 打包、分发、安装软件，升级旧系统:培训用户及销售人员并提供技术支持。<br> 7、配置与变更管理: 跟踪并维护系统开发过程中产生的所有制品的完整性和一致性。<br> 8、项目管理: 为软件开发项目提供计划、人员分配、执行、监控等方面的指导，为风险管理提供框架。<br> 9、环境: 为软件开发机构提供软件开发环境，即提供过程管理和工具的支持。</p><h3 id="敏捷开发方法" tabindex="-1"><a class="header-anchor" href="#敏捷开发方法" aria-hidden="true">#</a> 敏捷开发方法</h3><p>(1)XP(Extreme Programming，极限编程)XP 是一种轻量、高效、低风险、柔性、可预测、科学且充满乐趣的软件开发方式，适用于小型或中型软件开发团队，并且客户的需求模糊或需求多变。<br> (2)水晶系列(Crystal)开发方法。水晶法认为每一个不同的项目都需要一套不同的策略、约定和方法论，认为人对软件质量有重要的作用，因此随着项目质量和开发人员素质的提高，项目和过程的质量也随之提高，通过更好地交流和经常性的交付，软件生产力得到提高。<br> (3)开放式源码的程序开发人员在地域上分布很广，这使得它和其他敏捷方法不同，因为一般的敏捷方法都强调项目组成员在同一地点工作。开放源码的一个突出特点就是查错排障(debug)的高度并行性，任何人发现了错误都可将改正源码的“补丁”文件发给维护者。然后由维护者将这些堂“补丁”或是新增的代码并入源码库。<br> (4)SCRUM。并列争求法使用迭代的方法，其中，把每 30 天一次的迭代称为一个冲刺，并按需求的优先级别来实现产品。多个自组织和自治的小组井行地递增实现产品。协调是通过简短的日常情况会议来进行，就像橄榄球中的“并列争球”。<br> (5)功用驱动开发方法(FDD)像其他方法一样，它致力于短时的迭代阶段和可见可用的功能。在 FDD 中，一个迭代周期一般是两周。在 FDD 中，编程开发人员分成两类:首席程序员和“类”程序员。首席程序员是最富有经验的开发人员，他们是项目的协调者、设计者和指导者，而“类”程序员则主要做源码编写。<br> (6)ASD(Adaptive Software Development)方法的核心是三个非线性的、重叠的开发阶段:猜测、合作与学习。<br> (7)开放统一过程开发方法(OpenUP)采用了迭代和增量的生命周期，为了避免过多的过程，开放统一过程开发方法遵循精益原则，只涉及最小集合的敏捷实践，更适合小型敏捷项目。</p><h3 id="软件设计阶段" tabindex="-1"><a class="header-anchor" href="#软件设计阶段" aria-hidden="true">#</a> 软件设计阶段</h3><p>从工程管理角度来看，软件设计可分为概要设计和详细设计两个阶段。</p><ul><li>概要设计也称为高层设计或总体设计，即将软件需求转化为软件设计的<code>数据结构</code>和软件的<code>系统结构</code>;</li><li>详细设计也称为低层设计，即对结构图进行细化，得到详细的数据结构与算法。</li></ul><p>① 需求分析阶段: <code>数据流图</code>。<br> ② 概要设计阶段: <code>模块结构图、层次图和HIPO图</code><br> ③ 详细设计阶段: <code>程序流程图、伪代码、盒图</code>。</p><h3 id="软件测试" tabindex="-1"><a class="header-anchor" href="#软件测试" aria-hidden="true">#</a> 软件测试</h3><ul><li><code>静态测试</code>。被测程序不在机器上运行，采用人工检测和计算机辅助静态分析的手段对程序进行测试。 <ul><li>静态测试包括对文档的静态测试和对代码的静态测试。对代码的静态测试包括控制流分析、数据流分析、接口分析和表达式分析。</li></ul></li><li><code>动态测试</code>。通过运行程序发现错误。一般包括黑盒测试(等价类划分、边界值分析法、错误推测法)与白盒测试(各种类型的覆盖测试)。</li></ul><h4 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h4><ul><li>单元测试也称为模块测试，测的对象是可独立编译或汇编的程序模类(统称为模块)，其目的是检查每个块、软件构件或面向对象软件中模块能否正确地实现设计说明中功能、性能、接口和其他设计约束等条件，发现模块内可能存在的各和中差错。</li><li>单元测试的技术依据是<code>软件详细设计说明书</code>。</li></ul><h4 id="集成测试" tabindex="-1"><a class="header-anchor" href="#集成测试" aria-hidden="true">#</a> 集成测试</h4><ul><li>集成测试的目的是检查模块之间，以及模块和已集成的软件之间的接口关系，并验证已集成的软件是否符合设计要求。</li><li>集成测试的技术依据是<code>软件概要设计文档</code>。</li></ul><h4 id="系统测试" tabindex="-1"><a class="header-anchor" href="#系统测试" aria-hidden="true">#</a> 系统测试</h4><ul><li>系统测试的对象是完整的、集成的计算机系统，系统测试的目的是在真实系统工作环境下，验证完整的软件配置项能否和系统正确连接，并满足系统/子系统设计文档和软件开发合同规定的要求。</li><li>系统测试的技术依据是<code>用户需求或开发合同</code>。</li></ul><h4 id="配置项测试" tabindex="-1"><a class="header-anchor" href="#配置项测试" aria-hidden="true">#</a> 配置项测试</h4><ul><li>配置项测试的目的是检验软件配置配置项测试的对象是软件配置项项与软件需求规格说明的一致性。</li><li>配置项测试的技术依据是<code>软件配置文档</code>。</li></ul><h4 id="确认测试" tabindex="-1"><a class="header-anchor" href="#确认测试" aria-hidden="true">#</a> 确认测试</h4><ul><li>确认测试主要验证软件的功能、性能和其他特性是否与用户需求一致。</li><li>确认测试的技术依据是<code>用户需求或开发合同</code>。</li></ul><h4 id="验收测试" tabindex="-1"><a class="header-anchor" href="#验收测试" aria-hidden="true">#</a> 验收测试</h4><ul><li>验收测试是指针对软件需求规格说明，在交付前以用户为主进行的测试。</li><li>验收测试的技术依据是<code>软件需求规格说明</code>。</li></ul><h4 id="回归测试" tabindex="-1"><a class="header-anchor" href="#回归测试" aria-hidden="true">#</a> 回归测试</h4><ul><li>回归测试的目的是测试软件变更之后，变更部分的正确性和对变更需求的复合型，以及软件原有的、正确的功能、性能和其他规定的要求的不损害性。</li><li>回归测试的技术依据是<code>软件概要设计文档</code>。</li></ul><h3 id="系统运行与维护" tabindex="-1"><a class="header-anchor" href="#系统运行与维护" aria-hidden="true">#</a> 系统运行与维护</h3><p>遗留系统采取的演化策略<br> ① 淘汰策略。第四象限为低水平、低价值区，即遗留系统的技术含量较低，且具有较低的业务价值。<br> ② 继承策略。第二象限为低水平、已经满足企业运作的功能或性能要习，但具有较高的商业价值，目前企业的业务尚紧密依赖该系统。<br> ③ 改造策略。第一象限为高水平、高价值区，即遗留系统的技术含量较高，本身还有强大的生命力。<br> ④ 集成策略。第三象限为高水平、低价值区，即遗留系统的技术含量较高，但其业务价值较低，可能只完成某个部门(或子公司)的业务管理。</p><p>移植工作大体上分为计划阶段、准备阶段、转换阶段、测试阶段、验证阶段。<br> 1、<code>计划阶段</code>，在计划阶段，要进行现有系统的调查整理，从移植技术、系统内容(是否进行系统提炼等)、系统运行三个方面，探讨如何转换成新系统，决定移植方法，确立移植工作体制及移植日程。<br> 2、<code>准备阶段</code>，在准备阶段要进行移植方面的研究，准备转换所的资料。该阶段的作业质量将对以后的生产效率产生很大的影响。<br> 3、<code>转换阶段</code>，这一阶段是将程序设计和数据转换成新机器能根据需要工作的阶段。提高转换工作的精度，减轻下一阶段的测试负担是提高移植工作效率的基本内容。<br> 4、<code>测试阶段</code>，这一阶段是进行程多单元、工作单元测试的阶段。在本阶段要核实程序能否在新系统中准确地工作。所以，当有不能准确工作工作。<br> 5、<code>验证阶段</code>，这是测试完的程序使新系统工作，最后核实系统，准备正式运行的阶段。</p><h2 id="需求管理" tabindex="-1"><a class="header-anchor" href="#需求管理" aria-hidden="true">#</a> 需求管理</h2><ul><li>需求管理包括<code>变更控制、版本控制、需求跟踪、需求状态跟踪</code>。 <ul><li>变更控制确保对需求的变更进行文档记录、评估和批准。</li><li>版本控制追踪需求随时间的变化。</li><li>需求跟踪识别和记录需求并传达给相关人员。</li><li>需求状态的跟踪，识别需求的变化和更新状态。</li></ul></li><li>需求变更管理包括三个主要过程: <code>问题分析和变更描述、变更分析和成本计算、变更实现</code>。</li><li>需求跟踪的系统元素包括各种<code>类型的需求、业务规则、系统架构和构件、源代码、测试用例以及帮助文件</code>等。</li></ul><h2 id="软件架构设计" tabindex="-1"><a class="header-anchor" href="#软件架构设计" aria-hidden="true">#</a> 软件架构设计</h2><ul><li>软件架构是降低成本、改进质量、按时和按需交付产品的关键因素, 软件架构设计需要满足系统的质量属性, 如性能、安全性和可修改性等。</li><li>基于体系结构(架构)的软件设计方法(ABSD 方法)是一个<code>自顶向下</code>，递归细化的方法，软件系统的体系结构通过该方法得到细化，直到能产生软件<code>构件和类</code>。</li><li>基于体系结构(架构)的软件设计方法(ABSD 方法)采用<code>视角和视图</code>来描述软件架构，采用用例和质量属性场景来描述需求。进一步来说，<code>用例</code>描述的是功能需求，<code>质量属性场景</code>描述的是质量需求(或侧重于非功能需求)。</li><li>基于架构的软件开发模型(Architecture-Based Software DesignModel，ABSDM)把整个基于架构的软件过程划分为架构需求、设计、文档化、复审、实现、演化等 6 个子过程。</li></ul><h2 id="软件架构风格" tabindex="-1"><a class="header-anchor" href="#软件架构风格" aria-hidden="true">#</a> 软件架构风格</h2><h3 id="三层-c-s-架构" tabindex="-1"><a class="header-anchor" href="#三层-c-s-架构" aria-hidden="true">#</a> 三层 C/S 架构</h3><table><thead><tr><th>层次</th><th>功能</th></tr></thead><tbody><tr><td>表示层</td><td>用户接口, 检查用户输入的数据, 显示输出的数据</td></tr><tr><td>功能层</td><td>业务逻辑层, 是将具体的业务逻辑输入程序中</td></tr><tr><td>数据层</td><td>对 DBSM 进行管理和控制</td></tr></tbody></table><h3 id="物联网" tabindex="-1"><a class="header-anchor" href="#物联网" aria-hidden="true">#</a> 物联网</h3><p>物联网属于层次型架构，分为:</p><ol><li>感知层: 负责信息采集和物物之间的信息传输。</li><li>网络层: 利用无线和有线网络对采集的数据进行编码、认证和传输。</li><li>应用层: 实现应用。</li></ol><h3 id="体系结构风格" tabindex="-1"><a class="header-anchor" href="#体系结构风格" aria-hidden="true">#</a> 体系结构风格</h3><ul><li>数据流体系结构包括<code>批处理体系结构风格</code>和<code>管道-过滤器体系结构风格</code>。</li><li>虚拟机体系结构风格包括<code>解释器体系结构风格</code>和<code>规则系统体系结构风格</code>。</li><li>在仓库风格中，有两种不同的构件: <code>中央数据结构</code>说明当前状态，<code>独立构件</code>在中央数据存储上执行</li></ul><h2 id="软件架构评估" tabindex="-1"><a class="header-anchor" href="#软件架构评估" aria-hidden="true">#</a> 软件架构评估</h2><h3 id="架构层次" tabindex="-1"><a class="header-anchor" href="#架构层次" aria-hidden="true">#</a> 架构层次</h3><ul><li>顶层方针</li><li>过程文件</li><li>规程文件</li><li>模版类文件</li></ul><h3 id="架构风格" tabindex="-1"><a class="header-anchor" href="#架构风格" aria-hidden="true">#</a> 架构风格</h3><ul><li>Layered system (分层式系统)</li><li>Data flow (数据流)</li><li>Event system (事件系统)</li><li>Rule-based system (基于规则的系统)</li><li>在架构评估中，场景是从<code>风险承担者</code>的角度对与系统交互的描述，一般采用<code>刺激、环境、响应</code>三方面来对场景进行描述。</li></ul><h3 id="体现结构风格" tabindex="-1"><a class="header-anchor" href="#体现结构风格" aria-hidden="true">#</a> 体现结构风格</h3><ul><li>C2 体系结构风格可以概括为: 通过连接件绑定在一起按照一组规则运作的并行构件网络.</li><li>管道过滤器风格的特点是: 每个构件都有一组输入和输出，构件读输入的数据流，经过内部处理，然后产生输出数据流。</li><li>典型的批处理应用基本流程是: 从数据库、文件等数据媒介读取大量记录用某种方式处理数据，以修改后的形式写回数据。</li><li>面向对象风格: 数据的表示和它们的相应操作被封装起来，对象的行为体现在其接受和请求的动作中。对象具有封装性，一个对象的改变不会影响其他对象。</li><li>独立构件风格: 事件的触发者并不知道哪些构件会被这些事件影响，相互保持独立。</li></ul><h3 id="质量属性" tabindex="-1"><a class="header-anchor" href="#质量属性" aria-hidden="true">#</a> 质量属性</h3><ul><li><code>性能</code>: 处理任务所需时间或者单位时间内的处理量</li><li><code>可靠性</code>: 正常运行的时间比例, 出现故障多久能启用系统</li><li><code>安全性</code>: 系统的向合法用户提供服务并且阻止非法用户的能力</li><li><code>可维护性</code>: 错误发生后进局部性修改, 对其他构件负面影响最小</li><li><code>可扩展性</code>: 使用新构件、改进或删除原有构件或特性</li><li><code>结构重组性</code>: 重新组织构件及构件关系、灵活配置构件</li><li><code>可移植性</code>: 多样的环境(硬件平台、语言、操作系统等)</li><li><code>易用性</code>: 在指定条件下使用时，软件产品被理解、学习、使用和吸引用户的能力</li></ul><h3 id="质量特性" tabindex="-1"><a class="header-anchor" href="#质量特性" aria-hidden="true">#</a> 质量特性</h3><ul><li><code>敏感点</code>: 为了实现某种特定的质量属性，一个或多个构件所具有的特性。 <ul><li>对查询请求处理时间的要求将影响系统的数据传输协议和处理过程的设计</li></ul></li><li><code>权衡点</code>: 指影响多个质量特性，并对多个质量特性来说都是敏感点的质量特性。 <ul><li>改变业务数据编码方式会对系统的性能和安全性产生影响</li></ul></li><li><code>风险</code>: 不以标准术语出现。某些做法有一些隐患可能导致一些问题。 <ul><li>对系统某业务逻辑的描述尚未达成共识，这可能导致部分业务功能模块的重复，影响系统的可修改性;</li></ul></li><li><code>非风险</code>: 某些做法是可行的、可接受的。 <ul><li>业务处理时间小于 30 毫秒，则将请求响应时间设定为 1 秒钟是可以接受的</li></ul></li></ul><h2 id="法律法规" tabindex="-1"><a class="header-anchor" href="#法律法规" aria-hidden="true">#</a> 法律法规</h2><h3 id="软件著作权" tabindex="-1"><a class="header-anchor" href="#软件著作权" aria-hidden="true">#</a> 软件著作权</h3><ul><li>软件著作权中规定开发软件所用的<code>思想、处理过程、操作方法或者数学概念</code>不受保护。</li><li>改编、翻译、注释、整理已有作品而产生的作品，其著作权由改编、翻译、注释、整理人享有，但行使著作权时不得侵犯原作品的著作权。</li><li>著作权因作品的完成而自动产生，不必履行任何形式的登记或注册手续，也不论其是否已经发表。</li><li>著作权包括著作人身权和著作财产权，其中著作人身权包括发表权、署名权、修改权、保护作品完整权。著作财产权包括复制权、发行权、出租权、展览权、表演权、放映权、广播权、改编权、翻译权、汇编权以及其他权利。</li><li>委托创作中，著作权的归属由委托人与受托人签订书面合同约定。无书面合同或者合同未作明确约定的，其著作权由受托人享有。</li></ul><h3 id="公民作品" tabindex="-1"><a class="header-anchor" href="#公民作品" aria-hidden="true">#</a> 公民作品</h3><ul><li><code>署名权、修改权、保护作品完整权</code> =&gt; 保护期限: 没有限制</li><li><code>发表权、使用权、获取报酬权</code> =&gt; 保护期限: 作者终生及其死亡后的 50 年(第 50 年的 12 月 31 日)</li></ul><h3 id="单位作品" tabindex="-1"><a class="header-anchor" href="#单位作品" aria-hidden="true">#</a> 单位作品</h3><ul><li><code>发表权、使用权、获取报酬权</code> =&gt; 保护期限: 50 年(首次发表后的第 50 年的 12 月 31 日)，若其间未发表，不保护</li></ul><h3 id="公民软件产品" tabindex="-1"><a class="header-anchor" href="#公民软件产品" aria-hidden="true">#</a> 公民软件产品</h3><ul><li><code>署名权、修改权</code> =&gt; 保护期限: 没有限制</li><li><code>发表权、复制权、发行权、出租权、信息网络传播权、翻译权、使用许可权、获得报酬权、转让权</code> =&gt; 保护期限: 作者终生及死后 50 年(第 50 年 12 月 31 日)。合作开发，以最后死亡作者为准。</li></ul><h3 id="单位软件产品" tabindex="-1"><a class="header-anchor" href="#单位软件产品" aria-hidden="true">#</a> 单位软件产品</h3><ul><li><code>发表权、复制权、发行权、出租权、信息网络传播权、翻译权、使用许可权、获得报酬权、转让权</code> =&gt; 保护期限: 50 年(首次发表后的第 50 年的 12 月 31 日)，若其间未发表，不保护</li></ul><h3 id="注册商标" tabindex="-1"><a class="header-anchor" href="#注册商标" aria-hidden="true">#</a> 注册商标</h3><ul><li>有效期 10 年(若注册人死亡或倒闭 1 年后，未转移则可注销，期满后 6 个月内必须续注)</li></ul><h3 id="发明专利" tabindex="-1"><a class="header-anchor" href="#发明专利" aria-hidden="true">#</a> 发明专利</h3><ul><li>保护期为 20 年(从申请日开始)</li></ul><h3 id="实用新型和外观设计专利权" tabindex="-1"><a class="header-anchor" href="#实用新型和外观设计专利权" aria-hidden="true">#</a> 实用新型和外观设计专利权</h3><ul><li>保护期为 20 年(从申请日开始)</li></ul><h3 id="商业秘密" tabindex="-1"><a class="header-anchor" href="#商业秘密" aria-hidden="true">#</a> 商业秘密</h3><ul><li>不确定, 公开后公众可用</li></ul><h2 id="脑残知识点" tabindex="-1"><a class="header-anchor" href="#脑残知识点" aria-hidden="true">#</a> 脑残知识点</h2><p>::: waring</p><p>这里的知识点都是非常偏的知识点, 作为了解即可</p><p>:::</p><h3 id="嵌入式实时操作系统" tabindex="-1"><a class="header-anchor" href="#嵌入式实时操作系统" aria-hidden="true">#</a> 嵌入式实时操作系统</h3><p>特点:<br> (1)微型化<br> (2)代码质量高<br> (3)专业化<br> (4)实时性强<br> (5)可裁减、可配置</p><ul><li>实时是指计算机对于外来信息能够以足够快的速度进行处理，并在<code>被控对象允许的时间范围内做出快速响应</code>。</li><li>实时操作系统（RTOS）内核与应用程序之间的接口称为<code>API</code>。</li><li>嵌入式软件设计需要考虑硬件无关性以保障软件良好的可移植性。</li><li>混成系统是通常由实时任务和回实时任务组成, 同时又要求实时任务满足时序约束。</li></ul><h3 id="鸿蒙操作系统" tabindex="-1"><a class="header-anchor" href="#鸿蒙操作系统" aria-hidden="true">#</a> 鸿蒙操作系统</h3><ul><li>HarmonyOS 是基于微内核的全场景分布式 OS。</li></ul><h3 id="人工智能" tabindex="-1"><a class="header-anchor" href="#人工智能" aria-hidden="true">#</a> 人工智能</h3><p>常用的 AI 芯片的技术架构</p><ul><li>图形处理单元(GPU)</li><li>现场可编程门阵列(FPGA)</li><li>专用集成电路(ASIC)</li><li>张量处理单元(TPU)</li></ul><h3 id="数据资产和数据管理能力" tabindex="-1"><a class="header-anchor" href="#数据资产和数据管理能力" aria-hidden="true">#</a> 数据资产和数据管理能力</h3><ul><li>数据资产的特征包括: 可增值或贬值、可共享、可控制、可量化、可变现</li><li>数据管理能力成熟度评估模型(DCMM)的 8 个能力域: 数据战略、数据治理、数据架构、数据标准、数据质量、数据安全、数据应用和数据生存周期</li></ul><h3 id="信息安全" tabindex="-1"><a class="header-anchor" href="#信息安全" aria-hidden="true">#</a> 信息安全</h3><ul><li>一个完整的信息安全系统至少三类措施: 技术方面的安全措施、管理方面的安全措施和相应的政策法律</li><li>信息安全的技术措施：技术方面的安全措施、管理方面的安全措施和相应的政策法律。信息安全的技术措施主要有：信息加密、数字签名、数据完整性保护、身份鉴别、访问控制、数据备份和灾难恢复、网络控制技术、反病毒技术、安全审计等。</li></ul><h3 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统" aria-hidden="true">#</a> 分布式系统</h3><ul><li>在分布式系统中, 中间件通常提供两种不同类型的支持, 即交付支持和提供公共服务</li></ul><h3 id="业务流程建模" tabindex="-1"><a class="header-anchor" href="#业务流程建模" aria-hidden="true">#</a> 业务流程建模</h3><p>六种业务流程建模方法分别是流程图、角色活动图和角色交互图、IDEF0 和 1DEF3、高级 Petri 网、统一建模语言活动图和 BPMN。</p>',171),h=[r];function t(c,o){return d(),i("div",null,h)}const s=e(l,[["render",t],["__file","basic-knowledge.html.vue"]]);export{s as default};
