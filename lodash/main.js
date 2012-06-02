/*global require */
require.config({
	baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery-1.7.2.min',
        'lodash': 'lib/lodash.min',
        'text': 'lib/require.text'
	}
  });
require(['view'], function (view) {
    
    var viewModel = {
    		name:'world', 
    		message: 'I\'m an AMD module, not a chip maker!'
    	},
    	$body = document.getElementsByTagName('body')[0];

    $body.innerHTML = view(viewModel);

});