import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as p,d as e,a as n,e as t}from"./app-44879862.js";const o={},l=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"这边用到的 webpack 版本 4.0+, 这边将接触到 TypeScript, ES6, ES7, sass 等 loader ... 不想解释了直接上代码。")],-1),c=t(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--- dist
  <span class="token operator">|</span>- css
  <span class="token operator">|</span>- js
  <span class="token operator">|</span>- images
  <span class="token operator">|</span>- fonts
  <span class="token operator">|</span>- index.html
--- src
  <span class="token operator">|</span>- scss
  <span class="token operator">|</span>- js
  <span class="token operator">|</span>- images
  <span class="token operator">|</span>- fonts
  <span class="token operator">|</span>- index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-demo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --compress --progress &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --mode development&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --mode production&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@babel/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.1.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.1.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;autoprefixer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^9.3.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.26.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^10.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.7.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;clean-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;compression-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;css-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.9.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.1.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;file-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;html-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;html-withimg-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.16&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mini-css-extract-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.4.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node-sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.10.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;open-browser-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postcss-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sass-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;standard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^12.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;style-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.23.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ts-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.3.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.25.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.10&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babelrc" tabindex="-1"><a class="header-anchor" href="#babelrc" aria-hidden="true">#</a> .babelrc</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslintrc-js" tabindex="-1"><a class="header-anchor" href="#eslintrc-js" aria-hidden="true">#</a> .eslintrc.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-config-js" tabindex="-1"><a class="header-anchor" href="#webpack-config-js" aria-hidden="true">#</a> webpack.config.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 拆分 css 出来单独打包</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 添加不同浏览器的兼容</span>
<span class="token keyword">const</span> autoprefixer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 打包之前清掉原打包信息</span>
<span class="token keyword">const</span> CleanWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 结合 postcss 来解决不同浏览器的兼容</span>
<span class="token keyword">const</span> OptimizeCssAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OpenBrowserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;open-browser-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> CompressionWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> productionGzipExtensions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">entry</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/js/main.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]-[hash:32].js&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.css&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.scss&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.sass&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>

                <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;ts-loader&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>

                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
                        <span class="token punctuation">}</span>

                    <span class="token punctuation">]</span>

                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token comment">// exclude: /node_modules/,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(sass|scss)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token comment">// exclude: /node_modules/,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>

                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                                    <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                                        <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                            <span class="token string">&#39;ie &gt;= 8&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;ie_mob &gt;= 10&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;ff &gt;= 26&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;chrome &gt;= 20&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;safari &gt;= 6&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;opera &gt;= 12&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;Firefox &gt;= 24&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;Explorer &gt;= 8&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;ios &gt;= 5&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;android &gt;= 2.3&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;bb &gt;= 10&#39;</span><span class="token punctuation">,</span>
                                            <span class="token string">&#39;last 1 version&#39;</span>
                                        <span class="token punctuation">]</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span>
                        <span class="token punctuation">}</span>

                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif|jpeg|woff|woff2|svg|ttf|eot)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>

                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;images/[name]-[hash:32].[ext]&#39;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>

                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-withimg-loader&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(woff|woff2|svg|ttf|eot)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>

                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fonts/[name].[hash:8].[ext]&#39;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span> <span class="token comment">// 项目设置打包到dist下的fonts文件夹下</span>

                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 去掉属性值后的双引号</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/[name]-[hash:32].css&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">assetNameRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">cssProcessor</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cssnano&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cssProcessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">safe</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">discardComments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">removeAll</span><span class="token operator">:</span> <span class="token boolean">true</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">canPrint</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">OpenBrowserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;\\\\.(&#39;</span> <span class="token operator">+</span> productionGzipExtensions<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;|&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> &#39;<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function i(r,u){return a(),p("div",null,[l,e(" more "),c])}const v=s(o,[["render",i],["__file","webpack-guide.html.vue"]]);export{v as default};
