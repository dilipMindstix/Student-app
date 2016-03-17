app.controller('loginController', function($scope, $window, DataService) {
    $scope.checked = false;
    $scope.status = false; //status for whether the use exist or not, ture or false.
   
    $scope.users = [];
    $scope.userId = "dilip123";
    $scope.password = "123456789";
    $scope.user = {};
    $scope.message = null;

    $scope.getUsers = function() 
    {
      DataService.getUsers().then(function(data) 
      {
        $scope.users = data;
        $scope.loading = false;
      })
    }

    $scope.getUser = function(id, password) 
    {
      // check required input
      if ($scope.form.uid.$error.required) 
      {
        $scope.message = "User id required!";
        return;
      }

      if ($scope.form.password.$error.required) 
      {
        $scope.message = "Password required!";
        return;
      }

      DataService.getUser(id, password).then(function(data) 
      {   
          if (typeof data === "string") 
          {
            // in case user not found
            $scope.status = false;
            $scope.checked = true;
            $scope.message = data;
            $scope.users = null;
          } 
          else 
          {
            //in case user found
            $scope.status = true;
            $scope.checked = false;
            $scope.message = null;
            $window.location.href = 'Home.html';
          }
      })
    }

});