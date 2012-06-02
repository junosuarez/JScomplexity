/*global require */
require.config({
    paths: {
        "jquery": "lib/jquery-1.7.2.min"
	}
  });
require(['a'], function () {
	console.log('running main...');
});