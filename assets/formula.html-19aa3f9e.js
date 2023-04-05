import{_ as t,Y as n,Z as a,a1 as e,$ as i,a2 as p}from"./framework-96e1cf04.js";const c={},s=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"前言"),i("p",null,"在 PMP 中存在一定的计算题, 一般分布在进度管理和成本管理章节, 以下是记录考试中会使用到的公式以及相关名词解释。")],-1),l=p('<h2 id="第四章-整合管理" tabindex="-1"><a class="header-anchor" href="#第四章-整合管理" aria-hidden="true">#</a> 第四章 整合管理</h2><h3 id="商业价值与开发周期" tabindex="-1"><a class="header-anchor" href="#商业价值与开发周期" aria-hidden="true">#</a> 商业价值与开发周期</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>比值 = 商业价值 / 开发周期</p></div><p>在选择项目的优先级时, 比值越高, 应该被优先选择</p><h2 id="第六章-进度管理" tabindex="-1"><a class="header-anchor" href="#第六章-进度管理" aria-hidden="true">#</a> 第六章 进度管理</h2><h3 id="三点估算" tabindex="-1"><a class="header-anchor" href="#三点估算" aria-hidden="true">#</a> 三点估算</h3><p>源自计划评审技术（PERT）。考虑估算中的不确定性和风险, 来提高估算的准确性。</p><p>三个估算值：最可能时间、最乐观时间、最悲观时间</p><div class="hint-container tip"><p class="hint-container-title">三角分布</p><p>期望值（平均值）= (最悲观 + 最乐观 + 最可能) / 3</p></div><div class="hint-container tip"><p class="hint-container-title">贝塔分布 （默认分布）</p><p>期望值（平均值）= (最悲观 + 最乐观 + 最可能 * 4) / 6</p></div><div class="hint-container tip"><p class="hint-container-title">标准差</p><p>标准差 = (最悲观 - 最乐观) / 6</p></div><h2 id="第七章-成本管理" tabindex="-1"><a class="header-anchor" href="#第七章-成本管理" aria-hidden="true">#</a> 第七章 成本管理</h2><ul><li>BAC =&gt; 完工预算, 即成本基准（不考虑管理储备）</li><li>PV =&gt; 计划价值, 即到目前为止, 计划做多少</li><li>EV =&gt; 挣值, 即到目前为止, 目前已经做了多少</li><li>AC =&gt; 实际成本, 即到目前为止, 实际花了多少</li><li>SV =&gt; 进度偏差</li><li>CV =&gt; 成本偏差</li><li>SPI =&gt; 进度绩效指数</li><li>CPI =&gt; 成本绩效指数</li><li>TCPI =&gt; 完工尚需绩效指数</li><li>EAC =&gt; 完工估算</li><li>ETC =&gt; 完工尚需估算（使用新的估算方式）</li><li>VAC =&gt; 完工偏差</li></ul><div class="hint-container tip"><p class="hint-container-title">BAC（完工预算）</p><p>BAC = 完工时的 PV 的总和 BAC = EV</p></div><div class="hint-container tip"><p class="hint-container-title">PV（计划价值）</p><p>BAC = 计划工作量 * 预算单价</p></div><div class="hint-container tip"><p class="hint-container-title">EV（挣值）</p><p>EV = 实际工作量 * 预算单价</p></div><div class="hint-container tip"><p class="hint-container-title">AC（实际成本）</p><p>EV = 实际工作量 * 实际单价</p></div><div class="hint-container tip"><p class="hint-container-title">SV（进度偏差）</p><p>SV = EV - PV</p></div><div class="hint-container tip"><p class="hint-container-title">CV（成本偏差）</p><p>CV = EV - AC</p></div><div class="hint-container tip"><p class="hint-container-title">SPI（进度绩效指数）</p><p>SPI = EV / PV</p></div><div class="hint-container tip"><p class="hint-container-title">CPI（成本绩效指数）</p><p>CPI = EV / AC</p></div><div class="hint-container tip"><p class="hint-container-title">EAC（成本估算）</p><p>EAC = AC + ETC</p></div><div class="hint-container tip"><p class="hint-container-title">EAC（典型偏差）</p><p>EAC = AC + (BAC - EV) / CPI = BAC / CPI</p></div><div class="hint-container tip"><p class="hint-container-title">EAC（非典型偏差）</p><p>EAC = AC + (BAC - EV) / 1 = AC + BAC - EV</p></div><div class="hint-container tip"><p class="hint-container-title">EAC（进度成本同时作用, 成本超支或进度落后）</p><p>EAC = AC + (BAC - EV) / (CPI * SPI)</p></div><div class="hint-container tip"><p class="hint-container-title">剩余资金</p><p>剩余资金 =&gt; EAC - AC</p></div><div class="hint-container tip"><p class="hint-container-title">剩余资金</p><p>剩余工作 =&gt; EAC - EV</p></div><div class="hint-container tip"><p class="hint-container-title">TCPI（完工尚需绩效指数）</p><p>TCPI = (BAC - EV) / (BAC - AC)</p></div><div class="hint-container tip"><p class="hint-container-title">VAC（完工偏差）</p><p>VAC = BAC - EAC</p></div><h2 id="第八章-质量管理" tabindex="-1"><a class="header-anchor" href="#第八章-质量管理" aria-hidden="true">#</a> 第八章 质量管理</h2><div class="hint-container tip"><p class="hint-container-title">控制范围</p><p>+- 3 西格玛</p></div><h2 id="第十章-沟通管理" tabindex="-1"><a class="header-anchor" href="#第十章-沟通管理" aria-hidden="true">#</a> 第十章 沟通管理</h2><div class="hint-container tip"><p class="hint-container-title">沟通渠道</p><p>沟通渠道 = n(n-1)/2</p></div><h2 id="第十二章-项目采购管理" tabindex="-1"><a class="header-anchor" href="#第十二章-项目采购管理" aria-hidden="true">#</a> 第十二章 项目采购管理</h2><div class="hint-container tip"><p class="hint-container-title">总价+激励（FPIF）</p><p>总价 = 实际成本 + 目标利润 +（目标成本 - 实际成本）* 卖方应承担比例</p><p>先算总价, 和最高限价比较, 计算最终总价。</p><p>实际利润 = 最终总价 - 实际成本</p></div><div class="hint-container tip"><p class="hint-container-title">成本+激励（CPIF）</p><p>利润 = 目标利润 + （目标成本 - 实际成本）* 卖方应承担比例</p><p>先算利润, 和利润上下限比, 计算最终利润</p><p>实际总价 = 最终利润 + 实际成本</p></div><div class="hint-container tip"><p class="hint-container-title">成本——固定费用（CPFF）</p><p>实际总价 = 实际成本 + 初始成本百分比</p></div>',37);function r(h,d){return n(),a("div",null,[s,e(" more "),l])}const C=t(c,[["render",r],["__file","formula.html.vue"]]);export{C as default};
