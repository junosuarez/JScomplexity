/*jslint plusplus:true */
/*global define */
define(function () {
	var Watchable =  function (init) {
		var o = init,
			callbacks = [],
			get = function () {
				return o;
			},
			updated = function () {
				var i;
				for (i = 0; i < callbacks.length; i++) {
					console.log(o, i);
					callbacks[i](o);
				}
			},
			set = function (val) {
				if (o !== val) {
					o = val;
					updated();
				}
			},
			watch = function (callback) {
				callbacks.push(callback);
			};

		return {
			get: get,
			set: set,
			watch: watch
		};
	};

	return Watchable;

});