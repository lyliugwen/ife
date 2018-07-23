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


var productC=document.querySelectorAll('#product-radio-wrapper input');    
var regionC=document.querySelectorAll('#region-radio-wrapper input'); 

//可复制URL
function getState(){
    var state = window.location.href;
    console.log(state);
    var stateData = state.split("#")[1];
    console.log(stateData);
    return stateData;
}
function render(){
    var stateData = getState();
    var j=0;
    for(var i=0;i < stateData.length;i++){
        if (i<4) {
        console.log(productC[i]);
            if (stateData[i] == 0) {
                productC[i].checked = false;
            }else{
                productC[i].checked = true;
            }
        }else{
            if (stateData[i] == 0) {
                regionC[j].checked = false;
            }else{
                regionC[j].checked = true;
            }
            j++;
        }
    }

    var data = getData();
    //初始表格
    makeTable();
    //初始图表
    drawBar(data[2]);
    drawZX(data[2]);

}
function setState(){
    var stateData=new Array();
    for(var i = 0;i<productC.length;i++){
        if(productC[i].checked == true){
            stateData.push('1');
        }else{
            stateData.push('0');
        }
    }
    for(var i = 0;i<regionC.length;i++){
        if(regionC[i].checked == true){
            stateData.push('1');
        }else{
            stateData.push('0');
        }
    }
    var b=stateData.join('');
    history.pushState('#'+b,null,'#'+b);
    render();
}
window.onpopstate=render;
if (window.location.href.indexOf('#') == -1) {
history.replaceState('#10001000',null,'#10001000');
}
render();


//设置radio-wrapper事件监听器
EventUtil.addHandler(regionWra,"change",function(){
    
    wrapHandler(event);
    setState();
    /*makeTable();
    var data=getData();
    drawBar(data[2]);
    drawZX(data[2]);*/
});
EventUtil.addHandler(productWra,"change",function(){
    
    wrapHandler(event);
    setState();
    /*makeTable();
    var data=getData(); 
    drawBar(data[2]);
    drawZX(data[2]);*/
});
//table鼠标移动监听器
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
