/*global define */
define(['jquery'], function ($) {
	return function () {
		$('<div><img src="refreshing.jpg" width="640" height="480">' +
			'<p>CC 2.0 BY-NC-ND &copy; <a href="http://www.flickr.com/photos/mikeharper/2442894/">mikeharper</a></p></div>')
			.appendTo('body');
	};
});