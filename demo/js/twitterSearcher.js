/*jslint plusplus:true */
/*globals define, escape, document */
/*
define('twitterApi', [], function () {
	var dummyTweet = {

		refresh_url = 'x';
	};
	return {
		newSearch: function (a, b, cb) { return {
			setTimeout(function (){ cb()}, 1000);
		}; },
		refershSearch: function (a, cb) { return {}; }
	}
});
*/
define(['jquery', 'twitterApi'], function ($, twitterApi) {

	"use strict";

	var opts = {
			maxTweets: 50, // max tweets to request at a time
			rate: 30000	   // number of miliseconds between API calls.
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
		/* Creates a Searcher stream, which emits 'newTweet' events
		 * @param {string} search The search string
		 * @returns A searcher object. You must call searcher.start() to begin receiving events.
		 */
		Searcher = function (search) {
			var tweets = new TweetCollection(),
				timer,
				// handle tweets from twitter API; add them to tweets object
				updateTweets = function (data) {
					console.log('updateTweets ', data)
					if (typeof data.results !== 'undefined' && data.results.length > 0) {
						var i = data.results.length - 1;
						while (i >= 0) {
							tweets.add(data.results[i]);
							i--;
						}
					}

					// set a timer to refresh the search after an interval defined in opts.rate
					// the refreshSearch will callback to this same updateTweets function
					timer = setTimeout(function () {
						twitterApi.refreshSearch(data.refresh_url, updateTweets);
					}, opts.rate);
				},
				start = function () {
					twitterApi.newSearch(search, opts.maxTweets, updateTweets);
				},
				stop = function () {
					clearTimeout(timer);
				};


			tweets.watch(function (tweets, latest) {
				$(document).trigger('newTweet', [{tweets: tweets, latest: latest}]);
			});

			return {
				start: start,
				stop: stop
			};

		};

	return Searcher;
});