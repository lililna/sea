$(function(){
	/*三级菜单*/
	$(".secondul li").mouseenter(function(){
		$(this).find("div").show()
		.parent().siblings("li").find("div").hide();
		 
	}).mouseleave(function(){
		$(".third").hide();
	})
	
	/*右侧特效*/
	$("#theRight li").mouseenter(function(){
		$(this).find("b").css({
			"background":"#C81622",
			"color":"yellow"
			})
			.siblings("span").stop().animate({
				left:-80
			},1000)
	}).mouseleave(function(){
		$(this).find("b").css({
			"background":"#333333",
			"color":"#FFF"
		})
			.siblings("span").stop().animate({
				left:40
			},1000)
	})
	$("#totop span").click(function(){
		$("html,body").animate({
			scrollTop:0
		},1000)
	})
	/*轮播图*/
	 
	var timer = setInterval(pagechange,2000);
	var index = 1;
	function pagechange(){
		if(index==5){
			index = 0;
			$(".bannerimg ul").animate({
				left:0
			},0)
		}
		$(".banner ol li").eq(index).addClass("olbg")
			.siblings().removeClass("olbg");
		$(".bannerimg ul").animate({
			left:-730*index-730
		},1000)
		index++;
	}
	$(".bannerimg").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(pagechange,2000);
	})
	$(".banner ol li").mouseenter(function(){
		index = $(this).index();
		pagechange();
	})
	
	/*floor1的Tab切换*/
	$(".floor>div ul li").mouseenter(function(){
		$(this).addClass("showborder")
			.children("a").css("border",0)
		 	.parent().siblings().removeClass("showborder")
		 	.children("a").css("border-right","1px solid #CCC");
	})
	/*一楼小的轮播图*/
	var stimer = setInterval(spagechange,2000);
	var sIndex = 1;
	function spagechange(){
		if(sIndex==5){
			sIndex = 0;
			$(".smallbanner ul").animate({
				left:0
			},0)
		}
		$(".smallbanner ol li").eq(sIndex).addClass("smallolbg")
			.siblings().removeClass("smallolbg");
		$(".smallbanner ul").animate({
			left:-428*sIndex-428
		},1000)
		sIndex++;
	}
	$(".smallbanner").mouseenter(function(){
		clearInterval(stimer);
	}).mouseleave(function(){
		stimer = setInterval(spagechange,2000);
	})
	$(".smallbanner ol li").mouseenter(function(){
		sIndex = $(this).index();
		spagechange();
	})
	
	/*二楼小的轮播图*/
	var ertimer = setInterval(erpagechange,2000);
	var erIndex = 1;
	function erpagechange(){
		if(erIndex==4){
			erIndex = 0;
			$(".f2banner ul").animate({
				left:0
			},0)
		}
		$(".f2banner ol li").eq(erIndex).addClass("f2olbg")
			.siblings().removeClass("f2olbg");
		$(".f2banner ul").animate({
			left:-340*erIndex-340
		},1000)
		erIndex++;
	}
	$(".f2banner").mouseenter(function(){
		clearInterval(ertimer);
	}).mouseleave(function(){
		ertimer = setInterval(erpagechange,2000);
	})
	$(".f2banner ol li").mouseenter(function(){
		erIndex = $(this).index();
		erpagechange();
	})
	/*三楼小的轮播图*/
	var santimer = setInterval(sanpagechange,2000);
	var sanIndex = 1;
	function sanpagechange(){
		if(sanIndex==4){
			sanIndex = 0;
			$(".f3banner ul").animate({
				left:0
			},0)
		}
		$(".f3banner ol li").eq(sanIndex).addClass("f3olbg")
			.siblings().removeClass("f3olbg");
		$(".f3banner ul").animate({
			left:-440*sanIndex-440
		},1000)
		sanIndex++;
	}
	$(".f3banner").mouseenter(function(){
		clearInterval(santimer);
	}).mouseleave(function(){
		santimer = setInterval(sanpagechange,2000);
	})
	$(".f3banner ol li").mouseenter(function(){
		sanIndex = $(this).index();
		sanpagechange();
	})
	/*六楼小的轮播图*/
	var liutimer = setInterval(liupagechange,2000);
	var liuIndex = 1;
	function liupagechange(){
		if(liuIndex==4){
			liuIndex = 0;
			$(".f6banner ul").animate({
				left:0
			},0)
		}
		$(".f6banner ol li").eq(liuIndex).addClass("f6olbg")
			.siblings().removeClass("f6olbg");
		$(".f6banner ul").animate({
			left:-338*liuIndex-338
		},1000)
		liuIndex++;
	}
	$(".f6banner").mouseenter(function(){
		clearInterval(liutimer);
	}).mouseleave(function(){
		liutimer = setInterval(liupagechange,2000);
	})
	$(".f6banner ol li").mouseenter(function(){
		liuIndex = $(this).index();
		liupagechange();
	})
	
	/*楼梯效果*/
	var f = false;
	$("#floorlist ul li").click(function(){
		f = true;
		var index = $(this).index();
		var top = $(".floor").eq(index).offset().top;
		$(this).find("span").addClass("active")	        			.end().siblings().find("span")
			.removeClass("active");
	    $("html body").animate({
	    	scrollTop:top
	    },1000,function(){
	    	f = false;
	    })
	})
	$(window).scroll(function(){
		if(!f){
			var scrollHeight = $(window).scrollTop();
		var f1top = $(".floor").eq(0).offset().top;
		//var top = $(".floor").eq(index).offset().top;
		var ix = Math.round((scrollHeight - f1top)/700);
		if(scrollHeight >= f1top){
			$("#floorlist").css("display","block");
		}else{
			$("#floorlist").css("display","none");
		}
		$("#floorlist ul li").eq(ix).find("span")
			.addClass("active").end()
			.siblings().find("span").removeClass("active");
		}
		
	})
	/*重做一楼json获取*/
	$(".f1top ul li").mouseenter(function(){
		var f1index = $(this).index();
		emptyfloor1();
		switch(f1index){
			case 0:floor101();
			break;
			case 1:floor102();
			break;
			case 2:floor103();
			break;
			case 3:floor101();
			break;
			case 4:floor102();
			break;
			case 5:floor103();
			break;
			case 6:floor101();
			break;
			case 7:floor102();
			break;
			case 8:floor103();
			break;
		}
	})
	floor101();
	function floor101(){	 
		$.ajax({
		type:"get",
		url:"detaillist.json",
		async:true,
		success:function(mlist){
			emptyfloor1();
				 f1html0 = '<dl class="flctdl">'+
						'<dt>'+
							'<p>'+mlist.f1[0].pct+'</p>'+
							'<span>'+mlist.f1[0].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[0].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctleft").append(f1html0);
				 f1html1 = '<dl class="jingtai">'+
						'<dt>'+
							'<p>'+mlist.f1[0].pct+'</p>'+
							'<span>'+mlist.f1[0].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[0].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctcenter").prepend(f1html1);
				$(".f1ctcenter").append(f1html1);
				 f1html2 = '<dl class="f1rightdl">'+
						'<dt>'+
							'<p>'+mlist.f1[2].pct+'</p>'+
							'<span>'+mlist.f1[2].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[2].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				for(var i=0;i<5;i++){
					$(".f1ctright").append(f1html2);
				}
				 f1html3 = '<dl class="f1rightdl man">'+
						'<dt>'+
							'<p>'+mlist.f1[4].pct+'</p>'+
							'<span>'+mlist.f1[4].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[4].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctright").append(f1html3);
				$(".f1ctright").append(f1html2);		
		}
	});
	}
	function floor102(){
		$.ajax({
		type:"get",
		url:"detaillist.json",
		async:true,
		success:function(mlist){
			emptyfloor1();
				var html0 = '<dl class="flctdl">'+
						'<dt>'+
							'<p>'+mlist.f1[1].pct+'</p>'+
							'<span>'+mlist.f1[1].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[1].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctleft").append(html0);
				 var html1 = '<dl class="jingtai">'+
						'<dt>'+
							'<p>'+mlist.f1[1].pct+'</p>'+
							'<span>'+mlist.f1[1].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[1].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctcenter").prepend(html1);
				$(".f1ctcenter").append(html1);
				var html2 = '<dl class="f1rightdl">'+
						'<dt>'+
							'<p>'+mlist.f1[3].pct+'</p>'+
							'<span>'+mlist.f1[3].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[3].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				for(var i=0;i<5;i++){
					$(".f1ctright").append(html2);
				}
				var html3 = '<dl class="f1rightdl man">'+
						'<dt>'+
							'<p>'+mlist.f1[4].pct+'</p>'+
							'<span>'+mlist.f1[4].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[4].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctright").append(html3);
				$(".f1ctright").append(html2);
		}
	});
	}
	function floor103(){
		$.ajax({
		type:"get",
		url:"detaillist.json",
		async:true,
		success:function(mlist){
			    emptyfloor1();
				var html0 = '<dl class="flctdl">'+
						'<dt>'+
							'<p>'+mlist.f1[0].pct+'</p>'+
							'<span>'+mlist.f1[0].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[0].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctleft").append(html0);
				 var html1 = '<dl class="jingtai">'+
						'<dt>'+
							'<p>'+mlist.f1[0].pct+'</p>'+
							'<span>'+mlist.f1[0].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[0].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctcenter").prepend(html1);
				$(".f1ctcenter").append(html1);
				var html2 = '<dl class="f1rightdl">'+
						'<dt>'+
							'<p>'+mlist.f1[5].pct+'</p>'+
							'<span>'+mlist.f1[5].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[5].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				for(var i=0;i<5;i++){
					$(".f1ctright").append(html2);
				}
				var html3 = '<dl class="f1rightdl man">'+
						'<dt>'+
							'<p>'+mlist.f1[4].pct+'</p>'+
							'<span>'+mlist.f1[4].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f1[4].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
				$(".f1ctright").append(html3);
				$(".f1ctright").append(html2);
		}
	});
	}
	function emptyfloor1(){
		$(".f1ctright").empty();
		$(".jingtai").remove();
		$(".flctdl").remove();
	}
	/*二楼json获取*/
	$.ajax({
		type:"get",
		url:"detaillist.json",
		async:true,
		success:function(mlist){
			var f2html1 = '<img src="'+mlist.f2[0].imgsrc+'" />';
			for(var i=0;i<3;i++){
				$(".f2ctright").append(f2html1);
			}
			var f2html2 = '<dl>'+
						'<dt>'+
							'<p>'+mlist.f2[1].pct+'</p>'+
							'<span>'+mlist.f2[1].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f2[1].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
			for(var i=0;i<3;i++){
				$(".f2ctright").append(f2html2);
			}
		}
	});
	/*三楼json获取*/
	$.ajax({
		type:"get",
		url:"detaillist.json",
		async:true,
		success:function(mlist){
			var f3html1 = '<dl>'+
						'<dt>'+
							'<p>'+mlist.f3[0].pct+'</p>'+
							'<span>'+mlist.f3[0].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f3[0].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
			for(var i=0;i<4;i++){
				$(".f3ctright").append(f3html1);
			}
			var f3html2 = '<dl>'+
						'<dt>'+
							'<p>'+mlist.f3[2].pct+'</p>'+
							'<span>'+mlist.f3[2].spanct+'</span>'+
						'</dt>'+
						'<dd>'+
							'<img src="'+mlist.f3[2].imgsrc+'" />'+
						'</dd>'+
					'</dl>';
			for(var i=0;i<4;i++){
				$(".f3ctbottom").append(f3html2);
			}
		}
	});
	
	/*六楼json获取*/
	$.ajax({
		type:"get",
		url:"detaillist.json",
		async:true,
		success:function(mlist){
			var f6html1 = '<a href="#">'+
						'<img src="'+mlist.f6[0].imgsrc+'" />'+
						'</a>';
			var f6html2 = '<a href="#">'+
						'<img src="'+mlist.f6[1].imgsrc+'" />'+
						'</a>';
			
			for(var i=0;i<3;i++){
				$(".f6ctcenter").prepend(f6html1);
			}
			$(".f6ctcenter").prepend(f6html2); 
			$(".f6ctcenter").prepend(f6html1);
		}
	});
})
