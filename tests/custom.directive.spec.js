(function() {
    'use strict';

    describe('Custom directive', function() {

        var $directive;
        beforeEach(function() {
            module('homeModule');
        });

        beforeEach(inject(function(_$directive) {
            $directive = _$directive;
        }));
    });
})();

