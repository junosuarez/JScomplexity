define(['lodash'], function (_) {
	var config = {
		rates: {}
	},
	calcTax = function (subTotal, region) {
		if (typeof config.rates[region] === 'number'){
			return subTotal * config.rates[region];
		} else {
			return 0;
		}
	};

	calcTax.configure = function (opts) {
		_.extend(config, opts);
	}

	return calcTax;
});