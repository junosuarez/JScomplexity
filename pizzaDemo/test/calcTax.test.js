/*global describe, require, it */
var root = 'c:/dev/jscomplexity/pizzaDemo'
var requirejs = require('requirejs');
requirejs.config({
    paths: {
        'jquery': root + '/lib/jquery-1.7.2.min',
        'lodash': root + '/lib/lodash.min'
	}
  });

describe('calcTax', function () {

	var calc = requirejs(root + '/calcTax.js');


	describe('configure', function () {
		it('can be setup with state tax rates', function () {
			calc.configure({
				rates: {
					'MT':0,
					'CA':.095
				}
			});

			// should not throw an exception

		});

		it('should return the amount of tax based on a subtotal and a rate', function () {
			calc.configure({
				rates: {
					'MyRate':.5,
				}
			});

			var tax = calc(10, 'MyRate');

			tax.should.equal(5);
		});
	});

2
});