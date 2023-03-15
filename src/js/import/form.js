$(window).on('load', () => {
	$('.js-example-form').select2({
		theme: "custom-theme",
		language: 'ru',
		width: '100%',
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
	});
});

