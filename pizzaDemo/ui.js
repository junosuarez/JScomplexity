/*global define */
define(['jquery', 'menu', 'orderViewModel'], function ($, menu, order) {

	$.reduce = function (arr, valueInitial, fnReduce) {
		$.each(arr, function (i, value) {
			valueInitial = fnReduce.apply(value, [valueInitial, i, value]);
		});
		return valueInitial;
	};

	var init = function () {

			initConfiguration();
			initFacets();
			initOrder();

			$('#categories>form input').on('change', function () {
				var prices = $.map($('#categories>form').serializeArray(), function (val) {
						return menu.getItemById(val.value).price;
					}),
					price = $.reduce(prices, 0, function (init, i, val) {
						return init + val;
					});

				order.subtotal.set(price);

			});

		},

		initConfiguration = function () {
			var $config = $('#categories'),
				html = '<form>';

			$.each(menu.Categories(), function (i, val) {
				html += getConfigGroupHtml(val);
			});

			html += '</form>';
			$config.html(html);

		},

		getConfigGroupHtml = function (cat) {
			var html = '';

			html += '<li class="category" >' + cat.label + '<ul data-category="' + cat.name + '">';

			$.each(cat.items, function (i, val) {
				var id = cat.prefix + i;
				html += '<li data-id="' + id + '">';
				if (cat.chooseOne) {
					html += '<input type="radio" name="' + cat.name + '" value="' + id + '" id="' + id + '" />';
				} else {
					html += '<input type="checkbox" value="' + id + '" id="' + id + '" name="' + cat.name + '"/>';
				}

				html += '<label for="' + id + '">' + val.name + '</label></li>';
			});

			html += '</ul></li>';

			return html;
		},

		initFacets = function () {
			var $facets = $('#facets'),
				html = '';

			html += '<ul id="facets">';

			$.each(menu.Facets(), function (i, val) {
				html += '<li><input type="checkbox" value="' + val.name + '" id="facet' + val.name + '" /><label for="facet' + val.name + '">' + val.label + '</label></li>';
			});

			html += '</ul>';

			$facets.html(html);

		},

		initOrder = function () {

			order.subtotal.watch(function (subtotal) {
				$('#subtotal').val(subtotal);
			});

			order.tax.watch(function (tax) {
				$('#tax').val(tax);
			});

			order.tip.watch(function (tip) {
				$('#tip').val(tip);
			});

			order.total.watch(function (total) {
				$('#total').val(total);
			});

			$('#tip').on('change', function () {
				order.tip.set(parseFloat($(this).val()));
			});

			$('#state').on('change', function () {
				order.state.set($(this).val());
			});

		};

	return {
		init: init
	};

});