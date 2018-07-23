//生成Checkbox函数
function buildRadio(wrapId,name){
    var wrapper=document.getElementById(wrapId);
    //checkbox全选
    var quanXuan=document.createElement('input');
    quanXuan.setAttribute('type','checkbox');
    quanXuan.setAttribute('checkbox-type','all');
    quanXuan.value='全选';
    var labelAll=document.createElement('label');               
    labelAll.innerHTML='全选';
    //checkbox子选项生成
    for(var x in name){
        var childCheck=document.createElement('input');
        childCheck.setAttribute('type','checkbox');
        childCheck.setAttribute('checkbox-type','child');
        childCheck.value=name[x];
        //默认选中第一个
        if (x==0) {
         childCheck.checked=true;   
        }
        wrapper.appendChild(childCheck);
        var labelCheck=document.createElement('label');    
        labelCheck.innerHTML=name[x];
        wrapper.appendChild(labelCheck);
    }
    wrapper.appendChild(quanXuan);
    wrapper.appendChild(labelAll);
}