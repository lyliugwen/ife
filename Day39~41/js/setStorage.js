function setStorage(newData) {
	if (window.localStorage) {
		var storage =window.localStorage;
		if (storage.getItem('updateData')) {
			var storeData = storage.getItem('updateData');
			console.log(storeData);
			var sData = JSON.parse(storeData); 
			console.log("饭以后");
			console.log("sData"); 
			console.log(sData);
			console.log("newData");
			console.log(newData);
			for(var i = 0;i < sData.length;i++){
				if (newData.product === sData[i].product && newData.region === sData[i].region) {
					sData[i].sale=newData.sale;
					var storeData = JSON.stringify(sData);
					storage.setItem('updateData',storeData);
					console.log("已有"+storage.getItem('updateData'));

					return true;
				}
			}

			sData.push(newData);
			var storeData = JSON.stringify(sData);
			storage.setItem('updateData',storeData);		

		}else{
			var preData = new Array();
			preData.push(newData);
			var storeData = JSON.stringify(preData);
			storage.setItem('updateData',storeData);			
		}
		
		console.log("上传"+storage.getItem('updateData'));
	}else{
		alert('no window.localStorage');
	}
}