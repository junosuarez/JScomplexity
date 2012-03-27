/*jslint nomen: true */
/*globals define:true */
define([
	'underscore',
	'presenters',
	'text!templates/tweet.html',
	'prettydate'],
	function (_, isPresenter, template, prettydate) {
		var compiled = _.template(template),
			apply = function (tweet) {
				tweet.presenter = isPresenter(tweet.from_user);
				tweet.prettyDate = prettydate(tweet.created_at);
				return compiled(tweet);
			};

		return { apply: apply };
	});