import $ from "jquery"
import "./../../../../node_modules/select2/dist/js/select2.min.js";

$(window).on('load', () => {
	console.log("привет")
	$('.js-example-responsive').select2({
		theme: "custom-theme",
		language: 'ru',
		minimumResultsForSearch: Infinity,
		// width: '100%',
		dropdownAutoWidth: true,
	});
	$('.periodSelect__date__value__years').select2({
		theme: "custom-theme",
		language: 'ru',
		minimumResultsForSearch: Infinity,
		// placeholder: 'Select an option'
	});
});

