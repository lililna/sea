$(function(){
	$(".yzhm").html(suiji);
	$(".rightct .nolook").hover(
		function(){
		$(this).css("color","red");
		},
		function(){
		$(this).css("color","#666666");
		}
	)
	$(".rightct .nolook").click(function(){
		var suiji = "";
		for(var i=0;i<6;i++){
			suiji+=shu[rand(0,61)];
		}
		$(this).siblings("div").html(suiji);
	})
	/*手机号*/
	$(".phoneNo").blur(function(){
		phoneNo();
	})
	/*验证码*/
	$(".yanzheng").focus(function(){
		if($(".phoneNo").val()==""){
			alert("请先输入手机号")
		}else{
			$(".yanzheng").blur(function(){
				yanzheng();
			})
		}
	})
	
	/*校验码*/
	$(".btn").click(function(){
		if($(".yanzheng").val()==""){
			alert("请先输入验证码！");
		}else{
			var t = 120; 
			var timer = setInterval(function(){
				$(".btn").val(t+"s后获校验码");
				 if(t==0){
				 	clearInterval(timer);
				 	$(".btn").val("重新获校验码");
				 }
				 t--;
			},1000)		
		}
	}) 
	/*密码*/
	$(".pwd").focus(function(){
		if($(".jiaoyan").val()==""){
			alert("请先输入校验码！");
		}
	})
	$(".pwd").blur(function(){
		mima();
	})
	/*确认密码*/
	$(".cfmpwd").focus(function(){
		if($(".pwd").val()==""){
			alert("请先输入密码！");
		}
	})
	$(".cfmpwd").blur(function(){
		cfmpwd();
	})
	/*注册*/
	$(".agree").click(function(){
		if($("span").css("display")=="none"){
			$(this).attr("href","registersuccess.html");
			console.log(1);
		}else{
			alert("信息填写错误！");
		}
	})
})

function rand(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
 
var shu = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var suiji = "";
for(var i=0;i<6;i++){
	suiji+=shu[rand(0,61)];
}
/*手机号*/
function phoneNo(){
	var str = $(".phoneNo").val();
	var repNo = /^1\d{10}$/;
	if(!repNo.test(str)){
        $(".shjh").css("display","block");
    }else{
    	$(".shjh").css("display","none");
    }
}
/*验证码*/
function yanzheng(){
	var str = $(".yanzheng").val();
	var yzh = $(".yzhm").html();
	if(str!=yzh){
		$(".yzm").css("display","block");
    }else{
    	$(".yzm").css("display","none");
	}
}
 /*密码*/
function mima(){
	var mima = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
	var str = $(".pwd").val();
	if(!mima.test(str)){
		$(".mm").css("display","block");
    }else{
    	$(".mm").css("display","none");
	}
}
/*确认密码*/
function cfmpwd(){
	var pwd = $(".pwd").val();
	var cfmpwd = $(".cfmpwd").val();
	if(pwd!=cfmpwd){
		$(".qrmm").css("display","block");
    }else{
    	$(".qrmm").css("display","none");
	}
}

