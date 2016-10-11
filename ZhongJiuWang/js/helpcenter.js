$(function(){
	$(".check dl").mouseenter(function(){
		$(this).css("background","lightpink")
	}).mouseleave(function(){
		$(this).css("background","white")
	})
	
	$(".helpUlb li").click(function(){
		$(this).children("span").css("background","url(../img/xiaosanjiao.jpg) no-repeat 25px 15px").parent()
			.siblings().children("span").css("background","url(../img/yousanjiao.jpg) no-repeat 25px 15px");
			
		$(this).children(".helpUlc").addClass("hchide").parent()
			.siblings().children(".helpUlc").removeClass("hchide");
		
	})
	
	$(".zhaomima").click(function(){
		window.location.href = "findpwd.html";
	})
})
