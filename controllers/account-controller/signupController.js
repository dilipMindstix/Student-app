app.controller("signupController", function($scope) {
    $scope.errMsg = null;
    $scope.uid = null;
    $scope.pass1 = null;
    $scope.pass2 = null;
    $scope.fullName = null;
    $scope.address = null;

    $scope.lengthRegex=/^[a-zA-Z]{6,}$/;
});