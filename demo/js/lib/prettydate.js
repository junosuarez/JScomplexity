/*global define:true */
define([], function () {
	var toISODateString = function (d) {
		var pad = function (n) {return n < 10 ? '0' + n : n; };
		return d.getUTCFullYear() + '-'
		    + pad(d.getUTCMonth() + 1) + '-'
		    + pad(d.getUTCDate()) + 'T'
		    + pad(d.getUTCHours()) + ':'
		    + pad(d.getUTCMinutes()) + ':'
		    + pad(d.getUTCSeconds()) + 'Z';
	},
		ret = function (date_str) {
			if (date_str.indexOf('GMT') > -1) {
				date_str = toISODateString(date_str);
			}

			var time_formats = [
					[60, 'seconds', 1], // 60
					[120, '1 minute ago', '1 minute from now'], // 60*2
					[3600, 'minutes', 60], // 60*60, 60
					[7200, '1 hour ago', '1 hour from now'], // 60*60*2
					[86400, 'hours', 3600], // 60*60*24, 60*60
					[172800, 'yesterday', 'tomorrow'], // 60*60*24*2
					[604800, 'days', 86400], // 60*60*24*7, 60*60*24
					[1209600, 'last week', 'next week'], // 60*60*24*7*4*2
					[2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
					[4838400, 'last month', 'next month'], // 60*60*24*7*4*2
					[29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
					[58060800, 'last year', 'next year'], // 60*60*24*7*4*12*2
					[2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
					[5806080000, 'last century', 'next century'], // 60*60*24*7*4*12*100*2
					[58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
				],
				time = (date_str).replace(/-/g, "/").replace(/[TZ]/g, " ").replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
				seconds,
				i = 0,
				format,
				token = 'ago',
				list_choice = 1;

			if (time.substr(time.length - 4, 1) === ".") { time = time.substr(0, time.length - 4); }
			seconds = (new Date() - new Date(time)) / 1000;
			if (seconds < 0) {
				seconds = Math.abs(seconds);
				token = 'from now';
				list_choice = 2;
			}
			while (i < time_formats.length) {
				format = time_formats[i];
				if (seconds < format[0]) {
					if (typeof format[2] === 'string') {
						return format[list_choice];
					}
					return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
				}
				i = i + 1;
			}
			return time;
		};

	return ret;
});