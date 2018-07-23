var drawWra=document.getElementById('drawWra');
var canvas=document.createElement('canvas');
function drawZX(data){
    canvas.innerHTML = " ";
    canvas.height=400;
    canvas.width=500;
    draWra.appendChild(canvas);

    //拿到最大值max
    var max=0;
    for(var i=0;i < data.length;i++){                
        var maxnew=Math.max.apply(null,data[i].sale);                
        if (maxnew > max) {
            max = maxnew;
        }
    }
    //绘制
    if (canvas.getContext) {
        var ctx=canvas.getContext('2d');
        createZXAxis(ctx,max,data);
        createZX(ctx,max,data);
    }
}
function createZXAxis(ctx,max,data){
    //轴高度，宽度
    var axisH=320;
    var drawH=300;
    var axisW=430;
    var pointOneX=70;
    var space=34;
    ctx.beginPath();
    ctx.moveTo(50,30);//y轴起点
    ctx.lineTo(50,30+axisH);
    ctx.lineTo(50+axisW,30+axisH);
    ctx.strokeStyle='black';
    ctx.stroke();
    //画基准线
    for(var i=0;i<6;i++){
        ctx.beginPath();
        ctx.moveTo(50,50+50*i);
        ctx.lineTo(50+axisW,50+50*i);
        ctx.strokeStyle='#dddddd';
        ctx.stroke();
    }
     //基准线数据
    var numPoint=6;
    var bili=drawH/parseInt(max);
    for(var i=0;i<7;i++){
        ctx.font='10px black';
        ctx.textBaseline='middle';
        ctx.textAlign='center';
        var num=50*numPoint/bili;
        ctx.fillText(Math.floor(num),30,50+50*i);
        numPoint--;
    }
    //写月份
    for(var i=0;i<12;i++){
        ctx.font='12px black';
        ctx.fillText((i+1)+'月',pointOneX+i*space,360);
    }
    ctx.fillText("销量",30,30);
    ctx.fillText("月份",485,360);
}

function createZX(ctx,max,data){
    //每个数据点的半径，颜色，线的颜色，宽度
    var pointRadius=3;
    var variousColor=['#60acfc','#32d3eb','#5bc49f','#feb64d','#ff7c7c','#9287e7',' #FF4500',' #FF4500','#4B0082'];
    var lineWid=2;
    var drawH=300;
    var bili=drawH/parseInt(max);
    //数据点的横向间距
    var space=34;
    var pointOneX=70; 
     //画数据点
    var lastX;
    var lastY;  
    for(var i=0;i < data.length;i++){
        var y=i*12;
        var pointColor=variousColor[i];
        for(var x=0;x< data[i].sale.length;x++){
            var dataH =parseInt(data[i].sale[x])*bili;
            ctx.beginPath();
            ctx.moveTo(pointOneX+x*space+pointRadius,350-dataH);
            ctx.arc(pointOneX+x*space,350-dataH,pointRadius,0,2*Math.PI,false);
            ctx.fillStyle=pointColor;
            ctx.fill();

            if (x!=0) {
                ctx.beginPath();
                ctx.moveTo(pointOneX+x*space,350-dataH);
                ctx.lineTo(lastX,lastY);
                ctx.strokeStyle=pointColor;
                ctx.stroke();
            }
            lastX=pointOneX+x*space;
            lastY=350-dataH;
        }

    }

    
}
    