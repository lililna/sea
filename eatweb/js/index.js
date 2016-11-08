var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // �����Ҫ��ҳ��
    pagination: '.swiper-pagination',
    paginationClickable :true,
    autoplay: 3000,
})
function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
$.ajax({
    type:"get",
    url:"json/package.json",
    dataType:"json",
    success:function(msg){
        var goodsSorts = $("div.type").length;
        for(var j = 0;j < goodsSorts;j++){
            for(var i in msg){
                if(msg[i].goodstype == $("div.type").eq(j).find("p").html()){
                    var str = $("div.goods").eq(j).html();
                    str += '<a href="html/details.html?id='+msg[i].id+'"><dl><dt><img src="'+msg[i].src+'" alt=""/></dt><dd><p class="descri">'+msg[i].name+'</p><p class="money">'+msg[i].price+'<span>'+msg[i].delprice+'</span></p></dd></dl></a>'
                    $("div.goods").eq(j).html(str);
                }
            }
        }
    }
})
$("input.btn").click(function () {
    var str = $(this).prev().val();
    if(str) {
        window.location.href = "html/splist.html?keyword=" + str;
    }
})
