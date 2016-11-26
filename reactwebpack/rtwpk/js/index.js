var List = require("./list.js")
var Header = require("./header.js")
var Context = require("./context.js")
var Footer = require("./footer.js")
var All = React.createClass({
	render:function(){	 
		return(
			<div id="wrapper">
				 <div id="header"><Header/></div>
				 <div id="context"><Context/></div>
				 <div id="footer"><Footer/></div>
			</div>
		)
	} 
})
ReactDOM.render(<All/>,document.getElementById("wrap"))
