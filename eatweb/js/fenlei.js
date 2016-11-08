$(function(){
	$("#mainc ul li").click(function(){
		var d = $(this).data("num");
		window.location.href="splist.html?"+"num="+d
	})
	$("#btn").click(function(){
		var str = $(this).prev().val();
		if(str) {
			window.location.href = "splist.html?keyword=" + str;
		}
	})
})
