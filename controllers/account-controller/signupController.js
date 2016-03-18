app.controller("signupController", function($scope, $window) {
    var form = this;
    $scope.errMsg = "";
    $scope.uid = "";
    $scope.pass1 = "";
    $scope.pass2 = "";
    $scope.fullName = "";
    $scope.address = "";

    $scope.validate = function() {
      if( form.form1.$invalid || $scope.pass1 != $scope.pass2) {
        $window.alert('Please enter valid information !');
      }
      else {
        $window.alert("Thank you !")
      }
    }
});

app.directive('username', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

      ctrl.$asyncValidators.username = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return $q.when();
        }

        var def = $q.defer();

        $timeout(function() {
          // Mock a delayed response
          if (usernames.indexOf(modelValue) === -1) {
            // The username is available
            def.resolve();
          } else {
            def.reject();
          }

        }, 2000);

        return def.promise;
      };
    }
  };
});