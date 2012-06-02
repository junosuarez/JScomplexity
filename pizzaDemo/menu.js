define(['jquery', 'ia', 'collection'], function ($, ia, Collection) {
	console.log('defining menu');

	var categories = new Collection(ia.Category),
		facets = new Collection(ia.Facet);

	categories.add({
		name: 'size',
		label: 'Size',
		prefix: 'z',
		chooseOne: true,
		required: true,
		items: [
			{name:'8"', price: 4},
			{name:'12"', price: 6},
			{name:'16"', price: 10}
		]
	})

	categories.add({
		name: 'crusts',
		label: 'Crust',
		prefix: 'x',
		chooseOne: true,
		required: true,
		items: [
				{name:"new york",price:2},
				{name:"sourdough",price:2},
				{name:"gluten free",price:2}
		]
	});

	categories.add({
		name: 'sauces',
		label: 'Sauce',
		prefix: 's',
		chooseOne: true,
		items: [
			{name:"pesto",price:2},
			{name:"tomato",price:1.5},
			{name:"olive oil",price:1}
		]
	});

	categories.add({
		name: 'cheeses',
		label: 'Cheeses',
		prefix: 'c',
		items: [
			{name:"mozzarella",price:1},
			{name:"brie",price:3},
			{name:"gouda",price:2},
			{name:"feta",price:2},
			{name:"daiya",price:1}
		]
	});

	categories.add({
		name: 'proteins',
		label: 'Proteins',
		prefix: 'p',
		items: [
			{name:"peperoni",price:1},
			{name:"bacon",price:1},
			{name:"tempeh",price:1},
			{name:"soyrizo",price:1}
		]
	});

	categories.add({
		name: 'veggies',
		label: 'Veggies',
		prefix: 'v',
		items: [
			{name:"tomatoes",price:1},
			{name:"olives",price:1},
			{name:"fresh basil",price:1},
			{name:"artichoke hearts",price:1},
			{name:"bell peppers",price:1},
			{name:"potatoes",price:1},
			{name:"mushrooms",price:1},
			{name:"pineapple",price:1}
		]
	});

	facets.add({ 
		name: 'vegan',
		label: 'Vegan',
		items: ['x1','x2','x3','s1','s2','s3','c5','p3','p4','v1','v2','v3','v4','v5','v6','v7','v8']
	});
	facets.add({
		name: 'vegetarian', 
		label: 'Vegetarian',
		items: ['x1','x2','x3','s1','s2','s3','c1','c2','c3','c4','c5','p3','p4','v1','v2','v3','v4','v5','v6','v7','v8']
	});
	facets.add({
		name: 'glutenfree',
		label: 'Gluten-free',
		items: ['x3','s1','s2','s3','c1','c2','c3','c4','c5','p1','p2','p4','v1','v2','v3','v4','v5','v6','v7','v8']
	});
	facets.add({
		name: 'macho',
		label: 'Macho',
		items: ['x1','s2','c1','p1','p2','v2','v6']
	});


	var getItemById = function (id) {
			var category = $.grep(categories, function (c) { return c.prefix === id.substr(0,1); })[0];
			console.log(category);
			return category.items[parseInt(id.substr(1))];
		};


	return {
		Facets: function () {
			return facets;
		},
		Categories: function () {
			return categories;
		},

		getItemById:getItemById

	};

});