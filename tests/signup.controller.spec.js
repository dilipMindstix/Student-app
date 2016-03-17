(function() {
    'use strict';

    describe('2. Signup Controller:-->', function() {
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
            ctrl = $controller('signupController', {
                '$scope': scope,
                '$rootScope': rootScope
            });
        }));

        describe('Tests, if the fields cotains null value:-->', function() {
            it('Tests, if scope.uid = null ', function() {
                 expect(scope.uid).not.toBe(null);
            });

            it('Tests, if scope.pass1 = null ', function() {
                expect(scope.pass1).not.toBe(null);
            });

            it('Tests, if scope.pass2 = null ', function() {
                expect(scope.pass2).not.toBe(null);
            });

            it('Tests, if scope.fullName = null ', function() {
                expect(scope.fullName).not.toBe(null);
            });

            it('Tests, if scope.address = null ', function() {
                expect(scope.address).not.toBe(null);
            });
        });
    });
})();