//表格数据整理函数
function getData(){               
    var newData=new Array();
    var regionData=new Array();
    var productData=new Array();
    for(var i=0;i<regionWra.childNodes.length;i++){
        if (regionWra.childNodes[i].checked==true&&regionWra.childNodes[i].getAttribute('checkbox-type')=="child") {
            regionData.push(regionWra.childNodes[i].value);
        }
    }
    for(var i=0;i<productWra.childNodes.length-2;i++){
        if (productWra.childNodes[i].checked==true&&productWra.childNodes[i].getAttribute('checkbox-type')=="child") {
            productData.push(productWra.childNodes[i].value);
        }
    } 
    
    //将JS文件原有数据装入数组
    for(var i = 0;i < sourceData.length;i++){
        if (regionData.indexOf(sourceData[i].region) != -1 && productData.indexOf(sourceData[i].product) != -1) {        
            newData.push(sourceData[i]);
        }
    }
    //从localStorage中读取数据改写输出数据
    if (localStorage.getItem('updateData')) {
        var storeData = window.localStorage.getItem('updateData');
        var updateData = JSON.parse(storeData);        

        for(var i = 0; i < updateData.length;i++){
            for(var j = 0; j< newData.length;j++){
                if (newData[j].region==updateData[i].region && newData[j].product==updateData[i].product) {
                    newData[j].sale=updateData[i].sale;


                }
            }
        }
    }   
    return [productData,regionData,newData];
}