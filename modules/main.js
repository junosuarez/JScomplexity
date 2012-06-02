/*global require */
require.config({
    paths: {
        'jquery': 'lib/jquery-1.7.2.min'
	}
});
require(['jquery', 'sugarwater'], function ($, ohhYeahh) {

	$('button').on('click', ohhYeahh);

});