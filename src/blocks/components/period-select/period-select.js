
$(window).on('load', () => {
	$('.js-example-responsive').select2({
		theme: "custom-theme",
		language: 'ru',
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
	});
});

