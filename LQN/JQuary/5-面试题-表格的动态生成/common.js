
function randomColor(){
	var R = Math.round( Math.random()*255 ).toString(16);
	var G = Math.round( Math.random()*255 ).toString(16);
	var B = Math.round( Math.random()*255 ).toString(16);
	return (R.length<2?"0"+R:R) + (G.length<2?"0"+G:G)+ (B.length<2?"0"+B:B);
}
