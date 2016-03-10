app.controller('loginController', function($scope, $http,$timeout,$window,authenticateLogin) 
{
	$scope.checked=false;
	$scope.status=false; //status for whether the use exist or not, ture or false.
	$scope.userId="dilip123";
	$scope.password="123456";
	$scope.login=function(uid,pass)
	{
		authenticateLogin.isExist(uid,pass, function(exist,index) 
		{
			$scope.status= exist;
			$scope.checked=true;

			if(exist==true)
			{
				console.log("Authorized!");
				$window.location.href = 'Home.html';
				//console.log(index);
			}
			else
			{
				console.log("Unauthorized!")
			}
		});
	}
	
	$http.get("json/loginDetail.json").then(function(response)
	{
		$scope.loginData= response.data;
	});
});
