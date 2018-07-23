//checkbox点击事件处理函数,点击分类处理
function wrapHandler(event){
        var event=EventUtil.getEvent(event);
        var target=EventUtil.getTarget(event);
        if (target.type=='checkbox') {
            if (target.getAttribute('checkbox-type')=="all") {
                //全选按钮点击事件处理
                quanHandler();                
            }else{
                //非全选点击事件处理
                cliHandler();            
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

