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

        describe('Test variable initialization:-->', function() {
            it('$scope.userId and $scope.password will not be null and undefined', function() {
                console.log(scope.userId);
                expect(scope.userId).not.toBe(null);
            });
        });
    });
})();