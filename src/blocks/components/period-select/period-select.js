
$(window).on('load', () => {
	$('.js-example-responsive').select2({
		theme: "custom-theme",
		language: 'ru',
		// width: '100%',
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
	});
});

