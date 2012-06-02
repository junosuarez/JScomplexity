define(function () {
	return function (type) {
		var collection = [],
			constructor = (function() {
			    function T(arguments) {
			        return type.apply(this, arguments);
			    }
			    T.prototype = type.prototype;

			    return function(arguments) {
			        return new T(arguments);
			    }
			}());

		collection.add = function () {
			var instance = constructor(arguments);
			collection.push(instance);
		};
		return collection;
	}
});