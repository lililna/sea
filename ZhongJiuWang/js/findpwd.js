$(function(){
/*1-4改变*/
	$(".mp").click(function(){
		$("#dlb").addClass("dlall")
		.siblings().removeClass("dlall");
		$(".message").eq(1).addClass("showdiv")
			.siblings().removeClass("showdiv");
	})
	
	$(".mpp").click(function(){
		$("#dlc").addClass("dlall")
		.siblings().removeClass("dlall");
		$(".message").eq(2).addClass("showdiv")
			.siblings().removeClass("showdiv");
	})
	
	$(".mppp").click(function(){
		$("#dld").addClass("dlall")
		.siblings().removeClass("dlall");
		$(".message").eq(3).addClass("showdiv")
			.siblings().removeClass("showdiv");
			var i=10;
			var time = setInterval(function(){
				$(".message .pb").html(i+"秒后转到登录页面！");
				i--;
				if(i==0){
					clearInterval(time);
					window.location.href = "login.html";
				}
			},1000)
	})
	$(".ptcode").html(suiji);
	$(".message span").click(function(){
		var suiji = "";
		for(var i=0;i<4;i++){
			suiji+=shu[rand(0,61)];
		}
		$(".ptcode").html(suiji);
	})
})

function rand(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
 
var shu = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var suiji = "";
for(var i=0;i<4;i++){
	suiji+=shu[rand(0,61)];
}