$(function(){
	/*放大镜*/
	var smallimg = $(".smallimg");
	var smallsee = $(".smalldiv");
	var bigimg = $(".bigimg");
	var bigsee = $(".bbigimg");
	bigimg.outerWidth(smallimg.outerWidth()*bigsee.outerWidth()/smallsee.outerWidth());
	bigimg.outerHeight(smallimg.outerHeight()*bigsee.outerHeight()/smallsee.outerHeight());
	var bili = bigsee.outerWidth()/smallsee.outerWidth();
	smallimg.mousemove(function(e){
		var scrollTop = $(document).scrollTop();
		var ev = e||event;
		var left = ev.clientX - smallimg.offset().left -smallsee.outerWidth()/2;
		var top = ev.clientY - smallimg.offset().top + scrollTop - smallsee.outerHeight()/2;
		var bleft = smallimg.outerWidth()-smallsee.outerWidth();
		var btop = smallimg.outerHeight()-smallsee.outerHeight();
		if(left<=0){
			left=0;
		}else if(left>=bleft){
			left = bleft;
		}
		if(top<=0){
			top = 0;
		}else if(top>=btop){
			top = btop;
		}
		
		smallsee.css({
			"display":"block",
			"left":left,
			"top":top
		})
		bigimg.css({
			"position":"absolute",
			"left":-bili*left,
			"top":-bili*top
		})
	})
	/*切换图片*/
	$(".smallimg").mouseenter(function(){
		$(".bbigimg").css("display","block");
		$(".smalldiv").css("display","block");
	}).mouseleave(function(){
		$(".bbigimg").css("display","none");
		$(".smalldiv").css("display","none");
	})
	$(".bleftct dd img").click(function(){
		$(".smallimg").css("background","url(../img/smallimg"+$(this).index()+".jpg)");
		$(".bigimg").attr("src","../img/smallimg"+$(this).index()+".jpg");
	})
	var c = 1;
	$("#jia").click(function(){
		c++;
		$("#txte").val(c);
	})
	$("#jian").click(function(){
		c--;
		if(c<=1){
			c=1;
		}
		$("#txte").val(c);
	})
	$(".addmycart").mouseenter(function(){
		$(this).css({
			"background":"red"
		})
	})
	$(".addmycart").mouseleave(function(){
		$(this).css({
			"background":"#bbbbbb"
		})
	})
	$(".buy").mouseenter(function(){
		$(this).css({
			"background":"red"
		})
	})
	$(".buy").mouseleave(function(){
		$(this).css({
			"background":"#bbbbbb"
		})
	})
})
