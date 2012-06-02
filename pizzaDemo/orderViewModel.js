/*global define */
define(['watchable', 'calcTax'], function (Watchable, calcTax) {
	var order = {
			name: new Watchable(''),
			phone: new Watchable(''),
			state: new Watchable('WA'),
			subtotal: new Watchable(0),
			tax: new Watchable(0),
			tip: new Watchable(0),
			total: new Watchable(0),
			valid: new Watchable(false),
			validMsg: new Watchable('')
		},

		updateTotal = function () {
			var total = order.subtotal.get() + order.tax.get() + order.tip.get();

			order.total.set(total);
		},
		updateTax = function () {
			var tax = calcTax(order.subtotal.get(), order.state.get());
			order.tax.set(tax);
		};

	order.state.watch(updateTax);
	order.subtotal.watch(updateTax);

	order.subtotal.watch(updateTotal);
	order.tax.watch(updateTotal);
	order.tip.watch(updateTotal);

	return order;
});