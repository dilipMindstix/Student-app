var app=angular.module("indexModule",['ngRoute','pascalprecht.translate']);

app.config(['$routeProvider','$translateProvider', function($routeProvider,$translateProvider) 
{
	$routeProvider.
		when('/', {
		   templateUrl: 'view/account-view/Login.html',
		   controller: "loginController"
		}).
		when('/Login', {
		   templateUrl: 'view/account-view/Login.html',
		   controller: "loginController"
		}).
		when('/Signup', {
		   templateUrl: 'view/account-view/Signup.html',
		   controller: "signupController"
		});
		

	$translateProvider.useStaticFilesLoader(
	{   
		prefix: 'json/i18n/',             
		suffix: '.json'                        
	});   
	$translateProvider.preferredLanguage('en');
}]);

app.controller("indexCtrl",function($translate, $scope,$rootScope,$routeParams)
{
	lang=$routeParams.lang;
	$rootScope.changeLanguage = function (langKey) 
	{
		$translate.use(langKey);
	};
});