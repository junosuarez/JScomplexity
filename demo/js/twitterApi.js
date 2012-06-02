/*globals define, escape */
define(['jquery'], function ($) {
	var endpoint = 'http://search.twitter.com/search.json',
		newSearch = function (search, maxTweets, callback) {
			var uri = endpoint + '?&rpp=' + maxTweets + '&include_entities=true&result_type=recent&q=' + escape(search);
			return $.ajax({
					url: uri,
					success: callback,
					dataType: 'jsonp'
				});
		},
		refreshSearch = function (refreshUrl, callback) {
			return $.ajax({
					url: endpoint + refreshUrl,
					success: callback,
					dataType: 'jsonp'
				});
		};

	return {
		newSearch: newSearch,
		refreshSearch: refreshSearch
	};

});