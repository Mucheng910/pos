'use strict';


function tureList(arr){
	var i ,j;
	var brr=[];
	var goodsList= loadAllItems();
	for(i=0;i<arr.length;i++){
		var flag=true;
		for(j=0;j<brr.length;j++){
			if(arr[i]==brr[j].barcode){
				brr[j].count++;
				flag=false;
				break;
			}
		}
		if(flag){
			for(j=0;j<goodsList.length;j++){
				if(arr[i]==goodsList[j].barcode){
					var crr={};
					crr.name=goodsList[j].name;
					crr.barcode=goodsList[j].barcode;
					crr.price=goodsList[j].price;
					crr.unit=goodsList[j].unit;
					crr.count=1;
					brr.push(crr);
					break;
				}
			}
		}
	}
	return brr;
}

function printList(arr) {
	var i;
	var s="";
	var sum=0;
	s=s+"***<没钱赚商店>收据***\n";
	for(i=0;i<arr.length;i++){
		sum+=arr[i].count*arr[i].price;
		s=s+"名称："+arr[i].name+"，数量："+arr[i].count+arr[i].unit+
		"，单价："+arr[i].price.toFixed(2)+"(元)，小计："+(arr[i].price*arr[i].count).toFixed(2)+"(元)\n";
	}
	s=s+"----------------------\n总计："+sum.toFixed(2)+"(元)\n**********************";
	console.log(s);
}

function printReceipt(inputs) {
  var list;
  list = tureList(inputs);
  printList(list);
}