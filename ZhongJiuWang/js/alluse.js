
$(function(){
	/*logoTop*/
	/*最顶部内容效果*/
	$(".topInfoContent a").mouseenter(function(){
		$(this).css("color","red");
	})
	$(".topInfoContent a").mouseleave(function(){
		$(this).css("color","#000");
	})
	
	/*serchctp*/
	$(".searchCt p a").mouseenter(function(){
		$(this).css("color","red");
	})
	$(".searchCt p a").mouseleave(function(){
		$(this).css("color","#666666");
	})
	
	/*nav*/
	$(".nav ul li:not(:last)").mouseenter(function(){
		$(this).css("background-color","#b81c22");
	})
	$(".nav ul li:not(:last)").mouseleave(function(){
		$(this).css("background-color","#080808");
	}) 
	/*bottom*/
	$(".guideCt dl dd a").mouseenter(function(){
		$(this).css("color","red");
	})
	$(".guideCt dl dd a").mouseleave(function(){
		$(this).css("color","#666");
	})
	
	/*content ctleft*/
	$(".ctleft dl dd a").mouseenter(function(){
		$(this).css("color","red");
	}).mouseleave(function(){
		$(this).css("color","#666666");
	})
})
