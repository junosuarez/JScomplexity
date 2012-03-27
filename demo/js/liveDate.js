/*globals define:true */
define(['jquery', 'prettydate'], function ($, prettydate) {
	var opts = {
			rate: 5000, // milliseconds between updates
			selector: '.time', // css selector for time elements
			dataKey: 'time' // html5 data-attribute key
		},
		timer,
		update = function () {
			var els = $(opts.selector); // select each time to account for new elements

			els.each(function (i, el) {
				var $el = $(el),
					date = $el.data(opts.dataKey),
					formatted = prettydate(date);
				$el.html(formatted);

			});

			timer = setTimeout(update, opts.rate);
		};

	update();
});