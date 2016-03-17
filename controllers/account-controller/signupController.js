app.controller("signupController", function($scope) {
    $scope.errMsg = null;
    $scope.uid = null;
    $scope.pass1 = null;
    $scope.pass2 = null;
    $scope.fullName = null;
    $scope.address = null;

    $scope.grade = function() {
    var size = $scope.pass1.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
});