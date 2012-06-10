/*global  */
require.config({
    paths: {
        "jquery": "lib/jquery-1.7.2.min",
        "lodash": "lib/lodash.min"
	}
  });
require(['SomeCooltingsThatDoesSoemthingcalcTax','ui'], function (calcTax, ui) {

	calcTax.configure({
		rates:{
			'OR':0,
			'WA':0.095,
			'ID':0.06,
			'UT':0.07
		}
	});

	ui.init(function () {


		require(['anothermodule', 'someRarelyusedStuff', 'boringLegalDislaimer'])



	});



	console.log('running main...');
});