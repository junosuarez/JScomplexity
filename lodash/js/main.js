/*global require */
require.config({
	baseUrl: "/js",
    paths: {
        "jquery": "lib/jquery-1.7.2.min",
        "lodash": "lib/lodash.min"
	}
  });
require(['jquery', 'scripts/view'], function ($, view) {
    
    $('body').html(view('world'));

});