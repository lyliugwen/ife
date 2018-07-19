function Restaurant(obj){
	this.cash=obj.cash;
	this.seats=obj.seats;
	this.staff=obj.staff;
}
Restaurant.prototype.hire=function(sone){
		this.staff.push(sone);
}
Restaurant.prototype.fire=function(sone){
	var index = this.staff.indexOf(sone);
	if (index !== -1) {
		this.staff.splice(index,1);
	}
}

function Staff(name,salary){
	//this.id
	this.name=name;
	this.salary=salary;
}
Staff.prototype.work=function(){
	console.log('完成一次工作');
}
//重新设计服务员
var waiterSingletonAccepter=(function(){
	var instance=null;
	function Waiter(name,salary){
		Staff.call(this,name,salary);
	};
	Waiter.prototype=Object.create(Staff.prototype);
	//Waiter.prototype = new Staff(); 
	Waiter.prototype.constuctor=Waiter;
	Waiter.prototype.work=function(para){
		if (Array.isArray(para)) {
			console.log('记录客人点菜:'+para);
		}else{
			console.log('上菜:'+para);
		}
	};
	return {
		name:'Waiter',
		getInstance: function(name,salary){
			if (instance === null) {
				instance = new Waiter(name,salary);
			}
			return instance;
		}
	};
})();

//重新设计厨师
var cookSingletonAccepter=(function(){
	var instance=null;
	function Cook(name,salary){
		Staff.call(this,name,salary);
	};
	Cook.prototype=Object.create(Staff.prototype);
	Cook.prototype.constuctor=Cook;
	Cook.prototype.work=function(food){
			console.log('烹饪出菜品:'+food);
	};

	return{
		name:'Cook',
		getInstance: function(name,salary){
			if (instance === null) {
				instance = new Cook(name,salary);
			}
			return instance;
		}
	};
})();

function Customer(){
}
Customer.prototype.order=function(food){
	console.log('点菜:'+food);
}
Customer.prototype.eat=function(){
	console.log('吃菜');
}
function Food(name,cost,price){
	this.name=name;
	this.cost=cost;
	this.price=price;
}
var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

//餐厅运作
//初始建立
var ifeRestaurant = new Restaurant({
		    cash: 1000000,
		    seats: 20,
		    staff: []
		});

var newCook = cookSingletonAccepter.getInstance("Tony", 10000);
var newWaiter = waiterSingletonAccepter.getInstance("Sarah",8000);
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(newWaiter);
console.log(ifeRestaurant.staff);
//顾客队列
var ctmQueue = ['Johnny','Timmy','Jonson','Nancy','Anglela'];
let menu = [{
	name: "叉烧包",
	price: 33
},{
	name: "虾饺",
	price: 35
},{
	name:"皮蛋瘦肉粥",
	price: 28
},{
	name: "虾米肠粉",
	price: 40
},{
	name: "桂花糕",
	price: 30
}];

//餐厅运作
for (var i = 0;i < ctmQueue.length;i++){
	console.log("欢迎光临！");
	var newCustomer=new Customer();
	var index = Math.floor(Math.random()*5);
	var dish = new Array();
	dish.push(menu[index].name);
	newCustomer.order(dish);
	newWaiter.work(dish);
	for(var x = 0; x < dish.length;x++){
		newCook.work(dish[x]);
		newWaiter.work(dish[x]);
	}
	newCustomer.eat();
	console.log("请慢走~");
}



