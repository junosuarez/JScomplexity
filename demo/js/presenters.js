/*global define: true*/
define(['underscore'], function (_) {
	var presenters = [
			"@lejden",
			"@avkashchauhan",
			"@richardcirerol",
			"@craigber",
			"@blowdart",
			"@nickfloyd",
			"@mdclement",
			"@amottaz",
			"@u2422",
			"@tedneward",
			"@cesar_pinera",
			"@manoagarwal",
			"@adron",
			"@edinor",
			"@pwojnaro",
			"@brucedkyle",
			"@adron",
			"@waltritscher",
			"@mckhendry"
		],
		isPresenter = function (twitterName) {
			twitterName = twitterName.substring(0, 1) === '@' ? twitterName : '@' + twitterName;
			return _.contains(presenters, twitterName.toLowerCase());
		};

		console.log("isPresenter");

	return isPresenter;
});