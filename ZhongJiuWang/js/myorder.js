$(function(){
	$(".ctright ul li").click(function(){
		$(".ctright div").eq($(this).index()).show()
			.siblings("div").hide();
		$(this).css("background","white")
			.siblings().css("background","#F2F2F2")
	})
})
