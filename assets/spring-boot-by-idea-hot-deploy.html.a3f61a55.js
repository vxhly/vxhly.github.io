import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.a3d402e1.js";var p="/assets/spring-boot-1.png",e="/assets/spring-boot-2.png",o="/assets/spring-boot-3.png",c="/assets/spring-boot-4.png",i="/assets/spring-boot-5.png",l="/assets/spring-boot-6.png",u="/assets/spring-boot-7.png",r="/assets/spring-boot-8.png",k="/assets/spring-boot-9.png",g="/assets/spring-boot-10.png";const d={},m=t('<div class="custom-container tip"><p class="custom-container-title">\u524D\u8A00</p><p>Spring Boot \u662F\u7531 Pivotal \u56E2\u961F\u63D0\u4F9B\u7684\u5168\u65B0\u6846\u67B6, \u5176\u8BBE\u8BA1\u76EE\u7684\u662F\u7528\u6765\u7B80\u5316\u65B0 Spring \u5E94\u7528\u7684\u521D\u59CB\u642D\u5EFA\u4EE5\u53CA\u5F00\u53D1\u8FC7\u7A0B\u3002\u8BE5\u6846\u67B6\u4F7F\u7528\u4E86\u7279\u5B9A\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u914D\u7F6E, \u4ECE\u800C\u4F7F\u5F00\u53D1\u4EBA\u5458\u4E0D\u518D\u9700\u8981\u5B9A\u4E49\u6837\u677F\u5316\u7684\u914D\u7F6E\u3002Spring Boot \u7684 Web \u9879\u76EE, \u5728\u6BCF\u4E00\u6B21\u4FEE\u6539\u4E86 java \u6587\u4EF6\u6216\u8005\u662F resource \u7684\u65F6\u5019, \u90FD\u5FC5\u987B\u53BB\u91CD\u542F\u4E00\u4E0B\u9879\u76EE, \u8FD9\u6837\u7684\u8BDD\u6D6A\u8D39\u4E86\u5F88\u591A\u7684\u65F6\u95F4, \u5B9E\u73B0\u4E86\u70ED\u90E8\u7F72, \u5728\u6BCF\u4E00\u6B21\u4F5C\u4E86\u4FEE\u6539\u4E4B\u540E, \u90FD\u4F1A\u81EA\u52A8\u7684\u91CD\u542F\u3002</p></div><h2 id="\u4F7F\u7528-intellij-idea-\u521B\u5EFA-spring-boot-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-intellij-idea-\u521B\u5EFA-spring-boot-\u9879\u76EE" aria-hidden="true">#</a> \u4F7F\u7528 IntelliJ IDEA \u521B\u5EFA Spring Boot \u9879\u76EE</h2><h3 id="\u65B0\u5EFA-spring-initializr-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA-spring-initializr-\u9879\u76EE" aria-hidden="true">#</a> \u65B0\u5EFA Spring Initializr \u9879\u76EE</h3><p><img src="'+p+'" alt="Spring Boot"></p><h3 id="\u586B\u5199\u9879\u76EE\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u586B\u5199\u9879\u76EE\u4FE1\u606F" aria-hidden="true">#</a> \u586B\u5199\u9879\u76EE\u4FE1\u606F</h3><p><img src="'+e+'" alt="Spring Boot"></p><h3 id="\u9009\u62E9\u9879\u76EE\u4F7F\u7528\u7684\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u9879\u76EE\u4F7F\u7528\u7684\u6280\u672F" aria-hidden="true">#</a> \u9009\u62E9\u9879\u76EE\u4F7F\u7528\u7684\u6280\u672F</h3><p><img src="'+o+'" alt="Spring Boot"></p><h3 id="\u586B\u5199\u9879\u76EE\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u586B\u5199\u9879\u76EE\u540D\u79F0" aria-hidden="true">#</a> \u586B\u5199\u9879\u76EE\u540D\u79F0</h3><p><img src="'+c+'" alt="Spring Boot"></p><h3 id="\u9879\u76EE\u67B6\u6784\u53CA\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u67B6\u6784\u53CA\u4F9D\u8D56" aria-hidden="true">#</a> \u9879\u76EE\u67B6\u6784\u53CA\u4F9D\u8D56</h3><p><img src="'+i+`" alt="Spring Boot"></p><h2 id="\u6DFB\u52A0\u6D4B\u8BD5\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6D4B\u8BD5\u63A7\u5236\u5668" aria-hidden="true">#</a> \u6DFB\u52A0\u6D4B\u8BD5\u63A7\u5236\u5668</h2><p>\u627E\u5230\u5165\u53E3\u7684\u6587\u4EF6, \u5C06\u5176\u4FEE\u6539\u6210\u5982\u4E0B\u6240\u793A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>springboot<span class="token punctuation">.</span>first</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstApplication</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello Spring Boot&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">FirstApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>@SpringBootApplication</code> \u662F Spring Boot \u9879\u76EE\u7684\u6838\u5FC3\u6CE8\u89E3, \u4E3B\u8981\u76EE\u7684\u662F\u5F00\u542F\u81EA\u52A8\u914D\u7F6E\u3002main \u65B9\u6CD5\u662F\u4E00\u4E2A\u6807\u51C6\u7684 Java \u5E94\u7528\u7684 main \u65B9\u6CD5, \u4E3B\u8981\u4F5C\u7528\u662F\u4F5C\u4E3A\u9879\u76EE\u542F\u52A8\u7684\u5165\u53E3\u3002</p></div><h3 id="\u8BBF\u95EE\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u6D4B\u8BD5" aria-hidden="true">#</a> \u8BBF\u95EE\u6D4B\u8BD5</h3><p>\u8FD0\u884C\u9879\u76EE, \u628A\u5B83\u5F53\u6210\u4E00\u4E2A java \u7C7B\u8FD0\u884C\u5C31\u53EF\u4EE5\u4E86</p><p><img src="`+l+'" alt="Spring Boot"></p><p>\u8FD0\u884C\u4FE1\u606F</p><p><img src="'+u+'" alt="Spring Boot"></p><p>\u6D4F\u89C8\u5668\u8BBF\u95EE</p><p><img src="'+r+`" alt="Spring Boot"></p><h2 id="intellij-idea-\u914D\u7F6E\u70ED\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#intellij-idea-\u914D\u7F6E\u70ED\u90E8\u7F72" aria-hidden="true">#</a> IntelliJ IDEA \u914D\u7F6E\u70ED\u90E8\u7F72</h2><h3 id="\u914D\u7F6E-pom-xml" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-pom-xml" aria-hidden="true">#</a> \u914D\u7F6E pom.xml</h3><p>\u5F15\u5165\u70ED\u52A0\u8F7D\u7684\u63D2\u4EF6</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>project \u4E2D\u6DFB\u52A0 spring-boot-maven-plugin, \u4E3B\u8981\u5728 eclipse \u4E2D\u8D77\u4F5C\u7528, idea \u4E0D\u9700\u8981\u52A0\u6B64\u914D\u7F6E, springboot \u9879\u76EE\u7684\u8BDD, \u5E94\u8BE5\u662F\u6709\u6B64\u914D\u7F6E, \u52A0\u91CC\u9762\u7684\u5185\u5BB9\u5373\u53EF\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fork</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fork</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E-maven-\u4E0B\u8F7D\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-maven-\u4E0B\u8F7D\u52A0\u901F" aria-hidden="true">#</a> \u914D\u7F6E Maven \u4E0B\u8F7D\u52A0\u901F</h3><p>\u53F3\u952E\u9879\u76EE\u9009\u4E2D maven \u9009\u9879, \u7136\u540E\u9009\u62E9 &quot;open settings.xml&quot; \u6216\u8005 &quot;create settings.xml&quot;, \u7136\u540E\u628A\u5982\u4E0B\u4EE3\u7801\u7C98\u8D34\u8FDB\u53BB\u5C31\u53EF\u4EE5\u4E86. \u91CD\u542F IDE, \u611F\u53D7\u901F\u5EA6\u98DE\u8D77\u6765\u7684\u611F\u89C9\u5427\uFF01\uFF01\uFF01</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.0.0<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- mirror
         | Specifies a repository mirror site to use instead of a given repository. The repository that
         | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
         | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
         |
        &lt;mirror&gt;
          &lt;id&gt;mirrorId&lt;/id&gt;
          &lt;mirrorOf&gt;repositoryId&lt;/mirrorOf&gt;
          &lt;name&gt;Human Readable Name for this Mirror.&lt;/name&gt;
          &lt;url&gt;http://my.repository.com/repo/path&lt;/url&gt;
        &lt;/mirror&gt;
         --&gt;</span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>uk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Human Readable Name for this Mirror.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://uk.maven.org/maven2/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>CN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>OSChina Central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.oschina.net/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>internal nexus repository<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- &lt;url&gt;http://192.168.1.100:8081/nexus/content/groups/public/&lt;/url&gt;--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://repo.maven.apache.org/maven2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intellij-idea-\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#intellij-idea-\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> IntelliJ IDEA \u76F8\u5173\u914D\u7F6E</h3><p>\u70B9\u51FB file , Settings , Build , Execution, Deplment</p><p><img src="`+k+'" alt="Spring Boot"></p><p>\u7136\u540E\u8BB0\u5F97 apply, ok</p><p>\u7EC4\u5408\u952E: <code>Shift+ALT+Ctrl+/</code> , \u9009\u62E9&quot;Registry&quot;, \u56DE\u8F66, \u627E\u5230&quot;complier.automake.allow.when.app.running&quot;</p><p><img src="'+g+'" alt="Spring Boot"></p><p>\u5230\u6B64\u5168\u90E8\u914D\u7F6E\u5B8C\u6BD5, \u624B\u52A8\u91CD\u542F\u4E00\u6B21, \u4FEE\u6539\u4EE3\u7801\u4FDD\u6301\u5373\u53EF\u770B\u5230\u63A7\u5236\u53F0\u5728\u81EA\u52A8\u91CD\u542F</p>',39),v=[m];function b(h,f){return s(),a("div",null,v)}var S=n(d,[["render",b],["__file","spring-boot-by-idea-hot-deploy.html.vue"]]);export{S as default};
