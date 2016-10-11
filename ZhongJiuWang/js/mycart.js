$(function(){
	jiajian();
	$(".all button").click(function(){
		window.location.href = "../index.html";
	})
	$(".alsoshop dl dd button").click(function(){
		$(".cartct table").append(html);
		jiajian();
		$(".delete").click(function(){
			$(this).parent().parent().remove();
			var z = 0;
			for(var i=0;i<$(".xiaoji").length;i++){
				 for(var j=0;j<i+1;j++){
				 	zong = parseFloat($(".xiaoji").eq(j).html());
				 }
				z += zong;
			}
			$(".pa b").html(z);
			$(".pb b").html(z);
			})
	})
	
	$(".delete").click(function(){
		$(this).parent().parent().remove();
		var z = 0;
		for(var i=0;i<$(".xiaoji").length;i++){
			 for(var j=0;j<i+1;j++){
			 	zong = parseFloat($(".xiaoji").eq(j).html());
			 }
			z += zong;
		}
		$(".pa b").html(z);
		$(".pb b").html(z);
	})
	
	/*加减*/
	function jiajian(){
		$(".cut").click(function(){
			var xiaoji = $(this).parent().next().html();
			var danjia = $(this).parent().prev().html().slice(1);
			count = $(this).siblings("p").html();
			console.log(xiaoji);
			count--;
			xiaoji = danjia*count;
			if(count<=1){
				count =1;
				xiaoji = danjia;
			}
			$(this).next().html(count);
			$(this).parent().next().html(xiaoji);
			 var z = 0;
			for(var i=0;i<$(".xiaoji").length;i++){
				 for(var j=0;j<i+1;j++){
				 	zong = parseFloat($(".xiaoji").eq(j).html());
				 }
				z += zong;
			}
			$(".pa b").html(z);
			$(".pb b").html(z);
		})
		$(".add").click(function(){
			var xiaoji = $(this).parent().next().html();
			var danjia = $(this).parent().prev().html().slice(1);
			count = $(this).siblings("p").html();
			count++;
			xiaoji = danjia * count;
			$(this).prev().html(count);
			$(this).parent().next().html(xiaoji);
			var z = 0;
			for(var i=0;i<$(".xiaoji").length;i++){
				 for(var j=0;j<i+1;j++){
				 	zong = parseFloat($(".xiaoji").eq(j).html());
				 }
				z += zong;
			}
			$(".pa b").html(z);
			$(".pb b").html(z);
		})
	}
	
	 
	 /*金额*/
	 
	
	var html = '<tr>'+
					'<td class="info">'+
						'<dl>'+
							'<dt><img src="../img/cart.jpg"/></dt>'+
							'<dd>53°茅台飞天<b>[闪购商品]</b></dd>'+
						'</dl>'+
					'</td>'+
					'<td>￥835.00</td>'+
					'<td class="cutadd">'+
						'<span class="cut">-</span>'+
						'<p>1</p>'+
						'<span class="add">+</span>'+
					'</td>'+
					'<td class="xiaoji">1680.00</td>'+
					'<td>'+
						'<a href="#" class="addtocollect">加入收藏夹</a><br /><br />'+
						'<a href="#" class="delete">删除</a>'+
					'</td>'+
				'</tr>';
})