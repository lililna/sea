$(function(){
	$(".ulano").click(function(){
		$(this).addClass("moren")
		.siblings().removeClass("moren");
		console.log($(this).index());
		$(".kindwine").eq($(this).index()/2).addClass("showdiv")
			.siblings().removeClass("showdiv");
	})
})
