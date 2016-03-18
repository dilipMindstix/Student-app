(function() {
    'use strict';

    describe('Custom filter controller', function() {

        var $filter;
        beforeEach(function() {
            module('homeModule');
        });

        beforeEach(inject(function(_$filter_) {
            $filter = _$filter_;
        }));

        it('Returns string in upprcase', function() {
            var UpperCase = $filter('UpperCase')('hello');
            expect(UpperCase).toEqual("HELLO");
        });

        it('Returns string in upprcase', function() {
            var UpperCase = $filter('UpperCase')("heLLo");
            expect(UpperCase).toEqual("HELLO");
        });

        it('Returns string in upprcase', function() {
            var UpperCase = $filter('UpperCase')("HELLO");
            expect(UpperCase).toEqual("HELLO");
        });
        
        it('Returns string in lowercase', function() {
            var LowerCase = $filter('LowerCase')("HELLO");
            expect(LowerCase).toEqual("hello");
        });

        it('Returns string in lowercase', function() {
            var LowerCase = $filter('LowerCase')("HELLO");
            expect(LowerCase).toEqual("hello");
        });

        it('Returns string in lowercase', function() {
            var LowerCase = $filter('LowerCase')("HELLO");
            expect(LowerCase).toEqual("hello");
        });
    
    });

})();
