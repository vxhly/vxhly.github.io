import{_ as a,V as t,W as e,Z as l,X as i,$ as n}from"./framework-ac7be777.js";const r="/assets/project-quality-management.png",p="/assets/project-quality-management-0.png",s="/assets/project-quality-management-1.png",c="/assets/project-quality-management-2.png",d="/assets/project-quality-management-3.png",h={},o=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"前言"),i("p",null,"记录项目质量管理章节的相关知识、频繁考点。")],-1),g=n('<h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>项目质量管理主要包含了规划质量管理、管理质量、控制质量三个过程, 目的是做出合格的质量、建立信心(客户/团队) 、满足特定的需求和期望、审计质量要求和质量控制测量结果和改进生产过程。</p></div><p>项目质量管理需要兼顾项目管理与项目可交付成果两个方面。</p><ul><li>【质量】作为实现的性能或成果, 是“一系列内在特性满足要求的程度”。</li><li>【等级】作为设计意图, 是对用途相同但技术特性不同的可交付成果的级别分类。</li></ul><p>五种质量管理水平：客户 &lt; QC &lt; QA &lt; QP &lt; 文化。</p><ul><li>【预防】=&gt; 保证过程总共不出现错误</li><li>【检查】=&gt; 保证错误不落到客户手中</li><li>【属性抽样】=&gt; 结果为合格或不合格</li><li>【变量抽样】=&gt; 表明合格的程度</li><li>【公差】=&gt; 结果的可接受范围</li><li>【控制界限】=&gt; 稳定过程的普通偏差的边界</li></ul><p>项目经理及项目管理团队负责权衡, 以便同时达到所要求的质量与等级水平。</p><p>项目质量管理的核心概念 =&gt; 按有效性递增的五种质量管理水平</p><h2 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图" aria-hidden="true">#</a> 思维导图</h2><figure><img src="'+r+'" alt="项目质量管理" tabindex="0" loading="lazy"><figcaption>项目质量管理</figcaption></figure><h2 id="项目质量管理流程" tabindex="-1"><a class="header-anchor" href="#项目质量管理流程" aria-hidden="true">#</a> 项目质量管理流程</h2><figure><img src="'+p+'" alt="项目质量管理" tabindex="0" loading="lazy"><figcaption>项目质量管理</figcaption></figure><h2 id="规划过程组" tabindex="-1"><a class="header-anchor" href="#规划过程组" aria-hidden="true">#</a> 规划过程组</h2><h3 id="规划质量管理" tabindex="-1"><a class="header-anchor" href="#规划质量管理" aria-hidden="true">#</a> 规划质量管理</h3><p>规划质量管理是识别项目及其可交付成果的质量要求和（或）标准, 并书面描述项目将如何证明符合质量要求和（或）标准的过程。</p><p>主要作用是, 为在整个项目期间如何管理和核实质量提供指南和方向。</p><h4 id="itto" tabindex="-1"><a class="header-anchor" href="#itto" aria-hidden="true">#</a> ITTO</h4><p>组织过程资产 =&gt; 执行组织的质量政策是高级管理层所推崇的, 规定了组织在质量管理方面的工作。</p><p>质量成本（不包含生产成本） =&gt; 在产品生命周期中为预防不符合要求, 为评价产品或服务是否符合要求, 以及因未达到要求（返工）, 而发生的所有成本。</p><ul><li>一致性成本（为了防止失败） <ul><li>预防成本（培训、设备、流程文档化、选择正确时间）</li><li>评价成本（检查、测试、破坏性测试）</li></ul></li><li>非一致性成本（为了处理失败） <ul><li>内部失败成本（返工、废品）</li><li>外部失败成本（债务、保修、业务流失）</li></ul></li></ul><p>流程图 =&gt; 可以通过分析流程图来估算质量成本。通过展示过程步骤, 可帮助改进过程并识别可能出现质量缺陷或可以纳入质量检查的地方。</p><figure><img src="'+s+'" alt="项目质量管理-规划质量管理" tabindex="0" loading="lazy"><figcaption>项目质量管理-规划质量管理</figcaption></figure><h3 id="管理质量" tabindex="-1"><a class="header-anchor" href="#管理质量" aria-hidden="true">#</a> 管理质量</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>主要针对过程的管理, 老版本中叫“质量保证”, QA。代表的工具为质量审计, 用于管理过程。</p></div><p>管理质量是把组织的质量政策用于项目, 并将质量管理计划转化为可执行的质量活动的过程。主要作用是, 提高实现质量目标的可能性, 以及识别无效过程和导致质量低劣的原因。</p><p>在敏捷项目中, 整个项目期间的质量管理由所有团队成员执行；但在传统项目中, 质量管理通常是特定团队成员的职责。</p><h4 id="itto-1" tabindex="-1"><a class="header-anchor" href="#itto-1" aria-hidden="true">#</a> ITTO</h4><ul><li>亲和图：可以对潜在缺陷成因进行分类, 展示最应关注的领域。</li><li>因果图：“鱼骨图”、“why-why 分析图”和“石川图”, 找根本原因。</li><li>直方图：一种展示数字数据的条形图, 可以展示每个可交付成果的缺陷数量、缺陷成因的排列、各个过程的不合规次数, 或项目或产品缺陷的其他表现形式。</li><li>帕累托：二八原则, 累积频率, 找主要原因, 便于有针对性地解决问题。</li><li>散点图：展示两个变量之间的关系的图形。</li><li>（质量）审计：于确定项目活动是否遵循了组织和项目的政策、过程与程序的一种结构化且独立的过程；包括：1 识别, 2 分享, 3 协助, 4 积累, 5 确 认；可事先安排, 也可随机进行；可由内部或外部审计师进行。</li><li>面向 X 的设计 (DfX) ：产品设计期间可采用的一系列技术指南, 旨在优化设计的特定方面。</li><li>问题解决：1 定义, 2 识别, 3 方案, 4 选择, 5 执行, 6 验证。</li><li>质量改进方法：PDCA, 六西格玛。</li><li>控制图：显示过程是否稳定、是否有可预测的绩效</li></ul><p>质量测量指标 =&gt; 描述项目或产品属性, 以及控制质量过程将如何验证符合程度。（属于“项目文件“）</p><p>质量审计是识别改进领域的工具之一, 是一种独立审查、确保项目执行过程符合组织或项目定义的方针政策、标准和程序。</p><p>质量审计的目标</p><ul><li>识别最佳实践、违规做法、差距及不足</li><li>分享类似项目的良好实践</li><li>协助过程改进、提高生产效率</li><li>积累经验教训</li><li>确认已批准的变更请求的实施情况</li></ul><p>过程分析 =&gt; 识别过程改进机会, 发现一个过程中存在的问题、制约因素、和非增值活动。</p><p>问题解决步骤</p><p>1、 定义（问题）；2、识别（根本原因）；3、方案（生成方案）；4、选择（最佳方案）；5、执行；6、验证（有效性）</p><figure><img src="'+c+'" alt="项目质量管理-管理质量" tabindex="0" loading="lazy"><figcaption>项目质量管理-管理质量</figcaption></figure><h2 id="控制过程组" tabindex="-1"><a class="header-anchor" href="#控制过程组" aria-hidden="true">#</a> 控制过程组</h2><h3 id="控制质量" tabindex="-1"><a class="header-anchor" href="#控制质量" aria-hidden="true">#</a> 控制质量</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>主要针对结果的检查, QC。代表的工具为检查, 检查结果。</p></div><p>核实项目可交付成果和工作已经达到主要相关方的质量要求, 可供最终验收。</p><p>由于缺陷, 客户拒绝交付, 若要避免这个问题, 项目经理事先应该定期检查核实可交付成果。</p><p>在可交付成果中发现大量缺陷：</p><ul><li>少量部分 =&gt; 查原因、走变更流程</li><li>大量部分 =&gt; 审查过程、过程改进</li></ul><figure><img src="'+d+'" alt="项目质量管理-控制质量" tabindex="0" loading="lazy"><figcaption>项目质量管理-控制质量</figcaption></figure>',44);function u(f,m){return t(),e("div",null,[o,l(" more "),g])}const x=a(h,[["render",u],["__file","project-quality-management.html.vue"]]);export{x as default};
