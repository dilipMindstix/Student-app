app.controller('datePickerCtrl', function($translate, $scope, $rootScope) {
    $scope.showPopup = false;
    $scope.isPopupVisble = function() {
        $scope.showPopup = !$scope.showPopup;
    }



    $scope.myDate = new Date();

    $scope.minDate = new Date(
        $scope.myDate.getFullYear()
        , $scope.myDate.getMonth() - 2
        , $scope.myDate.getDate());

    $scope.maxDate = new Date(
        $scope.myDate.getFullYear()
        , $scope.myDate.getMonth() + 2
        , $scope.myDate.getDate());

    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
});

app.directive("datePicker", function() {
    return {
        restrict: "E"
        , template: "<input type='date'>"
    };
});