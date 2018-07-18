﻿<h1 id="-">第四十二天到第四十三天：开一家餐厅吧（一）</h1>
<h2 id="-">课程目标</h2>
<p>通过一个新的系列课程，我们来学习更多的JavaScript知识，比如如何在JavaScript使用面向对象编程，如何在你的设计中应用设计模式.</p>
<h2 id="-">课程描述</h2>
<h3 id="-">需求</h3>
<p>我们现在要开一个餐厅啦，餐厅里面有服务员，有厨师，有顾客。学习面向对象，为餐厅和几个角色创建自己的类吧。</p>
<p>餐厅可以招聘或者解雇职员，职员越多，就越能够满足更多的顾客需求，从而赚取更多的钱</p>
<p>餐厅里的容量是有限的，当顾客坐满了，其他顾客需要排队</p>
<p>服务员的工作有两个职责，一个是负责点菜，另外一个是上菜</p>
<p>厨师的职责就一个，烹饪食物</p>
<p>顾客可以做两件事情，一个是点菜，一个是吃</p>
<p>系列任务的第一个部分，我们先只实现类的编写。并通过大量阅读掌握JavaScript的面向对象编程</p>
<h3 id="-">阅读</h3>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object-oriented_JS">MDN 适合初学者的JavaScript面向对象</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes">MDN 对象原型</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance">MDN JavaScript 中的继承</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_building_practice">MDN 实践对象构造</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript">MDN JavaScript面向对象编程</a></li>
<li><a href="http://www.cnblogs.com/tugenhua0707/p/5068449.html">深入理解Javascript面向对象编程</a></li>
<li><a href="http://www.jb51.net/article/88295.htm">JS 面向对象之继承---多种组合继承详解 </a></li>
<li><a href="https://www.cnblogs.com/yanayana/p/6781166.html">Javascript面向对象三大特性（封装性、继承性、多态性）详解及创建对象的各种方法</a></li>
</ul>
<h3 id="-">设计</h3>
<p>下面的设计只是草案，根据自己理解和需要自行设计</p>
<ul>
<li>餐厅类<ul>
<li>属性：金钱，座位数量、职员列表</li>
<li>方法：招聘职员，解雇职员</li>
</ul>
</li>
<li>职员类<ul>
<li>属性：ID，姓名，工资</li>
<li>方法：完成一次工作</li>
</ul>
</li>
<li>服务员类，继承自职员<ul>
<li>完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为</li>
</ul>
</li>
<li>厨师类，继承自职员<ul>
<li>完成一次工作：烹饪出菜品</li>
</ul>
</li>
<li>顾客类<ul>
<li>方法：点菜，吃</li>
</ul>
</li>
<li>菜品类<ul>
<li>属性：名字、烹饪成本、价格</li>
</ul>
</li>
</ul>
<h3 id="-">编码</h3>
<ul>
<li>请分别使用 ES5 和 ES6 来实现以上类的定义</li>
</ul>
<h3 id="-">测试用例</h3>
<p>测试用例伪代码，在Chrome控制台中执行</p>
<pre><code><span class="hljs-keyword">var</span> ifeRestaurant = <span class="hljs-keyword">new</span> <span class="hljs-type">Restaurant</span>({
    cash: <span class="hljs-type">1000000</span>,
    seats: <span class="hljs-type">20</span>,
    staff: <span class="hljs-type"></span>[]
});

<span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Cook</span> = <span class="hljs-keyword">new</span> <span class="hljs-type">Cook</span>(<span class="hljs-string">"Tony"</span>, <span class="hljs-number">10000</span>);
ifeRestaurant.hire(<span class="hljs-keyword">new</span><span class="hljs-type">Cook</span>);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(<span class="hljs-keyword">new</span><span class="hljs-type">Cook</span>);
console.log(ifeRestaurant.staff);
</code></pre><h3 id="-">提交</h3>
<p>把你的代码放在Github后进行提交</p>
<h3 id="-">总结</h3>
<p>依然把今天的学习用时，收获，问题进行记录</p>
<h3 id="-">下一个任务预告</h3>
<p>明天我们继续该任务的下一个环节</p>