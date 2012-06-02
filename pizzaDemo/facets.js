define(function () {
	var facets = {},
		list = [];

	return {
		list:function () {
			return list;
		},

		add:function (name, items) {
			facets[name] = items;
			list.push(name);
		},

		get:function (name) {
			if (facets.hasOwnProperty(name)) {
				return facets[name];
			} else {
				return [];
			}
			
		},

		contains:function (name, item) {
			if (!facets.hasOwnProperty(name)) {
				return false;
			}

			var facet = facets[name],
				len = facet.length,
				i = 0;

			for (i = 0; i < len; i++) {
				if (facet[i] === item) {
					return true;
				}
			}

			return false;
		}

	}

});