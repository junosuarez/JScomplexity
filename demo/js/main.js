/*globals define, require, document */
require.config({
    paths: {
		'underscore': 'lib/underscore',
		'text': 'lib/text',
		'templates': '../templates',
		'prettydate': 'lib/prettydate'
    }
});

require([
	'jquery',
	'twitterSearcher',
	'tweetTemplate',
	'liveDate'
],
	function ($, Searcher, template) {
		"use strict";

			// cache jQuery selectors
		var el = {
				tweets: $('#tweets')
			},
			// create new Searcher
			// This will poll the Twitter API for a given search term on a regular interval
			// and emit a 'newTweet' jQuery event when a new tweet occurs
			search = new Searcher('#pdxcodecamp');

		// register event listener
		$(document).on('newTweet', function (e, data) {
			var tweet = template.apply(data.latest);
			el.tweets.prepend(tweet).hide().fadeIn();
		});

		// begin searching
		search.start();
	});