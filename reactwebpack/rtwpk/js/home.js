var HomeChild = require("./homechild.js")
var Home = React.createClass({
	getInitialState:function(){
		return{
			datajson:""
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({
			url:"https://api.douban.com/v2/movie/search?",
			dataType:"jsonp",
			data:{
				q:"冯小刚"
			},
			success:function(data){
				console.log(data)
				_this.setState({
					datajson:data.subjects	
				})
//				new IScroll("#myct")
				new IScroll("#context")
				console.log(1)
			}
		})
	},
	render:function(){ 
		console.log(this.state.datajson)
		var _this = this;
		var ss = this.state.datajson;
		var arr = [];
		console.log(ss)
		if(ss){
			 for(var i=0;i<ss.length;i++){
				arr.push(<HomeChild movie={ss[i]}/>)
			 }
		}
		return(
			<div>
				<p>home</p>
 				<div>{arr}</div>
			</div>
		)
	} 
})
module.exports=Home