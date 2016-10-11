$(function(){
	$(".ziliao span").click(function(){
		$(this).css({
			"background":"#f5f5f5"
		}).siblings().css({
			"background":"#fff"
		})
		$(this).parent().siblings("div").eq($(this).index()).show()
			.siblings("div").hide()
	})
})
