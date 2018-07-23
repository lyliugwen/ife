function adjustTable(productChecked,regionChecked){
	var table = document.getElementById('table');
	if(regionChecked.length == 1 && productChecked.length >1){
		//地区在前，商品在后
		for(var i = 0;i < table.rows.length;i++){
			var cont = table.rows[i].cells[0].textContent;
			table.rows[i].cells[0].textContent = table.rows[i].cells[1].textContent;
			table.rows[i].cells[1].textContent = cont;
		}
		mergeTable();
	}else{
		mergeTable();
	}
}

function mergeTable(){
	var table = document.getElementById('table');	
	var point = 0;
	for(var i = 0;i < table.rows.length-1;i++){
		if (table.rows[i].cells[0].textContent === table.rows[i+1].cells[0].textContent) {
			table.rows[point].cells[0].rowSpan += 1;
			table.rows[i+1].cells[0].style.display = 'none';
		}else{
			point = i+1;
		}
	}

}