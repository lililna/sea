//对象型 属性名：属性值   键名：键值   键值对
var oGet = {
	"getStyle":function(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];//IE浏览器兼容
		}else{
			return getComputedStyle(obj)[attr];//非IE浏览器兼容
		}
	}
};
var move = {
	"moveSameTime":function(start,end,stepNum,obj,attr,fn){
		clearInterval(time)
		var step = (end-start)/stepNum;
		var time = setInterval(function(){
			start += step;
			if(start<=end&&step<0){
				clearInterval(time);
				start = end;
				if(fn){
					fn();
				}
			}else if(start>=end&&step>0){
				clearInterval(time);
				start = end;
				if(fn){
					fn();
				}
			}
			obj.style[attr] = start + "px";
		},2)
	},
	"moreAttrSameTime":function(myJson){
		clearInterval(time);
		var oStep = [];
		var oStart = [];
		var oEnd = [];
		var oAttr = [];
		var obj = [];
		var cb = [];
		for(var attr in myJson){
			var step = (myJson[attr].end-myJson[attr].start)/myJson[attr].stepNum;
			oStep.push(step);
			oStart.push(myJson[attr].start);
			oEnd.push(myJson[attr].end);
			oAttr.push(attr);
			obj.push(myJson[attr].ele);
			cb.push(myJson[attr].fn);
		}
		var time = setInterval(function(){
			for(var i=0;i<oStep.length;i++){
				oStart[i] += oStep[i];
				if(oStart[i]<=oEnd[i]&&oStep[i]<0){
					clearInterval(time);
					oStart[i] = oEnd[i];
					if(cb[i]){
						cb[i]();
					}
				}else if(oStart[i]>=oEnd[i]&&oStep[i]>0){
					clearInterval(time);
					oStart[i] = oEnd[i];
					if(cb[i]){
						cb[i]();
					}
				}
				obj[i].style[oAttr[i]] = oStart[i] + "px";
			}	
		},2)
	}
	,
	"lunboSameTime":function(end,stepNum,obj,attr,fn){
		//end结束状态  stepNum运动总步数  obj运动的元素  attr改变的属性 fn回调函数
		clearInterval(obj.time);
		var start = parseFloat(oGet.getStyle(obj,attr));
		if(attr=="opacity"){
			var start = parseInt(oGet.getStyle(obj,attr)*100);
			var end = end*100;
		}
		var step = (end - start)/stepNum;
		obj.time = setInterval(function(){
			start += step;
			if(start<=end&&step<0){
				clearInterval(obj.time);
				start = end;
				if(fn){
					fn();
				}
			}else if(start>=end&&step>0){
				clearInterval(obj.time);
				start = end;
				if(fn){
					fn();
				}
			}
			if(attr=="opacity"){
				obj.style[attr] = start/100;
			}else{
				obj.style[attr] = start + "px";
			}		
		},10)
	},
	"moveBuffer":function(obj,end,attr,stepNum,fn){
//		var step=0;
		obj.time = setInterval(function(){
			if(attr == "opacity"){
				var oStart = parseInt(oGet.getStyle(obj,attr)*100);
				var oEnd = end*100;
			}else{
				var oStart = parseFloat(oGet.getStyle(obj,attr));
			}
			if(oEnd>oStart){
				var step = Math.ceil((oEnd - oStart)/stepNum);
			}else{
				var step = Math.floor((oEnd - oStart)/stepNum);//(30 - 100)/7 = -0.7 
			}
			oStart+=step;
			if(oStart==oEnd){
				clearInterval(obj.time);
				oStart = oEnd;
				if(fn){
					fn();
				}
			}
			if(attr == "opacity"){
				obj.style[attr] = oStart/100;
			}else{
				obj.style[attr] = oStart + "px";
			}	
		},30)
	},
	"moreAttrMove":function(obj,myJson,stepNum,fn){
		for(var key in myJson){
			move(key,myJson[key]);
		}
		function move(attr,nowEnd){
			var time = setInterval(function(){
				var oStart;
				var oEnd = nowEnd;
				if(attr == "opacity"){
					oStart = parseInt(getStyle(obj,attr)*100);
					oEnd = nowEnd*100;
				}else{
					oStart = parseInt(getStyle(obj,attr));
				}
				var step = (oEnd - oStart)/stepNum;
				if(step>0){
					step = Math.ceil(step);
				}else{
					step = Math.floor(step);
				}
				oStart+=step;
				if(oStart==oEnd){
					clearInterval(time);
					oStart = oEnd;
					if(fn){
						fn();
					}
				}
				if(attr == "opacity"){
					obj.style[attr] = oStart/100;
				}else{
					obj.style[attr] = oStart + "px";
				}	
			},30)
		}	
	}
}

var cookie = {
	"setCookie":function setCookie(name,val,lifeCircle){
		//name传入的键名  val传入的键值  lifeCircle cookie生命周期(过期时间=cookie的设置时间+lifeCircle)
		var oDate = new Date();//时间对象
		oDate.setDate(new Date().getDate()+lifeCircle);
		document.cookie = name+"="+val+";expires="+oDate;
	}
}

var ajax = function(myJson){
	//设置请求方式 默认为 "get"方式
	var method = myJson.method||"get";//请求方式 设置缺省值为"get"
//	设置ajax请求地址
	var url = myJson.url;
	//设置传入的数据  默认为 空
	var data = myJson.data||"";//发送数据缺省值为空字符串
	//设置以异步还是同步的方式发送ajax请求 默认为异步方式
	var boolean = myJson.boolean||true;
	//判断浏览器是否兼容XMLHttpRequest对象
	if(XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
//		ie8及以下浏览器AJAX对象兼容写法
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//判断ajax请求方式
	if(method=="get"){
//		ajax get方式请求的时候  我们把date通过open传入到服务器
		xhr.open("get",url+"?"+data+"&t="+new Date().getTime(),boolean);
		xhr.send();
	}else{
//		ajax post方式请求的时候  我们把date通过send传入到服务器
		xhr.open("post",url,boolean);
		xhr.send(data);
	}
//	ajax加载成功的情况下 触发onload事件函数
	xhr.onload = function(){
		//当有回调函数的时候  调用回调函数 并且把从服务器获取的数据 作为参数传入回调函数里面
		if(myJson.fn){
			myJson.fn(xhr.responseText);
			//(function(res){document.write(res);})(xhr.responseText)
		}	
	}
}
var oob={
	extend:function(Child, Parent) {
		var F = function(){};
		F.prototype = Parent.prototype;
		Child.prototype = new F();
		Child.prototype.constructor = Child;
	}
} 
