var HomeChild = React.createClass({
	render:function(){ 
		return(
			<div>
				<img src={this.props.movie.images.medium}/> 
				<p>{this.props.movie.title}</p>
			</div>
		)
	} 
})
module.exports = HomeChild