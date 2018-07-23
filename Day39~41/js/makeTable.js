var tableWra=document.querySelector('#table-wrapper');
var table=document.createElement('table');
//绘制表格
function makeTable(){
    table.innerHTML="";
    table.setAttribute('id','table');
    var rawData=getData();
    var data=rawData[2];

    var tr=document.createElement('tr');
    tr.innerHTML="<th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>";
    table.appendChild(tr);

    for(var i=0; i<data.length;i++){
        var tr=document.createElement('tr');
        var firTd=document.createElement('td');
        firTd.textContent=data[i].product;
        tr.appendChild(firTd);
        var secTd=document.createElement('td');
        secTd.textContent=data[i].region;
        tr.appendChild(secTd);
        for(var j=0;j<data[i].sale.length;j++){            
            var monTd=document.createElement('td');
            monTd.setAttribute('td-type','sale');
            var pic=document.createElement('img');
            var inputData=document.createElement('input');
            var saveBtn=document.createElement('button');
            var cancelBtn=document.createElement('button');
            var text=document.createTextNode(data[i].sale[j]);

            pic.setAttribute('src','edit.png');
            inputData.setAttribute('type','text');
            inputData.setAttribute('value',data[i].sale[j]);
            saveBtn.setAttribute('type','button');
            saveBtn.innerHTML='保存';
            saveBtn.setAttribute('class','save');
            cancelBtn.setAttribute('type','button');
            cancelBtn.innerHTML='取消';
            cancelBtn.setAttribute('class','cancel');


            monTd.appendChild(inputData);
            monTd.appendChild(saveBtn);
            monTd.appendChild(cancelBtn);
            monTd.appendChild(pic);
            monTd.appendChild(text);
            tr.appendChild(monTd);

            //编辑图片监听
            pic.onclick=function(event){
                var e=event || window.event;
                var target=e.target||e.srcElement;
                var paNode=target.parentNode;
                paNode.children[0].setAttribute('style','display:block');
                paNode.children[0].focus();
                paNode.children[0].select();
                paNode.children[1].setAttribute('style','display:block');
                paNode.children[2].setAttribute('style','display:block');
                paNode.children[3].setAttribute('style','display:none');


            };
            //点击保存按钮事件监听
            saveBtn.onclick=function(event){
                var e=event||window.event;
                var target=e.target||e.srcElement;
                var value=target.parentNode.children[0].value;
                var temp=target.parentNode.textContent;
                var newData=new Object();
                var cont=new Array();
                var sales=new Array();
                if (isNaN(value)||value==null||value.length==0) {
                    alert("请输入数字！");
                    target.parentNode.children[0].value=temp;
                }else{
                    var tr=target.parentNode.parentNode;
                    if (table.rows[0].cells[0].innerHTML=='商品') {
                        newData["product"]=tr.cells[0].textContent;
                        newData["region"]=tr.cells[1].textContent;
                    }else{
                        newData["product"]=tr.cells[1].textContent;
                        newData["region"]=tr.cells[0].textContent;
                    }
                    for(var i=2;i<tr.cells.length;i++){
                        sales.push(tr.cells[i].children[0].value);
                    }
                    newData["sale"]=sales;
                    console.log("setData执行前");
                    console.log(newData);
                    //console.log(newData);
                    //储存在localStorage

                    setStorage(newData);

                }
                //重画表格!
                makeTable();
            };
            cancelBtn.onclick=function(event){
                 var e=event||window.event;
                var target=e.target||e.srcElement;
                target.parentNode.children[0].value=target.parentNode.textContent.slice(4);

            };
            inputData.onkeyup=function(event){
                        let e=event || window.event,
                            target = e.target || e.srcElement;
                        if (e.keyCode === 13){
                            saveBtn.onclick();
                        }else if (e.keyCode === 27){
                            cancelBtn.onclick();
                            target.parentNode.children[0].setAttribute("style", "display:none");
                            target.parentNode.children[1].setAttribute("style", "display:none");
                            target.parentNode.children[2].setAttribute("style", "display:none");
                            target.parentNode.children[3].setAttribute("style", "display:block");
                            
                        }
             };

             //其他操作是input失去焦点后的监听
             inputData.onblur = function(event){
                var e = event||window.event;
                var target = e.target;
                setTimeout(function(){
                    target.parentNode.children[0].setAttribute("style", "display:none");
                            target.parentNode.children[1].setAttribute("style", "display:none");
                            target.parentNode.children[2].setAttribute("style", "display:none");
                            target.parentNode.children[3].setAttribute("style", "display:block");

                },200);
             }
            //销售数据
            tr.appendChild(monTd);
        }
        table.appendChild(tr);
    }
    tableWra.appendChild(table);
    adjustTable(rawData[0],rawData[1]);
}


