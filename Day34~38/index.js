 let sourceData = [{
                product: "手机",
                region: "华东",
                sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
            }, {
                product: "手机",
                region: "华北",
                sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
            }, {
                product: "手机",
                region: "华南",
                sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
            }, {
                product: "笔记本",
                region: "华东",
                sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
            }, {
                product: "笔记本",
                region: "华北",
                sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
            }, {
                product: "笔记本",
                region: "华南",
                sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
            }, {
                product: "智能音箱",
                region: "华东",
                sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
            }, {
                product: "智能音箱",
                region: "华北",
                sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
            }, {
                product: "智能音箱",
                region: "华南",
                sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
            }]
            //设置跨浏览器监听            
            var EventUtil={
        addHandler:function(element,type,handler){
            if (element.addEventListener) {
                element.addEventListener(type,handler,false);
            }else if (element.attachEvent) {
                element.attachEvent('on'+type,handler);
            }else {
                element['on'+type]=handler;
            }
        },
        removeHandler:function(element,type,handler){
            if (element.removeEventListener) {
                element.removeEventListener(type,handler,false);
            }else if (element.detachEvent) {
                element.detachEvent('on'+type,handler);
            }else{
                element['on'+type]=null;
            }
        },
        getEvent:function(event){
            return event?event:window.event;
        },
        getTarget:function(event){
            return event.target||event.srcElement;
        }
    }
            //声明全局变量
            
            var regionWra=document.querySelector('#region-radio-wrapper'); 
            var productWra=document.querySelector('#product-radio-wrapper');                           
            var tableWra=document.querySelector('#table-wrapper');
            
            //调用生成checkbox函数
            var checkone=['华东','华北','华南'];
            var checktwo=['手机','笔记本','智能音箱'];
            buildBox('region-radio-wrapper',checkone);
            buildBox('product-radio-wrapper',checktwo);

         
            //生成Checkbox函数
            function buildBox(id,name){
                var wrapper=document.getElementById(id);
                var quanXuan=document.createElement('input');
                quanXuan.type="checkbox";
                quanXuan.setAttribute('checkbox-type','all');
                quanXuan.value='全选';                
                quanXuan.innerHTML='全选';
                //checkbox子选项生成
                for(x in name){
                    var childCheck=document.createElement('input');
                    childCheck.type='checkbox';
                    childCheck.setAttribute('checkbox-type','child');
                    childCheck.value=name[x];
                    if (x==0) {
                     childCheck.checked=true;   
                    }
                    wrapper.appendChild(childCheck);
                    var checkName=document.createElement('span');    
                    checkName.innerHTML=name[x];
                    wrapper.appendChild(checkName);
                }
                wrapper.appendChild(quanXuan);
                var checkName=document.createElement('span');    
                    checkName.innerHTML='全选';
                    wrapper.appendChild(checkName);
                EventUtil.addHandler(wrapper,'click',wrapHandler);
                //checkbox生成后再生成初始表格
                makeTable();

            }

            //checkbox点击事件处理函数,点击分类处理
            function wrapHandler(event){
                    var event=EventUtil.getEvent(event);
                    var target=EventUtil.getTarget(event);
                    if (target.type=='checkbox') {
                        if (target.getAttribute('checkbox-type')=="all") {
                            //全选按钮点击事件处理
                            quanHandler();
                            makeTable();
                            //点击checkbox引起多折线作图
                            var getDraData=getData();
                            var draData=getDraData[3];
                            drawZX(draData);
                           
                        }else{
                            //非全选点击事件处理
                            cliHandler();
                            makeTable();
                            //作图
                            var getDraData=getData();
                            var draData=getDraData[3];
                            drawZX(draData);

                        }
                    }
                }

            
             //点击全选处理函数
            function quanHandler(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                var fatherWra=target.parentNode;
                var length=fatherWra.childNodes.length;
                if(target.checked){
                     for(var i=0;i < length-1;i++){
                        if (fatherWra.childNodes[i].type=='checkbox') {
                        fatherWra.childNodes[i].checked=true;
                        }
                    }
                }

            }
            //点击单个选项处理函数
            function cliHandler(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                var fatherWra=target.parentNode;
                var length=fatherWra.childNodes.length/2;//4
                var index=0;
                for(var i=0;i < length-1;i++){//0,1,2
                    if (fatherWra.childNodes[2*i].checked==true) {
                        index += 1;
                    }
                }
                if (index==0) {
                    target.checked=true;
                }else if (index==length-1) {
                    fatherWra.childNodes[2*length-2].checked=true;
                }else{
                    fatherWra.childNodes[2*length-2].checked=false;
                }
            }
            //表格数据整理函数
            function getData(){               
                var regionData=new Array();
                var productData=new Array();
                var newData=new Array();
                var saleData=new Array();
                var totalData=new Array();
                for(var i=0;i<regionWra.childNodes.length-2;i++){
                    if (regionWra.childNodes[i].checked==true) {
                        regionData.push(regionWra.childNodes[i].value);
                    }
                }
                for(var i=0;i<productWra.childNodes.length-2;i++){
                    if (productWra.childNodes[i].checked==true) {
                        productData.push(productWra.childNodes[i].value);
                    }
                } 
                
                //装入数组
                    for(x in productData){
                        for(y in regionData){
                            //从localStorage还是Js文件读取数据判断
                            if (localStorage.getItem(regionData[y]+productData[x])) {
                            //使用localStorage数据
                                var newObj={};
                                let str1=localStorage.getItem(regionData[y]+productData[x]);
                                newObj = JSON.parse(str1);//格式转换！！！！
                                newData.push(newObj);
                                //多折线图saleData数组生成
                                for(var a=0;a<sourceData[i].sale.length;a++){
                                            saleData.push(newObj.sale[a]);
                                        }
                                console.log('localStorage');

                            }else{//使用JS文件的数据
                                for(var i=0;i < sourceData.length;i++){
                                    if (sourceData[i].product==productData[x]&&sourceData[i].region==regionData[y]) {
                                        var newObj={};
                                        newObj.product=sourceData[i].product;
                                        newObj.region=sourceData[i].region;
                                        newObj.sale=sourceData[i].sale;
                                        newData.push(newObj);
                                        //多折线图saleData数组生成
                                        for(var a=0;a<sourceData[i].sale.length;a++){
                                            saleData.push(sourceData[i].sale[a]);
                                            console.log('Js文件');
                                        }
                                    }
                                }
                            }
                        }
                    }                 
                    totalData.push(regionData);
                    totalData.push(productData);
                    totalData.push(newData); 
                    totalData.push(saleData);                              
                return totalData;

            }
            //？？？？？？为什么设成全局呢
            var oneData;
            var twoData;
            //绘制表格
            function makeTable(){
                delTable();
                var data=getData();
                oneData=data[0];
                twoData=data[1];
                var data=data[2];
                //判断列顺序
                
                if (oneData.length==1&&twoData.length>1) {
                    //地区在前，商品在后情况
                    var table=document.createElement('table');
                    var firLine=document.createElement('tr');
                    var firTh=document.createElement('th');
                    firTh.innerHTML='地区';
                    firLine.appendChild(firTh);
                    var secTh=document.createElement('th');
                    secTh.innerHTML='商品';
                    firLine.appendChild(secTh);
                    for (var i = 1; i <= 12; i++) {
                        var monthTh=document.createElement('th');
                        monthTh.innerHTML=i+'月';
                        firLine.appendChild(monthTh);
                    }
                    table.appendChild(firLine);
                    //表格内容
                    var firTd=document.createElement('td');
                    firTd.innerHTML=data[0].region;
                    firTd.rowSpan=data.length;
                    for(var x=0;x < data.length;x++){
                        var conTr=document.createElement('tr');
                        if (x==0) {
                            conTr.appendChild(firTd);
                        }
                        var secTd=document.createElement('td');
                        secTd.innerHTML=data[x].product;
                        conTr.appendChild(secTd);
                        for (var i = 0; i < data[x].sale.length; i++) {
                            var monTd=document.createElement('td');
                            monTd.innerHTML=data[x].sale[i];
                            //销售数据
                            monTd.setAttribute('td-type','sale');
                            conTr.appendChild(monTd);
                        }
                        table.appendChild(conTr);
                    }
                    tableWra.appendChild(table);
                }else{//商品在前，地区在后
                    var table=document.createElement('table');
                    var firLine=document.createElement('tr');
                    var firTh=document.createElement('th');
                    firTh.innerHTML='商品';
                    firLine.appendChild(firTh);
                    var secTh=document.createElement('th');
                    secTh.innerHTML='地区';
                    firLine.appendChild(secTh);
                    for (var i = 1; i <= 12; i++) {
                        var monthTh=document.createElement('th');
                        monthTh.innerHTML=i+'月';
                        firLine.appendChild(monthTh);
                    }
                    table.appendChild(firLine);
                    //表格内容
                    var h=0;
                            for(var y=0;y < twoData.length;y++){
                                var firTd=document.createElement('td');
                                firTd.innerHTML=twoData[y];
                                firTd.rowSpan=oneData.length;
                                //第一列商品
                                for(var x=0;x < oneData.length;x++){
                                var conTr=document.createElement('tr');
                                if (x % oneData.length==0) {
                                conTr.appendChild(firTd);
                                }

                                var secTd=document.createElement('td');
                                secTd.innerHTML=oneData[x];
                                conTr.appendChild(secTd);
                                for (var i = 0; i < data[h].sale.length; i++) {
                                    var monTd=document.createElement('td');
                                    monTd.innerHTML=data[h].sale[i];
                                    //销售数据
                                    monTd.setAttribute('td-type','sale');
                                    conTr.appendChild(monTd);                                    
                               }
                               h=h+1;
                        table.appendChild(conTr);
                    
                        }
                    }                
                    tableWra.appendChild(table);
                    //生成对应图表监听器
                    EventUtil.addHandler(table,'mouseover',overData);
                    EventUtil.addHandler(table,'mouseout',outData);

                    //表格编辑监听器：mouseover和mouseout
                    EventUtil.addHandler(table,'mouseover',showEditable); 
                    EventUtil.addHandler(table,'mouseout',disEditable);
                    //表格编辑监听器：click监听器
                    EventUtil.addHandler(table,'click',saleClickDepend);
                }
            }
            //删除已有table函数
            function delTable(){
                while(tableWra.firstChild){
                tableWra.removeChild(tableWra.firstChild);
                }
            }

            //绘制折线图
            var drawWra=document.getElementById('drawWra');
            function drawZX(data){
                 delZX();
                //换成数字格式！！！！！！！！
                var dataList=new Array();
                for(x in data){
                    dataList.push(parseInt(data[x]));
                }
                
                //折线区域的高度，宽度，轴高度，宽度
                var canvasH=400;
                var canvasW=500;
                var axisH=320;
                var axisW=420;
                //每个数据点的半径，颜色，线的颜色，宽度
                var pointRadius=3;
                var variousColor=['#60acfc','#32d3eb','#5bc49f','#feb64d','#ff7c7c','#9287e7',' #FF4500',' #FF4500','#4B0082'];
                var lineWid=2;
                //数据点的横向间距
                var space=34;
                var pointOneX=70;
                //取最大值
                var maxValue=0;
                maxValue=dataList[0];
                for(var i=1;i <dataList.length;i++){
                    if (maxValue < dataList[i]) {
                        maxValue=dataList[i];
                    }
                }
                //计算这算比例
                var bili=300/maxValue;
                var newList=new Array();
                for(var i=0;i <dataList.length;i++){
                    var num=dataList[i]*bili;
                    newList.push(num);
                }
                var numPoint=6;
                //绘制横轴、纵轴
                var canvasWra=document.createElement('canvas');
                canvasWra.height=canvasH;
                canvasWra.width=canvasW;
                draWra.appendChild(canvasWra);
                if (canvasWra.getContext) {
                    var cxt=canvasWra.getContext('2d');
                    cxt.beginPath();
                    cxt.moveTo(50,30);//y轴起点
                    cxt.lineTo(50,50+axisH);
                    cxt.lineTo(50+axisW,50+axisH);
                    cxt.strokeStyle='black';
                    cxt.stroke();
                    //画基准线
                    for(var i=0;i<6;i++){
                        cxt.beginPath();
                        cxt.moveTo(50,70+50*i);
                        cxt.lineTo(50+axisW,70+50*i);
                        cxt.strokeStyle='#dddddd';
                        cxt.stroke();
                    }
                    //基准线数据
                    for(var i=0;i<7;i++){
                        
                        cxt.font='12px black';
                        cxt.textBaseline='middle';
                        cxt.textAlign='center';
                        var num=50*numPoint/bili;
                        cxt.fillText(Math.floor(num),30,70+50*i);
                        numPoint--;
                    }
                    //写月份
                    for(var i=0;i<12;i++){
                        cxt.font='12px black';
                        cxt.fillText((i+1)+'月',pointOneX+i*space,380);

                    }
                    //画数据点
                    var lastX;
                    var lastY;
                    
                    for(var h=0;h < newList.length/12;h++){
                        var y=h*12;
                        var pointColor=variousColor[h];

                        for(var x=0;x< 12;x++){
                            cxt.beginPath();
                            cxt.moveTo(pointOneX+x*space+pointRadius,370-newList[x+y]);
                            cxt.arc(pointOneX+x*space,370-newList[x+y],pointRadius,0,2*Math.PI,false);
                            cxt.fillStyle=pointColor;
                            cxt.fill();
                            if (x!=0) {
                                cxt.beginPath();
                                cxt.moveTo(pointOneX+x*space-pointRadius,370-newList[x+y]);
                                cxt.lineTo(lastX,lastY);
                                cxt.strokeStyle=pointColor;
                                cxt.stroke();
                            }
                            lastX=pointOneX+x*space;
                            lastY=370-newList[x+y];
                        }

                    }
                }   
                }
                //绘制柱状图
                var barWra=document.querySelector('#barWra');
                var SVG_NS='http://www.w3.org/2000/svg';
                function drawBar(data) {
                     delBar();
                    //换成数字格式！！！！！！！！
                    var barData=new Array();
                    for(x in data){
                        barData.push(parseInt(data[x]));
                    }
                    //柱状区域的高度，宽度，轴高度，宽度
                    var barWraH=400;
                    var barWraW=500; 
                    var axisH=320;
                    var axisW=400;
                    var barW=20;
                    var barGap=30;
                    var barColor='#bedeeb';
                    var axisColor="black";
                    var max=0;
                    //绘制svg区域
                    var svgWra=document.createElementNS(SVG_NS,'svg');

                    svgWra.setAttribute('version','1.1');
                    svgWra.setAttribute('baseProfile','full');
                    svgWra.setAttribute('height',barWraH);
                    svgWra.setAttribute('width',barWraW);
                    console.log(barWra);
                    console.log(svgWra);             
                    barWra.appendChild(svgWra);
                    //拿到最大值max
                    for(var i=0;i < barData.length;i++){                
                        if(barData[i] > max){
                            max = barData[i];
                        }                   
                    }
                    var ebarH=new Array();
                    var bili=300/max;
                    for (var x=0; x< barData.length;x++){
                        var newData=barData[x] * bili;
                        
                        ebarH.push(newData);
                    }
                    //x轴y轴
                    var xaxis=document.createElementNS(SVG_NS,'line');
                    xaxis.setAttribute('x1',50);
                    xaxis.setAttribute('x2',50+axisW);
                    xaxis.setAttribute('y1',30+axisH);
                    xaxis.setAttribute('y2',30+axisH);
                    xaxis.setAttribute('stroke',axisColor);
                    svgWra.appendChild(xaxis);

                    var yaxis=document.createElementNS(SVG_NS,'line');
                    yaxis.setAttribute('x1',50);
                    yaxis.setAttribute('x2',50);
                    yaxis.setAttribute('y1',30);
                    yaxis.setAttribute('y2',30+axisH);
                    yaxis.setAttribute('stroke',axisColor);
                    svgWra.appendChild(yaxis);
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
                    var numPoint=6;
                    for(var i=0;i<7;i++){
                        var text=document.createElementNS(SVG_NS,'text');
                        var num=50*numPoint/bili;
                        text.innerHTML=Math.floor(num);
                        text.setAttribute('x','30');
                        text.setAttribute('font-size','10px');
                        text.setAttribute('y',54+50*i);
                        svgWra.appendChild(text);
                        numPoint--;
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
                    //画柱形
                    for(var j=0;j <ebarH.length;j++){
                        var bar=document.createElementNS(SVG_NS,'rect');
                        bar.setAttribute('width',barW);
                        bar.setAttribute('height',ebarH[j]);
                        bar.setAttribute('x',(70+j*barGap));
                        bar.setAttribute('y',30+axisH-ebarH[j]);
                        bar.setAttribute('fill',barColor);
                        bar.setAttribute('stroke','black');
                        svgWra.appendChild(bar);
                    }
                }
                //页面原有图表生成
                var dataList=[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
                drawBar(dataList);
                drawZX(dataList);
                //mouseover导致图表改变时间处理函数
                function overData(event){
                    var dataList=new Array();
                    var event=EventUtil.getEvent(event);
                    var target=EventUtil.getTarget(event);
                    if (target.tagName=='TD'||target.tagName=='SPAN') {
                        console.log('滑过啦');
                        var trNode=target.parentNode;
                        var length=trNode.childNodes.length;
                        //当前数据获取
                        for(var i=0;i < length;i++){
                            if (!isNaN(trNode.childNodes[i].innerHTML)) {
                                //trNode.childNodes[i].style.backgroundColor='#bedeeb';
                                dataList.push(trNode.childNodes[i].innerHTML);
                            }
                            
                        }
                    }
                    console.log(dataList);
                    if (dataList.length==12) {
                    drawBar(dataList);
                    drawZX(dataList);
                    }

                }
                //mouseout导致图表改变时间处理函数
                function outData(){
                    var event=EventUtil.getEvent(event);
                    var target=EventUtil.getTarget(event);
                    if (target.tagName=='TD'||target.tagName=='SPAN') {
                        var trNode=target.parentNode;
                        var length=trNode.childNodes.length;
                        /*for(var i=0;i < length;i++){
                            if (!isNaN(trNode.childNodes[i].innerHTML)) {
                                trNode.childNodes[i].style.backgroundColor='#ffffff';
                               
                            }
                            
                        }*/
                        var getDraData=getData();
                        var draData=getDraData[3];
                        drawZX(draData);
                    }

                }
                //删除已有柱状图
            function delBar(){
                while(barWra.firstChild){
                barWra.removeChild(barWra.firstChild);
                    
                }
            }
            //删除已有折线图
            function delZX(){
                while(draWra.firstChild){
                draWra.removeChild(draWra.firstChild);
                    
                }
            }
            //表格数据更改处理部分**********************
            //表格数据更改处理部分**********************
            //表格数据更改处理部分**********************

            //点击保存按钮判断
            function saveDepand(data){
                var trEle=document.querySelectorAll('tr');
                for(var i=1;i<trEle.length;i++){
                    var tdNum=trEle[i].childNodes.length;
                    for(var j=0;j<tdNum;j++){
                        if ( trEle[i].childNodes[j].getElementsByTagName('input')[0]) {
                            var ele=trEle[i].childNodes[j].getElementsByTagName('input')[0].value;
                            if (isNaN(ele)||ele==null||ele.length==0||Math.floor(ele)!=ele) {
                                alert('表格第'+ (i+1) +'行'+ (j+1)+'列输入不正确');
                            return;
                        }
                        }       
                    }       
                }
               saveHandle(data); 
            }
            //点击保存按钮事件处理函数
            function saveHandle(data){                 
                var regionName=data[0];
                var productName=data[1];       
                var trEle=document.querySelectorAll('tr');
                for(var i=1;i<trEle.length;i++){
                    var tdNum=trEle[i].childNodes.length;
                    var obj=new Object();
                    var saleData=new Array();
                    //放入region和product值
                    if(regionName.length==1&&productName.length==1){
                        obj.region=regionName[0];
                        obj.product=productName[0];
                    }else if(regionName.length==1&&productName.length>1){
                        obj.region=regionName[0];
                        obj.product=productName[i-1];
                    }else{
                        var num=(i-1)%regionName.length;
                        obj.region=regionName[num];
                        var num=Math.floor((i-1)/regionName.length);
                        obj.product=productName[num];
                    }

                    //放入新sale数据
                    for(var j=0;j<tdNum;j++){
                        if ( !isNaN(trEle[i].childNodes[j].innerHTML)) {
                            saleData.push(trEle[i].childNodes[j].innerHTML);
                        }else if (trEle[i].childNodes[j].getElementsByTagName('input')[0]){
                            saleData.push(trEle[i].childNodes[j].getElementsByTagName('input')[0].value);
                        }else{};
                    }
                    
                    obj.sale=saleData;
                    console.log('保存数据:');
                    console.log(obj);
                    //判断是否已经存在
                    if (localStorage.getItem(obj.region+obj.product)) {
                        localStorage.removeItem(obj.region+obj.product);
                        var objJson=JSON.stringify(obj); //格式转换！！！
                        localStorage.setItem(obj.region+obj.product,objJson);
                        
                    }else{
                     var objJson=JSON.stringify(obj); //格式转换！！！
                     localStorage.setItem(obj.region+obj.product,objJson);
                    
                    }
                        let str1=localStorage.getItem(obj.region+obj.product);
                        objobj = JSON.parse(str1);//格式转换！！！！
                }
                huifuTd();
                }
            //体验优化
            
            
            
            function showEditable(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                
                    target.style.cursor='default';
                if (target.tagName=='TD'&&target.getAttribute('td-type')=='sale') {
                    if (target.childNodes[0].tagName=='INPUT') {
                    }else{
                        target.style.cursor='pointer';
                        var bianji=document.createElement('span');
                        bianji.innerHTML='编辑';
                        bianji.style.color='gray';
                        bianji.style.fontSize='8px';
                        bianji.style.float='right';
                        bianji.style.cursor='pointer';
                        target.appendChild(bianji);

                    }
                }

            }
            function disEditable(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                if (target.tagName=='TD'&&target.getAttribute('td-type')=='sale') {
                    if (target.lastChild.tagName=='SPAN') {
                        target.removeChild(target.lastChild);
                    }


                }
               

            }
            var originalData;
            function saleClickDepend(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                var trEle=document.querySelectorAll('tr');
                for(var i=1;i<trEle.length;i++){
                    var tdNum=trEle[i].childNodes.length;
                    for(var j=0;j<tdNum;j++){
                        if ( trEle[i].childNodes[j].getElementsByTagName('input')[0]) {
                            if (trEle[i].childNodes[j].getElementsByTagName('input')[0]==target) {

                            }else{
                            alert('请先保存数据');
                            return;
                            }
                        }       
                    }       
                }
               saleClick(); 

            }
            function saleClick(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                if (target.tagName=='TD'||target.tagName=='SPAN') {
                    if (target.getAttribute('td-type')=='sale') {
                        var data=target.textContent;
                 
                        target.innerHTML='';
                        var input=document.createElement('input');
                        input.value=data.slice(0,-2);
                        originalData=data.slice(0,-2);                  
                        
                        target.appendChild(input);
                        input.focus();
                        var baocun=document.createElement('button');
                        var quxiao=document.createElement('button');
                        baocun.type='button';
                        baocun.id='baocun';
                        baocun.innerHTML='保存';
                        quxiao.type='button';
                        quxiao.id='quxiao';
                        quxiao.innerHTML='取消';
                        target.appendChild(baocun);
                        target.appendChild(quxiao);
                    
                        EventUtil.addHandler(baocun,'click',function(event){
                            saveDepand([oneData,twoData]);
                            
                        });

                        EventUtil.addHandler(quxiao,'click',quxiaoHandler);
                        EventUtil.addHandler(input,'keyup',inputHandler);
                        EventUtil.addHandler(input,'keyup',inputHandler);
                        EventUtil.addHandler(document,'click',quanjuHandler);
                
                    }
                }

            }
            //键盘ESC键和回车键事件
            function inputHandler(event){
                var event=EventUtil.getEvent(event);
                if (event.keyCode==13) {
                    saveDepand([oneData,twoData]);
                }else if (event.keyCode==27) {
                    quxiaoHandler();
                }else{}

            }


            //保存input框的恢复Td事件
            function huifuTd(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                var parentTd=target.parentNode;
                var data=parentTd.getElementsByTagName('input')[0].value;
                while(parentTd.lastChild){
                    parentTd.removeChild(parentTd.lastChild);
                }
                parentTd.innerHTML=data;

            }
            //点击取消恢复原来数据事件
            function quxiaoHandler(){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                var parentTd=target.parentNode;
                var data=originalData;
                while(parentTd.lastChild){
                    parentTd.removeChild(parentTd.lastChild);
                }
                parentTd.innerHTML=data;

            }
            //全局取消
            function quanjuHandler(event){
                var event=EventUtil.getEvent(event);
                var target=EventUtil.getTarget(event);
                var button=document.querySelector('#quxiao'); 
                if (target.tagName=='TD'||target.tagName=='SPAN') {
                    return;
                }
                if (button) {           
                    var parentTd=button.parentNode;
                    var data=originalData;
                    while(parentTd.lastChild){
                        parentTd.removeChild(parentTd.lastChild);
                    }
                    parentTd.innerHTML=data;
                    console.log('取消操作');

                }

            }
