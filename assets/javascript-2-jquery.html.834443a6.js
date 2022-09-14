import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,d as e}from"./app.a3d402e1.js";const l={},i=e(`<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>\u63D0\u4F9B jQuery \u4E2D\u7684 $()\u3001siblings()\u3001addClass()\u3001hasClass()\u3001removeClass()\u3001toggleClass() \u7B49\u65B9\u6CD5\u7684\u539F\u751F JavaScript \u5B9E\u73B0\u65B9\u6CD5, \u4EE5\u4E0B\u65B9\u6CD5\u9002\u7528\u4E8E Vue.js \u9879\u76EE\u3002</p></div><h2 id="vue-js-\u4E0D\u7B49\u4E8E-jquery" tabindex="-1"><a class="header-anchor" href="#vue-js-\u4E0D\u7B49\u4E8E-jquery" aria-hidden="true">#</a> Vue.js \u4E0D\u7B49\u4E8E jQuery</h2><p>\u4E2A\u4EBA\u5F3A\u70C8\u63A8\u8350, \u65E2\u7136\u7528\u4E86 Vue.js \u6765\u505A\u9879\u76EE\u7684\u8BDD, \u4E0D\u8981\u53BB\u5F15\u7528 jQuery, \u56E0\u4E3A jQuery \u80FD\u5B9E\u73B0\u7684\u529F\u80FD, \u5728 Vue.js \u7684\u9879\u76EE\u4E00\u5B9A\u80FD\u627E\u5230\u5BF9\u5E94\u7684\u89E3\u51B3\u65B9\u6848\u3002\u4F46\u662F\u6709\u4EBA\u5C31\u8BF4\u4E86, \u6211\u5C31\u662F\u60F3\u7528 jQuery \u4E2D\u7684\u67D0\u4E9B\u65B9\u6CD5, \u7136\u9E45 Vue.js \u5374\u627E\u4E0D\u5230\u5BF9\u5E94\u7684 API \u6216\u8005\u6839\u672C\u4E0D\u77E5\u9053\u5B83\u5728\u54EA\u91CC, \u6240\u4EE5\u4E0B\u9762\u6536\u96C6\u4E86\u51E0\u4E2A\u539F\u751F JavaScript \u5B9E\u73B0\u65B9\u6CD5\u4EC5\u4F9B\u53C2\u8003\u3002</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $()</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="siblings" tabindex="-1"><a class="header-anchor" href="#siblings" aria-hidden="true">#</a> siblings()</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addclass" tabindex="-1"><a class="header-anchor" href="#addclass" aria-hidden="true">#</a> addClass()</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    export default {
        methods: {

            addClass(ele, cls) {
                ele.className = \`\${ele.className} \${cls}\` ;
            }

        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hasclass" tabindex="-1"><a class="header-anchor" href="#hasclass" aria-hidden="true">#</a> hasClass()</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> cls</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ele<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;(\\\\s|^)&quot;</span> <span class="token operator">+</span> cls <span class="token operator">+</span> <span class="token string">&quot;(\\\\s|$)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removeclass" tabindex="-1"><a class="header-anchor" href="#removeclass" aria-hidden="true">#</a> removeClass()</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toggleclass" tabindex="-1"><a class="header-anchor" href="#toggleclass" aria-hidden="true">#</a> toggleClass()</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[i];function c(p,d){return n(),a("div",null,t)}var r=s(l,[["render",c],["__file","javascript-2-jquery.html.vue"]]);export{r as default};
