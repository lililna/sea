$(function(){
	$(".banner ul").mouseenter(function(){
		clearInterval(time);
	}).mouseleave(function(){
		time = setInterval(pagechange,3000);
	})
	
	$(".banner").hover(
		function(){
			$(this).children("span").css("display","block")
		},
		function(){
			$(this).children("span").css("display","none")
		}
	)
	$(".banner").children("span:eq(0)").click(function(){
		clearInterval(time);
		pagechange();
	})
	$(".banner").children("span:eq(1)").click(function(){
		clearInterval(time);
		pagechange();
	})
	var index = 0;
	var i = 0;
	var $width = $(".banner ul li").outerWidth();
	var time = setInterval(pagechange,3000);
	function pagechange(){
		index++;
		i++;
		if(i==2){
			i=0;
		}
		$(".banner ol li").eq(i).css("background","red")
			.siblings().css("background","white"); 
		$(".banner ul li").eq(index).find("img").eq(1).animate({
			left:0
		},500).next().animate({
			left:400
		},500,function(){
			$(".banner ul").animate({
				left:-$width*index
			},1000,function(){
				$(".banner ul li").eq(index).find("img").eq(1).animate({
					left:100
				},500).next().animate({
					left:580
				},500)
				if(index==2){
					index = 0;
					$(".banner ul").animate({
						"left":"0"
					},0);
				}
			})
		})
	}
	
})

/*$(function(){
	/*$(".banner ol li").mouseenter(function(){
		$(this).css("background","red")
			.siblings().css("background","white");
		$(".banner ul li").eq($(this).index()).css("display","block").animate({
			"left":0
		},1000,function(){
			$(this).siblings().css({
				"left":$(document).outerWidth(),
				"display":"none"
			});
		})
	})
	$(".banner").hover(
		function(){
			$(this).children("span").css("display","block")
		},
		function(){
			$(this).children("span").css("display","none")
		}
	)*/
	
	/*$(".banner ol li").mouseenter(function(){
		$(this).css("background","red")
		 .siblings().css("background","white");
		$(".banner ul li").eq($(this).index()).children("img").eq(0).animate({
			"z-index":10
		},1000,function(){
			$(this).siblings().animate({
				"z-index":10
			},1000)
		}).parent().siblings().children("img").css("z-index",5);
})*/
