/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var List = __webpack_require__(1)
	var Header = __webpack_require__(2)
	var Context = __webpack_require__(3)
	var Footer = __webpack_require__(4)
	var Nannv = React.createClass({displayName: "Nannv",
		render:function(){
			return( 
				React.createElement("div", null, 
					React.createElement(List, null), 
					React.createElement("p", null, "qqqqqqq")
				)
			)
		}
	})
	var All = React.createClass({displayName: "All",
		render:function(){	 
			return(
				React.createElement("div", {id: "wrapper"}, 
					 React.createElement("div", {id: "header"}, React.createElement(Header, null)), 
					 React.createElement("div", {id: "context"}, React.createElement(Context, null)), 
					 React.createElement("div", {id: "footer"}, React.createElement(Footer, null))
				)
			)
		} 
	})
	ReactDOM.render(React.createElement(All, null),document.getElementById("wrap"))


/***/ },
/* 1 */
/***/ function(module, exports) {

	var List = React.createClass({displayName: "List",
		render:function(){ 
			return(
				React.createElement("div", null, 
					React.createElement("p", null, "list")
				)
			)
		}
	})
	module.exports = List


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Header = React.createClass({displayName: "Header", 
		render:function(){ 
			return(
				React.createElement("div", null, 
					React.createElement("h1", null, "电影频道")
				)
			)
		} 
	})
	module.exports=Header

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Context = React.createClass({displayName: "Context",
		render:function(){ 
			return(
				React.createElement("div", {id: "myct"}
					
				)
			)
		} 
	})
	module.exports=Context

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Home = __webpack_require__(5)
	var List = __webpack_require__(1)
	var My = __webpack_require__(7)
	var Footer = React.createClass({displayName: "Footer",
		route:function(event){
			var _val = event.target.getAttribute("title")
			console.log(_val)
			switch(_val){
				case "home":
					ReactDOM.unmountComponentAtNode(document.getElementById("myct"))
					ReactDOM.render(React.createElement(Home, null),document.getElementById("myct"))
				break;
				case "list":
					ReactDOM.unmountComponentAtNode(document.getElementById("myct"))
					ReactDOM.render(React.createElement(List, null),document.getElementById("myct"))
				break;
				case "my":
					ReactDOM.unmountComponentAtNode(document.getElementById("myct"))
					ReactDOM.render(React.createElement(My, null),document.getElementById("myct"))
				break;
			}
		},
		render:function(){
			return(
				React.createElement("div", null, 
					React.createElement("ul", null, 
						React.createElement("li", {title: "home", onClick: this.route}, "首页"), 
						React.createElement("li", {title: "list", onClick: this.route}, "列表"), 
						React.createElement("li", {title: "my", onClick: this.route}, "我的")
					)
				)
			)
		}	 
	})
	module.exports = Footer

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var HomeChild = __webpack_require__(6)
	var Home = React.createClass({displayName: "Home",
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
					arr.push(React.createElement(HomeChild, {movie: ss[i]}))
				 }
			}
			return(
				React.createElement("div", null, 
					React.createElement("p", null, "home"), 
	 				React.createElement("div", null, arr)
				)
			)
		} 
	})
	module.exports=Home

/***/ },
/* 6 */
/***/ function(module, exports) {

	var HomeChild = React.createClass({displayName: "HomeChild",
		render:function(){ 
			return(
				React.createElement("div", null, 
					React.createElement("img", {src: this.props.movie.images.medium}), 
					React.createElement("p", null, this.props.movie.title)
				)
			)
		} 
	})
	module.exports = HomeChild

/***/ },
/* 7 */
/***/ function(module, exports) {

	var My = React.createClass({displayName: "My",
		render:function(){
			return( 
				React.createElement("div", null, 	
					React.createElement("p", null, "My")
				)
			)
		}
	})
	module.exports = My


/***/ }
/******/ ]);