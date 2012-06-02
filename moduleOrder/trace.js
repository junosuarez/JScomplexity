define(function () {
	var val = "initial trace val";
	console.log("defining trace module: ", val);

	return function (traceVal) {

		console.log("oldVal: ", val);
		val = traceVal;
		console.log("newVal: ", val);
	}

});