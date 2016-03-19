var app = angular.module("homeModule", ['ngRoute', 'ngMockE2E', 'pascalprecht.translate']);

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
        }).

        when('/Route params Ex', {
            templateUrl: 'view/content-view/Route params.html',
            controller: "routeParamsCtrl"
        }).
        when('/Route params Ex/:message', {
            templateUrl: 'view/content-view/Route params.html',
            controller: "routeParamsCtrl"
        }).

        when( '/Image related Ex', {
            templateUrl: "view/content-view/Image Related.html",
            controller: "imageRelatedCtrl"
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'json/i18n/'
            , suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
}]);

app.controller("homeCtrl", function($translate, $scope, $rootScope, $routeParams) {
    $rootScope.changeLanguage = function(langKey) {
        $translate.use(langKey);
    };
});

// Reg. expression for /Login/:id
var regexPageNum = /^\/page\/([0-9a-zA-Z]+)$/;
app.run(function($httpBackend, $rootScope) 
{
    $httpBackend.whenGET(/\.json/).passThrough();
    $httpBackend.whenGET(/\.html/).passThrough();
  
  // GET /page/:id
  $httpBackend.whenGET(regexPageNum).respond(function(method, url) 
  {
    var page = url.match(regexPageNum)[1];
    console.log($rootScope.rpp);
    console.log(url);
    console.log(regexPageNum);
    console.log(page);
    return [200, page];
  });
});