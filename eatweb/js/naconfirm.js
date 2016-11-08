var details = localStorage.getItem("buy");
details = JSON.parse(details)
var name = details.name;
var goodsimg =details.goodsimg;
var price = details.price;
var count = details.count;
var danjia = price.substr(1);
//alert(danjia)
		$(function(){
			var str = 	'<p class="shuoming">'+name+'</p>'+
				'<p class="gdetl">'+
					'<img src="../'+goodsimg+'"/>'+
						'<span>价格：<b id="price">'+price+'</b></span><br />'+
					'<span>数量：<b id="count">'+count+'</b></span>'+
					
				'</p>';
			$(".goods").append(str);
			$("#zong").text(danjia*count);
		})

