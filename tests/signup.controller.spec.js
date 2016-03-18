(function() {
    'use strict';

    describe('2. Signup Controller:-->', function() {
        var $rootScope, $scope, $controller, ctrl;

        beforeEach(function() {
            module('indexModule');
        });

        beforeEach(inject(function(_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_ ;
            $controller = _$controller_ ;
        }));

        beforeEach(inject(function(){
            $scope = $rootScope.$new();
            ctrl = $controller('signupController', {
                '$scope' : $scope,
                '$rootScope' : $rootScope
            });
        }));

        describe('Initialy all field should be empty :-->', function() {
            it('i.e. $scope.uid = "" ', function() {
                 expect($scope.uid).toBe("");
            });

            it('i.e. $scope.pass1 = "" ', function() {
                expect($scope.pass1).toBe("");
            });

            it('i.e. $scope.pass2 = "" ', function() {
                expect($scope.pass2).toBe("");
            });

            it('i.e. $scope.fullName = "" ', function() {
                expect($scope.fullName).toBe("");
            });

            it('i.e. $scope.address = "" ', function() {
                expect($scope.address).toBe("");
            });
        });

                
    });
})();