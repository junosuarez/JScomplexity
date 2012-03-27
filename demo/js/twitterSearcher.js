/*jslint plusplus:true */
/*globals define:true, escape:true, document:true */
define(['jquery'], function ($) {
	var opts = {
			maxTweets: 50, // max tweets to request at a time
			rate: 30000, // number of miliseconds between API calls.
			twitterApi: 'http://search.twitter.com/search.json'
		},
		twitterSearch = function (search) {
			return opts.twitterApi + '?&rpp=' + opts.maxTweets + '&include_entities=true&result_type=recent' + '&q=' + escape(search);
		},
		/* @constructor - implements an observable collection */
		TweetCollection = function () {
			var tweets = [],
				ids = [],
				watchers = [],
				watch = function (callback) {
					watchers.push(callback);
				},
				notifyWatchers = function (latest) {
					var i = 0,
						len = watchers.length;
					for (i; i < len; i++) {
						watchers[i](tweets, latest);
					}
				},
				id = function (tweet) {
					return tweet.id_str;
				},
				contains = function (tweet) {
					return ids.indexOf(id(tweet)) > -1;
				},
				add = function (tweet) {
					if (!contains(tweet)) {
						tweets.push(tweet);
						ids.push(id(tweet));
						notifyWatchers(tweet);
					}
				},
				get = function () {
					return tweets;
				};

			return {
				watch: watch,
				get: get,
				contains: contains,
				add: add
			};
		},
		/* Creates a twitterSearcher stream, which emits newTweetEvents
		 * @param {String} search The search string
		 * @param {Object} newTweetEvent A jQuery event which will be fired for each new tweet.
		 * @returns A searcher object. You must call searcher.start() to begin receiving events.
		 */
		makeSearcher = function (search, newTweetEvent) {
			var tweets = new TweetCollection(),
				timer,
				uri = twitterSearch(search),
				doSearch,
				// handle tweets from twitter API; add them to tweets object
				updateTweets = function (data) {
					// update refresh_url to only pull down new search results
					uri = opts.twitterApi + data.refresh_url;
					if (typeof data.results !== 'undefined' && data.results.length > 0) {
						var i = data.results.length - 1;
						while (i >= 0) {
							tweets.add(data.results[i]);
							i--;
						}
					}

					// invoke this update function after rate miliseconds
					timer = setTimeout(doSearch, opts.rate);
				},
				start = function () {
					doSearch();
				},
				stop = function () {
					clearTimeout(timer);
				};

			doSearch = function (sinceId) {
				$.ajax({
					url: uri,
					success: updateTweets,
					dataType: 'jsonp'
				});
			};

			tweets.watch(function (tweets, latest) {
				newTweetEvent.tweets = tweets;
				newTweetEvent.latest = latest;
				$(document).trigger(newTweetEvent);
			});

			return {
				start: start,
				stop: stop
			};

		};

	return makeSearcher;
});