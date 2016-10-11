$(function(){
	/*鼠标移入图片放大*/
	$(".ctlistct .ctula li dl dt").mouseenter(function(){
		$(this).children("img").animate({
			width:280,
			height:320,
			left:-10,
			top:-10
		},700)
	})
	$(".ctlistct .ctula li dl dt").mouseleave(function(){
		$(this).children("img").animate({
			width:260,
			height:300,
			left:0,
			top:0
		},700)
	})
	/*透明色*/
	$(".ctulb li").hover(
		function(){
			$(this).children("div").fadeOut(500);
		},
		function(){
			$(this).children("div").fadeIn(500);
		}
	)
	$(".ctulb li a").click(function(){
		$(this).attr("href","mycart.html");
	})
})