<html>
<body>
<h1 id="-">第二十到第二十一天：让你和页面对话</h1>
<h2 id="-">课程目标</h2>
<ul>
<li>掌握 JavaScript 事件的概念，并能写出基本的事件相关的代码</li>
<li>掌握如何通过 JavaScript 操作 DOM 的样式</li>
</ul>
<h2 id="-">课程描述</h2>
<h3 id="-">阅读</h3>
<p>首先学习了解 JavaScript 事件的知识</p>
<ul>
<li><a href="http://www.w3school.com.cn/js/js_htmldom_events.asp">W3School 事件</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events">MDN 事件</a></li>
<li><a href="http://www.w3school.com.cn/jsref/dom_obj_text.asp">HTML DOM Text 对象</a></li>
<li><a href="http://www.w3school.com.cn/jsref/dom_obj_pushbutton.asp">HTML DOM Button 对象</a></li>
</ul>
<h3 id="-">编码</h3>
<pre><code>&lt;<span class="hljs-selector-tag">input</span> id=<span class="hljs-string">"name"</span> type=<span class="hljs-string">"text"</span>&gt;    
&lt;<span class="hljs-selector-tag">button</span> id=<span class="hljs-string">"submit-btn"</span>&gt;Submit&lt;/button&gt;
</code></pre><p>在HTML中增加上面的代码，然后通过JavaScript编写如下功能：</p>
<ul>
<li>当点击按钮 <code>submit-btn</code> 时，在console中输出 <code>name</code> 中的内容</li>
<li>在输入过程中，如果按回车键，则同样执行上一条的需求</li>
<li>在输入过程中，如果按 ESC 键，则把输入框中的内容清空</li>
</ul>
<h3 id="-">阅读</h3>
<p>接下来学习如何用 JavaScript 操作 DOM 样式</p>
<ul>
<li><a href="http://www.w3school.com.cn/js/js_htmldom_css.asp">W3School 样式</a></li>
<li><a href="http://www.w3school.com.cn/jsref/dom_obj_style.asp">W3School HTML DOM Style 对象</a></li>
<li><a href="https://www.cnblogs.com/aademeng/articles/6279060.html">javascript 动态修改css样式方法汇总(四种方法)</a></li>
<li><a href="https://www.cnblogs.com/majingyi/p/6840818.html">cssText的用法以及特点</a></li>
<li><a href="https://www.cnblogs.com/GreenLeaves/p/5757216.html">JavaScript之ClassName属性学习</a></li>
</ul>
<h3 id="-">编码</h3>
<p>控制元素的显示及隐藏</p>
<pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>    
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>IFE ECMAScript<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
        <span class="hljs-selector-tag">select</span> {
            <span class="hljs-attribute">display</span>: none;
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>            
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"school"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"status"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span>&gt;</span>
        School
    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"company"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"status"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span>&gt;</span>
        Company
    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"school-select"</span>&gt;</span>        
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>北京邮电大学<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>黑龙江大学<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>华中科技大学<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"company-select"</span>&gt;</span>        
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>百度<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>爱奇艺<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>        
    <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><p>基于如上 HTML，实现以下功能：</p>
<ul>
<li>当用户选择了 School 的单选框时，显示 School 的下拉选项，隐藏 Company 的下拉选项</li>
<li>当用户选择了 School 的单选框时，显示 Company 的下拉选项，隐藏 School 的下拉选项</li>
</ul>
<h3 id="-">编码</h3>
<p>再次结合事件和样式设置，进行练习</p>
<pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>    
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>IFE ECMAScript<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
        <span class="hljs-selector-class">.palette</span> {
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
            <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
            <span class="hljs-attribute">list-style</span>: none;
        }
        <span class="hljs-selector-class">.palette</span> <span class="hljs-selector-tag">li</span> {
            <span class="hljs-attribute">width</span>: <span class="hljs-number">40px</span>;
            <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;
            <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#000</span>;
            <span class="hljs-attribute">cursor</span>: pointer;
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>            
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"palette"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:crimson"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:bisque"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:blueviolet"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:coral"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:chartreuse"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:darkolivegreen"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:cyan"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#194738"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>        
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-picker"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
        <span class="hljs-keyword">var</span> list = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">"li"</span>);
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = i = <span class="hljs-number">0</span>, len = list.length; i &lt; len; i++) {
            list[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{
                <span class="hljs-keyword">var</span> t = e.target;
                <span class="hljs-keyword">var</span> c = t.style.backgroundColor;
                <span class="hljs-keyword">var</span> p = <span class="hljs-built_in">document</span>.getElementsByClassName(<span class="hljs-string">"color-picker"</span>)[<span class="hljs-number">0</span>]
                p.innerHTML = c;
                p.style.color = c;

            }
        }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><p>基于如上 HTML，实现如下功能：</p>
<ul>
<li>点击某一个 Li 标签时，将 Li 的背景色显示在 P 标签内，并将 P 标签中的文字颜色设置成 Li 的背景色</li>
</ul>
<h3 id="-">阅读</h3>
<p>继续阅读，再次理解 JavaScript 的事件机制，并了解事件代理</p>
<ul>
<li><a href="https://www.cnblogs.com/lazychen/p/5664788.html">初步理解JS的事件机制</a></li>
<li><a href="https://www.cnblogs.com/liugang-vip/p/5616484.html">js中的事件委托或是事件代理详解</a></li>
<li><a href="https://blog.csdn.net/supercoooooder/article/details/52190100">关于JS事件冒泡与JS事件代理（事件委托）</a></li>
<li><a href="https://segmentfault.com/a/1190000002613617">JavaScript事件代理和委托</a></li>
</ul>
<h3 id="-">编码</h3>
<p>基于上面的学习，如果你上一个练习没有用到事件代理的方式，那么请重构上一个编码练习，如果已经用到了，则进入下一个练习</p>
<h3 id="-">阅读</h3>
<p>在进行下一个练习之前，我们顺便学习一个新知识：定时</p>
<ul>
<li><a href="http://www.w3school.com.cn/jsref/met_win_settimeout.asp">W3School SetTimeout</a></li>
<li><a href="http://www.jb51.net/article/35535.htm">JS中setTimeout()的用法详解</a></li>
<li><a href="http://www.w3school.com.cn/jsref/met_win_setinterval.asp">W3School SetInterval</a></li>
<li><a href="https://www.cnblogs.com/everest33Tong/p/6322484.html">js setInterval详解</a></li>
<li><a href="http://www.jb51.net/article/74606.htm">JavaScript中SetInterval与setTimeout的用法详解</a></li>
</ul>
<h3 id="-">编码</h3>
<pre><code>&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"fade-obj"</span> style=<span class="hljs-string">"width:300px;height:300px;background:#000"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;
&lt;button <span class="hljs-built_in">id</span>=<span class="hljs-string">"fade-btn"</span>&gt;淡出&lt;/button&gt;
</code></pre><p>针对以上 HTML，分别使用 setTimeout 和 setInterval 实现以下功能：</p>
<ul>
<li>点击按钮时，开始改变 fade-obj 的透明度，开始一个淡出（逐渐消失）动画，直到透明度为0</li>
<li>在动画过程中，按钮的状态变为不可点击</li>
<li>在动画结束后，按钮状态恢复，且文字变成“淡入”</li>
<li>在 按钮显示 淡入 的状态时，点击按钮，开始一个“淡入”（逐渐出现）的动画，和上面类似按钮不可点，直到透明度完全不透明</li>
<li>淡入动画结束后，按钮文字变为“淡出”</li>
<li>暂时不要使用 CSS animation （以后我们再学习）</li>
</ul>
<h3 id="-">阅读</h3>
<p>在进行今天最后一个练习时，我们来学习一个新概念：CSS Sprite</p>
<ul>
<li><a href="https://blog.csdn.net/u011349149/article/details/24181675">浅谈CSS Sprite和实例解析</a></li>
<li><a href="http://www.jb51.net/article/83111.htm">CSS 使用Sprites技术实现圆角效果</a></li>
<li><a href="http://www.zhangxinxu.com/wordpress/2010/03/%E7%BF%BB%E8%AF%91-css-sprites%E5%AE%9E%E7%94%A8%E6%8A%80%E6%9C%AF%E8%BF%98%E6%98%AF%E7%94%9F%E5%8E%8C%E4%B9%8B%E7%89%A9%EF%BC%9F/">SS Sprites:实用技术还是生厌之物</a></li>
</ul>
<h3 id="-">编码</h3>
<p>学习来实现一个帧动画：</p>
<ul>
<li>基于一个我们提供的图片，实现 <a href="http://ife.baidu.com/2016/static/index.html">IFE2016中Erik笑容的动画</a></li>
<li>图片地址：<a href="http://ife.baidu.com/2016/static/img/erik_ce204002.jpg">http://ife.baidu.com/2016/static/img/erik_ce204002.jpg</a></li>
<li>注意，依然不要使用 CSS animation，因为我们这里要学习的是使用 JavaScript 来操作 CSS，而不是为了完成这个任务。</li>
</ul>
</body>
</html>
