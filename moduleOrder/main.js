/*global require */
require.config({
    paths: {
        "jquery": "lib/jquery-1.7.2.min",
        "underscore": "lib/lodash.min"
	}

	
});

require(['a'], function () {
	console.log('running main...');

	setTimeout(function(){

		require(['c'], function(c){
			console.log('my secondary functionality is ready!');
		});

	}, 5000)


});