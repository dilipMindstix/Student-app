(function() {
    'use strict';

    describe('1. Login Controller:-->', function() {
        var rootScope, scope, $controller, ctrl;

        beforeEach(function() {
            module('indexModule');
        });

        beforeEach(inject(function(_$rootScope_, _$controller_) {
            rootScope = _$rootScope_;
            $controller = _$controller_;
        }));

        beforeEach(inject(function() {
            scope = rootScope.$new();
            ctrl = $controller('loginController', {
                '$scope': scope,
                '$rootScope': rootScope
            });
        }));

        describe('Initialy field should not be null:-->', function() {
            it(' i.e. $scope.userId != null ', function() {
                expect(scope.userId).not.toBe(null);
            });

            it('i.e. $scope.password != null', function() {
                expect(scope.password).not.toBe(null);
            });
        });
    });
})();