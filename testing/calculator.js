/*global define: true */

define(function () {

	var exports = {
		do: function (op1, op2, operator) {
			switch(operator){
				case '+':
					return op1 + op2;
				break;
				case '-':
					return op1 - op2;
				break;
			}
			throw 'invalid operator';
		}
	};

	return exports;

});