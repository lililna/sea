
$(function(){
	 
	
	/*nav*/
	$(".nav ul li:not(:last)").mouseenter(function(){
		$(this).css("background-color","#b81c22")
			   .find(".hideImg").show();
	})
	$(".nav ul li:not(:last)").mouseleave(function(){
		$(this).css("background-color","#080808")
			   .find(".hideImg").hide();
	})
	/*banner*/
	var i=1;
	var time = setInterval(pagechange,3000)
	function pagechange(){
		 if(i==5){
		 	i=0;
		 }
		$(".banner ul li").eq(i).css("z-index",1).stop().fadeIn(3000)
			.siblings().css("z-index",0).stop().fadeOut(3000);
		$("ol li").eq(i).css("background","red")
			.siblings().css("background","white");
		i++;
	}
	$(".banner").mouseenter(function(){
		clearInterval(time);
	}).mouseleave(function(){
		time = setInterval(pagechange,3000);
	})
	$("ol li").mouseenter(function(){
		i = $(this).index();
		pagechange();
	})
	
	/*newGoodsCt*/
	$(".newGoodsCt dl").mouseenter(function(){
		$(this).css({
			"border":"6px solid #E6E6E6"
		})
	}).mouseleave(function(){
		$(this).css({
			"border":"6px solid lightyellow"
		})
	})
	
	/*condo*/
	$(".condo .ula li").mouseenter(function(){
		$(".condo div").eq($(this).index()).show()
			.siblings("div").hide();
		$(this).css({
			"border-bottom":"4px solid #000"
		}).siblings().css({
			"border":0
		})
	})
	
	/*tanchu*/
	var tt = $(window).outerHeight()/2 - $(".outer dl").outerHeight()/2;
	var ll = $(window).outerWidth()/2-$(".outer dl").outerWidth()/2
	$(".outer dl").css({
		top:tt,
		left:ll
	})
	$(".outer dl span").click(function(){
		$(this).parent().parent().hide();
	})
	var f = false;
	$(window).scroll(function(){
		if(!f){
			var t = $(document).scrollTop();
			$(".outer").css("top",t);
		}
	})
	$(".rttop").click(function(){
		f = true;
		$("body,html").animate({
			scrollTop:0
		},1000,function(){
			f = false;
		})
	})
		
	/*倒计时*/
	
	function gettime(){
		var endtime = new Date(2016,10,25);
		var starttime = new Date();
		var t = endtime - starttime;
		var d = 0;
		var h = 0;
		var m = 0;
		var s = 0;
		if(t>0){
			d = Math.floor(t/1000/60/60/24);
			h = Math.floor(t/1000/60/60%24);
			m = Math.floor(t/1000/60%60);
			s = Math.floor(t/1000%60);
		}
		for(var i=0;i<$(".time").size();i++){
			$(".content dl").eq(i).find("dd p span:eq(0)").html(d+"天");
				$(".content dl").eq(i).find("dd p span:eq(1)").html(h+"小时");
				$(".content dl").eq(i).find("dd p span:eq(2)").html(m+"分");
				$(".content dl").eq(i).find("dd p span:eq(3)").html(s+"秒");
			
		}
	}
	setInterval(gettime,1000);
	 
})
