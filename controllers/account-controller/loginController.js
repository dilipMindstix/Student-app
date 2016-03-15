app.controller('loginController', function($scope,DataService) {
    $scope.checked = false;
    $scope.status = false; //status for whether the use exist or not, ture or false.
   
    $scope.users = [];
    $scope.userId = null;
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

    $scope.getUser = function(id) 
    {
      // check required input
      if ($scope.form.uid.$error.required) 
      {
        $scope.message = "Please add user's id";
        return;
      }

      DataService.getUser(id).then(function(data) 
      {   
          if (typeof data === "string") 
          {
              // iin case user not found
              $scope.status = false;
              $scope.checked = true;
              $scope.message = data;
              $scope.users = null;
          } 
          else 
          {
            //in case user found
            $scope.status=true;
            $scope.checked = false;
            $scope.users = [data];
            $scope.message=null;
            console.log(data);
            console.log([data]);
          }
      })
    }

});