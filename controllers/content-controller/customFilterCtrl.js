app.controller("customFilterCtrl", function($scope) {
    $scope.textStr = "";
});

app.filter('UpperCase', function() {
    return function(str) {
        return String(str).toUpperCase();
    }
});

app.filter('LowerCase', function() {
    return function(str) {
        return String(str).toLowerCase();
    }
});