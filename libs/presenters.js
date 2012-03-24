/*global define: true*/
define(['jquery'], function ($) {
	var presenters = [
		"@lejden",
		"@brettadler",
		"@richardcirerol",
		"@craigber",
		"@cwbrandsma",
		"@sftwear",
		"@mdclement",
		"@rdavidcohen",
		"@bossmojoman",
		"@jconti",
		"@ianfdavis",
		"@jasonleedean",
		"@jasonleedean",
		"@rj_dudley",
		"@jarodf",
		"@sqlCindy",
		"@adron",
		"@andrewhanson",
		"@andyharl",
		"@jimbohoffman",
		"@rhundhausen",
		"@inguanzo",
		"@mjconnection",
		"@alark",
		"@expandecommerce",
		"@brianlagunas",
		"@djdarkbeat",
		"@radjqueryninja",
		"@jacobsimeon",
		"@jen20",
		"@jpease",
		"@devinrader",
		"@kdawg02",
		"@jrcs3",
		"@seantimm",
		"@danielwatrous",
		"@mckhendry"
	],
	isPresenter = function (twitterName) {

		twitterName = twitterName.substring(0, 1) === '@' ? twitterName : '@' + twitterName;
		return $.inArray(twitterName.toLower(), presenters);
	};

	return isPresenter;
});