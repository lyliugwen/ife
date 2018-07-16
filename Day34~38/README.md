﻿第三十四天到第三十六天 我是精明的小卖家（二）</h1>
<h2 id="-">课程目标</h2>
<p>今天我们将学习SVG和Canvas，来继续丰富我们的销售报表</p>
<h2 id="-">课程描述</h2>
<h3 id="-">需求描述</h3>
<p>当上一课任务完成时，面对一个复杂数据的表格，估计没有人会仔细看这份数据的内容是什么，看也看不出什么。所以我们希望找到某种方式，让数据变得更加易读和易懂，而数据可视化正式解决这一问题的最佳答案。</p>
<p>在表格上方增加两个图表，一个折线图和一个柱状图，用于展现不同数据在12个月的销售情况。</p>
<h4 id="-">先了解一下数据可视化</h4>
<p>简要阅读下面两个文章了解数据可视化</p>
<ul>
<li><a href="https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96/1252367?fr=aladdin">数据可视化百科词条</a></li>
<li><a href="http://vis.baidu.com/chartusage/overview/">ECharts数据可视化规范</a></li>
</ul>
<h3 id="-">小练习</h3>
<h4 id="-">阅读</h4>
<p>我们将通过SVG及Canvas来分别实现折线图及柱状图，我们先来看看 SVG，使用SVG来实现我们的柱状图</p>
<ul>
<li><a href="http://www.w3school.com.cn/svg/index.asp">W3School SVG课程</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG">MDN SVG</a></li>
</ul>
<h4 id="-">小练习编码</h4>
<p>这个练习的代码和报表页面无关，单独新开一个页面来实现，通过SVG实现如下需求</p>
<ul>
<li>画一条线</li>
<li>画一个矩形</li>
<li>画一个圆形</li>
<li>显示一些文字</li>
<li>画一朵花</li>
<li>画一颗小树</li>
</ul>
<h3 id="-">先来个柱状图</h3>
<h4 id="-">需求详细描述</h4>
<p>没有过多复杂的要求，我们先把焦点聚焦在图形的绘制上。使用SVG，来实现这个柱状图，包括以下元素：</p>
<ul>
<li>横轴</li>
<li>纵轴</li>
<li>数据项</li>
<li>固定只显示华东地区手机12个月的数据</li>
<li>图表样式不做限制，可以参考ECharts</li>
<li>暂时不在图表上做任何文字显示</li>
</ul>
<h4 id="-">实现思路</h4>
<p>当你看完SVG，你会发现，大部分工作量都是在计算每个图形元素的位置及高宽</p>
<p>所以，找一个计算器很重要</p>
<p>新建一个js文件叫做：bar.js，把柱状图的代码放在这个文件里。</p>
<p>画每个柱子其实很简单，就是绘制一个矩形，但在绘制的过程中，我们需要考虑数据对应的柱子高度是多少，而这个比例我们在这个练习中，需要以所有数据的最大值来进行参考和计算</p>
<pre><code>
<span class="hljs-function"><span class="hljs-keyword">function</span></span> 绘制一个柱状图(柱状图数据) {
    定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
    定义好每一个柱子的宽度及柱子的间隔宽度
    定义好柱子颜色，轴的颜色

    拿到柱状图中的最大值<span class="hljs-built_in">Max</span>
    根据<span class="hljs-built_in">Max</span>和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例

    绘制横轴及纵轴
    遍历数据 {
        计算将要绘制柱子的高度和位置
        绘制每一个柱子
    }    
}
</code></pre><h3 id="canvas-">Canvas小练习</h3>
<h4 id="-">小练习编码</h4>
<p>这个练习的代码和报表页面无关，单独新开一个页面来实现，通过Canvas实现如下需求</p>
<ul>
<li>画一条线</li>
<li>画一个矩形</li>
<li>画一个圆形</li>
<li>显示一些文字</li>
<li>画一个时钟</li>
<li>画一朵云</li>
</ul>
<h4 id="-">再来个折线图</h4>
<p>我们再学习使用HTML5中第二个重要的绘图方式，Canvas，来绘制折线图</p>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial">MDN Canvas</a></li>
<li><a href="http://www.w3school.com.cn/tags/html_ref_canvas.asp">W3school Canvas</a></li>
</ul>
<h4 id="-">需求详细描述</h4>
<p>和柱状图一样，包括以下元素：</p>
<ul>
<li>横轴</li>
<li>纵轴</li>
<li>每个数据对应在坐标中的数据点，可以用一个直径为5的实心圆</li>
<li>每个数据点之间连接的直线</li>
<li>固定只显示华东地区手机12个月的数据</li>
</ul>
<h4 id="-">实现思路</h4>
<p>请准备好计算器。</p>
<p>新建一个js文件叫做：line.js，把折现图的代码放在这个文件里。</p>
<pre><code><span class="hljs-function"><span class="hljs-keyword">function</span></span> 绘制一个折线图(折线图数据) {
    定义好折线图绘制区域的高度，宽度，轴的高度，宽度
    定义好每一个数据点的直径，颜色，线的颜色，宽度    
    定义好没两个数据点之间的横向间隔距离

    拿到折线图中的最大值<span class="hljs-built_in">Max</span>
    根据<span class="hljs-built_in">Max</span>和你用来绘制折线图图像区域的高度，进行一个数据和像素的折算比例

    绘制横轴及纵轴
    遍历数据 {
        计算将要绘制数据点的坐标
        绘制数据点        
        <span class="hljs-keyword">if</span> 不是第一个点 {
            绘制这个数据点和上一个数据点的连线
        }
        记录下当前数据点的数据用于下一个点时绘制连线
    }    
}
</code></pre><h4 id="-">让图表数据可变</h4>
<p>上面我们的数据都是用的固定的，接下来我们需要让图表的数据可变。</p>
<p>我们给表格增加一个鼠标滑过的事件响应，当鼠标滑过任何一行时，把这一行的数据在两个图表中进行呈现</p>
<p>把两个图表做成左右布局，各占一半宽度，表格在图表下方，表单在图表上方，几个内容保证在一个屏幕中能够完整呈现</p>
<h4 id="-">设计思路</h4>
<p>我们不妨将你的两个图表进行一下调整，让它们和数据解耦的组件，提供一些方法（如果已经有面向对象基础的同学可以进行类的封装）</p>
<pre><code>折线图 = {

    图表数据: <span class="hljs-built_in">Array</span>

    相关各种定义

    ……

    绘制图表: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{

    }

    ……

    设置数据: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">数据</span>) </span>{
        根据新的数据从新 绘制图表()
    }

    ……   
};
</code></pre><p>这样，在鼠标滑动过某一行表格时，获取到对应行的数据，然后调用图表的设置数据方法。顺便提供一下鼠标滑过的设计思路，当然我相信到这里大部分同学已经知道怎么做了</p>
<p>实现思路一：</p>
<pre><code><span class="hljs-comment">// 在绘制表格的时候，给对应的td或者tr添加一个自定义属性，这一格数据属于哪个商品哪个区域</span>

表格添加mouseover事件 = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{
    获取对应tr或者td的商品及区域的自定义属性
    根据上面两个属性在数据中获取对应的<span class="hljs-number">12</span>个月的数据
    调用图表的设置数据方式
}
</code></pre><p>实现思路二：</p>
<pre><code>表格添加mouseover事件 = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{
    拿到响应事件对应的tr，然后依次遍历其中的td，获取其中的数据    
    调用图表的设置数据方式
}
</code></pre><p>不妨两种都试试，看看自己觉得哪种好</p>
<h3 id="-">绘制多条折线图</h3>
<h4 id="-">需求描述</h4>
<p>单独看一行数据，只能看一个指标自己的趋势，我们往往还需要在不同数据之间进行比较，所以我们需要在折线图中绘制多条数据。</p>
<ul>
<li>根据表单的选择，在折线图中显示相应的折现，和对应表格中的数据对应</li>
<li>每一条线选择不同的颜色</li>
<li>另外保留上面的鼠标hover某一行时显示某一行数据的图表，但鼠标移开表格后，再恢复到显示表单对应的所有数据</li>
</ul>
<h4 id="-">设计思路</h4>
<p>对于折线图而言，其实画一条线和画多条线没有本质区别，需要我们额外考虑的点是：</p>
<ul>
<li>纵坐标的最大值取决于所有数据的最大值，而不仅仅是一个数据</li>
<li>颜色的管理，管理一个颜色序列，分配给每一条线</li>
</ul>
<p>我们把整个流程再做一下拆解和梳理，对于画每一条线而言，需要的包括：</p>
<ul>
<li>数据</li>
<li>颜色</li>
<li>两个点之间的间隔</li>
<li>数据点直径</li>
<li>……</li>
</ul>
<p>上面这些有的数据对于每一条线是不一样的，有些是一样的，不一样的我们通过参数传递，一样的可以直接读取对象的属性</p>
<p>整体流程变为：</p>
<ul>
<li>计算整体的数据与像素的比例</li>
<li>遍历数据，渲染每一条折线</li>
</ul>
<h3 id="-">绘制多个柱状图（可选）</h3>
<h4 id="-">需求描述</h4>
<p>这个是个附加需求，有余力的同学可以尝试：</p>
<p>柱状图稍微复杂一些，我们先看个<a href="http://echarts.baidu.com/examples/editor.html?c=bar-label-rotation">例子</a></p>
<ul>
<li>以每个月为第一个维度进行柱状图的聚合</li>
<li>然后再按照表格同样的分类方式对数据进行如上方例子类似的聚合</li>
<li>每行数据有一个颜色，每一类数据用同系颜色</li>
</ul>
<h3 id="-">提交</h3>
<p>把你的代码放在Github后进行提交</p>
<h3 id="-">总结</h3>
<p>依然把今天的学习用时，收获，问题进行记录</p>

<h1 id="-">第三十七天到第三十八天：我是精明的小卖家（三）</h1>
<h2 id="-">课程目标</h2>
<p>今天我们将学习LocalStorage，基于它来实现对于数据的写操作</p>
<h2 id="-">课程描述</h2>
<p>我们在做这种系统时，经常会有在数据表格中同时进行数据编辑的需求，这里面涉及两个工作，一个是实现在数据编辑的交互问题，另一个是解决数据编辑完成后的传输问题。今天我们就来学习一下。</p>
<h3 id="-">编辑</h3>
<h4 id="-">需求</h4>
<ul>
<li>我们首先为所有表格增加一个编辑功能，在原来的表格输出的数据单元格，全部变成input输入框，里面为数据。</li>
<li>在页面中增加一个保存按钮，点击保存后将数据保存到LocalStorage中</li>
<li>页面加载的时候，优先从LocalStorage读取数据</li>
</ul>
<h4 id="-">阅读</h4>
<p>我们需要阅读一些基础的背景知识点：</p>
<ul>
<li><a href="https://blog.csdn.net/arvin0/article/details/51158836">HTML5 本地存储五种方案</a></li>
<li><a href="https://www.baidu.com/link?url=5hz107D9a9SypASlw6w2qOc7ZnbXJpY1pLXodgHuNOc_MzMfjhUsH30ZysxZG0mC1eFzYqAJpBNgqIO8oOMG5eIqIQhi8xrWp9zzEPQaIdq&amp;wd=&amp;eqid=b046db000002a0dc000000035b03b92e">MDN LocalStorage</a></li>
<li><a href="http://www.w3school.com.cn/html5/html_5_webstorage.asp">W3School LS</a></li>
</ul>
<h4 id="-">设计</h4>
<p>在学习完LocalStorage后，我们需要梳理一下业务流程，首先是数据读取，原来是直接使用提供的JS文件，现在我们需要先判断LocalStorage中是否有数据，有的话从LocalStorage中读取，没有的话再使用JS文件中的数据。</p>
<p>对于数据的编辑和保存，可以如下实现：</p>
<ul>
<li>给所有input输入框增加一个onblur事件，在事件中增加对于输入内容的判断，是否为正确的数字，是的话什么都不做，不是的话弹出提示框（alert）</li>
<li>点击保存的时候，遍历所有input，按照一定顺序，把数据写入LocalStorage中。</li>
</ul>
<h3 id="-">体验更好的编辑</h3>
<h4 id="-">需求</h4>
<p>如果对于一个强编辑需求的场景，上面的方案可能合适，甚至可以直接上一个Web电子表格组件，但如果对于数据的编辑是小部分的需求场景时，一堆input框看上去就不是那么优雅了。</p>
<p>我们希望你实践一下，看上去不是输入框，但鼠标移动上去或者点击就变成一个可编辑的状态。需求如下：</p>
<ul>
<li>把表格恢复成没有input的状态</li>
<li>当鼠标滑动过某一个数字的单元格时，数字旁边显示一个铅笔的icon，或者显示灰色的小小的编辑两个字</li>
<li>当鼠标点击某个数字的单元格时，这个数字进入编辑状态，单元格内容变成一个输入框，输入框右边是取消和确定</li>
<li>点击取消，输入框消失，恢复出原来数字</li>
<li>点击确定，输入框消失，数字变成编辑的，这个过程中需要判断输入的正确性，如果输入的不是数字，则弹出提示</li>
<li>点击该单元格以外的页面其他任何地方，除了响应对应行为外，同时等同于点击了取消，输入状态消失</li>
<li>理论上，同一时刻，只有一个单元格处于编辑状态</li>
<li>在输入框中，按ESC键等同于按取消</li>
<li>在输入框中，按回车键等同于按确认</li>
</ul>
<h3 id="ajax-">Ajax可选需求</h3>
<h4 id="-">需求</h4>
<p>真正项目中，大部分是通过Ajax和Server通过接口来完成上面的事情，有余力的同学可以通过自己写一个简单的服务代码来学习前后端数据通信的主要方式Ajax。</p>
<h3 id="-">提交</h3>
<p>把你的代码放在Github后进行提交</p>
<h3 id="-">总结</h3>
<p>依然把今天的学习用时，收获，问题进行记录</p>
<h3 id="-">下一个任务预告</h3>
