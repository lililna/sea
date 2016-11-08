$(function(){
	$("#navc ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	var key = location.href.split("?")[1].split("=")[0];
	if(key == "num"){
		var num = location.href.split("=")[1];
		var str = "";
		var mainc = $("#mainc");
		$.ajax({
			type:"get",
			url:"../json/package.json",
			async:true,
			success:function(data){
				for(var i in data){
					if(data[i].typenum == num){
						str+='<a href="details.html?id='+data[i].id+'">'
						str+='<div>'
						str+="<img src=../"+data[i].src+">"
						str+='<p class="p1">'+data[i].name+'</p>'
						str+='<p class="p2">'+'<span>'+data[i].price+'</span>'+'<span>'+data[i].delprice+'</span>'+'</p>'
						str+='</div>'
						str+='</a>'
					}
				}
				mainc.html(str);
			}
		});
	}else if(key == "keyword"){
		var words = location.href.split("=")[1];
		var mainc = $("#mainc");
		var str = "";
		$.ajax({
			type:"get",
			url:"../json/package.json",
			async:true,
			success: function (data) {
				for(var i in data){
					if(data[i].name.indexOf(decodeURI(words)) != -1){
						str+='<a href="details.html?id='+data[i].id+'">'
						str+='<div>'
						str+="<img src=../"+data[i].src+">"
						str+='<p class="p1">'+data[i].name+'</p>'
						str+='<p class="p2">'+'<span>'+data[i].price+'</span>'+'<span>'+data[i].delprice+'</span>'+'</p>'
						str+='</div>'
						str+='</a>'
					}
				}
				mainc.html(str);
			}
		})
	}
})
