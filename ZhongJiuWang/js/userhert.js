$(function(){
	$(".ctright ul li").click(function(){
		$(".ctright div.z").eq($(this).index()).show()
			.siblings("div.z").hide();
		$(this).css("background","white")
			.siblings().css("background","#F2F2F2")
	})
})
