function setCookie(name,value,exdays){
	var now = new Date();
	now.setTime(now.getTime()+exdays*24*60*1000);
	document.cookie = name + "=" + value + "; " + "Expires" + "=" + now.toGMTString() +"; ";
}

function getCookie(name){
	var cookieArr = document.cookie.split("; ");
	for(var i=0;i<cookieArr.length;i++){
		var arr = cookieArr[i].split("=");
		if(name == arr[0]){
			return arr[1];
		}
	}
}

function removeCookie(name){
	setCookie(name,"",-1);
}