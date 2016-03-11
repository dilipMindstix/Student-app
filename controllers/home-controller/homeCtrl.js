var app = angular.module("homeModule", ['ngRoute', 'pascalprecht.translate']);

app.config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider)
    {
        $routeProvider.
        when('/', {
                templateUrl: 'view/content-view/Student data.html'
                , controller: "studentController"
            })
            .
        when('/Student data/', {
                templateUrl: 'view/content-view/Student data.html'
                , controller: "studentController"
            })
            .
        when('/Localization Ex', {
                templateUrl: 'view/content-view/Localization.html'
                , controller: "localizationController"
            })
            .
        when('/Datepicker Ex', {
                templateUrl: 'view/content-view/Date picker.html'
                , controller: "datePickerCtrl"
            })
            .
        when('/Custom filter Ex', {
                templateUrl: 'view/content-view/Custom filter.html'
                , controller: "customFilterCtrl"
            })
            .
        when('/Route params Ex/:message', {
            templateUrl: 'view/content-view/Route params.html'
            , controller: "routeParamsCtrl"
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'json/i18n/'
            , suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
}]);

app.controller("homeCtrl", function($translate, $scope, $rootScope, $routeParams) {
    $rootScope.changeLanguage = function(langKey) {
        $translate.use(langKey);
    };
});