/*global require */
require.config({
    paths: {
        "jquery": "lib/jquery-1.7.2.min",
        "lodash": "lib/lodash.min"
	}
  });
require(['menu','calcTax','ui'], function (menu, calcTax, ui) {

	calcTax.configure({
		rates:{
			'OR':0,
			'WA':0.095,
			'ID':0.06,
			'UT':0.07
		}
	});

	ui.init();



	console.log('running main...');
});