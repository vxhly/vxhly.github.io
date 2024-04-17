import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,d as l,a as s,e as t}from"./app-4badef91.js";const i={},c=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"前言"),s("p",null,"提供 jQuery 中的 $()、siblings()、addClass()、hasClass()、removeClass()、toggleClass() 等方法的原生 JavaScript 实现方法, 以下方法适用于 Vue.js 项目。")],-1),p=t(`<h2 id="vue-js-不等于-jquery" tabindex="-1"><a class="header-anchor" href="#vue-js-不等于-jquery" aria-hidden="true">#</a> Vue.js 不等于 jQuery</h2><p>个人强烈推荐, 既然用了 Vue.js 来做项目的话, 不要去引用 jQuery, 因为 jQuery 能实现的功能, 在 Vue.js 的项目一定能找到对应的解决方案。但是有人就说了, 我就是想用 jQuery 中的某些方法, 然鹅 Vue.js 却找不到对应的 API 或者根本不知道它在哪里, 所以下面收集了几个原生 JavaScript 实现方法仅供参考。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $()</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="siblings" tabindex="-1"><a class="header-anchor" href="#siblings" aria-hidden="true">#</a> siblings()</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    export default {
        methods: {
            siblings(elem) {
                let a = [];
                let b = elem.parentNode.children;
                for (let i = 0; i &lt; b.length; i++) {
                    if (b[i] !== elem) a.push(b[i]);
                }
                return a;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addclass" tabindex="-1"><a class="header-anchor" href="#addclass" aria-hidden="true">#</a> addClass()</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    export default {
        methods: {

            addClass(ele, cls) {
                ele.className = \`\${ele.className} \${cls}\` ;
            }

        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hasclass" tabindex="-1"><a class="header-anchor" href="#hasclass" aria-hidden="true">#</a> hasClass()</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> cls</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ele<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\s|^)&quot;</span> <span class="token operator">+</span> cls <span class="token operator">+</span> <span class="token string">&quot;(\\\\s|$)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removeclass" tabindex="-1"><a class="header-anchor" href="#removeclass" aria-hidden="true">#</a> removeClass()</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    export default {
        methods: {
            removeClass(ele, cls) {
                if (this.hasClass(ele, cls)) {
                    let reg = new RegExp(&quot;(\\\\s|^)&quot; + cls + &quot;(\\\\s|$)&quot;);
                    ele.className = ele.className.replace(reg, &quot; &quot;);
                }
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toggleclass" tabindex="-1"><a class="header-anchor" href="#toggleclass" aria-hidden="true">#</a> toggleClass()</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    export default {
        methods: {
            toggleClass(ele, cls) {
                if (this.hasClass(ele, cls)) {
                    this.removeClass(ele, cls);
                } else {
                    this.addClass(ele, cls);
                }
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function d(o,u){return a(),e("div",null,[c,l(" more "),p])}const m=n(i,[["render",d],["__file","javascript-2-jquery.html.vue"]]);export{m as default};
