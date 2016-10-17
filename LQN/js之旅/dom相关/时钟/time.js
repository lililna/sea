// function:创建函数 
// showtime(){}:函数名称 自定义
// showtime();执行函数
function showtime(){
var times = document.getElementById('times');
// var:变量声明
// times:变量名，自定义的
// 通过 Id名称获取标签

 var dates = document.getElementById('dates');


var now = new Date();
// Date():日期
 var year = now.getFullYear();
// alert(year)
 var month = now.getMonth()+ 1;
// alert(month)
 var date = now.getDate();
// alert(date)
 var week = now.getDay();
//  alert(week)
switch(week){
    case 1:
    week = '星期一';
    break;
    case 2:
    week = '星期二';
    break;
    case 3:
    week = '星期三';
    break;
    case 4:
    week = '星期四';
    break;
    case 5:
    week = '星期五';
    break;
    case 6:
    week = '星期六';
    break;
    case 0:
    week = '星期日';
    break;


}
// alert(week)

dates.innerHTML = year + "年" + month + "月" + date +"日" +  " " + week;
// 标签内部的内容
var hour = now.getHours();
// alert(hour)
var minute = now.getMinutes();
var second = now.getSeconds();

hour = hour < 10 ? "0" + hour : hour;
// 类似于:
   if(hour<10){
      hour = "0" + hour;
   }else{
   hour = hour;
   }

   minute = minute < 10 ? "0" + minute : minute;
   second = second < 10 ? "0" + second : second;
times.innerHTML = hour + ":" + minute + ":" +second;


}
showtime();

setInterval(showtime,1000);
// 循环的方法，暂停1000ms后，执行showtime 函数。

