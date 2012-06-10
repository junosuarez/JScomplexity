/*global require, window */
require.config({
	shim: {
		'underscore': {
			deps: ['underscore.js'],
			exports: function () {
				return this._.noConflict();
			}
		}
	}
});
require(['underscore'], function (_) {
	console.log(_.VERSION);
});