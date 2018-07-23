//声明全局变量
var regionWra=document.querySelector('#region-radio-wrapper'); 
var productWra=document.querySelector('#product-radio-wrapper');                           
var tableWra=document.querySelector('#table-wrapper');

//调用生成checkbox函数
buildRadio('region-radio-wrapper',['华东','华北','华南']);
buildRadio('product-radio-wrapper',['手机','笔记本','智能音箱']);


//设置跨浏览器事件监听器            
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

var data=getData();
//初始表格
makeTable();
//初始图表
drawBar(data[2]);
drawZX(data[2]);

//设置radio-wrapper事件监听器
EventUtil.addHandler(regionWra,"change",function(){
    
    wrapHandler(event);
    makeTable();
    var data=getData();
    drawBar(data[2]);
    drawZX(data[2]);
});
EventUtil.addHandler(productWra,"change",function(){
    
    wrapHandler(event);
    makeTable();
    var data=getData(); 
    drawBar(data[2]);
    drawZX(data[2]);
});
var table=document.querySelector("#table");
EventUtil.addHandler(table,"mouseover",function(event){
    var e=event||window.event;
    var target=e.target||e.srcElement;
    var newData=new Array();
    var data=getData()[2];
    if (target.tagName == 'TD') {
        var tr=target.parentNode;
        newData.push(data[tr.rowIndex-1]);
    }else {
        newData=data;
    }
    drawBar(newData);
    drawZX(newData);
});
EventUtil.removeHandler(table,"mouseout",function(event){
    var data=getData()[2];
    newData=data;
    drawBar(newData);
    drawZX(newData);
});
