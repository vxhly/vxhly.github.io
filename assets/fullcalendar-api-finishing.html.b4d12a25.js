import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as r,c as i,a as n,e,b as s,d as t}from"./app.a3d402e1.js";const p={},c=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u524D\u8A00"),n("p",null,"\u6700\u8FD1\u5728\u505A\u9879\u76EE\u7684\u65F6\u5019\u53D1\u73B0\u4E86\u4E00\u4E2A\u6BD4\u8F83\u5F3A\u5927\u7684\u65E5\u5386\u63D2\u4EF6 Fullcalendar, \u7531\u4E8E\u5B98\u65B9\u53EA\u63D0\u4F9B\u4E86\u82F1\u6587\u7248\u7684 API \u8BF4\u660E, \u9605\u8BFB\u8D77\u6765\u786E\u5B9E\u6709\u70B9\u4E0D\u65B9\u4FBF, \u5728\u793E\u533A\u627E\u5230\u7684\u4E2D\u6587\u7248 API \u6587\u6863\u662F v4 \u7248\u672C\u7684, \u7136\u9E45\u73B0\u5728 Fullcalendar \u5DF2\u7ECF\u66F4\u65B0\u5230\u4E86 v5 \u7248\u672C\u4E86, \u4E5F\u6709\u5F88\u591A\u7684 API \u5728 v5 \u7248\u672C\u91CC\u9762\u5DF2\u7ECF\u4E0D\u9002\u7528\u4E86, \u6240\u4EE5\u73B0\u5C06\u5E38\u7528\u7684 API \u8FDB\u884C\u6574\u7406\uFF08\u9488\u5BF9 v5 \u7248\u672C\u7684\uFF09\u3002")],-1),u=n("h2",{id:"\u5E38\u89C4-\u4E0A\u6587\u6863",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E38\u89C4-\u4E0A\u6587\u6863","aria-hidden":"true"},"#"),s(" \u5E38\u89C4-\u4E0A\u6587\u6863")],-1),d={href:"https://fullcalendar.io/",target:"_blank",rel:"noopener noreferrer"},h=s("Fullcalendar \u5B98\u65B9\u6587\u6863"),k={href:"https://www.jianshu.com/p/183d2fcec3fb",target:"_blank",rel:"noopener noreferrer"},_=s("FullCalendar V4 \u2014\u2014 \uFF081\uFF09\u5B89\u88C5\u63D2\u4EF6"),v={href:"https://www.jianshu.com/p/9c9b9fb83337",target:"_blank",rel:"noopener noreferrer"},g=s("FullCalendar V4 \u2014\u2014 \uFF082\uFF09\u65E5\u5386\u5C5E\u6027"),f={href:"https://cloud.tencent.com/developer/article/1019452",target:"_blank",rel:"noopener noreferrer"},b=s("FullCalendar v4 \u65E5\u5386\u63D2\u4EF6\u4E2D\u6587\u8BF4\u660E\u6587\u6863"),m=t(`<h2 id="\u5148\u9644\u4E0A\u5728-vue-\u4E2D\u4F7F\u7528-fullcalendar" tabindex="-1"><a class="header-anchor" href="#\u5148\u9644\u4E0A\u5728-vue-\u4E2D\u4F7F\u7528-fullcalendar" aria-hidden="true">#</a> \u5148\u9644\u4E0A\u5728 Vue \u4E2D\u4F7F\u7528 Fullcalendar</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @fullcalendar/vue @fullcalendar/daygrid @fullcalendar/timegrid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FullCalendar</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>calendarOptions<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> FullCalendar <span class="token keyword">from</span> <span class="token string">&quot;@fullcalendar/vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dayGridPlugin <span class="token keyword">from</span> <span class="token string">&quot;@fullcalendar/daygrid&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> timeGridPlugin <span class="token keyword">from</span> <span class="token string">&quot;@fullcalendar/timegrid&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    FullCalendar<span class="token punctuation">,</span> <span class="token comment">// make the &lt;FullCalendar&gt; tag available</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">calendarOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>dayGridPlugin<span class="token punctuation">,</span> timeGridPlugin<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u4EF6</span>
        <span class="token literal-property property">initialView</span><span class="token operator">:</span> <span class="token string">&quot;dayGridMonth&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u666E\u901A\u7684\u663E\u793A\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7684\u663E\u793A\u8BBE\u7F6E" aria-hidden="true">#</a> \u666E\u901A\u7684\u663E\u793A\u8BBE\u7F6E</h2>`,4),q={href:"https://fullcalendar.io/docs/headerToolbar",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,[n("code",null,"headerToolbar")],-1),w=s(" ===> \u8BBE\u7F6E\u65E5\u5386\u5934\u90E8\u4FE1\u606F\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A false, \u5219\u4E0D\u663E\u793A\u5934\u90E8\u4FE1\u606F\u3002\u5305\u62EC left, center, right \u5DE6\u4E2D\u53F3\u4E09\u4E2A\u4F4D\u7F6E, \u6BCF\u4E2A\u4F4D\u7F6E\u90FD\u53EF\u4EE5\u5BF9\u5E94\u4EE5\u4E0B\u4E0D\u540C\u7684\u914D\u7F6E\uFF1Atitle: \u663E\u793A\u5F53\u524D\u6708\u4EFD/\u5468/\u65E5\u4FE1\u606F prev: \u7528\u4E8E\u5207\u6362\u5230\u4E0A\u4E00\u6708/\u5468/\u65E5\u89C6\u56FE\u7684\u6309\u94AE next: \u7528\u4E8E\u5207\u6362\u5230\u4E0B\u4E00\u6708/\u5468/\u65E5\u89C6\u56FE\u7684\u6309\u94AE prevYear\uFF1A\u7528\u4E8E\u5207\u6362\u5230\u4E0A\u4E00\u5E74\u89C6\u56FE\u7684\u6309\u94AE nextYear\uFF1A\u7528\u4E8E\u5207\u6362\u5230\u4E0B\u4E00\u5E74\u89C6\u56FE\u7684\u6309\u94AE"),x=t(`<ul><li>\u9ED8\u8BA4\u503C\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token comment">// will normally be on the left. if RTL, will be on the right</span>
  <span class="token property">&quot;center&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;end&quot;</span><span class="token operator">:</span> <span class="token string">&quot;today prev,next&quot;</span> <span class="token comment">// will normally be on the right. if RTL, will be on the left</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C={href:"https://fullcalendar.io/docs/height",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,[n("code",null,"height")],-1),j=s(" ===> \u8BBE\u7F6E\u65E5\u5386\u7684\u9AD8\u5EA6, \u5305\u62EC header \u65E5\u5386\u5934\u90E8, \u9ED8\u8BA4\u672A\u8BBE\u7F6E, \u9AD8\u5EA6\u6839\u636E aspectRatio \u503C\u81EA\u9002\u5E94\u3002"),T={href:"https://fullcalendar.io/docs/contentHeight",target:"_blank",rel:"noopener noreferrer"},L=n("strong",null,[n("code",null,"contentHeight")],-1),R=s(' ===> \u65E5\u5386\u67E5\u770B\u533A\u57DF\u7684\u9AD8\u5EA6\uFF08\u4E0D\u5305\u62EC header \u548C footer \uFF09, \u9ED8\u8BA4\u4E0D\u8BBE\u7F6E, \u65E5\u5386\u9AD8\u5EA6\u7531 AspectRatio \u8BA1\u7B97, \u8BE5\u503C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\uFF1A\u6574\u6570\u3001\u51FD\u6570\u6216 "auto"'),I={href:"https://fullcalendar.io/docs/themeSystem",target:"_blank",rel:"noopener noreferrer"},P=n("strong",null,[n("code",null,"themeSystem")],-1),V=s(" ===> \u4F7F\u7528\u7ED9\u5B9A\u7684\u4E3B\u9898\u7CFB\u7EDF\u6E32\u67D3\u65E5\u5386\u3002"),A=n("ul",null,[n("li",null,[s("\u9ED8\u8BA4\u503C\uFF1A "),n("code",null,"'standard'"),s(" \u3001 "),n("code",null,"'bootstrap'")])],-1),D={href:"https://fullcalendar.io/docs/buttonIcons",target:"_blank",rel:"noopener noreferrer"},G=n("strong",null,[n("code",null,"buttonIcons")],-1),H=s(" ===> \u663E\u793A\u5728 headerToolbar/footerToolbar \u4E0A\u7684\u56FE\u6807"),N=t(`<ul><li>\u9ED8\u8BA4\u503C\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left-single-arrow&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right-single-arrow&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prevYear&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left-double-arrow&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nextYear&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right-double-arrow&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Y={href:"https://fullcalendar.io/docs/firstDay",target:"_blank",rel:"noopener noreferrer"},B=n("strong",null,[n("code",null,"firstDay")],-1),E=s(" ===> \u6BCF\u5468\u5F00\u59CB\u7684\u65E5\u5B50, \u9ED8\u8BA4\u503C\u4E3A 0, \u5373\u5468\u65E5"),M={href:"https://fullcalendar.io/docs/navLinks",target:"_blank",rel:"noopener noreferrer"},O=n("strong",null,[n("code",null,"navLinks")],-1),S=s(" ===> \u65E5\u548C\u5468\u662F\u5426\u53EF\u70B9\u51FB, \u9ED8\u8BA4\u503C\u662F false"),z={href:"https://fullcalendar.io/docs/handleWindowResize",target:"_blank",rel:"noopener noreferrer"},W=n("strong",null,[n("code",null,"handleWindowResize")],-1),Z=s(" ===> \u662F\u5426\u968F\u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F\u53D8\u5316\u800C\u81EA\u52A8\u53D8\u5316, \u9ED8\u8BA4\u503C\u662F false"),J={href:"https://fullcalendar.io/docs/businessHours",target:"_blank",rel:"noopener noreferrer"},K=n("strong",null,[n("code",null,"businessHours")],-1),Q=s(" ===> \u5728\u65E5\u5386\u4E0A\u5F3A\u8C03\u67D0\u4E9B\u65F6\u95F4\u6BB5\u3002\u53C2\u6570\u503C\u53EF\u4EE5\u662F\u5E03\u5C14\u503C\uFF1A\u5982\u679C\u53C2\u6570\u503C\u4E3A ture, \u5219\u5C06\u5F3A\u8C03\u9ED8\u8BA4\u7684\u5DE5\u4F5C\u65F6\u95F4\uFF08\u5468\u4E00 ~ \u5468\u4E94\u7684\u4E0A\u5348 9 \u70B9\u5230\u4E0B\u5348 5 \u70B9\uFF09, \u5982\u679C\u4E3A false \u5219\u4E0D\u5F3A\u8C03\u3002\u53C2\u6570\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61, \u4EE5\u4FBF\u4E8E\u7CBE\u7EC6\u7684\u63A7\u5236\uFF1B\u4E5F\u53EF\u4EE5\u662F\u591A\u4E2A\u5BF9\u8C61\u7684\u6570\u7EC4, \u9ED8\u8BA4\u503C\u662F false"),U={href:"https://fullcalendar.io/docs/editable",target:"_blank",rel:"noopener noreferrer"},X=n("strong",null,[n("code",null,"editable")],-1),$=s(" ===> \u5141\u8BB8\u7528\u6237\u7F16\u8F91\u4E8B\u4EF6\uFF08\u901A\u8FC7\u62D6\u52A8\u4E8B\u4EF6\u4F4D\u7F6E, \u6216\u8C03\u6574\u4E8B\u4EF6\u5728\u65E5\u5386\u4E0A\u7684\u9AD8\u5EA6\uFF09"),nn={href:"https://fullcalendar.io/docs/aspectRatio",target:"_blank",rel:"noopener noreferrer"},sn=n("strong",null,[n("code",null,"aspectRatio")],-1),an=s(" ===> \u65E5\u5386\u7684\u5BBD\u9AD8\u6BD4, \u6570\u5B57\u8D8A\u5927, \u65E5\u5386\u8D8A\u6241, \u9ED8\u8BA4\u503C\u4E3A 1.35"),en={href:"https://fullcalendar.io/docs/events-array",target:"_blank",rel:"noopener noreferrer"},tn=n("strong",null,[n("code",null,"events")],-1),on=s(" ===> \u65E5\u5386\u4E0A\u7684 event \u4E8B\u4EF6"),ln=n("h2",{id:"\u5207\u6362\u8BED\u8A00\u73AF\u5883\u548C\u65F6\u533A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5207\u6362\u8BED\u8A00\u73AF\u5883\u548C\u65F6\u533A","aria-hidden":"true"},"#"),s(" \u5207\u6362\u8BED\u8A00\u73AF\u5883\u548C\u65F6\u533A")],-1),rn={href:"https://fullcalendar.io/docs/locale",target:"_blank",rel:"noopener noreferrer"},pn=n("strong",null,[n("code",null,"locale")],-1),cn=s(" ===> \u4FEE\u6539 FullCalendar \u7EC4\u4EF6\u7684\u8BED\u8A00, \u4E0D\u80FD\u5B8C\u5168\u7684\u7FFB\u8BD1\uFF08\u90E8\u5206\u7684 headerToolbar \u4E2D\u7684\u6309\u94AE\u6587\u6848\u5E76\u4E0D\u4F1A\u88AB\u7FFB\u8BD1\uFF09"),un={href:"https://fullcalendar.io/docs/buttonText",target:"_blank",rel:"noopener noreferrer"},dn=n("strong",null,[n("code",null,"buttonText")],-1),hn=s(" ===> headerToolbar/footerToolbar \u4E2D\u7684\u6309\u94AE\u6587\u6848\u66FF\u6362"),kn=t(`<ul><li>\u9ED8\u8BA4\u503C\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;today&quot;</span><span class="token operator">:</span> <span class="token string">&quot;today&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;month&quot;</span><span class="token operator">:</span> <span class="token string">&quot;month&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;week&quot;</span><span class="token operator">:</span> <span class="token string">&quot;week&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_n={href:"https://fullcalendar.io/docs/timeZone",target:"_blank",rel:"noopener noreferrer"},vn=n("strong",null,[n("code",null,"timeZone")],-1),gn=s(" ===> \u5207\u6362 FullCalendar \u7EC4\u4EF6\u7684\u65F6\u533A, \u9ED8\u8BA4\u503C "),fn=n("code",null,"local",-1),bn=n("h2",{id:"\u64CD\u4F5C\u4E8B\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u64CD\u4F5C\u4E8B\u4EF6","aria-hidden":"true"},"#"),s(" \u64CD\u4F5C\u4E8B\u4EF6")],-1),mn={href:"https://fullcalendar.io/docs/eventClick",target:"_blank",rel:"noopener noreferrer"},qn=n("strong",null,[n("code",null,"eventClick")],-1),yn=s(" ===> \u5F53\u7528\u6237\u5355\u51FB\u4E8B\u4EF6\u65F6\u89E6\u53D1"),wn={href:"https://fullcalendar.io/docs/navLinkDayClick",target:"_blank",rel:"noopener noreferrer"},xn=n("strong",null,[n("code",null,"navLinkDayClick")],-1),Cn=s(" ===> \u91CD\u5199\u70B9\u51FB\u65E5\u7684\u56DE\u8C03\u4E8B\u4EF6, \u8FD9\u6837\u914D\u7F6E\u4E86 navLinks \u5C31\u4E0D\u4F1A\u5BFC\u822A\u5230\u4EFB\u4F55\u7684\u89C6\u56FE"),Fn=n("h2",{id:"render-hooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#render-hooks","aria-hidden":"true"},"#"),s(" Render Hooks")],-1),jn={href:"https://fullcalendar.io/docs/event-render-hooks",target:"_blank",rel:"noopener noreferrer"},Tn=n("strong",null,[n("code",null,"eventDidMount")],-1),Ln=s(" ===> \u5728\u5C06\u5143\u7D20\u6DFB\u52A0\u5230 DOM \u4E4B\u540E\u7ACB\u5373\u8C03\u7528\u3002 \u5982\u679C\u4E8B\u4EF6\u6570\u636E\u53D1\u751F\u66F4\u6539, \u5219\u4E0D\u4F1A\u518D\u6B21\u8C03\u7528\u5B83\u3002");function Rn(In,Pn){const a=l("ExternalLinkIcon");return r(),i("div",null,[c,u,n("ul",null,[n("li",null,[n("a",d,[h,e(a)])]),n("li",null,[n("a",k,[_,e(a)])]),n("li",null,[n("a",v,[g,e(a)])]),n("li",null,[n("a",f,[b,e(a)])])]),m,n("ul",null,[n("li",null,[n("p",null,[n("a",q,[y,e(a)]),w]),x]),n("li",null,[n("p",null,[n("a",C,[F,e(a)]),j])]),n("li",null,[n("p",null,[n("a",T,[L,e(a)]),R])]),n("li",null,[n("p",null,[n("a",I,[P,e(a)]),V]),A]),n("li",null,[n("p",null,[n("a",D,[G,e(a)]),H]),N]),n("li",null,[n("p",null,[n("a",Y,[B,e(a)]),E])]),n("li",null,[n("p",null,[n("a",M,[O,e(a)]),S])]),n("li",null,[n("p",null,[n("a",z,[W,e(a)]),Z])]),n("li",null,[n("p",null,[n("a",J,[K,e(a)]),Q])]),n("li",null,[n("p",null,[n("a",U,[X,e(a)]),$])]),n("li",null,[n("p",null,[n("a",nn,[sn,e(a)]),an])]),n("li",null,[n("p",null,[n("a",en,[tn,e(a)]),on])])]),ln,n("ul",null,[n("li",null,[n("p",null,[n("a",rn,[pn,e(a)]),cn])]),n("li",null,[n("p",null,[n("a",un,[dn,e(a)]),hn]),kn]),n("li",null,[n("p",null,[n("a",_n,[vn,e(a)]),gn,fn])])]),bn,n("ul",null,[n("li",null,[n("a",mn,[qn,e(a)]),yn]),n("li",null,[n("a",wn,[xn,e(a)]),Cn])]),Fn,n("ul",null,[n("li",null,[n("a",jn,[Tn,e(a)]),Ln])])])}var Dn=o(p,[["render",Rn],["__file","fullcalendar-api-finishing.html.vue"]]);export{Dn as default};
