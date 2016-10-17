function $(selector){
//	selector 传入的选择器 为了避免选择器前面和后面有空格 直接把空格删除
	selector = selector.replace(/^\s+/,"");
	selector = selector.replace(/\s+$/,"");
	
//	sReg是匹配空格的正则表达式
	var sReg = /\s+/g;
	if(sReg.test(selector)){
//		把传入的selector后代选择区 用空格split成数组
		var selectors = selector.split(sReg);
//		obj是用来存储被选中的元素的 初始值为document
		var obj = document;//[div#box]
//		循环被分割后的selector数组
		for(var i=0;i<selectors.length;i++){
			//取出所有数组元素中的第一个字符 判断选择器的类型
			var firstStr = selectors[i].charAt(0);
			if(firstStr==="#"){
//				删除id选择器的#
				var selector = selectors[i].substring(1);
//				如果第一个选择器是ID选择器
				if(obj===document){
//					将通过id选择器选择的元素放入数组内 赋值给obj
					obj = oGet.getId(selector,obj);
				}else{
					var idObj = [];
					for(var j=0;j<obj.length;j++){
						var eles = oGet.getId(selector,obj[j]);
						for(var k=0;k<eles.length;k++){
							idObj.push(eles[k]);
						}
					}
					obj = idObj;
				}
			}else if(firstStr==="."){
				var selector = selectors[i].substring(1);	
				if(obj===document){
					obj = oGet.getClass(selector,obj);
				}else{	
					var classObj = [];
					for(var j=0;j<obj.length;j++){
						var eles = oGet.getClass(selector,obj[j]);;
						for(var k=0;k<eles.length;k++){
							classObj.push(eles[k]);
						}
					}
					obj = classObj;
				}
			}else{
				var selector = selectors[i];
				if(obj===document){
					obj = obj.getElementsByTagName(selector);
				}else{
					var tagObj = [];
					for(var j=0;j<obj.length;j++){
						var eles = obj[j].getElementsByTagName(selector);
						for(var k=0;k<eles.length;k++){
							tagObj.push(eles[k]);
						}
					}
					obj = tagObj;
				}
			}
		}
		return dereplication(obj);
	}else{
		var firstStr = selector.charAt(0);
		if(firstStr==="#"){
			var selector = selector.substring(1);
			return document.getElementById(selector);
		}else if(firstStr==="."){
			var selector = selector.substring(1);
			return document.getElementsByClassName(selector);
		}else{
			return document.getElementsByTagName(selector);
		}
	}
}

function dereplication(arr){
//				result空数组 用来推入arr中非重复的数组元素   isRepeat变量表明的是 当前数组元素 是否为重复
	var result = [],isRepeat;
//				把arr数组中的第一个元素推入result空数组当中 为了让双for循环中的内层循环可以开始执行
	result.push(arr[0]);
//				遍历arr数组 从1开始 是因为数组第一个元素已经被推入到result当中了
	for(var i=1;i<arr.length;i++){
//					将所有的arr数组元素初始都认为是不重复的
		isRepeat = false;
//					遍历result数组中的元素
		for(var j=0;j<result.length;j++){
//						将当前循环到的arr数组元素和所有的result进行比较 比较成立的时候 标记该arr数组元素为重复元素
			if(arr[i]===result[j]){
				isRepeat = true;
				break;
			}
		}
		if(!isRepeat){
//						当当前arr数组元素 不是重复元素的时候  将该arr元素推入到result数组中
			result.push(arr[i]);
		}
	}
//				将所有不重复的数组元素 所组成的新数组result返回给当前函数
	return result;
}

var oGet = {
	getClass:function(cName,papa){
		var reg = /\s+/g;
		var result = [];
		var papa = papa||document;
		var allEle = papa.getElementsByTagName("*");
		for(var i=0;i<allEle.length;i++){
			var cNameArr = allEle[i].className.split(reg);
			for(var j=0;j<cNameArr.length;j++){
				if(cNameArr[j]==cName){
					result.push(allEle[i]);
				}
			}
		}
		return result;
	},
	getId:function(idName,papa){
		var reg = /\s+/g;
		var result = [];
		var papa = papa||document;
		var allEle = papa.getElementsByTagName("*");
		for(var i=0;i<allEle.length;i++){
			if(allEle[i].id==idName){
				result.push(allEle[i])
			}
		}
		return result;
	},
	getStyle:function(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}
}

var oMath = {
	getRan:function(min,max){
	//	获取min-max的随机正整数
		return Math.floor(Math.random()*(max-min+1))+min;
	},
	sum:function(){
	//	参数求和
		var sum = 0;//1 3 6 10 15
		for(var i=0;i<arguments.length;i++){
			sum += arguments[i];
		}
		return sum;
	}
}


var arrCon = {
//	添加一个数组元素
	arrAdd:function(arr,index,info){
		arr.splice(index,0,info);
	},
//	删除一个数组元素
	arrDel:function(arr,index,num){
		arr.splice(index,num);
	},
//	替换一个数组元素
	arrChange:function(arr,index,num,info){
		arr.splice(index,num,info);
	},
//	查找一个数组元素
	arrSearch:function(arr,info){
		var infoArr = [];
		for(var i=0;i<arr.length;i++){
			if(arr[i]===info){
				infoArr.push(i);
			}
		}
		if(infoArr.length){
			return infoArr;
		}else{
			return "查无次值";
		}
	},
//	数组去重
	dereplication:function(arr){
		var result = [],isRepeat;
		result.push(arr[0]);
		for(var i=1;i<arr.length;i++){
			isRepeat = false;
			for(var j=0;j<result.length;j++){
				if(arr[i]===result[j]){
					isRepeat = true;
					break;
				}
			}
			if(!isRepeat){
				result.push(arr[i]);
			}
		}
		return result;
	}
}