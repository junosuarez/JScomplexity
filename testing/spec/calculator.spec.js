/*global describe:true, require:true, it:true, expect: true */

describe('calculator', function () {
	var calc = require('c:/dev/jstalk/testing/calculator.js');

	it('takes two numbers and an operator in RPN', function () {
		var result = calc.do(2, 2, '+');
		expect(result).toEqual(4);
	});

	describe('operators', function () {

		it('supports plus', function () {
			var result1 = calc.do(2, 5, '+'),
				result2 = calc.do(4, 9, '+');

			expect(result1).toEqual(7);
			expect(result2).toEqual(13);
		});

		it('supports minus', function () {
			var result1 = calc.do(10, 3, '-'),
				result2 = calc.do(2, 5, '-');

			expect(result1).toEqual(7);
			expect(result2).toEqual(-3);
		});

		it('throws an error for unsupported operators', function () {
			var exceptionThrown = false;
			try{
				calc.do(1, 2, 'blah');
			}catch(e){
				exceptionThrown = true;
				expect(e).toEqual('invalid operator');
			}
			expect(exceptionThrown).toEqual(true);
		});
	});

});