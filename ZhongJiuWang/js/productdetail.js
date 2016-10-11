$(function(){
	/*右侧商品排行榜*/
	$(".paihang ul li").mouseenter(function(){
		$(this).stop().animate({"height":242},1000)
		.find("dl").stop().slideDown(1000)
		.siblings().hide();
	}).mouseleave(function(){
		$(this).stop().animate({"height":42},1000)
			.find("dl").stop().slideUp(1000,function(){
				$(this).siblings().show();
			})
	})
	/*页面跳转*/
	$(".fplist li:eq(0)").click(function(){
		window.location.href = "../index.html";
	})
	/*倒计时*/
	 function getRtime(){
	 	var endTime = new Date(2016,10,25);
	 	var starTime = new Date();
	 	var t = endTime - starTime;
	 	var d = 0;
	 	var h = 0;
	 	var m = 0;
	 	var s = 0;
	 	var ms = 0;
	 	if(t>0){
		 	d = Math.floor(t/1000/60/60/24);
		 	h = Math.floor(t/1000/60/60%24);
		 	m = Math.floor(t/1000/60%60);
		 	s = Math.floor(t/1000%60);
	 	}
	 	$(".lid dl dd span i").eq(0).html(d+"天");
	 	$(".lid dl dd span i").eq(1).html(h+"时");
	 	$(".lid dl dd span i").eq(2).html(m+"分");
	 	$(".lid dl dd span i").eq(3).html(s+"秒");
	 }
	 setInterval(getRtime,1000)
})
