import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as i,e as a}from"./app-96c37d09.js";const l={},c=a('<div class="hint-container tip"><p class="hint-container-title">前言</p><p>整理 <code>系统架构设计</code> 章节的重点</p></div><h2 id="软件架构设计" tabindex="-1"><a class="header-anchor" href="#软件架构设计" aria-hidden="true">#</a> 软件架构设计</h2><ul><li>软件架构是降低成本、改进质量、按时和按需交付产品的关键因素, 软件架构设计需要满足系统的<code>质量属性</code>, 如性能、安全性和可修改性等。</li><li>架构描述语言（Architecture Description Language, ADL）是一种为明确说明软件系统的概念架构和对这些概念架构建模提供功能的语言。ADL 主要包括以下组成部分：<code>组件、组件接口、连接件和架构配置</code>。</li><li>软件系统架构不仅指定了软件系统的<code>组织和拓扑</code>结构, 而且显示了<code>系统需求和组件</code>之间的对应关系, 包括设计决策和基本方法、基本原理</li><li>软件架构设计包括<code>提出架构模型、产生架构设计和进行设计评审</code>等活动，是一个<code>迭代</code>的过程。架构设计主要关注软件组件的<code>结构、属性和交互作用</code>，并通过多种<code>视图</code>全面描述特定系统的架构。</li><li>软件架构能够在设计变更相对容易的阶段，考虑系统结构的可选方案，便于技术人员与非技术人员就软件设计进行交互，能够展现软件的结构、属性与内部交互关系。</li></ul><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><ul><li>需求分析阶段</li><li>设计阶段</li><li>实现阶段</li><li>构件组装阶段</li><li>部署阶段</li><li>后开发阶段</li></ul><h2 id="软件架构的重要性" tabindex="-1"><a class="header-anchor" href="#软件架构的重要性" aria-hidden="true">#</a> 软件架构的重要性</h2><blockquote><p>软件架构设计是<code>降低成本、改进质量、按时和按需交付产品</code>的关键因素</p></blockquote><p>八大重要性:</p><ul><li>架构设计能够满足系统的品质</li><li>架构设计使受益人达成一致的目标</li><li>架构设计能够支持计划编制过程</li><li>架构设计对系统开发的指导性</li><li>架构设计能够有效地管理复杂性</li><li>架构设计为复用奠定了基础</li><li>架构设计能够降低维护费用</li><li>架构设计能够支持冲突分析</li></ul><h3 id="_4-1-视图" tabindex="-1"><a class="header-anchor" href="#_4-1-视图" aria-hidden="true">#</a> &#39;4+1&#39; 视图</h3><blockquote><p>多视图指从不同角度和视角描述系统体系结构，以获得多个视图，并将其组合在一起以描述整体模型。多视图反映了<code>关注点分离</code>的思想，每个视图只关注系统的一个侧面。</p></blockquote><p>①<code>逻辑视图</code>(Logical View)，设计的对象模型(使用面向对象的设计方法时)。<br> ②<code>过程视图</code>(Process View)，捕捉设计的并发和同步特征。<br> ③<code>物理视图</code>(Physical View)，描述了软件到硬件的映射，反映了分布式特性。<br> ④<code>开发视图</code>(Development View)，描述了在开发环境中软件的静态组织结构。<br> ⑤<code>架构的描述</code>，即所做的各种决定，可以围绕着这四个视图来组织，然后由一些<code>用例视图(Use Case View)</code>或<code>统一场景(Scenarios)</code>来说明，从而形成了第五个视图。</p><h2 id="基于架构的软件开发方法-absd" tabindex="-1"><a class="header-anchor" href="#基于架构的软件开发方法-absd" aria-hidden="true">#</a> 基于架构的软件开发方法 ABSD</h2><ul><li>ABSD 方法是体系结构驱动，是指构成体系结构的<code>商业、质量和功能需求</code>的组合驱动的。</li><li>ABSD 采用<code>视角和视图</code>来描述软件架构，采用<code>用例和质量属性</code>场景来描述需求。进一步来说，<code>用例</code>描述的是功能需求，<code>质量属性场景</code>描述的是质量需求(或侧重于非功能需求)。</li><li>ABSD 是一个<code>自顶向下，递归细化</code>的方法，软件系统的体系结构通过该方法得到细化，直到能产生<code>软件构件和类</code>。</li><li>ABSD 把整个基于架构的软件过程划分为<code>架构需求、设计、文档化、复审、实现、演化</code>等 6 个子过程。</li><li>体系结构需求一般来自 3 个方面，分别是<code>系统的质量目标、系统的商业目标和系统开发人员的商业目标</code>。</li></ul><h2 id="特定领域软件体系结构-dssa" tabindex="-1"><a class="header-anchor" href="#特定领域软件体系结构-dssa" aria-hidden="true">#</a> 特定领域软件体系结构 DSSA</h2><ul><li><code>垂直域</code>：定义了一个特定的系统族，包含整个系统族内的多个系统，结果是在该领域中可作为系统的可行解决方案的一个通用软件体系结构。只能应用于一个成熟的、稳定的领域。</li><li><code>水平域</code>：定义了在多个系统和多个系统族中功能区城的共有部分。在子系统级上涵盖多个系统族的特定部分功能。</li><li>DSSA 通常是一个具有三个层次的系统模型，包括<code>领域开发环境、领域特定应用开发环境和应用执行环境</code>，其中<code>领域架构师</code>在领域开发环境工作，<code>应用工程师</code>在领域特定的应用开发环境工作，<code>操作员</code>在应用执行环境工作</li><li>DSSA 以一个特定问题领域为对象，形成由<code>领域参考模型、参考需求、参考架构</code>等组成的开发基础架构</li></ul><h3 id="dssa-基本活动" tabindex="-1"><a class="header-anchor" href="#dssa-基本活动" aria-hidden="true">#</a> DSSA 基本活动</h3><ul><li><code>领域分析</code><ul><li>目标是获得<code>领域模型</code>，描述领域中系统的共同需求。</li></ul></li><li><code>领域设计</code><ul><li>目标是获得 <code>DSSA（Domain-Specific SoftwareArchitecture）</code>。</li></ul></li><li><code>领域实现</code><ul><li>目标是<code>开发和组织可重用信息</code></li></ul></li></ul><h3 id="dssa-参与人员" tabindex="-1"><a class="header-anchor" href="#dssa-参与人员" aria-hidden="true">#</a> DSSA 参与人员</h3><ul><li><code>领域专家</code><ul><li>包括该领域系统的资深用户、从事需求分析、设计、实现及项目管理的软件工程师</li></ul></li><li><code>领域分析人员</code><ul><li>由具备知识工程背景的资深系统分析员担任</li></ul></li><li><code>领域设计人员</code><ul><li>由资深软件设计人员担任</li></ul></li><li><code>领域实现人员</code><ul><li>由资深程序设计人员担任</li></ul></li></ul><h3 id="dssa-建立过程的阶段" tabindex="-1"><a class="header-anchor" href="#dssa-建立过程的阶段" aria-hidden="true">#</a> DSSA 建立过程的阶段</h3><ul><li><code>定义领域范围</code><ul><li>重点确定感兴趣领域的范围及过程终止时间</li></ul></li><li><code>定义领域特定的元素</code><ul><li>目标是编制领域词典和术语同义词词典</li></ul></li><li><code>定义领域特定的设计和实现需求约束</code><ul><li>目标是描述解空间中的差异特性</li></ul></li><li><code>定义领域模型和体系结构</code><ul><li>目标是产生一般体系结构模型</li></ul></li><li><code>产生、搜集可重用的产品单元</code><ul><li>目标是为领域特定软件架构增加可重用构件</li></ul></li></ul><h3 id="体系结构演化" tabindex="-1"><a class="header-anchor" href="#体系结构演化" aria-hidden="true">#</a> 体系结构演化</h3><p>体系结构演化 6 个步骤</p><ul><li>需求变化归类</li><li>制订体系结构演化计划</li><li>修改</li><li>增加或删除构件</li><li>更新构件的相互作用</li><li>构件组装与测试和技术评审</li></ul><h2 id="基于场景的架构评估方法-saam" tabindex="-1"><a class="header-anchor" href="#基于场景的架构评估方法-saam" aria-hidden="true">#</a> 基于场景的架构评估方法（SAAM）</h2><ul><li>在进行体系结构评估时，需要使用<code>场景</code>对于质量目标进行判断，以判定体系结构的优劣。</li><li>场景是从<code>风险承担者</code>的角度对系统交互的简短描述。</li><li>在体系结构评估中，通常采用<code>刺激、环境和响应</code>三个方面对场景进行描述。</li></ul><h2 id="软件架构风格" tabindex="-1"><a class="header-anchor" href="#软件架构风格" aria-hidden="true">#</a> 软件架构风格</h2><p>概念:</p><p>软件架构风格是描述某一特定应用领域中系统组织方式的惯用模式。一个体系结构定义了<code>一个词汇表和一组约束</code>。架构风格反映领域中众多系统所共有的<code>结构和语义特征</code>。</p><p>架构的本质:</p><ul><li>架构风格反映领域中众多系统说共有的<code>结构和语义</code>特性, 强调对架构<code>设计</code>的重用</li><li>架构风格定义了用于描述系统的术语表和一组指导构建系统的规则。</li><li>软件架构为软件系统提供了一个<code>结构、行为和属性</code>的高级抽象。</li></ul><p>架构的作用:</p><ul><li>软件架构是项目干系人进行交流的手段。</li><li>软件架构是可传递和可复用的模型，通过研究软件架构可能预测软件的质量。</li><li>软件架构使推理和控制的更改更加简单，有助于循序渐进的原型设计，可以作为培训的基础。</li></ul><h3 id="数据流体系结构风格" tabindex="-1"><a class="header-anchor" href="#数据流体系结构风格" aria-hidden="true">#</a> 数据流体系结构风格</h3><h4 id="批处理体系结构风格" tabindex="-1"><a class="header-anchor" href="#批处理体系结构风格" aria-hidden="true">#</a> 批处理体系结构风格</h4><p>概念: 每个处理步骤是一个单独的程序，每一步必须在前一步结束后才能开始，并且数据必须是完整的，以整体的方式传递。它的基本构件是独立的应用程序，连接件是某种类型的媒介。</p><h4 id="管道-过滤器体系结构风格" tabindex="-1"><a class="header-anchor" href="#管道-过滤器体系结构风格" aria-hidden="true">#</a> 管道-过滤器体系结构风格</h4><p>概念: 把系统分解为几个处理步骤，这些步骤之间通过数据流连接，一个步骤的输出是另一个步骤的输入。每个处理步骤由一个过滤器实现，处理步骤之间的数据传输由管道负责。每个处理步骤（过滤器）都有一组输入和输出，过滤器从管道中读取输入的数据流，经过内部处理，然后产生输出数据流并写入管道中。基本构件是过滤器，连接件是数据流传输管道。</p><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1.简单性;2.支持复用;3.便于系统分析</td><td>1.不适合用来设计交互式应用系统;2.由于没有通用的数据传输标准，因此每个过滤器都需要解析输入数据和合成数据;3.难以进行错误处理。</td></tr></tbody></table><h3 id="调用-返回体系结构风格" tabindex="-1"><a class="header-anchor" href="#调用-返回体系结构风格" aria-hidden="true">#</a> 调用/返回体系结构风格</h3><h4 id="主程序-子程序风格" tabindex="-1"><a class="header-anchor" href="#主程序-子程序风格" aria-hidden="true">#</a> 主程序/子程序风格</h4><p>概念: 主程序/子程序风格一般采用单线程控制，把问题划分为若干处理步骤，构件即为主程序和子程序。子程序通常可合成为模块。过程调用作为交互机制，即充当连接件。调用关系具有层次性，其语义逻辑表现为子程序的正确性取决于它调用的子程序的正确性。</p><h4 id="面向对象体系结构风格" tabindex="-1"><a class="header-anchor" href="#面向对象体系结构风格" aria-hidden="true">#</a> 面向对象体系结构风格</h4><p>概念: 面向对象系统风格建立在数据抽象和面向对象的基础上，数据的表示方法和它们的相应操作封装在一个抽象数据类型或对象中。这种风格的构件是对象。</p><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1.一个对象对外隐藏了自己的详细信息;2.对象将数据和操作封装在一起;3.继承和封装方法为对象服用提供了技术支持</td><td>如果一个对象要调用另一个对象，则必须知道它的标识和名称</td></tr></tbody></table><h4 id="层次型体系结构风格" tabindex="-1"><a class="header-anchor" href="#层次型体系结构风格" aria-hidden="true">#</a> 层次型体系结构风格</h4><p>概念: 层次系统组成一个层次结构，每一层为上层提供服务，并作为下层的客户。这样的系统中构件在层上实现了虚拟机。连接件由通过层间交互协议来定义，拓扑约束包括对相邻层间交互的约束。每一层最多只影响两层，同时只要给相邻层提供相同的接口，允许每层用不同的方法实现，为软件重用提供了强大的支持。</p><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1.设计者可以将系统分解为一个增量的步骤序列从而完成复杂的业务逻辑;2.每一层最多和相邻的上下两层进行交互，只给相邻层提供相同的接口。</td><td>1.并非所有系统都能够按照层次来进行划分。2.很难找到一种合适和正确的层次划分方法。3.传输数据需要经过多个层次。4.多层结构难以调试。</td></tr></tbody></table><h4 id="客户端-服务器体系结构风格" tabindex="-1"><a class="header-anchor" href="#客户端-服务器体系结构风格" aria-hidden="true">#</a> 客户端/服务器体系结构风格</h4><p>概念: 客户端/服务器体系结构风格是基于资源不对等，且为实现共享而提出的。两层 C/S 体系结构有 3 个主要组成部分：数据库服务器、客户应用程序和网络。三层 C/S 结构增加了一个应用服务器。整个应用逻辑驻留在应用服务器上。应用功能分为表示层、功能层和数据层三层。</p><ul><li><code>表示层</code>作为用户接口，用于输入和输出数据。</li><li><code>功能层</code>是应用的核心，负责具体业务处理逻辑。</li><li><code>数据层</code>是数据库管理系统，负责管理数据读写。</li></ul><h3 id="以数据为中心的体系结构风格" tabindex="-1"><a class="header-anchor" href="#以数据为中心的体系结构风格" aria-hidden="true">#</a> 以数据为中心的体系结构风格</h3><h4 id="仓库体系结构风格" tabindex="-1"><a class="header-anchor" href="#仓库体系结构风格" aria-hidden="true">#</a> 仓库体系结构风格</h4><p>概念: 仓库是存储和维护数据的中心场所。两种不同的构件：中央数据结构说明当前数据的状态以及一组对中央数据进行操作的独立构件，仓库与独立构件间的相互作用在系统中会有大的变化。连接件即为仓库与独立构件之间的交互。</p><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1.便于多客户共享大量数据,而不必关心数据是何时产生的、由谁提供的及通过何种途径来提供。</td><td>1.对共享数据结构，不同知识源要达成一致; 2.需要同步机制和加锁机制来保证数据的完整性和一致性，增大了系统设计的复杂度</td></tr></tbody></table><h4 id="黑板体系结构风格" tabindex="-1"><a class="header-anchor" href="#黑板体系结构风格" aria-hidden="true">#</a> 黑板体系结构风格</h4><p>概念: 黑板系统是一种问题求解模型。它将问题的解空间组织成一个或多个应用相关的分级结构。分级结构的每一层信息由一个唯一的词汇来描述，它代表了问题的部分解。</p><h3 id="虚拟机体系结构风格" tabindex="-1"><a class="header-anchor" href="#虚拟机体系结构风格" aria-hidden="true">#</a> 虚拟机体系结构风格</h3><h4 id="解释器体系结构风格" tabindex="-1"><a class="header-anchor" href="#解释器体系结构风格" aria-hidden="true">#</a> 解释器体系结构风格</h4><p>概念: 一个解释器包括（1）完成解释工作的解释引擎（2）一个包含将被解释的代码的存储区（3）一个记录解释引擎当前工作状态的数据结构（4）一个记录源代码被解释执行进度的数据结构。解释器缺点是执行效率较低。</p><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1.可移植性好</td><td>1.由于使用了特定了语言和自定义操作规则，因此增加了系统运行的开销;2.解释器系统难以设计和测试。</td></tr></tbody></table><h4 id="规则系统体系结构风格" tabindex="-1"><a class="header-anchor" href="#规则系统体系结构风格" aria-hidden="true">#</a> 规则系统体系结构风格</h4><p>概念: 基于规则的系统包括规则集、规则解释器、规则/数据选择器及工作内存。</p><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1.规则数据可以动态改变，灵活性好;2.定义新的规则，即可扩展</td><td>1.实时解释规则、性能较差</td></tr></tbody></table><h3 id="独立构件体系结构风格" tabindex="-1"><a class="header-anchor" href="#独立构件体系结构风格" aria-hidden="true">#</a> 独立构件体系结构风格</h3><h4 id="进程通信体系结构风格" tabindex="-1"><a class="header-anchor" href="#进程通信体系结构风格" aria-hidden="true">#</a> 进程通信体系结构风格</h4><p>概念: 在进程通信结构体系结构风格中，构件是独立的过程，连接件是消息传递。这种风格的特点是构件通常是命名过程，消息传递的方式可以是点到点、异步或同步方式及远程过程调用等。</p><h4 id="事件系统体系结构风格" tabindex="-1"><a class="header-anchor" href="#事件系统体系结构风格" aria-hidden="true">#</a> 事件系统体系结构风格</h4><p>概念: 基于事件的隐式调用风格的思想是构件不直接调用一个过程，而是触发或广播一个或多个事件。系统中的其他构件中的过程在一个或多个事件中注册，当一个事件被触发，系统自动调用在这个事件中注册的所有过程。</p><table><thead><tr><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>1.事件发布者不需要知道哪些构件会响应事件</td><td>1.构件放弃了对计算的控制权，完全由系统来决定;2.存在数据传输问题</td></tr></tbody></table><h3 id="c2" tabindex="-1"><a class="header-anchor" href="#c2" aria-hidden="true">#</a> C2</h3><p>概念: C2 体系结构风格可以概括为通过连接件绑定在一起按照一组规则运作的并行构件网络。</p><ul><li>（1）构件和连接件都有顶部和底部。</li><li>（2）构件的顶部连接到连接件的底部,构件的底部连接到连接件的顶部,构件之间不允许直接连接。</li><li>（3）连接件可以连接任意数量的构件和其他连接件。</li><li>（4）当两个连接件直接相连时，必须一个的底部连接到另一个的顶部。</li></ul><h3 id="闭环控制架构-过程控制" tabindex="-1"><a class="header-anchor" href="#闭环控制架构-过程控制" aria-hidden="true">#</a> 闭环控制架构 - 过程控制</h3><p>概念: 软件与硬件之间可以粗略地表示为一个反馈循环，这个反馈循环通过接受一定的输入，确定一系列的输出，最终使环境达到一个新的状态。</p><h2 id="软件架构复用" tabindex="-1"><a class="header-anchor" href="#软件架构复用" aria-hidden="true">#</a> 软件架构复用</h2><blockquote><p>软件架构复用的类型包括<code>机会复用</code>和<code>系统复用</code>。</p></blockquote><ul><li><code>机会复用</code>是指开发过程中，只要发现有可复用的资产，就对其进行复用。</li><li><code>系统复用</code>是指在开发之前，就要进行规划，以决定哪些需要复用。</li></ul><p>软件架构复用的三个阶段</p><ul><li>构造/获取可复用的软件资产。</li><li>管理可复用资产。</li><li>使用可复用资产。</li></ul><h2 id="软件系统质量属性" tabindex="-1"><a class="header-anchor" href="#软件系统质量属性" aria-hidden="true">#</a> 软件系统质量属性</h2><ul><li>通过信息隐蔽可以提高软件的<code>可修改性、可测试性和可移植性</code>，它也是现代软件设计的一个关键性原则</li></ul><h3 id="开发期质量属性-6-个" tabindex="-1"><a class="header-anchor" href="#开发期质量属性-6-个" aria-hidden="true">#</a> 开发期质量属性（6 个）</h3><p>易理解性、可扩展性、可重用性、可测试性、可维护性、可移植性</p><ul><li><code>可维护性</code>是指当需要修改缺陷、增加功能、提高质量属性时，定位修改点并实施修改的难易程度。</li></ul><h3 id="运行期质量属性-7-个" tabindex="-1"><a class="header-anchor" href="#运行期质量属性-7-个" aria-hidden="true">#</a> 运行期质量属性（7 个）</h3><p>性能、安全性、可伸缩性、互操作性、可靠性、可用性、鲁棒性。</p><ul><li><code>可伸缩性</code>指当用户数和数据量增加时，软件系统维持高服务质量的能力。</li></ul><h2 id="七大面向架构评估的质量属性" tabindex="-1"><a class="header-anchor" href="#七大面向架构评估的质量属性" aria-hidden="true">#</a> 七大面向架构评估的质量属性</h2><h3 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h3><ul><li>指系统的响应能力,处理事务所需时间或单位时间内处理事务数量。</li><li>通常使用<code>基准测试程序</code>进行测试</li><li>常用的设计策略为: <code>优先级队列</code>和<code>资源调度</code></li></ul><h3 id="可靠性" tabindex="-1"><a class="header-anchor" href="#可靠性" aria-hidden="true">#</a> 可靠性</h3><ul><li>指软件在应用错误、意外错误使用情况下维持功能特性的基本能力。</li><li>通过平均失效时间（MTTF/MTBF）来衡量包括容错（故障时确保正常行为）和健壮性（错误输入时按预定义方式终止）</li><li>常用的设计策略为: <code>Ping/Echo</code>、<code>冗余</code>和<code>心跳线</code></li></ul><h3 id="可用性" tabindex="-1"><a class="header-anchor" href="#可用性" aria-hidden="true">#</a> 可用性</h3><ul><li>指系统正常运行的时间比例，表现为两次故障间时长或故障时恢复正常速度</li><li>常用的设计策略为: <code>Ping/Echo</code>、<code>冗余</code>和<code>心跳线</code></li></ul><h3 id="安全性" tabindex="-1"><a class="header-anchor" href="#安全性" aria-hidden="true">#</a> 安全性</h3><ul><li>指向合法用户提供服务同时阻止非授权访问或拒绝服务的能力，包括机密性、完整性、不可否认性、可控性等</li><li>常用的设计策略为: <code>追踪审计</code></li></ul><h3 id="可修改性" tabindex="-1"><a class="header-anchor" href="#可修改性" aria-hidden="true">#</a> 可修改性</h3><ul><li>指快速、高性价比地变更系统的能力; 包括<code>可维护性、可扩展性、结构重组、可移植性</code><ul><li><code>可维护性</code>关注问题修复，需要准备好的软件体系结构和局部修改。</li><li><code>可扩展性</code>关注新特性的使用和构件的替换，需要松散耦合的构件和体系结构的支持。</li><li><code>结构重构</code>关注构件和构件间的关系的重新组织。</li><li><code>可移植</code>性使软件系统适用于多种环境，需要按照硬件无关的方式组织软件系统。</li></ul></li><li>常用的设计策略为: <code>接口-实现分离</code>、<code>抽象</code>、 <code>信息隐藏</code></li></ul><h3 id="功能性" tabindex="-1"><a class="header-anchor" href="#功能性" aria-hidden="true">#</a> 功能性</h3><ul><li>指系统完成所期望工作的能力，需要系统中多个构件相互协作</li></ul><h3 id="可变性" tabindex="-1"><a class="header-anchor" href="#可变性" aria-hidden="true">#</a> 可变性</h3><ul><li>指架构经扩充或变更成为新架构的能力。新架构需符合预定规则, 在某些方面不同于原架构</li></ul><h3 id="互操作性" tabindex="-1"><a class="header-anchor" href="#互操作性" aria-hidden="true">#</a> 互操作性</h3><ul><li>软件不是独立存在的,需要与其他系统或环境交互。为了支持互操作性,软件架构必须为外部功能和数据结构提供精心设计的入口。不同编程语言编写的软件系统之间的交互作用体现了互操作性问题。</li></ul><h2 id="软件质量特性" tabindex="-1"><a class="header-anchor" href="#软件质量特性" aria-hidden="true">#</a> 软件质量特性</h2><ul><li><code>敏感点</code>: 为了实现某种特定的质量属性，一个或多个构件（和/或构件之间的关系）的特性。 <ul><li>对查询请求处理时间的要求将影响系统的数据传输协议和处理过程的设计</li></ul></li><li><code>权衡点</code>: 指影响多个质量特性，并对多个质量特性来说都是敏感点的质量特性。 <ul><li>改变业务数据编码方式会对系统的性能和安全性产生影响</li></ul></li><li><code>风险</code>: 不以标准术语出现。某些做法有一些隐患可能导致一些问题。 <ul><li>对系统某业务逻辑的描述尚未达成共识，这可能导致部分业务功能模块的重复，影响系统的可修改性;</li></ul></li><li><code>非风险</code>: 某些做法是可行的、可接受的。 <ul><li>业务处理时间小于 30 毫秒，则将请求响应时间设定为 1 秒钟是可以接受的</li></ul></li></ul><h2 id="质量属性场景描述" tabindex="-1"><a class="header-anchor" href="#质量属性场景描述" aria-hidden="true">#</a> 质量属性场景描述</h2><p>目的:<br> 引入质量属性场景的目的是为了<code>精确描述软件系统的质量属性</code>。</p><p>概念:<br> 质量属性场景是<code>对利益相关者与系统交互的简短陈述</code>，描述了一个<code>具体的质量属性需求</code></p><ul><li>6 个组成部分: <ul><li>刺激源、刺激、环境、制品、响应、响应度量</li></ul></li><li>6 类质量属性: <ul><li>可用性、可修改性、性能、可测试性、易用性和安全性</li></ul></li><li>性能质量属性场景主要关注系统的响应速度，可以通<code>过效率、响应时间、吞吐量、负载</code>来客观评价性能的好坏 。</li></ul><h2 id="软件架构评估" tabindex="-1"><a class="header-anchor" href="#软件架构评估" aria-hidden="true">#</a> 软件架构评估</h2><h3 id="架构层次" tabindex="-1"><a class="header-anchor" href="#架构层次" aria-hidden="true">#</a> 架构层次</h3><ul><li>顶层方针</li><li>过程文件</li><li>规程文件</li><li>模版类文件</li></ul><h3 id="基于场景的架构分析方法-saam-方法" tabindex="-1"><a class="header-anchor" href="#基于场景的架构分析方法-saam-方法" aria-hidden="true">#</a> 基于场景的架构分析方法 SAAM 方法</h3><ul><li>SAAM 的主要输入是<code>问题描述、需求声明和架构描述</code>。</li><li>SAAM 的评估过程包括<code>场景开发、架构描述、单场景评估、场景交互评估和总体评估</code>。</li></ul><h3 id="架构权衡分析方法-atam-方法" tabindex="-1"><a class="header-anchor" href="#架构权衡分析方法-atam-方法" aria-hidden="true">#</a> 架构权衡分析方法 ATAM 方法</h3><ul><li>ATAM 包括 4 个主要阶段: <code>场景和需求收集、架构视图和场景实现、属性模型构造和分析、权衡</code>。</li><li>ATAM 效用树的结构包括：<code>树根—质量属性—属性分类—质量属性场景（叶子节点）</code>。</li><li>ATAM 方法要求在系统开发之前，首先对这些质量属性进行<code>评价和折中</code>。</li><li>主要关注系统的<code>需求说明</code>，针对<code>性能、可用性、安全性和可修改性</code>，在系统开发之前进行<code>分析、评价与折中</code>。</li></ul><h2 id="基于体系结构的开发模型-absdm" tabindex="-1"><a class="header-anchor" href="#基于体系结构的开发模型-absdm" aria-hidden="true">#</a> 基于体系结构的开发模型（ABSDM）</h2><blockquote><p>ABSDM 把整个基于体系结构的软件过程划分为<code>体系结构需求、设计、文档化、复审、实现和演化</code>等 6 个过程。</p></blockquote><ul><li><code>体系结构需求过程</code>，其目的是获取用户需求和标识系统中所需要的构件。</li><li><code>体系结构设计过程</code>是一个迭代过程，可以使用已有的系统适用于大部分开发需求。</li><li><code>体系结构文档化过程</code>，并提到其主要输出物包括体系结构规格说明和质量设计说明书。</li><li><code>体系结构复审</code>，其目的是早期发现设计中的缺陷和错误。在一个主版本的软件架构分析之后，要安排一次由外部人员（用户代表和领域专家）参加的复审。</li><li><code>体系结构实现过程</code>，其过程是以文档化的体系结构说明书为基础的，并且每个构件必须满足其责任。</li><li><code>体系结构演化</code>，使用系统演化步骤对应用程序进行修改，以适应新的需求情况。</li></ul><h2 id="面向服务的架构-soa" tabindex="-1"><a class="header-anchor" href="#面向服务的架构-soa" aria-hidden="true">#</a> 面向服务的架构（SOA）</h2><p>微服务架构使用<code>去中心化</code>的扁平化管理方式，每个服务都是一个独立的应用程序，独立管理、使用独立的数据库、独立部署和独立运行。</p><h2 id="消息中间件" tabindex="-1"><a class="header-anchor" href="#消息中间件" aria-hidden="true">#</a> 消息中间件</h2><ul><li>概念: 消息中间件是保存信息的容器</li><li>特点: 消息中间件具有<code>异步处理模式和松耦合</code>的特点，即发送者和接收者无需等待对方的同步回应，也无需了解对方的具体信息</li><li>传输模式: 消息中间件的传输模式包括<code>点对点模型和发布-订阅模型</code></li><li>在分布式系统中，中间件通常提供两种不同类型的支持，即<code>支持交互支持</code>和<code>提供公共服务</code></li></ul><h2 id="新兴技术" tabindex="-1"><a class="header-anchor" href="#新兴技术" aria-hidden="true">#</a> 新兴技术</h2><h3 id="云计算" tabindex="-1"><a class="header-anchor" href="#云计算" aria-hidden="true">#</a> 云计算</h3><ul><li><code>PaaS</code>: 平台即服务</li><li><code>SaaS</code>: 软件（应用）即服务</li><li><code>IaaS</code>: 基础设施即服务</li></ul><h3 id="区块链" tabindex="-1"><a class="header-anchor" href="#区块链" aria-hidden="true">#</a> 区块链</h3><ul><li><code>公有链</code>是公有区块链的简称</li><li><code>私有链</code>是私有区块链的简称</li><li><code>联盟链</code>则是联盟区块链的简称</li></ul>',131),h=[c];function o(r,t){return d(),i("div",null,h)}const s=e(l,[["render",o],["__file","basic-architecture-design.html.vue"]]);export{s as default};
