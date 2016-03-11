var app = angular.module("indexModule", ['ngRoute', 'ngMockE2E', 'pascalprecht.translate']);

app.config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
    $routeProvider.
    when('/', {
            templateUrl: 'view/account-view/Login.html',
            controller: "loginController"
        })
        .
    when('/Login', {
            templateUrl: 'view/account-view/Login.html',
            controller: "loginController"
        })
        .
    when('/Signup', {
        templateUrl: 'view/account-view/Signup.html',
        controller: "signupController"
    });


    $translateProvider.useStaticFilesLoader({
        prefix: 'json/i18n/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
}]);

app.run(function($httpBackend) {
    var user = [{
        name: 'user 1'
    }, {
        name: 'user 2'
    }];

    // returns the current list of phones
    $httpBackend.whenGET('http://localhost:8080/Dilip-projects/10march-StudentApp/#/Signup')
        .respond();
    $httpBackend.whenGET('json/i18n/en.json')
        .passThrough();
    $httpBackend.whenGET('view/account-view/Login.html')
        .passThrough();
    $httpBackend.whenGET('json/loginDetail.json')
        .passThrough();
    $httpBackend.whenGET('view/account-view/Signup.html')
        .passThrough();

});
app.controller("indexCtrl", function($translate, $scope, $rootScope, $routeParams) {
    lang = $routeParams.lang;
    $rootScope.changeLanguage = function(langKey) {
        $translate.use(langKey);
    };
});