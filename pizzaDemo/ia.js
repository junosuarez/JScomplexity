/*global define */
/* ia - defines some data types useful for Information Architecture and metadata*/
define(function () {

	return {
		Category: function (o) {
			this.name = o.name;
			this.label = o.label;
			this.prefix = o.prefix;
			this.chooseOne = o.chooseOne;
			this.items = o.items;
		},

		Facet: function (o) {
			var f = this;
			f.name = o.name;
			f.label = o.label;
			f.itemIDs = o.itemIDs;
			f.hasItem = function (itemID) {
				var has = false;
			};
		}
	};

});