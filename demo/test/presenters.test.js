/*global describe, require, it, window:true */
var root = 'c:/dev/jscomplexity/demo/js/',
	amd = require('requirejs').config({
		paths: {
			'underscore': root + 'lib/underscore'
		}
	});

var presenters = amd(root + 'presenters.js');



describe('presenters', function () {
	console.log(root)
	console.log(presenters)
	it('should return true when the twitter username belongs to a presenter', function () {

		var result = presenters('leJDen');

		result.should.equal(true);

	});

});