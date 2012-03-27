/*globals define:true, document:true */
require.config({
    paths: {
        'underscore': 'lib/underscore',
        'text' : 'lib/text',
        'templates': '../templates',
        'prettydate': 'lib/prettydate'
    }
});

require(['jquery', 'twitterSearcher', 'tweetTemplate','liveDate'], function ($, searcher, template) {
		// cache jQuery selectors
	var el = {
			tweets: $('#tweets')
		},
		// set up custom events using jQuery's event engine
		events = {
			newTweet: $.Event('newTweet')
		},
		// create new search using the searcher
		search = searcher('#bcc12', events.newTweet);

	// register event listener
	$(document).on(events.newTweet.type, function (data) {
		var tweet = template.apply(data.latest);
		el.tweets.prepend(tweet).hide().fadeIn();
	});

	// begin searching
	search.start();


});