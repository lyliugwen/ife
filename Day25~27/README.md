<h1 id="-">第二十五天到第二十七天 倒数开始 滴答滴 滴答滴</h1>
<h2 id="-">课程目标</h2>
<p>学习 JavaScript 的函数，学习如何使用和封装函数，学习Date对象</p>
<h2 id="-">课程描述</h2>
<h3 id="-">阅读</h3>
<p>可能大部分同学已经理解了函数是什么概念，不过对于一些新入门的同学，我们不妨再来仔细阅读一下什么是函数。</p>
<ul>
<li><a href="http://www.w3school.com.cn/js/js_functions.asp">W3School 函数</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Functions">MDN</a></li>
</ul>
<h3 id="-">编码</h3>
<p>我们假设要在某种特殊的机器人上写代码，但是这个机器人本身只实现了以下两个方法（函数）：</p>
<ul>
<li>Go，表示向当前方向前进一步</li>
<li>TurnLeft，表示向左转</li>
</ul>
<p>那我现在需要你做的任务是向前走两步，然后向左转，再向前走一步，所以代码是：</p>
<pre><code>Go()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
</code></pre><p>好，看上去没什么问题，我们加大难度，我们希望现在不向左转了，而是向右转，那么如何实现向右转了，我们可以通过三次向左转来实现</p>
<pre><code>Go()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
</code></pre><p>接下来，我重新定需求，我需要这个机器人，向前一步，然后向右转，向前两步，再向右转，向前一步，再向右转，向前三步，再向右转，那代码变成：</p>
<pre><code>Go()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
Go()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
TurnLeft()<span class="hljs-comment">;</span>
</code></pre><p>这样看就比较长了，怎么解决呢？我们可以把一些重复的，可复用可抽象的代码封装成一个函数，我们现在新增一个函数叫做 TurnRight()，虽然机器人不直接支持向右转，但是我们通过一个封装了3次向左转的函数，实现了这个功能：</p>
<pre><code><span class="hljs-selector-tag">function</span> <span class="hljs-selector-tag">TurnRight</span>() {
    <span class="hljs-selector-tag">TurnLeft</span>();
    <span class="hljs-selector-tag">TurnLeft</span>();
    <span class="hljs-selector-tag">TurnLeft</span>();    
}
<span class="hljs-selector-tag">Go</span>();
<span class="hljs-selector-tag">TurnRight</span>();
<span class="hljs-selector-tag">Go</span>();
<span class="hljs-selector-tag">Go</span>();
<span class="hljs-selector-tag">TurnRight</span>();
<span class="hljs-selector-tag">Go</span>();
<span class="hljs-selector-tag">TurnRight</span>();
<span class="hljs-selector-tag">Go</span>();
<span class="hljs-selector-tag">Go</span>();
<span class="hljs-selector-tag">Go</span>();
<span class="hljs-selector-tag">TurnRight</span>();
</code></pre><p>这样我们的代码就精简了许多，接下来需求变成了前进4步，向右转，前进8步向右转，前进20步向右转……不想写了，大家应该能想到我们需要写很多的Go()，那怎么封装呢？难道我们封装很多 Go4Steps(), Go8Steps()吗？显然这样做只是用一种不优雅的方式代替了另外一种不优雅的方式。我们会发现Go多少步，行为是一致的，只是执行的次数不同，所以我们可以新增一个函数，把要执行的步数作为参数传给这个函数，如：</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">GoSteps</span><span class="hljs-params">(n)</span></span> {
    <span class="hljs-keyword">while</span> (n<span class="hljs-comment">--) {</span>
        Go();
    }
}
</code></pre><p>这样我们的代码就会简化很多，当然上面的GoSteps函数目前是不严谨的，我们必须考虑更多的问题，比如传入参数的正确性和合法性，比如传入的参数是不是数字，是不是正整数，现在请你自己写一个GoSteps函数，然后跑通下面的测试用例。</p>
<pre><code><span class="hljs-selector-tag">function</span> <span class="hljs-selector-tag">Go</span>() {
    <span class="hljs-selector-tag">console</span><span class="hljs-selector-class">.log</span>(<span class="hljs-string">"Go"</span>);
}

<span class="hljs-selector-tag">function</span> <span class="hljs-selector-tag">GoSteps</span>(n) {
    ……
}

<span class="hljs-selector-tag">GoSteps</span>(<span class="hljs-number">10</span>); <span class="hljs-comment">// Go 10次</span>
<span class="hljs-selector-tag">GoSteps</span>(<span class="hljs-number">1</span>); <span class="hljs-comment">// Go 1次</span>
<span class="hljs-selector-tag">GoSteps</span>(); <span class="hljs-comment">// Go 1次，认为缺少参数时，默认参数为1</span>
<span class="hljs-selector-tag">GoSteps</span>(<span class="hljs-number">0</span>);  <span class="hljs-comment">// 0次</span>
<span class="hljs-selector-tag">GoSteps</span>(-<span class="hljs-number">1</span>);  <span class="hljs-comment">// 0次</span>
<span class="hljs-selector-tag">GoSteps</span>(<span class="hljs-number">1.4</span>);  <span class="hljs-comment">// Go 1次</span>
<span class="hljs-selector-tag">GoSteps</span>(<span class="hljs-number">1.6</span>);  <span class="hljs-comment">// Go 1次</span>
<span class="hljs-selector-tag">GoSteps</span>(-<span class="hljs-number">1</span>);  <span class="hljs-comment">// 0次</span>
<span class="hljs-selector-tag">GoSteps</span>(true);  <span class="hljs-comment">// Go 1次</span>
<span class="hljs-selector-tag">GoSteps</span>(false);  <span class="hljs-comment">// 0次</span>
<span class="hljs-selector-tag">GoSteps</span>(<span class="hljs-string">"Test"</span>);  <span class="hljs-comment">// 0次</span>
<span class="hljs-selector-tag">GoSteps</span>(NaN);  <span class="hljs-comment">// 0次</span>
<span class="hljs-selector-tag">GoSteps</span>(null);  <span class="hljs-comment">// 0次</span>
</code></pre><h3 id="-">阅读</h3>
<p>接下来我们看一个复杂一些的问题，不过在这之前，我们先学习一下 Date 对象，来帮助我们接下来的练习。</p>
<ul>
<li><a href="http://www.w3school.com.cn/js/js_obj_date.asp">W3School Date</a></li>
</ul>
<p>然后再复习一下 SetTimeout 和 SetInterval</p>
<ul>
<li><a href="http://www.w3school.com.cn/js/js_timing.asp">W3School 定时</a></li>
</ul>
<h3 id="-">编码</h3>
<p>我们现在来做一个最简单的时钟，通过小练习来学习 Date，复习定时，然后再练习一下函数的封装<br>具体需求如下：</p>
<ul>
<li>在页面中显示当前日期及时间，按秒更新</li>
<li>格式为 YYYY 年 MM 月 DD 日 星期 D HH:mm:ss</li>
<li>注意位数的补齐，比如：<br>-- 假设时间为2008年10月10日星期一的12点12分12秒，显示2008年10月10日星期一 12:12:12<br>-- 假设时间为2008年1月1日星期一的3点2分2秒，显示2008年01月01日星期一 03:02:02</li>
</ul>
<p>编码过程中，我们希望你注意对函数的封装，尽量让一个函数就做一个事情，而不要把所有的功能、代码揉在一起：</p>
<ul>
<li>封装一个函数，来根据某个日期返回这一天是星期几</li>
<li>封装一个函数，把月、日、小时等出现个位数的情况前面补充0，补充为两位，比如1变为01</li>
<li>封装一个函数，把最后的日期时间，按照要求的格式进行包装</li>
<li>可能不止上面这些，尽可能地进行功能的解耦和拆解</li>
</ul>
<h3 id="-">编码</h3>
<p>完成上面需求后，现在需求做一些小的变更</p>
<ul>
<li>输出格式变为：2008-10-10 Monday 07:10:30 PM</li>
</ul>
<h3 id="-">编码</h3>
<p>基于上面的需求，要求，同时在页面上，输出两种格式的日期时间<br>希望通过上面的练习，让你体会函数的概念、作用和价值</p>
<h3 id="-">编码</h3>
<p>现在我们要做一个稍微复杂的东西，如下HTML，有一堆Select用于选择日期和时间，在选择后，实时在 id 为 result-wrapper 的 p 标签中显示所选时间和当前时间的差值。</p>
<pre><code>&lt;select id=<span class="hljs-string">"year-select"</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"2000"</span>&gt;<span class="hljs-number">2000</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"2001"</span>&gt;<span class="hljs-number">2001</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"2002"</span>&gt;<span class="hljs-number">2002</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    ……
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"2032"</span>&gt;<span class="hljs-number">2002</span>&lt;/<span class="hljs-keyword">option</span>&gt;
&lt;/select&gt;

&lt;select id=<span class="hljs-string">"month-select"</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"1"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"2"</span>&gt;<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    ……
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"12"</span>&gt;<span class="hljs-number">12</span>&lt;/<span class="hljs-keyword">option</span>&gt;
&lt;/select&gt;

&lt;select id=<span class="hljs-string">"day-select"</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"1"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"2"</span>&gt;<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    ……
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"31"</span>&gt;<span class="hljs-number">31</span>&lt;/<span class="hljs-keyword">option</span>&gt;
&lt;/select&gt;

&lt;select id=<span class="hljs-string">"hour-select"</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"0"</span>&gt;<span class="hljs-number">00</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"1"</span>&gt;<span class="hljs-number">01</span>&lt;/<span class="hljs-keyword">option</span>&gt;        
    ……
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"23"</span>&gt;<span class="hljs-number">23</span>&lt;/<span class="hljs-keyword">option</span>&gt;
&lt;/select&gt;

&lt;select id=<span class="hljs-string">"minite-select"</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"0"</span>&gt;<span class="hljs-number">0</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"1"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    ……
    &lt;<span class="hljs-keyword">option</span>&gt;<span class="hljs-number">59</span>&lt;/<span class="hljs-keyword">option</span>&gt;
&lt;/select&gt;

&lt;select id=<span class="hljs-string">"second-select"</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"0"</span>&gt;<span class="hljs-number">0</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    &lt;<span class="hljs-keyword">option</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"1"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">option</span>&gt;
    ……
    &lt;<span class="hljs-keyword">option</span>&gt;<span class="hljs-number">59</span>&lt;/<span class="hljs-keyword">option</span>&gt;
&lt;/select&gt;

&lt;p id=<span class="hljs-string">"result-wrapper"</span>&gt;现在距离 <span class="hljs-number">2001</span>年<span class="hljs-number">1</span>月<span class="hljs-number">1</span>日星期X HH:MM:SS 还有 X 天 X 小时 X 分 X 秒&lt;/p&gt;
</code></pre><ul>
<li>使用上方的HTML结构（可以根据需要自行微调）为基础编写JavaScript代码</li>
<li>当变更任何一个select选择时，更新 result-wrapper 的内容</li>
<li>当所选时间早于现在时间时，文案为 现在距离 &quot;所选时间&quot; 已经过去 xxxx</li>
<li>当所选时间晚于现在时间时，文案为 现在距离 &quot;所选时间&quot; 还有 xxxx</li>
<li>注意当前时间经过所选时间时候的文案变化</li>
<li>注意选择不同月份的时候，日期的可选范围不一样，比如1月可以选31天，11月只有30天，注意闰年</li>
<li>同样，需要注意，通过优雅的函数封装，使得代码更加可读且可维护</li>
</ul>
<h2 id="-">进阶任务</h2>
<p>如果你很快就完成上面的任务，可以去LeetCode上去多进行一些练习。</p>
<h2 id="-">提交</h2>
<p>把你今天觉得做得最好的代码放在Github后进行提交</p>
<h2 id="-">总结</h2>
<p>依然把今天的学习用时，收获，问题进行记录</p>
<h2 id="-">下一个任务预告</h2>
<p>接下来我们会做很多综合性的小练习，来学习如何用HTML，CSS和JavaScript解决一些小问题</p>
</div></div><div class="my-learn-info-wrap"><a name="learn" class="anchor">-</a><div class="my-learn-info"><p class="learn-status-info"><i class="icon-calendar"></i>你已在该课程学习了<em>0.8</em>天</p><button class="submit-work-btn ife-primary-btn btn">完成学习提交作业</button><button class="giveup-learn-btn ife-btn btn" data-loading-text="请求中...">放弃学习</button></div></div><div class="card learn-result-wrap work-info-wrap first"></div><div class="card learn-result-wrap note-info-wrap"><div class="my-note-info learn-result none-note"><div class="title"><span class="title-content">您已经在该课程发表了<em>0</em>篇学习笔记</span><button class="create-note-btn btn"><i class="icon-edit"></i>新建笔记</button></div></div><div class="recm-note-info learn-result"><div class="title">课程优秀学习笔记</div><p class="note-empty-tip">暂无优秀学习笔记~</p></div></div></main>
<footer><div class="footer"><div class="footer-wrapper"><p class="first"><span class="contact">IFE微信公众号：</span><span class="footer-content footer-mg">baidu_ife</span><span class="contact">IFE微博：<a target="_blank" class="footer-content" href="http://weibo.com/u/5568860641?topnav=1&wvr=6&topsug=1">Baidu前端技术学院</a></span></p><p class="friend-link"><span class="note footer-text">友情链接:</span><a class="footer-mg" target="_blank" title="百度EFE前端团队" href="http://efe.baidu.com">百度EFE</a><a class="footer-mg" target="_blank" href="http://campus.baidu.com/">百度校园</a><a class="footer-mg" target="_blank" href="http://talent.baidu.com/external/baidu/campus.html">百度校园招聘</a><a class="footer-mg" target="_blank" href="http://bit.baidu.com/?fr=ife/">百度技术学院</a></p><p class="learn-source"><span class="source footer-text">资源:</span><a class="footer-mg" target="_blank" href="https://github.com/baidu-ife">IFE 2015</a><a class="footer-mg" href="http://ife.baidu.com/2016/static/index.html" target="_blank">IFE 2016</a><a class="footer-mg" href="http://ife.baidu.com/2017" target="_blank">IFE 2017</a></p><p class="copyright"><span class="copyright-text"><span>©2017&nbsp;Baidu&nbsp;</span><a href="//www.baidu.com/duty/" target="_blank">使用百度前必读</a>&nbsp;<a href="http://jianyi.baidu.com" target="_blank">意见反馈</a>&nbsp;<span>京ICP证030173号&nbsp;</span></span></p></div></div>
</footer></div><a id="go-top" style="display: none;" href="#"><i class="icon-arrow-up"></i></a><script src="http://s1.bdstatic.com/r/www/cache/efe/esl/2-1-6/esl.js"></script><script>require.config({"baseUrl": "//ife.baidu.com/2018/asset","paths": {"babelHelpers": "babelHelpers"},"packages": [{"name": "vue-router","location": "../dep/vue-router","main": "dist/vue-router.common"},{"name": "etpl","location": "../dep/etpl/asset","main": "main"},{"name": "saber-emitter","location": "../dep/saber-emitter/asset","main": "emitter"},{"name": "bootstrapValidator","location": "../dep/bootstrapValidator","main": "dist/js/bootstrapValidator"},{"name": "bootstrap-slider","location": "../dep/bootstrap-slider","main": "dist/bootstrap-slider"},{"name": "slick-carousel","location": "../dep/slick-carousel","main": "slick/slick"},{"name": "simplemde","location": "../dep/simplemde/asset","main": "js/simplemde"},{"name": "codemirror","location": "../dep/codemirror","main": "lib/codemirror"},{"name": "codemirror-spell-checker","location": "../dep/codemirror-spell-checker/asset","main": "js/spell-checker"},{"name": "typo-js","location": "../dep/typo-js","main": "typo"},{"name": "marked","location": "../dep/marked","main": "lib/marked"},{"name": "highlight.js","location": "../dep/highlight.js","main": "lib/index"},{"name": "jquery-editable-select","location": "../dep/jquery-editable-select","main": "dist/jquery-editable-select.min"},{"name": "bootstrap","location": "../dep/bootstrap/js","main": "./dist/js/npm"},{"name": "bce-bos-uploader","location": "../dep/bce-bos-uploader","main": "bce-bos-uploader.bundle.min"},{"name": "echarts","location": "../dep/echarts/lib","main": "echarts"},{"name": "zrender","location": "../dep/zrender","main": "lib/zrender"},{"name": "vue","location": "../dep/vue","main": "dist/vue.runtime.common"},{"name": "element-ui","location": "../dep/element-ui","main": "lib/element-ui.common"},{"name": "async-validator","location": "../dep/async-validator","main": "lib/index"},{"name": "babel-helper-vue-jsx-merge-props","location": "../dep/babel-helper-vue-jsx-merge-props","main": "index"},{"name": "deepmerge","location": "../dep/deepmerge","main": "dist/umd"},{"name": "throttle-debounce","location": "../dep/throttle-debounce","main": "index"}],"shim": {"jquery": {"exports": "$"}},"waitSeconds": 5});</script><script src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1.10.2_d88366fd.js"></script>
<script src="//ife.baidu.com/2018/asset/course/courseDetail_aio_61e6e3d.js"></script>
<script src="//ife.baidu.com/2018/dep/course_detail56da3f2c_vendor_503601d.js"></script>
<script>
    require(['course/courseDetail'], function (app) {
        app.init([], {
            courseId: "51",
            courseTitle: "\u7b2c\u4e8c\u5341\u4e94\u5929\u5230\u7b2c\u4e8c\u5341\u4e03\u5929 \u5012\u6570\u5f00\u59cb \u6ef4\u7b54\u6ef4 \u6ef4\u7b54\u6ef4",
            hasWorkInfo: 1,
            workInfo: 0        });
    });
</script>
</body>
</html>
