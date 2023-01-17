
$(window).on('load', () => {
	console.log("привет")
	$('.js-example-responsive').select2({
		theme: "custom-theme",
		language: 'ru',
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
	});
	$('.js-example-responsive').select2({
		theme: "custom-theme",
		language: 'ru',
		minimumResultsForSearch: Infinity,
		// placeholder: 'Select an option'
	});
});

