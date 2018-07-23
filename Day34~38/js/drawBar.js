var barWra=document.querySelector('#barWra');
var SVG_NS='http://www.w3.org/2000/svg';
var svgWra=document.createElementNS(SVG_NS,'svg');
function drawBar(data) {
     /*delBar();*/
    
    //绘制svg区域
    svgWra.innerHTML=" ";
    svgWra.setAttribute('version','1.1');
    svgWra.setAttribute('baseProfile','full');
    svgWra.setAttribute('height','400');
    svgWra.setAttribute('width','570');
    
    //拿到最大值max
    var max=0;
    for(var i=0;i < data.length;i++){                
        var maxnew=Math.max.apply(null,data[i].sale);                
        if (maxnew > max) {
            max = maxnew;
        }
    }
    //绘制x,y轴
    createBarAxis(max);
    // 绘制柱形
    createBars(max,data);
    //绘制图例
    createLegend(data);
    barWra.appendChild(svgWra);
}
function createBarAxis(max){
     //柱状区域的高度，宽度，轴高度，宽度
    var axisH=320;
    var axisW=400;
    var axisColor="black";
    //x轴
    var xaxis=document.createElementNS(SVG_NS,'line');
    xaxis.setAttribute('x1',50);
    xaxis.setAttribute('x2',50+axisW);
    xaxis.setAttribute('y1',30+axisH);
    xaxis.setAttribute('y2',30+axisH);
    xaxis.setAttribute('stroke',axisColor);
    svgWra.appendChild(xaxis);
    var xtext=document.createElementNS(SVG_NS,'text');
    xtext.setAttribute('x',50+axisW);
    xtext.setAttribute('y',45+axisH);
    xtext.setAttribute('style','font-size:12px');
    xtext.textContent = "月份";
    svgWra.appendChild(xtext);


    //y轴
    var yaxis=document.createElementNS(SVG_NS,'line');
    yaxis.setAttribute('x1',50);
    yaxis.setAttribute('x2',50);
    yaxis.setAttribute('y1',30);
    yaxis.setAttribute('y2',30+axisH);
    yaxis.setAttribute('stroke',axisColor);
    svgWra.appendChild(yaxis);
    var ytext=document.createElementNS(SVG_NS,'text');
    ytext.setAttribute('x','20');
    ytext.setAttribute('y','35');
    ytext.setAttribute('style','font-size:12px');
    ytext.textContent = "销量";
    svgWra.appendChild(ytext);
    //辅助线
    for (var i=0;i<6;i++){
        var pzaxis=document.createElementNS(SVG_NS,'line');
        pzaxis.setAttribute('x1',50);
        pzaxis.setAttribute('x2',450);
        pzaxis.setAttribute('y1',50+50*i);
        pzaxis.setAttribute('y2',50+50*i);
        pzaxis.setAttribute('stroke','gray');
        svgWra.appendChild(pzaxis);
    }
    //sale数据
    var numPoint=max/6;
    for(var i=0;i<7;i++){
        var text=document.createElementNS(SVG_NS,'text');
        var num = max-numPoint*i;
        text.textContent=Math.floor(num);
        text.setAttribute('x','30');
        text.setAttribute('font-size','10px');
        text.setAttribute('y',54+50*i);
        svgWra.appendChild(text);
    }
    //写月份
    for(var i=1;i<13;i++){
        var text=document.createElementNS(SVG_NS,'text');   
        text.innerHTML=i+'月';               
        text.setAttribute('x',40+30*i);
        text.setAttribute('y','365');
        text.setAttribute('font-size','12px');
        svgWra.appendChild(text);
        var monaxis=document.createElementNS(SVG_NS,'line');
        monaxis.setAttribute('x1',50+30*i);
        monaxis.setAttribute('x2',50+30*i);
        monaxis.setAttribute('y1','350');
        monaxis.setAttribute('y2','353');
        monaxis.setAttribute('stroke','black');
        svgWra.appendChild(monaxis);
    }
}
function createBars(max,data){
    var axisH=320;
    var startX=70;
    var barW=25/data.length;
    var barGap=30;
    //换成数字格式！！！！！！！！
    var max = parseInt(max);
    var drawH=300;
    var bili=drawH/max;
    var variousColor=['#60acfc','#32d3eb','#5bc49f','#feb64d','#ff7c7c','#9287e7',' #FF4500',' #FF4500','#4B0082'];
    //画柱形
    for(var i = 0;i < data.length;i++){
        var barStartX = startX+barW*i;
        for(var j=0;j <data[i].sale.length;j++){
            var hob = data[i].sale[j]*bili;
            var barH =Math.floor(hob);

            var bar=document.createElementNS(SVG_NS,'rect');
            bar.setAttribute('width',barW);

            bar.setAttribute('height',barH);
            bar.setAttribute('x',barStartX+barGap*j);
            bar.setAttribute('y',30+axisH-barH);
            bar.setAttribute('fill',variousColor[i]);
            bar.setAttribute('stroke','black');
            svgWra.appendChild(bar);
        }

    }

}

            
function createLegend(data) {
    var variousColor=['#60acfc','#32d3eb','#5bc49f','#feb64d','#ff7c7c','#9287e7',' #FF4500',' #FF4500','#4B0082'];
    var x =470;
    var y = 100;
    for (let i=0;i<data.length;i++) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttribute('x',x);
        rect.setAttribute('y',y);
        rect.setAttribute('width',8);
        rect.setAttribute('height',8);
        rect.setAttribute('stroke','black');
        rect.setAttribute('fill',variousColor[i]);
        svgWra.appendChild(rect);

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttribute('x',x+18);
        text.setAttribute('y',y+8);
        text.setAttribute('style','font-size:11px');
        text.textContent = data[i].product + " in "+data[i].region;
        svgWra.appendChild(text);

        y += 20;
    }
}
    
    
