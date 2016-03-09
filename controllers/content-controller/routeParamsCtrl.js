app.controller("routeParamsCtrl",function($scope,$routeParams)
{
	$scope.message=$routeParams.message;
});