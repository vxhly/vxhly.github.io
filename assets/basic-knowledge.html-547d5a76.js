import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as i,e as a}from"./app-eb30587d.js";const l={},c=a('<div class="hint-container tip"><p class="hint-container-title">前言</p><p>整理除去 <code>系统架构设计</code>、<code>软件工程</code>、<code>数据库</code> 章节的重点</p></div><h2 id="系统设计" tabindex="-1"><a class="header-anchor" href="#系统设计" aria-hidden="true">#</a> 系统设计</h2><blockquote><p>系统设计的主要内容包括<code>概要设计</code>和<code>详细设计</code>。概要设计又称为<code>系统总体结构设计</code>, 它是系统开发过程中很关键的一步, 其主要任务是将系统的功能需求分配给软件模块, 确定每个模块的功能和调用关系, 形成软件的模块结构图, 即系统结构图。在概要设计中, 将系统开发的总任务分解成许多个基本的、具体的任务。</p></blockquote><h3 id="流程设计工具" tabindex="-1"><a class="header-anchor" href="#流程设计工具" aria-hidden="true">#</a> 流程设计工具</h3><blockquote><p>常见的图形工具包括程序流程图、IPO 图、盒图、问题分析图、判定树, 表格工具包括判定表, 语言工具包括过程设计语言等。</p></blockquote><h4 id="程序流程图" tabindex="-1"><a class="header-anchor" href="#程序流程图" aria-hidden="true">#</a> 程序流程图</h4><p>程序流程图（Program Flow Diagram, PFD ） 用一些图框表示各种操作, 它<code>独立于任何一种程序设计语言</code>, 比较<code>直观、清晰, 易于学习掌握</code>。</p><h4 id="ipo-图" tabindex="-1"><a class="header-anchor" href="#ipo-图" aria-hidden="true">#</a> IPO 图</h4><p>IPO 图是由 IBM 公司发起并逐步完善的一种<code>流程描述工具</code>。</p><h4 id="n-s-图" tabindex="-1"><a class="header-anchor" href="#n-s-图" aria-hidden="true">#</a> N-S 图</h4><p>在 N-S 图中也包括 5 种控制结构, 分别是<code>顺序型、选择型、 WHILE 循环型（当型循环）、UNTIL 循环型（直到型循环）和多分支选择型</code></p><h3 id="面向对象设计" tabindex="-1"><a class="header-anchor" href="#面向对象设计" aria-hidden="true">#</a> 面向对象设计</h3><h4 id="设计类分类" tabindex="-1"><a class="header-anchor" href="#设计类分类" aria-hidden="true">#</a> 设计类分类</h4><ul><li><code>实体类</code>映射需求中的每个实体, 实体类保存需要存储在永久存储体中的信息</li><li><code>控制类</code>是用于控制用例工作的类, 一般是由动宾结构的短语（“动词+名词”或 “名 词+动词”）转化来的名词</li><li><code>边界类</code>用于封装在用例内、外流动的信息或数据流。边界类位于系统与外界的交界处, 包括所有窗体、报表、打印机和扫描仪等硬件的接口, 以及与其他系统的接口</li></ul><h4 id="面向对象设计原则" tabindex="-1"><a class="header-anchor" href="#面向对象设计原则" aria-hidden="true">#</a> 面向对象设计原则</h4><ul><li><code>开闭原则</code>: 开闭原则是指软件实体应对扩展开放, 而对修改关闭, 即尽量在不修改原有代码的情况下进行扩展</li><li><code>里氏替换原则</code>: 一个软件实体如果使用的是一个基类对象, 那么一定适用于其子类对象, 而且觉察不出基类对象和子类对象的区别, 即把基类都替换成它的子类, 程序的行为没有变化</li><li><code>依赖倒置原则</code>: 依赖倒置原则是指抽象不应该依赖于细节, 细节应当依赖于抽象。</li><li><code>组合/聚合复用原则</code>: 是在一个新的对象中通过组合关系或聚合关系来使用一些已有的对象, 使之成为新对象的一部分, 新对象通过委派调用已有对象的方法达到复用其已有功能的目的。简单地说, 就是要尽量使用组合/聚合关系, 少用继承。</li><li><code>接口隔离原则</code>: 接口隔离原则是指使用多个专门的接口 , 而不使用单一的总接口。</li><li><code>最少知识原则</code>: 最少知识原则也称为迪米特法则（Law of Demeter）, 是指一个软件实体应当尽可能少地与其他实体发生相互作用。</li></ul><h3 id="结构化设计" tabindex="-1"><a class="header-anchor" href="#结构化设计" aria-hidden="true">#</a> 结构化设计</h3><ul><li>结构化设计方法的基本思想是将软件设计成<code>由相对独立且具有单一功能的模块组成的结构</code>, 分为<code>概要设计</code>和<code>详细设计</code>两个阶段</li><li><code>概要设计</code>的主要任务是确定软件系统的结构, 对系统进行模块划分, 确定每个模块的功能、接口和模块之间的调用关系</li><li><code>详细设计</code>的主要任务是为每个模块设计实现的细节。</li></ul><h4 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h4><p>在模块划分时需要遵循如下原则：</p><p>(1) 模块的大小要适中。<br> (2) 模块的扇入和扇出要合理。<br> (3) 深度和宽度适当。</p><h4 id="系统结构图" tabindex="-1"><a class="header-anchor" href="#系统结构图" aria-hidden="true">#</a> 系统结构图</h4><blockquote><p>系统结构图（Structure Chart, SC） 又称为模块结构图, 它是软件概要设计阶段的工具, 反映系统的功能实现和模块之间的联系与通信</p></blockquote><p>SC 包括<code>模块、模块之间的调用关系、模块之间的通信和辅助控制符号</code>等 4 个部分。</p><h2 id="计算机原理" tabindex="-1"><a class="header-anchor" href="#计算机原理" aria-hidden="true">#</a> 计算机原理</h2><h3 id="实时操作系统" tabindex="-1"><a class="header-anchor" href="#实时操作系统" aria-hidden="true">#</a> 实时操作系统</h3><ul><li>实时是指计算机对于外来信息能够以足够快的速度进行处理, 并在被控对象允许的时间范围内做出快速响应。</li></ul><h3 id="指令系统" tabindex="-1"><a class="header-anchor" href="#指令系统" aria-hidden="true">#</a> 指令系统</h3><ul><li>指令系统是计算机硬件的语言系统, 是机器所具有的全部指令的集合, 反映了计算机所拥有的基本功能。</li></ul><h3 id="指令系统特点" tabindex="-1"><a class="header-anchor" href="#指令系统特点" aria-hidden="true">#</a> 指令系统特点</h3><table><thead><tr><th>名称</th><th>指令要求</th><th>寻址方式</th><th>实现方式</th><th>编译</th></tr></thead><tbody><tr><td>复杂指令系统 CISC</td><td>指令数量众多, 使用频率相差悬殊.可变长指令格式</td><td>多种寻址方式</td><td>与主存直接交互.微程序控制</td><td>编译复杂</td></tr><tr><td>精简指令系统 RISC</td><td>指令数量少, 长度固定</td><td>寻址方式少</td><td>硬布线逻辑控制.流水线技术.与寄存器交互.</td><td>优化的编辑器</td></tr></tbody></table><h3 id="计算机存储" tabindex="-1"><a class="header-anchor" href="#计算机存储" aria-hidden="true">#</a> 计算机存储</h3><ul><li>存储速度从快到慢分别是：<code>寄存器组(CPU)、Cache、内存、Flash</code>。</li><li>接近 CPU 的存储器容量更小、速度更快、成本更高, 辅存容量更大、速度更慢、成本更低。</li><li>采用分级存储体系的目的是解决存储的容量、价格和速度之间的矛盾。</li><li>不能转换对应的物理地址原因是逻辑地址到物理地址转换时地址越界。</li><li><code>段页式存储管理</code>方式即先将用户程序分成若干个段, 再把每个段分成若干个页, 并为每一个段赋予一个段名, 使用段页表来进行管理。</li></ul><h2 id="信息系统基础知识" tabindex="-1"><a class="header-anchor" href="#信息系统基础知识" aria-hidden="true">#</a> 信息系统基础知识</h2><ul><li>数据作为资产需要具有以下特性<code>可控制、可量化、可变现</code>。所以数据资产一般具备<code>虚拟性、共享性、时效性、安全性、交换性和规模性</code>。</li><li>企业数字化转型的五个发展阶段依次是<code>初始级发展阶段、单元级发展阶段、流程级发展阶段、网络级发展险段、生态级发展阶段</code></li><li>组织信息化的需要包含了实现<code>战略目标、运作策略和人才培养</code>等三个方面</li></ul><h3 id="电子政务" tabindex="-1"><a class="header-anchor" href="#电子政务" aria-hidden="true">#</a> 电子政务</h3><ul><li><code>G2B</code>: 政府对企业 =&gt; 包括政策环境、营业执照等颁发</li><li><code>G2C</code>: 政府对公民 =&gt; 包括公共安全信息、证件管理等服务</li><li><code>G2E</code>: 政府对公务员 =&gt; 包括政府内部电子化管理</li><li><code>G2G</code>: 政府对政府 =&gt; 包括基础信息采集、处理和利用, 政府间通信和决策支持</li><li><code>B2G</code>: 企业对政府 =&gt; 包括企业纳税和为政府提供服务</li><li><code>C2G</code>: 公民对政府 =&gt; 包括居民参政议政和报警服务</li></ul><h3 id="企业信息化集成" tabindex="-1"><a class="header-anchor" href="#企业信息化集成" aria-hidden="true">#</a> 企业信息化集成</h3><ul><li><code>信息集成服务实</code>现不同数据库系统之间的数据交换、互操作、分布数据管理和共享信息模型定义。</li><li><code>应用集成服务</code>能够为应用提供数据交换和访问操作, 使各种不同的系统能够相互协作</li><li><code>业务过程集成</code>实现了不同应用系统之间的连接、协调运作和信息共享。</li></ul><h2 id="系统配置与性能评价" tabindex="-1"><a class="header-anchor" href="#系统配置与性能评价" aria-hidden="true">#</a> 系统配置与性能评价</h2><ul><li>系统性能度量指标有 <code>可靠性、可用性、可测试性和可理解性</code></li><li>常用的可靠性度量指标主要有 <code>故障率（或失效率）、平均失效等待时间、平均失效间隔时间和可靠度</code></li><li><code>可靠性</code>是指在规定的时间内和规定条件下能有效地实现规定功能的能力。强调软件系统在应用或系统错误面前, 在意外或错误使用的情况下维持系统的功能特性。</li><li><code>可用性</code>是系统能够正常运行的时间比例。经常用两次故障之间的时间长度或在出现故障时系统能够恢复正常的速度来表示。</li><li><code>可测试性</code>是指验证软件程序正确性的难易程度。</li><li><code>可理解性</code>是指通过阅读源代码和相关文档, 了解程序功能及运行过程的容易程度。</li><li>常见的 Web 服务器性能评测方法有<code>基准性能测试、压力测试和可靠性测试</code>。</li><li>性能评价方法: <code>真实程序&gt;核心程序&gt;小型基准程序&gt;合成基准程序</code></li><li>在 Web 服务器的测试中, 反映其性能的指标主要有<code>最大并发连接数、响应延迟和吞吐量</code>等</li><li>路由器的主要性能指标包括<code>设备吞吐量、丢包率、内部时钟精度</code>等</li><li>交换机的主要性能指标包括<code>缓冲区大小、VLAN 数量、负载均衡</code>等</li><li>数据库系统的主要性能指标包括<code>CPU／内存使用状况、优化数据库设计、优化数据库管理以及进程/线程状态、硬盘剩余空间、日志文件大小、最大的连接数</code>等</li><li>应用系统的主要性能指标包括<code>应用系统的可用性、响应时间、并发用户数以及特定应用的系统资源占用、数据处理速率</code>等</li><li><code>等效指令速度法</code>：也称为吉普森混合法（Gibson mix）或混合比例计算法, 是通过各类指令在程序中所占的比例（Wi）进行计算得到的。</li><li><code>基准程序法</code>：把应用程序中用得最多、最频繁的那部分核心程序作为评估计算机系统性能的标准程序, 称为基准测试程序（benchmark）。基准程序法不但考虑到了 CPU（有时包括主存）的性能, 还将 I/O 结构、操作系统、编译程序的效率等对系统性能的影响考虑进来了, 所以它是目前一致承认的测试系统性能的较好方法。</li></ul><h2 id="法律法规" tabindex="-1"><a class="header-anchor" href="#法律法规" aria-hidden="true">#</a> 法律法规</h2><h3 id="专利许可" tabindex="-1"><a class="header-anchor" href="#专利许可" aria-hidden="true">#</a> 专利许可</h3><ul><li>专利实施许可分为<code>独占实施许可、排他实施许可和普通实施许</code>可三类, 不同的许可类型决定了许可使用的范围、被许可人的人数以及诉讼权利的不同。</li></ul><h3 id="软件著作权" tabindex="-1"><a class="header-anchor" href="#软件著作权" aria-hidden="true">#</a> 软件著作权</h3><ul><li>软件著作权中规定开发软件所用的<code>思想、处理过程、操作方法或者数学概念</code>不受保护。</li><li>改编、翻译、注释、整理已有作品而产生的作品, 其著作权由改编、翻译、注释、整理人享有, 但行使著作权时不得侵犯原作品的著作权。</li><li>著作权因作品的完成而自动产生, 不必履行任何形式的登记或注册手续, 也不论其是否已经发表。</li><li>著作权包括著作人身权和著作财产权, 其中著作人身权包括发表权、署名权、修改权、保护作品完整权。著作财产权包括复制权、发行权、出租权、展览权、表演权、放映权、广播权、改编权、翻译权、汇编权以及其他权利。</li><li>委托创作中, 著作权的归属由委托人与受托人签订书面合同约定。无书面合同或者合同未作明确约定的, 其著作权由受托人享有。</li></ul><h3 id="公民作品" tabindex="-1"><a class="header-anchor" href="#公民作品" aria-hidden="true">#</a> 公民作品</h3><ul><li><code>署名权、修改权、保护作品完整权</code> =&gt; 保护期限: 没有限制</li><li><code>发表权、使用权、获取报酬权</code> =&gt; 保护期限: 作者终生及其死亡后的 50 年(第 50 年的 12 月 31 日)</li></ul><h3 id="单位作品" tabindex="-1"><a class="header-anchor" href="#单位作品" aria-hidden="true">#</a> 单位作品</h3><ul><li><code>发表权、使用权、获取报酬权</code> =&gt; 保护期限: 50 年(首次发表后的第 50 年的 12 月 31 日), 若其间未发表, 不保护</li></ul><h3 id="公民软件产品" tabindex="-1"><a class="header-anchor" href="#公民软件产品" aria-hidden="true">#</a> 公民软件产品</h3><ul><li><code>署名权、修改权</code> =&gt; 保护期限: 没有限制</li><li><code>发表权、复制权、发行权、出租权、信息网络传播权、翻译权、使用许可权、获得报酬权、转让权</code> =&gt; 保护期限: 作者终生及死后 50 年(第 50 年 12 月 31 日)。合作开发, 以最后死亡作者为准。</li></ul><h3 id="单位软件产品" tabindex="-1"><a class="header-anchor" href="#单位软件产品" aria-hidden="true">#</a> 单位软件产品</h3><ul><li><code>发表权、复制权、发行权、出租权、信息网络传播权、翻译权、使用许可权、获得报酬权、转让权</code> =&gt; 保护期限: 50 年(首次发表后的第 50 年的 12 月 31 日), 若其间未发表, 不保护</li></ul><h3 id="注册商标" tabindex="-1"><a class="header-anchor" href="#注册商标" aria-hidden="true">#</a> 注册商标</h3><ul><li>有效期 10 年(若注册人死亡或倒闭 1 年后, 未转移则可注销, 期满后 6 个月内必须续注)</li></ul><h3 id="发明专利" tabindex="-1"><a class="header-anchor" href="#发明专利" aria-hidden="true">#</a> 发明专利</h3><ul><li>保护期为 20 年(从申请日开始)</li></ul><h3 id="实用新型和外观设计专利权" tabindex="-1"><a class="header-anchor" href="#实用新型和外观设计专利权" aria-hidden="true">#</a> 实用新型和外观设计专利权</h3><ul><li>保护期为 20 年(从申请日开始)</li></ul><h3 id="商业秘密" tabindex="-1"><a class="header-anchor" href="#商业秘密" aria-hidden="true">#</a> 商业秘密</h3><ul><li>不确定, 公开后公众可用</li></ul><h2 id="企业资源规划-erp" tabindex="-1"><a class="header-anchor" href="#企业资源规划-erp" aria-hidden="true">#</a> 企业资源规划 ERP</h2><ul><li>企业生产管理中的四个计划<code>生产计划大纲、主生产计划、物料需求计划和能力需求计划, 以及车间作业计划</code><ul><li><code>主生产计划</code>是 ERP 的主要工作内容</li><li><code>物料需求计划</code>是生产管理的核心</li><li><code>能力需求计划</code>是为实现企业的生产任务而提供能力方面的保障</li><li><code>车间作业计划</code>属于 ERP 执行层计划</li></ul></li><li>ERP 中的企业资源包括企业的“三流”资源, 即<code>物流资源、资金流资源和信息流资源</code>。</li><li>采购管理模块是对采购工作——从采购订单产生至货物收到的全过程进行组织、实施与控制</li><li>库存管理模块则是对<code>企业物料的进、出、存进行管理</code>。</li></ul><h2 id="商业智能系统" tabindex="-1"><a class="header-anchor" href="#商业智能系统" aria-hidden="true">#</a> 商业智能系统</h2><ul><li>在商业智能系统中, <code>数据预处理、建立数据仓库、数据分析和数据展现</code>是四个主要阶段, 其核心是<code>建立数据仓库</code>。 <ul><li><code>数据预处理</code>包括 ETL（抽取, 转换, 加载）过程</li><li><code>建立数据仓库</code>是处理海量数据的基础</li><li><code>数据分析</code>采用联机分析（OLAP）处理和数据挖掘技术, 数据展现保障系统分析结果的可视化。</li></ul></li></ul><h2 id="电子商务" tabindex="-1"><a class="header-anchor" href="#电子商务" aria-hidden="true">#</a> 电子商务</h2><ul><li>参与电子商务的实体有 4 类<code>顾客、商户、银行及认证中心</code>。</li></ul><h2 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h2><h3 id="ssl-协议" tabindex="-1"><a class="header-anchor" href="#ssl-协议" aria-hidden="true">#</a> SSL 协议</h3><p>① 保密性：在握手协议中定义了会话密钥后, 所有的消息都被加密;<br> ② 可靠性：可选的客户端认证, 和强制的服务器端认证;<br> ③ 完整性：传送的消息包括消息完整性检查（使用 MAC）。不包括不可抵赖性。不可抵赖性由数字签名保证</p><h3 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp" aria-hidden="true">#</a> DHCP</h3><ul><li><code>DhcpOffer</code>是 DHCP 协议交互过程中, 由 DHCP 服务器发送给 DHCP 客户端的报文, 用于通知客户端分配的 IP 地址、网关、DNS 服务器地址等配置信息。</li></ul><h2 id="信息安全" tabindex="-1"><a class="header-anchor" href="#信息安全" aria-hidden="true">#</a> 信息安全</h2><ul><li>一个完整的信息安全系统包括三类措施<code>技术方面的安全措施</code>、<code>管理方面的安全措施</code>和<code>政策法律方面的安全措施</code>。 <ul><li><code>技术措施</code>包括信息加密、数字签名、身份鉴别、访问控制、网络控制技术、反病毒技术、数据备份和灾难恢复等方面</li><li><code>安全管理</code>方面应设立专门机构和人员, 逐步完善管理制度和提供安全技术设施</li><li><code>信息安全管理</code>主要涉及人事管理、设备管理、场地管理、存储媒体管理、软件管理、网络管理、密码和密钥管理等方面</li></ul></li></ul><h2 id="网络安全" tabindex="-1"><a class="header-anchor" href="#网络安全" aria-hidden="true">#</a> 网络安全</h2><ul><li>被动攻击是旨在获取信息而不改变系统或数据的攻击方式, 如<code>窃听和流量分析</code></li><li>主动攻击可能会修改信息或危害系统完整性和可用性, 如<code>篡改、伪装、重放和拒绝服务攻击</code></li><li>物理攻击是指攻击者直接接触到系统硬件、软件和周边环境设备, 通过破坏使系统无法工作, 甚至无法恢复数据和程序</li><li>分发攻击则是在软硬件开发后到安装期间或传输过程中恶意修改, 可能引入后门程序等恶意代码, 以非授权方式访问信息或系统</li></ul><h2 id="遗留系统" tabindex="-1"><a class="header-anchor" href="#遗留系统" aria-hidden="true">#</a> 遗留系统</h2><ul><li>高水平、低价值 =&gt; 集成</li><li>高水平、高价值 =&gt; 改造</li><li>低水平、低价值 =&gt; 淘汰</li><li>低水平、高价值 =&gt; 继承</li></ul>',79),h=[c];function o(r,t){return d(),i("div",null,h)}const s=e(l,[["render",o],["__file","basic-knowledge.html.vue"]]);export{s as default};