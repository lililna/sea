var app = angular.module("myapp",["ngRoute"]);
var datajson=[
	{id:0,"nav":"所有联系人","data":[
		{objid:0,id:00,"img" :"img/1.jpeg","name":"联系人1"},
		{objid:0,id:01,"img":"img/2.jpg","name":"联系人2"}
	]},
	{id:1,"nav":"最近联系人","data":[
		{objid:1,id:10,"img" :"img/3.png","name":"联系人11"},
		{objid:1,id:11,"img":"img/4.jpg","name":"联系人22"}
	]},
	{id:2,"nav":"黑名单","data":[
		{objid:2,id:20,"img" :"img/5.jpg","name":"联系人111"},
		{objid:2,id:21,"img":"img/6.jpg","name":"联系人222"}
	]}
	 
]
var details=[
	{id:00,"img":"img/1.jpeg","tel":"1111111"},
	{id:01,"img":"img/2.jpg","tel":"222222"},
	{id:10,"img":"img/3.png","tel":"3333333"},
	{id:11,"img":"img/4.jpg","tel":"4444444"},
	{id:20,"img":"img/5.jpg","tel":"55555555"},
	{id:21,"img":"img/6.jpg","tel":"66666666"}
]
 
app.controller("myctrl",["$scope","$location","$routeParams","$filter",function($scope,$location,$routeParams,$filter){
	$scope.$location = $location;
	$scope.arr = datajson
	console.log(datajson)
	$scope.n = $scope.arr; 
	
	$scope.search = function(){
		$scope.arr = $filter("filter")($scope.n,$scope.sert)
	}
	
}])
app.controller("allfriends",["$scope","$location","$routeParams",function($scope,$location,$routeParams){
$scope.friend = datajson[$routeParams.id].data
//$scope.$location = $location;
console.log($scope.friend)
 	
}])
app.controller("details",["$scope","$location","$routeParams",function($scope,$location,$routeParams){
	 //$scope.$location=$location
			angular.forEach(details,function(value,key){
				var zt=angular.equals(value.id,Number($routeParams.id))
				if(zt){
					console.log(value)
					$scope.details=value
				}
			})
}])
app.config(["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/view/:id",{
			templateUrl:"html/allfriends.html",
			controller:"allfriends"
		})
		.when("/view/:id/:id",{
			templateUrl:"html/details.html",
			controller:"details"
		})
		.otherwise({
			redirectTo:"/view/0"
		})
}])
