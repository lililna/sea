$(function(){
	$("#login").click(function(){
		var name = $(".txtemail").val();
		var pwd = $(".pwd").val();
		console.log(1);
		$.ajax({
			type:"get",
			url:"../login.json",
			async:true,
			dataType:"json",
			success:function(msg){
				for(var i in msg){
					if(msg[i].name==name&&msg[i].pwd==pwd){
						$("#login").attr("href","../index.html");
						
						return;
					}
				}
				alert("失败");	 
			}
		});
		/*if($("#ckbox").checked){
							 
							setCookie("userName",$(".txtemail").val(),3);
						}*/
	})
})
