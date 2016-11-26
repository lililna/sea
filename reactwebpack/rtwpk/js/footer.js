var Home = require("./home.js")
var List = require("./list.js")
var My = require("./my.js")
var Footer = React.createClass({
	route:function(event){
		var _val = event.target.getAttribute("title")
		console.log(_val)
		switch(_val){
			case "home":
				ReactDOM.unmountComponentAtNode(document.getElementById("myct"))
				ReactDOM.render(<Home/>,document.getElementById("myct"))
			break;
			case "list":
				ReactDOM.unmountComponentAtNode(document.getElementById("myct"))
				ReactDOM.render(<List/>,document.getElementById("myct"))
			break;
			case "my":
				ReactDOM.unmountComponentAtNode(document.getElementById("myct"))
				ReactDOM.render(<My/>,document.getElementById("myct"))
			break;
		}
	},
	render:function(){
		return(
			<div>
				<ul>
					<li title="home" onClick={this.route}>首页</li>
					<li title="list" onClick={this.route}>列表</li>
					<li title="my" onClick={this.route}>我的</li>
				</ul>
			</div>
		)
	}	 
})
module.exports = Footer