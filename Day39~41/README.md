﻿<h1 id="-">第三十九天到第四十一天：我是精明的小卖家（四）</h1>
<h2 id="-">课程目标</h2>
<p>今天我们将进行这个任务系列的最后一课，学习Location，Hash等相关知识，来实现最后一个需求</p>
<h2 id="-">课程描述</h2>
<h3 id="-">先来点简单的</h3>
<h4 id="-">阅读</h4>
<ul>
<li><a href="http://www.w3school.com.cn/jsref/dom_obj_location.asp">W3School Location</a></li>
<li><a href="https://blog.csdn.net/baidu_31333625/article/details/54288223">location.hash详解</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onhashchange">MDN onhashchange</a></li>
</ul>
<h4 id="-">需求</h4>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"a"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"b"</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"c"</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"cont"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><ul>
<li>基于以上HTML，点击对应按钮时候，改变div中的内容为按钮的文字。</li>
<li>刷新页面的时候，保持div中的显示</li>
<li>页面URL copy再打开后，保留渲染状态</li>
<li>通过location.hash来实现</li>
</ul>
<h4 id="-">设计</h4>
<p>按照传统思路，我们会给3个按钮绑定一个事件，事件中来改变id为cont的div中的内容，但在这个小任务中，我们需要改变一下逻辑。</p>
<p>这个需求中的关键，其实是在于通过URL中#后面的部分，来记录页面的状态，页面的渲染是由这个状态来驱动的。所以，点击按钮的时候，应该去做的事情，是更新这个状态。</p>
<p>然后对于状态改变这件事情，增加一个事件响应，来进行渲染。所以整个伪代码变为：</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> 解析<span class="hljs-title">Hash</span>，获取状态参数(<span class="hljs-params"></span>) </span>{
    取到需要的值，并返回
}

<span class="hljs-function"><span class="hljs-keyword">function</span> 渲染函数(<span class="hljs-params"></span>) </span>{
    内容 = 解析Hash，获取状态参数()
    cont的innerHTML = 内容
}

按钮点击事件 = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    设置新的hash
}

<span class="hljs-built_in">window</span>.onhashchange = 渲染函数

进来先执行一次渲染函数()
</code></pre><p>按照上面的基本思想进行代码的编写吧</p>
<h3 id="-">稍微复杂一点</h3>
<h4 id="-">需求</h4>
<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"a"</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"b"</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"c"</span>&gt;</span>C<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"d"</span>&gt;</span>D<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"e"</span>&gt;</span>E<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"f"</span>&gt;</span>F<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>


<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"contABC"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"contDEF"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><p>现在我们需要记录两个状态</p>
<ul>
<li>abc点击了，把按钮文字显示在contABC中</li>
<li>def点击了，把按钮文字显示在contDEF中</li>
<li>同样在页面刷新时，保留之前的渲染状态</li>
<li>页面URL copy再打开后，保留渲染状态</li>
</ul>
<h4 id="-">设计</h4>
<p>思路和前面一样，只是在获取状态参数的地方稍微复杂一点点，相信你能搞定的</p>
<h3 id="-">正式来做报表的事情了</h3>
<p>现在通过hash的方式</p>
<ul>
<li>把用户的一些交互状态通过某种方式记录在URL中</li>
<li>分享或再次打开某个URL，需要从URL中读取到数据状态，并且进行页面呈现的还原</li>
<li>需要记录的状态包括：产品的选择以及地域的选择</li>
</ul>
<h3 id="-pushstate">来学习一下 pushState</h3>
<h4 id="-">阅读</h4>
<ul>
<li><a href="http://www.zhangxinxu.com/wordpress/2013/06/html5-history-api-pushstate-replacestate-ajax/">ajax与HTML5 history pushState/replaceState实例</a></li>
<li><a href="https://blog.csdn.net/qq_31411389/article/details/60335817">H5，API的pushState()，replaceState()和popstate()作用，用法</a></li>
<li><a href="https://www.jianshu.com/p/21b90b47eb41">MVVM静态路由和动态路由</a></li>
</ul>
<h4 id="-">编码</h4>
<p>用pushState等代替前面直接操作hash的方式，来实现前面2个小需求及报表页面的需求</p>
<h3 id="-">提交</h3>
<p>把你的代码放在Github后进行提交</p>
<h3 id="-">总结</h3>
<p>依然把今天的学习用时，收获，问题进行记录</p>
<h3 id="-">下一个任务预告</h3>
<p>下一个任务将是全新的一个系列任务，敬请期待</p>