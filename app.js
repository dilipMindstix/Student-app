var app = angular.module("indexModule", ['ngRoute',  'pascalprecht.translate', "ngMockE2E"]);

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
    $translateProvider.useSanitizeValueStrategy(null);
}]);

app.controller("indexCtrl", function($translate, $scope, $rootScope, $routeParams) 
{
    lang = $routeParams.lang;
    $rootScope.changeLanguage = function(langKey) 
    {
        $translate.use(langKey);
    };
});


var users = [
  {id: "dilip123", name: 'Dilip kumar'},
  {id: "sunil123", name: 'Sunil kumar'},
  {id: "mukesh123", name: 'Mukesh kumar'},
  {id: "suresh123", name: 'Suresh kumar'}
];

// Reg. expression for /user/:id
var regexUserId = /^\/Login\/([0-9a-zA-Z]+)$/;

app.run(function($httpBackend) 
{
    $httpBackend.whenGET(/\.json/).passThrough();
    $httpBackend.whenGET(/\.html/).passThrough();
  // GET /Login
  $httpBackend.whenGET('/Login').respond(users);
  // GET /user/:id
  $httpBackend.whenGET(regexUserId).respond(function(method, url) 
  {
    var id = url.match(regexUserId)[1];
    console.log(url);
    console.log(regexUserId);
    console.log(url.match(regexUserId)[1]);
    console.log(url.match(regexUserId)[2]);

    var foundUser = findUser(id);
    return foundUser ? [200, foundUser] : [404, 'User not found'];
  });

  
  // helper function to find a User by id
  function findUser(id) 
  {
    var foundUser = null;
    for (var i = 0; i < users.length; i++) 
    {
      var user = users[i];
      if (user.id == id) {
      foundUser = user;
      break;
    }
  }
  return foundUser;
  }
});


