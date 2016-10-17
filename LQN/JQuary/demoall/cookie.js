function getCookie(key){
	cookie_info = document.cookie;
	var f = false;//f为加  cookie  没有想要的数据   
	//如果cookie_info  有数据   才能执行
	if (cookie_info) {
		list = cookie_info.replace(/;\s/g,";").split(';');
		for (var i=0;i<list.length;i++) {
			item = list[i].split('=');
			if (item[0] == key) {
				f = true;
				v = item[1];//将cookie中的 购物车信息  存入到新变量 v中
			}		
		}	
		if (f) {
			arr = JSON.parse(v); //将取出的购物车信息  转成对象 存入到数组    （数组中是json对象）
			return arr;
		}
		return [];	
	}
	return [];
}

function setCookie(key,value){
	document.cookie = key + "=" + value;
}
